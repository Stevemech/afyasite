import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, LayoutDashboard, BookOpen, Map, User } from 'lucide-react';

const Walkthrough = () => {
  const steps = [
    {
      id: 'login',
      icon: <Lock />,
      title: 'Login',
      content: 'Secure authentication for individual CHV accounts with personalized progress tracking.'
    },
    {
      id: 'dashboard',
      icon: <LayoutDashboard />,
      title: 'Dashboard',
      content: 'Daily to-do list, assignment overview, household visit scheduler, daily review questions, end-of-day reporting.'
    },
    {
      id: 'learning',
      icon: <BookOpen />,
      title: 'Learning Modules',
      content: 'Structured content broken into digestible modules with embedded videos and comprehension quizzes, AI chatbot for quick reference and health questions, progress tracking system.'
    },
    {
      id: 'map',
      icon: <Map />,
      title: 'Map Interface',
      content: 'Geographic visualization of client locations and nearby hospitals, color-coded system with legend, filterable tabs by client type.'
    },
    {
      id: 'profile',
      icon: <User />,
      title: 'Profile & Analytics',
      content: 'Personal information and performance statistics, achievement badges for motivation, historical daily reports archive for trend analysis, customizable settings including dark mode, weekly reflection journal for documenting experiences.'
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-teal-dark mb-4">How It Works</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation */}
          <div className="md:w-1/3 flex flex-col gap-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                  activeStep === idx 
                    ? 'bg-brand-teal text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={activeStep === idx ? 'text-brand-gold' : 'text-gray-400'}>
                  {step.icon}
                </div>
                <span className="font-semibold">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="md:w-2/3 bg-white rounded-2xl shadow-xl p-8 min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold-dark rounded-full flex items-center justify-center mb-6">
                  {steps[activeStep].icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-teal-dark mb-4">{steps[activeStep].title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {steps[activeStep].content}
                </p>
                
                {/* Placeholder for screenshot */}
                <div className="mt-8 bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                  App Screenshot: {steps[activeStep].title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
