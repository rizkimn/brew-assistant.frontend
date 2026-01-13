import './Header.css';

export default function Header() {
  return (
    <header>
      <h2 class="header-title">BrewAssist</h2>
      <menu class="header-menu">
        <li class="header-menu-item settings-menu">
          <a href="/settings">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)">
                <path d="M23 22a3 3 0 1 0-6 0 3 3 0 0 0 6 0m0 0h2m-11 0H7m10-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h8M7 10h1m23 20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h32v32H0z"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </menu>
    </header>
  );
}
