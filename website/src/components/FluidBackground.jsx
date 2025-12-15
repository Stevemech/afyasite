import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-brand-surface via-white to-brand-surface">
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] rounded-[40%] bg-gradient-to-r from-brand-teal-light/40 to-brand-teal/30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 -right-1/4 w-[150%] h-[150%] rounded-[45%] bg-gradient-to-l from-brand-gold-light/30 to-brand-teal-light/30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            y: [-20, 20, -20],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-full h-full rounded-[50%] bg-gradient-to-t from-brand-teal-light/20 to-transparent blur-3xl"
        />
      </div>
    </div>
  );
};

export default FluidBackground;
