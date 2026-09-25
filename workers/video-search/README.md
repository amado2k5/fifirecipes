# Video search worker

A small Cloudflare Worker behind each recipe's **Videos** tab. When a visitor opens the tab, the site asks this worker for YouTube videos of the dish. The worker then:

1. Searches **YouTube** (normal videos and Shorts) through YouTube's own web search endpoint. This needs no API key.
2. Drops videos whose title doesn't share a word with the dish name, mixes videos and Shorts together, and returns the top 20.
3. Caches the answer at Cloudflare's edge for 7 days. Each dish is searched at most once a week, however many people open it.

A visitor who reads the page in another language gets a search in that language first, using the recipe's translated title, followed by the Arabic results.

## Deploy (one time)

You need Node.js 20+ and a free Cloudflare account.

```bash
cd workers/video-search
npx wrangler login                    # opens the browser to sign in to Cloudflare
npx wrangler deploy                   # prints https://fifi-video-search.<your-subdomain>.workers.dev
```

Then connect the site to the worker. In GitHub, open **Settings → Secrets and variables → Actions → Variables** and add a repository variable named `VIDEO_SEARCH_URL` whose value is the URL `wrangler deploy` printed. The next deploy of the site uses it. Without this variable, the Videos tab still shows a link that opens the dish's search page on YouTube.

## Try it

```bash
npx wrangler dev                      # local worker at http://localhost:8787
curl "http://localhost:8787/search?dish=ملوخية بالأرانب&lang=ar"
```

To run the site against the local worker:

```bash
VITE_VIDEO_SEARCH_URL=http://localhost:8787 npm run dev
```

Only the origins listed in `ALLOWED_ORIGINS` (in `wrangler.toml`) can call the worker from a browser.
