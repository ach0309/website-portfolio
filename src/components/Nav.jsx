import React, { useState, useEffect } from 'react';

const sections = ['about','projects','blog','resume','contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      setActive(current || '');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1rem 4rem',
    background: scrolled ? 'rgba(253,248,244,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #ecddd3' : '1px solid transparent',
    transition: 'all 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      <a href="#home" style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'1.3rem', color:'var(--sienna)', fontWeight:600 }}>AC</a>

      <ul style={{ display:'flex', gap:'2rem', listStyle:'none' }}>
        {sections.map(s => (
          <li key={s}>
            <a
              href={`#${s}`}
              style={{
                fontSize:'0.82rem', fontWeight: 400,
                color: active === s ? 'var(--sienna)' : 'var(--muted)',
                letterSpacing:'0.05em', transition:'color 0.2s',
                borderBottom: active === s ? '1px solid var(--sienna)' : '1px solid transparent',
                paddingBottom:'2px',
                textTransform: 'capitalize',
              }}
            >{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
