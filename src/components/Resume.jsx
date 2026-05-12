import React from 'react';

const skillBars = [
  { name:'Python', level:92 },
  { name:'Machine Learning', level:82 },
  { name:'SQL', level:80 },
  { name:'Data Visualization', level:80 },
  { name:'ReactJS', level:75 },
  { name:'AI Integration', level:76 },
  { name:'Java / JavaScript', level:72 },
];

const experience = [
  {
    title:'Data Science Fellow',
    org:'The Knowledge House',
    date:'Jan 2026 – Present',
    bullets:[
      'Building analytical and ML solutions in Python and SQL — classification models, feature engineering, hyperparameter tuning, and threshold optimization.',
      'Translating complex findings into actionable insights through correlation heatmaps, ROC-AUC curves, feature importance charts, and distribution plots.',
    ],
  },
  {
    title:'Optical Technician',
    org:'Doctors Eye Center',
    date:'May 2025 – Mar 2026',
    bullets:[
      'Created structured documentation to standardize patient care, pretesting, and optical sales workflows.',
      'Identified operational gaps to improve turnaround time; accurately processed lab orders and insurance claims.',
    ],
  },
  {
    title:'Software Developer — Storage Fusion (Guardian)',
    org:'IBM',
    date:'Jun 2021 – May 2023',
    bullets:[
      'Wrote fetch/transform logic integrating Kafka and Prometheus via REST APIs in Python, urllib3, and JSON.',
      'Managed Docker images through JFrog Artifactory on RedHat OpenShift Container Platform.',
    ],
  },
  {
    title:'Software Developer — Storage Fusion (UI)',
    org:'IBM',
    date:'Jun 2021 – May 2023',
    bullets:[
      'Delivered ReactJS features partnering with PM, UI/UX designers, and backend teams.',
      'Diagnosed and resolved code issues; communicated updates across technical and business stakeholders.',
    ],
  },
  {
    title:'Software Developer — Spectrum Protect (Cloud UI)',
    org:'IBM',
    date:'Jun 2021 – May 2023',
    bullets:[
      'Developed UI features using the Dojo JS framework and contributed to design decisions.',
      'Maintained CI/CD pipelines, presented technical reports, and performed security scans for compliance.',
    ],
  },
];

const techPills = ['Python','SQL','Java','JavaScript','ReactJS','HTML/CSS','Git','REST APIs','XML','Figma','IBM Carbon Design','Docker','OpenShift','Kafka','Prometheus'];
const practicePills = ['Agile','CI/CD','SDLC','UI/UX','Statistics','Machine Learning','Feature Engineering','Data Visualization','Forecasting','Prompt Engineering'];

