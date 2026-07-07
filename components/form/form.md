# Form

## Purpose
Composants de saisie (champ texte, mot de passe) avec leurs états visuels (défaut, focus, erreur, succès, désactivé) et la gestion du toggle show/hide pour les mots de passe.

## Structure
Un champ complet se compose de :
```
.field
  └── .label          (optionnel)
  └── .input-group    (wrapper si icône présente)
      └── .input
      └── .input-group__icon
  └── .hint           (optionnel — message d'aide ou d'erreur)
```

## Usage

### Champ texte simple
```html
<div class="field">
  <label class="label" for="email">Email</label>
  <input class="input" type="email" id="email" placeholder="Mon email">
</div>
```

### Champ avec icône à gauche
```html
<div class="field">
  <div class="input-group input-group--icon-start">
    <input class="input" type="email" id="email" placeholder="Mon email">
    <span class="input-group__icon" aria-hidden="true">
      <!-- SVG mail icon -->
    </span>
  </div>
</div>
```

### Champ mot de passe avec toggle
```html
<div class="field">
  <div class="input-group input-group--icon-end">
    <input class="input" type="password" id="pwd" placeholder="••••••••">
    <button type="button"
            class="input-group__icon input-group__icon--end input-group__icon--btn"
            data-password-toggle
            aria-label="Afficher le mot de passe">
      <span class="icon--eye"><!-- SVG eye --></span>
      <span class="icon--eye-off hidden"><!-- SVG eye-off --></span>
    </button>
  </div>
</div>
```

### Avec état d'erreur
```html
<div class="field">
  <input class="input input--error" type="email" id="email">
  <span class="hint hint--error">Adresse email invalide.</span>
</div>
```

## States
| Classe | Effet |
|---|---|
| *(default)* | Bordure `--border`, fond `--background` |
| `:focus` | Bordure `--ring` + anneau de focus 3px |
| `.input--error` | Bordure `--destructive` |
| `.input--success` | Bordure `--success` |
| `:disabled` | Fond `--disabled-bg`, couleur `--disabled-fg` |

## JavaScript
`initForm()` est appelé automatiquement à l'import. Il attache un listener à tous les `[data-password-toggle]` présents dans le DOM au moment du chargement.

Pour des éléments ajoutés dynamiquement, appeler `initForm()` manuellement après insertion.

## Accessibility
- Le bouton toggle doit avoir `aria-label` mis à jour dynamiquement ("Afficher" / "Masquer")
- `.input-group__icon` non-interactif doit avoir `aria-hidden="true"`
- `<label>` toujours associé à l'input via `for` + `id`

## Changelog
- 2026-07-06 — Création initiale (text + password + states)
