// Verify the contract Netlify discovers at deployment against the actual built form.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");
const root = path.resolve(__dirname, "..");
function documentAt(file) {
  return new JSDOM(fs.readFileSync(path.join(root, file), "utf8")).window
    .document;
}
const names = (form) =>
  [...form.querySelectorAll("[name]")].map((el) => el.name).sort();
test("Netlify registration matches every submitted field in the prerendered React form", () => {
  const registration = documentAt("build/netlify-forms.html").querySelector(
    "form",
  );
  const form = documentAt("build/contact/index.html").querySelector("form");
  assert.equal(registration.getAttribute("data-netlify"), "true");
  assert.equal(registration.name, form.name);
  assert.deepEqual(names(registration), names(form));
  assert.equal(
    new Set(names(form)).size,
    names(form).length,
    "no duplicate fields",
  );
  assert.equal(form.querySelector('[name="form-name"]').value, form.name);
  assert.equal(form.method, "post");
  assert.ok(
    !form.hasAttribute("data-netlify"),
    "discovery stays outside the React root",
  );
});
test("honeypot and reply-to field are discoverable; required inputs survive prerendering", () => {
  const registration = documentAt("build/netlify-forms.html").querySelector(
    "form",
  );
  const form = documentAt("build/contact/index.html").querySelector("form");
  assert.equal(registration.getAttribute("netlify-honeypot"), "website_url");
  assert.ok(form.querySelector('[name="website_url"]'));
  assert.equal(registration.querySelector('[name="email"]').type, "email");
  for (const name of ["name", "email", "message"])
    assert.ok(form.querySelector(`[name="${name}"]`).required);
});
test("Netlify deploys the rendered pages without a homepage catch-all", () => {
  const config = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");
  assert.match(config, /publish\s*=\s*"build"/);
  assert.match(config, /command\s*=\s*"npm run build"/);
  assert.ok(!config.includes("[[redirects]]"));
  for (const name of ["portfolio", "services", "blog", "contact"])
    assert.ok(fs.existsSync(path.join(root, "build", name, "index.html")));
  assert.ok(fs.existsSync(path.join(root, "build/404.html")));
});
