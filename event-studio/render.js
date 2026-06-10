/* ============================================================
   UiLab Event Studio — artboard renderer
   Reproduces the FIGMA-TEMPLATES [EDIT]/[LOCKED] "event details
   card" in every format. Layout is LOCKED; only palette (per
   event) and [EDIT] text/photo change.
   ============================================================ */
window.UIL = window.UIL || {};

UIL.markSrc = function (kind, pop) {
  // kind: 'wordmark' | 'brandmark' | 'partner'
  // Partner = Queensland AI Hub · Logan mark (recoloured to the event pop).
  if (kind === 'partner') {
    const p = (pop === 'summer') ? 'orange' : pop; // summer == native orange
    return `assets/logos/qld-ai-hub-logan-${p}.png`;
  }
  return `assets/logos/${kind}-${pop}.svg`;
};

UIL.escapeHTML = function (s) {
  return String(s == null ? '' : s).replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]));
};

/* one [EDIT] text node */
UIL.edit = function (field, value, cls) {
  return `<span class="${cls}" data-edit="${field}" contenteditable="true" spellcheck="false">${UIL.escapeHTML(value)}</span>`;
};

UIL.photoBlock = function (ev, info) {
  const src = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `<div class="ph" data-photo title="Click to replace photo"><img src="${src}" alt="" draggable="false"><span class="phhint">Click to add photo</span></div>`;
};

UIL.gridRows = function (info) {
  const cell = (f) => UIL.edit(f, info[f] || '', 'gv');
  return `
    <div class="grid">
      <div class="row">${cell('day')}${cell('date')}</div>
      <div class="row">${cell('start')}${cell('finish')}</div>
      <div class="row">${cell('location')}${cell('address')}</div>
    </div>`;
};

/* sponsor / partner logos uploaded by the user (per event) */
UIL.sponsorRow = function (info) {
  const s = info.__sponsors || [];
  if (!s.length) return '';
  return `<div class="sponsors">` + s.map((src, i) =>
    `<div class="spon" data-sponsor="${i}" title="Click to remove this logo"><img src="${src}" alt="Sponsor ${i + 1}"></div>`
  ).join('') + `</div>`;
};

UIL.lockMarks = function (pop) {
  return `<div class="lock">
      <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
      <img class="mark" src="${UIL.markSrc('brandmark', pop)}" alt="">
    </div>`;
};

UIL.foot = function (pop, info) {
  return `
    <div class="foot">
      <div class="footL">
        ${UIL.lockMarks(pop)}
        ${UIL.sponsorRow(info)}
      </div>
      <img class="partner" src="${UIL.markSrc('partner', pop)}" alt="Queensland Government · Logan">
    </div>`;
};

/* ---- STACKED (portrait / square / story / A4 / A5 / DL) ---- */
UIL.renderStacked = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  return `
  <div class="ab stacked" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="bgdiv"></div>
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      <div class="head">
        ${UIL.edit('name', info.name || '', 'hname')}
        ${UIL.photoBlock(ev, info)}
      </div>
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.edit('cta', info.cta || '', 'cta')}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* ---- STACKED REMIX (divisions-masked hero photo; no rectangular image) ---- */
UIL.renderStackedRemix = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  const cell = (label, f) => `<div class="gcell"><span class="glabel">${label}</span>${UIL.edit(f, info[f] || '', 'gv')}</div>`;
  const emptyMask = `assets/graphics/logan-divisions-${pop}.png`;
  return `
  <div class="ab stacked remix" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="divmask" data-photo data-divmask data-empty="${emptyMask}">
        <img class="dmimg" src="${emptyMask}" alt="" draggable="false">
        <span class="phhint">Click to add a photo</span>
      </div>
      <div class="grid">
        <div class="row">${cell('Day', 'day')}${cell('Date', 'date')}</div>
        <div class="row">${cell('Start Time', 'start')}${cell('End Time', 'finish')}</div>
        <div class="row">${cell('Location', 'location')}${cell('Address', 'address')}</div>
      </div>
      ${UIL.edit('cta', info.cta || '', 'ctabar')}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* secondary ground colour used for the torn division overlays */
