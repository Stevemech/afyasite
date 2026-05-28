import React from 'react';
import { Wifi, Globe, Database, BarChart2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

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
  const [ref, isVisible] = useInView();

  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-brand-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Roadmap</span>
          <h2 className="section-heading text-brand-teal-dark">What's next</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-start gap-5 bg-white rounded-2xl p-6 md:p-7 border border-brand-teal/10 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-700 hover:-translate-y-0.5 opacity-0 translate-y-6 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{ transitionDelay: isVisible ? `${idx * 80}ms` : '0ms' }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-teal-dark text-white flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-teal-dark mb-1">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
