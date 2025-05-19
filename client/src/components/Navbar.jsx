import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive((prev) => !prev);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsResponsive(false);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <Link to="/" onClick={handleLinkClick}>Home</Link>
      <Link to="/about" onClick={handleLinkClick}>About</Link>
      <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
      <Link to="/resume" onClick={handleLinkClick}>Resume</Link>
      <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

      <a href="#!" className="icon" onClick={toggleMenu}>
        <FaBars />
      </a>
    </div>
  );
};

export default Navbar;
