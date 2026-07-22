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


Direction "Charbonade en avant" — IMPLÉMENTÉE sur master (validée par Adrien ; consultation
Carolina & Gilberto encore à faire pour confirmation finale, mais en ligne dès que la branche
master devient la Production branch Netlify)

Contexte : le client veut que "Charbonade" saute aux yeux immédiatement, tout en gardant un
site moderne mais accueillant. Un comparatif visuel (artifact HTML) a été présenté et
adopté par Adrien ("wooow, super cool"), puis implémenté sur index.html/es/index.html avec la
vraie photo assets/images/pres-charbo.jpg (grill à charbonade, braises visibles).

Concept implémenté :
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
- Animation fumée : NON implémentée (l'option statique suffisait selon Adrien — "l'option 2
  seule fait déjà tout le travail"). Concept gardé en réserve si jamais demandé : 3-4 volutes
  de fumée en CSS pur (radial-gradient flouté au blur(18px), mix-blend-mode:screen, @keyframes
  translateY + scale + fade sur 8-12s en boucle), respectant prefers-reduced-motion.
- Le logo (arbre) reste affiché en filigrane comme avant, via le symbole SVG acacia-motif.

Implémentation réelle : classes .hero__charbonade / .hero__charbonade-main / .hero__charbonade-sub
et .grill-lines / .ember-glow dans style.css ; markup dans index.html et es/index.html. Photo de
hero : assets/images/pres-charbo.jpg (grill à charbonade, braises roses visibles, vue de dessus
avec mise en place de table) — correspond bien au concept "braise/flammes" recherché.

Bug corrigé au passage : un élément positionné (image de fond) peint toujours au-dessus du
contenu statique qui le suit dans le DOM, quel que soit l'ordre d'écriture — ça rendait le texte
du hero ET celui de la section horaires invisibles au premier chargement (avant tout scroll).
Fix : .hero__content a position:relative + z-index:1 ; règle générale .section__media ~ * {
position:relative; z-index:1; } pour toute future section utilisant .section__media. Toujours
tester un chargement FRAIS sans scroll après toute modification impliquant .hero__media ou
.section__media — un test avec scroll-through peut masquer ce genre de régression.


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
Carte complète en dessous, organisée en 3 onglets pour éviter le "mur de texte" (Repas /
Boissons / Vins — voir "Onglets de carte" ci-dessous), valable tous les jours d'ouverture
Jours avec menu du jour : lundi, jeudi, vendredi


Onglets de carte — logique JS (dans menu.js, fonction initMenuTabs)

La carte complète est volumineuse (103 lignes : plats + boissons chaudes/froides/alcools +
vins) — pour éviter l'écueil "mur de texte" repéré chez un concurrent (Churrascaria Olympico),
3 onglets .menu-tab (Repas/Boissons/Vins, "Repas" actif par défaut) togglent la visibilité de
3 panneaux [data-tab-panel] via l'attribut hidden. JS minimal (classList + hidden), pas de
librairie. Fonctionne aussi bien en FR (repas/boissons/vins) qu'en ES (mêmes data-tab, libellés
traduits "Comida/Bebidas/Vinos").

Bug corrigé (juillet 2026) : les panneaux Boissons/Vins commencent avec l'attribut hidden, donc
display:none — un élément display:none ne peut jamais avoir une intersection non nulle, donc
l'IntersectionObserver de reveal (main.js) ne les marquait jamais .is-visible. Premier correctif
(classList.add('is-visible') forcé au clic) fonctionnait mais a été remplacé par un correctif plus
simple : voir ci-dessous, la classe .reveal a été retirée des 3 panneaux.

Bug corrigé (juillet 2026, suite) : même avec ce premier correctif, le panneau "Repas" (visible
par défaut, pas caché au départ) posait un problème différent — il gardait sa classe .reveal et
faisait ~2500px de haut. Le fondu (opacité + glissement) ne se déclenche qu'à 15% du bloc visible
à l'écran ; sur un bloc aussi grand, en scrollant à vitesse normale on scrolle plus vite que le
fondu ne rattrape, donnant l'impression que "le menu n'apparaît pas" jusqu'à ce qu'on ralentisse.
Solution retenue (option 1 sur 3 proposées, validée par Adrien) : retirer entièrement la classe
.reveal des 3 panneaux data-tab-panel (repas/boissons/vins) dans menu.html et es/menu.html — leur
contenu s'affiche désormais instantanément, sans dépendre du scroll ni d'un fondu, cohérent avec
l'objectif "carte rapide à consulter" des onglets. Seule la barre .menu-tabs garde son .reveal
(petit élément, pas de souci de ce type). Le classList.add('is-visible') forcé au clic dans
initMenuTabs (menu.js) est devenu inutile et a été retiré en même temps.

