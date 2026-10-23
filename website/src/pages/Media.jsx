import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Newspaper, Quote } from 'lucide-react';
import { pressItems, featuredPress, otherPress } from '../data/press';

const EASE = [0.22, 1, 0.36, 1];

function ArticleCard({ article, idx }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 + idx * 0.08, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-teal/10 bg-white shadow-md shadow-brand-teal-dark/5 transition-all duration-300 hover:border-brand-teal/35 hover:shadow-xl hover:shadow-brand-teal-dark/10 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal/40"
    >
      <span
        aria-hidden="true"
        className="absolute -right-3 -top-6 font-display font-extrabold text-[7rem] leading-none text-brand-teal/[0.06] select-none transition-colors duration-300 group-hover:text-brand-gold/20"
      >
        {String(idx + 2).padStart(2, '0')}
      </span>
      <span className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-brand-gold to-brand-teal opacity-70 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10 p-7 pl-9 flex flex-col h-full">
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="font-display font-bold text-lg tracking-tight text-brand-teal-dark">
            {article.outlet}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-teal/15 text-brand-teal transition-all duration-300 group-hover:bg-brand-teal-dark group-hover:border-brand-teal-dark group-hover:text-white">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-brand-teal-dark mb-3 leading-snug group-hover:text-brand-teal transition-colors">
          {article.headline}
        </h3>

        <p className="text-gray-500 leading-relaxed flex-1">{article.excerpt}</p>

        <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100 text-sm">
          <span className="inline-flex items-center gap-2 text-brand-teal/80">
            <Calendar size={14} />
            <time dateTime={article.dateISO}>{article.date}</time>
          </span>
          {article.tag && (
            <span className="text-gray-400 text-xs uppercase tracking-[0.12em] font-semibold">
              {article.tag}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'AfyaQuest — News & Press';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-brand-surface">
      <Navbar />

      <main className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,136,148,0.14),transparent_55%)]" />
        <div className="absolute top-24 right-[10%] w-72 h-72 rounded-full border border-brand-teal/10 hidden lg:block" />
        <div className="absolute bottom-40 left-[6%] w-48 h-48 rounded-full border border-brand-teal/15 hidden lg:block" />
        <div className="absolute -right-24 top-1/2 w-80 h-80 rounded-full bg-brand-gold-light/50 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-teal-dark text-white text-xs font-bold tracking-[0.2em] uppercase pl-3 pr-4 py-2 shadow-md shadow-brand-teal-dark/20 mb-6">
              <Newspaper size={14} strokeWidth={2.5} className="text-brand-gold" />
              News &amp; Press
            </span>
            <h1 className="section-heading text-brand-teal-dark mb-5">In the news</h1>
            <p className="section-subheading text-gray-600">
              Coverage and features highlighting AfyaQuest&rsquo;s mission to empower community
              health workers.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-teal uppercase tracking-[0.18em]">
              {pressItems.length} features and counting
            </p>
          </motion.div>

          {featuredPress && (
            <motion.a
              href={featuredPress.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="group relative isolate block overflow-hidden rounded-3xl bg-brand-teal-dark text-white shadow-2xl shadow-brand-teal-dark/25 ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/60 mb-8 md:mb-10"
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
              <Quote
                aria-hidden="true"
                className="absolute right-8 top-8 w-28 h-28 md:w-36 md:h-36 text-white/[0.06] rotate-180"
                strokeWidth={1}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-7 sm:p-9 md:p-12">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-teal-dark text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 shadow-lg shadow-brand-gold/30">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal-dark/60 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal-dark" />
                      </span>
                      Latest
                    </span>
                    {featuredPress.tag && (
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 text-brand-teal-light text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5">
                        {featuredPress.tag}
                      </span>
                    )}
                  </div>
                  <p className="font-display font-bold text-brand-teal-light text-xl sm:text-2xl tracking-tight mb-4">
                    {featuredPress.outlet}
                  </p>
                  <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.08] tracking-tight mb-5">
                    {featuredPress.headline}
                  </h2>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                    {featuredPress.excerpt}
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                  {featuredPress.quote && (
                    <blockquote className="border-l-2 border-brand-gold pl-5 font-display italic text-white text-2xl sm:text-3xl leading-snug">
                      &ldquo;{featuredPress.quote}&rdquo;
                      <cite className="not-italic block mt-3 text-sm text-brand-teal-light/80 font-sans">
                        &mdash; Medha Pulluru, Co-founder
                      </cite>
                    </blockquote>
                  )}
                  <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-6">
                    <time dateTime={featuredPress.dateISO} className="text-brand-teal-light/80 text-sm font-medium">
                      {featuredPress.date}
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
              </div>
            </motion.a>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherPress.map((article, idx) => (
              <ArticleCard key={article.id} article={article} idx={idx} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Media;
