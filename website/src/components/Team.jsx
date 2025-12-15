import React from 'react';

const Team = () => {
  const members = ["Team Member", "Team Member", "Team Member", "Team Member"];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-teal-dark mb-12">Meet the Team</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group">
              <div className="w-24 h-24 bg-brand-teal/20 rounded-full mx-auto mb-4 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-brand-teal font-bold text-2xl">
                    {member[0]}
                 </div>
              </div>
              <h3 className="font-bold text-gray-800">{member}</h3>
              <p className="text-sm text-gray-500">HackRice Team</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
