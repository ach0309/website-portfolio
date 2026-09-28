const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const root = path.resolve(__dirname, "../build");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".ttf": "font/ttf",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
http
  .createServer(async (req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
    } catch {
      res.writeHead(400).end();
      return;
    }
    // Netlify handles submissions after deployment; local previews must not fake success.
    if (req.method === "POST" && pathname === "/contact/") {
      res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Form submission is available on the configured Netlify site.");
      return;
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405).end();
      return;
    }
    let target = path.resolve(root, "." + pathname);
    if (!target.startsWith(root + path.sep) && target !== root) {
      res.writeHead(403).end();
      return;
    }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      if (!pathname.endsWith("/")) {
        res
          .writeHead(308, {
            Location:
              pathname + "/" + new URL(req.url, "http://localhost").search,
          })
          .end();
        return;
      }
      target = path.join(target, "index.html");
    }
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      res.statusCode = 404;
      target = path.join(root, "404.html");
    }
    if (!fs.existsSync(target)) {
      res.writeHead(503).end("Run npm run build first.");
      return;
    }
    res.setHeader(
      "Content-Type",
      mime[path.extname(target)] || "application/octet-stream",
    );
    res.setHeader("X-Content-Type-Options", "nosniff");
    if (req.method === "HEAD") res.end();
    else fs.createReadStream(target).pipe(res);
  })
  .listen(Number(process.env.PORT || 4173), "127.0.0.1", () =>
    console.log(
      `Portfolio preview: http://localhost:${process.env.PORT || 4173}`,
    ),
  );
