import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Visits from './pages/Visits';
import Media from './pages/Media';
import Privacy from './pages/Privacy';
import DataSafety from './pages/DataSafety';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visits" element={<Visits />} />
      <Route path="/media" element={<Media />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/data-safety" element={<DataSafety />} />
    </Routes>
  );
}

export default App;
