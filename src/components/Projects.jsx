import React, { useState, useEffect } from 'react';

const projects = [
  {
    id:'fraud',
    type:'ML · Classification · Apr 2026',
    title:'Financial Fraud Detection',
    desc:'Ensemble classifier on 6M+ bank transactions — 96% precision, 0.99 AUC, tuned recall to 77%.',
    tags:['Python','Scikit-learn','EDA','Feature Engineering'],
    github:'https://github.com/ach0309/Fraud_Detection_Project',
    metrics:[{val:'96%',label:'Precision'},{val:'0.99',label:'AUC Score'},{val:'77%',label:'Recall'},{val:'6M+',label:'Transactions'}],
    bullets:[
      'Achieved 96% precision and 0.99 AUC on the test set using ensemble methods',
      'Tuned decision threshold to boost recall to 77%, balancing precision/recall trade-off',
      'Engineered 3 features from EDA that ranked highest in feature importance',
      'Documented data quality issues and their impact on model reliability',
    ],
    tree:[
      { indent:0, type:'dir', name:'Fraud_Detection_Project/' },
      { indent:1, type:'file', name:'fraud_detection.ipynb — main analysis notebook' },
      { indent:1, type:'dir', name:'data/' },
      { indent:2, type:'file', name:'transactions.csv — 6M+ records' },
      { indent:1, type:'dir', name:'visuals/ — ROC, confusion matrix, feature importance' },
      { indent:1, type:'file', name:'README.md' },
    ],
    vis: 'roc',
  },
  {
    id:'forest',
    type:'Regression · EDA · Mar 2026',
    title:'Forest Fire Area Prediction',
    desc:'3 linear regression models on Montesinho Park data — identified predictor limitations and recommended improved ML approaches.',
    tags:['Python','Linear Regression','EDA','Matplotlib','Seaborn'],
    github:'https://github.com/ach0309/linear_regression_project',
    metrics:[{val:'3',label:'Models Built'},{val:'Portugal',label:'Dataset'},{val:'EDA-first',label:'Approach'}],
    bullets:[
      'Built and compared 3 regression variants: baseline, log-transformed target, and feature-selected model',
      'Identified weak correlations between weather variables and burn area through EDA',
      'Flagged multicollinearity risks and skewed burn area distribution',
      'Recommended alternative approaches (Random Forest, XGBoost) with data-backed reasoning',
    ],
    tree:[
      { indent:0, type:'dir', name:'linear_regression_project/' },
      { indent:1, type:'file', name:'forest_fire_analysis.ipynb' },
      { indent:1, type:'dir', name:'data/' },
      { indent:2, type:'file', name:'forestfires.csv — Montesinho dataset' },
      { indent:1, type:'dir', name:'plots/ — scatter plots, residuals, heatmaps' },
      { indent:1, type:'file', name:'README.md' },
    ],
    vis: 'scatter',
  },
  {
    id:'dough',
    type:'AI · Chatbot · CRM · May 2026',
    title:'Everything Dough — AI Chatbot + CRM',
    desc:'Lexi (booking chatbot) + Crust (analytics agent) built live for a real bakery — validated by ~50 attendees at the Synchrony/Knowledge House hackathon.',
    tags:['AI Integration','Prompt Engineering','Google Calendar API','CRM'],
    github:'https://github.com/ethan27625/Everything-Dough-Mockup-Hackathon',
    metrics:[{val:'~50',label:'Live Users'},{val:'2',label:'AI Agents'},{val:'Live',label:'Validated'}],
    bullets:[
      'Led team strategy, prompt engineering, and live presentation',
      'Lexi captures structured lead data in real-time via Google Calendar integration',
      'Crust surfaces revenue insights, churn flags, and customer segmentation',
      'Validated live by nearly 50 attendees — exhausted API token budget on the spot',
    ],
    tree:[
      { indent:0, type:'dir', name:'Everything-Dough-Mockup-Hackathon/' },
      { indent:1, type:'dir', name:'lexi/ — booking chatbot agent' },
      { indent:1, type:'dir', name:'crust/ — analytics CRM agent' },
      { indent:1, type:'dir', name:'integrations/ — Google Calendar API' },
      { indent:1, type:'file', name:'README.md' },
    ],
    vis: 'agent',
  },
];

function RocVis() {
  return (
    <svg viewBox="0 0 400 200" style={{width:'100%',display:'block'}}>
      <line x1="40" y1="10" x2="40" y2="170" stroke="#ecddd3" strokeWidth="1"/>
      <line x1="40" y1="170" x2="380" y2="170" stroke="#ecddd3" strokeWidth="1"/>
      <line x1="40" y1="170" x2="380" y2="10" stroke="#dcc8bc" strokeWidth="1" strokeDasharray="4,3"/>
      <path d="M40,170 C70,55 100,22 130,17 C180,10 240,10 380,10" stroke="#c1714a" strokeWidth="2.5" fill="none"/>
      <path d="M40,170 C70,55 100,22 130,17 C180,10 240,10 380,10 L380,170 Z" fill="rgba(193,113,74,0.07)"/>
      <text x="290" y="35" fill="#c1714a" fontSize="13" fontFamily="sans-serif" fontWeight="600">AUC = 0.99</text>
      <text x="210" y="188" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif">False Positive Rate</text>
      <text x="18" y="90" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif" transform="rotate(-90,18,90)">True Positive Rate</text>
    </svg>
  );
}

