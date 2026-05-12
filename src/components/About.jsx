import React from 'react';

const highlights = [
  { icon:'🏗️', title:'2+ Years at IBM', desc:'Shipped enterprise features on Storage Fusion & Spectrum Protect — UI, APIs, CI/CD.' },
  { icon:'📊', title:'Data Science Fellow', desc:'6-month accelerated fellowship at The Knowledge House — ML, feature engineering, stakeholder insights.' },
  { icon:'🤖', title:'AI Hackathon Builder', desc:'Built a live chatbot + CRM agent for a real bakery — validated by ~50 attendees, exhausted the API budget on launch.' },
  { icon:'🌐', title:'Bilingual', desc:'Fluent in English and Tagalog — great for diverse teams and stakeholder communication.' },
  { icon:'🎓', title:'UConn CS & Engineering', desc:'B.S. Computer Science & Engineering, Minor in Mathematics, 2021.' },
];

const skills = ['Python','SQL','Machine Learning','ReactJS','AI Integration','Data Visualization','REST APIs','Agile / CI/CD','Figma','IBM Carbon Design'];

export default function About() {
  return (
    <section id="about" style={{ padding:'6rem 4rem', background:'var(--linen)' }}>
      <div className="section-label">About Me</div>
      <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>Background &amp; Interests</h2>
      <p style={{ color:'var(--muted)', fontWeight:300, maxWidth:'520px', marginBottom:'3.5rem', lineHeight:1.9 }}>
        A little bit about who I am, what drives me, and what I bring to the table.
      </p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>

        {/* Left — text */}
        <div>
          <p style={{ color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.95, marginBottom:'1.1rem' }}>
            I'm a software developer and data scientist based in <strong style={{fontWeight:500,color:'var(--espresso)'}}>Milford, CT</strong>, with 2+ years at IBM shipping enterprise features across storage and cloud UI teams. After a period of caregiving, I redirected my focus toward <strong style={{fontWeight:500,color:'var(--espresso)'}}>data science and AI</strong> — areas I find genuinely exciting and impactful.
          </p>
          <p style={{ color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.95, marginBottom:'1.1rem' }}>
            Today I'm a <strong style={{fontWeight:500,color:'var(--espresso)'}}>Data Science Fellow at The Knowledge House</strong>, building ML solutions, working through real datasets, and applying the engineering discipline I honed at IBM to data problems. I care about building things that are useful, well-documented, and stakeholder-ready.
          </p>
          <p style={{ color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.95, marginBottom:'1.5rem' }}>
            Outside of code, I'm drawn to the overlap of <strong style={{fontWeight:500,color:'var(--espresso)'}}>AI and small business impact</strong>. My hackathon project Lexi/Crust was built for a real bakery and validated live by 50 attendees — that kind of tangible impact is what motivates me.
          </p>

          {/* Skill pills */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem', marginTop:'0.5rem' }}>
            {skills.map(s => (
              <span key={s} style={{
                fontSize:'0.75rem', padding:'4px 13px', borderRadius:'16px',
                background:'rgba(193,113,74,0.08)', border:'1px solid rgba(193,113,74,0.22)',
                color:'var(--sienna)', fontWeight:400,
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Right — highlight cards */}
        <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
          {highlights.map((h,i) => (
            <div key={i} className="card" style={{
              padding:'1rem 1.25rem', display:'flex', gap:'1rem', alignItems:'flex-start',
              transition:'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(193,113,74,0.4)'; e.currentTarget.style.transform='translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)'; }}
            >
              <div style={{
                width:'34px', height:'34px', borderRadius:'8px',
                background:'var(--blush)', border:'1px solid var(--border)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1rem', flexShrink:0,
              }}>{h.icon}</div>
              <div>
                <div style={{ fontSize:'0.88rem', fontWeight:500, color:'var(--espresso)', marginBottom:'3px' }}>{h.title}</div>
                <div style={{ fontSize:'0.78rem', color:'var(--muted)', fontWeight:300, lineHeight:1.6 }}>{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
