# Search engine submission checklist (fifi.cooking)

What to submit, and where, after this SEO pass is deployed. Everything below is done by the owner in each
console; nothing here is automated except IndexNow (see the end).

## Sitemaps

Submit the index. Every console that accepts a sitemap index reads the per-language files from it.

- Sitemap index: https://fifi.cooking/sitemap-index.xml
- Same index at the old address (earlier submissions keep working): https://fifi.cooking/sitemap.xml
- robots.txt (lists the index): https://fifi.cooking/robots.txt

Per-language sitemaps (one per site language, each about 2,400 URLs, well under the 50,000 limit; every `<url>`
carries `<lastmod>`). Submit them individually only where a console does not expand an index, or to watch
coverage per language:

- [ ] https://fifi.cooking/sitemap-ar.xml
- [ ] https://fifi.cooking/sitemap-en.xml
- [ ] https://fifi.cooking/sitemap-fr.xml
- [ ] https://fifi.cooking/sitemap-es.xml
- [ ] https://fifi.cooking/sitemap-ja.xml
- [ ] https://fifi.cooking/sitemap-hi.xml
- [ ] https://fifi.cooking/sitemap-pt.xml
- [ ] https://fifi.cooking/sitemap-ru.xml
- [ ] https://fifi.cooking/sitemap-zh.xml
- [ ] https://fifi.cooking/sitemap-de.xml
- [ ] https://fifi.cooking/sitemap-it.xml
- [ ] https://fifi.cooking/sitemap-el.xml
- [ ] https://fifi.cooking/sitemap-ur.xml
- [ ] https://fifi.cooking/sitemap-fa.xml
- [ ] https://fifi.cooking/sitemap-tr.xml
- [ ] https://fifi.cooking/sitemap-ku.xml
- [ ] https://fifi.cooking/sitemap-id.xml
- [ ] https://fifi.cooking/sitemap-sw.xml
- [ ] https://fifi.cooking/sitemap-ko.xml
- [ ] https://fifi.cooking/sitemap-nl.xml
- [ ] https://fifi.cooking/sitemap-ps.xml
- [ ] https://fifi.cooking/sitemap-he.xml
- [ ] https://fifi.cooking/sitemap-pl.xml
- [ ] https://fifi.cooking/sitemap-sv.xml
- [ ] https://fifi.cooking/sitemap-te.xml
- [ ] https://fifi.cooking/sitemap-bn.xml
- [ ] https://fifi.cooking/sitemap-vi.xml
- [ ] https://fifi.cooking/sitemap-sq.xml
- [ ] https://fifi.cooking/sitemap-cs.xml
- [ ] https://fifi.cooking/sitemap-ro.xml

## Consoles

- [ ] **Google Search Console** (https://search.google.com/search-console): verify the domain property
      (DNS TXT), Sitemaps > add `sitemap-index.xml`. Remove the old `sitemap.xml` entry once the index shows
      "Success" (or leave it: it now serves the same index). Check Pages > "Alternate page with proper canonical
      tag" drops for the `?lang=` URLs over the following weeks.
- [ ] **Bing Webmaster Tools** (https://www.bing.com/webmasters): import from Search Console or verify, Sitemaps >
      submit `sitemap-index.xml`. IndexNow submissions show under "IndexNow".
- [ ] **Yandex Webmaster** (https://webmaster.yandex.com): add the site, verify (meta tag, HTML file or DNS),
      Indexing > Sitemap files > add `sitemap-index.xml`. Yandex also receives IndexNow pings.
- [ ] **Baidu Ziyuan** (https://ziyuan.baidu.com): add the site (needs a Baidu account and phone verification),
      verify, then 普通收录 > sitemap > submit `https://fifi.cooking/sitemap-zh.xml` (Baidu indexes Chinese
      pages; it may reject an index file). Baidu does not render JavaScript well: the static `/recipe/<id>/`
      pages are what it will index best.
- [ ] **Naver Search Advisor** (https://searchadvisor.naver.com): add the site, verify, 요청 > 사이트맵 제출 >
      `https://fifi.cooking/sitemap-ko.xml` (or the index). Naver also receives IndexNow pings.

## IndexNow

- Key file: https://fifi.cooking/1a86f23c8b95482296b316d124801421.txt (the existing key; its content is the key).
- After each deploy the `notify-indexnow` job in `.github/workflows/deploy-pages.yml` runs
  `npm run indexnow -- --since=<previous commit date>`: only URLs whose sitemap `<lastmod>` changed are sent to
  https://api.indexnow.org/indexnow (shared by Bing, Yandex, Naver, Seznam, Yep).
- Set the repository variable `INDEXNOW` to `off` to stop it. By hand: `npm run indexnow -- --since=YYYY-MM-DD`,
  `--sitemaps` (only the sitemap URLs), `--all`, plus `--dry-run` to preview.

## Keeping `<lastmod>` accurate

`<lastmod>` comes from `scripts/sitemap-lastmod.json` (a content hash and date per recipe and language), which
`scripts/generate-public-index.ts` updates on every `npm run dev` / `npm run build`. Commit that file together
with recipe or translation changes; if it is not committed, CI stamps the changed pages with the commit date
again on every later deploy.
