// /frontend/src/components/AppBar.js
import '@material/web/all.js';
import { ThemeToggle } from './ThemeToggle.js';

export function AppBar(onThemeToggle) {
  const bar = document.createElement('md-top-app-bar');
  bar.setAttribute('headline', 'CycleDash');

  const container = document.createElement('div');
  container.className = 'appbar-content';

  const title = document.createElement('h1');
  title.textContent = 'CycleDash';
  title.style.margin = '0';
  title.style.fontSize = '1.25rem';
  title.style.flex = '1';

  const themeBtn = ThemeToggle(onThemeToggle);

  const avatar = document.createElement('md-filled-icon-button');
  avatar.innerHTML = '<md-icon>person</md-icon>';

  container.append(title, themeBtn, avatar);
  bar.appendChild(container);

  return bar;
}
