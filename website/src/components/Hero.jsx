import React from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-20 overflow-hidden">
      <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border border-brand-teal-light/20 hidden lg:block" />
      <div className="absolute bottom-32 left-[8%] w-40 h-40 rounded-full border border-brand-gold/15 hidden lg:block" />
      <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-brand-gold/40 hidden lg:block" />
      <div className="absolute bottom-1/4 right-[12%] w-2 h-2 rounded-full bg-brand-teal/40 hidden lg:block" />

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-24 h-24 bg-brand-teal-light/15 rounded-full blur-2xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[8%] w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl hidden md:block"
      />

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={logoImg}
            alt="AfyaQuest"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-brand-teal-dark/5 text-brand-teal-dark text-sm font-semibold mb-8 border border-brand-teal-dark/10">
            Social Impact Track
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.75rem] md:text-[4.25rem] lg:text-[5rem] font-display font-extrabold text-brand-teal-dark leading-[1.05] tracking-tight mb-8"
        >
          Transforming Community{' '}
          <br className="hidden md:block" />
          Healthcare Training in{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Rural Kenya</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[0.35em] bg-brand-gold/30 -z-0 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A gamified learning platform empowering Community Health Volunteers
          through interactive training and data-driven healthcare delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#solution"
            className="group flex items-center gap-2.5 bg-brand-teal-dark hover:bg-brand-teal text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-teal-dark/20 hover:shadow-xl hover:shadow-brand-teal/20"
          >
            <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            Watch Demo
          </a>
          <a
            href="#problem"
            className="group flex items-center gap-2 text-brand-teal-dark border-2 border-brand-teal-dark/15 hover:border-brand-teal-dark/40 bg-white/60 backdrop-blur-sm px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
          >
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
          <ChevronDown size={24} className="text-brand-teal-dark/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
