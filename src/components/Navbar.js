import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><NavLink to="/#/" className="navbar-link">Home</NavLink></li>
        <li className="navbar-item"><NavLink to="/#/about" className="navbar-link">About</NavLink></li>
        <li className="navbar-item"><NavLink to="/#/project" className="navbar-link">Project</NavLink></li>
        <li className="navbar-item"><NavLink to="/#/contact" className="navbar-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
