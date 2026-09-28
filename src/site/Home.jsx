import React from "react";
import { site } from "./content";
import { Arrow, Note } from "./Layout";
import BackgroundHighlights from "./BackgroundHighlights";

export default function Home() {
  return (
    <>
      <section className="home-hero paper">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">
              Software developer <span>·</span> Connecticut
            </p>
            <h1 className="editorial">Aeon Chavez.</h1>
            <p className="hero-line editorial">
              Software, data, and practical AI.
            </p>
            <p className="hero-description">
              I build applications and explore data, drawing on experience in
              enterprise software and applied machine learning.
            </p>
            <div className="action-row">
              <a className="button" href="/portfolio/">
                Explore my work <Arrow diagonal />
              </a>
              <a className="text-link" href={site.resume}>
                View résumé <Arrow diagonal />
              </a>
            </div>
            <Note>Thanks for stopping by.</Note>
          </div>
          <div className="portrait-area">
            <div className="portrait-frame">
              <div className="portrait-photo">
                <img
                  src="/images/ac.jpg"
                  width="1206"
                  height="828"
                  alt="Aeon Chavez"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-section wrap section-pad"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-title">A little about me.</h2>
          <span className="pencil-rule" aria-hidden="true" />
        </div>
        <div className="prose">
          <p>
            I’m a software developer based in Connecticut, with a background
            spanning enterprise software, data science, and AI. I spent two
            years at IBM contributing to storage and cloud products, and have
            since built full-stack features for a healthcare learning platform
            and completed a data science fellowship at The Knowledge House.
          </p>
          <p>
            I care about building things that are useful, well-documented, and
            grounded in real needs. I’m especially interested in where software,
            data, and AI meet—from exploring patterns in a dataset to building
            tools people can use. I also create commissioned websites for small
            businesses.
          </p>
          <p className="small-detail">English / Tagalog</p>
        </div>
      </section>
      <BackgroundHighlights />
      <section
        className="skills-education wrap section-pad"
        aria-label="Skills and education"
      >
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>What I work with</h2>
          <dl className="skill-groups">
            <div>
              <dt>Software</dt>
              <dd>
                React, Next.js, TypeScript, JavaScript, Python, Java, REST APIs
              </dd>
            </div>
            <div>
              <dt>Data & AI</dt>
              <dd>
                SQL, Pandas, statistics, machine learning, data visualization,
                AI integration
              </dd>
            </div>
            <div>
              <dt>How I build</dt>
              <dd>
                Git, CI/CD, Agile, UI/UX, AI-assisted development, documentation
              </dd>
            </div>
          </dl>
        </div>
        <div className="education">
          <p className="eyebrow">Education</p>
          <h2>University of Connecticut</h2>
          <p>
            B.S. Computer Science & Engineering
            <br />
            Minor in Mathematics · 2021
          </p>
        </div>
      </section>
      <section className="writing-teaser wrap" aria-labelledby="notebook-title">
        <div>
          <p className="eyebrow">Writing</p>
          <h2 id="notebook-title">From my notebook</h2>
        </div>
        <div>
          <a className="text-link" href="/blog/launchpad-summit-experience/">
            Launchpad Summit Experience <Arrow diagonal />
          </a>
          <a className="small-link" href="/blog/">
            All posts <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
