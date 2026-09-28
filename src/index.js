import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App, { pages, normalizePath } from "./App";
const element = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
document.title =
  pages[normalizePath(window.location.pathname)]?.title ||
  "Page not found — Aeon Chavez";
if (element.hasChildNodes()) hydrateRoot(element, app);
else createRoot(element).render(app);
