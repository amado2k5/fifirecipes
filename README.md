<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d30f4b69-2d87-4555-84fb-ba6d1e00c5bd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Authentication Setup

Enable these providers in Firebase Console under **Authentication > Sign-in method**:

- Email/password for account creation and email login
- Google, Apple, Facebook, and Twitter/X for their native OAuth buttons
- OIDC providers with IDs `oidc.instagram` and `oidc.tiktok` for Instagram and TikTok buttons

Add the local and deployed app domains under **Authentication > Settings > Authorized domains**. The Instagram and TikTok buttons require valid OIDC client credentials and redirect configuration in Firebase; they are not simulated by the app.
