import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Stack I use to build and ship.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.note}</p>
            <div className="tag-list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
