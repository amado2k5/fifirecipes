# Naming progress

Branch: `claude/jolly-pasteur-xj543v`. Follow `NAMING.md` in this folder.

Resume: `git pull origin claude/jolly-pasteur-xj543v`, then name the first batch below
that is not done and write its `result_NNN.jsonl`. The checker lives on branch
`claude/laughing-pascal-t0xocg` (`scripts/recipe-videos/channel/check_naming.py`);
get it with `git show origin/claude/laughing-pascal-t0xocg:scripts/recipe-videos/channel/check_naming.py > /tmp/check_naming.py`
and run `python /tmp/check_naming.py transcripts/channel-fatma-abu-haty`.

| Batch | Videos | Status |
|---|---|---|
| 001 | 100 | done |
| 002 | 100 | done |
| 003 | 100 | done |
| 004 | 100 | done |
| 005 | 100 | done |
| 006 | 100 | done |
| 007 | 100 | done |
| 008 | 100 | done |
| 009 | 71 | done |

**All 9 batches are named** (871 videos: 729 recipe, 85 multi, 57 other; 937 dishes, 219 marked
`unclear` for the transcript step). The checker reports 0 problems. Next step on the Mac: fetch
this branch and run `check_naming.py transcripts/channel-fatma-abu-haty --merge`.
