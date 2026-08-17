import React from 'react';

export default function About() {
  return (
    <section className="section-shell split-section" id="about">
      <div>
        <p className="section-label">About</p>
        <h2>A full-stack developer who ships, not just studies.</h2>
      </div>
      <div className="rich-copy">
        <p>
          I am a B.Tech CSE graduate from Hyderabad, focused on full-stack web development. My work centers on
          turning requirements into usable interfaces, connecting them to backend logic, and polishing the details
          that make a project feel production-ready rather than half-finished.
        </p>
        <div className="values-grid">
          <article>
            <span>01</span>
            <strong>Problem-first thinking</strong>
            <p>I break requirements down into components, API contracts, and data models before writing code.</p>
          </article>
          <article>
            <span>02</span>
            <strong>End-to-end ownership</strong>
            <p>From UI to database schema, I build and debug across the whole stack, not just one layer.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Fast, practical iteration</strong>
            <p>I ship, test against real use cases, and refine quickly instead of over-planning.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
