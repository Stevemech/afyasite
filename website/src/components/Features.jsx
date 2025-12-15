import React from 'react';
import { Award, Map, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Gamified Micro-Learning",
      desc: "Daily quizzes, short videos, and progress tracking to keep learning engaging."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Interactive Map Interface",
      desc: "Visual workflow management showing visited and pending households."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Systematic Reporting",
      desc: "Daily reporting and weekly feedback system for health data tracking."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "AI Medical Chatbot",
      desc: "Instant on-scene guidance for quick medical references."
    }
  ];

  return (
    <section className="py-20 px-4 bg-brand-teal/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-teal-dark mb-4">Platform Features</h2>
          <p className="text-gray-600">Built to support CHVs in their daily workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-brand-teal text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
