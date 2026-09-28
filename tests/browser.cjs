// Run against npm run preview. Use PLAYWRIGHT_MODULE_PATH for an existing installation.
const { chromium } = require(
  process.env.PLAYWRIGHT_MODULE_PATH || "playwright",
);
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.PREVIEW_URL || "http://localhost:4173";
const routes = [
  "",
  "portfolio/",
  "services/",
  "blog/",
  "contact/",
  "blog/launchpad-summit-experience/",
];
const artifactDir = process.env.BROWSER_ARTIFACT_DIR
  ? path.resolve(process.env.BROWSER_ARTIFACT_DIR)
  : null;
(async () => {
  if (artifactDir) fs.mkdirSync(artifactDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const results = [];
  try {
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width > 800 ? 1000 : 844 });
      for (const route of routes) {
        const response = await page.goto(`${base}/${route}`, {
          waitUntil: "networkidle",
        });
        assert.equal(response.status(), 200);
        const html = await response.text();
        assert.ok(
          html.includes("<h1"),
          `${route} must include rendered content`,
        );
        assert.ok(
          html.includes('rel="canonical"'),
          `${route} must have a canonical URL`,
        );
        assert.equal(await page.locator("h1").count(), 1);
        assert.equal(
          await page.locator('nav[aria-label="Main navigation"] a').count(),
          5,
        );
        assert.equal(
          await page.locator('nav a[aria-current="page"]').count(),
          1,
        );
        await page.evaluate(() => {
          for (const img of document.images) img.loading = "eager";
        });
        await page.waitForFunction(() =>
          [...document.images].every(
            (img) => img.complete && img.naturalWidth > 0,
          ),
        );
        const overflow = await page.evaluate(() =>
          [
            ...document.querySelectorAll(
              "h1,h2,h3,p,label,input,textarea,select,button,a",
            ),
          ]
            .filter((el) => {
              if (
                el.closest(
                  '[aria-hidden="true"],.sr-only,.skip-link,.honeypot',
                ) ||
                !el.getClientRects().length
              )
                return false;
              const box = el.getBoundingClientRect();
              return box.left < -2 || box.right > innerWidth + 2;
            })
            .map(
              (el) => `${el.tagName}: ${el.textContent.trim().slice(0, 60)}`,
            ),
        );
        assert.deepEqual(overflow, [], `${route} overflows at ${width}px`);
        if (width === 1440 || width === 390) {
          await page.addScriptTag({
            path: require.resolve("axe-core/axe.min.js"),
          });
          const axe = await page.evaluate(async () => {
            const result = await axe.run(document, {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa"],
              },
            });
            return result.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              elements: v.nodes.map((n) => n.target),
            }));
          });
          assert.deepEqual(
            axe,
            [],
            `Accessibility issues on ${route} at ${width}px`,
          );
          if (artifactDir) {
            const name = route.replaceAll("/", "-").replace(/-$/, "") || "home";
            await page.screenshot({
              path: path.join(
                artifactDir,
                `${name}-${width === 1440 ? "desktop" : "mobile"}.png`,
              ),
              fullPage: true,
            });
          }
        }
        results.push({ route: "/" + route, width, status: "pass" });
      }
    }
    await page.goto(`${base}/`);
    assert.equal(await page.locator(".background-card").count(), 4);
    assert.equal(
      await page.getByText("Optical Technician", { exact: true }).count(),
      0,
    );
    const detail = page.locator(".background-card summary").first();
    await detail.focus();
    await page.keyboard.press("Enter");
    assert.equal(
      await page.locator(".background-card details[open]").count(),
      1,
    );
    assert.ok(
      await page.locator(".background-card details[open] p").isVisible(),
    );
    await page.goto(`${base}/portfolio/`);
    assert.equal(
      await page
        .getByRole("heading", { name: "Certified Strength", exact: true })
        .count(),
      0,
    );
    const repoLinks = await page
      .locator(".project-figure > a")
      .evaluateAll((links) => links.map((link) => link.href));
    assert.equal(repoLinks.length, 3);
    assert.ok(
      repoLinks.every((href) => href.startsWith("https://github.com/ach0309/")),
    );
    assert.equal(
      await page
        .locator(
          ".project-figure figcaption, .project-figure .image-destination, .project-figure .figure-links",
        )
        .count(),
      0,
    );
    await page
      .context()
      .route("https://github.com/ach0309/hackathon-everythingdough", (route) =>
        route.fulfill({
          status: 200,
          contentType: "text/html",
          body: "<h1>Repository destination test</h1>",
        }),
      );
    const [repoTab] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator("#dough .project-figure > a").click(),
    ]);
    await repoTab.waitForLoadState("domcontentloaded");
    assert.equal(
      repoTab.url(),
      "https://github.com/ach0309/hackathon-everythingdough",
    );
    await repoTab.close();
    await page.goto(`${base}/services/`);
    assert.equal(
      await page
        .getByRole("heading", { name: "Client work", exact: true })
        .count(),
      1,
    );
    assert.equal(
      await page.locator("#strength .client-figure a").getAttribute("href"),
      "https://thecertifiedstrength.com",
    );
    assert.equal(
      await page
        .getByRole("link", { name: /See Certified Strength/ })
        .getAttribute("href"),
      "/services/#strength",
    );
    await page.context().route("https://thecertifiedstrength.com/", (route) =>
      route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<h1>Client website destination test</h1>",
      }),
    );
    const [clientTab] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator("#strength .client-figure a").click(),
    ]);
    await clientTab.waitForLoadState("domcontentloaded");
    assert.equal(clientTab.url(), "https://thecertifiedstrength.com/");
    await clientTab.close();

    assert.equal(
      await page
        .locator(".service-upcoming")
        .getByText("Upcoming", { exact: true })
        .count(),
      1,
    );
    assert.equal(
      await page
        .locator(".service-upcoming a, .service-upcoming button")
        .count(),
      0,
    );
    assert.equal(
      await page
        .locator(".service-status")
        .getByText("Available", { exact: true })
        .count(),
      4,
    );
    await page.goto(`${base}/contact/?type=project#inquiry`);
    await page.waitForFunction(
      () =>
        document.querySelector('select[name="inquiry"]').value === "project",
    );
    let posts = 0;
    page.on("request", (req) => {
      if (req.method() === "POST" && req.url().endsWith("/contact/")) posts++;
    });
    await page.getByRole("button", { name: "Send message" }).click();
    assert.equal(posts, 0, "empty required fields must block submission");
    await page.locator('[name="name"]').fill("Test visitor & team");
    await page.locator('[name="email"]').fill("visitor@example.com");
    await page
      .locator('[name="message"]')
      .fill("Test inquiry, not a real email.");
    await page.route("**/contact/", (route) =>
      route.fulfill({
        status: 503,
        contentType: "application/json",
        body: '{"ok":false}',
      }),
    );
    await page.getByRole("button", { name: "Send message" }).click();
    await page.getByRole("alert").waitFor();
    assert.equal(
      await page.locator('[name="message"]').inputValue(),
      "Test inquiry, not a real email.",
    );
    await page.unroute("**/contact/");
    await page.route("**/contact/", async (route) => {
      const payload = new URLSearchParams(route.request().postData());
      assert.equal(payload.get("inquiry"), "project");
      assert.equal(payload.get("form-name"), "contact");
      assert.equal(payload.get("name"), "Test visitor & team");
      assert.equal(payload.get("email"), "visitor@example.com");
      assert.match(
        route.request().headers()["content-type"],
        /application\/x-www-form-urlencoded/,
      );
      await route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<html><body>Thank you for your submission.</body></html>",
      });
    });
    await page.getByRole("button", { name: "Send message" }).click();
    await page.getByRole("status").waitFor();
    assert.ok(
      await page
        .getByRole("status")
        .evaluate((el) => el === document.activeElement),
    );
    await page.getByRole("button", { name: "Write another message" }).click();
    assert.equal(await page.locator('[name="name"]').inputValue(), "");
    await page.getByRole("button", { name: "Menu" }).click();
    assert.equal(
      await page
        .getByRole("button", { name: "Close" })
        .getAttribute("aria-expanded"),
      "true",
    );
    await page.keyboard.press("Escape");
    assert.ok(
      await page
        .getByRole("button", { name: "Menu" })
        .evaluate((el) => el === document.activeElement),
    );
    await page.getByRole("button", { name: "Menu" }).click();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Blogs", exact: true })
      .click();
    await page.waitForURL("**/blog/");
    await page
      .getByRole("link", { name: "Read article", exact: false })
      .click();
    await page.waitForURL("**/blog/launchpad-summit-experience/");
    const pdf = await page.request.get(`${base}/files/Aeon_Chavez_Resume.pdf`);
    assert.equal(pdf.status(), 200);
    assert.match(pdf.headers()["content-type"], /application\/pdf/);
    assert.ok((await pdf.body()).subarray(0, 4).equals(Buffer.from("%PDF")));
    for (const route of ["robots.txt", "sitemap.xml"])
      assert.equal((await page.request.get(`${base}/${route}`)).status(), 200);
    assert.equal((await page.goto(`${base}/does-not-exist/`)).status(), 404);
    assert.equal(await page.title(), "Page not found — Aeon Chavez");
    assert.deepEqual(errors, [], "No runtime or hydration errors");
    if (artifactDir) {
      fs.writeFileSync(
        path.join(artifactDir, "browser-checks.json"),
        JSON.stringify(
          {
            results,
            form: "validation, retained input on failure, mocked acceptance, reset",
            navigation:
              "mobile toggle, Escape focus, Blog article, keyboard highlight expansion, project-image GitHub and client-site destinations",
            assets: "all images, PDF, sitemap, robots",
            errors,
          },
          null,
          2,
        ),
      );
    }
    console.log(
      `Passed ${results.length} page/viewport checks, 12 accessibility scans, form states, navigation, assets, and 404. No real email sent.`,
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
