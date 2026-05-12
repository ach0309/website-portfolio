import React from 'react';
import '../styles/Footer.css';
import { FOOTER } from '../strings';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">{FOOTER.name}</span>
      <span>{FOOTER.copyright}</span>
      <a href={FOOTER.githubUrl} target="_blank" rel="noreferrer" className="footer-link">
        {FOOTER.githubText}
      </a>
    </footer>
  );
}
