import React from 'react';
import './header.css'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__brand">
          <a href="/">AaronAdams.dev</a>
        </div>
        <div className="navbar__links">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
