# Fatma Alkawokgy Recipes

A multilingual public archive preserving the Egyptian recipes and cultural legacy of Dr. Fatma Alkawokgy (1943–2026). It presents 25 curated recipes across six chapters, with ingredients, instructions, cultural context, a memorial section, and community tributes.

## Highlights

- Browse, search, filter, save, rate, share, and export recipes.
- Use the archive in 20 languages, including right-to-left layouts for Arabic, Persian, and Urdu.
- Explore a unified ingredient index and recipe reconciliation tools for archive administration.
- Read the biography and contribute memorial tributes.

## Tech stack

- React 19 and TypeScript
- Vite 8 and Tailwind CSS 4
- Firebase Auth and Firestore for optional cloud authentication, syncing, comments, and tributes
- Lucide React icons and Motion animations

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

No Google AI, Gemini, or Google Cloud AI API key is required. The recipe archive is bundled in the application and works locally without an `.env` file. Firebase cloud features are optional: when Firestore is unavailable, the catalogue remains available from the bundled recipe data and tributes fall back to browser storage.

## Optional Firebase configuration

The included Firebase app configuration enables cloud sync and authentication when a Firebase project is available. To use those optional features, configure the desired sign-in providers and authorized domains in Firebase. They are not required to browse or use the local recipe archive.
