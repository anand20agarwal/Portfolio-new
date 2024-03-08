import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
        <li className="navbar-item"><Link to="/project" className="navbar-link">Project</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
