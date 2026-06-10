/* UiLab website — demo content (plain global, no JSX) */
window.UILAB_DATA = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'events', label: 'Events' },
    { id: 'industry', label: 'Industry' },
  ],
  verticals: [
    { name: 'Community', tone: 'sun',       blurb: 'A place for Logan to grow and succeed — meetups, mentoring and a network that has your back.' },
    { name: 'Connect',   tone: 'sky',       blurb: 'Linking people, systems and creativity. We match local talent to the firms that need it.' },
    { name: 'Events',    tone: 'summer',    blurb: 'Workshops, lunches and development days that put emerging technology in local hands.' },
    { name: 'Podcasts',  tone: 'jacaranda', blurb: 'Conversations with the founders, engineers and makers shaping Logan’s tech future.' },
    { name: 'Industry',  tone: 'sun',       blurb: 'Where established firms meet new technology, talent and the partnerships to apply it.' },
  ],
  events: [
    { title: 'Emerging technology over lunch', date: '21 Oct 2025', time: '11:30am — 1:30pm', place: 'Extraction Artisan Coffee, Slacks Creek', tag: 'Connect',  status: 'go',   statusLabel: 'Registering' },
    { title: 'Logan Development Day',          date: '04 Nov 2025', time: '9:00am — 4:00pm',   place: 'Logan Entertainment Centre',            tag: 'Industry', status: 'warn', statusLabel: 'Filling fast' },
    { title: 'Brisbane Industrial factory walkthrough', date: '18 Nov 2025', time: '10:00am — 12:00pm', place: '3375 Pacific Hwy, Slacks Creek', tag: 'Industry', status: 'go', statusLabel: 'Registering' },
    { title: 'Ai brand toolkit workshop',      date: '02 Dec 2025', time: '6:00pm — 8:00pm',   place: 'UiLab Studio, Springwood',              tag: 'Community', status: 'stop', statusLabel: 'Waitlist' },
  ],
  stats: [
    { value: '12', label: 'Council divisions' },
    { value: '131K', label: 'Community reach' },
    { value: '40+', label: 'Events a year' },
    { value: '2025', label: 'Founded in Logan' },
  ],
};
