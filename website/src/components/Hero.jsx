import React from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-24 md:pt-32 md:pb-28 overflow-hidden bg-brand-teal-dark">
      <img
        src="/visits/guatemala/guatemala-07.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />

      <div className="absolute top-16 right-[8%] w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-24 left-[5%] w-52 h-52 md:w-64 md:h-64 rounded-full border border-white/15 hidden lg:block" />

      <div className="max-w-6xl mx-auto text-center z-10 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={logoImg}
            alt="AfyaQuest"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-12 md:mb-14 rounded-full object-cover shadow-2xl shadow-black/40 ring-4 ring-white/15"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3.25rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem] xl:text-[7rem] font-display font-extrabold text-white leading-[0.98] tracking-tight mb-10 md:mb-12 drop-shadow-2xl"
        >
          AfyaQuest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-[1.65rem] text-white/90 font-medium mb-12 md:mb-14 max-w-3xl mx-auto leading-snug md:leading-normal drop-shadow-lg"
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
            href="#solution"
            className="group flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-white px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full text-lg font-semibold transition-all duration-300 shadow-xl shadow-black/35 hover:shadow-2xl hover:shadow-black/45 min-w-[12rem] justify-center"
          >
            <Play size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            Watch Demo
          </a>
          <a
            href="#problem"
            className="group flex items-center gap-3 text-white border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full text-lg font-semibold transition-all duration-300 shadow-md shadow-black/20 hover:shadow-lg min-w-[12rem] justify-center"
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
          <ChevronDown size={28} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
