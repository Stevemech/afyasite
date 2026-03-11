import React from 'react';
import { Heart, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const impacts = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Better Health Outcomes',
    desc: 'Early disease trend detection and life-saving interventions through timely data.',
    accent: 'from-brand-gold/20 to-brand-gold/5',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Data Capabilities',
    desc: 'Robust documentation and analytics empowering health leaders with real-time insights.',
    accent: 'from-brand-teal-light/20 to-brand-teal-light/5',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Outbreak Response',
    desc: 'Strengthened response capabilities for outbreaks like Ebola and cholera.',
    accent: 'from-brand-gold/20 to-brand-gold/5',
  },
];

const Impact = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal-dark via-brand-teal-dark to-[#1a3a3a]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L60 30L30 60L0 30z\' fill=\'none\' stroke=\'%23B2E8F1\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brand-gold text-sm font-semibold tracking-wider uppercase mb-4">Impact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-5">
            Real-world impact
          </h2>
          <p className="text-lg md:text-xl text-brand-teal-light/50 max-w-2xl mx-auto leading-relaxed">
            Building a stronger foundation for rural healthcare systems across Kenya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-white/[0.06] backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-brand-teal-light/50 leading-relaxed group-hover:text-brand-teal-light/70 transition-colors">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
