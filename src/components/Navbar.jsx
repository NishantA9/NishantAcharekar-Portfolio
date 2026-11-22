import { useState } from "react";

const LINKS = [
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Creative", "creative"],
  ["Contact", "contact"],
];

function WebMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden="true">
      <g fill="none" stroke="var(--red)" strokeWidth="2">
        <circle cx="20" cy="20" r="6" />
        <circle cx="20" cy="20" r="12" />
        <circle cx="20" cy="20" r="18" />
        <path d="M20 2V38M2 20H38M7 7L33 33M33 7L7 33" />
      </g>
    </svg>
  );
}

function MusicIcon({ on }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      {on ? <path d="M19 5c1.2 1.2 1.2 2.8 0 4" /> : <line x1="3" y1="3" x2="21" y2="21" />}
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme, musicOn, onToggleMusic }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <WebMark />
        <span>
          NA<b>.</b>
        </span>
      </a>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button
          className={`icon-btn ${musicOn ? "on" : ""}`}
          onClick={onToggleMusic}
          aria-label={musicOn ? "Mute music" : "Play music"}
          title={musicOn ? "Mute" : "Play music"}
        >
          <MusicIcon on={musicOn} />
        </button>
        <button
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label="Toggle light and dark theme"
          title="Toggle theme"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}