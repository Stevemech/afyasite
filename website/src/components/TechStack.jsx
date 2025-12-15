import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

const TechStack = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-teal-dark mb-12 text-center">Technology Stack</h2>
        
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-gray-100 p-4 rounded-xl shrink-0">
              <SmartphoneIcon className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend</h3>
              <p className="text-gray-600">React Native for cross-platform mobile accessibility, ensuring smooth performance on low-end devices.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-gray-100 p-4 rounded-xl shrink-0">
              <BotIcon className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI Integration</h3>
              <p className="text-gray-600">OpenAI API integration providing the intelligence behind the medical chatbot functionality.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-gray-100 p-4 rounded-xl shrink-0">
              <MapIcon className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Core Features</h3>
              <p className="text-gray-600">Google Maps API for location services, custom progress tracking system, and data analytics dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icons for this component
const SmartphoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
)
const BotIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
)
const MapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
)

export default TechStack;
