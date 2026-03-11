import React from 'react';
import { Target, Smartphone, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: <Target className="w-7 h-7" />,
    num: '01',
    title: 'Interactive Learning',
    desc: 'Gamified micro-learning modules tailored for maximum retention through daily quizzes, short videos, and progress rewards.',
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    num: '02',
    title: 'Accessible Platform',
    desc: 'Mobile-first design that works on low-end devices with intermittent connectivity — accessible from anywhere.',
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    num: '03',
    title: 'Data-Driven Insights',
    desc: 'Real-time reporting and analytics dashboards that empower health leaders to make evidence-based decisions.',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Our Approach</span>
          <h2 className="section-heading text-brand-teal-dark mb-5">
            Three pillars of impact
          </h2>
          <p className="section-subheading">
            We bridge the gap with bite-sized, engaging learning experiences and powerful tools built for the field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-brand-surface rounded-3xl p-8 lg:p-10 border border-brand-teal/10 hover:border-brand-teal/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1"
            >
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10 font-display text-6xl font-extrabold text-brand-teal-dark/[0.06] leading-none select-none">
                {pillar.num}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-brand-teal-dark text-white flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-all duration-500">
                {pillar.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-brand-teal-dark mb-3">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>

              <div className="mt-6 h-[3px] w-8 rounded-full bg-brand-gold group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