UIL.secondary = function (eventKey, ground) {
  const e = UIL.EVENTS[eventKey];
  const other = (e.grounds || []).find(g => g !== ground);
  return other || (ground === 'ocean' ? 'land' : 'ocean');
};

/* ---- SPLIT (LinkedIn / Facebook / Humanitix) — division-overlay bg + rect photo ---- */
UIL.renderSplit = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1200;
  const sec = UIL.secondary(ev.__key, ground);
  const cell = (f) => UIL.edit(f, info[f] || '', 'gv');
  const photo = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `
  <div class="ab split" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <img class="divov divtop" src="assets/graphics/divisions/div-9-${sec}.png" alt="" aria-hidden="true">
    <img class="divov divbot" src="assets/graphics/divisions/div-11-${sec}.png" alt="" aria-hidden="true">
    <div class="splitpad">
      <div class="phcol"><div class="phrect" data-photo title="Click to replace photo"><img src="${photo}" alt="" draggable="false"><span class="phhint">Click to add photo</span></div></div>
      <div class="txt">
        <div class="eyebrow">
          ${UIL.edit('category', info.category || '', 'eyl')}
          <span class="eyr">UILAB.COM.AU</span>
        </div>
        ${UIL.edit('name', info.name || '', 'hname')}
        <div class="grid">
          <div class="row">${cell('day')}${cell('date')}</div>
          <div class="row">${cell('start')}${cell('finish')}</div>
          <div class="row">${cell('location')}${cell('address')}</div>
        </div>
      </div>
    </div>
    <div class="splitfooter">
      <img class="partner" src="${UIL.markSrc('partner', pop)}" alt="Queensland AI Hub · Logan">
      <div class="centerlock">
        <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
        ${UIL.sponsorRow(info)}
      </div>
      <img class="brand" src="assets/logos/brandmark-${pop}.svg" alt="">
    </div>
  </div>`;
};

/* ---- AD (IG Ad Square / Story) — bold headline + description + button ---- */
UIL.renderAd = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  return `
  <div class="ab ad" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'addesc')}
      <div class="grow"></div>
      <div class="adbottom">
        <div class="footL">
          <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
          <img class="mark" src="assets/logos/brandmark-${pop}.svg" alt="">
          ${UIL.sponsorRow(info)}
        </div>
        ${UIL.edit('cta', info.cta || '', 'adbtn')}
      </div>
    </div>
  </div>`;
};

/* ---- TEXT (no photo: eyebrow + headline + description + grid) ---- */
UIL.renderText = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / (fmt.layout === 'split' ? 1200 : 1080);
  return `
  <div class="ab stacked text" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* ---- OVERLAY (full-bleed photo + ground tint) ---- */
UIL.renderOverlay = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / (fmt.layout === 'split' ? 1200 : 1080);
  const photo = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `
  <div class="ab overlay" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <img class="ovphoto" src="${photo}" alt="" draggable="false" data-photo title="Click to replace photo">
    <div class="ovtint"></div>
    <div class="bgdiv"></div>
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

UIL.renderArtboard = function (eventKey, formatKey, info, ground, pop, variant) {
  const ev = UIL.EVENTS[eventKey]; ev.__key = eventKey;
  const fmt = UIL.FORMATS[formatKey];
  let html;
  if (fmt.layout === 'ad') html = UIL.renderAd(ev, fmt, info, ground, pop);
  else if (variant === 'overlay') html = UIL.renderOverlay(ev, fmt, info, ground, pop);
  else if (variant === 'text') html = UIL.renderText(ev, fmt, info, ground, pop);
  else if (fmt.layout === 'split') html = UIL.renderSplit(ev, fmt, info, ground, pop);
  else if (variant === 'remix') html = UIL.renderStackedRemix(ev, fmt, info, ground, pop);
  else html = UIL.renderStacked(ev, fmt, info, ground, pop);
  // tag with the format key so CSS can target story / print backgrounds
  return html.replace('class="ab ', `class="ab fmt-${formatKey} `);
};
