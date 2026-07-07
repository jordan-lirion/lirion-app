# Caption

## Purpose
Bulle de dialogue associée à la mascotte (lion Lirion). Permet d'afficher un message contextuel avec une queue directionnelle pointant vers la mascotte.

## Structure
```
.caption.caption--tail-[direction]
  └── .caption__text
      ├── .caption__intro   (première ligne — ton secondaire)
      └── <strong>          (message principal — gras, ton principal)
```

## Usage

```html
<div class="caption caption--tail-bottom-left">
  <p class="caption__text">
    <span class="caption__intro">Bienvenue sur Lirion !</span>
    <strong>Entre ton email pour te connecter.</strong>
  </p>
</div>
```

## Variants — direction de la queue
| Classe | Queue | Mascotte positionnée |
|---|---|---|
| `.caption--tail-bottom-left` | Bas gauche | En dessous à gauche de la bulle |
| `.caption--tail-bottom-right` | Bas droite | En dessous à droite de la bulle |
| `.caption--tail-top-left` | Haut gauche | Au-dessus à gauche de la bulle |
| `.caption--tail-top-right` | Haut droite | Au-dessus à droite de la bulle |

## Notes de design
- La queue est réalisée en CSS pur via `::after` (triangle border-trick)
- `filter: drop-shadow()` est utilisé (au lieu de `box-shadow`) pour que l'ombre englobe aussi la queue
- `.caption__intro` est optionnel — la bulle peut n'avoir qu'un `<strong>`
- La largeur max est `20rem` — réductible via surcharge inline `style="max-width: 14rem"`

## Accessibility
- Le texte de la caption est du contenu lisible — ne pas mettre `aria-hidden`
- Si la mascotte est décorative, son `<img>` doit avoir `alt=""` et `aria-hidden="true"`

## Changelog
- 2026-07-06 — Création initiale (4 directions de queue)
