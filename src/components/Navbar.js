import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = offsets.findIndex(offset => offset > 0) - 1;
      setActive(sections[Math.max(0, idx)].id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar modern-navbar">
      <div className="navbar-logo">Samar Malla</div>
      <ul className="navbar-links modern-navbar-links">
        {sections.map(s => (
          <li key={s.id} className={active === s.id ? 'active' : ''}>
            <button onClick={() => handleClick(s.id)}>{s.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
