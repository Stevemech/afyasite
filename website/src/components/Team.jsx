import React, { useState } from 'react';
import { motion } from 'framer-motion';

const founders = [
  { name: 'Medha', role: 'Co-founder', photo: '/team/medha.png', initials: 'M', linkedin: 'https://www.linkedin.com/in/medha000/' },
  { name: 'Sumita', role: 'Co-founder', photo: '/team/sumita.png', initials: 'S', linkedin: 'https://www.linkedin.com/in/sumita-dantu-40050a237/', imgClass: 'scale-125' },
  { name: 'Angella', role: 'Co-founder', photo: '/team/angella.jpeg', initials: 'An', linkedin: 'https://www.linkedin.com/in/angellazhao/' },
];

const heads = [
  { name: 'Steve', role: 'DEV Head', photo: '/team/steve.jpeg', initials: 'S', linkedin: 'https://www.linkedin.com/in/stevezhangsandiego' },
  { name: 'Alyse', role: 'R&D Head', photo: null, initials: 'Al', linkedin: '' },
  {
    name: 'To be announced',
    role: 'ED Head',
    photo: null,
    initials: 'ED',
    isFiller: true,
  },
];

function TeamMemberCard({ name, role, photo, initials, isFiller, linkedin, imgClass, idx }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(photo) && !photoFailed;
  const hasLink = Boolean(linkedin);

  const inner = (
    <>
      <div className="relative mx-auto mb-7 w-32 h-32 md:w-36 md:h-36">
        <div className="w-full h-full transition-transform duration-300 ease-out group-hover:-translate-y-2">
          {showPhoto ? (
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg ring-4 ring-brand-teal/15 group-hover:ring-brand-teal/40 group-hover:shadow-xl transition-[box-shadow,ring-color] duration-300">
              <img
                src={photo}
                alt={`Headshot of ${name}`}
                onError={() => setPhotoFailed(true)}
                className={`w-full h-full object-cover ${imgClass || ''}`}
              />
            </div>
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

        {hasLink && (
          <span className="pointer-events-none absolute inset-x-0 top-full mt-0.5 flex items-center justify-center gap-1 text-xs font-semibold text-brand-teal opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            LinkedIn
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 11 11 5" />
              <path d="M6 5h5v5" />
            </svg>
          </span>
        )}
      </div>
      <h3 className="font-display font-bold text-brand-teal-dark text-lg">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{role}</p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06 }}
    >
      {hasLink ? (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="group block text-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/50 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          {inner}
        </a>
      ) : (
        <div className="group text-center">{inner}</div>
      )}
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