Aussi retirée (même retour utilisateur) : la photo charbo.jpg qui accompagnait le titre "Notre
carte complète" (grid-2 avec .photo-frame) — en pile sur mobile, elle ajoutait ~300px de scroll
avant d'atteindre les onglets. Le titre est maintenant seul (section-head), pas de grid-2/photo.
charbo.jpg n'est donc plus utilisé sur le site (gardé dans assets/images/ au cas où).

Bug corrigé (juillet 2026, plus important qu'il n'y paraissait) : sur un jour sans menu du jour
(4 jours sur 7), la section "Aujourd'hui" semblait laisser un grand vide avant la carte. Cause
réelle : `.grid-3 { display: grid }` (règle auteur) l'emportait sur `[hidden] { display: none }`
(règle du navigateur) malgré l'attribut hidden posé par menu.js — une règle auteur bat toujours
une règle navigateur à spécificité égale, quel que soit l'ordre. Résultat : les 3 cartes "—"
placeholder du menu du jour continuaient de s'afficher (invisibles à l'œil mais bien présentes,
~110px de hauteur réelle) même masquées. Corrigé par `.grid-2[hidden], .grid-3[hidden] {
display: none; }` dans style.css (spécificité augmentée, toujours sans !important) — à garder en
tête pour tout futur élément combinant l'attribut hidden avec une classe qui fixe sa propre valeur
de display. Complété par une classe .menu-today--compact (posée par menu.js selon plats.length)
qui réduit aussi le padding de la section et la marge sous le titre quand il n'y a pas de menu du
jour, plutôt que de garder le même gabarit que lorsque les 3 plats sont affichés.

