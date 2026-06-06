# Beacon Secure Solutions — Marketing Website

A fast, accessible, fully static, **image-forward** marketing site for Beacon Secure
Solutions, a mobile AI surveillance-tower company. No build step, no frameworks —
plain HTML/CSS + one JS file. Runs anywhere: Hostinger, GitHub Pages, Netlify, your
own server. Design is modeled on Live View Technologies (LVT): bold image hero,
industry super-categories with result stats, image case studies, differentiators,
and a consultation-style closer.

## Adding your images (for Manus or anyone)

Every photo on the site is a **labelled placeholder** in `assets/img/ph/`. See
**`image-manifest.md`** for the full list: each slot's file path, recommended size,
suggested subject, and which pages use it. To add a real image, either:

- save your photo over `assets/img/ph/<slot>.svg` (keep a similar aspect ratio), or
- save it as `.jpg`/`.webp` and update that one `<img src>`.

All images already carry descriptive `alt` text and lazy-loading. The home page also
has dashed **"Your logo" / award** boxes (`.logo-slot`) — swap those for real logos.

## Structure

```
website/
├── index.html                     Home (image hero, super-categories, case studies, differentiators)
├── how-it-works / monitoring-and-response / technology / units
├── industries.html + industries-*.html (hub + 8 verticals; construction is themed)
├── pricing / roi-calculator / results / resources / about / service-area / contact
├── thank-you / privacy / terms / 404
├── sitemap.xml · robots.txt · .htaccess · image-manifest.md
└── assets/ (css/styles.css · js/main.js · img/ · img/ph/ placeholders)
```

Pages use relative paths, so the site works in a subfolder or at a domain root.

## Deploy to Hostinger
1. hPanel → **File Manager** → `public_html`.
2. Upload the **contents** of this `website/` folder (zip → upload → Extract).
3. `index.html` must sit directly in `public_html`.
4. hPanel → **SSL** → enable; then uncomment the HTTPS block in `.htaccess`.

## Deploy to GitHub Pages
1. Push the **contents** of this folder to your repo root.
2. Settings → Pages → Source "Deploy from a branch" → `main` / root.
3. Publishes at `https://<user>.github.io/<repo>/`. `404.html` is used automatically.

## Forms
Quote/contact forms simulate a submit and redirect to `thank-you.html`. To collect
leads, set the form `action` to a Formspree endpoint or your CRM webhook and remove
the simulated submit in `assets/js/main.js` (block marked `form[data-quote]`).

## Branding & colors
Brand text is plain "Beacon Secure" / "Beacon Secure Solutions" — find-and-replace to
rename. Design tokens (navy surfaces, electric-blue accent) live at the top of
`assets/css/styles.css` under `:root`.

## Accessibility & performance
Semantic landmarks, skip-link, labelled fields, `aria` nav, `prefers-reduced-motion`,
keyboard-navigable menus, descriptive alt text, no external JS dependencies.
