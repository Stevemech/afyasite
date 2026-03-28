import React from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-24 md:pt-32 md:pb-28 overflow-hidden bg-brand-surface">
      <div className="absolute top-16 right-[8%] w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border border-brand-teal/10 hidden lg:block" />
      <div className="absolute bottom-24 left-[5%] w-52 h-52 md:w-64 md:h-64 rounded-full border border-brand-gold/20 hidden lg:block" />

      <div className="max-w-6xl mx-auto text-center z-10 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={logoImg}
            alt="AfyaQuest"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-12 md:mb-14 rounded-full object-cover shadow-lg shadow-brand-teal-dark/10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3.25rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem] xl:text-[7rem] font-display font-extrabold text-brand-teal-dark leading-[0.98] tracking-tight mb-10 md:mb-12"
        >
          AfyaQuest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-[1.65rem] text-gray-600 font-medium mb-12 md:mb-14 max-w-3xl mx-auto leading-snug md:leading-normal"
        >
          Supporting community health workers through learning, care, and follow-through
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center"
        >
          <a
            href="/#solution"
            className="group flex items-center gap-3 bg-brand-teal-dark hover:bg-brand-teal text-white px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full text-lg font-semibold transition-all duration-300 shadow-xl shadow-brand-teal-dark/25 hover:shadow-2xl hover:shadow-brand-teal-dark/30 min-w-[12rem] justify-center"
          >
            <Play size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            Watch Demo
          </a>
          <a
            href="/#problem"
            className="group flex items-center gap-3 text-brand-teal-dark border-2 border-brand-teal-dark/25 hover:border-brand-teal-dark bg-white px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full text-lg font-semibold transition-all duration-300 shadow-md shadow-brand-teal-dark/5 hover:shadow-lg min-w-[12rem] justify-center"
          >
            Learn More
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-brand-teal-dark/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
