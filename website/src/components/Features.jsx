import React from 'react';
import { Award, Map, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gamified Micro-Learning",
      desc: "Engaging daily quizzes and short videos with progress tracking to ensure continuous professional development.",
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-teal/10 to-white",
      delay: 0
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Interactive Map",
      desc: "Visual workflow management showing visited households.",
      className: "bg-white",
      delay: 0.1
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Reporting",
      desc: "Automated daily reporting and weekly feedback loops.",
      className: "bg-white",
      delay: 0.2
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Medical Assistant",
      desc: "Instant, on-scene guidance for complex medical scenarios using a localized AI chatbot.",
      className: "md:col-span-2 bg-gradient-to-r from-brand-gold/10 to-white",
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-brand-surface relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-brand-teal-dark mb-4"
          >
            Powering Community Health
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A comprehensive suite of tools designed to support Community Health Volunteers in their daily workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className={`p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100/50 backdrop-blur-sm group ${feature.className}`}
            >
              <div className="bg-white text-brand-teal-dark w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
