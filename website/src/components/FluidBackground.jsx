import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-brand-surface" />

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-1/3 -left-1/4 w-[80%] h-[80%] rounded-full animate-pulse-soft"
        style={{ background: 'radial-gradient(circle, rgba(178,232,241,0.35) 0%, transparent 70%)' }}
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/2 -right-1/4 w-[70%] h-[70%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(239,160,63,0.12) 0%, transparent 70%)' }}
      />

      <motion.div
        animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 w-[60%] h-[60%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(95,159,159,0.2) 0%, transparent 70%)' }}
      />
    </div>
  );
};

export default FluidBackground;
