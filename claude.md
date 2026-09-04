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
Branch deploys réglé sur "All" (septembre 2026, activé pour donner à Carolina & Gilberto un
  lien de prévisualisation du vrai site sans toucher à coming-soon). Lien stable qui se met à
  jour à chaque push sur master : https://master--charbonade-acacia.netlify.app/ — envoyé par
  SMS aux propriétaires. Important : ce compte Netlify CLI local (a-am86) n'a PAS accès à ce
  site — il vit sous un compte/équipe différent, seul le dashboard web d'Adrien y a accès.
  Attention aux crédits de build Netlify : chaque push sur GitHub (n'importe quelle branche)
  déclenche un build. Le client a demandé (septembre 2026) de NE PLUS pousser automatiquement
  à chaque petite modif — on commit en local à chaque changement, et on ne pousse que sur
  demande explicite, pour regrouper plusieurs changements en un seul push/build.
Nom de domaine : charbonade-acacia.ch, acheté et enregistré chez Infomaniak au nom de
  Gilberto Cespedes Vargas / 3J'S SARL. Ajouté côté Netlify comme domaine personnalisé
  (primary domain) + www.charbonade-acacia.ch en alias. Configuration DNS ajoutée chez
  Infomaniak (zone DNS du domaine) :
    charbonade-acacia.ch       A      75.2.60.5
    www.charbonade-acacia.ch   CNAME  charbonade-acacia.netlify.app
  DNS propagé et certificat SSL Let's Encrypt actif (vérifié septembre 2026) : https://
  charbonade-acacia.ch/ répond en HTTPS, sert bien la page coming-soon. Ne pas utiliser
  "Netlify DNS" (délégation des serveurs de noms) — on garde la gestion DNS chez Infomaniak,
  ce qui a permis de créer l'adresse email @charbonade-acacia.ch (voir plus bas).


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
├── en/
│   ├── index.html       → Home (EN)
│   ├── menu.html        → Menu (EN)
│   ├── reservation.html → Reservations & Contact (EN)
│   └── story.html       → Our Story (EN)
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

Couleur changée (août 2026, validé par Carolina) : "ADE" (dans "Charbonade") et le bouton hero
"Réserver une table" (.btn--ember) sont passés du braise (#C1401A) à un vert (#4C9A3B), à la
demande d'Adrien/Carolina — le vert primaire #2D5A27 essayé en premier était trop sombre pour
rester lisible sur la photo du hero (retour visuel : "un peu plus visible ?"). 4 pistes montrées
sur une page de comparaison (screenshots réels sur la vraie photo, pas des maquettes) : vert vif
seul, vert d'origine + contour, vert vif + contour, vert vif + ombre portée. Option retenue :
vert vif + fin contour clair. Implémentation : --color-ember passe à #4C9A3B dans :root, et
.hero__charbonade-main em reçoit -webkit-text-stroke: 1px rgba(245,239,224,0.9) + paint-order:
stroke fill (le contour n'est posé que sur "ADE", pas sur le bouton — un bouton plein n'en a pas
besoin). Retouche (septembre 2026) : le mot coloré n'est plus "ade" dans "Charbonade" mais tout
le mot "Acacia" sur la 2e ligne — markup passé de `Charbon<em>ade</em><br>Acacia` à
`Charbonade<br><em>Acacia</em>` (index.html/es/index.html/en/index.html), le CSS de l'em (couleur
+ contour) n'a pas changé, juste ce qu'il entoure. "Charbonade" est donc entièrement blanc,
"Acacia" entièrement vert avec le contour. --color-ember-soft (le halo .ember-glow en bas du hero) n'a PAS été touché — il reste
orange/braise, volontairement, cette question reste ouverte avec Adrien. Ancienne couleur
braise #C1401A gardée ici au cas où il faudrait revenir en arrière (il suffit de la remettre sur
--color-ember et de retirer le -webkit-text-stroke).

