import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ backgroundImage: 'radial-gradient(#5F9EA0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-20 h-20 bg-brand-gold/20 rounded-full blur-xl hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-brand-teal/20 rounded-full blur-xl hidden md:block"
      />

      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/20 text-brand-gold-dark text-sm font-semibold mb-6 border border-brand-gold/30">
            Social Impact Track
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-teal-dark mb-6 leading-tight tracking-tight">
            AfyaQuest: Transforming <br className="hidden md:block"/> Community Healthcare <br className="hidden md:block"/> Training in <span className="text-brand-teal bg-brand-teal/10 px-2 rounded-lg inline-block transform -rotate-1">Rural Kenya</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
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
