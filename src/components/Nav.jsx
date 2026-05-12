import React, { useState, useEffect } from 'react';
import '../styles/Nav.css';
import { NAV, SITE } from '../strings';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = NAV.sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      setActive(current || '');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : 'top'}`}>
        <a href="#home" className="nav-logo">{SITE.initials}</a>
        <ul className="nav-links">
          {NAV.sections.map(s => (
            <li key={s}>
              <a href={`#${s}`} className={`nav-link ${active === s ? 'active' : ''}`}>{s}</a>
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV.sections.map(s => (
          <a key={s} href={`#${s}`}
            className={`nav-mobile-link ${active === s ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >{s}</a>
        ))}
      </div>
    </>
  );
}