Question posée puis tranchée (août 2026) : Adrien a proposé d'étendre ce même vert à toute la
palette d'accent du site (--color-accent, actuellement la terracotta #C4783A — utilisée pour les
eyebrows, boutons secondaires, prix de la carte, hover, le toggle de langue, le séparateur
acacia...). Comparatif réel montré (terracotta vs vert) sur 5 endroits du site + avis donné :
garder la terracotta comme accent principal, réserver le vert au moment "Charbonade" du hero
uniquement — la terracotta évoque la braise/viande grillée (plus cohérent avec un grill), et
avec deux verts sur la page les accents se détacheraient moins bien du reste. Décision confirmée
par Adrien : on garde --color-accent en terracotta. Ne pas reproposer ce changement sauf si le
client en reparle lui-même.


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
Aperçu du menu du jour (les 2 plats du jour actuel, nom + prix chacun)
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

Retour client (septembre 2026) sur les cartes du menu du jour (.card, dish-card__name/price,
utilisées sur l'aperçu accueil ET la section "Aujourd'hui" de menu.html) : seul endroit du site
encore en carte blanche pleine (background: var(--color-white) + box-shadow), alors que le reste
du site a évolué vers des surfaces teintées ou du texte à plat sur le crème (carte complète en
.menu-item sans fond, bandeau .reservation-express teinté) — ça "cassait" le design. 3 pistes
comparées (captures réelles) : sans carte du tout (comme .menu-item), carte teintée terracotta
(mais le prix, déjà terracotta, s'y détache moins bien), carte discrète (fond gris-crème très
subtil rgba(28,28,28,0.03) + fine bordure rgba(28,28,28,0.08) au lieu de l'ombre). Option retenue
par Adrien : la carte discrète — garde l'effet "carte" (utile pour mettre en avant le côté
"aujourd'hui") sans le blanc qui tranche. .card garde son ombre (--shadow-soft-lg) au survol
uniquement, plus au repos.

Boutons "Réserver une table" passés en vert (septembre 2026) : les 9 occurrences hors hero
(index/menu/histoire × FR/ES/EN — section horaires, bas de la carte complète, fin du beat
"Aujourd'hui") sont passées de .btn--accent (terracotta) à .btn--ember (vert), pour matcher le
bouton du hero. Seul le CSS de .btn--ember a servi, aucune nouvelle classe créée. --color-accent
(terracotta) reste utilisé ailleurs (prix, eyebrows, séparateur, langue — voir décision "tout en
vert" plus haut, qui ne concernait pas les boutons de réservation).

Note "cuisine" ajoutée sous les horaires (septembre 2026), sur index.html et reservation.html
(× FR/ES/EN, 6 fichiers) : phrase discrète (rgba(255,255,255,.72), 0.9rem) juste après le
tableau d'horaires — "La cuisine ferme à 14h le midi et à 22h le soir." (traduite en ES/EN). Le
restaurant/bar reste ouvert jusqu'à 23h30, mais la cuisine s'arrête plus tôt — distinction que
les horaires affichés ne rendaient pas. Pas ajoutée au footer (résumé plus court) ni au JSON-LD
(qui ne modélise que les horaires d'ouverture générale, pas les horaires de cuisine).


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

Retour client (août 2026) sur le bloc "Réserver sur WhatsApp" : jugé trop imposant, un cadre qui
"cassait" le design — grande carte blanche élevée (padding généreux, ombre, coins 16px, centrée)
répétant le même message 3 fois (sous-titre de page, puis titre + texte + bouton + note dans la
carte), et visuellement plus lourde que le vrai formulaire juste en dessous qui lui n'a aucun
cadre. Trois pistes de recomposition proposées sous forme de maquettes (canvas de design) ;
option retenue par Adrien : "Bandeau compact horizontal". Implémenté sur reservation.html,
es/reserva.html et en/reservation.html — la classe .reservation-express garde son nom mais son
CSS passe d'une carte centrée (var(--radius-lg), var(--space-4), box-shadow, text-align:center)
à un bandeau discret sur une ligne (fond var(--color-primary-soft), var(--radius), padding
0.9rem 1.25rem, flex avec justify-content:space-between). Le markup perd l'eyebrow, le h2 et la
note dupliqués : il ne reste qu'une seule phrase courte + le bouton WhatsApp (taille standard,
inchangée). Un seul rappel du message au lieu de trois.


Notre histoire (histoire.html)


Titre validé par le client, à garder tel quel : "Une famille, deux pays, une table".
Accroche revue (août 2026) : Carolina a compris la version originale ("...une famille qui a
choisi de partager sa cuisine comme on partage sa maison") comme une promesse de cuisine
bolivienne, contraire au positionnement du site. Remplacée par "...une famille qui a choisi de
partager sa table comme on partage sa maison" (un seul mot changé, "cuisine" → "table", pour
garder le rythme déjà validé) — même changement répercuté en ES ("su cocina" → "su mesa") et EN
("their cooking" → "their table").
Récit en 4 temps, mise en page alternée gauche/droite : L'arrivée → La cuisine de la maison
(la charbonnade, pas une carte bolivienne) → Les Acacias, un quartier un nom → Aujourd'hui
Identité bolivienne de la famille = récit personnel, jamais une promesse culinaire
6 photos réelles (voir plus bas) ; alternance gauche/droite entre les 4 temps du récit

Anecdote personnelle ajoutée (août 2026) au beat "Les Acacias, un quartier, un nom" (le h2 "Un
joli hasard de géographie" reste inchangé, validé par le client) : Carolina et Gilberto vivent
dans le quartier depuis vingt ans, toujours restés fidèles à ce coin de Genève. Ajouté en
FR/ES/EN dans le paragraphe du beat, sans toucher au récit des 3 autres temps.

Retiré (septembre 2026, à la demande d'Adrien) : la mention que Gilberto avait travaillé chez
Olympico (la churrascaria citée ailleurs dans ce document comme concurrent, à propos du "mur de
texte" de sa carte) juste en face avant d'ouvrir sa propre adresse. Cette phrase a été retirée du
paragraphe dans les 3 langues — le reste de l'anecdote (les vingt ans dans le quartier, la
conclusion "chez eux") reste inchangé.

Bug corrigé (août 2026) : l'alternance gauche/droite entre les 4 temps du récit n'a en réalité
jamais fonctionné depuis son introduction. Le CSS définissait bien `.story-beat--reverse
.story-beat__media { order: 2; }`, mais le HTML des 4 story-beat n'a jamais posé la classe
`.story-beat__media` sur le wrapper de la photo (seul `.photo-frame` y était) — le sélecteur ne
matchait donc jamais rien, et les 4 photos s'affichaient toutes du même côté (une colonne),
malgré la classe `.story-beat--reverse` présente sur les beats 2 et 4. Corrigé en ajoutant
`story-beat__media` à côté de `photo-frame` sur les 4 `<div>` photo des 3 langues
(histoire.html, es/historia.html, en/story.html). Photos aussi mises à jour dans la foulée :
assets/images/terrasse.png remplace terrasse.jpg (beat "Les Acacias"), assets/images/table.png
remplace table.jpg (beat "Aujourd'hui") — les anciens .jpg restent dans le dossier, inutilisés,
comme charbo.jpg.


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


Système trilingue FR / ES / EN — IMPLÉMENTÉ (juillet 2026)


Version française à la racine /
Version espagnole dans /es/
Version anglaise dans /en/ (index.html, menu.html, reservation.html, story.html) — construite
en traduisant directement le contenu FR (source de vérité), chemins déjà root-relative donc
aucun chemin à adapter (/css/style.css, /assets/..., etc. fonctionnent tels quels).
Toggle FR | ES | EN visible dans la navigation sur toutes les pages (12 pages au total)
Le toggle redirige vers la page équivalente dans l'autre langue (liens statiques, pas de JS)
La langue active est indiquée visuellement (souligné + couleur accent)
Onglets de carte (menu.html) : mêmes data-tab="repas/boissons/vins" en EN qu'en FR/ES (seuls
les libellés visibles changent : Meals/Drinks/Wines), pour rester cohérent avec menu.js partagé
Formulaire de réservation EN : Netlify Form séparé, name="booking" (pas "reservation", déjà pris
par la version FR) avec champs traduits (firstname/lastname/email/date/time/guests/comments) —
même logique que la séparation FR "reservation" / ES "reserva", pour ne pas mélanger les
soumissions des différentes langues dans un même formulaire Netlify
Seule donnée non traduite pour l'instant : le "menu du jour" (data/menus.json) reste en français
uniquement (noms de plats) — à traduire une fois le prix du cordon bleu de porc confirmé (voir
"Menu du jour" ci-dessous) ; en attendant, le message "pas de menu du jour" (HTML, donc déjà
traduit dans chaque langue) s'affiche à la place


Menu du jour — logique JS (dans menu.js)

Le "menu du jour" n'est PAS un menu 3 services (entrée/plat/dessert) à un prix fixe : ce sont
2 plats différents au choix (changé de 3 à 2 en août 2026, confirmé par le client — grid-3
devient grid-2 dans index.html/menu.html × 3 langues, et menu.js vérifie plats.length === 2),
chacun avec son propre prix (conforme aux ardoises réelles du restaurant). Servi uniquement le
midi (lundi, jeudi, vendredi) et disparaît automatiquement à 14h00 heure de Genève
(Europe/Zurich) — après quoi la carte complète (toujours affichée en bas de menu.html, valable
tous les jours d'ouverture) prend le relais jusqu'au prochain jour concerné. Réutilisé sur
index.html pour l'aperçu (feature-detection data-menu-preview vs data-menu-full, un seul
fichier JS).

Plats confirmés par Adrien (août 2026) : lundi = Bitoque de bœuf + Cordon bleu de porc, jeudi =
Entrecôte parisienne de bœuf + Lomo saltado, vendredi = Filets de perche + Picanha grillée. Prix
repris de la carte complète/de l'ancien menu.json pour tous les plats déjà présents ailleurs sur
le site (mêmes noms) ; seul le cordon bleu de porc est un plat inédit, sans prix de référence —
"prix": "à confirmer" en attendant, affiché tel quel sur la carte si consulté avant confirmation
(pas grave tant que la Production branch Netlify reste sur coming-soon). Le menu du lundi change
environ tous les 15 jours à la discrétion de Carolina & Gilberto ; jeudi et vendredi sont plus
stables. Adrien préviendra à chaque changement — éditer uniquement data/menus.json.

Prix retirés de l'affichage (septembre 2026, décision d'Adrien) : le menu du jour montre
uniquement le nom des plats, plus le prix — sur l'aperçu accueil ET la section "Aujourd'hui" de
menu.html. Les éléments <p class="dish-card__price" data-plat-prix="N"> ont été retirés du HTML
(6 fichiers : index/menu × FR/ES/EN), et menu.js ne cherche/n'affiche plus prixField. La donnée
"prix" reste dans data/menus.json (inutilisée pour l'instant, gardée au cas où) — inutile de la
retirer du JSON, et le "prix": "à confirmer" du cordon bleu de porc n'est donc plus bloquant
pour rien (ni l'affichage, ni la traduction EN du menu du jour, qui n'a plus que des noms de
plats à traduire).

json// data/menus.json — structure actuelle
{
  "_todo": "Prix du cordon bleu de porc (lundi) à confirmer avec Carolina & Gilberto",
  "_todo_fermetures": "Ajouter ici chaque date de fermeture exceptionnelle (jour férié)",
  "fermetures_exceptionnelles": [],
  "lundi": { "plats": [ { "nom": "...", "prix": "..." }, ... 2 plats ... ] },
  "jeudi": { "plats": [ ... ] },
  "vendredi": { "plats": [ ... ] }
}

javascript// Logique dans menu.js
// 1. Récupérer le jour actuel ET l'heure, en heure Europe/Zurich (Intl.DateTimeFormat)
// 2. Fetch menus.json
// 3. Si jour servi ET heure < 14h00 : afficher les 2 plats (nom seul, plus de prix) du jour
// 4. Sinon (mauvais jour OU après 14h00 OU fetch en échec) : afficher un message neutre déjà
//    présent dans le HTML, la carte complète reste visible en dessous dans tous les cas

SEO — IMPLÉMENTÉ (août 2026)

Sur les 12 pages (FR/ES/EN) : balise canonical, balises hreflang (fr/es/en + x-default, chaque
page pointe vers ses 3 équivalents + elle-même) pour que Google comprenne que ce sont des
traductions et non du contenu dupliqué ; Open Graph + Twitter Card (titre, description, image,
locale) pour un aperçu correct quand un lien du site est partagé (WhatsApp, Facebook, etc.) ;
données structurées JSON-LD Restaurant (nom, adresse, téléphone, horaires, priceRange, lien vers
le menu) identique sur chaque page, "@id" commun "https://charbonade-acacia.ch/#restaurant".
robots.txt et sitemap.xml (multilingue, avec les mêmes alternates hreflang) créés à la racine.
Rien de tout ça n'est visible sur le site (uniquement dans le <head>) et ça n'a aucun effet tant
que la Production branch Netlify reste sur coming-soon.
Horaires utilisés dans le JSON-LD : ceux actuellement affichés en ligne (23h30), pas ceux du
classeur physique — cohérent avec la décision de ne pas changer tant que non confirmé (voir
"Badge horaires" plus bas). priceRange estimé à "CHF 20-40" à partir des plats principaux de la
carte, à ajuster si besoin.


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
restau-soir.jpg, charbonade.jpg, terrasse.png, table.png (histoire), terrasse-soir.jpg (fond
section horaires index). terrasse.png et table.png remplacent depuis août 2026 les anciennes
terrasse.jpg et table.jpg (nouvelles photos fournies par le client) — les .jpg restent dans le
dossier, inutilisés. Photos reçues mais non utilisées pour l'instant : bar.jpg, soir.jpg
(problèmes de cadrage/éclairage, voir conversation), charbo.jpg (retirée de "Notre carte
complète" en juillet 2026 — créait trop de scroll avant les onglets, voir "Onglets de carte"),
terrasse.jpg, table.jpg (anciennes versions, voir ci-dessus). menu1.jpg à menu5.jpg également
reçues (août 2026), pas encore intégrées — destination à préciser avec Adrien.
Carte complète (juillet 2026) transcrite depuis le classeur-menu physique pour Entrées,
Charbonnades, Menu Enfant, Boissons (complet), Vins (rouge uniquement) — voir "Onglets de
carte". Gambas/Poissons/Viandes/Pâtes reconstitués depuis une photo Google Maps récente (page
manquante du classeur photographié), plausibles mais À RECONFIRMER par Carolina & Gilberto à
leur retour de vacances
Nom de domaine, GitHub, Netlify créés et configurés (voir section Déploiement)
Réservation hybride (formulaire Netlify Forms + CTA WhatsApp) validée
Typographie Fraunces + Work Sans validée
Direction "Charbonade en avant" implémentée (voir section dédiée)
Numéro WhatsApp Business réel (+41 78 831 26 70, format international 41788312670 dans
WHATSAPP_NUMBER, js/main.js) — remplace le placeholder 41000000000, août 2026
Réseaux sociaux du footer (12 pages) : Instagram (instagram.com/restaurant_acacia) et Facebook
(facebook.com/p/Restaurant-Acacia-100063478602699), ajoutés en icônes (.footer__social dans
style.css) sous le pavé marque du footer, ouverture dans un nouvel onglet (target="_blank"
rel="noopener")


Encore à obtenir / en attente


Reconfirmation de Gambas/Poissons/Viandes/Pâtes (source Google Maps, pas le classeur physique)
et des vins blancs/rosés (seule la carte des rouges a été photographiée)
Horaires réels (23h30 vs minuit, 14h vs 15h le midi) — voir écart détaillé ci-dessus, à trancher
au retour de vacances des propriétaires
Validation finale de la direction "Charbonade en avant" par Carolina & Gilberto (déjà en ligne
sur master, implémentée sur la base de l'accord d'Adrien)
Traduction du menu du jour (data/menus.json) en anglais — les prix ne s'affichant plus (voir
"Menu du jour"), il ne reste que les noms de plats à traduire, plus simple qu'avant
Numéro de mobile pour vérification d'identité Infomaniak (bloquant ponctuellement une
démarche administrative liée au domaine — sans lien avec le code du site)