export default function Resume() {
  return (
    <section id="resume" style={{ padding:'6rem 4rem', background:'var(--white)' }}>
      <div className="section-label">Resume</div>
      <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>Experience &amp; Skills</h2>
      <p style={{ color:'var(--muted)', fontWeight:300, maxWidth:'520px', marginBottom:'3rem', lineHeight:1.9 }}>
        Software developer turned data scientist — here's the full picture.
      </p>

      <div style={{ display:'grid', gridTemplateColumns:'260px 1fr', gap:'2.5rem', alignItems:'start' }}>

        {/* Sidebar */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>

          {/* Contact card */}
          <div className="card" style={{ padding:'1.3rem' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.9rem' }}>Contact</div>
            {[
              { icon:'📍', text:'Milford, CT' },
              { icon:'✉️', text:'aeonchavez03@gmail.com', href:'mailto:aeonchavez03@gmail.com' },
              { icon:'📱', text:'203-543-9137' },
              { icon:'💼', text:'linkedin.com/in/aeonchavez', href:'https://linkedin.com/in/aeonchavez' },
              { icon:'🐙', text:'github.com/ach0309', href:'https://github.com/ach0309' },
              { icon:'🌐', text:'aeonchavez.info', href:'http://aeonchavez.info' },
            ].map((c,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'0.5rem', fontSize:'0.8rem', color:'var(--muted)' }}>
                <span style={{ fontSize:'0.85rem' }}>{c.icon}</span>
                {c.href
                  ? <a href={c.href} target="_blank" rel="noreferrer" style={{ color:'var(--sienna)', transition:'opacity 0.2s' }}
                      onMouseEnter={e=>e.target.style.opacity='0.7'} onMouseLeave={e=>e.target.style.opacity='1'}>{c.text}</a>
                  : <span>{c.text}</span>
                }
              </div>
            ))}
          </div>

          {/* Skill bars */}
          <div className="card" style={{ padding:'1.3rem' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'1rem' }}>Technical Skills</div>
            {skillBars.map(s => (
              <div key={s.name} style={{ marginBottom:'0.85rem' }}>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:'0.78rem', color:'var(--espresso)', marginBottom:'4px' }}>
                  <span>{s.name}</span>
                  <span style={{ color:'var(--muted)', fontSize:'0.72rem' }}>{s.level}%</span>
                </div>
                <div style={{ height:'4px', background:'var(--blush)', borderRadius:'2px', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${s.level}%`, background:'linear-gradient(90deg,var(--sienna),var(--terracotta))', borderRadius:'2px' }}/>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="card" style={{ padding:'1.3rem' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.8rem' }}>Education</div>
            <div style={{ fontSize:'0.88rem', fontWeight:500, color:'var(--espresso)', marginBottom:'3px' }}>University of Connecticut</div>
            <div style={{ fontSize:'0.78rem', color:'var(--muted)', marginBottom:'2px' }}>B.S. Computer Science &amp; Engineering</div>
            <div style={{ fontSize:'0.75rem', color:'var(--muted)' }}>Minor in Mathematics · 2021</div>
          </div>

          {/* Languages */}
          <div className="card" style={{ padding:'1.3rem' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.7rem' }}>Languages</div>
            <div style={{ fontSize:'0.85rem', color:'var(--muted)' }}>🇺🇸 English &nbsp;·&nbsp; 🇵🇭 Tagalog</div>
          </div>
        </div>

        {/* Main */}
        <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>

          {/* Summary */}
          <div>
            <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.1em', paddingBottom:'0.5rem', borderBottom:'1px solid var(--border)', marginBottom:'1rem' }}>Summary</div>
            <p style={{ fontSize:'0.88rem', color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.9 }}>
              Software developer with 2+ years at IBM shipping enterprise product features; following a period of caregiving and career transition, now specializing in data science and AI through applied project work and a competitive fellowship.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.1em', paddingBottom:'0.5rem', borderBottom:'1px solid var(--border)', marginBottom:'1.2rem' }}>Experience</div>
            {experience.map((e,i) => (
              <div key={i} style={{
                marginBottom:'1.4rem', paddingLeft:'1rem',
                borderLeft:'2px solid var(--border-light,#f5ede6)',
                transition:'border-color 0.2s',
              }}
                onMouseEnter={el => el.currentTarget.style.borderLeftColor='var(--sienna)'}
                onMouseLeave={el => el.currentTarget.style.borderLeftColor='var(--border-light,#f5ede6)'}
              >
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'0.3rem', marginBottom:'2px' }}>
                  <div style={{ fontSize:'0.92rem', fontWeight:500, color:'var(--espresso)' }}>{e.title}</div>
                  <div style={{ fontSize:'0.72rem', color:'var(--sienna)', fontWeight:400, whiteSpace:'nowrap' }}>{e.date}</div>
                </div>
                <div style={{ fontSize:'0.8rem', color:'var(--muted)', fontStyle:'italic', marginBottom:'0.5rem' }}>{e.org}</div>
                <ul style={{ listStyle:'none', padding:0 }}>
                  {e.bullets.map((b,j) => (
                    <li key={j} style={{ fontSize:'0.82rem', color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.75, paddingLeft:'0.9rem', position:'relative', marginBottom:'0.25rem' }}>
                      <span style={{ position:'absolute', left:0, color:'var(--sienna)', fontSize:'0.65rem', top:'5px' }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.1em', paddingBottom:'0.5rem', borderBottom:'1px solid var(--border)', marginBottom:'1rem' }}>Technologies</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem' }}>
              {techPills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
          </div>

          {/* Practices */}
          <div>
            <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.1em', paddingBottom:'0.5rem', borderBottom:'1px solid var(--border)', marginBottom:'1rem' }}>Practices &amp; Methods</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem' }}>
              {practicePills.map(p => <span key={p} className="pill" style={{ background:'rgba(212,83,126,0.07)', borderColor:'rgba(212,83,126,0.2)', color:'var(--rose)' }}>{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
