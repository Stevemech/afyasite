import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-teal-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">AfyaQuest</h2>
          <p className="text-brand-teal-light text-sm">Empowering Community Health Volunteers.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <ExternalLink size={20} /> Devpost
          </a>
          <a href="#" className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <Github size={20} /> GitHub
          </a>
          <a href="#" className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <Mail size={20} /> Contact
          </a>
        </div>

        <div className="text-center md:text-right text-sm text-brand-teal-light/60">
          <div className="mb-2 inline-block px-3 py-1 border border-brand-teal-light/30 rounded-full">
            Social Impact Track
          </div>
          <p>&copy; {new Date().getFullYear()} AfyaQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
