# TV data API

A versioned, TV-optimised JSON API for the Amazon Fire TV client, served from
the same static host as the website. All files live under
`https://fifi.cooking/data/tv/` and are generated at build time by
[scripts/generate-tv-index.ts](../scripts/generate-tv-index.ts), which runs as
part of `npm run dev`/`npm run build` (via `scripts/generate-public-index.ts`)
or on its own with `npm run tvdata`.

There is no server logic: every endpoint is a static file, so any URL below can
be fetched with a plain `GET`.

## Versioning and caching

`manifest.json` carries `version` — the same content hash as
`/data/manifest.json`, so one version string describes the whole dataset.
Fetch the manifest first, then append `?v=<version>` to every other request.
URLs are immutable per version: when content changes, the version changes, so
clients can cache aggressively and never worry about stale bodies.

New content (recipes, languages, images, videos, kids recipes) is picked up
automatically: the generator derives everything from `src/` and the
`public/recipe-images/` folder on every build, and GitHub Pages deploys it on
the next push to `main`. Nothing in this directory is hand-maintained.

## CORS

The files are served by GitHub Pages, which sends
`Access-Control-Allow-Origin: *`. A WebView-based or browser-based TV app can
fetch them cross-origin without a proxy.

## Endpoints

`{lang}` is any language code listed in the manifest. `{id}` is a recipe id
from the card index. All paths are relative to the site root.

### `GET /data/tv/manifest.json`

Entry point. Shape:

```json
{
  "version": "abc123def456",
  "generatedAt": "2026-09-29T12:00:00.000Z",
  "recipeCount": 1073,
  "pageSize": 100,
  "languages": [
    { "code": "ar", "nativeName": "العربية", "englishName": "Arabic", "dir": "rtl", "complete": true }
  ],
  "endpoints": {
    "index": "/data/tv/index/{lang}.json",
    "feed": "/data/tv/feed/{lang}.json",
    "chapters": "/data/tv/chapters/{lang}.json",
    "kids": "/data/tv/kids/{lang}.json",
    "recipe": "/data/recipes/{id}.json",
    "i18n": "/data/i18n/{lang}.json",
    "search": "/data/search/{lang}.json",
    "videos": "/data/videos/{id}.json",
    "kidsRecipe": "/data/kids/{lang}/{id}.json",
    "images": "/data/tv/images.json"
  }
}
```

- `languages` lists exactly the languages whose recipe translations are
  complete (every active recipe has a translated title, ingredients and
  instructions). `dir` is `"rtl"` for Arabic, Persian, Urdu, Pashto and Hebrew.
  `complete` is always `true` — incomplete languages are omitted, and the
  build fails if a picker language loses coverage.
- `endpoints` are URL templates; substitute `{lang}`/`{id}` and prepend the
  site origin.
- `pageSize` mirrors the web index convention (100 cards per page); the TV
  index itself is a single unpaged file per language.

### `GET /data/tv/index/{lang}.json`

One compact card index per language, in the site's default order. Each entry:

```json
{
  "id": "meat-01",
  "title": "…localised title…",
  "titleEn": "English title (when different from title)",
  "category": "…localised…",
  "cookingMethod": "…localised…",
  "prepTime": "…", "cookTime": "…", "servings": "…",
  "difficulty": "easy|medium|master",
  "image": "/recipe-images/thumbs/meat-01.jpg",
  "hasVideo": true,
  "chapter": 1,
  "chapterName": "…localised chapter name…"
}
```

`image` is a site-relative path when the recipe has a photo, otherwise an
external URL or absent. `hasVideo` is true when `/data/videos/{id}.json` is
worth fetching.

### `GET /data/tv/feed/{lang}.json`

Home-screen rows, already ordered and localised:

```json
{ "rows": [
  { "key": "featured",    "title": "…", "items": ["id", …] },
  { "key": "recent",      "title": "…", "items": ["id", …] },
  { "key": "chapter:1",   "title": "…", "items": ["id", …] },
  { "key": "kids",        "title": "…", "items": ["id", …] }
]}
```

- `featured` — the 20 highest-overlap recipes (the site's default order).
- `recent` — the 20 most recently added recipes, newest first.
- `chapter:<n>` — one row per chapter; `<n>` matches `chapters[].id`.
- `kids` — present only in languages that offer Cooking with Kids mode.

Render each `items` id as a card from `index/{lang}.json` (or `kids/{lang}.json`
for the kids row).

### `GET /data/tv/chapters/{lang}.json`

```json
[{ "id": 1, "name": "…localised…", "recipeCount": 60, "coverImage": "/recipe-images/thumbs/meat-01.jpg" }]
```

Chapter list for browse rails. `id` corresponds to the `chapter:<id>` feed row
keys and `chapter` on each card.

### `GET /data/tv/kids/{lang}.json`

```json
[{ "id": "pancake-animals", "title": "…", "group": "breakfast", "ages": "6-8", "minutes": 30, "noCook": false, "cover": "pancake-bear" }]
```

Compact kids cards. `cover` is a kids-art drawing id (the app ships its own
drawings; it is not an image URL). Full step-by-step detail is served per
recipe at `/data/kids/{lang}/{id}.json` — reuse it unchanged.

### `GET /data/tv/images.json`

```json
{ "meat-01": { "card": "/recipe-images/thumbs/meat-01.jpg", "full": "/recipe-images/meat-01.jpg", "w": 1024, "h": 768 } }
```

Pixel dimensions of the full-size photo for every recipe that has one, for
layout math without fetching the image first. `card` is the 800px-wide
thumbnail used on cards; `full` is the original photo.

### Shared endpoints (unchanged from the web API)

- `/data/recipes/{id}.json` — full recipe, its estimate, and every language's
  translation in one file.
- `/data/videos/{id}.json` — `{ ar: [...], en?: [...] }` YouTube results.
- `/data/search/{lang}.json` — `{ id: "lowercase haystack" }` for on-device
  search.
- `/data/i18n/{lang}.json` — card-level translations.
- `/data/kids/{lang}/index.json`, `/data/kids/{lang}/{id}.json` — kids mode.

## Validation

Generation fails the build (non-zero exit, error listing every problem) if:

- any active recipe id is missing from, or unknown to, any `tv/index/{lang}.json`;
- any site-relative path in a TV file does not exist under `public/`;
- any TV file fails to parse or does not match
  [scripts/tv-api.schema.json](../scripts/tv-api.schema.json);
- a language offered in the site's picker no longer has full recipe
  translation coverage;
- a feed row references an id absent from that language's index, or a
  `chapter:<n>` row has no matching chapter.

## Local development

```bash
npm run build     # regenerates public/data/ including tv/ (prebuild hook)
npm run tvdata    # re-run just the tv/ layer against the generated data
```

`public/data/` is gitignored — the deployed files are produced by CI on every
push to `main`.
