import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Find Me On</h2>
        <p>Feel free to <span>connect</span> with me</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/cas-eras-52336b224" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/caseras1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:erascas7@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed & Built by Cas Eras</p>
        <p>© {new Date().getFullYear()} Cas Eras</p>
      </div>
    </footer>
  );
};

export default Footer;
