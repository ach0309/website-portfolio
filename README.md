# Aeon Chavez portfolio

Five-page React portfolio with a shared paper design: Home, Blogs, Portfolio, Services, and Contact. The existing article has a separate permalink. The production build renders each route to HTML before React hydrates it.

## Run locally

```sh
npm install
npm run build
npm run preview
```

Open **http://localhost:4173**. This previews the generated pages, 404 behavior, and assets. Netlify handles form submissions after deployment; the local preview deliberately returns an error instead of claiming to send mail. `npm start` remains available for fast React editing; it does not prerender pages.

## Where to edit

- `src/site/content.js`: verified experience, project descriptions/links, contact details, service copy.
- `src/site/posts.js`: preserved article content.
- `src/site/{Home,Portfolio,Services,Writing,Contact,Layout}.jsx`: page layouts and shared navigation.
- `public/styles/site.css`: design tokens, fonts, responsive layouts, paper/handwriting treatment.
- `public/images/`, `public/textures/`, `public/fonts/`: actual project screenshots/plots, portrait, texture, local fonts/licenses.
- `src/App.jsx`: routes and per-page SEO copy.
- `scripts/prerender.cjs`: generated route HTML, canonical URLs, structured data, sitemap, robots, 404.
- `public/netlify-forms.html`: static form registration for Netlify.
- `netlify.toml`: build command, publish directory, and Node runtime.

The active site is wired through `src/site/`.

## Contact email configuration

The contact form uses **Netlify Forms**. The user confirmed **aeonchavez03@gmail.com** as the notification recipient. No Resend account or email API key is required.

The form sends URL-encoded fields, includes the `form-name` identifier and honeypot, keeps input on failure, and shows success only after an HTTP success response. A separate static registration form lets Netlify discover all fields without modifying React's hydrated markup. The `email` field supplies the visitor's reply-to address.

**Account setup is still required:** enable form detection, deploy the project, and add an email notification for the `contact` form to the address above. See [the exact Netlify setup steps](docs/netlify-setup.md). Tests use mocked responses; no actual delivery is claimed. Netlify's hosted form service handles processing and spam filtering.

## Build and hosting

`npm run build` produces `build/index.html`, a folder/index.html for each page, `404.html`, `sitemap.xml`, and `robots.txt`. Serve each path's generated file, preserve real 404 responses, and avoid rewriting every request to the homepage. `netlify.toml` supplies the build settings. No deployment was performed.

Canonical URLs use `SITE_URL`, falling back to the existing `https://aeonchavez.info`. Set it to the final domain before publishing. Metadata includes descriptions, sharing tags, and Person/ProfilePage or page/article structured data. Rankings are not promised.

## Verification

```sh
npm run build
npm run test:contact
```

The optional browser suite uses Playwright and axe-core. Start `npm run preview`, then run `node tests/browser.cjs` with Playwright available. To reuse a separate installation, set `PLAYWRIGHT_MODULE_PATH` to its module directory. It checks all pages at 1440, 768, 390, and 320px; accessibility; keyboard navigation; form states with mocked delivery; images; the PDF; metadata; and 404 behavior. Set `BROWSER_ARTIFACT_DIR` to save screenshots and a JSON report outside the repository.

See [factual and asset sources](docs/content-sources.md).
