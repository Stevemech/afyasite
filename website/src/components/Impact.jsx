import React from 'react';
import { Heart, Activity, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const impacts = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Better Health Outcomes',
    desc: 'Early disease trend detection and life-saving interventions through timely data.',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Data Capabilities',
    desc: 'Robust documentation and analytics empowering health leaders with real-time insights.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Outbreak Response',
    desc: 'Strengthened response capabilities for outbreaks like Ebola and cholera.',
  },
];

const Impact = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-teal-dark">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(rgba(178,232,241,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-teal-light text-sm font-semibold tracking-wider uppercase mb-4">Impact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-5">
            Real-world impact
          </h2>
          <p className="text-lg md:text-xl text-brand-teal-light max-w-2xl mx-auto leading-relaxed">
            Building a stronger foundation for rural healthcare systems.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {impacts.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white/10 rounded-3xl p-8 lg:p-10 border border-white/10 hover:bg-white/15 transition-all duration-700 opacity-0 translate-y-6 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-teal text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{item.title}</h3>
              <p className="text-brand-teal-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
