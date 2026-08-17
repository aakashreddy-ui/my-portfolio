import React from 'react';
import Icon from './Icon';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="section-heading project-heading">
        <div>
          <p className="section-label">Projects</p>
          <h2>Selected work with real screens and clear use cases.</h2>
        </div>
        <p>
          A mix of academic, personal, and practice projects that show frontend execution, backend awareness, and
          responsive layouts.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-content">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <small key={item}>{item}</small>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                    Open live site <Icon name="link" />
                  </a>
                )}
                {project.codeLink && (
                  <a className="text-link" href={project.codeLink} target="_blank" rel="noreferrer">
                    View code <Icon name="code" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
