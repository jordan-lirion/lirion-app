/* form.js — Password toggle for [data-password-toggle] buttons */

export function initForm() {
  document.querySelectorAll('[data-password-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.input-group');
      const input = group?.querySelector('input');
      if (!input) return;

      const wasPassword = input.type === 'password';
      input.type = wasPassword ? 'text' : 'password';

      const eyeEl    = btn.querySelector('[data-lucide="eye"]');
      const eyeOffEl = btn.querySelector('[data-lucide="eye-off"]');

      eyeEl?.classList.toggle('hidden', wasPassword);
      eyeOffEl?.classList.toggle('hidden', !wasPassword);

      btn.setAttribute(
        'aria-label',
        wasPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'
      );
    });
  });
}

initForm();
