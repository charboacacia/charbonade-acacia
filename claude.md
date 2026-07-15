Restaurant Acacia / Charbonade Acacia — Arzabe Studio

Contexte du projet

Site web vitrine pour Charbonade Acacia (nom d'exploitation ; le logo/enseigne physique dit
"Restaurant Acacia"), un grill/brasserie situé à Les Acacias, Genève. Domaine officiel :
charbonade-acacia.ch — le nom "Charbonade" est volontairement mis en avant car c'est LE point
fort de la maison : les charbonnades (grillades à volonté). Carte également composée de
gambas, poissons, viandes, pâtes. Carolina et Gilberto (les propriétaires) sont d'origine
bolivienne, mais la carte n'est PAS une carte de cuisine bolivienne — ne jamais utiliser
"cuisine bolivienne" comme accroche marketing. L'identité bolivienne de la famille reste un
élément du récit personnel sur la page "Notre histoire" uniquement.
Développé par Adrien Arzabe — Arzabe Studio.
Clients : Carolina et Gilberto (Gilberto Cespedes Vargas, 3J'S SARL), propriétaires du restaurant.

Le logo (arbre + "ACACIA / RESTAURANT") reste tel quel — c'est celui déjà utilisé sur la
vitrine du restaurant et les cartes de visite. Ne pas le redessiner. La mise en avant de
"Charbonade" se fait par la mise en page et la typographie du site, pas en changeant le logo.


Stack technique


HTML / CSS / JavaScript vanilla — zéro framework, zéro CMS
Pas de jQuery, pas de Bootstrap
Hébergement : GitHub → Netlify (déploiement automatique)
Zéro dépendance externe sauf Google Fonts


Déploiement — état actuel (mis à jour au fil de l'avancement)


Dépôt GitHub : https://github.com/charboacacia/charbonade-acacia (public, créé et poussé).
Adrien (compte a-am86, adrien.arzabe@outlook.com) est collaborateur.
Stratégie de branches :
  - master = le vrai site complet (tout ce document décrit cette branche)
  - coming-soon = une page unique "site en construction" (logo + adresse + téléphone réels,
    rien du contenu provisoire exposé), volontairement déconnectée du reste du site
Site Netlify : "charbonade-acacia" (équipe "Charbonade Acacia"), URL temporaire
  https://charbonade-acacia.netlify.app — actuellement en Production branch = coming-soon,
  donc c'est la page "en construction" qui est visible publiquement pour l'instant, pas le
  vrai site. Pour lancer le vrai site : changer la Production branch sur Netlify de
  coming-soon vers master (aucun fichier à déplacer).
Nom de domaine : charbonade-acacia.ch, acheté et enregistré chez Infomaniak au nom de
  Gilberto Cespedes Vargas / 3J'S SARL. Ajouté côté Netlify comme domaine personnalisé
  (primary domain) + www.charbonade-acacia.ch en alias. Configuration DNS ajoutée chez
  Infomaniak (zone DNS du domaine) :
    charbonade-acacia.ch       A      75.2.60.5
    www.charbonade-acacia.ch   CNAME  charbonade-acacia.netlify.app
  En attente de propagation DNS + certificat SSL Let's Encrypt automatique (peut prendre de
  quelques minutes à ~24h). Ne pas utiliser "Netlify DNS" (délégation des serveurs de noms) —
  on garde la gestion DNS chez Infomaniak pour ne pas compliquer une éventuelle adresse email
  @charbonade-acacia.ch plus tard.


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
│   ├── main.js          → Nav, reveal au scroll, lien WhatsApp, badge ouvert/fermé
│   └── menu.js          → Logique menu du jour dynamique
├── data/
│   └── menus.json       → Menus du jour + fermetures exceptionnelles (à mettre à jour)
├── assets/
│   ├── images/          → Photos du restaurant et des plats (à venir)
│   ├── logo.png          → Logo, encre foncée (fonds clairs / crème)
│   └── logo-light.png    → Même logo, encre recolorée en clair (fonds sombres — footer)
├── client-raw/           → Fichiers bruts du client (contrat, photos sources) — PAS suivi
│                           par le site, exclu du regard public par convention de nommage
├── .gitignore
└── claude.md

Important (casse des dossiers) : sur un système de fichiers insensible à la casse (Windows),
"assets/" et "Assets/" sont le MÊME dossier. Toujours utiliser assets/ (minuscule) dans le
code — Netlify tourne sur Linux, sensible à la casse. Ne jamais créer de dossier "Assets/"
(majuscule) à la racine du site.


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

Piste en attente de validation client — voir section "Direction Charbonade" plus bas pour un
accent braise supplémentaire (--color-ember: #C1401A), à ajouter SI la direction est validée.


Typographie

Titres : Fraunces (Google Fonts), poids 700 pour h1, 600 pour h2-h4 — serif chaleureux et
texturé, choisi pour se démarquer du duo Playfair Display + Inter très répandu sur les sites
générés rapidement (comparatif visuel fait et validé avec le client).
Corps : Work Sans (Google Fonts) — sans-serif lisible, moins générique qu'Inter.
Tailles de base : 16px, line-height 1.6.


Direction "Charbonade en avant" — EN ATTENTE DE VALIDATION (Carolina & Gilberto)

Contexte : le client veut que "Charbonade" saute aux yeux immédiatement, tout en gardant un
site moderne mais accueillant. Un comparatif visuel (artifact HTML) a été présenté et
globalement adopté par Adrien ("wooow, super cool") ; consultation prévue avec Carolina et
Gilberto avant mise en œuvre définitive sur le vrai site.

Concept validé par Adrien, à confirmer avec les propriétaires :
- Hero : inverser la hiérarchie actuelle. Au lieu de "Restaurant Acacia" en h1 + charbonnade
  mentionnée dans le sous-texte, afficher "CHARBONADE" en très grand (Fraunces 900, ~2.6-4.6rem
  responsive, line-height serré ~0.92), avec les 3 dernières lettres ("ADE") teintées dans un
  nouvel accent braise (#C1401A). "ACACIA" passe en petit label au-dessus en majuscules
  espacées (letter-spacing large, Work Sans 600, ~0.82rem).
- Nouveau token couleur à ajouter : --color-ember: #C1401A (accent braise, distinct du
  terracotta existant --color-accent). Utilisé uniquement sur les moments "charbonnade" :
  hero, section/carte Charbonnades du menu — pas une refonte globale de palette.
- Halo braise discret : un dégradé radial bas-gauche du hero en rgba(193,64,26,0.35) vers
  transparent, très localisé (pas toute la photo).
- Texture "grille" : fines lignes diagonales répétées en fond (repeating-linear-gradient à
  115deg, lignes blanches à faible opacité ~0.05, espacées de 16px), utilisée en filigrane sur
  le hero ET réutilisée sur les cartes "Charbonnades" de menu.html pour une identité visuelle
  cohérente sur tout le site.
- Bouton CTA "Réserver" en hero passe de l'accent terracotta à l'accent braise pour renforcer
  le lien visuel (uniquement dans ce contexte, pas ailleurs sur le site).
- Animation fumée (optionnelle, à confirmer si le client la veut) : 3-4 volutes de fumée en
  CSS pur (radial-gradient flouté au blur(18px), mix-blend-mode:screen, @keyframes translateY
  vers le haut + scale + fade sur 8-12s en boucle, décalage aléatoire par volute), positionnées
  près du coin bas-gauche du hero. Respecte prefers-reduced-motion (animation coupée, opacité
  statique faible). Zéro librairie, zéro vidéo.
- Le logo (arbre) reste affiché en filigrane comme aujourd'hui, plus petit / en coin.

Photo de hero à prévoir en conséquence (une fois la direction validée) : privilégier un plan
rapproché sur la braise/les flammes du grill plutôt qu'une vue large de salle — fond
naturellement sombre et texturé, plus facile à faire cohabiter avec un titre aussi affirmé.
Idéalement prise en fin de journée / lumière ambiante faible, avec une zone plus calme du
côté gauche du cadre (le texte est positionné bas-gauche).

Tant que cette direction n'est pas validée par le client, le site en ligne (branche master)
garde le hero actuel (h1 "Restaurant Acacia", charbonnade mentionnée dans le sous-texte,
palette sans accent braise). Ne pas implémenter la direction "Charbonade en avant" sans
confirmation explicite.


Design — principes généraux


Ambiance : chaleureuse, bienveillante, invitation à rester
Pas de design minimaliste froid — sections aérées mais pas vides
Grandes photos en pleine largeur pour l'ambiance
Fond crème (jamais blanc pur)
Coins légèrement arrondis sur les cartes et boutons (8px)
Ombres douces, pas de contours durs
Éviter les tics d'écriture "générés par IA" : pas d'abus de tirets longs en incise, varier la
ponctuation, ne pas répéter mot pour mot les mêmes énumérations d'une section à l'autre
Casser la symétrie plutôt que répéter eyebrow/titre/paragraphe centré sur chaque section
(déjà fait sur "Notre histoire" avec l'alternance gauche/droite — à garder en tête pour toute
nouvelle section)


Pages et contenu

Accueil (index.html)


Hero : grande photo + nom du restaurant + tagline (voir direction "Charbonade en avant"
ci-dessus pour l'évolution en attente de validation)
Badge horaires ouvert/fermé en temps réel sous le tagline (voir logique JS plus bas)
Présentation courte du restaurant (2-3 phrases)
Aperçu du menu du jour (les 3 plats du jour actuel, nom + prix chacun)
Section horaires + adresse + lien Google Maps
CTA : bouton réservation


Menu (menu.html)


Menu du jour en haut (affiché dynamiquement via menu.js + menus.json), servi le midi
uniquement, disparaît à 14h — voir logique JS
Carte complète en dessous, valable tous les jours d'ouverture (toujours visible, y compris
quand il n'y a pas de menu du jour)
Jours avec menu du jour : lundi, jeudi, vendredi


Réservations & Contact (reservation.html)


Formulaire Netlify Forms : prénom, nom, email (obligatoire, pour confirmation), date, heure,
nombre de personnes, commentaires — champs obligatoires marqués d'un *
CTA WhatsApp en parallèle du formulaire, au-dessus (chemin express, plus rapide)
Horaires d'ouverture
Téléphone : 022 343 54 54 (lien tel: cliquable)
Adresse : Rue Caroline 17, 1227 Les Acacias, Genève
Carte Google Maps intégrée (iframe)
Note bien visible juste avant l'envoi : l'envoi du formulaire n'est PAS une confirmation —
la confirmation arrive par email ou téléphone dans les prochaines heures


Notre histoire (histoire.html)


Titre et accroche validés par le client, à garder tels quels : "Une famille, deux pays, une
table" / "De la Bolivie à Genève, l'histoire d'Acacia est avant tout celle d'une famille qui a
choisi de partager sa cuisine comme on partage sa maison."
Récit en 4 temps, mise en page alternée gauche/droite : L'arrivée → La cuisine de la maison
(la charbonnade, pas une carte bolivienne) → Les Acacias, un quartier un nom → Aujourd'hui
Identité bolivienne de la famille = récit personnel, jamais une promesse culinaire
Photos ambiance (à venir)


Badge horaires ouvert/fermé — logique JS (dans main.js)

Affiché sous le tagline du hero sur index.html (FR et ES). Calcule l'état en heure de Genève
(Europe/Zurich, quel que soit le fuseau du visiteur) à partir d'un planning hebdomadaire fixe
codé dans main.js (OPENING_HOURS) + une liste de fermetures exceptionnelles (jours fériés)
lue depuis data/menus.json (fermetures_exceptionnelles: ["AAAA-MM-JJ", ...], vide pour l'instant).

Horaires actuels (à revérifier une fois avec le client — la fermeture pourrait être minuit
plutôt que 23h30) :
  Lundi, Jeudi, Vendredi, Dimanche : 11h–14h & 18h–23h30
  Mardi, Mercredi, Samedi : 18h–23h30

Le badge affiche "Ouvert, ferme à Xh" ou "Fermé, ouvre à Xh" (même jour), "Fermé, ouvre demain
à Xh", ou "Fermé, ouvre [jour] à Xh" si la prochaine ouverture n'est ni aujourd'hui ni demain
(utile si un jour férié est ajouté aux fermetures exceptionnelles). Si l'ajout d'une fermeture
exceptionnelle est demandé par le client, éditer uniquement data/menus.json, aucun code à
toucher.


Système trilingue FR / ES / EN (EN à ajouter plus tard)


Version française à la racine /
Version espagnole dans /es/
Version anglaise dans /en/ — à construire une fois le contenu FR finalisé et confirmé par le
client (nombreux clients anglophones du restaurant, demande explicite du client). Mécanique :
copier une page FR, traduire, adapter les chemins — déjà mécanique grâce aux chemins
root-relative utilisés partout (/css/style.css, /assets/..., etc.)
Toggle FR | ES (| EN à venir) visible dans la navigation sur toutes les pages
Le toggle redirige vers la page équivalente dans l'autre langue (liens statiques, pas de JS)
La langue active est indiquée visuellement (souligné + couleur accent)


Menu du jour — logique JS (dans menu.js)

Le "menu du jour" n'est PAS un menu 3 services (entrée/plat/dessert) à un prix fixe : ce sont
3 plats différents au choix, chacun avec son propre prix (conforme aux ardoises réelles du
restaurant). Servi uniquement le midi (lundi, jeudi, vendredi) et disparaît automatiquement à
14h00 heure de Genève (Europe/Zurich) — après quoi la carte complète (toujours affichée en bas
de menu.html, valable tous les jours d'ouverture) prend le relais jusqu'au prochain jour
concerné. Réutilisé sur index.html pour l'aperçu (feature-detection data-menu-preview vs
data-menu-full, un seul fichier JS).

json// data/menus.json — structure actuelle
{
  "_todo": "Confirmer les plats du jour exacts avec Carolina & Gilberto",
  "_todo_fermetures": "Ajouter ici chaque date de fermeture exceptionnelle (jour férié)",
  "fermetures_exceptionnelles": [],
  "lundi": { "plats": [ { "nom": "...", "prix": "..." }, ... 3 plats ... ] },
  "jeudi": { "plats": [ ... ] },
  "vendredi": { "plats": [ ... ] }
}

javascript// Logique dans menu.js
// 1. Récupérer le jour actuel ET l'heure, en heure Europe/Zurich (Intl.DateTimeFormat)
// 2. Fetch menus.json
// 3. Si jour servi ET heure < 14h00 : afficher les 3 plats (nom + prix) du jour
// 4. Sinon (mauvais jour OU après 14h00 OU fetch en échec) : afficher un message neutre déjà
//    présent dans le HTML, la carte complète reste visible en dessous dans tous les cas

Netlify Forms — configuration

html<!-- Formulaire réel (reservation.html), honeypot visuellement caché plutôt que type="hidden" -->
<form name="reservation" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="reservation" />
  <p class="visually-hidden"><label>Ne remplissez pas ce champ : <input name="bot-field"></label></p>
  <!-- champs du formulaire, email obligatoire -->
</form>

Ce qu'il ne faut JAMAIS faire


Ne jamais utiliser !important dans le CSS
Ne jamais utiliser de framework CSS (Bootstrap, Tailwind, etc.)
Ne jamais utiliser de CMS ou de système de template
Ne jamais mettre de texte visiteur en dur dans le JS — tout passe par le HTML (attributs
data-*) ou le JSON ; le JS ne fait qu'assembler/afficher (ex : WHATSAPP_NUMBER + data-wa-message)
Ne jamais utiliser de blanc pur #FFFFFF comme fond de PAGE (autorisé sur de petites surfaces :
cards, inputs)
Ne jamais créer de nouveau fichier CSS — tout va dans style.css
Ne jamais créer de nouveau fichier JS sauf main.js et menu.js
Ne jamais créer de dossier "Assets/" majuscule à la racine (voir note casse plus haut)
Ne jamais pousser vers GitHub ou changer la Production branch Netlify sans confirmation
explicite d'Adrien


Confirmé avec le client


Positionnement : grill/charbonnade mis en avant, jamais "cuisine bolivienne"
Horaires (voir section badge ci-dessus) — fermeture à revérifier (23h30 vs minuit)
Téléphone : 022 343 54 54
Titre + accroche "Notre histoire" (voir ci-dessus, ne pas modifier)
Carte complète (entrées, gambas, poissons, viandes, pâtes, charbonnades) transcrite à partir
de photos de menu envoyées par le client — plusieurs prix incohérents entre les photos
(certaines datent de plusieurs années), à reconfirmer avant mise en ligne définitive
Nom de domaine, GitHub, Netlify créés et configurés (voir section Déploiement)
Réservation hybride (formulaire Netlify Forms + CTA WhatsApp) validée
Typographie Fraunces + Work Sans validée
Direction "Charbonade en avant" (accent braise, texture grille, fumée animée en option) —
validée par Adrien, en attente de confirmation par Carolina & Gilberto


Encore à obtenir / en attente


Photos réelles (restaurant, plats, ambiance) — si direction "Charbonade en avant" validée :
privilégier un plan rapproché braise/flammes plutôt qu'une vue large de salle
Email de contact du restaurant (le placeholder actuel "contact@acacia-restaurant.ch" ne
correspond pas au vrai domaine charbonade-acacia.ch — à corriger dès qu'une vraie adresse
existe)
Numéro WhatsApp Business (placeholder dans js/main.js, WHATSAPP_NUMBER)
Confirmation finale des 3 plats du jour (lundi/jeudi/vendredi) et des prix de la carte
complète en cas de doublon entre les différentes photos de menu reçues
Prix par personne des Charbo-Gambas 8/12 et 13/15 (à volonté, pas au Kg comme sur une photo
ancienne)
Validation de la direction "Charbonade en avant" par Carolina & Gilberto (voir section dédiée)
Site en anglais (/en/), à construire une fois le contenu FR finalisé
Propagation DNS + certificat SSL pour charbonade-acacia.ch (en cours, voir section Déploiement)
Numéro de mobile pour vérification d'identité Infomaniak (bloquant ponctuellement une
démarche administrative liée au domaine — sans lien avec le code du site)
