import React from 'react';
import Icon from './Icon';
import { profile,  availability, heroHeadline, heroSubtext, currentFocus } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="availability">{availability}</p>
        <h1>{heroHeadline}</h1>
        <p className="hero-text">{heroSubtext}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects <Icon name="arrow" />
          </a>
         
        </div>
      </div>
      <div className="hero-card" aria-label="Developer profile summary">
        <img src={profile} alt="Aakash Reddy" />
        <div className="status-card">
          <span>Currently</span>
          <strong>{currentFocus}</strong>
        </div>
      </div>
    </section>
  );
}
