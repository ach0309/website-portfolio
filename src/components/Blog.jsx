import React, { useState } from 'react';

const SAMPLE_POSTS = [];

export default function Blog() {
  const [posts] = useState(SAMPLE_POSTS);

  return (
    <section id="blog" style={{ padding:'6rem 4rem', background:'var(--linen)' }}>
      <div className="section-label">Blog</div>
      <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>LinkedIn Posts</h2>
      <p style={{ color:'var(--muted)', fontWeight:300, maxWidth:'520px', marginBottom:'3rem', lineHeight:1.9 }}>
        Thoughts on data science, AI, and the journey — written for the community.
      </p>

      {posts.length === 0 ? (
        <div style={{
          border:'1px dashed rgba(193,113,74,0.3)', borderRadius:'14px',
          padding:'4rem 2rem', textAlign:'center',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'0.6rem',
        }}>
          <div style={{ fontSize:'2.2rem' }}>✍️</div>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:600, color:'var(--espresso)' }}>Posts coming soon</h3>
          <p style={{ color:'var(--muted)', fontWeight:300, fontSize:'0.9rem', maxWidth:'380px', lineHeight:1.8 }}>
            Each LinkedIn post you share will appear here as a beautiful card. Paste them into the <code style={{fontSize:'0.8rem', background:'var(--blush)', padding:'1px 6px', borderRadius:'4px'}}>Blog.jsx</code> file to get started.
          </p>
        </div>
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.4rem' }}>
          {posts.map((post, i) => (
            <div key={i} className="card" style={{
              padding:'1.8rem', transition:'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(193,113,74,0.4)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <div style={{ fontSize:'0.72rem', color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.7rem' }}>{post.date}</div>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:600, color:'var(--espresso)', marginBottom:'0.7rem', lineHeight:1.4 }}>{post.title}</h3>
              <p style={{ fontSize:'0.85rem', color:'var(--muted)', fontWeight:300, lineHeight:1.8 }}>{post.excerpt}</p>
              {post.link && (
                <a href={post.link} target="_blank" rel="noreferrer"
                  style={{ display:'inline-block', marginTop:'1rem', fontSize:'0.78rem', color:'var(--sienna)', fontWeight:500 }}>
                  ↗ View on LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
