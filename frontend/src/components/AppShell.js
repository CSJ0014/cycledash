// /frontend/src/components/AppShell.js
import { NavTabs } from './NavTabs.js';
import '../style.css';

export function AppShell(content, currentTab) {
  const wrapper = document.createElement('div');
  wrapper.className = 'app-shell';

  const nav = NavTabs(currentTab);
  const main = document.createElement('div');
  main.className = 'main-content';
  main.appendChild(content);

  wrapper.append(nav, main);
  return wrapper;
}
