import React from 'react';
import { useInView } from '../hooks/useInView';

const stack = [
  {
    title: 'Frontend',
    desc: 'React Native for cross-platform mobile accessibility, ensuring smooth performance on low-end devices.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'AI Integration',
    desc: 'OpenAI API powering the medical chatbot with context-aware, protocol-based health guidance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
  },
  {
    title: 'Core Features',
    desc: 'Google Maps API for location services, custom progress tracking, and a data analytics dashboard.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>
      </svg>
    ),
  },
];

const TechStack = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Technology</span>
          <h2 className="section-heading text-brand-teal-dark">Built for the field</h2>
        </div>

        <div ref={ref} className="space-y-4">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-start gap-6 bg-brand-surface rounded-2xl p-6 md:p-8 border border-brand-teal/10 hover:border-brand-teal/25 hover:shadow-lg transition-all duration-700 opacity-0 translate-y-6 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-teal-dark text-white flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-teal-dark mb-1">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
