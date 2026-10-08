# Site reputation checklist (fifi.cooking)

What the repository already provides:

- `public/.well-known/security.txt` (renew `Expires` every year).
- `SECURITY.md` and private vulnerability reporting.
- `public/privacy.html` and `public/about.html`.
- Organization and WebSite JSON-LD in `index.html`.

GitHub Pages cannot set HTTP response headers, so these are done outside the repository.

## DNS and registrar (owner)

1. Register the domain for several years and enable registrar lock and DNSSEC.
2. Add SPF, DKIM and DMARC records, even if the domain sends no mail
   (`v=spf1 -all` and `v=DMARC1; p=reject;` tell receivers nothing legitimate is sent).
3. If the domain sits behind Cloudflare, add a Response Header Transform Rule:
   `Strict-Transport-Security: max-age=31536000; includeSubDomains`,
   `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
   `Permissions-Policy: camera=(), microphone=(), geolocation=()`.

## Search and browser consoles (owner)

- Google Search Console: verify the domain (DNS TXT), check Security Issues, submit `sitemap.xml`.
- Bing Webmaster Tools: import from Search Console.
- Google Safe Browsing status: https://transparencyreport.google.com/safe-browsing/search
- Microsoft: https://www.microsoft.com/wdsi/support/report-unsafe-site

## Security vendors and web filters (owner)

- Check the domain on VirusTotal. Use each flagging engine's false-positive form.
- Ask for categorisation (Food / Recipes) at Cisco Talos, Fortinet FortiGuard, Palo Alto,
  Broadcom Site Review, Trellix, Zscaler and Forcepoint.
- Norton Safe Web, McAfee, Kaspersky, Bitdefender, Avast/AVG: claim or review the domain.

## Scores people look at

- Scamadviser, Trustpilot, Web of Trust: claim the profile, link to About and Privacy.
- Re-test with securityheaders.com, SSL Labs and Mozilla Observatory after any header change.

Paid "verified safe" seals are not used by browsers or filters. Skip them.
