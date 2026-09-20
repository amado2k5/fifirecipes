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

The included Firebase app configuration enables cloud sync and real authentication when a Firebase project is available. They are not required to browse or use the local recipe archive.

To enable sign-in on the deployed site, use Firebase Console → **Authentication**:

1. In **Settings → Authorized domains**, add `amado2k5.github.io` (and add a future custom domain such as `fifi.cooking` before using it).
2. In **Sign-in method**, enable Email/Password and any social providers displayed in the app.
3. For Apple, Facebook, X, Instagram, and TikTok, enter the client credentials from that provider and register Firebase's callback URL: `https://history-navigator-472603.firebaseapp.com/__/auth/handler`.

The login controls call Firebase Authentication; they do not create mock accounts. Social providers need their own developer-account credentials before they can be used.

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the site after every push to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source once. The site will then be available at [amado2k5.github.io/fifirecipes](https://amado2k5.github.io/fifirecipes/).
