# Fatma Alkawokgy Recipes

A multilingual public archive preserving the Egyptian recipes and cultural legacy of Dr. Fatma Alkawokgy (1943–2026). It presents more than 2,300 recipes — Dr. Fatma's archive, three further Egyptian collections (Osool El-Tahy, Egyptian Cooking, the Fatma Abu Haty channel) and the World Cuisines chapters, one per country — with ingredients, instructions, cultural context, a memorial section and a tribute page. It is fully static, with no account or sign-in.

**Live site:** [fifi.cooking](https://fifi.cooking) · **Technology page:** [fifi.cooking/?page=technology](https://fifi.cooking/?page=technology)

## Highlights

- Browse, search and filter every recipe by chapter, category and cooking method, or open one combined ingredients registry.
- Read the archive in **29 languages**, including full right-to-left layouts for Arabic, Persian, Urdu, Pashto and Hebrew. Kurdish is Kurmanji in Latin script.
- Nutrition and cost estimates for the recipes, and ingredient-based **halal, kosher, vegetarian and vegan** badges. The badges are not certifications; see [docs/DIETARY-CLASSIFICATION.md](docs/DIETARY-CLASSIFICATION.md).
- Open a recipe's original manuscript view (Arabic only) — an illustrated rendering of the recipe's actual source text.
- Share a recipe or the site through the device's share sheet.
- Read the biography and send a tribute or feedback by email.
- Companion apps for Android, iPhone and iPad, Apple TV, Amazon Fire TV and Samsung Smart TV (see below).

## Tech stack

- React 19 and TypeScript
- Vite 8 and Tailwind CSS 4
- Lucide React icons and Motion animations
- GitHub Pages and GitHub Actions for hosting and deployment; one small Cloudflare Worker for the TV home feed ([worker/](worker/))

The site is static: there is no backend, database or authentication. `scripts/generate-public-index.ts` turns the data in `src/data/` into an open JSON API under `public/data/` (a versioned manifest, one file per recipe with every translation, per-language search and ingredient indexes, TV and kids data), plus a static page with schema.org `Recipe` markup for every recipe, a sitemap and the app-link files. The browser loads only the data it needs.

## Apps and TV

Every app reads the same static files at `https://fifi.cooking/data/` (contract: [docs/tv-api.md](docs/tv-api.md)), so a deployment updates all of them.

| Device | Repository |
|---|---|
| Android (Kotlin, Jetpack Compose) | [fifirecipes-android](https://github.com/amado2k5/fifirecipes-android) |
| iPhone and iPad (SwiftUI) | [fifirecipes-ipadosapp](https://github.com/amado2k5/fifirecipes-ipadosapp) |
| Apple TV (SwiftUI, tvOS) | [fifirecipes-tvos](https://github.com/amado2k5/fifirecipes-tvos) |
| Amazon Fire TV (React, Vite) | [fifirecipes-amazonfire](https://github.com/amado2k5/fifirecipes-amazonfire) |
| Samsung Smart TV (Tizen web app) | [fifirecipe-samsungsmarttv](https://github.com/amado2k5/fifirecipe-samsungsmarttv) |

fifi.cooking is also the first source of recipes for [Cookwala](https://cookwala.ai), the open standard for cooking safely, which exports these recipes as Cookwala documents.

## Technology page and license

The site's footer links to a **Technology** page ([`?page=technology`](https://fifi.cooking/?page=technology)) that explains the stack, the data API, the apps, the deployments and how fifi.cooking ties to [Cookwala](https://cookwala.ai). Its text is in `src/data/technology/<lang>.json`, one file per language (29), checked by `python3 scripts/validate-technology.py`.

The code is open source under the [MIT License](LICENSE) (recipe text, pictures and memorial content are not part of the licensed software). See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute.

## Start locally

**Prerequisite:** Node.js 20 or newer (the deploy workflow uses Node 24).

```bash
npm install --legacy-peer-deps
npm run dev
```

Open the local address shown by Vite (normally `http://localhost:3000`). To create a production build, run:

```bash
npm run build
```

No API key or `.env` file is required to run or build the site.

## Recipe banner images

`scripts/recipe-images/` contains a standalone, offline Python tool that finds or generates a "final plated dish" photo for each recipe — see [its README](scripts/recipe-images/README.md) for setup and usage. It costs no Claude tokens and needs no paid API key.

## Recipe videos

Each recipe written in Arabic has a **Videos** tab. It shows up to 20 matching YouTube videos and Shorts, which play in a player on the page with Previous and Next buttons. Nothing loads until the tab is opened.

The results are static files: a weekly GitHub Actions workflow ([refresh-recipe-videos.yml](.github/workflows/refresh-recipe-videos.yml)) searches YouTube for every recipe with [scripts/recipe-videos/fetch-videos.ts](scripts/recipe-videos/fetch-videos.ts). It commits `src/data/recipeVideos.json`, then the site redeploys. It needs no API key, and you can also start it by hand from the repository's **Actions** tab.

## Cooking with Kids

The **Grown-ups | Cooking with Kids** toggle at the top of the page switches the whole site into a playful kids version in the same language, and back. It shows 50 recipes that are fun for children to make ([src/data/kids/](src/data/kids/)), with coloured-pencil drawings of every ingredient and step, one short step per screen, read-aloud, timers and a "grown-up helps" badge on every step with a knife, heat or a blender. The link `?kids=1` opens it directly.

The drawings are small hand-drawn SVGs ([src/kids/art.ts](src/kids/art.ts)); each step's picture is built from an action scene plus the step's ingredients ([src/kids/KidsArt.tsx](src/kids/KidsArt.tsx)). Kids mode is loaded only when it is opened, and it is offered only in languages whose kids recipes are translated ([src/kids/languages.ts](src/kids/languages.ts)); the build stops if a drawing or translation is missing.

## TV data API

A versioned, TV-optimised JSON API for the Amazon Fire TV app is generated under `public/data/tv/` at build time — a manifest with endpoint templates, a localised card index, home-feed rows, chapter rails, kids cards and an image-size map. See [docs/tv-api.md](docs/tv-api.md) for the endpoints and the versioning contract, or run `npm run tvdata` to regenerate just that layer.

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the site after every push to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source once. The site is served at [fifi.cooking](https://fifi.cooking), with [amado2k5.github.io/fifirecipes](https://amado2k5.github.io/fifirecipes/) as the underlying GitHub Pages URL.
