import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PHOTOS = Array.from({ length: 10 }, (_, i) => ({
  src: `/visits/guatemala/guatemala-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `AfyaQuest field visit — Guatemala, photo ${i + 1}`,
}));

function Visits() {
  const [lightbox, setLightbox] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'AfyaQuest — Guatemala field visit';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const goNext = useCallback(() => {
    setLightbox((i) => (i === null ? i : (i + 1) % PHOTOS.length));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, goNext, goPrev]);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-brand-surface">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="absolute top-24 right-[10%] w-72 h-72 rounded-full border border-brand-teal/10 hidden lg:block" />
        <div className="absolute bottom-40 left-[6%] w-48 h-48 rounded-full border border-brand-gold/15 hidden lg:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-brand-teal text-sm font-semibold tracking-wider uppercase mb-5">
              <MapPin size={16} strokeWidth={2.5} className="text-brand-gold" />
              Field visits
            </span>
            <h1 className="section-heading text-brand-teal-dark mb-5">Guatemala</h1>
            <p className="section-subheading text-gray-600">
              Moments from our time with community health teams on the ground — learning,
              listening, and building AfyaQuest alongside the people it serves.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
            {PHOTOS.map((photo, idx) => (
              <motion.li
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(idx)}
                  className="group w-full text-left rounded-2xl overflow-hidden border border-brand-teal/10 bg-white shadow-md shadow-brand-teal-dark/5 transition-all duration-300 hover:border-brand-gold/35 hover:shadow-xl hover:shadow-brand-teal-dark/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-brand-teal/5">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-teal-dark/92 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 md:-top-2 md:-right-2 p-2 rounded-full bg-white/95 text-brand-teal-dark hover:bg-brand-gold hover:text-white transition-colors shadow-lg"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 md:left-0 md:-translate-x-full p-2 rounded-full bg-white/95 text-brand-teal-dark hover:bg-brand-gold hover:text-white transition-colors shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 md:right-0 md:translate-x-full p-2 rounded-full bg-white/95 text-brand-teal-dark hover:bg-brand-gold hover:text-white transition-colors shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight size={28} strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Visits;
