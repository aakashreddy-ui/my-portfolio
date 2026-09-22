import React from 'react';
import Icon from './Icon';
import { explorations, projects } from '../data/portfolioData';

const allProjects = [...projects, ...explorations];

function ProjectCard({ project, variant = 'featured' }) {
  return (
    <article className={`project-card ${variant === 'exploration' ? 'exploration-card' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" decoding="async" />
      </div>
      <div className="project-content">
        <span>{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.contribution && <p className="project-contribution"><strong>Contribution</strong>{project.contribution}</p>}
        <div className="project-stack">
          {project.stack.map((item) => <small key={item}>{item}</small>)}
        </div>
        {(project.link || project.codeLink) && (
          <div className="project-links">
            {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View live project <Icon name="link" /></a>}
            {project.codeLink && <a className="text-link" href={project.codeLink} target="_blank" rel="noreferrer">View project code <Icon name="code" /></a>}
          </div>
        )}
        {project.status && <span className="project-status">{project.status}</span>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section-shell" id="work">
      <div className="section-heading project-heading">
        <div>
          <p className="section-label">Projects</p>
          <h2>A few things I have built.</h2>
        </div>
        <p>
          A mix of frontend and full-stack work, from an online store to a guided travel booking flow.
        </p>
      </div>
      <div className="projects-grid">
        {allProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
      </div>
    </section>
  );
}
