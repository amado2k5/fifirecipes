# Resume the World Cuisines build after a restart

Copy-paste this prompt into a fresh Devin session opened in this repo:

---

Resume the world-cuisines pipeline in `/Users/ahmedabdelaal/Documents/GitHub/fifirecipes`.

First read `docs/WORLD-PIPELINE.md`, `docs/TRANSLATION_GUIDE.md`, and
`AGENTS.md` (the `world-cuisines-pipeline` skill covers the same runbook).

Current state as of last run — re-verify before acting:

1. Check Mac processes: `ps aux | grep -E "generate.py|country-shipper" | grep -v grep`.
   After a reboot nothing will be running. Relaunch exactly two FLUX banner
   workers (do NOT run three — keep memory headroom):

   ```
   cd /Users/ahmedabdelaal/Documents/GitHub/fifirecipes/scripts/recipe-images
   nohup .venv-mflux/bin/python -u generate.py --model flux2-klein-9b \
     --ids-file work/halfA.txt >> work/gen-A.log 2>&1 &
   nohup .venv-mflux/bin/python -u generate.py --model flux2-klein-9b \
     --ids-file work/halfB.txt >> work/gen-B.log 2>&1 &
   ```

   The generator re-queries `state.db` for ids still at `described` status,
   so already-generated recipes are skipped automatically. Check counts:
   `sqlite3 work/state.db "SELECT substr(id,1,4),status,count(*) FROM
   recipes WHERE id LIKE 'w-%' GROUP BY 1,2 ORDER BY 1,2"`.

2. Recreate the country shipper (`/tmp/country-shipper.sh` is gone after
   reboot — its content is in the git history of this task / rebuild it:
   a bash loop that every 300s runs `work/ship_country.py <iso>` for each
   iso whose recipes are all past `described` AND has a
   `work/ship-ready/<iso>` marker, logging to `world/logs/country-ships.log`).
   Run it with `nohup bash /tmp/country-shipper.sh &`.

3. Ship gate: `ship_country.py` refuses to ship a country without
   `work/ship-ready/<iso>`. Only touch that marker after the country has
   entries in ALL 24 language tables (`recipeTranslations*.json`), zero
   real lint findings, and estimates are present (estimates are owned by a
   separate Devin session — check `src/data/worldRecipeEstimates.ts`,
   do not write estimates yourself).

4. Translation work (your job, Devin model — never local LLM):
   - Export source: read each `w-<iso>-NNN` entry's English from
     `src/data/recipeTranslations.json`.
   - Write `scripts/world/i18n-fill/<Lang>.json` entries (title,
     ingredients {name, standardAmount}, instructions, culturalNotes,
     `"chapter": "<iso>"`), then apply:
     `python3 scripts/world/fill-i18n.py --apply <lang>`.
   - "invalid" counts in apply output are stale leftovers of already-applied
     ids — only worry if a `w-<iso>` entry for the country you just wrote is
     listed.
   - Languages: De El Es Fa Fr He Hi Id It Ja Ko Ku Nl Pl Ps Pt Ru Sv Sw Te
     Tr Ur Zh (En lives in `recipeTranslations.json`; Arabic is the catalog
     language, no table needed).
   - Before committing `src/data/`: `npm run check:world`. It exits nonzero
     on ANY finding including `missing entry` backlog — only real findings
     (wrong script, empty strings, shape, halal hits) are blockers.

5. Status at last checkpoint: `es` shipped (PR #270, 24/24 langs) and
   `et` shipped (PR #271, 24/24 langs, ship-ready marked). `gr` banners done
   (16/16), translations in progress (El done). `id` 35/35 generated,
   `in` 50/50 generated, `ir` generating. Remaining: `it kr lb my ng pe ph
   th tr`. Work in alphabetical ship order.

6. Report `MERGED <iso>` lines from `world/logs/country-ships.log` as they
   land. A country appears on FireTV/apps only after its last language
   commits and the deploy finishes — that's the tvEligibleRecipes gate.

---
