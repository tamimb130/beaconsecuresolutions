# Image manifest — Beacon Secure Solutions

Drop real photos in to replace each labelled placeholder. Two ways:

1. **Easiest:** save your photo over the placeholder file at the same path
   `assets/img/ph/<slot>.svg` — or save as `.jpg`/`.webp` and update the `<img src>`.
2. Keep the same aspect ratio (or close) so layouts stay clean.

All images already have descriptive `alt` text and lazy-loading set.

| Slot (file) | Recommended size | Suggested subject | Used on |
|---|---|---|---|
| `assets/img/ph/about-team.svg` | 1600×760 | Beacon Secure team and a surveillance tower on site | about.html |
| `assets/img/ph/case-construction.svg` | 1280×800 | Copper theft halted on a 14-acre site — protected by a Beacon Secure tower | index.html, results.html |
| `assets/img/ph/case-dealer.svg` | 1280×800 | Overnight lot losses eliminated — protected by a Beacon Secure tower | index.html, results.html |
| `assets/img/ph/case-industrial.svg` | 1280×800 | Remote perimeter secured with no power — protected by a Beacon Secure tower | index.html, results.html |
| `assets/img/ph/construction-jobsite.svg` | 1280×1000 | Surveillance tower watching over a construction jobsite at dusk | industries-construction.html |
| `assets/img/ph/home-hero.svg` | 1920×1080 | Solar-powered AI surveillance towers protecting a site at dusk | index.html |
| `assets/img/ph/ind-auto-equipment-dealers.svg` | 1600×760 | Auto &amp; Equipment Dealers site secured by a Beacon Secure tower at dusk | industries-auto-equipment-dealers.html |
| `assets/img/ph/ind-events.svg` | 1600×760 | Events &amp; Temporary Sites site secured by a Beacon Secure tower at dusk | industries-events.html |
| `assets/img/ph/ind-government.svg` | 1600×760 | Government &amp; Municipal site secured by a Beacon Secure tower at dusk | industries-government.html |
| `assets/img/ph/ind-industrial-yards.svg` | 1600×760 | Industrial Yards &amp; Laydown site secured by a Beacon Secure tower at dusk | industries-industrial-yards.html |
| `assets/img/ph/ind-property-management.svg` | 1600×760 | Property Management site secured by a Beacon Secure tower at dusk | industries-property-management.html |
| `assets/img/ph/ind-retail.svg` | 1600×760 | Retail &amp; Shopping Centers site secured by a Beacon Secure tower at dusk | industries-retail.html |
| `assets/img/ph/ind-utilities-solar.svg` | 1600×760 | Utilities, Solar &amp; Remote site secured by a Beacon Secure tower at dusk | industries-utilities-solar.html |
| `assets/img/ph/industries-hero.svg` | 1600×760 | Multiple Beacon Secure surveillance towers deployed across varied sites | industries.html |
| `assets/img/ph/product-unit.svg` | 1280×980 | Beacon Secure mobile surveillance unit deployed at dusk with lights active | index.html |
| `assets/img/ph/service-map.svg` | 1200×900 | Regional coverage map of the Southwest service area | service-area.html |
| `assets/img/ph/supercat-commercial.svg` | 1280×880 | Commercial &amp; Retail site secured by Beacon Secure surveillance towers | index.html |
| `assets/img/ph/supercat-construction.svg` | 1280×880 | Construction &amp; Field site secured by Beacon Secure surveillance towers | index.html |
| `assets/img/ph/supercat-industrial.svg` | 1280×880 | Industrial &amp; Energy site secured by Beacon Secure surveillance towers | index.html |
| `assets/img/ph/supercat-public.svg` | 1280×880 | Public Sector &amp; Events site secured by Beacon Secure surveillance towers | index.html |
| `assets/img/ph/unit-deployed.svg` | 1280×1000 | Mobile solar-powered AI surveillance tower deployed on site at dusk | about.html, how-it-works.html, technology.html, units.html |

## Logo placeholders (text boxes, not photos)

The home page has two rows of dashed **"Your logo" / award** boxes (`.logo-slot`).
Replace each `<span class="logo-slot">…</span>` with an `<img>` of a client or award logo when you have them.

Total photo slots: **21**.

## Generated production imagery

The placeholder image slots have been wired to generated, optimized WebP files in `assets/img/generated/`. Original placeholder SVGs remain in `assets/img/ph/` as safe fallbacks/source references. The generated files cover the hero, product unit, construction, commercial/retail, industrial/utility, public/event, dealership, property management, about/team, and service-area map use cases.
