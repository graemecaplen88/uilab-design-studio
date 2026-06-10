/* ============================================================
   UiLab Event Studio — controller
   Global event-info form populates every template; per-template
   inline edits + photo override; PNG (web) & PDF (print) export.
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const LS = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (_) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (_) { return false; } },
  };

  /* in-memory image stores — survive even if localStorage quota is exceeded */
  const photoMem = {};
  const sponsorMem = {};

  /* downscale an uploaded image to keep it inside the storage quota */
  function downscale(dataUrl, maxDim, type, q) {
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth, h = img.naturalHeight;
        const scale = Math.min(1, maxDim / Math.max(w, h));
        const cv = document.createElement('canvas');
        cv.width = Math.max(1, Math.round(w * scale));
        cv.height = Math.max(1, Math.round(h * scale));
        cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
        try { res(cv.toDataURL(type || 'image/jpeg', q || 0.85)); }
        catch (_) { res(dataUrl); }
      };
      img.onerror = () => res(dataUrl);
      img.src = dataUrl;
    });
  }

  const state = {
    event: LS.get('uil-cur-event', 'future-tech-open-house'),
    format: LS.get('uil-cur-format', 'ig-portrait'),
    info: Object.assign({}, UIL.DEFAULT_INFO, LS.get('uil-info', {})),
  };

  function selFor(ev) {
    const e = UIL.EVENTS[ev];
    const saved = LS.get('studio-sel-' + ev, {});
    return {
      ground: e.grounds.includes(saved.ground) ? saved.ground : e.grounds[0],
      pop: e.pops.includes(saved.pop) ? saved.pop : e.pops[0],
    };
  }
  function setSel(ev, kind, val) { const s = selFor(ev); s[kind] = val; LS.set('studio-sel-' + ev, s); render(); }

  const ovKey = (ev, fmt) => `uil-ov-${ev}-${fmt}`;
  function overrides(ev, fmt) { return LS.get(ovKey(ev, fmt), {}); }
  function setOverride(ev, fmt, field, val) { const o = overrides(ev, fmt); o[field] = val; LS.set(ovKey(ev, fmt), o); }
  function clearOverrides(ev, fmt) { localStorage.removeItem(ovKey(ev, fmt)); render(); }

  function photoFor(ev) { return photoMem[ev] || LS.get('uil-photo-' + ev, null); }
  function sponsorsFor(ev) { return sponsorMem[ev] || LS.get('uil-sponsors-' + ev, []); }
  function variantFor(fmt) {
    const list = UIL.VARIANTS[fmt] || [['standard','Standard']];
    const keys = list.map(v => v[0]);
    const saved = LS.get('uil-variant-' + fmt, null);
    return keys.includes(saved) ? saved : keys[0];
  }
  function setVariant(fmt, v) { LS.set('uil-variant-' + fmt, v); render(); }

  function effInfo() {
    const ov = overrides(state.event, state.format);
    const merged = Object.assign({}, state.info, ov);
    merged.__photo = photoFor(state.event);
    merged.__sponsors = sponsorsFor(state.event);
    return merged;
  }

  /* ---------- build form ---------- */
  function buildForm() {
    const form = $('#form');
    form.innerHTML = UIL.FIELDS.map(f => {
      const v = UIL.escapeHTML(state.info[f.key] || '');
      const input = f.type === 'textarea'
        ? `<textarea data-field="${f.key}" rows="2" placeholder="${f.ph}">${v}</textarea>`
        : `<input type="text" data-field="${f.key}" value="${v}" placeholder="${f.ph}">`;
      return `<label class="fld"><span>${f.label}</span>${input}</label>`;
    }).join('');
    form.querySelectorAll('[data-field]').forEach(el => {
      el.addEventListener('input', () => {
        state.info[el.dataset.field] = el.value;
        LS.set('uil-info', state.info);
        render();
      });
    });
  }

  /* ---------- build switchers ---------- */
  function buildSwitchers() {
    const eb = $('#events');
    eb.innerHTML = UIL.EVENT_ORDER.map(k =>
      `<button data-ev="${k}" class="${k === state.event ? 'on' : ''}">${UIL.EVENTS[k].label}</button>`).join('');
    eb.querySelectorAll('button').forEach(b => b.onclick = () => { state.event = b.dataset.ev; LS.set('uil-cur-event', state.event); render(); });

    const fb = $('#formats');
    fb.innerHTML = UIL.FORMAT_ORDER.map(k => {
      const f = UIL.FORMATS[k];
      return `<button data-fmt="${k}" class="${k === state.format ? 'on' : ''}">${f.label}<small>${f.w}×${f.h}</small></button>`;
    }).join('');
    fb.querySelectorAll('button').forEach(b => b.onclick = () => { state.format = b.dataset.fmt; LS.set('uil-cur-format', state.format); render(); });
  }

  function buildChips() {
    const e = UIL.EVENTS[state.event], sel = selFor(state.event);
    const chip = (kind, name, on) =>
      `<button class="sw ${on ? 'on' : ''}" data-kind="${kind}" data-val="${name}"><span class="dot" style="background:${UIL.COLORS[name]}"></span>${UIL.LABEL[name]}</button>`;
    const g = e.grounds.length > 1 ? `<div class="grp"><span class="glbl">Ground</span>${e.grounds.map(x => chip('ground', x, x === sel.ground)).join('')}</div>` : '';
    const p = e.pops.length > 1 ? `<div class="grp"><span class="glbl">Pop</span>${e.pops.map(x => chip('pop', x, x === sel.pop)).join('')}</div>` : '';
    const wrap = $('#chips');
    wrap.innerHTML = (g || p) || `<span class="none">${UIL.LABEL[sel.ground]} ground · ${UIL.LABEL[sel.pop]} pop</span>`;
    wrap.querySelectorAll('.sw').forEach(b => b.onclick = () => setSel(state.event, b.dataset.kind, b.dataset.val));
  }

  function buildVariant() {
    const wrap = $('#variant');
    const list = UIL.VARIANTS[state.format] || [];
    if (list.length < 2) { wrap.innerHTML = ''; return; }
    const v = variantFor(state.format);
    wrap.innerHTML = `<span class="glbl">Layout</span>` +
      list.map(([k, lbl]) => `<button data-v="${k}" class="${k === v ? 'on' : ''}">${lbl}</button>`).join('');
    wrap.querySelectorAll('button').forEach(b => b.onclick = () => setVariant(state.format, b.dataset.v));
  }

  /* ---------- render artboard ---------- */
  function render() {
    buildSwitchers(); buildChips(); buildVariant();
    const sel = selFor(state.event);
    const fmt = UIL.FORMATS[state.format];
    const host = $('#artboard');
    host.innerHTML = UIL.renderArtboard(state.event, state.format, effInfo(), sel.ground, sel.pop, variantFor(state.format));

    // inline editing → overrides
    host.querySelectorAll('[data-edit]').forEach(el => {
      el.addEventListener('input', () => setOverride(state.event, state.format, el.dataset.edit, el.innerText));
    });
    // photo upload
    host.querySelectorAll('[data-photo]').forEach(el => {
      el.addEventListener('click', () => pickPhoto());
    });
    // sponsor remove
    host.querySelectorAll('[data-sponsor]').forEach(el => {
      el.addEventListener('click', (e) => { e.stopPropagation(); removeSponsor(+el.dataset.sponsor); });
    });
    // remix: bake the photo into the divisions silhouette (so preview & export match)
    host.querySelectorAll('[data-divmask]').forEach(el => bakeDivMask(el));
    $('#meta').textContent = `${UIL.EVENTS[state.event].label} · ${fmt.label} · ${fmt.w}×${fmt.h}px` + (fmt.kind === 'print' ? ` · ${fmt.mm[0]}×${fmt.mm[1]}mm` : '');
    fit();
  }

  function fit() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab) return;
    const stage = $('#stage');
    const sc = Math.min((stage.clientWidth - 80) / fmt.w, (stage.clientHeight - 80) / fmt.h, 1);
    ab.style.transform = `scale(${sc})`;
    $('#artboard').style.width = (fmt.w * sc) + 'px';
    $('#artboard').style.height = (fmt.h * sc) + 'px';
  }

  /* ---------- photo ---------- */
  function pickPhoto() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*';
    inp.onchange = () => {
      const file = inp.files[0]; if (!file) return;
      const r = new FileReader();
      r.onload = async () => {
        const small = await downscale(r.result, 1800);
        photoMem[state.event] = small;
        LS.set('uil-photo-' + state.event, small);
        bakeCache = {}; render();
      };
      r.readAsDataURL(file);
    };
    inp.click();
  }

  /* ---------- remix divisions mask: bake photo × divisions alpha to a flat PNG
     (a plain <img>, so it renders identically in the preview and the export) ---------- */
  let bakeCache = {};
  let divSourceImg = null;
  function loadImg(src) {
    return new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = rej; i.src = src; });
  }
  async function bakeDivMask(el) {
    const photo = photoFor(state.event);
    const hint = el.querySelector('.phhint');
    const img = el.querySelector('.dmimg');
    if (!photo) { if (hint) hint.style.display = ''; return; }   // empty → recoloured silhouette stays
    if (hint) hint.style.display = 'none';
    const key = state.event;
    if (bakeCache[key]) { img.src = bakeCache[key]; return; }
    try {
      if (!divSourceImg) divSourceImg = await loadImg('assets/graphics/logan-divisions.png');
      const ph = await loadImg(photo);
      const W = divSourceImg.naturalWidth, H = divSourceImg.naturalHeight;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const x = c.getContext('2d');
      const s = Math.max(W / ph.naturalWidth, H / ph.naturalHeight);   // cover
      const pw = ph.naturalWidth * s, phh = ph.naturalHeight * s;
      x.drawImage(ph, (W - pw) / 2, (H - phh) / 2, pw, phh);
      x.globalCompositeOperation = 'destination-in';                   // keep photo only where silhouette is opaque
      x.drawImage(divSourceImg, 0, 0, W, H);
      const url = c.toDataURL('image/png');
      bakeCache[key] = url;
      img.src = url;
    } catch (e) { /* keep silhouette on failure */ }
  }

  /* ---------- sponsor logos ---------- */
  function addSponsor() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*'; inp.multiple = true;
    inp.onchange = () => {
      const files = [...inp.files]; if (!files.length) return;
      const list = sponsorsFor(state.event).slice();
      let pending = files.length;
      files.forEach(file => {
        const r = new FileReader();
        r.onload = async () => {
          const small = await downscale(r.result, 600, 'image/png');
          list.push(small);
          if (--pending === 0) { sponsorMem[state.event] = list; LS.set('uil-sponsors-' + state.event, list); render(); }
        };
        r.readAsDataURL(file);
      });
    };
    inp.click();
  }
  function removeSponsor(i) {
    const list = sponsorsFor(state.event).slice();
    list.splice(i, 1);
    sponsorMem[state.event] = list;
    LS.set('uil-sponsors-' + state.event, list);
    render();
  }

  /* ---------- export ---------- */
  async function exportPNG() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage) return;
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    try {
      const url = await window.htmlToImage.toPng(ab, { width: fmt.w, height: fmt.h, pixelRatio: 1, cacheBust: true });
      const a = document.createElement('a');
      a.download = `UiLab_${state.event}_${state.format}_${fmt.w}x${fmt.h}.png`;
      a.href = url; a.click();
    } catch (e) { alert('Export failed: ' + e.message); }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }

  /* ---------- PDF: build from a high-res PNG sized exactly to the format ---------- */
  async function exportPDF() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage || !(window.jspdf && window.jspdf.jsPDF)) { alert('PDF library not ready — try again in a moment.'); return; }
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    try {
      const url = await window.htmlToImage.toPng(ab, { width: fmt.w, height: fmt.h, pixelRatio: 2, cacheBust: true });
      const { jsPDF } = window.jspdf;
      let unit, pw, ph;
      if (fmt.kind === 'print') { unit = 'mm'; pw = fmt.mm[0]; ph = fmt.mm[1]; }
      else { unit = 'px'; pw = fmt.w; ph = fmt.h; }
      const pdf = new jsPDF({ orientation: pw > ph ? 'landscape' : 'portrait', unit, format: [pw, ph], compress: true });
      pdf.addImage(url, 'PNG', 0, 0, pw, ph, undefined, 'FAST');
      pdf.save(`UiLab_${state.event}_${state.format}.pdf`);
    } catch (e) { alert('PDF export failed: ' + e.message); }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }

  /* ---------- Print-ready: max resolution + 3mm bleed (print formats) ---------- */
  async function exportPrintReady() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage || !(window.jspdf && window.jspdf.jsPDF)) { alert('PDF library not ready — try again in a moment.'); return; }
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    const btn = $('#btnPrint'); const lbl = btn ? btn.textContent : '';
    if (btn) { btn.textContent = 'Rendering…'; btn.disabled = true; }
    try {
      // ~450dpi for the 150dpi base, capped so huge formats don't blow memory
      const maxPx = 6200;
      let pr = Math.min(3, maxPx / fmt.w, maxPx / fmt.h);
      pr = Math.max(2, pr);
      const url = await window.htmlToImage.toPng(ab, { width: fmt.w, height: fmt.h, pixelRatio: pr, cacheBust: true });
      const { jsPDF } = window.jspdf;
      if (fmt.kind === 'print') {
        const bleed = 3;                         // mm on every edge
        const tw = fmt.mm[0], th = fmt.mm[1];
        const pw = tw + bleed * 2, ph = th + bleed * 2;
        const pdf = new jsPDF({ orientation: pw > ph ? 'landscape' : 'portrait', unit: 'mm', format: [pw, ph], compress: true });
        // cover the full bleed page with uniform scale (no distortion); design bleeds past trim
        const sc = Math.max(pw / tw, ph / th);
        const dw = tw * sc, dh = th * sc;
        pdf.addImage(url, 'PNG', (pw - dw) / 2, (ph - dh) / 2, dw, dh, undefined, 'FAST');
        pdf.save(`UiLab_${state.event}_${state.format}_print-ready_${tw}x${th}mm_bleed3mm.pdf`);
      } else {
        // web formats: high-res PDF at exact pixel size (no bleed)
        const pdf = new jsPDF({ orientation: fmt.w > fmt.h ? 'landscape' : 'portrait', unit: 'px', format: [fmt.w, fmt.h], compress: true });
        pdf.addImage(url, 'PNG', 0, 0, fmt.w, fmt.h, undefined, 'FAST');
        pdf.save(`UiLab_${state.event}_${state.format}_highres.pdf`);
      }
    } catch (e) { alert('Print-ready export failed: ' + e.message); }
    if (btn) { btn.textContent = lbl; btn.disabled = false; }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }
  function boot() {
    buildForm();
    $('#btnPng').onclick = exportPNG;
    $('#btnPdf').onclick = exportPDF;
    $('#btnPrint').onclick = exportPrintReady;
    $('#btnReset').onclick = () => clearOverrides(state.event, state.format);
    $('#btnPhoto').onclick = pickPhoto;
    $('#btnSponsor').onclick = addSponsor;
    window.addEventListener('resize', fit);
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
