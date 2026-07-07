# Card

## Purpose
Conteneur visuel pour regrouper des éléments liés dans une surface élevée (fond blanc, bords arrondis). Sert de "modale inline" ou de zone de formulaire dans les écrans du jeu.

## Structure
```
.card
  ├── .card__header     (optionnel — titre + description)
  │   ├── .card__title
  │   └── .card__description
  ├── .card__content    (corps principal — champs, textes, composants)
  └── .card__footer     (optionnel — boutons d'action)
```

## Usage

### Carte complète (header + content + footer)
```html
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Connexion</h2>
    <p class="card__description">Entre ton email pour accéder à Lirion.</p>
  </div>
  <div class="card__content">
    <!-- champs, composants... -->
  </div>
  <div class="card__footer">
    <button class="btn btn--default btn--full btn--lg">Continuer</button>
  </div>
</div>
```

### Carte minimale (content uniquement)
```html
<div class="card">
  <div class="card__content">
    <!-- contenu -->
  </div>
</div>
```

## Notes de design
- `.card__footer` est `flex-direction: row` — avec `.btn--full`, le bouton occupe toute la largeur
- La largeur est dictée par le parent ; ajouter `style="width: 18rem"` ou une classe utilitaire selon le contexte
- Pas de shadow par défaut — utiliser `filter: drop-shadow(...)` inline si nécessaire dans un contexte spécifique

## Changelog
- 2026-07-06 — Création initiale
