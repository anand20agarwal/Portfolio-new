// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './components/Navbar';
import IMG from './components/IMG.jpg'
import './components/Design.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <img src={IMG} className='image' alt='/' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
