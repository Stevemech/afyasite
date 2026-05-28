import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  LayoutDashboard,
  BookOpen,
  Map,
  User,
  ArrowDown,
} from 'lucide-react';
import { useScrollLock } from '../hooks/useScrollLock';

const steps = [
  {
    id: 'login',
    icon: Lock,
    title: 'Login',
    content:
      'Secure authentication for individual CHV accounts with personalized progress tracking.',
    screenshot: '/walkthrough/login.png',
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'Dashboard',
    content:
      'Daily to-do list, assignment overview, household visit scheduler, daily review questions, and end-of-day reporting.',
    screenshot: '/walkthrough/dashboard.png',
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'Learning Modules',
    content:
      'Digestible modules with embedded videos, comprehension quizzes, an AI chatbot for quick health questions, and a progress tracking system.',
    screenshot: '/walkthrough/learning modules.png',
  },
  {
    id: 'map',
    icon: Map,
    title: 'Map Interface',
    content:
      'Geographic visualization of client locations and nearby hospitals, with color-coded legends and filterable tabs by client type.',
    screenshot: '/walkthrough/map functionality, stops.png',
  },
  {
    id: 'profile',
    icon: User,
    title: 'Profile & Analytics',
    content:
      'Performance statistics, achievement badges, historical reports archive, dark mode, and a weekly reflection journal.',
    screenshot: '/walkthrough/profile.png',
  },
];

const EASE = [0.22, 1, 0.36, 1];

const Walkthrough = () => {
  const totalSteps = steps.length;
  const { sectionRef, isLocked, activeStep, setActiveStep } =
    useScrollLock(totalSteps);

  const ActiveIcon = steps[activeStep].icon;
  const progress = ((activeStep + 1) / totalSteps) * 100;

  return (
    <section
      id="walkthrough"
      ref={sectionRef}
      className="relative bg-white lg:h-screen"
    >
      <div
        className={`${
          isLocked
            ? 'fixed inset-0 z-40'
            : 'relative lg:absolute lg:inset-0 z-20'
        } flex flex-col bg-gradient-to-br from-white via-brand-surface/40 to-white overflow-hidden`}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-teal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-brand-gold/10 blur-3xl"
        />

        {/* Header */}
        <div className="relative px-6 sm:px-8 lg:px-16 pt-24 lg:pt-28 pb-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <span className="inline-block text-brand-teal text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-2">
                Walkthrough
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-teal-dark leading-[1.05]">
                How AfyaQuest works
              </h2>
            </div>
            <div className="flex items-baseline gap-3 md:gap-5 font-mono text-brand-teal-dark">
              <span className="text-4xl md:text-5xl font-bold tabular-nums">
                {String(activeStep + 1).padStart(2, '0')}
              </span>
              <span className="text-base md:text-lg text-gray-400 tabular-nums">
                / {String(totalSteps).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-6 h-[3px] rounded-full bg-brand-teal-dark/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-dark"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.55, ease: EASE }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex-1 min-h-0 px-6 sm:px-8 lg:px-16 pb-6">
          <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">
            {/* Sidebar */}
            <nav
              aria-label="Walkthrough steps"
              className="lg:w-[300px] shrink-0"
            >
              <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-2 px-2 lg:mx-0 lg:px-0 snap-x lg:snap-none">
                {steps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const StepIcon = step.icon;
                  return (
                    <li
                      key={step.id}
                      className="snap-start shrink-0 lg:shrink"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        aria-current={isActive ? 'step' : undefined}
                        className={`relative w-full flex items-center gap-3 lg:gap-4 px-3 lg:px-4 py-2.5 lg:py-3 rounded-2xl text-left transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-brand-teal-dark/70 hover:text-brand-teal-dark'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="walkthrough-step-bg"
                            className="absolute inset-0 rounded-2xl bg-brand-teal-dark shadow-lg shadow-brand-teal-dark/20"
                            transition={{ duration: 0.5, ease: EASE }}
                          />
                        )}
                        <span
                          className={`relative z-10 w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            isActive
                              ? 'bg-white text-brand-teal-dark'
                              : 'bg-brand-teal-dark/5 text-brand-teal-dark/60'
                          }`}
                        >
                          <StepIcon size={18} strokeWidth={2.25} />
                        </span>
                        <span className="relative z-10 flex flex-col items-start min-w-0">
                          <span
                            className={`text-[10px] lg:text-[11px] font-semibold tracking-[0.18em] uppercase ${
                              isActive
                                ? 'text-white/70'
                                : 'text-brand-teal-dark/50'
                            }`}
                          >
                            Step {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-bold text-sm lg:text-base leading-tight whitespace-nowrap lg:whitespace-normal">
                            {step.title}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right panel: text + phone */}
            <div className="flex-1 min-w-0 flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
              {/* Text */}
              <div className="flex-1 min-w-0 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeStep}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="w-full"
                  >
                    <div className="flex items-center gap-3 mb-4 lg:mb-5">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-brand-teal-dark text-white flex items-center justify-center shadow-md shadow-brand-teal-dark/20 shrink-0">
                        <ActiveIcon size={22} strokeWidth={2.25} />
                      </div>
                      <span className="text-xs lg:text-sm font-bold tracking-[0.22em] uppercase text-brand-teal">
                        Step {String(activeStep + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-brand-teal-dark leading-[1.05] mb-4 lg:mb-5">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium max-w-xl">
                      {steps[activeStep].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phone frame */}
              <div className="flex items-center justify-center md:justify-end shrink-0">
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-brand-teal/15 via-transparent to-brand-gold/10 blur-2xl"
                  />
                  <div className="relative h-[52vh] max-h-[500px] min-h-[300px] aspect-[838/1866] rounded-[2.4rem] bg-brand-teal-dark p-[6px] shadow-2xl shadow-brand-teal-dark/25">
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-2 -translate-x-1/2 h-1 w-12 rounded-full bg-white/15 z-10"
                    />
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`img-${activeStep}`}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          src={steps[activeStep].screenshot}
                          alt={`AfyaQuest ${steps[activeStep].title} screen`}
                          draggable={false}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hint (desktop only) */}
        <div className="relative px-6 sm:px-8 lg:px-16 pb-5 lg:pb-7 hidden lg:block">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-brand-teal-dark/50 text-sm">
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-brand-teal-dark/20 bg-white/70 backdrop-blur"
            >
              <ArrowDown size={13} strokeWidth={2.5} />
            </motion.span>
            <span className="font-medium tracking-wide">
              Scroll to navigate ·{' '}
              <kbd className="px-1.5 py-0.5 rounded border border-brand-teal-dark/15 bg-white/70 text-[11px] font-mono">
                ↑↓
              </kbd>{' '}
              arrow keys
              {isLocked && (
                <>
                  {' '}·{' '}
                  <kbd className="px-1.5 py-0.5 rounded border border-brand-teal-dark/15 bg-white/70 text-[11px] font-mono">
                    Esc
                  </kbd>{' '}
                  to exit
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