function ScatterVis() {
  const pts = [
    {x:50,y:140,c:'#D85A30'},{x:80,y:118,c:'#D85A30'},{x:110,y:100,c:'#c1714a'},
    {x:140,y:88,c:'#c1714a'},{x:165,y:92,c:'#D4537E'},{x:195,y:72,c:'#D4537E'},
    {x:220,y:58,c:'#D4537E'},{x:250,y:50,c:'#9a7060'},{x:275,y:42,c:'#9a7060'},{x:300,y:32,c:'#9a7060'},
  ];
  return (
    <svg viewBox="0 0 380 190" style={{width:'100%',display:'block'}}>
      <line x1="35" y1="10" x2="35" y2="165" stroke="#ecddd3" strokeWidth="1"/>
      <line x1="35" y1="165" x2="340" y2="165" stroke="#ecddd3" strokeWidth="1"/>
      <line x1="35" y1="165" x2="320" y2="25" stroke="#dcc8bc" strokeWidth="1" strokeDasharray="4,3"/>
      {pts.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="5" fill={p.c} opacity="0.75"/>)}
      <text x="185" y="182" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Temperature (°C)</text>
      <text x="14" y="88" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif" transform="rotate(-90,14,88)">Burn Area (ha)</text>
    </svg>
  );
}