Bug corrigé (juillet 2026, site entier, pas seulement menu.html) : le reste de l'espace vide
signalé par le client sous "Aujourd'hui" venait du motif acacia (le divider entre sections, et
le filigrane .motif--watermark du hero/footer). Deux bugs cumulés :
1. Le `<svg class="motif">` n'a pas son propre viewBox (seul le `<symbol id="acacia-motif"
   viewBox="0 0 240 150">` référencé par `<use>` en a un) — un `<use>` ne transmet pas le
   viewBox du symbole à l'élément hôte pour le calcul de sa taille intrinsèque. Sans viewBox
   propre, height:auto n'a aucun ratio à partir duquel calculer et retombe sur la taille par
   défaut d'un élément remplacé sans dimensions (150px de haut, quelle que soit la largeur
   fixée en CSS) — d'où le divider qui faisait 150px de haut au lieu d'environ 24px. Corrigé en
   ajoutant viewBox="0 0 240 150" directement sur chacun des 18 <svg class="motif..."> du HTML
   (8 pages).
2. Bug distinct découvert au passage : .motif--watermark (filigrane du hero/footer, censé faire
   380px de large) était déclaré AVANT .motif (32px) dans style.css — à spécificité de classe
   égale, la règle la plus tardive dans le fichier l'emporte, donc .motif (32px) écrasait
   silencieusement .motif--watermark (380px) depuis le début : le filigrane s'affichait à 32px
   de large au lieu de 380px, bien plus discret que prévu. Corrigé en réordonnant : .motif--
   watermark est maintenant déclaré juste après .motif dans style.css. Résultat sur les 8 pages :
   divider 38×24px (au lieu de 38×150px), filigrane hero/footer 380×238px (au lieu de 32×150px)
   — le filigrane est donc à présent visiblement plus grand qu'avant sur toutes les pages
   (changement visuel voulu, il correspond à la valeur déjà écrite dans le CSS depuis le début).

Retour client (juillet 2026) sur la photo pres-charbo.jpg dans la section Charbonnades du menu :
capée à max-width:32rem à l'intérieur d'un conteneur bien plus large (~1112px), elle laissait un
grand vide à sa droite, esthétique jugée cassée par le client. Premier correctif tenté (grid-2
photo + texte) jugé encore inégal par le client (photo au milieu d'une carte texte casse le
rythme des 3 onglets, alors que Boissons/Vins sont du texte pur). Décision finale : la photo est
retirée de cette section (elle a déjà son grand moment dans le hero, la répéter ici l'affaiblit
plutôt que la renforcer) — gardée uniquement la phrase de présentation de la charbonnade, pour
garder les 3 onglets visuellement cohérents (texte + prix, rien d'autre) tout en distinguant un
peu la spécialité. pres-charbo.jpg reste utilisée uniquement dans le hero (index.html/es/index.html).


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

Horaires actuellement affichés sur le site (NON modifiés malgré une info contradictoire — voir
ci-dessous) :
  Lundi, Jeudi, Vendredi, Dimanche : 11h–14h & 18h–23h30
  Mardi, Mercredi, Samedi : 18h–23h30

Écart constaté (juillet 2026) : le classeur-menu physique du restaurant affiche "Lundi, Jeudi,
Vendredi et Dimanche 11h à 15h" et "tous les soirs de 18h à 24h" (donc fermeture à minuit, pas
23h30 — confirme un doute qu'Adrien avait depuis le début). Mais Adrien lui-même pense que ces
horaires imprimés sont peut-être anciens ("il me semble qu'ils ferment à 14h00"), et il ne peut
plus vérifier sur Google (fiche non consultable, Carolina & Gilberto en vacances). Décision :
NE PAS changer les horaires en ligne tant que ce n'est pas confirmé par les propriétaires à leur
retour — publier une fermeture à 15h/minuit non confirmée serait pire que garder l'existant.

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
Téléphone : 022 343 54 54
Titre + accroche "Notre histoire" (voir ci-dessus, ne pas modifier)
Texte "L'arrivée" de Notre histoire : la famille vit à Genève depuis longtemps, le restaurant a
ouvert en 2020 (a survécu au covid) — PAS de photos de Carolina/Gilberto sur le site (discrets),
peu d'anecdotes disponibles au-delà de ce fait
6 photos réelles intégrées (assets/images/) : pres-charbo.jpg (hero + carte Charbonnades),
restau-soir.jpg, charbonade.jpg, terrasse.jpg, table.jpg (histoire), terrasse-soir.jpg (fond
section horaires index). 3 photos reçues mais non utilisées pour l'instant : bar.jpg, soir.jpg
(problèmes de cadrage/éclairage, voir conversation), charbo.jpg (retirée de "Notre carte
complète" en juillet 2026 — créait trop de scroll avant les onglets, voir "Onglets de carte")
Carte complète (juillet 2026) transcrite depuis le classeur-menu physique pour Entrées,
Charbonnades, Menu Enfant, Boissons (complet), Vins (rouge uniquement) — voir "Onglets de
carte". Gambas/Poissons/Viandes/Pâtes reconstitués depuis une photo Google Maps récente (page
manquante du classeur photographié), plausibles mais À RECONFIRMER par Carolina & Gilberto à
leur retour de vacances
Nom de domaine, GitHub, Netlify créés et configurés (voir section Déploiement)
Réservation hybride (formulaire Netlify Forms + CTA WhatsApp) validée
Typographie Fraunces + Work Sans validée
Direction "Charbonade en avant" implémentée (voir section dédiée)


Encore à obtenir / en attente


Email de contact du restaurant (le placeholder actuel "contact@acacia-restaurant.ch" ne
correspond pas au vrai domaine charbonade-acacia.ch — à corriger dès qu'une vraie adresse
existe)
Numéro WhatsApp Business (placeholder dans js/main.js, WHATSAPP_NUMBER)
Confirmation finale des 3 plats du jour (lundi/jeudi/vendredi) dans data/menus.json — toujours
provisoires
Reconfirmation de Gambas/Poissons/Viandes/Pâtes (source Google Maps, pas le classeur physique)
et des vins blancs/rosés (seule la carte des rouges a été photographiée)
Horaires réels (23h30 vs minuit, 14h vs 15h le midi) — voir écart détaillé ci-dessus, à trancher
au retour de vacances des propriétaires
Validation finale de la direction "Charbonade en avant" par Carolina & Gilberto (déjà en ligne
sur master, implémentée sur la base de l'accord d'Adrien)
Site en anglais (/en/), à construire une fois le contenu FR finalisé
Propagation DNS + certificat SSL pour charbonade-acacia.ch (en cours, voir section Déploiement)
Numéro de mobile pour vérification d'identité Infomaniak (bloquant ponctuellement une
démarche administrative liée au domaine — sans lien avec le code du site)
