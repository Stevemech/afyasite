import { useRef, useEffect, useCallback, useState } from 'react';

const WHEEL_STEP_THRESHOLD = 90;
const STEP_COOLDOWN_MS = 380;
const RELOCK_COOLDOWN_MS = 700;
const TOUCH_THRESHOLD_PX = 45;

const isCoarsePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(pointer: coarse)').matches;

/**
 * Locks the page when a section comes into view and turns wheel/key/touch
 * input into discrete step changes. Lock activates on crossing the section's
 * top through the viewport top (direction-aware) and releases when the user
 * scrolls past the last or before the first step.
 */
export function useScrollLock(totalSteps) {
  const sectionRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [activeStep, setActiveStepState] = useState(0);

  const isLockedRef = useRef(false);
  const activeStepRef = useRef(0);
  const lastScrollY = useRef(0);
  const prevRectTop = useRef(null);
  const wheelAccumulator = useRef(0);
  const lastStepTime = useRef(0);
  const cooldownUntil = useRef(0);
  const lockDisabled = useRef(false);

  const setActiveStep = useCallback((step) => {
    const clamped = Math.max(0, Math.min(step, totalSteps - 1));
    activeStepRef.current = clamped;
    setActiveStepState(clamped);
  }, [totalSteps]);

  const applyBodyLock = useCallback(() => {
    const scrollbarGutter =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    if (scrollbarGutter > 0) {
      document.body.style.paddingRight = `${scrollbarGutter}px`;
    }
  }, []);

  const releaseBodyLock = useCallback(() => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  const lock = useCallback(
    (startStep) => {
      if (isLockedRef.current || lockDisabled.current) return;
      const el = sectionRef.current;
      if (!el) return;

      isLockedRef.current = true;
      wheelAccumulator.current = 0;
      lastStepTime.current = Date.now();

      window.scrollTo({ top: el.offsetTop, behavior: 'instant' });
      applyBodyLock();

      setActiveStep(startStep);
      setIsLocked(true);

      lastScrollY.current = window.scrollY;
      prevRectTop.current = 0;
    },
    [applyBodyLock, setActiveStep],
  );

  const unlock = useCallback(
    (direction) => {
      if (!isLockedRef.current) return;
      const el = sectionRef.current;

      isLockedRef.current = false;
      cooldownUntil.current = Date.now() + RELOCK_COOLDOWN_MS;

      releaseBodyLock();
      setIsLocked(false);

      if (!el) return;

      const target =
        direction === 'down'
          ? el.offsetTop + el.offsetHeight + 1
          : Math.max(0, el.offsetTop - window.innerHeight - 1);

      window.scrollTo({ top: target, behavior: 'instant' });
      lastScrollY.current = window.scrollY;
      prevRectTop.current = el.getBoundingClientRect().top;
    },
    [releaseBodyLock],
  );

  // Direction-aware lock trigger: detect crossing of section top through viewport top.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    lockDisabled.current = isCoarsePointer();

    lastScrollY.current = window.scrollY;
    prevRectTop.current = el.getBoundingClientRect().top;

    const handleScroll = () => {
      if (isLockedRef.current) return;
      const now = Date.now();
      if (now < cooldownUntil.current) {
        lastScrollY.current = window.scrollY;
        prevRectTop.current = el.getBoundingClientRect().top;
        return;
      }
      if (lockDisabled.current) return;

      const currentY = window.scrollY;
      const dir =
        currentY > lastScrollY.current
          ? 'down'
          : currentY < lastScrollY.current
            ? 'up'
            : null;
      lastScrollY.current = currentY;
      if (!dir) return;

      const rect = el.getBoundingClientRect();
      const prev = prevRectTop.current ?? rect.top;
      prevRectTop.current = rect.top;

      // Lock when the section's top crosses viewport top (rect.top === 0).
      // Direction tells us where the user came from, so we start at the
      // correct end of the walkthrough.
      if (dir === 'down' && prev > 0 && rect.top <= 0) {
        lock(0);
      } else if (dir === 'up' && prev < 0 && rect.top >= 0) {
        lock(totalSteps - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lock, totalSteps]);

  // Input handling while locked.
  useEffect(() => {
    if (!isLocked) return;

    const tryStep = (direction) => {
      const now = Date.now();
      if (now - lastStepTime.current < STEP_COOLDOWN_MS) return;

      const current = activeStepRef.current;
      if (direction === 'next') {
        if (current >= totalSteps - 1) {
          unlock('down');
          return;
        }
        setActiveStep(current + 1);
      } else {
        if (current <= 0) {
          unlock('up');
          return;
        }
        setActiveStep(current - 1);
      }
      lastStepTime.current = now;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      wheelAccumulator.current += e.deltaY;

      if (wheelAccumulator.current > WHEEL_STEP_THRESHOLD) {
        wheelAccumulator.current = 0;
        tryStep('next');
      } else if (wheelAccumulator.current < -WHEEL_STEP_THRESHOLD) {
        wheelAccumulator.current = 0;
        tryStep('prev');
      }
    };

    let touchStartY = 0;
    let touchAccumulator = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchAccumulator = 0;
    };
    const handleTouchMove = (e) => {
      e.preventDefault();
      touchAccumulator = touchStartY - e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
      if (touchAccumulator > TOUCH_THRESHOLD_PX) {
        tryStep('next');
      } else if (touchAccumulator < -TOUCH_THRESHOLD_PX) {
        tryStep('prev');
      }
      touchAccumulator = 0;
    };

    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        tryStep('next');
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        tryStep('prev');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        unlock('down');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isLocked, totalSteps, setActiveStep, unlock]);

  useEffect(() => releaseBodyLock, [releaseBodyLock]);

  return {
    sectionRef,
    isLocked,
    activeStep,
    setActiveStep,
    unlock,
  };
}
