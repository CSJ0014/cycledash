// /frontend/src/theme.js
import '@material/web/all.js';

export function applyTheme(mode = 'light') {
  const root = document.documentElement;
  const isDark = mode === 'dark';

  root.style.colorScheme = isDark ? 'dark' : 'light';

  // Custom color scheme (cycling-inspired)
  const colors = isDark
    ? {
        '--md-sys-color-primary': '#ffb300', // cycling orange
        '--md-sys-color-secondary': '#00acc1', // teal accent
        '--md-sys-color-background': '#121212',
        '--md-sys-color-surface': '#1e1e1e',
        '--md-sys-color-on-surface': '#e0e0e0'
      }
    : {
        '--md-sys-color-primary': '#ff6f00',
        '--md-sys-color-secondary': '#0097a7',
        '--md-sys-color-background': '#fafafa',
        '--md-sys-color-surface': '#ffffff',
        '--md-sys-color-on-surface': '#1c1b1f'
      };

  for (const [key, val] of Object.entries(colors)) {
    root.style.setProperty(key, val);
  }
}
