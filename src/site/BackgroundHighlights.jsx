import React from "react";
import { backgroundHighlights, site } from "./content";
import { Arrow } from "./Layout";

export default function BackgroundHighlights() {
  return (
    <section
      className="background-section wrap"
      aria-labelledby="background-title"
    >
      <div className="section-top">
        <div>
          <p className="eyebrow">Work & learning</p>
          <h2 id="background-title">Background & highlights</h2>
        </div>
        <a className="text-link" href={site.resume} download>
          Download résumé <Arrow diagonal />
        </a>
      </div>
      <div className="background-grid">
        {backgroundHighlights.map((item) => (
          <article key={item.id} className="background-card">
            <div className="highlight-top">
              <span className="highlight-kind">{item.kind}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="highlight-org">{item.org}</p>
            <p className="highlight-date">{item.date}</p>
            <p className="highlight-summary">{item.summary}</p>
            <details>
              <summary>
                View details<span className="sr-only">: {item.title}</span>{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.detail}</p>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
