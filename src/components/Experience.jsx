import React from 'react';
import { timeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section-shell split-section" id="experience">
      <div>
        <p className="section-label">Experience</p>
        <h2>Education, internship work, and what I am doing now.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span className="timeline-dot" />
            <div>
              <time>{item.period}</time>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
