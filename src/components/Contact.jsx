import React from 'react';
import '../styles/Contact.css';
import { CONTACT, SITE } from '../strings';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-label">{CONTACT.sectionLabel}</div>
      <h2>{CONTACT.heading}</h2>
      <p className="section-sub">{CONTACT.subheading}</p>

      <div className="contact-grid">
        <div className="contact-body">
          <p>{CONTACT.body1}</p>
          <p>{CONTACT.body2}</p>
          <div className="contact-btns">
            <a href={`mailto:${SITE.email}`} className="btn-primary">{CONTACT.cta1}</a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" className="btn-outline">{CONTACT.cta2}</a>
          </div>
        </div>

        <div className="contact-items">
          {CONTACT.items.map((c, i) => (
            <div key={i} className="contact-item">
              <div className="contact-icon">{c.icon}</div>
              <div>
                <div className="contact-label">{c.label}</div>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="contact-value-link">{c.value}</a>
                  : <div className="contact-value">{c.value}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
