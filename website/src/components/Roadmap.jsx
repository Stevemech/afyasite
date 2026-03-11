import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Globe, Database, BarChart2 } from 'lucide-react';

const items = [
  {
    icon: <Wifi size={20} />,
    title: 'Offline AI',
    desc: 'AI capabilities for areas with limited connectivity.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Multi-Language',
    desc: 'Support for broader accessibility across regions.',
  },
  {
    icon: <Database size={20} />,
    title: 'System Integration',
    desc: 'Connect with local health systems and government databases.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Advanced Analytics',
    desc: 'Expanded reporting and data visualization features.',
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Roadmap</span>
          <h2 className="section-heading text-brand-teal-dark">What's next</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex items-start gap-5 bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-400">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-teal-dark mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
