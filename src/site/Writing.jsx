import React from "react";
import { posts } from "./posts";
import { PageIntro, Arrow } from "./Layout";
export function Blog() {
  return (
    <>
      <PageIntro
        label="Blog"
        title="Notes along the way."
        note={
          <>
            Still learning.
            <br />
            Always.
          </>
        }
      >
        <p>On learning, building, and finding my way in tech.</p>
      </PageIntro>
      <section className="wrap blog-index" aria-label="Articles">
        {posts.map((p) => (
          <article className="post-preview" key={p.slug}>
            <a
              className="post-art"
              href={`/blog/${p.slug}/`}
              tabIndex="-1"
              aria-hidden="true"
            >
              <span>
                From my
                <br />
                <em>notebook.</em>
              </span>
              <span className="post-art-note">
                A little courage goes a long way.
              </span>
            </a>
            <div>
              <p className="eyebrow">
                {p.topic} · {p.date}
              </p>
              <h2>
                <a href={`/blog/${p.slug}/`}>{p.title}</a>
              </h2>
              <p>{p.excerpt}</p>
              <a className="text-link" href={`/blog/${p.slug}/`}>
                Read article <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>
      <div className="wrap blog-closing">
        <h2>Have a thought to share?</h2>
        <a className="text-link" href="/contact/?type=collaboration#inquiry">
          Get in touch <Arrow />
        </a>
      </div>
    </>
  );
}
export function Article({ post }) {
  const paragraphs = (post.body || post.excerpt).split(/\n+/).filter(Boolean);
  return (
    <article className="article-page">
      <div className="wrap article-header">
        <a className="text-link" href="/blog/">
          ← Back to all writing
        </a>
        <p className="eyebrow">
          {post.topic} · {post.date} ·{" "}
          {Math.max(1, Math.ceil((post.body || "").split(/\s+/).length / 200))}{" "}
          min read
        </p>
        <h1>{post.title}</h1>
        <p className="article-byline">By Aeon Chavez</p>
      </div>
      <div className="article-body">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className={text.startsWith("→") ? "article-takeaway" : undefined}
          >
            {text}
          </p>
        ))}
        {post.link && (
          <a className="text-link" href={post.link}>
            Read on LinkedIn <Arrow diagonal />
          </a>
        )}
        <a className="text-link article-back" href="/blog/">
          ← More from my notebook
        </a>
      </div>
    </article>
  );
}
