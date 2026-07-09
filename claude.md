Restaurant Acacia — Arzabe Studio

Contexte du projet

Site web vitrine pour le Restaurant Acacia, un grill/brasserie situé à Les Acacias, Genève.
Le point fort de la maison : les charbonnades (grillades à volonté). Carte également composée
de gambas, poissons, viandes, pâtes. Carolina et Gilberto (les propriétaires) sont d'origine
bolivienne, mais la carte n'est PAS une carte de cuisine bolivienne — ne jamais utiliser
"cuisine bolivienne" comme accroche marketing. L'identité bolivienne de la famille reste un
élément du récit personnel sur la page "Notre histoire" uniquement.
Développé par Adrien Arzabe — Arzabe Studio.
Clients : Carolina et Gilberto, propriétaires du restaurant.

Stack technique


HTML / CSS / JavaScript vanilla — zéro framework, zéro CMS
Pas de jQuery, pas de Bootstrap
Hébergement : GitHub → Netlify (déploiement automatique)
Formulaire de réservation : Netlify Forms
Zéro dépendance externe sauf Google Fonts


Structure des fichiers

/
├── index.html           → Accueil (FR)
├── menu.html            → Menu carte + menu du jour (FR)
├── reservation.html     → Réservations & Contact (FR)
├── histoire.html        → Notre histoire (FR)
├── es/
│   ├── index.html       → Inicio (ES)
│   ├── menu.html        → Menú (ES)
│   ├── reserva.html     → Reservas & Contacto (ES)
│   └── historia.html    → Nuestra historia (ES)
├── css/
│   └── style.css        → Feuille de style unique
├── js/
│   ├── main.js          → Comportements globaux (nav, toggle langue)
│   └── menu.js          → Logique menu du jour dynamique
├── data/
│   └── menus.json       → Menus du jour (à mettre à jour chaque semaine)
├── assets/
│   ├── images/          → Photos du restaurant et des plats
│   └── logo.png         → Logo Restaurant Acacia
└── CLAUDE.md

Palette de couleurs

css:root {
  --color-primary:    #2D5A27;  /* Vert foncé — couleur principale */
  --color-accent:     #C4783A;  /* Terracotta — accents et CTA */
  --color-bg:         #F5EFE0;  /* Crème chaud — fond général */
  --color-bg-dark:    #1C1C1C;  /* Noir doux — footer, sections sombres */
  --color-text:       #1C1C1C;  /* Texte principal */
  --color-text-light: #6B6B6B;  /* Texte secondaire */
  --color-white:      #FFFFFF;
}

Typographie


Titres : Playfair Display (Google Fonts) — serif élégant, chaleureux
Corps : Inter (Google Fonts) — sans-serif lisible
Tailles de base : 16px, line-height 1.6


Design — principes


Ambiance : chaleureuse, bienveillante, invitation à rester
Pas de design minimaliste froid — sections aérées mais pas vides
Grandes photos en pleine largeur pour l'ambiance
Fond crème (jamais blanc pur)
Coins légèrement arrondis sur les cartes et boutons (8px)
Ombres douces, pas de contours durs


Pages et contenu

Accueil (index.html)


Hero : grande photo + nom du restaurant + tagline
Présentation courte du restaurant (2-3 phrases)
Aperçu du menu du jour (les 3 plats du jour actuel)
Section horaires + adresse + lien Google Maps
CTA : bouton réservation


Menu (menu.html)


Menu du jour en haut (affiché dynamiquement via menu.js + menus.json)
Carte complète en dessous (à remplir lundi)
Jours avec menu : lundi, jeudi, vendredi


Réservations & Contact (reservation.html)


