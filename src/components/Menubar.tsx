import './Menubar.css';

export default function Menubar() {
  return (
    <nav class="menubar">
      <menu>
        <li><a href="/">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12.76c0-1.358 0-2.037.274-2.634.275-.597.79-1.038 1.821-1.922l1-.857C9.96 5.75 10.89 4.95 12 4.95s2.041.799 3.905 2.396l1 .857c1.03.884 1.546 1.325 1.82 1.922.275.597.275 1.276.275 2.634V17c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17z" stroke="#33363f" stroke-width="1.5"/>
            <path d="M14.5 21v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5" stroke="#33363f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a></li>
        <li><a href="/stats">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3 16 4 17 5.9 17M2 2h20M8 22l4-2v-3m4 5-4-2" stroke="#292d32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="m7.5 11 3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8" stroke="#292d32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a></li>
        <li><a href="/beans">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 10.31a5.64 5.64 0 0 0-2.61-.94C8 9.17 6.77 9.06 4 6" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5"/>
            <path data-name="secondary" d="M8.19 14.35A11 11 0 0 1 7 13.78C3.7 11.87 2.12 8.4 3.49 6S8.66 3.31 12 5.22a8.54 8.54 0 0 1 3.49 3.64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5"/>
            <ellipse cx="14.5" cy="14.5" rx="6.93" ry="4.94" transform="rotate(-29.75 14.51 14.494)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5"/>
            <path data-name="primary" d="M9 18c6.16-6.44 5.51-.95 11-7" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5"/>
          </svg>
        </a></li>
      </menu>
    </nav>
  );
}
