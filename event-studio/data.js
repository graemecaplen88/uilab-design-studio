/* ============================================================
   UiLab Event Studio — data model
   Formats, event palettes, and the shared event-info schema.
   Ocean = Water (#013053), Soil = Earth (#421C01).
   ============================================================ */
window.UIL = window.UIL || {};

UIL.COLORS = {
  land:'#025120', sunset:'#4C0027', ocean:'#013053', soil:'#421C01',
  sky:'#67DAFF', summer:'#FF6325', sun:'#FFCD0E', jacaranda:'#DD60FF', white:'#FFFFFF',
};
UIL.LABEL = { land:'Land', sunset:'Sunset', ocean:'Ocean', soil:'Soil',
  sky:'Sky', summer:'Summer', sun:'Sun', jacaranda:'Jacaranda' };

/* pops that have matching wordmark / brandmark / partner-logo SVGs */
UIL.MARKABLE = ['sky','summer','sun','jacaranda'];

/* Event types — palette options confirmed by UiLab. First entry = default. */
UIL.EVENTS = {
  'digital-builders':       { label:'Digital Builders',       category:'Digital Builders',       grounds:['land','sunset'],   pops:['sky','jacaranda'] },
  'future-tech-open-house': { label:'Future Tech Open House',  category:'Future Tech Open House',  grounds:['sunset','ocean'],  pops:['summer'] },
  'the-common-ground':      { label:'The Common Ground',       category:'The Common Ground',       grounds:['sunset','ocean'],  pops:['sun'] },
  'teacher-ai-toolkit':     { label:'Teacher AI Toolkit',      category:'Teacher AI Toolkit',      grounds:['ocean','land'],    pops:['jacaranda','sky'] },
  'industry-ai-toolkit':    { label:'Industry AI Toolkit',     category:'Industry AI Toolkit',     grounds:['soil','ocean'],    pops:['sun','summer'] },
  'automation-studio':      { label:'Automation Studio',       category:'Automation Studio',       grounds:['sunset','ocean'],  pops:['summer'] },
};

/* Output formats. layout: 'stacked' (vertical) | 'split' (photo-left / text-right).
   kind: 'web' (PNG) | 'print' (PDF, physical mm). */
UIL.FORMATS = {
  'ig-square':   { label:'IG Square',     w:1080, h:1080, layout:'stacked', kind:'web' },
  'ig-portrait': { label:'IG Portrait',   w:1080, h:1350, layout:'stacked', kind:'web' },
  'ig-story':    { label:'IG Story',      w:1080, h:1920, layout:'stacked', kind:'web' },
  'ig-ad-square':{ label:'IG Ad Square',  w:1080, h:1080, layout:'ad',      kind:'web' },
  'ig-ad-story': { label:'IG Ad Story',   w:1080, h:1920, layout:'ad',      kind:'web' },
  'linkedin':    { label:'LinkedIn',      w:1200, h:626,  layout:'split',   kind:'web' },
  'facebook':    { label:'Facebook',      w:1200, h:630,  layout:'split',   kind:'web' },
  'humanitix':   { label:'Humanitix',     w:3200, h:1600, layout:'split',   kind:'web' },
  'a4':          { label:'A4 Flyer',      w:1240, h:1754, layout:'stacked', kind:'print', mm:[210,297] },
  'a5':          { label:'A5 Flyer',      w:874,  h:1240, layout:'stacked', kind:'print', mm:[148,210] },
  'dl':          { label:'DL Flyer',      w:583,  h:1240, layout:'stacked', kind:'print', mm:[99,210] },
};
UIL.FORMAT_ORDER = ['ig-square','ig-portrait','ig-story','ig-ad-square','ig-ad-story','linkedin','facebook','humanitix','a4','a5','dl'];

/* Layout variants offered per format. First entry = default.
   standard · text (no photo) · overlay (full-bleed photo + ground tint)
   · remix (divisions-masked hero) · ad (bold headline + button). */
UIL.VARIANTS = {
  'ig-square':   [['standard','Standard'],['text','Text'],['overlay','Photo overlay']],
  'ig-portrait': [['standard','Standard'],['remix','Remix'],['overlay','Photo overlay']],
  'ig-story':    [['standard','Standard'],['remix','Remix'],['overlay','Photo overlay']],
  'ig-ad-square':[['ad','Ad']],
  'ig-ad-story': [['ad','Ad']],
  'linkedin':    [['standard','Standard'],['overlay','Photo overlay']],
  'facebook':    [['standard','Standard'],['overlay','Photo overlay']],
  'humanitix':   [['standard','Standard'],['overlay','Photo overlay']],
  'a4':          [['standard','Standard'],['remix','Remix'],['overlay','Photo overlay']],
  'a5':          [['standard','Standard'],['remix','Remix'],['overlay','Photo overlay']],
  'dl':          [['standard','Standard'],['remix','Remix'],['overlay','Photo overlay']],
};
UIL.EVENT_ORDER  = ['digital-builders','future-tech-open-house','the-common-ground','teacher-ai-toolkit','industry-ai-toolkit','automation-studio'];

/* The shared [EDIT] event-info schema. */
UIL.FIELDS = [
  { key:'name',        label:'Event Name',        type:'text',     ph:'Future Tech Open House' },
  { key:'description', label:'Event Description', type:'textarea', ph:'Get hands-on with automation, AI & robotics.' },
  { key:'day',         label:'Day',               type:'text',     ph:'Thursday' },
  { key:'date',        label:'Date',              type:'text',     ph:'30 October 2026' },
  { key:'start',       label:'Start Time',        type:'text',     ph:'9:00am' },
  { key:'finish',      label:'End / Finish Time', type:'text',     ph:'2:00pm' },
  { key:'location',    label:'Location',          type:'text',     ph:'UiLab HQ' },
  { key:'address',     label:'Address',           type:'text',     ph:'Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125' },
  { key:'category',    label:'Event Category',    type:'text',     ph:'UiLab’s 2026 Events' },
  { key:'cta',         label:'CTA',               type:'text',     ph:'Register at uilab.com.au/events' },
  { key:'subject',     label:'Subject',           type:'text',     ph:'Emerging technology' },
];

UIL.DEFAULT_INFO = {
  name:'Future Tech Open House',
  description:'Get hands-on with automation, AI & robotics. Experiment, ask questions and build confidence.',
  day:'Thursday', date:'30 October 2026', start:'9:00am', finish:'2:00pm',
  location:'UiLab HQ', address:'Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125',
  category:'UiLab’s 2026 Events', cta:'Register at uilab.com.au/events', subject:'Emerging technology',
};
