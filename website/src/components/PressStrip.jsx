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

const GoldLeaf = ({ className }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 4C20 4 8 12 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 12 20 4 20 4Z"
      fill="url(#leafGrad)"
      opacity="0.35"
    />
    <path
      d="M20 10V32"
      stroke="rgba(255,215,0,0.3)"
      strokeWidth="1"
    />
    <defs>
      <linearGradient id="leafGrad" x1="8" y1="4" x2="32" y2="34">
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#DAA520" />
      </linearGradient>
    </defs>
  </svg>
);

const PressStrip = () => {
  const featured = pressItems[0];
  if (!featured) return null;

  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="relative py-8 md:py-10 overflow-hidden bg-brand-teal-dark"
    >
      {/* Decorative gold leaves */}
      <GoldLeaf className="absolute top-4 left-[5%] w-12 h-12 hidden lg:block rotate-[-30deg]" />
      <GoldLeaf className="absolute bottom-2 left-[12%] w-8 h-8 hidden md:block rotate-[-60deg]" />
      <GoldLeaf className="absolute top-2 right-[8%] w-14 h-14 hidden lg:block rotate-[25deg]" />
      <GoldLeaf className="absolute bottom-3 right-[15%] w-9 h-9 hidden md:block rotate-[45deg]" />

      {/* Floating award-style leaves */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-3 left-[25%] hidden lg:block"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 rotate-[-15deg]" opacity="0.3">
          <path d="M12 2L8 8H4L8 12L6 18L12 14L18 18L16 12L20 8H16L12 2Z" fill="#FFD700" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-2 right-[30%] hidden lg:block"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 rotate-[20deg]" opacity="0.25">
          <path d="M12 2L8 8H4L8 12L6 18L12 14L18 18L16 12L20 8H16L12 2Z" fill="#FFD700" />
        </svg>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center"
        >
          <span
            id="press-heading"
            className="text-brand-teal-light/70 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            As Seen In
          </span>

          {pressItems.map((item) =>
            item.logo ? (
              <img
                key={item.outlet}
                src={item.logo}
                alt={item.outlet}
                loading="lazy"
                className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            ) : (
              <span
                key={item.outlet}
                className="font-display font-bold text-white text-lg tracking-tight opacity-95"
              >
                {item.logoText}
              </span>
            )
          )}

          <div className="flex items-center gap-2">
            <span className="text-brand-teal-light/60 text-sm italic">&ldquo;{featured.quote}&rdquo;</span>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold transition-colors"
            >
              Read Article
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressStrip;
