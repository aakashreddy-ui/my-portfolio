import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';



import { emailUrl, navItems } from '../data/portfolioData';


const themes = [
  ['glass', 'Glass'],
  ['midnight', 'Midnight'],
  ['aurora', 'Aurora'],
];

function ThemePicker({ theme, onThemeChange }) {
  return (
    <div className="theme-picker" aria-label="Color theme">
      {themes.map(([value, label]) => (
        <button
          aria-label={`${label} theme`}
          aria-pressed={theme === value}
          className={`theme-option theme-option-${value}`}
          key={value}
          onClick={() => onThemeChange(value)}
          type="button"
        />
      ))}
    </div>
  );
}

export default function Header({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeMenu = (event) => {
      if (event.key === 'Escape' || !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };

    document.addEventListener('keydown', closeMenu);
    document.addEventListener('pointerdown', closeMenu);
    return () => {
      document.removeEventListener('keydown', closeMenu);
      document.removeEventListener('pointerdown', closeMenu);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="site-header">
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
        <ThemePicker theme={theme} onThemeChange={onThemeChange} />

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav-panel ${menuOpen ? 'open' : ''}`} inert={!menuOpen} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
        <ThemePicker theme={theme} onThemeChange={onThemeChange} />
       
      </div>
    </header>
  );
}
