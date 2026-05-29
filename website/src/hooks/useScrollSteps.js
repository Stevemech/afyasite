import { useRef, useEffect, useState, useCallback } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';

/**
 * Scroll-driven stepper for a pinned section.
 *
 * The section is rendered as a tall "track" whose child is `position: sticky`,
 * so the panel pins to the viewport via native CSS while the track scrolls past
 * underneath. We never touch the scroll — we only read progress through the
 * track and map it to a step index, so the motion stays as smooth as the
 * browser's own scrolling (no body lock, no wheel hijacking, no snap).
 *
 * On touch / small screens the track collapses to normal flow and steps are
 * driven purely by tapping (`selectStep`).
 */
export function useScrollSteps(totalSteps) {
  const trackRef = useRef(null);
  const [activeStep, setActiveStepState] = useState(0);
  const activeStepRef = useRef(0);

  const setActiveStep = useCallback(
    (step) => {
      const clamped = Math.max(0, Math.min(step, totalSteps - 1));
      if (clamped === activeStepRef.current) return;
      activeStepRef.current = clamped;
      setActiveStepState(clamped);
    },
    [totalSteps],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const mq = window.matchMedia(DESKTOP_QUERY);
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mq.matches) return;
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.min(
        Math.max(-track.getBoundingClientRect().top, 0),
        scrollable,
      );
      setActiveStep(Math.floor((scrolled / scrollable) * totalSteps));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [totalSteps, setActiveStep]);

  // Jump to a step. On desktop, smooth-scroll to the middle of that step's
  // segment so the scroll listener settles on it; on mobile just set it.
  const selectStep = useCallback(
    (idx) => {
      const track = trackRef.current;
      const isDesktop =
        typeof window !== 'undefined' &&
        window.matchMedia(DESKTOP_QUERY).matches;

      if (track && isDesktop) {
        const scrollable = track.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          const segment = scrollable / totalSteps;
          const trackTop = window.scrollY + track.getBoundingClientRect().top;
          window.scrollTo({
            top: trackTop + segment * (idx + 0.5),
            behavior: 'smooth',
          });
          return;
        }
      }
      setActiveStep(idx);
    },
    [totalSteps, setActiveStep],
  );

  return { trackRef, activeStep, selectStep };
}
