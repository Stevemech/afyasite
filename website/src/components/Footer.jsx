import React from 'react';
import { Github, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-brand-teal-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(rgba(178,232,241,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="AfyaQuest" className="h-14 w-auto" />
              <span className="font-display text-2xl font-bold tracking-tight">AfyaQuest</span>
            </div>
            <p className="text-brand-teal-light/70 leading-relaxed max-w-sm">
              Empowering Community Health Volunteers with gamified training and data-driven tools for rural Kenya.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-teal-light/50 mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              {['Problem', 'Solution', 'Features', 'Team'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-brand-gold transition-colors text-[15px]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-teal-light/50 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-[15px]">
                <ExternalLink size={16} /> Devpost <ArrowUpRight size={12} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-[15px]">
                <Github size={16} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-[15px]">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} AfyaQuest. All rights reserved.</p>
          <div className="inline-block px-3 py-1 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold tracking-wider uppercase">
            Social Impact Track
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
