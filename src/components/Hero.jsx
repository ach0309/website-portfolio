import React from 'react';

const tags = ['Python','Machine Learning','AI Integration','ReactJS','SQL','Data Visualization','Bilingual EN/TL'];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      justifyContent:'center', padding:'8rem 4rem 4rem',
      background:'var(--white)', position:'relative', overflow:'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position:'absolute', top:'-80px', right:'-60px',
        width:'420px', height:'420px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(193,113,74,0.07) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:'60px', left:'200px',
        width:'260px', height:'260px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(212,83,126,0.05) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>
      {/* Fine grid texture */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(193,113,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(193,113,74,0.04) 1px, transparent 1px)',
        backgroundSize:'48px 48px',
        maskImage:'radial-gradient(ellipse 60% 60% at 80% 30%, black, transparent)',
      }}/>

      <div style={{ maxWidth:'780px', position:'relative', zIndex:1 }}>
        <div className="section-label fade-up" style={{ animationDelay:'0.05s' }}>
          Software Developer · Data Scientist
        </div>

        <h1 className="fade-up" style={{
          fontSize:'clamp(3.5rem, 8vw, 6rem)', fontWeight:600,
          lineHeight:1.0, marginBottom:'1.2rem', animationDelay:'0.15s',
        }}>
          Aeon<br/>
          <em style={{ color:'var(--sienna)', fontStyle:'italic' }}>Chavez</em>
        </h1>

        <p className="fade-up" style={{
          fontSize:'1.05rem', fontWeight:300, color:'var(--muted)',
          maxWidth:'500px', marginBottom:'2rem', lineHeight:1.9,
          animationDelay:'0.25s',
        }}>
          Building data-driven products at the intersection of AI, software engineering, and human impact.
          IBM alum · Data Science Fellow · Hackathon builder.
        </p>

        <div className="fade-up" style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap', animationDelay:'0.35s' }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>

        <div className="fade-up" style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'2.5rem', animationDelay:'0.45s' }}>
          {tags.map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
