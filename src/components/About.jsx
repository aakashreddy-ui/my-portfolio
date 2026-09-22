import React from 'react';

export default function About() {
  return (
    <section className="section-shell split-section" id="about">
      <div>
        <p className="section-label">About</p>
        <h2>I like making complicated things easier to use.</h2>
      </div>
      <div className="rich-copy">
        <p>
          I am a B.Tech CSE graduate from Hyderabad, focused on full-stack web development. I enjoy taking a rough
          requirement, working out the user flow, and turning it into a reliable interface with the right data behind it.
        </p>
        <div className="values-grid">
          <article>
            <strong>Start with the flow</strong>
            <p>I clarify the user journey before deciding what a component, API, or data model needs to do.</p>
          </article>
          <article>
            <strong>Own the whole build</strong>
            <p>From responsive UI to backend fundamentals, I can follow a product problem across the stack.</p>
          </article>
          <article>
            <strong>Refine what matters</strong>
            <p>I prioritise readable interactions, reliable states, and the small details that build trust.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
