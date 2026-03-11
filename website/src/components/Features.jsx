import React from 'react';
import { Award, Map, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Gamified Micro-Learning',
    desc: 'Daily quizzes, short videos, and progress tracking for continuous professional development.',
    span: 'md:col-span-2 md:row-span-2',
    bg: 'bg-gradient-to-br from-brand-teal-dark to-brand-teal',
    text: 'text-white',
    descColor: 'text-brand-teal-light/70',
    iconBg: 'bg-white/15 text-white',
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Interactive Map',
    desc: 'Visual workflow showing visited households and nearby health facilities.',
    span: '',
    bg: 'bg-white',
    text: 'text-brand-teal-dark',
    descColor: 'text-gray-500',
    iconBg: 'bg-brand-teal-dark/5 text-brand-teal-dark',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Smart Reporting',
    desc: 'Automated daily reports and weekly feedback loops.',
    span: '',
    bg: 'bg-white',
    text: 'text-brand-teal-dark',
    descColor: 'text-gray-500',
    iconBg: 'bg-brand-teal-dark/5 text-brand-teal-dark',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'AI Medical Assistant',
    desc: 'On-scene guidance for complex medical scenarios using a localized AI chatbot trained on health protocols.',
    span: 'md:col-span-2',
    bg: 'bg-gradient-to-r from-brand-gold to-brand-gold-dark',
    text: 'text-white',
    descColor: 'text-white/70',
    iconBg: 'bg-white/20 text-white',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Features</span>
          <h2 className="section-heading text-brand-teal-dark mb-5">
            Powering community health
          </h2>
          <p className="section-subheading">
            A comprehensive suite of tools supporting CHVs in their daily workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`${f.span} ${f.bg} rounded-3xl p-8 lg:p-10 border border-white/10 group hover:shadow-2xl hover:shadow-brand-teal-dark/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
              />
              <div className={`relative z-10 w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className={`relative z-10 font-display font-bold text-xl lg:text-2xl mb-3 ${f.text}`}>{f.title}</h3>
              <p className={`relative z-10 ${f.descColor} leading-relaxed`}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
