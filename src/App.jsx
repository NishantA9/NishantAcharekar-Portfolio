import { useEffect, useRef, useState } from "react";
import { profile, skills, experience, education, projects, creative } from "./data/portfolio";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import WorkCard from "./components/WorkCard";
import Logo from "./components/Logo";
import TechChip from "./components/TechChip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const TICKER = ["UI/UX Design", "Web Apps", "Video Editing", "Thumbnails", "Machine Learning", "Android Apps", "Content Creation"];
const PROJECT_FILTERS = ["All", "Web App", "Android App", "Machine Learning"];
const CREATIVE_FILTERS = ["All", "Thumbnails", "Video Edits", "Overlays"];

function useRotating(items, ms = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % items.length), ms);
    return () => clearInterval(id);
  }, [items.length, ms]);
  return items[i];
}

function Section({ id, num, title, sub, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="sec-num">{num}</span>
        <h2>{title}</h2>
      </div>
      {sub && <p className="section-sub">{sub}</p>}
      {children}
    </section>
  );
}

function FilterBar({ options, value, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {options.map((o) => (
        <button
          key={o}
          role="tab"
          aria-selected={value === o}
          className={`tab ${value === o ? "active" : ""}`}
          onClick={() => onChange(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [loading, setLoading] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [creativeFilter, setCreativeFilter] = useState("All");
  const audioRef = useRef(null);
  const role = useRotating(profile.roles);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (!musicStarted) {
      a.volume = 0.35;
      a.play()
        .then(() => {
          setMusicStarted(true);
          setMuted(false);
        })
        .catch((e) => console.warn("Music could not start:", e));
      return;
    }
    a.muted = !a.muted;
    setMuted(a.muted);
  };
  const musicOn = musicStarted && !muted;

  const visibleProjects =
    projectFilter === "All" ? projects : projects.filter((p) => p.category === projectFilter);
  const visibleCreative =
    creativeFilter === "All" ? creative : creative.filter((c) => c.category === creativeFilter);

  return (
    <>
      {loading && <Loader />}
      <audio ref={audioRef} src="/music/theme.mp3" loop preload="none" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        musicOn={musicOn}
        onToggleMusic={toggleMusic}
      />

      <main>
        <section id="top" className="hero">
          <div className="hero-text">
            <span className="kicker">Hi, I'm</span>
            <h1 className="hero-name">
              <span>Nishant</span>
              <span className="outline">Acharekar</span>
            </h1>
            <p className="role">
              <span className="role-bar" />
              {role}
            </p>
            <p className="about">{profile.about}</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="btn btn-outline" href={profile.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact
              </a>
            </div>
          </div>
<div className="hero-art">
  <div className="hero-photo">
    <img src={profile.photo} alt={profile.name} />
  </div>
</div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i}>
                {t} <b>✶</b>
              </span>
            ))}
          </div>
        </div>

        <Section id="skills" num="01" title="Skills" sub="Tools I use to design, build and create.">
          <div className="skill-grid">
            {skills.map((group) => (
              <div className="panel" key={group.title}>
                <h3 className="panel-title">{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <TechChip key={item.name} name={item.name} icon={item.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" num="02" title="Experience" sub="Roles across enterprise, education and nonprofit work.">
          <div className="timeline">
            {experience.map((e) => (
              <article className="panel timeline-item" key={e.role + e.company}>
                <header className="exp-head">
                  <Logo src={e.logo} fallback={e.company} />
                  <div className="exp-title">
                    <h3>{e.role}</h3>
                    <p className="company">
                      {e.company} <span>· {e.place}</span>
                    </p>
                  </div>
                  <span className="date-tag">{e.date}</span>
                </header>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {e.skills && (
                  <div className="exp-skills">
                    {e.skills.map((s) => (
                      <span className="chip-plain" key={s}>{s}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" num="03" title="Education">
          <div className="edu-grid">
            {education.map((ed) => (
              <article className="panel" key={ed.school}>
                <header className="exp-head">
                  <Logo src={ed.logo} fallback={ed.school} />
                  <div className="exp-title">
                    <h3>{ed.school}</h3>
                    <p className="company">{ed.degree}</p>
                  </div>
                </header>
                <p className="muted">
                  {ed.date} · {ed.grade}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" num="04" title="Projects" sub="Click an image to enlarge it. Click the card to open the project.">
          <FilterBar options={PROJECT_FILTERS} value={projectFilter} onChange={setProjectFilter} />
          <div className="work-grid">
            {visibleProjects.map((p) => (
              <WorkCard key={p.title} item={p} showDesc />
            ))}
          </div>
        </Section>

        <Section id="creative" num="05" title="Creative Work" sub="Click any image to enlarge it.">
          <FilterBar options={CREATIVE_FILTERS} value={creativeFilter} onChange={setCreativeFilter} />
          <div className="work-grid">
            {visibleCreative.map((c) => (
              <WorkCard key={c.title} item={c} />
            ))}
          </div>
        </Section>

        <Section id="contact" num="06" title="Contact" sub="Send a message and it lands in my inbox.">
          <div className="contact-wrap">
            <Contact />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}