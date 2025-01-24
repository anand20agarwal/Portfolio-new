import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Navbar from './components/Navbar';
import IMG from './components/IMG.jpg';
import './components/Design.css';

function App() {
  return (  
    <HashRouter>
      <div>
        <Navbar />
        <div className="main-container">
          <img src={IMG} className="image" alt="Portfolio Background" />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
