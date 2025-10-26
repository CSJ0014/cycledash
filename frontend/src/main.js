// /frontend/src/main.js
import '@material/web/all.js';
import { AppShell } from './components/AppShell.js';
import './style.css';

console.log("✅ CycleDash main loaded");

const root = document.getElementById("app");
root.innerHTML = '';
root.appendChild(AppShell());
