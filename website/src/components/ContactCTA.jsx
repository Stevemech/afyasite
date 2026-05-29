import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ContactCTA = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className="relative isolate py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-dark via-[#1a3838] to-[#0f2424]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'radial-gradient(rgba(178,232,241,0.9) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal-light/0 via-brand-teal-light/40 to-brand-teal-light/0" />
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-brand-teal-light/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 bottom-0 w-56 h-56 rounded-full bg-brand-teal-light/10 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center transition-all duration-700 opacity-0 translate-y-6 ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-5 leading-tight">
          Want to bring AfyaQuest to your community?
        </h2>
        <p className="text-lg md:text-xl text-brand-teal-light max-w-2xl mx-auto leading-relaxed mb-10">
          We are actively seeking clinic partners, health system collaborators, and grant opportunities.
        </p>
        <a
          href="mailto:afyaquest@gmail.com"
          className="group inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-white px-10 md:px-12 py-4 md:py-[1.125rem] rounded-full text-lg font-semibold transition-all duration-300 shadow-xl shadow-black/35 hover:shadow-2xl hover:shadow-black/45"
        >
          <Mail size={22} className="group-hover:scale-110 transition-transform" />
          Get in Touch
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
