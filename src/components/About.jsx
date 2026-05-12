import React from 'react';
import '../styles/About.css';
import { ABOUT } from '../strings';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-label">{ABOUT.sectionLabel}</div>
      <h2>{ABOUT.heading}</h2>
      <p className="section-sub">{ABOUT.subheading}</p>

      <div className="about-grid">
        <div className="about-bio">
          {ABOUT.bio.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{
              __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            }} />
          ))}
          <div className="about-skills">
            {ABOUT.skills.map(s => (
              <span key={s} className="about-skill-pill">{s}</span>
            ))}
          </div>
        </div>

        <div className="about-highlights">
          {ABOUT.highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">{h.icon}</div>
              <div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
