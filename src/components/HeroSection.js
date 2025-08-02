import React from 'react';
import './HeroSection.css';
import samarImg from '../assets/samar.jpg';

const HeroSection = ({ onContactClick, onProjectsClick }) => (
  <section id="hero" className="hero-section">
    <div className="hero-bg-gradient" />
    <div className="hero-content">
      <img src={samarImg} alt="Samar Malla" className="hero-img-overlay-img" />
      <h1 className="hero-title">SAMAR MALLA</h1>
      <h2 className="hero-subtitle">SOFTWARE DEVELOPER</h2>
      <div className="hero-bio-label">
        <p className="hero-bio hero-animated-bio">
          Passionate For Building Scalable, Reliable, and User-Focused Applications.<br />
          Skilled in Full-Stack Development, Microservices, and Cloud-Native Solutions using Modern Technologies.<br />
          <br />Driven by Curiosity, Committed to Clean Code, and Always Leveling Up.
        </p>
      </div>

      <div className="about-buttons">
        <button className="about-btn" onClick={onProjectsClick}>
          View Projects
        </button>
        <button className="about-btn secondary" onClick={onContactClick}>
          Contact Me
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
