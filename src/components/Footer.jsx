import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding:'2rem 4rem',
      borderTop:'1px solid var(--border)',
      display:'flex', justifyContent:'space-between', alignItems:'center',
      fontSize:'0.78rem', color:'var(--muted)',
      background:'var(--white)',
      flexWrap:'wrap', gap:'0.5rem',
    }}>
      <span style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'1rem', color:'var(--sienna)' }}>
        Aeon Chavez
      </span>
      <span>© 2026 · Milford, CT</span>
      <a href="https://github.com/ach0309" target="_blank" rel="noreferrer"
        style={{ color:'var(--sienna)', transition:'opacity 0.2s' }}
        onMouseEnter={e=>e.target.style.opacity='0.7'} onMouseLeave={e=>e.target.style.opacity='1'}>
        github.com/ach0309 ↗
      </a>
    </footer>
  );
}
