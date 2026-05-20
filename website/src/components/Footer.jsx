import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { SectionLink } from './SectionLink';

const Footer = () => {
  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-4 mb-6 w-fit hover:opacity-90 transition-opacity">
              <img src={logoImg} alt="AfyaQuest" className="h-14 w-14 rounded-full object-cover" />
              <span className="font-display text-2xl font-bold tracking-tight">AfyaQuest</span>
            </Link>
            <p className="text-brand-teal-light leading-relaxed max-w-sm">
              Empowering Community Health Volunteers with gamified training and data-driven tools.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-teal-light mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Problem', sectionId: 'problem' },
                { label: 'Solution', sectionId: 'solution' },
                { label: 'Features', to: '/features' },
                { label: 'Visits', to: '/visits' },
                { label: 'Team', sectionId: 'team' },
              ].map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} className="text-white/70 hover:text-white transition-colors text-[15px]">
                    {link.label}
                  </Link>
                ) : (
                  <SectionLink key={link.label} sectionId={link.sectionId} className="text-white/70 hover:text-white transition-colors text-[15px]">
                    {link.label}
                  </SectionLink>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-teal-light mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[15px]">
                <ExternalLink size={16} /> Devpost <ArrowUpRight size={12} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[15px]">
                <Github size={16} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[15px]">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} AfyaQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
