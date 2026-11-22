const RINGS = [30, 60, 90];
const SPOKES = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4;
  return { x: 100 + 90 * Math.cos(a), y: 100 + 90 * Math.sin(a) };
});

export default function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading">
      <svg viewBox="0 0 200 200" className="loader-web">
        {RINGS.map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            pathLength="1"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {SPOKES.map((s, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={s.x}
            y2={s.y}
            pathLength="1"
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        ))}
      </svg>
      <div className="loader-text">
        NA<span>.</span>
      </div>
    </div>
  );
}