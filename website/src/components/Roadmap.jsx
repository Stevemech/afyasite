import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const items = [
    "Offline AI capabilities for areas with limited connectivity",
    "Multi-language support for broader accessibility",
    "Integration with local health systems and government databases",
    "Expanded analytics and reporting features"
  ];

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-teal-dark mb-12">What's Next</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-gold text-left"
            >
              <h3 className="font-semibold text-gray-800">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
