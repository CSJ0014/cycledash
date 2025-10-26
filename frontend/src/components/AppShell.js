// /frontend/src/components/AppShell.js
import '@material/web/all.js';

export function AppShell() {
  const wrapper = document.createElement('div');
  wrapper.className = 'app-shell';

  // --- Top App Bar ---
  const appBar = document.createElement('md-top-app-bar');
  appBar.setAttribute('headline', 'CycleDash');
  appBar.innerHTML = `
    <div slot="title" style="font-weight:500;">CycleDash</div>
  `;

  // --- Tab Bar ---
  const tabBar = document.createElement('div');
  tabBar.className = 'tab-bar';
  tabBar.innerHTML = `
    <md-primary-tab active>Ride History</md-primary-tab>
    <md-primary-tab>Ride Analysis</md-primary-tab>
    <md-primary-tab>Training PMC</md-primary-tab>
    <md-primary-tab>Analytics</md-primary-tab>
    <md-primary-tab>Settings</md-primary-tab>
  `;

  // --- Main content area ---
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

