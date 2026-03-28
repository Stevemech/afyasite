import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SectionLink } from './SectionLink';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Problem', sectionId: 'problem' },
    { name: 'Solution', sectionId: 'solution' },
    { name: 'Features', sectionId: 'features' },
    { name: 'Visits', to: '/visits' },
    { name: 'Team', sectionId: 'team' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex-shrink-0 block"
              >
                <img
                  src={logoImg}
                  alt="AfyaQuest"
                  className={`rounded-full transition-all duration-500 ${isScrolled ? 'h-9 w-9' : 'h-11 w-11'} object-cover`}
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="relative px-4 py-2 text-[15px] font-medium text-brand-teal-dark/70 hover:text-brand-teal-dark transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                ) : (
                  <SectionLink
                    key={link.name}
                    sectionId={link.sectionId}
                    className="relative px-4 py-2 text-[15px] font-medium text-brand-teal-dark/70 hover:text-brand-teal-dark transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </SectionLink>
                )
              )}
              <a
                href="https://stevemech.github.io/AfyaQuestMobile/login"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center gap-1.5 bg-brand-teal-dark text-white pl-5 pr-4 py-2.5 rounded-full text-[15px] font-semibold hover:bg-brand-teal transition-colors shadow-sm hover:shadow-md"
              >
                Admin Login <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-teal-dark p-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl font-display font-semibold text-brand-teal-dark py-3 border-b border-gray-200 hover:text-brand-teal transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <SectionLink
                      sectionId={link.sectionId}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl font-display font-semibold text-brand-teal-dark py-3 border-b border-gray-200 hover:text-brand-teal transition-colors"
                    >
                      {link.name}
                    </SectionLink>
                  )}
                </motion.div>
              ))}
              <a
                href="https://stevemech.github.io/AfyaQuestMobile/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-teal-dark text-white px-8 py-3.5 rounded-full font-semibold text-lg shadow-md"
              >
                Admin Login <ArrowUpRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
