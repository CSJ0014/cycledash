import '@material/web/all.js';
import { ThemeToggle } from './ThemeToggle.js';

export function AppShell() {
  const wrapper = document.createElement('div');
  wrapper.className = 'app-shell';

  // App Bar
  const appBar = document.createElement('md-top-app-bar');
  appBar.setAttribute('headline', 'CycleDash');
  appBar.style.background = 'var(--md-sys-color-primary)';
  appBar.style.color = 'white';

  const toggle = ThemeToggle();
  toggle.style.marginLeft = 'auto';
  appBar.appendChild(toggle);

  // Tabs
  const tabBar = document.createElement('div');
  tabBar.className = 'tab-bar';
  tabBar.innerHTML = `
    <md-primary-tab active>Ride History</md-primary-tab>
    <md-primary-tab>Ride Analysis</md-primary-tab>
    <md-primary-tab>Training PMC</md-primary-tab>
    <md-primary-tab>Analytics</md-primary-tab>
    <md-primary-tab>Settings</md-primary-tab>
  `;

  // Main
  const main = document.createElement('div');
  main.className = 'main-content';
  main.innerHTML = `
    <md-filled-card>
      <div style="padding:16px;">
        <h2>Welcome to CycleDash</h2>
        <p>This is your Material 3 dashboard foundation.</p>
      </div>
    </md-filled-card>
  `;

  wrapper.append(appBar, tabBar, main);
  return wrapper;
}
