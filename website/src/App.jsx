import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Visits from './pages/Visits';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visits" element={<Visits />} />
    </Routes>
  );
}

export default App;
