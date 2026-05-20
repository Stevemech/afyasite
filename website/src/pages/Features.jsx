import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FeaturesSection from '../components/Features';
import Footer from '../components/Footer';

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'AfyaQuest — Features';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-brand-surface">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default Features;
