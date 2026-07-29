/* ============================================================
   MAIN.JS — Single JS entry point
   Screens only need: <script type="module" src="../components/main.js"></script>
   Add one import per component as they are created.
   ============================================================ */

/* Components */
import './form/form.js';

/* ── Landscape lock ───────────────────────────────────────────── */
// Try API lock (Android Chrome / some browsers)
if (screen.orientation?.lock) {
  screen.orientation.lock('landscape').catch(() => {});
}

// Overlay for iOS which ignores manifest orientation + API
const overlay = document.createElement('div');
overlay.id = 'rotate-overlay';
overlay.innerHTML = `
  <svg class="rotate-overlay__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.5"
       stroke-linecap="round" stroke-linejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M12 18h.01"/>
    <path d="M17 2a5 5 0 0 1 4 8"/>
    <path d="M19 7l2 3-3 1"/>
  </svg>
  <p class="rotate-overlay__text">Retourne ton appareil<br>en mode paysage</p>
`;
document.body.appendChild(overlay);
