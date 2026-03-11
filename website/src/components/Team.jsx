import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { name: 'Team Member', role: 'Developer' },
  { name: 'Team Member', role: 'Designer' },
  { name: 'Team Member', role: 'Developer' },
  { name: 'Team Member', role: 'Researcher' },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Team</span>
          <h2 className="section-heading text-brand-teal-dark">Meet the team</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-5 w-28 h-28 md:w-32 md:h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-mid opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-[3px] rounded-full bg-brand-surface" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-teal-light/20 flex items-center justify-center">
                  <span className="font-display font-bold text-2xl md:text-3xl text-brand-teal-dark/40 group-hover:text-brand-teal-dark/60 transition-colors">
                    {member.name[0]}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-brand-gold flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <h3 className="font-display font-bold text-brand-teal-dark">{member.name}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
