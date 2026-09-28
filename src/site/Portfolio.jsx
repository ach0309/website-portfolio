import React from "react";
import { projects, otherProjects } from "./content";
import { PageIntro, External } from "./Layout";
export default function Portfolio() {
  return (
    <>
      <PageIntro
        label="Portfolio"
        title="A selection of my work."
        note="Learning by doing."
      >
        <p>
          Software, data, and AI projects—with a closer look at what I
          contributed.
        </p>
      </PageIntro>
      <div className="wrap projects-list">
        {projects.map((p, i) => (
          <article
            className={`project project-${p.color}`}
            id={p.id}
            key={p.id}
          >
            <div className="project-copy">
              <p className="eyebrow">
                0{i + 1} / {p.category}
              </p>
              <h2>{p.title}</h2>
              <p className="project-description">{p.description}</p>
              <p>
                <strong>My contribution.</strong> {p.contribution}
              </p>
              <p className="project-outcome">{p.outcome}</p>
              <ul className="project-tags" aria-label="Technologies and topics">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="link-row">
                {p.github && (
                  <External href={p.github}>View on GitHub</External>
                )}
                {p.live && <External href={p.live}>{p.liveLabel}</External>}
              </div>
            </div>
            <figure className="project-figure">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${p.title} on GitHub (opens in a new tab)`}
              >
                <div className="project-image-frame">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </a>
            </figure>
          </article>
        ))}
        <section
          className="more-projects section-pad"
          aria-labelledby="more-title"
        >
          <h2 id="more-title">More projects</h2>
          {otherProjects.map((p) => (
            <article key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <External href={p.href}>View project</External>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
