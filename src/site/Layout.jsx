import React, { useEffect, useRef, useState } from "react";
import { site } from "./content";

const links = [
  ["Home", "/"],
  ["Blogs", "/blog/"],
  ["Portfolio", "/portfolio/"],
  ["Services", "/services/"],
  ["Contact", "/contact/"],
];
export function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
export function External({ href, children, className = "text-link" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <Arrow diagonal />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function Note({ children, className = "" }) {
  return (
    <span aria-hidden="true" className={`hand-note ${className}`}>
      {children}
    </span>
  );
}
export function Header({ path }) {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (e) => {
      if (
        !nav.current?.contains(e.target) &&
        !button.current?.contains(e.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", outside);
    };
  }, [open]);
  return (
    <header className="site-header wrap">
      <a href="/" className="monogram" aria-label="Aeon Chavez — Home">
        AC
      </a>
      <button
        ref={button}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{open ? "×" : "+"}</span>
      </button>
      <nav
        ref={nav}
        id="site-nav"
        aria-label="Main navigation"
        className={open ? "nav-open" : ""}
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            aria-current={
              (href === "/" ? path === "/" : path.startsWith(href))
                ? "page"
                : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <a href="/" className="footer-name">
          Aeon Chavez
        </a>
        <div className="footer-links">
          <External href={site.linkedin}>LinkedIn</External>
          <External href={site.github}>GitHub</External>
          <a href={`mailto:${site.email}`}>
            Email <Arrow diagonal />
          </a>
        </div>
      </div>
    </footer>
  );
}
export function Closing({ services = false }) {
  return (
    <section className="closing paper" aria-labelledby="closing-title">
      <div className="wrap closing-inner">
        <div>
          <h2 id="closing-title" className="editorial">
            {services ? "Not sure where to start?" : "Have something in mind?"}
          </h2>
          <p>
            {services
              ? "A conversation is a good first step."
              : "A role, a project, or a good conversation."}
          </p>
          <div className="link-row">
            <a
              className="text-link"
              href={services ? "/contact/?type=project#inquiry" : "/contact/"}
            >
              Get in touch <Arrow />
            </a>
            {!services && (
              <>
                <span className="closing-link-divider" aria-hidden="true" />
                <a className="text-link" href="/services/">
                  Explore services <Arrow />
                </a>
              </>
            )}
          </div>
        </div>
        <Note>Let’s talk it through.</Note>
      </div>
    </section>
  );
}
export function PageIntro({ label, title, children, note }) {
  return (
    <div className="page-intro wrap">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {children && <div className="intro-copy">{children}</div>}
      {note && <Note>{note}</Note>}
    </div>
  );
}
export function Layout({ path, children, className = "" }) {
  const servicesPage = path === "/services/";
  const contactPage = path === "/contact/";
  return (
    <div className={`site ${className}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={path} />
      <main id="main">{children}</main>
      <div className="site-ending">
        {!contactPage && <Closing services={servicesPage} />}
        <Footer />
      </div>
    </div>
  );
}
