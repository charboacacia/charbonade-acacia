// Restaurant Acacia — comportements globaux (nav, reveal au scroll, lien WhatsApp, badge horaires)
// Aucun texte visiteur n'est écrit ici : tout le texte vient du HTML ou du JSON.

// TODO: remplacer par le vrai numéro WhatsApp Business du restaurant
// (format international, chiffres uniquement, sans + ni espaces, ex: 41791234567)
const WHATSAPP_NUMBER = '41000000000';

// Horaires d'ouverture par jour (0=dimanche..6=samedi), en heure Europe/Zurich.
// Chaque créneau est [heure de début, heure de fin] en décimal (23.5 = 23h30).
const OPENING_HOURS = {
  0: [[11, 14], [18, 23.5]], // dimanche
  1: [[11, 14], [18, 23.5]], // lundi
  2: [[18, 23.5]],           // mardi
  3: [[18, 23.5]],           // mercredi
  4: [[11, 14], [18, 23.5]], // jeudi
  5: [[11, 14], [18, 23.5]], // vendredi
  6: [[18, 23.5]],           // samedi
};

function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function initWhatsAppLinks() {
  document.querySelectorAll('[data-wa-message]').forEach((el) => {
    const message = el.getAttribute('data-wa-message') || '';
    el.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
  });
}

function getZurichNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Zurich',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: 'numeric', minute: 'numeric', hour12: false,
    weekday: 'short',
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type).value;
  const weekdayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[get('weekday')];
  let hour = Number(get('hour'));
  if (hour === 24) hour = 0;

  return {
    dateStr: `${get('year')}-${get('month')}-${get('day')}`,
    weekday: weekdayIndex,
    decimalHour: hour + Number(get('minute')) / 60,
  };
}

function addDaysToDateStr(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  // Ancré à midi UTC pour éviter tout décalage de date lié au changement d'heure.
  const anchor = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  anchor.setUTCDate(anchor.getUTCDate() + days);
  const yy = anchor.getUTCFullYear();
  const mm = String(anchor.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(anchor.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

function formatHour(decimal) {
  const h = Math.floor(decimal);
  const m = Math.round((decimal - h) * 60);
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, '0')}`;
}

function computeOpenStatus(holidays) {
  const now = getZurichNow();
  const todayIsHoliday = holidays.includes(now.dateStr);

  if (!todayIsHoliday) {
    const slots = OPENING_HOURS[now.weekday] || [];
    const currentSlot = slots.find(([start, end]) => now.decimalHour >= start && now.decimalHour < end);
    if (currentSlot) return { open: true, hour: formatHour(currentSlot[1]) };

    const laterToday = slots.find(([start]) => start > now.decimalHour);
    if (laterToday) return { open: false, dayOffset: 0, hour: formatHour(laterToday[0]) };
  }

  for (let offset = 1; offset <= 14; offset += 1) {
    const weekday = (now.weekday + offset) % 7;
    const dateStr = addDaysToDateStr(now.dateStr, offset);
    if (holidays.includes(dateStr)) continue;
    const slots = OPENING_HOURS[weekday] || [];
    if (slots.length) return { open: false, dayOffset: offset, weekday, hour: formatHour(slots[0][0]) };
  }

  return null;
}

function initStatusBadge() {
  const badge = document.querySelector('[data-status-badge]');
  if (!badge) return;

  fetch('/data/menus.json')
    .then((response) => (response.ok ? response.json() : { fermetures_exceptionnelles: [] }))
    .then((data) => {
      const holidays = Array.isArray(data.fermetures_exceptionnelles) ? data.fermetures_exceptionnelles : [];
      const status = computeOpenStatus(holidays);
      if (!status) return;

      let text;
      if (status.open) {
        text = (badge.getAttribute('data-template-open') || '').replace('{heure}', status.hour);
        badge.classList.add('status-badge--open');
        badge.classList.remove('status-badge--closed');
      } else if (status.dayOffset === 0) {
        text = (badge.getAttribute('data-template-closed-today') || '').replace('{heure}', status.hour);
        badge.classList.add('status-badge--closed');
        badge.classList.remove('status-badge--open');
      } else if (status.dayOffset === 1) {
        text = (badge.getAttribute('data-template-closed-tomorrow') || '').replace('{heure}', status.hour);
        badge.classList.add('status-badge--closed');
        badge.classList.remove('status-badge--open');
      } else {
        const dayNames = JSON.parse(badge.getAttribute('data-day-names') || '[]');
        text = (badge.getAttribute('data-template-closed-other') || '')
          .replace('{jour}', dayNames[status.weekday] || '')
          .replace('{heure}', status.hour);
        badge.classList.add('status-badge--closed');
        badge.classList.remove('status-badge--open');
      }

      badge.textContent = text;
      badge.hidden = false;
    })
    .catch(() => {
      // En cas d'échec réseau, on n'affiche rien plutôt qu'une info potentiellement fausse.
    });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initWhatsAppLinks();
  initStatusBadge();
  initScrollReveal();
});
