import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Visits from './pages/Visits';
import Media from './pages/Media';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visits" element={<Visits />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  );
}

export default App;
