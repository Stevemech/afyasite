import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const VisitStrip = () => {
  return (
    <aside className="relative py-10 md:py-12 px-5 sm:px-8 lg:px-10 bg-white border-y border-brand-teal/10 overflow-hidden">
      <div className="absolute top-0 right-[12%] w-40 h-40 rounded-full border border-brand-gold/15 pointer-events-none hidden md:block" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-teal-dark/10 text-brand-teal-dark">
              <MapPin size={22} strokeWidth={2.25} />
            </span>
            <div>
              <p className="font-display font-bold text-brand-teal-dark text-lg md:text-xl tracking-tight">
                Guatemala field visit
              </p>
              <p className="text-gray-600 text-[15px] md:text-base mt-1 max-w-xl leading-relaxed">
                Photos from our time with community health teams on the ground.
              </p>
            </div>
          </div>
          <Link
            to="/visits"
            className="group inline-flex items-center justify-center gap-2 shrink-0 self-start sm:self-center bg-brand-teal-dark text-white px-6 py-3 rounded-full text-[15px] font-semibold hover:bg-brand-teal transition-colors shadow-md shadow-brand-teal-dark/15"
          >
            View gallery
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </aside>
  );
};

export default VisitStrip;
