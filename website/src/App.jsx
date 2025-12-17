import React from 'react';
import FluidBackground from './components/FluidBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Walkthrough from './components/Walkthrough';
import Impact from './components/Impact';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-sans text-gray-800">
      <FluidBackground />
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
        <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
