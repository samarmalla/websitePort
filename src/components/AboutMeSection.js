import React from 'react';
import './AboutMeSection.css';
import profilePic from '../assets/profile.jpg';

const AboutMeSection = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img src={profilePic} alt="Samar Malla" className="profile-pic animated-pic" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <div className="about-bio-label">
          <p className="about-animated-text">
          Hi! I'm Samar Malla, a software developer with a strong background in Java, Spring Boot, React, and cloud technologies.<br />
          I love solving complex problems, collaborating with teams, and continuously learning new skills.<br />
          My interests include backend engineering, UI/UX design, and building impactful products.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
