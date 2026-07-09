// Restaurant Acacia — menu du jour dynamique (index.html + menu.html)
// Le texte affiché vient uniquement de data/menus.json ou du HTML déjà présent
// (message "pas de menu aujourd'hui") : ce script ne fait que remplir/afficher.
//
// Le menu du jour est servi le midi uniquement (lundi, jeudi, vendredi) et
// disparaît automatiquement à 14h00, heure de Genève (Europe/Zurich) — quelle
// que soit la position ou le fuseau horaire de la personne qui consulte le site.

function getZurichDayAndHour() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Zurich',
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const weekdayShort = parts.find((p) => p.type === 'weekday').value;
  let hour = Number(parts.find((p) => p.type === 'hour').value);
  if (hour === 24) hour = 0;

  const dayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[weekdayShort];
  return { day: dayIndex, hour };
}

async function loadMenuDuJour() {
  const containers = document.querySelectorAll('[data-menu-preview], [data-menu-full]');
  if (!containers.length) return;

  const dayToKey = { 1: 'lundi', 4: 'jeudi', 5: 'vendredi' };
  const { day, hour } = getZurichDayAndHour();
  const todayKey = dayToKey[day];
  const isLunchWindow = hour < 14;

  let data = null;
  try {
    const response = await fetch('/data/menus.json');
    if (response.ok) data = await response.json();
  } catch (error) {
    data = null;
  }

  const todayMenu = data && todayKey && isLunchWindow ? data[todayKey] : null;
  const plats = todayMenu && Array.isArray(todayMenu.plats) ? todayMenu.plats : [];

  containers.forEach((container) => {
    const list = container.querySelector('[data-menu-preview-list], [data-menu-full-list]');
    const empty = container.querySelector('[data-menu-preview-empty], [data-menu-full-empty]');

    if (plats.length === 3) {
      if (list) {
        list.hidden = false;
        plats.forEach((plat, index) => {
          const nomField = list.querySelector(`[data-plat-nom="${index}"]`);
          const prixField = list.querySelector(`[data-plat-prix="${index}"]`);
          if (nomField && plat.nom) nomField.textContent = plat.nom;
          if (prixField && plat.prix) prixField.textContent = plat.prix;
        });
      }
      if (empty) empty.hidden = true;
    } else {
      if (list) list.hidden = true;
      if (empty) empty.hidden = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', loadMenuDuJour);
