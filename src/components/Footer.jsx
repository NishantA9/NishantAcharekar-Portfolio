import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/portfolio";

const NAV = ["skills", "experience", "education", "projects", "creative", "contact"];

export default function Footer() {
  const s = profile.social;
  return (
    <footer className="footer">
      <div className="footer-name">{profile.name}</div>

      <nav className="footer-nav">
        {NAV.map((id) => (
          <a key={id} href={`#${id}`}>
            {id}
          </a>
        ))}
      </nav>

      <div className="footer-social">
        <a href={s.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
        <a href={s.x} target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
        <a href={s.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href={s.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href={s.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>

      <p className="muted">
        Made with ❤ by{" "}
        <a href={s.youtube} target="_blank" rel="noreferrer" className="gold">
          FireEmperor
        </a>
      </p>
      <p className="muted small">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}