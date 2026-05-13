import React from 'react';
import '../styles/Hero.css';
import { HERO } from '../strings';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-circle1" />
      <div className="hero-bg-circle2" />
      <div className="hero-grid-texture" />
      <div className="hero-content">
          <div className="hero-inner">         {/* ← wrap content in a flex row */}
           
            <div className="hero-content">
              <div className="section-label fade-up" style={{ animationDelay: '0.05s' }}>
                {HERO.eyebrow}
              </div>
              <h1 className="hero-heading fade-up" style={{ animationDelay: '0.15s' }}>
                {HERO.firstName} <em>{HERO.lastName}</em>
              </h1>
              <p className="hero-subtitle fade-up" style={{ animationDelay: '0.25s' }}>
                {HERO.subtitle}
              </p>
              <div className="hero-btns fade-up" style={{ animationDelay: '0.35s' }}>
                <a href={HERO.cta1Href} className="btn-primary">{HERO.cta1}</a>
                <a href={HERO.cta2Href} className="btn-outline">{HERO.cta2}</a>
              </div>
              <div className="hero-tags fade-up" style={{ animationDelay: '0.45s' }}>
                {HERO.tags.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>

            <div className="hero-photo-wrap">
              <img src={HERO.photo} alt="Aeon Chavez" className="hero-photo" />
            </div>

          </div>
          
      </div>
    </section>
  );
}
