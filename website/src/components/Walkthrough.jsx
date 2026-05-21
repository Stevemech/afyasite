import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, LayoutDashboard, BookOpen, Map, User } from 'lucide-react';

const steps = [
  {
    id: 'login',
    icon: <Lock size={20} />,
    title: 'Login',
    content: 'Secure authentication for individual CHV accounts with personalized progress tracking.',
    screenshot: '/walkthrough/login.png',
  },
  {
    id: 'dashboard',
    icon: <LayoutDashboard size={20} />,
    title: 'Dashboard',
    content: 'Daily to-do list, assignment overview, household visit scheduler, daily review questions, and end-of-day reporting.',
    screenshot: '/walkthrough/dashboard.png',
  },
  {
    id: 'learning',
    icon: <BookOpen size={20} />,
    title: 'Learning Modules',
    content: 'Digestible modules with embedded videos, comprehension quizzes, an AI chatbot for quick health questions, and a progress tracking system.',
    screenshot: '/walkthrough/learning modules.png',
  },
  {
    id: 'map',
    icon: <Map size={20} />,
    title: 'Map Interface',
    content: 'Geographic visualization of client locations and nearby hospitals, with color-coded legends and filterable tabs by client type.',
    screenshot: '/walkthrough/map functionality, stops.png',
  },
  {
    id: 'profile',
    icon: <User size={20} />,
    title: 'Profile & Analytics',
    content: 'Performance statistics, achievement badges, historical reports archive, dark mode, and a weekly reflection journal.',
    screenshot: '/walkthrough/profile.png',
  },
];

const Walkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Walkthrough</span>
          <h2 className="section-heading text-brand-teal-dark">How it works</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-[320px] shrink-0">
            <div className="relative flex flex-col gap-1">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                    activeStep === idx
                      ? 'bg-brand-teal-dark text-white shadow-lg'
                      : 'text-gray-600 hover:bg-brand-surface hover:text-brand-teal-dark'
                  }`}
                >
                  <div className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    activeStep === idx ? 'bg-white text-brand-teal-dark' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="font-semibold text-[15px]">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="bg-brand-surface rounded-3xl border border-brand-teal/10 p-8 md:p-12 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal-dark text-white flex items-center justify-center">
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Step {activeStep + 1} of {steps.length}</p>
                      <h3 className="text-2xl font-display font-bold text-brand-teal-dark">{steps[activeStep].title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {steps[activeStep].content}
                  </p>

                  <div className="mt-auto bg-white rounded-2xl aspect-video overflow-hidden border border-brand-teal/10 shadow-sm">
                    <img
                      src={steps[activeStep].screenshot}
                      alt={`AfyaQuest ${steps[activeStep].title} screen`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
