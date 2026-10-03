"""Tiny review dashboard for the banner pipeline, on http://localhost:8765.

Shows recipes whose status is 'generated' (or 'regenerate') with their candidate
images; you approve one candidate or send the recipe back for new ones (optionally
with an edited brief). Approved recipes are picked up by publish.py.

    .venv-mflux/bin/python dashboard.py [--port 8765]
"""

import argparse
import html
import json
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import state

PAGE = """<!doctype html><meta charset="utf-8"><title>banner review</title>
<style>
body{font:14px/1.4 system-ui;margin:24px;background:#faf8f4;color:#222}
h1{font-size:20px} .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));gap:20px}
.card{background:#fff;border:1px solid #ddd;border-radius:8px;padding:12px}
.cands{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}
.cands img{width:180px;border-radius:4px;border:2px solid transparent;cursor:pointer}
.brief{width:100%;box-sizing:border-box;font:13px inherit;padding:6px}
button{padding:6px 12px;border:0;border-radius:4px;background:#0369a1;color:#fff;cursor:pointer}
button.alt{background:#78716c} .done{opacity:.4} small{color:#78716c}
</style>
<h1>Banner review — {pending} pending</h1>
<div class="grid">{cards}</div>
<script>
async function act(id, cid, regen) {{
  const brief = document.getElementById('b-'+id).value;
  await fetch('/act', {{method:'POST', headers:{{'content-type':'application/json'}},
    body:JSON.stringify({{id, candidate:cid, regen, brief}})}});
  location.reload();
}}
</script>"""


def card(db, r) -> str:
    cands = db.execute('SELECT id, seed, path FROM candidates WHERE recipe_id = ? ORDER BY id DESC',
                       (r['id'],)).fetchall()
    imgs = ''.join(
        f'<img src="/cand/{c["id"]}" title="seed {c["seed"]}" onclick="act(\'{r["id"]}\',{c["id"]},false)">'
        for c in cands)
    return (f'<div class="card"><b>{html.escape(r["id"])}</b> — {html.escape(r["title"])}'
            f'<br><small>{html.escape(r["title_en"] or "")} · {html.escape(r["status"])}</small>'
            f'<div class="cands">{imgs}</div>'
            f'<textarea class="brief" id="b-{r["id"]}" rows="2">{html.escape(r["brief"] or "")}</textarea><br>'
            f'<button class="alt" onclick="act(\'{r["id"]}\',0,true)">regenerate</button></div>')


class Handler(BaseHTTPRequestHandler):
    db = None

    def send(self, code, body, ctype='text/html; charset=utf-8'):
        data = body if isinstance(body, bytes) else body.encode()
        self.send_response(code)
        self.send_header('content-type', ctype)
        self.send_header('content-length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        if self.path.startswith('/cand/'):
            cid = int(self.path.rsplit('/', 1)[1])
            row = self.db.execute('SELECT path FROM candidates WHERE id = ?', (cid,)).fetchone()
            path = state.WORK / row['path'] if row else None
            if not path or not path.exists():
                return self.send(404, b'not found', 'text/plain')
            return self.send(200, path.read_bytes(), 'image/png')
        if self.path != '/':
            return self.send(404, b'not found', 'text/plain')
        rows = self.db.execute(
            "SELECT * FROM recipes WHERE status IN ('generated', 'regenerate') ORDER BY status = 'regenerate' DESC, id"
        ).fetchall()
        self.send(200, PAGE.format(pending=len(rows), cards=''.join(card(self.db, r) for r in rows)))

    def do_POST(self):
        if self.path != '/act':
            return self.send(404, b'not found', 'text/plain')
        body = json.loads(self.rfile.read(int(self.headers['content-length'] or 0)))
        rid = body['id']
        if body.get('regen'):
            brief = (body.get('brief') or '').strip()
            if brief:
                state.set_brief(self.db, rid, brief)
            state.set_status(self.db, rid, 'regenerate')
        else:
            state.set_status(self.db, rid, 'approved', chosen=int(body['candidate']))
        self.send(200, b'ok', 'text/plain')

    def log_message(self, *a):
        pass


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument('--port', type=int, default=8765)
    args = ap.parse_args()
    Handler.db = state.connect()
    print(f'Review dashboard: http://localhost:{args.port}')
    ThreadingHTTPServer(('127.0.0.1', args.port), Handler).serve_forever()


if __name__ == '__main__':
    main()
