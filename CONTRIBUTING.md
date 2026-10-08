# Contributing to fifi.cooking

fifi.cooking is open source (MIT License for the code, see [LICENSE](LICENSE)). Anyone can fix a bug, improve a
translation, add a feature or reuse the code in their own application.

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
npm run lint       # type check
```

No API key or `.env` file is needed. The site is static: `scripts/generate-public-index.ts` turns the data in
`src/data/` into the JSON files under `public/data/` before every `dev` and `build`.

## Changing recipes or translations

Read [docs/TRANSLATION_GUIDE.md](docs/TRANSLATION_GUIDE.md) first, then run `npm run check:world` before you
commit anything under `src/data/`. It must exit 0. Recipes contain no pork or alcohol, including hidden ones.

## Changing the Technology page

The text lives in `src/data/technology/<lang>.json`, one file per language. Edit `en.json` first, then keep every
other language in step and run `python3 scripts/validate-technology.py`.

## Pull requests

1. Fork the repository and create a branch.
2. Keep the change small and say what it fixes.
3. Make sure `npm run lint` passes (and `npm run check:world` if you touched `src/data/`).
4. Open a pull request. Bugs and ideas are welcome as [issues](https://github.com/amado2k5/fifirecipes/issues).

Security problems: see [SECURITY.md](SECURITY.md).

The apps and the related standard live in their own repositories: `fifirecipes-android`, `fifirecipes-ipadosapp`,
`fifirecipes-tvos`, `fifirecipes-amazonfire`, `fifirecipe-samsungsmarttv` and [cookwala](https://github.com/amado2k5/cookwala).
