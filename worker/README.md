# Random home feed Worker

Makes `GET https://fifi.cooking/data/tv/feed/{lang}.json` return a different,
de-duplicated home layout on every request, with the same URL and response
shape as before — no client changes. Source layouts come from
`/data/tv/feed-variants/{lang}.json`, built by `scripts/generate-tv-index.ts`.

Test: `node worker/home-feed.test.mjs`

## Deploy (one-time, needs the owner's Cloudflare account)

1. Add `fifi.cooking` to Cloudflare (free plan) and recreate every existing DNS
   record exactly (apex → GitHub Pages IPs, plus the `android`, `ipadosapp`,
   `tvosapp`, `firetvapp`, `samsungsmarttv` … subdomains), then switch the
   nameservers at Porkbun. Set SSL/TLS to **Full**.
2. Make the apex record proxied (orange cloud).
3. `cd worker && npx wrangler deploy`.
4. Verify: `curl -s https://fifi.cooking/data/tv/feed/en.json | head -c 200`
   twice — the first featured id should differ.

Roll back by deleting the route; the static feed file is still served.

## Limits

Clients load the feed once per launch, so the layout changes on each app open
(and language change), not when switching tabs back to Home — that needs a
client change. The hero is the first "featured" item, so it also appears as the
first card of that rail.
