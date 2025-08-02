import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    name: 'Banking Management System',
    description: 'Built a secure banking platform using Spring Boot microservices, MySQL databases, and a frontend in React',
    tech: ['Java', 'Spring Framework', 'Microservices','Eureka','React','MySQL', 'RESTful APIs'],
    github: 'https://github.com/samarmalla/Bank-Management-System',
    demo: '#',
  },
  {
    name: 'TechEase Rentals',
    description: 'Led the backend development of a real-time tech rental platform, utilizing Spring Boot, Spring Security, Java, and SQL to build a scalable system',
    tech: ['HTML','CSS','JavaScript','Java','Spring Boot', 'Spring Security','PostgreSQL',],
    github: 'https://github.com/samarmalla/TechEase',
    demo: '#',
  },
  {
    name: 'Auto Insurance Database Management System',
    description: 'Designed and implemented a robust relational database management system for an auto insurance company',
    tech: ['Schema Design', 'API Development', 'Relational Database','JSON','SQL', 'Interface', 'Database Management'],
    github: 'https://github.com/samarmalla/Auto-Insurance-DBMS',
    demo: '#',
  },
];

const ProjectsSection = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
          <div className="project-card modern-card" key={idx}>
            <div className="project-name-label">
              <h3>{project.name}</h3>
            </div>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span className="tech-badge" key={i}>{t}</span>
            ))}
          </div>
          <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '22px', height: '22px', verticalAlign: 'middle', marginRight: '8px'}} />
                GitHub
              </a>
            {project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
