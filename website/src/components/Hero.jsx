import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold-dark text-sm font-semibold mb-6">
            Social Impact Track
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-teal-dark mb-6 leading-tight">
            AfyaQuest: Transforming Community Healthcare Training in <span className="text-brand-teal">Rural Kenya</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Gamified learning platform empowering Community Health Volunteers through interactive training and data-driven healthcare delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Play size={20} fill="currentColor" /> Watch Demo Video
            </button>
            <button className="flex items-center gap-2 bg-white text-brand-teal-dark border-2 border-brand-teal/20 hover:border-brand-teal px-8 py-3 rounded-full font-semibold transition-all">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