Formulaire Netlify Forms : prénom, nom, email (obligatoire, pour confirmation), date, heure,
nombre de personnes, commentaires
CTA WhatsApp en parallèle du formulaire (chemin express)
Horaires d'ouverture
Téléphone : 022 343 54 54
Adresse : Rue Caroline 17, 1227 Les Acacias, Genève
Carte Google Maps intégrée (iframe)
Note (bien visible, avant l'envoi) : l'envoi du formulaire n'est PAS une confirmation —
la confirmation arrive par email ou téléphone dans les prochaines heures


Notre histoire (histoire.html)


Histoire du restaurant et de la famille — titre et accroche validés par le client, à garder
tels quels : "Une famille, deux pays, une table" / "De la Bolivie à Genève, l'histoire d'Acacia
est avant tout celle d'une famille qui a choisi de partager sa cuisine comme on partage sa
maison."
Identité bolivienne de la famille (récit personnel — pas une promesse culinaire)
Photos ambiance


Système trilingue FR / ES / EN (EN à ajouter — voir ci-dessous)


Version française à la racine /
Version espagnole dans /es/
Version anglaise dans /en/ (à construire après réception du contenu définitif de lundi, pour
éviter de traduire deux fois — nombreux clients anglophones du restaurant, demande du client)
Toggle FR | ES | EN visible dans la navigation sur toutes les pages
Le toggle redirige vers la page équivalente dans l'autre langue
Pas de JavaScript complexe — simple lien href vers la page correspondante
La langue active est indiquée visuellement (souligné ou couleur accent)


Menu du jour — logique JS

Le "menu du jour" n'est PAS un menu 3 services (entrée/plat/dessert) à un prix fixe : ce sont
3 plats différents au choix, chacun avec son propre prix (conforme aux ardoises réelles du
restaurant). Servi uniquement le midi (lundi, jeudi, vendredi) et disparaît automatiquement
à 14h00 heure de Genève (Europe/Zurich) — après quoi la carte complète (toujours affichée en
bas de menu.html, valable tous les jours d'ouverture) prend le relais jusqu'au prochain jour
concerné.

json// data/menus.json — structure attendue
{
  "_todo": "Confirmer les plats du jour exacts avec Carolina & Gilberto",
  "lundi": {
    "plats": [
      { "nom": "Parisienne de Bœuf, Café de Paris, Frites", "prix": "22.-" },
      { "nom": "Lomo Saltado, Riz et Frites", "prix": "21.-" },
      { "nom": "Tagliatelle aux Crevettes", "prix": "19.-" }
    ]
  },
  "jeudi": { "plats": [ /* à confirmer */ ] },
  "vendredi": {
    "plats": [
      { "nom": "Filets de Perche, Sauce Tartare, Frites-Légumes", "prix": "22.-" },
      { "nom": "Picanha Grillée, Frites", "prix": "25.-" },
      { "nom": "Penne Carbonara", "prix": "18.-" }
    ]
  }
}

javascript// Logique dans menu.js
// 1. Récupérer le jour actuel (0=dim, 1=lun, 4=jeu, 5=ven) ET l'heure, en heure Europe/Zurich
// 2. Fetch menus.json
// 3. Si jour servi ET heure < 14h00 : afficher les 3 plats (nom + prix) du jour
// 4. Sinon (mauvais jour OU après 14h00 OU fetch en échec) : afficher un message neutre,
//    la carte complète reste visible en dessous dans tous les cas

Netlify Forms — configuration

html<!-- Attributs obligatoires sur le formulaire -->
<form name="reservation" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="reservation" />
  <input type="hidden" name="bot-field" /> <!-- Anti-spam -->
  <!-- champs du formulaire -->
</form>

Ce qu'il ne faut JAMAIS faire


Ne jamais utiliser !important dans le CSS
Ne jamais utiliser de framework CSS (Bootstrap, Tailwind, etc.)
Ne jamais utiliser de CMS ou de système de template
Ne jamais mettre de texte en dur dans le JS — tout passe par le HTML ou le JSON
Ne jamais utiliser de blanc pur #FFFFFF comme fond de page
Ne jamais créer de nouveau fichier CSS — tout va dans style.css
Ne jamais créer de nouveau fichier JS sauf main.js et menu.js


Confirmé avec le client


 Horaires réels (voir ci-dessus) — à revérifier une fois, l'heure de fermeture pourrait être
minuit plutôt que 23h30
 Carte complète (entrées, gambas, poissons, viandes, pâtes, charbonnades) — dishes confirmés,
certains prix diffèrent selon les photos de carte reçues, à valider une dernière fois avec
Carolina & Gilberto avant mise en ligne définitive
 Téléphone : 022 343 54 54
 Titre + accroche "Notre histoire" (voir ci-dessus)
 Positionnement : grill/charbonnade, pas "cuisine bolivienne"

Encore à obtenir


 Photos réelles (restaurant, plats, ambiance)
 Email de contact du restaurant
 Numéro WhatsApp Business
 Confirmation finale des 3 plats du jour (lundi/jeudi/vendredi) — plusieurs photos de carte
datent de plusieurs années, d'où les prix contradictoires actuellement affichés
 Prix définitifs de la carte complète (plusieurs incohérences identifiées entre les photos
reçues — voir commentaires dans menu.html)
 Prix par personne des Charbo-Gambas 8/12 et 13/15 (à volonté, pas au Kg)
 Site en anglais (/en/), à construire une fois le contenu FR finalisé lundi

En pause jusqu'à lundi (réception des données à jour) sauf ajout signalé par le client entre-temps.