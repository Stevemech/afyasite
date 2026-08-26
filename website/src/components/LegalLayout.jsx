import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

/**
 * Shared shell for the long-form legal pages (Privacy Policy, Data Safety).
 * Renders the standard hero band plus a sticky in-page table of contents built
 * from the `sections` list, so both pages stay structurally identical.
 */
export function LegalLayout({ eyebrow, title, intro, updated, sections, docTitle, children }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  const { hash } = useLocation();

  // Land at the top, unless we arrived via a deep link like /data-safety#delete.
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      // The IntersectionObserver below picks up the active TOC entry from here.
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = docTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [docTitle]);

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-brand-surface">
      <Navbar />

      <main className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-24 right-[8%] w-72 h-72 rounded-full border border-brand-teal/10 hidden lg:block" />
        <div className="absolute bottom-40 left-[5%] w-48 h-48 rounded-full border border-brand-teal/15 hidden lg:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-5">
              {eyebrow}
            </span>
            <h1 className="section-heading text-brand-teal-dark mb-5">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{intro}</p>
            <p className="mt-6 text-sm text-gray-500">
              <span className="font-semibold text-brand-teal-dark">Last updated:</span> {updated}
              <span className="mx-2 text-gray-300">|</span>
              <span className="font-semibold text-brand-teal-dark">Applies to:</span> AfyaQuest for Android
              (<code className="text-[13px] bg-brand-teal/10 text-brand-teal-dark px-1.5 py-0.5 rounded">com.afyaquest.app</code>)
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <nav className="hidden lg:block lg:col-span-4 sticky top-28">
              <h2 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-teal mb-4">
                On this page
              </h2>
              <ul className="flex flex-col gap-1 border-l border-brand-teal/15">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block -ml-px border-l-2 pl-4 py-1.5 text-[15px] transition-colors ${
                        activeId === s.id
                          ? 'border-brand-teal text-brand-teal-dark font-semibold'
                          : 'border-transparent text-gray-500 hover:text-brand-teal-dark hover:border-brand-teal/40'
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="lg:col-span-8 bg-white rounded-2xl border border-brand-teal/10 shadow-md shadow-brand-teal-dark/5 p-6 sm:p-9 md:p-11">
              {children}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-11 last:mb-0">
      <h2 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-brand-teal-dark mb-4">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-[16.5px] leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

export function SubHeading({ children }) {
  return (
    <h3 className="font-display text-lg font-semibold text-brand-teal-dark mt-2">{children}</h3>
  );
}

export function List({ children }) {
  return <ul className="flex flex-col gap-2.5 pl-1">{children}</ul>;
}

export function Item({ children }) {
  return (
    <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-teal">
      {children}
    </li>
  );
}

export function Callout({ tone = 'teal', title, children }) {
  const tones = {
    teal: 'bg-brand-teal/[0.07] border-brand-teal/25',
    gold: 'bg-brand-gold-light/40 border-brand-gold/40',
  };
  return (
    <div className={`rounded-xl border ${tones[tone]} p-5`}>
      {title && (
        <p className="font-display font-semibold text-brand-teal-dark mb-1.5">{title}</p>
      )}
      <div className="text-[15.5px] leading-relaxed text-gray-700 flex flex-col gap-3">{children}</div>
    </div>
  );
}

/** Responsive table wrapper — never lets the page itself scroll sideways. */
export function Table({ head, children }) {
  return (
    <div className="overflow-x-auto -mx-1 rounded-xl border border-brand-teal/15">
      <table className="w-full min-w-[540px] text-left text-[15px] border-collapse">
        <thead>
          <tr className="bg-brand-teal/[0.08]">
            {head.map((h) => (
              <th
                key={h}
                className="font-display font-semibold text-brand-teal-dark px-4 py-3 border-b border-brand-teal/15 align-bottom"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-teal/10">{children}</tbody>
      </table>
    </div>
  );
}

export function Row({ cells }) {
  return (
    <tr className="align-top">
      {cells.map((c, i) => (
        <td
          key={i}
          className={`px-4 py-3.5 ${i === 0 ? 'font-medium text-brand-teal-dark' : 'text-gray-700'}`}
        >
          {c}
        </td>
      ))}
    </tr>
  );
}

export const MAIL = 'afyaquest@gmail.com';

export function Mail({ subject }) {
  const href = subject
    ? `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${MAIL}`;
  return (
    <a href={href} className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-teal-dark transition-colors">
      {MAIL}
    </a>
  );
}
