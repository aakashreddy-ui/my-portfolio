import React from 'react';
import Icon from './Icon';
import { emailUrl, githubUrl, linkedinUrl, availability, heroHeadline, heroSubtext, currentFocus, proofPoints } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="availability">{availability}</p>
        <h1>{heroHeadline}</h1>
        <p className="hero-text">{heroSubtext}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore selected work <Icon name="arrow" />
          </a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <dl className="proof-points" aria-label="Portfolio highlights">
          {proofPoints.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <aside className="hero-dossier" aria-label="Developer profile summary">
        <div className="dossier-topline">
          <span>AR</span>
          <p>Developer profile</p>
        </div>
        <div className="dossier-core">
          <p>Based in</p>
          <strong>Hyderabad<br />India</strong>
        </div>
        <div className="dossier-rule" />
        <div className="dossier-focus">
          <span>Building with</span>
          <strong>{currentFocus}</strong>
        </div>
        <div className="dossier-tags" aria-label="Current capabilities">
          <span>Frontend</span>
          <span>Backend</span>
          <span>Product UI</span>
        </div>
      </aside>
    </section>
  );
}
