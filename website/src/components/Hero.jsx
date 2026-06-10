import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/hero/hero-01.jpg',
  '/hero/hero-02.jpg',
  '/hero/hero-03.jpg',
  '/hero/hero-04.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-16 md:pt-32 md:pb-16 overflow-hidden bg-brand-teal-dark">
      <AnimatePresence>
        <motion.img
          key={current}
          src={heroImages[current]}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />

      <div className="absolute top-16 right-[8%] w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-24 left-[5%] w-52 h-52 md:w-64 md:h-64 rounded-full border border-white/15 hidden lg:block" />

      <div className="max-w-7xl mx-auto text-center z-10 relative w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] font-display font-extrabold text-white leading-[0.95] tracking-tight mb-10 md:mb-12 drop-shadow-2xl"
        >
          AfyaQuest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-[2.25rem] text-white/90 font-medium mb-12 md:mb-16 max-w-4xl mx-auto leading-snug md:leading-normal drop-shadow-lg"
        >
          Supporting community health workers through learning, care, and follow-through
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center"
        >
          <a
            href="#solution"
            className="group flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-white px-12 md:px-14 py-5 md:py-6 rounded-full text-xl md:text-2xl font-semibold transition-all duration-300 shadow-xl shadow-black/35 hover:shadow-2xl hover:shadow-black/45 min-w-[14rem] justify-center"
          >
            <Play size={26} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            Watch Demo
          </a>
          <a
            href="#problem"
            className="group flex items-center gap-3 text-white border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-12 md:px-14 py-5 md:py-6 rounded-full text-xl md:text-2xl font-semibold transition-all duration-300 shadow-md shadow-black/20 hover:shadow-lg min-w-[14rem] justify-center"
          >
            Learn More
            <ArrowRight size={26} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
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
