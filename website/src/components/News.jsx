import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Newspaper, Quote } from 'lucide-react';
import { pressItems, featuredPress, otherPress } from '../data/press';

const EASE = [0.22, 1, 0.36, 1];

const Ticker = () => {
  const names = pressItems.map((item) => item.outlet);
  // Repeat the run so the loop is seamless at -50%.
  const runs = [0, 1, 2, 3];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-brand-teal/10 bg-white/70 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-surface to-transparent z-10" />
      <div className="flex w-max animate-marquee motion-reduce:[animation-play-state:paused] py-3">
        {runs.map((run) => (
          <span key={run} className="flex items-center gap-7 pr-7 whitespace-nowrap">
            <span className="text-[11px] tracking-[0.25em] font-semibold uppercase text-brand-teal/60">
              As seen in
            </span>
            {names.map((name) => (
              <span key={name} className="flex items-center gap-7">
                <span className="font-display font-bold text-brand-teal-dark/80 text-base sm:text-lg tracking-tight">
                  {name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

const FeaturedCard = ({ item }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, ease: EASE }}
    className="group relative isolate flex flex-col overflow-hidden rounded-3xl bg-brand-teal-dark text-white shadow-2xl shadow-brand-teal-dark/25 ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/60"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-dark via-[#2b5c5c] to-brand-teal opacity-95" />
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: 'radial-gradient(rgba(178,232,241,0.9) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }}
    />
    <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-gold/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
    <div className="absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-brand-teal-light/15 blur-3xl" />
    <Quote
      aria-hidden="true"
      className="absolute right-6 top-6 w-24 h-24 md:w-32 md:h-32 text-white/[0.06] rotate-180"
      strokeWidth={1}
    />

    <div className="relative z-10 flex flex-col h-full p-7 sm:p-9 md:p-11">
      <div className="flex flex-wrap items-center gap-2.5 mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-teal-dark text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 shadow-lg shadow-brand-gold/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal-dark/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal-dark" />
          </span>
          Latest
        </span>
        {item.tag && (
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 text-brand-teal-light text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5">
            {item.tag}
          </span>
        )}
      </div>

      <p className="font-display font-bold text-brand-teal-light text-xl sm:text-2xl tracking-tight mb-4">
        {item.outlet}
      </p>

      <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.08] tracking-tight mb-5 max-w-2xl">
        {item.headline}
      </h3>

      <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl flex-1">
        {item.excerpt}
      </p>

      {item.quote && (
        <blockquote className="mt-8 border-l-2 border-brand-gold pl-5 font-display italic text-white text-xl sm:text-2xl leading-snug max-w-xl">
          &ldquo;{item.quote}&rdquo;
          <cite className="not-italic block mt-2 text-sm text-brand-teal-light/80 font-sans">
            &mdash; Medha Pulluru, Co-founder
          </cite>
        </blockquote>
      )}

      <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/15 pt-6">
        <time dateTime={item.dateISO} className="text-brand-teal-light/80 text-sm font-medium">
          {item.date}
        </time>
        <span className="inline-flex items-center gap-2 rounded-full bg-white text-brand-teal-dark font-bold text-sm px-5 py-2.5 shadow-lg transition-colors group-hover:bg-brand-gold">
          Read article
          <ArrowUpRight
            size={16}
            strokeWidth={2.75}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </div>
  </motion.a>
);

const SideCard = ({ item, idx }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, delay: 0.1 + idx * 0.1, ease: EASE }}
    className="group relative flex flex-col flex-1 overflow-hidden rounded-3xl bg-white border border-brand-teal/10 p-6 sm:p-7 shadow-lg shadow-brand-teal-dark/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-2xl hover:shadow-brand-teal-dark/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal/40"
  >
    <span
      aria-hidden="true"
      className="absolute -right-3 -top-5 font-display font-extrabold text-[6.5rem] leading-none text-brand-teal/[0.06] select-none transition-colors duration-300 group-hover:text-brand-gold/20"
    >
      {String(idx + 2).padStart(2, '0')}
    </span>
    <span className="absolute left-0 top-7 bottom-7 w-1 rounded-full bg-gradient-to-b from-brand-gold to-brand-teal opacity-70 transition-opacity group-hover:opacity-100" />

    <div className="relative z-10 flex flex-col h-full pl-3">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="font-display font-bold text-brand-teal-dark text-base sm:text-lg tracking-tight">
          {item.outlet}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-teal/15 text-brand-teal transition-all duration-300 group-hover:bg-brand-teal-dark group-hover:border-brand-teal-dark group-hover:text-white">
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </span>
      </div>

      <h3 className="font-display font-bold text-brand-teal-dark text-xl sm:text-[1.35rem] leading-snug tracking-tight mb-3 transition-colors group-hover:text-brand-teal">
        {item.headline}
      </h3>

      <p className="text-gray-500 text-[15px] leading-relaxed flex-1 line-clamp-3">
        {item.excerpt}
      </p>

      <div className="mt-5 flex items-center gap-3 text-xs">
        <time dateTime={item.dateISO} className="font-semibold text-brand-teal">
          {item.date}
        </time>
        {item.tag && (
          <>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="text-gray-400 uppercase tracking-[0.12em] font-semibold">{item.tag}</span>
          </>
        )}
      </div>
    </div>
  </motion.a>
);

const News = () => {
  if (!featuredPress) return null;

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="relative overflow-hidden bg-brand-surface"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,136,148,0.12),transparent_60%)]" />
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-brand-teal-light/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-10 w-80 h-80 rounded-full bg-brand-gold-light/50 blur-3xl pointer-events-none" />

      <div className="relative pt-1">
        <Ticker />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-teal-dark text-white text-xs font-bold tracking-[0.2em] uppercase pl-3 pr-4 py-2 shadow-md shadow-brand-teal-dark/20 mb-5">
              <Newspaper size={14} strokeWidth={2.5} className="text-brand-gold" />
              In the news
            </span>
            <h2
              id="news-heading"
              className="section-heading text-brand-teal-dark leading-[1.05]"
            >
              AfyaQuest is{' '}
              <span className="relative inline-block">
                <span className="relative z-10">making headlines</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-brand-gold/40 -rotate-1 rounded-sm"
                />
              </span>
            </h2>
            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              From Rice University to the UN General Assembly week, our work with community
              health workers is getting noticed.
            </p>
          </div>

          <Link
            to="/media"
            className="group inline-flex items-center gap-2 self-start md:self-auto rounded-full border-2 border-brand-teal-dark/15 bg-white text-brand-teal-dark font-bold text-sm sm:text-base px-6 py-3 shadow-sm transition-all hover:border-brand-teal-dark hover:bg-brand-teal-dark hover:text-white"
          >
            All coverage
            <span className="ml-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-gold text-brand-teal-dark text-xs font-extrabold px-1.5">
              {pressItems.length}
            </span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-7 flex">
            <FeaturedCard item={featuredPress} />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            {otherPress.map((item, idx) => (
              <SideCard key={item.id} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
