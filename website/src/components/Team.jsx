import React, { useState } from 'react';
import { motion } from 'framer-motion';

const founders = [
  { name: 'Medha', role: 'Co-founder', photo: '/team/medha.jpg', initials: 'M' },
  { name: 'Sumita', role: 'Co-founder', photo: '/team/sumita.jpg', initials: 'S' },
  {
    name: 'Angella',
    role: 'Co-founder',
    photo: '/team/angella.jpg',
    initials: 'An',
  },
];

const heads = [
  { name: 'Steve', role: 'DEV Head', photo: '/team/steve.jpg', initials: 'S' },
  {
    name: 'Alyse',
    role: 'R&D Head',
    photo: '/team/alyse.jpg',
    initials: 'Al',
  },
  {
    name: 'To be announced',
    role: 'ED Head',
    photo: null,
    initials: 'ED',
    isFiller: true,
  },
];

function TeamMemberCard({ name, role, photo, initials, isFiller, idx }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(photo) && !photoFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06 }}
      className="group text-center"
    >
      <div className="relative mx-auto mb-5 w-32 h-32 md:w-36 md:h-36">
        {showPhoto ? (
          <img
            src={photo}
            alt={`Headshot of ${name}`}
            onError={() => setPhotoFailed(true)}
            className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-brand-teal/15 group-hover:ring-brand-gold/40 transition-[box-shadow,ring-color] duration-300"
          />
        ) : (
          <div
            className={`w-full h-full rounded-full flex items-center justify-center shadow-inner ${
              isFiller
                ? 'bg-brand-surface border-2 border-dashed border-brand-teal/30'
                : 'bg-gradient-to-br from-brand-teal/25 to-brand-teal/5 border border-brand-teal/15'
            }`}
          >
            <span
              className={`font-display font-bold text-brand-teal-dark/80 ${
                initials.length > 1 ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
              }`}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-display font-bold text-brand-teal-dark text-lg">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{role}</p>
    </motion.div>
  );
}

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-brand-teal text-sm font-semibold tracking-wider uppercase mb-4">Team</span>
          <h2 className="section-heading text-brand-teal-dark">Meet the team</h2>
          <p className="section-subheading mt-4 text-gray-600">
            Founders and leadership building AfyaQuest with community health partners.
          </p>
        </motion.div>

        <div className="mb-16 md:mb-20">
          <h3 className="text-center font-display font-bold text-brand-teal-dark text-xl md:text-2xl mb-8 md:mb-10">
            Founders
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto">
            {founders.map((member, idx) => (
              <TeamMemberCard key={member.name} {...member} idx={idx} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center font-display font-bold text-brand-teal-dark text-xl md:text-2xl mb-8 md:mb-10">
            Heads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto">
            {heads.map((member, idx) => (
              <TeamMemberCard key={member.name} {...member} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
