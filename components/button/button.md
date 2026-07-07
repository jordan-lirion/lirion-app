# Button

## Purpose
Élément interactif de base pour déclencher une action. Toujours utiliser `<button>` (action dans la page) ou `<a>` (navigation vers une autre URL).

## Usage
```html
<button class="btn btn--default">Continuer</button>
<button class="btn btn--primary btn--lg btn--full">Jouer</button>
<button class="btn btn--outline btn--sm">Annuler</button>
<button class="btn btn--default btn--icon" aria-label="Fermer">
  <!-- SVG icon -->
</button>
```

## Variants
| Classe | Usage |
|---|---|
| `.btn--default` | Action principale — fond sombre, texte blanc |
| `.btn--primary` | Accent Lirion — fond jaune |
| `.btn--secondary` | Action secondaire — fond muted avec bordure |
| `.btn--outline` | Alternatif sobre — transparent avec bordure |
| `.btn--ghost` | Minimal — transparent sans bordure |
| `.btn--destructive` | Action destructive — fond rouge |

## Sizes
| Classe | Hauteur | Usage |
|---|---|---|
| `.btn--sm` | `--height-sm` (32px) | Interfaces denses, badges d'action |
| *(default)* | `--height-md` (36px) | Usage courant |
| `.btn--lg` | `--height-lg` (40px) | Actions principales, CTAs |

## Modifiers
- `.btn--full` — largeur 100% du parent
- `.btn--icon` — carré, padding 0 (pour boutons icône seule)

## States
- `:hover` — assombrit légèrement le fond via `color-mix`
- `:disabled` / `[aria-disabled="true"]` — `pointer-events: none`, couleurs muted

## Accessibility
- Toujours un label textuel visible ou `aria-label` pour `.btn--icon`
- Ne pas utiliser `<div>` ou `<span>` à la place de `<button>`

## Changelog
- 2026-07-06 — Création initiale
