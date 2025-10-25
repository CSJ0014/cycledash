// /frontend/src/components/NavTabs.js
import '@material/web/all.js';

export function NavTabs(currentTab) {
  const tabs = ['Ride History', 'Ride Analysis', 'Training PMC', 'Analytics', 'Settings'];
  const container = document.createElement('div');
  container.className = 'tab-bar';

  tabs.forEach(tab => {
    const el = document.createElement('md-primary-tab');
    el.textContent = tab; // ✅ ensure the label actually appears
    if (tab === currentTab) el.setAttribute('active', '');
    el.addEventListener('click', () => {
      window.location.search = `?tab=${tab}`;
    });
    container.appendChild(el);
  });

  return container;
}
