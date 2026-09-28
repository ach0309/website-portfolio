import React from "react";
import { Layout } from "./site/Layout";
import Home from "./site/Home";
import Portfolio from "./site/Portfolio";
import Services from "./site/Services";
import Contact from "./site/Contact";
import { Blog, Article } from "./site/Writing";
import { posts } from "./site/posts";
export function normalizePath(path) {
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
}
export const pages = {
  "/": {
    title: "Aeon Chavez — Software Developer",
    description:
      "Software development, data analysis, and practical AI. Explore Aeon Chavez’s experience, projects, writing, and freelance services.",
  },
  "/portfolio/": {
    title: "Portfolio — Aeon Chavez",
    description:
      "Software, data, and AI projects: Everything Dough, audio classification, fraud detection, and analytical work. Explore the code and project contributions.",
  },
  "/services/": {
    title: "Services — Aeon Chavez",
    description:
      "Website creation, updates and upkeep, social media support, dashboards, and data analysis by Aeon Chavez. AI and automation services are upcoming.",
  },
  "/blog/": {
    title: "Blog — Aeon Chavez",
    description:
      "Personal reflections on learning, building, and finding a path in tech.",
  },
  "/contact/": {
    title: "Contact — Aeon Chavez",
    description:
      "Get in touch about a role, collaboration, or project. Send Aeon a message or connect through LinkedIn and GitHub.",
  },
  ...Object.fromEntries(
    posts.map((p) => [
      `/blog/${p.slug}/`,
      { title: `${p.title} — Aeon Chavez`, description: p.excerpt },
    ]),
  ),
};
export default function App({ path: initialPath }) {
  const path = normalizePath(
    initialPath ||
      (typeof window !== "undefined" ? window.location.pathname : "/"),
  );
  const post = posts.find((p) => path === `/blog/${p.slug}/`);
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/portfolio/") page = <Portfolio />;
  else if (path === "/services/") page = <Services />;
  else if (path === "/blog/") page = <Blog />;
  else if (path === "/contact/") page = <Contact />;
  else if (post) page = <Article post={post} />;
  else
    page = (
      <section className="wrap not-found">
        <p className="eyebrow">404</p>
        <h1>This page isn’t here.</h1>
        <p>Let’s get you back to something useful.</p>
        <a className="button" href="/">
          Back to Home →
        </a>
      </section>
    );
  return (
    <Layout path={path} className={path === "/" ? "home-page" : ""}>
      {page}
    </Layout>
  );
}
