import React from 'react';
import '../styles/Blog.css';
import { BLOG } from '../strings';

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section-label">{BLOG.sectionLabel}</div>
      <h2>{BLOG.heading}</h2>
      <p className="section-sub">{BLOG.subheading}</p>

      <div className="blog-grid">
        {BLOG.posts.length === 0 ? (
          <div className="blog-empty">
            <div className="blog-empty-icon">{BLOG.emptyIcon}</div>
            <h3 className="blog-empty-title">{BLOG.emptyTitle}</h3>
            <p className="blog-empty-desc">{BLOG.emptyDesc}</p>
          </div>
        ) : (
          BLOG.posts.map((post, i) => (
            <div key={i} className="blog-card">
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              {post.link && (
                <a href={post.link} target="_blank" rel="noreferrer" className="blog-link">
                  {BLOG.viewOnLinkedIn}
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