function AgentVis() {
  return (
    <svg viewBox="0 0 400 160" style={{width:'100%',display:'block'}}>
      <rect x="155" y="55" width="90" height="42" rx="8" fill="rgba(193,113,74,0.12)" stroke="#c1714a" strokeWidth="1.5"/>
      <text x="200" y="73" fill="#c1714a" fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">LEXI</text>
      <text x="200" y="87" fill="#9a7060" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Booking Chatbot</text>
      <rect x="270" y="55" width="90" height="42" rx="8" fill="rgba(212,83,126,0.1)" stroke="#D4537E" strokeWidth="1.5"/>
      <text x="315" y="73" fill="#D4537E" fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">CRUST</text>
      <text x="315" y="87" fill="#9a7060" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Analytics CRM</text>
      <rect x="30" y="25" width="90" height="34" rx="6" fill="var(--blush,#fdf0e8)" stroke="#ecddd3" strokeWidth="1"/>
      <text x="75" y="45" fill="#7a5a4a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Google Calendar</text>
      <rect x="30" y="100" width="90" height="34" rx="6" fill="var(--blush,#fdf0e8)" stroke="#ecddd3" strokeWidth="1"/>
      <text x="75" y="120" fill="#7a5a4a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Lead Capture CRM</text>
      <line x1="120" y1="76" x2="155" y2="76" stroke="#c1714a" strokeWidth="1.2" strokeDasharray="3,2"/>
      <line x1="75" y1="59" x2="155" y2="68" stroke="#ecddd3" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="75" y1="100" x2="155" y2="88" stroke="#ecddd3" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="245" y1="76" x2="270" y2="76" stroke="#D4537E" strokeWidth="1.2" strokeDasharray="3,2"/>
      <text x="200" y="148" fill="#c1714a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">AI for Impact Hackathon · May 2026</text>
    </svg>
  );
}

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'var(--white)', border:`1px solid ${hovered ? 'rgba(193,113,74,0.45)' : 'var(--border)'}`,
        borderRadius:'14px', overflow:'hidden', cursor:'pointer',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(193,113,74,0.1)' : 'none',
        transition:'all 0.25s ease',
      }}
    >
      {/* Vis area */}
      <div style={{ height:'170px', background:'var(--blush)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
        {project.vis === 'roc' && <RocVis/>}
        {project.vis === 'scatter' && <ScatterVis/>}
        {project.vis === 'agent' && <AgentVis/>}
      </div>
      <div style={{ padding:'1.3rem 1.4rem 1.5rem' }}>
        <div style={{ fontSize:'0.7rem', letterSpacing:'0.09em', textTransform:'uppercase', color:'var(--sienna)', marginBottom:'0.4rem', fontWeight:500 }}>{project.type}</div>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', fontWeight:600, color:'var(--espresso)', marginBottom:'0.5rem', lineHeight:1.3 }}>{project.title}</h3>
        <p style={{ fontSize:'0.83rem', color:'var(--muted)', fontWeight:300, lineHeight:1.7, marginBottom:'1rem' }}>{project.desc}</p>
        <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap', marginBottom:'1rem' }}>
          {project.tags.map(t => <span key={t} className="pill" style={{fontSize:'0.68rem'}}>{t}</span>)}
        </div>
        <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ fontSize:'0.78rem', color:'var(--sienna)', fontWeight:500 }}>↗ GitHub</a>
          <span style={{ fontSize:'0.78rem', color:'var(--muted)', fontWeight:400 }}>+ View Details</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position:'fixed', inset:0, zIndex:200,
        background:'rgba(44,24,16,0.45)', backdropFilter:'blur(6px)',
        display:'flex', alignItems:'flex-start', justifyContent:'center',
        overflowY:'auto', padding:'2rem',
      }}
    >
      <div style={{
        background:'var(--white)', borderRadius:'16px',
        border:'1px solid var(--border)', maxWidth:'700px', width:'100%',
        margin:'auto', padding:'2.5rem', position:'relative',
      }}>
        <button onClick={onClose} style={{
          position:'absolute', top:'1.2rem', right:'1.2rem',
          background:'var(--blush)', border:'1px solid var(--border)',
          borderRadius:'6px', padding:'5px 12px', fontSize:'0.78rem',
          color:'var(--muted)', fontFamily:'var(--font-body)',
        }}>✕ Close</button>

        <div style={{ fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--sienna)', marginBottom:'0.5rem', fontWeight:500 }}>{project.type}</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.9rem', fontWeight:600, marginBottom:'0.3rem' }}>{project.title}</h2>
        <p style={{ fontSize:'0.82rem', color:'var(--muted)', marginBottom:'1.5rem' }}>{project.tags.join(' · ')}</p>

        {/* Metrics */}
        <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap', marginBottom:'1.8rem' }}>
          {project.metrics.map(m => (
            <div key={m.label} style={{ background:'var(--blush)', borderRadius:'8px', padding:'0.8rem 1.2rem', flex:'1', minWidth:'90px', border:'1px solid var(--border)' }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:600, color:'var(--sienna)' }}>{m.val}</div>
              <div style={{ fontSize:'0.68rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.07em' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Visualization */}
        <div style={{ background:'var(--blush)', borderRadius:'10px', padding:'1rem', marginBottom:'1.5rem', border:'1px solid var(--border)' }}>
          {project.vis === 'roc' && <RocVis/>}
          {project.vis === 'scatter' && <ScatterVis/>}
          {project.vis === 'agent' && <AgentVis/>}
        </div>

        {/* Highlights */}
        <div style={{ marginBottom:'1.5rem' }}>
          <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.8rem', paddingBottom:'0.4rem', borderBottom:'1px solid var(--border)' }}>Key Highlights</div>
          <ul style={{ listStyle:'none', padding:0 }}>
            {project.bullets.map((b,i) => (
              <li key={i} style={{ fontSize:'0.85rem', color:'var(--espresso-mid)', fontWeight:300, lineHeight:1.8, marginBottom:'0.35rem', paddingLeft:'1.1rem', position:'relative' }}>
                <span style={{ position:'absolute', left:0, color:'var(--sienna)', fontSize:'0.7rem', top:'4px' }}>→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* File tree */}
        <div style={{ marginBottom:'1.5rem' }}>
          <div style={{ fontSize:'0.72rem', fontWeight:600, color:'var(--sienna)', textTransform:'uppercase', letterSpacing:'0.09em', marginBottom:'0.8rem', paddingBottom:'0.4rem', borderBottom:'1px solid var(--border)' }}>Repository Structure</div>
          <div style={{ background:'var(--linen)', borderRadius:'8px', padding:'1rem 1.2rem', fontFamily:'Courier New, monospace', fontSize:'0.8rem' }}>
            {project.tree.map((f,i) => (
              <div key={i} style={{ lineHeight:1.9, paddingLeft:`${f.indent * 16}px`, color: f.type === 'dir' ? 'var(--sienna)' : 'var(--espresso-mid)' }}>
                {f.indent > 0 && <span style={{ color:'var(--border)', marginRight:'4px' }}>{'├── '}</span>}
                {f.name}
              </div>
            ))}
          </div>
        </div>

        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ display:'inline-flex' }}>↗ View on GitHub</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" style={{ padding:'6rem 4rem', background:'var(--white)' }}>
      <div className="section-label">Work</div>
      <h2 style={{ fontSize:'clamp(2rem,4vw,2.8rem)', marginBottom:'0.5rem' }}>My Latest Projects</h2>
      <p style={{ color:'var(--muted)', fontWeight:300, maxWidth:'520px', marginBottom:'3rem', lineHeight:1.9 }}>
        A mix of data science, ML, and AI — each built with real data and stakeholder-ready outputs. Click any card for details.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:'1.4rem' }}>
        {projects.map(p => <ProjectCard key={p.id} project={p} onClick={setSelected}/>)}
      </div>
      {selected && <Modal project={selected} onClose={() => setSelected(null)}/>}
    </section>
  );
}
