import { useEffect, useState } from "react";

function getYouTubeId(url = "") {
  const match = url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export default function WorkCard({ item, showDesc = false }) {
  const [open, setOpen] = useState(false);

  const ytId = getYouTubeId(item.youtube);
  const isVideo = Boolean(ytId);
  const isShort = item.youtube?.includes("/shorts/");

  const link = item.link || item.youtube || "";
  const hasLink = Boolean(link);
  const isGithub = link.includes("github.com");
  const thumb = item.image || (isVideo ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "");

  const linkLabel = isGithub
    ? "View code →"
    : isVideo
    ? "Watch on YouTube →"
    : "View project →";

  const openLink = () => {
    if (hasLink) window.open(link, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <article
        className={`panel work-card ${hasLink ? "clickable" : ""}`}
        onClick={openLink}
        onKeyDown={(e) => e.key === "Enter" && openLink()}
        role={hasLink ? "link" : undefined}
        tabIndex={hasLink ? 0 : -1}
      >
        <div
          className="work-img"
          title={isVideo ? "Click to play" : "Click to enlarge"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <img src={thumb} alt={item.title} loading="lazy" />
          {isVideo && <span className="play-badge" aria-hidden="true">▶</span>}
          <span className="work-tag">{item.category}</span>
        </div>

        <div className="work-body">
          <h3>{item.title}</h3>
          {item.date && <p className="muted small">{item.date}</p>}
          {showDesc && item.desc && <p className="muted">{item.desc}</p>}
          {hasLink && <span className="work-link">{linkLabel}</span>}
        </div>
      </article>

      {open && (
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          {isVideo ? (
            <div
              className="video-frame"
              style={{
                width: isShort ? "min(48vh, 90vw)" : "min(960px, 92vw)",
                aspectRatio: isShort ? "9 / 16" : "16 / 9",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
                title={item.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
              <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>
          ) : (
            <img src={thumb} alt={item.title} />
          )}
        </div>
      )}
    </>
  );
}