import React from 'react';
import { Smartphone, Target, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution = () => {
  const pillars = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Interactive Learning",
      desc: "Gamified micro-learning tailored for retention."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Accessible Platform",
      desc: "Mobile-first design accessible remotely anywhere."
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      desc: "Real-time reporting and analytics for better decisions."
    }
  ];

  return (
    <section id="solution" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-brand-teal-dark mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bridge the gap with bite-sized, engaging learning experiences and powerful tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-teal/50 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
