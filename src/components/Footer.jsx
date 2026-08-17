import React from 'react';
import { whatsappUrl, githubUrl, linkedinUrl } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Aakash Reddy. Built with React and Vite.</p>
      <div>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
