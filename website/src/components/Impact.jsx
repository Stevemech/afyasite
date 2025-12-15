import React from 'react';
import { Heart, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Impact = () => {
  return (
    <section className="py-20 px-4 bg-brand-teal text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Real-World Impact</h2>
          <p className="text-brand-teal-light text-lg">Building a stronger foundation for rural healthcare systems.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <Heart className="w-12 h-12 text-brand-gold mb-6" />
            <h3 className="text-xl font-bold mb-4">Better Health Outcomes</h3>
            <p className="text-brand-teal-light">Early disease trend detection and life-saving interventions through timely data.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <Activity className="w-12 h-12 text-brand-gold mb-6" />
            <h3 className="text-xl font-bold mb-4">Data Capabilities</h3>
            <p className="text-brand-teal-light">Robust documentation and analytics system empowering health leaders.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <Shield className="w-12 h-12 text-brand-gold mb-6" />
            <h3 className="text-xl font-bold mb-4">Outbreak Response</h3>
            <p className="text-brand-teal-light">Strengthened response capabilities for outbreaks like Ebola and cholera.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
