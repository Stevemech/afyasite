import React from 'react';
import { Award, Map, FileText, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Gamified Micro-Learning',
    desc: 'Daily quizzes, short videos, and progress tracking for continuous professional development.',
    span: 'md:col-span-2 md:row-span-2',
    bg: 'bg-brand-teal-dark',
    text: 'text-white',
    descColor: 'text-brand-teal-light',
    iconBg: 'bg-brand-teal text-white',
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Interactive Map',
    desc: 'Visual workflow showing visited households and nearby health facilities.',
    span: '',
    bg: 'bg-white',
    text: 'text-brand-teal-dark',
    descColor: 'text-gray-500',
    iconBg: 'bg-brand-teal-dark text-white',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Smart Reporting',
    desc: 'Automated daily reports and weekly feedback loops.',
    span: '',
    bg: 'bg-white',
    text: 'text-brand-teal-dark',
    descColor: 'text-gray-500',
    iconBg: 'bg-brand-teal-dark text-white',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'AI Medical Assistant',
    desc: 'On-scene guidance for complex medical scenarios using a localized AI chatbot trained on health protocols.',
    span: 'md:col-span-2',
    bg: 'bg-white',
    text: 'text-brand-teal-dark',
    descColor: 'text-gray-500',
    iconBg: 'bg-brand-teal-dark text-white',
  },
];

const Features = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="features" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Features</span>
          <h2 className="section-heading text-brand-teal-dark mb-5">
            Powering community health
          </h2>
          <p className="section-subheading">
            A comprehensive suite of tools supporting CHVs in their daily workflow.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`${f.span} ${f.bg} rounded-3xl p-8 lg:p-10 group hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 opacity-0 translate-y-6 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{ transitionDelay: isVisible ? `${idx * 80}ms` : '0ms' }}
            >
              <div className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className={`font-display font-bold text-xl lg:text-2xl mb-3 ${f.text}`}>{f.title}</h3>
              <p className={`${f.descColor} leading-relaxed`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
