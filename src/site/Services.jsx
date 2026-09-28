import React from "react";
import { services, clientProjects } from "./content";
import { PageIntro, Arrow, External } from "./Layout";
export default function Services() {
  return (
    <>
      <PageIntro label="Services" title="Help with your next project.">
        <p>
          Need a website, help with social media, or a clearer view of your
          data? Let’s talk about what you need.
        </p>
        <a className="button" href="/contact/?type=project#inquiry">
          Tell me about your project <Arrow />
        </a>
      </PageIntro>
      <section
        className="wrap services-section"
        aria-labelledby="services-title"
      >
        <h2 id="services-title">Ways we could work together.</h2>
        <div className="service-list">
          {services.map((s) => (
            <article
              key={s.number}
              className={`service-row${s.upcoming ? " service-upcoming" : ""}`}
            >
              <span className="service-number" aria-hidden="true">
                {s.number}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="service-status">{s.status}</span>
              </div>
              {!s.upcoming && (
                <a
                  className="text-link"
                  href={s.link || "/contact/?type=project#inquiry"}
                >
                  {s.linkLabel || "Start a conversation"} <Arrow diagonal />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="wrap process section-pad">
        <div>
          <p className="eyebrow">How we’d work together</p>
          <h2>Start with a conversation.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Tell me about the problem.</h3>
              <p>Your needs, your audience, and what you’d like to improve.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Define a useful outcome.</h3>
              <p>
                We’ll talk through what success would look like and whether I’m
                the right fit.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Agree on scope and next steps.</h3>
              <p>
                The deliverables and responsibilities should be clear before
                work begins.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section
        className="client-work wrap"
        id="client-work"
        aria-labelledby="client-work-title"
      >
        <div className="section-top">
          <div>
            <p className="eyebrow">Commissioned projects</p>
            <h2 id="client-work-title">Client work</h2>
          </div>
        </div>
        {clientProjects.map((project) => (
          <article className="client-project" id={project.id} key={project.id}>
            <figure className="client-figure">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
              >
                <div className="client-image-frame">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width="1440"
                    height="1000"
                    loading="lazy"
                  />
                </div>
              </a>
            </figure>
            <div className="client-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.contribution}</p>
              <ul className="project-tags" aria-label="Project topics">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <External href={project.live}>Visit website</External>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
