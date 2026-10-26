// Line-wrap and layout audit, run in a browser against the built site.
//
//   npm run build && npx vite preview --port 4341
//   open http://localhost:4341, paste this whole file into the page's console
//   (or a javascript tool), then:
//     __wrapStart([1280, 1024, 768, 375])   // all sitemap URLs plus /404.html
//     poll window.__wrapDone, then read window.__wrapResult
//
// Each page loads in an iframe at each width (true widths, even below 500px).
// One line per problem; an empty list means the site passes:
//   HSCROLL  the page scrolls sideways
//   GRIDn    a card grid's last row is short
//   OVERRUN  text runs past its box (a no-break run or nowrap label too long)
//   LONE     a block ends on a single word
//   STUB     a block's last line is under a quarter of its widest line
//   SSTART   a sentence starts in the last two words of a line
//   SEND     a sentence ends in the first two words of a line
// Fix by rewording the copy; src/app/typeset.tsx handles the joins.
window.__wrapAudit = async function (widths, urls) {
  if (!urls) {
    const xml = await fetch('/sitemap.xml').then((r) => r.text());
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).concat('/404.html');
  }
  const END = /[A-Za-z)\]'’"”][.?!]["')”]?$/;
  function lines(el) {
    const out = [], w = el.ownerDocument.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      const re = /[^\s ]+/g; let m;
      while ((m = re.exec(n.data))) {
        const r = el.ownerDocument.createRange();
        r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
        const rc = r.getClientRects(); if (!rc.length) continue;
        const top = Math.round(rc[0].top), last = out[out.length - 1];
        const wd = { w: m[0], l: rc[0].left, r: rc[rc.length - 1].right };
        if (last && Math.abs(last.top - top) < 6) last.ws.push(wd); else out.push({ top, ws: [wd] });
      }
    }
    return out;
  }
  const all = [];
  for (const width of widths) {
    for (const url of urls) {
      const f = document.createElement('iframe');
      f.style.cssText = `position:fixed;left:0;top:0;width:${width}px;height:900px;border:0;opacity:0.01;z-index:-1`;
      document.body.appendChild(f);
      await new Promise((res) => { f.onload = res; f.src = url + '?v=' + Date.now(); });
      const d = f.contentDocument, win = f.contentWindow;
      await d.fonts.ready; await new Promise((r) => setTimeout(r, 400));
      const issues = [];
      if (d.documentElement.scrollWidth > width + 1) issues.push('HSCROLL ' + d.documentElement.scrollWidth);
      d.querySelectorAll('.grid').forEach((g, gi) => {
        const rows = {};
        [...g.children].filter((k) => k.getClientRects().length)
          .forEach((k) => { const t = Math.round(k.getBoundingClientRect().top); rows[t] = (rows[t] || 0) + 1; });
        const c = Object.values(rows);
        if (c.length > 1 && c[c.length - 1] < Math.max(...c)) issues.push(`GRID${gi} rows ${c.join('/')}`);
      });
      d.querySelectorAll('p, li, h1, h2, h3, a, span, label, button, time').forEach((el) => {
        if (!el.getClientRects().length) return;
        const host = win.getComputedStyle(el).display === 'inline' ? el.parentElement.closest('p,li,h1,h2,h3,div,a') : el;
        const limit = host.getBoundingClientRect().right - parseFloat(win.getComputedStyle(host).paddingRight) + 1;
        const w = d.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n;
        while ((n = w.nextNode())) {
          const r = d.createRange(); r.selectNodeContents(n);
          for (const rc of r.getClientRects()) if (rc.right > limit && rc.width > 0) { issues.push(`OVERRUN ${el.tagName} "${n.data.trim().slice(0, 40)}"`); break; }
        }
      });
      d.querySelectorAll('main p, main li > span, main li > a, main h1, main h2, main h3, footer p').forEach((el) => {
        if (!el.getClientRects().length) return;
        const L = lines(el); if (L.length < 2) return;
        const widest = Math.max(...L.map((l) => l.ws[l.ws.length - 1].r - l.ws[0].l));
        const last = L[L.length - 1], lw = last.ws[last.ws.length - 1].r - last.ws[0].l;
        const tag = el.tagName + ' "' + el.textContent.trim().slice(0, 44) + '"';
        if (last.ws.length === 1) issues.push('LONE ' + tag);
        else if (!/^H/.test(el.tagName) && lw < widest * 0.25) issues.push('STUB ' + tag);
        L.forEach((l, i) => {
          const ws = l.ws;
          if (i < L.length - 1) for (let k = Math.max(1, ws.length - 2); k < ws.length; k++) if (END.test(ws[k - 1].w)) issues.push('SSTART ' + tag + ' :: ' + ws.slice(-3).map((x) => x.w).join(' '));
          if (i > 0) for (let k = 0; k < Math.min(2, ws.length - 1); k++) if (END.test(ws[k].w)) issues.push('SEND ' + tag + ' :: ' + ws.slice(0, 3).map((x) => x.w).join(' '));
        });
      });
      [...new Set(issues)].forEach((x) => all.push(`${width} ${url} ${x}`));
      f.remove();
    }
  }
  return all;
};
window.__wrapStart = (widths, urls) => {
  window.__wrapDone = false;
  window.__wrapAudit(widths, urls)
    .then((r) => { window.__wrapResult = r; })
    .catch((e) => { window.__wrapResult = ['ERROR ' + e.message]; })
    .finally(() => { window.__wrapDone = true; });
  return 'started';
};
'wrap audit loaded';
