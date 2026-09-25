# Fatma Alkawokgy Recipes

A bilingual public archive preserving the Egyptian recipes and cultural legacy of Dr. Fatma Alkawokgy (1943–2026). It presents 334 curated recipes across six chapters, with ingredients, instructions, cultural context, a memorial section, and a tribute page — fully static, with no account or sign-in required.

**Live site:** [fifi.cooking](https://fifi.cooking)

## Highlights

- Browse, search, and filter all 334 recipes by category and cooking method.
- Read the archive in Arabic or English, with full right-to-left layout support.
- Open a recipe's original manuscript view (Arabic only) — an illustrated rendering of the recipe's actual source text from Dr. Fatma's original documents.
- Share a recipe or the site itself through the device's native share sheet.
- Read the biography and send a tribute or feedback by email.

## Tech stack

- React 19 and TypeScript
- Vite 8 and Tailwind CSS 4
- Lucide React icons and Motion animations

The site is fully static: the recipe archive is bundled at build time, and there is no backend, database, or authentication of any kind.

## Start locally

**Prerequisite:** Node.js 20 or newer.

```bash
npm install
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

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the site after every push to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source once. The site is served at [fifi.cooking](https://fifi.cooking), with [amado2k5.github.io/fifirecipes](https://amado2k5.github.io/fifirecipes/) as the underlying GitHub Pages URL.
