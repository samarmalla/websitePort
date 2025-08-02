import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer modern-footer">
    <div>
      &copy; Samar Malla, 2025
    </div>
    <div className="footer-links modern-footer-links">
      <a href="https://github.com/samarmalla" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/samarmalla/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  </footer>
);

export default Footer;
