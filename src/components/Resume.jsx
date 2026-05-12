import React from 'react';
import '../styles/Resume.css';
import { RESUME } from '../strings';

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-label">{RESUME.sectionLabel}</div>
      <h2>{RESUME.heading}</h2>
      <p className="section-sub">{RESUME.subheading}</p>

      <div className="resume-layout">
        {/* Sidebar */}
        <div className="resume-sidebar">
          <div className="resume-card">
            <div className="resume-card-title">Contact</div>
            {RESUME.contactItems.map((c, i) => (
              <div key={i} className="resume-contact-line">
                <span>{c.icon}</span>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="resume-contact-link">{c.text}</a>
                  : <span>{c.text}</span>}
              </div>
            ))}
          </div>

          <div className="resume-card">
            <div className="resume-card-title">Technical Skills</div>
            {RESUME.skillBars.map(s => (
              <div key={s.name} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span>{s.name}</span>
                  <span className="skill-bar-pct">{s.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="resume-card">
            <div className="resume-card-title">Education</div>
            <div className="resume-edu-school">{RESUME.education.school}</div>
            <div className="resume-edu-degree">{RESUME.education.degree}</div>
            <div className="resume-edu-minor">{RESUME.education.minor}</div>
          </div>

          <div className="resume-card">
            <div className="resume-card-title">Languages</div>
            <div className="resume-lang">{RESUME.languages}</div>
          </div>
        </div>

        {/* Main */}
        <div className="resume-main">
          <div>
            <div className="resume-section-title">Summary</div>
            <p className="resume-summary">{RESUME.summary}</p>
          </div>

          <div>
            <div className="resume-section-title">Experience</div>
            {RESUME.experience.map((e, i) => (
              <div key={i} className="resume-entry">
                <div className="resume-entry-header">
                  <div className="resume-entry-title">{e.title}</div>
                  <div className="resume-entry-date">{e.date}</div>
                </div>
                <div className="resume-entry-org">{e.org}</div>
                <ul className="resume-bullets">
                  {e.bullets.map((b, j) => <li key={j} className="resume-bullet">{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className="resume-section-title">Technologies</div>
            <div className="resume-pills">
              {RESUME.techPills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
          </div>

          <div>
            <div className="resume-section-title">Practices &amp; Methods</div>
            <div className="resume-pills">
              {RESUME.practicePills.map(p => <span key={p} className="resume-pill-rose">{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
