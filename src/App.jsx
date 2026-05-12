import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Blog />
        <hr className="divider" />
        <Resume />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
