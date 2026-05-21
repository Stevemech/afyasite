import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, ExternalLink } from 'lucide-react';

const articles = [
  {
    outlet: 'Rice University News',
    logoText: 'Rice University',
    headline: 'Rice students bring health care to rural regions through new app',
    excerpt: 'AfyaQuest was featured in Rice University News, highlighting how the team is building tools to empower community health volunteers in underserved regions.',
    url: 'https://news.rice.edu/news/2026/rice-students-bring-health-care-rural-regions-through-new-app',
    date: 'May 2026',
  },
];

function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'AfyaQuest — Press & Media';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-brand-surface">
      <Navbar />

      <main className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute top-24 right-[10%] w-72 h-72 rounded-full border border-brand-teal/10 hidden lg:block" />
        <div className="absolute bottom-40 left-[6%] w-48 h-48 rounded-full border border-brand-teal/15 hidden lg:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          >
            <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-5">Press & Media</span>
            <h1 className="section-heading text-brand-teal-dark mb-5">In the news</h1>
            <p className="section-subheading text-gray-600">
              Coverage and features highlighting AfyaQuest's mission to empower community health workers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, idx) => (
              <motion.a
                key={article.outlet}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group block rounded-2xl overflow-hidden border border-brand-teal/10 bg-white shadow-md shadow-brand-teal-dark/5 transition-all duration-300 hover:border-brand-teal/35 hover:shadow-xl hover:shadow-brand-teal-dark/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                <div className="p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-bold text-lg tracking-tight text-brand-teal-dark opacity-90">
                      {article.logoText}
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.5}
                      className="text-brand-teal/40 group-hover:text-brand-teal transition-colors"
                    />
                  </div>

                  <h3 className="font-display font-bold text-xl text-brand-teal-dark mb-3 leading-snug group-hover:text-brand-teal transition-colors">
                    {article.headline}
                  </h3>

                  <p className="text-gray-500 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 mt-6 pt-5 border-t border-gray-100 text-brand-teal/70 text-sm">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Media;
