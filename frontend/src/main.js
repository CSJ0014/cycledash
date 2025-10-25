// /frontend/src/main.js
import { applyTheme } from './theme.js';
import { AppShell } from './components/AppShell.js';
import { RideList } from './components/RideList.js';
import { RideAnalysis } from './components/RideAnalysis.js';

// apply default theme first
applyTheme('light');

// read ?tab=Ride%20History from URL
const params = new URLSearchParams(window.location.search);
let currentTab = params.get('tab') || 'Ride History';

function render(tab) {
  let content;

  switch (tab) {
    case 'Ride Analysis':
      content = RideAnalysis();
      break;
    default:
      content = RideList([
        { title: 'Morning Ride', date: '2025-10-24', distance: 25.3 },
        { title: 'Evening Tempo', date: '2025-10-23', distance: 18.7 },
      ]);
      break;
  }

  // clear body and rebuild
  document.body.innerHTML = '';
  document.body.appendChild(
    AppShell(content, tab, (mode) => {
      applyTheme(mode);
    })
  );
}

// run only after DOM exists
window.addEventListener('DOMContentLoaded', () => render(currentTab));
