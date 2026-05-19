import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const PREVIEW = '/visits/guatemala/guatemala-01.jpg';

const VisitStrip = () => {
  return (
    <section
      aria-labelledby="visit-strip-heading"
      className="relative isolate py-14 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-dark via-brand-teal to-[#1a3838]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(rgba(178,232,241,0.9) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal-light/0 via-brand-teal-light/40 to-brand-teal-light/0" />
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-brand-teal-light/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 bottom-0 w-56 h-56 rounded-full bg-brand-teal-light/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12 xl:gap-16"
        >
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:max-w-md xl:max-w-lg shrink-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand-teal-light/40 to-brand-teal-light/10 blur-sm opacity-80" />
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/35 ring-2 ring-white/20">
              <img
                src={PREVIEW}
                alt=""
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-dark/50 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left flex-1 min-w-0">
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-brand-teal-light text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              <MapPin size={16} strokeWidth={2.5} className="shrink-0" />
              Field visit
            </span>
            <h2
              id="visit-strip-heading"
              className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] xl:text-5xl tracking-tight leading-[1.1]"
            >
              Guatemala
            </h2>
            <p className="mt-4 text-brand-teal-light text-lg sm:text-xl md:text-[1.35rem] leading-relaxed max-w-xl mx-auto lg:mx-0">
              See photos from our time with community health teams — learning and building AfyaQuest
              on the ground.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <Link
                to="/visits"
                className="group inline-flex items-center justify-center gap-2.5 bg-brand-gold text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-brand-gold/25 hover:bg-brand-gold-dark transition-colors"
              >
                View full gallery
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-white/45 text-sm sm:text-base font-medium">
                Open any photo for a full-screen view
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitStrip;
