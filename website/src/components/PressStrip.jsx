import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Add new entries here as additional press coverage lands.
// Provide `logo` (path to image asset, e.g. '/press/rice.svg') once available;
// `logoText` is a temporary text wordmark used when no image asset exists yet.
const pressItems = [
  {
    outlet: 'Rice University News',
    logoText: 'Rice University',
    // logo: '/press/rice.svg',
    quote: 'Rice students bring health care to rural regions through new app.',
    url: 'https://news.rice.edu/news/2026/rice-students-bring-health-care-rural-regions-through-new-app',
    date: 'May 2026',
  },
];

const PressStrip = () => {
  const featured = pressItems[0];
  if (!featured) return null;

  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="relative py-20 md:py-24 overflow-hidden bg-brand-teal-dark"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(rgba(178,232,241,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="press-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-brand-teal-light text-sm font-semibold tracking-[0.2em] uppercase mb-8 md:mb-10"
        >
          As Seen In
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-5 mb-10 md:mb-12"
        >
          {pressItems.map((item) =>
            item.logo ? (
              <img
                key={item.outlet}
                src={item.logo}
                alt={item.outlet}
                loading="lazy"
                className="h-9 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            ) : (
              <span
                key={item.outlet}
                className="font-display font-bold text-white text-2xl md:text-[1.75rem] tracking-tight opacity-95"
              >
                {item.logoText}
              </span>
            )
          )}
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="font-display text-xl sm:text-2xl md:text-[1.5rem] text-white leading-snug">
            <span className="text-brand-teal-light/50" aria-hidden="true">&ldquo;</span>
            {featured.quote}
            <span className="text-brand-teal-light/50" aria-hidden="true">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-4 text-brand-teal-light/70 text-xs sm:text-sm tracking-[0.15em] uppercase">
            {featured.outlet} &middot; {featured.date}
          </figcaption>

          <div className="mt-8">
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-7 py-3 rounded-full text-base font-semibold transition-colors"
            >
              Read Article
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.figure>
      </div>
    </section>
  );
};

export default PressStrip;
