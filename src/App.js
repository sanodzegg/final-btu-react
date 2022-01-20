import React from 'react';
import './css/global.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieApp from './comps/MovieApp';
import Home from './comps/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieApp />} />
      </Routes>
    </Router>
  );
}

export default App;
