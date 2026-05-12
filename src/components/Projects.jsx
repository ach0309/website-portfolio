import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import { PROJECTS_CONTENT } from '../strings';

function RocVis() {
  return (
    <svg viewBox="0 0 400 200" style={{ width: '100%', display: 'block' }}>
      <line x1="40" y1="10" x2="40" y2="170" stroke="#ecddd3" strokeWidth="1" />
      <line x1="40" y1="170" x2="380" y2="170" stroke="#ecddd3" strokeWidth="1" />
      <line x1="40" y1="170" x2="380" y2="10" stroke="#dcc8bc" strokeWidth="1" strokeDasharray="4,3" />
      <path d="M40,170 C70,55 100,22 130,17 C180,10 240,10 380,10" stroke="#c1714a" strokeWidth="2.5" fill="none" />
      <path d="M40,170 C70,55 100,22 130,17 C180,10 240,10 380,10 L380,170 Z" fill="rgba(193,113,74,0.07)" />
      <text x="290" y="35" fill="#c1714a" fontSize="13" fontFamily="sans-serif" fontWeight="600">AUC = 0.99</text>
      <text x="210" y="188" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif">False Positive Rate</text>
      <text x="18" y="90" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif" transform="rotate(-90,18,90)">True Positive Rate</text>
    </svg>
  );
}

function ScatterVis() {
  const pts = [
    { x: 50,  y: 140, c: '#D85A30' }, { x: 80,  y: 118, c: '#D85A30' },
    { x: 110, y: 100, c: '#c1714a' }, { x: 140, y: 88,  c: '#c1714a' },
    { x: 165, y: 92,  c: '#D4537E' }, { x: 195, y: 72,  c: '#D4537E' },
    { x: 220, y: 58,  c: '#D4537E' }, { x: 250, y: 50,  c: '#9a7060' },
    { x: 275, y: 42,  c: '#9a7060' }, { x: 300, y: 32,  c: '#9a7060' },
  ];
  return (
    <svg viewBox="0 0 380 190" style={{ width: '100%', display: 'block' }}>
      <line x1="35" y1="10" x2="35" y2="165" stroke="#ecddd3" strokeWidth="1" />
      <line x1="35" y1="165" x2="340" y2="165" stroke="#ecddd3" strokeWidth="1" />
      <line x1="35" y1="165" x2="320" y2="25" stroke="#dcc8bc" strokeWidth="1" strokeDasharray="4,3" />
      {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.c} opacity="0.75" />)}
      <text x="185" y="182" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Temperature (°C)</text>
      <text x="14" y="88" fill="#9a7060" fontSize="10" textAnchor="middle" fontFamily="sans-serif" transform="rotate(-90,14,88)">Burn Area (ha)</text>
    </svg>
  );
}

function AgentVis() {
  return (
    <svg viewBox="0 0 400 160" style={{ width: '100%', display: 'block' }}>
      <rect x="155" y="55" width="90" height="42" rx="8" fill="rgba(193,113,74,0.12)" stroke="#c1714a" strokeWidth="1.5" />
      <text x="200" y="73" fill="#c1714a" fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">LEXI</text>
      <text x="200" y="87" fill="#9a7060" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Booking Chatbot</text>
      <rect x="270" y="55" width="90" height="42" rx="8" fill="rgba(212,83,126,0.1)" stroke="#D4537E" strokeWidth="1.5" />
      <text x="315" y="73" fill="#D4537E" fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">CRUST</text>
      <text x="315" y="87" fill="#9a7060" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Analytics CRM</text>
      <rect x="30" y="25" width="90" height="34" rx="6" fill="#fdf0e8" stroke="#ecddd3" strokeWidth="1" />
      <text x="75" y="45" fill="#7a5a4a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Google Calendar</text>
      <rect x="30" y="100" width="90" height="34" rx="6" fill="#fdf0e8" stroke="#ecddd3" strokeWidth="1" />
      <text x="75" y="120" fill="#7a5a4a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Lead Capture CRM</text>
      <line x1="120" y1="76" x2="155" y2="76" stroke="#c1714a" strokeWidth="1.2" strokeDasharray="3,2" />
      <line x1="75" y1="59" x2="155" y2="68" stroke="#ecddd3" strokeWidth="1" strokeDasharray="3,2" />
      <line x1="75" y1="100" x2="155" y2="88" stroke="#ecddd3" strokeWidth="1" strokeDasharray="3,2" />
      <line x1="245" y1="76" x2="270" y2="76" stroke="#D4537E" strokeWidth="1.2" strokeDasharray="3,2" />
      <text x="200" y="148" fill="#c1714a" fontSize="9" textAnchor="middle" fontFamily="sans-serif">AI for Impact Hackathon · May 2026</text>
    </svg>
  );
}

const VisMap = { roc: RocVis, scatter: ScatterVis, agent: AgentVis };

function ProjectCard({ project, onClick }) {
  const Vis = VisMap[project.vis];
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-vis"><Vis /></div>
      <div className="project-body">
        <div className="project-type">{project.type}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="project-gh-link"
            onClick={e => e.stopPropagation()}>{PROJECTS_CONTENT.githubLabel}</a>
          <span className="project-detail-link">{PROJECTS_CONTENT.detailsLabel}</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  const Vis = VisMap[project.vis];
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>{PROJECTS_CONTENT.closeLabel}</button>
        <div className="modal-badge">{project.type}</div>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-meta">{project.tags.join(' · ')}</p>

        <div className="modal-metrics">
          {project.metrics.map(m => (
            <div key={m.label} className="modal-metric">
              <div className="modal-metric-val">{m.val}</div>
              <div className="modal-metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="modal-vis"><Vis /></div>

        <div className="modal-section-title">{PROJECTS_CONTENT.sections.highlights}</div>
        <ul className="modal-bullets">
          {project.bullets.map((b, i) => <li key={i} className="modal-bullet">{b}</li>)}
        </ul>

        <div className="modal-section-title">{PROJECTS_CONTENT.sections.structure}</div>
        <div className="modal-tree">
          {project.tree.map((f, i) => (
            <div key={i} className={`tree-line ${f.type}`} style={{ paddingLeft: `${f.indent * 16}px` }}>
              {f.indent > 0 && <span className="tree-indent">├── </span>}
              {f.name}
            </div>
          ))}
        </div>

        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
          {PROJECTS_CONTENT.viewOnGithub}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="projects">
      <div className="section-label">{PROJECTS_CONTENT.sectionLabel}</div>
      <h2>{PROJECTS_CONTENT.heading}</h2>
      <p className="section-sub">{PROJECTS_CONTENT.subheading}</p>
      <div className="projects-grid">
        {PROJECTS_CONTENT.projects.map(p => (
          <ProjectCard key={p.id} project={p} onClick={setSelected} />
        ))}
      </div>
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
