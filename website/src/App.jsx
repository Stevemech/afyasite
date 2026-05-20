import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Visits from './pages/Visits';
import Features from './pages/Features';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visits" element={<Visits />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;
