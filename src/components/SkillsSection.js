import React from 'react';
import './SkillsSection.css';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <FaJava color="#007396" /> },
  { name: 'Spring Boot', icon: <FaDatabase color="#6DB33F" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
];


const SkillsSection = () => (
  <section id="skills" className="skills-section" aria-labelledby="skills-heading">
    <div className="skills-header">
      <h2 id="skills-heading" className="section-title">Skills</h2>
      <p className="skills-intro">
        My tech stack covers modern web and backend technologies, enabling me to build robust, scalable, and visually stunning applications.
      </p>
    </div>
    <div className="skills-grid modern-skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-card modern-skill-card" key={idx} tabIndex={0} aria-label={skill.name}>
          <div className="skill-icon modern-skill-icon" aria-hidden="true">{skill.icon}</div>
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
