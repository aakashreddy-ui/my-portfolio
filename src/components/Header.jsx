import React, { useState } from 'react';
import Icon from './Icon';
import { navItems, whatsappUrl, resumeUrl } from '../data/portfolioData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Aakash Reddy home" onClick={() => setMenuOpen(false)}>
        <span>AR</span>
        Aakash Reddy
      </a>

      <nav aria-label="Primary navigation" className="desktop-nav">
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-action" href={whatsappUrl} target="_blank" rel="noreferrer">
          <Icon name="phone" />
          WhatsApp
        </a>

        <a className="button primary header-resume" href={resumeUrl} target="_blank" rel="noreferrer" download>
          <Icon name="download" />
          Resume
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav-panel ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
        <a
          className="button primary mobile-resume"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          download
          onClick={() => setMenuOpen(false)}
        >
          <Icon name="download" />
          Download Resume
        </a>
      </div>
    </header>
  );
}
