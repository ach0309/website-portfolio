import React from 'react';

const contactItems = [
  { icon:'✉️', label:'Email', value:'aeonchavez03@gmail.com', href:'mailto:aeonchavez03@gmail.com' },
  { icon:'📱', label:'Phone', value:'203-543-9137', href:'tel:2035439137' },
  { icon:'💼', label:'LinkedIn', value:'linkedin.com/in/aeonchavez', href:'https://linkedin.com/in/aeonchavez' },
  { icon:'🐙', label:'GitHub', value:'github.com/ach0309', href:'https://github.com/ach0309' },
  { icon:'📍', label:'Location', value:'Milford, CT', href:null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding:'6rem 4rem', background:'var(--linen)' }}>
      <div className="section-label">Get In Touch</div>
      <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>Contact Me</h2>
      <p style={{ color:'var(--muted)', fontWeight:300, maxWidth:'520px', marginBottom:'3.5rem', lineHeight:1.9 }}>
        I'm open to data science roles, software engineering opportunities, and interesting collaborations — especially at the intersection of AI and real-world impact.
      </p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>

        {/* Left */}
        <div>
          <p style={{ fontSize:'0.95rem', color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.9, marginBottom:'1rem' }}>
            Whether you have a role in mind, a project idea, or just want to connect — feel free to reach out. I respond promptly and love meeting people who are excited about data and AI.
          </p>
          <p style={{ fontSize:'0.95rem', color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.9, marginBottom:'2rem' }}>
            You can also find my work on GitHub and follow my journey on LinkedIn, where I share posts on data science, lessons learned, and what I'm building.
          </p>
          <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap' }}>
            <a href="mailto:aeonchavez03@gmail.com" className="btn-primary">✉ Send an Email</a>
            <a href="https://linkedin.com/in/aeonchavez" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
          </div>
        </div>

        {/* Right — contact cards */}
        <div style={{ display:'flex', flexDirection:'column', gap:'0.8rem' }}>
          {contactItems.map((c,i) => (
            <div key={i} className="card" style={{
              padding:'1rem 1.25rem', display:'flex', alignItems:'center', gap:'1rem',
              transition:'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(193,113,74,0.4)'; e.currentTarget.style.transform='translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)'; }}
            >
              <div style={{
                width:'36px', height:'36px', borderRadius:'8px',
                background:'var(--blush)', border:'1px solid var(--border)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1rem', flexShrink:0,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize:'0.7rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                      style={{ fontSize:'0.88rem', color:'var(--sienna)', fontWeight:400, transition:'opacity 0.2s' }}
                      onMouseEnter={e=>e.target.style.opacity='0.7'} onMouseLeave={e=>e.target.style.opacity='1'}>{c.value}</a>
                  : <div style={{ fontSize:'0.88rem', color:'var(--espresso)', fontWeight:400 }}>{c.value}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
