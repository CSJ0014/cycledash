// /frontend/src/components/ThemeToggle.js
import '@material/web/all.js';

export function ThemeToggle(onToggle) {
  const btn = document.createElement('md-icon-button');
  btn.innerHTML = '<md-icon>light_mode</md-icon>';

  let darkMode = false;

  btn.addEventListener('click', () => {
    darkMode = !darkMode;
    btn.innerHTML = `<md-icon>${darkMode ? 'dark_mode' : 'light_mode'}</md-icon>`;
    onToggle(darkMode ? 'dark' : 'light');
  });

  return btn;
}
