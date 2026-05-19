import React from 'react';
import { Clock, BookOpen, Activity, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Inefficient Training',
    desc: 'Six-hour lecture blocks over two weeks lead to poor knowledge retention and engagement.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Inconsistent Skills',
    desc: 'Lack of standardized practical training results in varying levels of care quality.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'No Data Collection',
    desc: 'Absence of real-time field data makes tracking health outcomes impossible.',
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-teal-dark" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(rgba(178,232,241,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-white text-sm font-semibold tracking-wider uppercase mb-4">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight mb-6">
              Community health workers need better tools
            </h2>

            <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl p-5 mb-10">
              <AlertTriangle className="text-whitalsoe shrink-0 mt-0.5" size={22} />
              <p className="text-white text-[15px] leading-relaxed font-medium">
                CHVs are unpaid first responders — the EMT-equivalent serving communities with minimal support.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal-light shrink-0 group-hover:bg-white/15 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-brand-teal-light/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-10 md:p-12">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-brand-teal-light/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-teal-light/10 rounded-full blur-2xl" />

              <div className="relative space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                  <p className="font-display font-bold text-white/40 line-through text-xl mb-1">Traditional Lectures</p>
                  <p className="text-brand-teal-light/40 text-sm">Passive &middot; Long &middot; Boring</p>
                </div>

                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                      <path d="M6 1v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-teal to-brand-teal-mid rounded-2xl p-6 border border-brand-teal-light/20 shadow-xl shadow-brand-teal/20 hover:-translate-y-1 transition-transform duration-300">
                  <p className="font-display font-bold text-white text-xl mb-1">Interactive Gamification</p>
                  <p className="text-brand-teal-light text-sm">Active &middot; Bite-sized &middot; Fun</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
