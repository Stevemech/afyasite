  import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import Walkthrough from '../components/Walkthrough';
import Impact from '../components/Impact';
import TechStack from '../components/TechStack';
import Roadmap from '../components/Roadmap';
import VisitStrip from '../components/VisitStrip';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { useHomeHashScroll } from '../hooks/useHomeHashScroll';

function Home() {
  useHomeHashScroll();

  return (
    <div className="relative min-h-screen font-sans text-gray-800">
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Walkthrough />
        <Impact />
        <TechStack />
        <Roadmap />
        <VisitStrip />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
