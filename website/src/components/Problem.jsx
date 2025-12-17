import React from 'react';
import { AlertCircle, Clock, BookOpen, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
  return (
    <section id="problem" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-teal-dark mb-6">The Challenge</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-red-500 shrink-0 mt-1" />
                <p className="text-red-800 font-medium">
                  CHVs are unpaid first responders serving as the EMT-equivalent in rural Kenya
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-lg">
                  <Clock className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Inefficient Training</h3>
                  <p className="text-gray-600">Six-hour lecture blocks over two weeks lead to poor knowledge retention and engagement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-lg">
                  <BookOpen className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Inconsistent Skills</h3>
                  <p className="text-gray-600">Lack of standardized practical training results in varying levels of care quality.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-lg">
                  <Activity className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">No Data Collection</h3>
                  <p className="text-gray-600">Absence of real-time field data makes tracking health outcomes impossible.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-gold/20" />
            {/* Visual placeholder for Traditional Lecture vs Modern Learning */}
            <div className="text-center z-10 relative">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-4 transform group-hover:-translate-y-2 transition-transform">
                <p className="font-bold text-gray-400 line-through">Traditional Lectures</p>
                <p className="text-sm text-gray-400">Passive, Long, Boring</p>
              </div>
              <div className="bg-brand-teal text-white p-6 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                <p className="font-bold text-xl">Interactive Gamification</p>
                <p className="text-brand-teal-light text-sm">Active, Bite-sized, Fun</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
