// Render each public URL into real HTML: readable without JavaScript and shareable.
const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const root = path.resolve(__dirname, "..");
require("dotenv").config({ path: path.join(root, ".env") });
const originalJS = require.extensions[".js"];
function compile(module, filename) {
  if (!filename.startsWith(path.join(root, "src") + path.sep))
    return originalJS(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [
      [require.resolve("@babel/preset-env"), { targets: { node: "current" } }],
      require.resolve("@babel/preset-react"),
    ],
  });
  module._compile(code, filename);
}
require.extensions[".js"] = compile;
require.extensions[".jsx"] = compile;
require.extensions[".css"] = () => {};
const React = require("react");
const { renderToString } = require("react-dom/server");
const { default: App, pages } = require("../src/App.jsx");
const { site } = require("../src/site/content.js");
const build = path.join(root, "build");
const template = fs.readFileSync(path.join(build, "index.html"), "utf8");
const origin = new URL(process.env.SITE_URL || site.url).origin;
const escape = (str) =>
  String(str).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
function render(route, meta, noindex = false) {
  const canonical = origin + route;
  const schema =
    route === "/"
      ? {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: canonical,
          mainEntity: {
            "@type": "Person",
            name: site.name,
            url: origin,
            jobTitle: "Software Developer",
            sameAs: [site.linkedin, site.github],
          },
        }
      : {
          "@context": "https://schema.org",
          "@type":
            route.startsWith("/blog/") && route !== "/blog/"
              ? "BlogPosting"
              : "WebPage",
          name: meta.title,
          description: meta.description,
          url: canonical,
          author: { "@type": "Person", name: site.name, url: origin },
        };
  const metadata = `<meta name="description" content="${escape(meta.description)}">${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}<meta property="og:title" content="${escape(meta.title)}"><meta property="og:description" content="${escape(meta.description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${schema["@type"] === "BlogPosting" ? "article" : "website"}"><meta property="og:image" content="${origin}/images/ac.jpg"><meta property="og:image:alt" content="Aeon Chavez"><meta name="twitter:card" content="summary"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace("</head>", metadata + "</head>")
    .replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(React.createElement(App, { path: route }))}</div>`,
    );
}
for (const [route, meta] of Object.entries(pages)) {
  const folder = path.join(build, route);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, "index.html"), render(route, meta));
}
fs.writeFileSync(
  path.join(build, "404.html"),
  render(
    "/404/",
    {
      title: "Page not found — Aeon Chavez",
      description: "Find your way back to Aeon’s portfolio.",
    },
    true,
  ),
);
fs.writeFileSync(
  path.join(build, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
    pages,
  )
    .map((route) => `<url><loc>${origin}${route}</loc></url>`)
    .join("")}</urlset>`,
);
fs.writeFileSync(
  path.join(build, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
console.log(
  `Rendered ${Object.keys(pages).length} pages, 404, sitemap, and robots.txt.`,
);
