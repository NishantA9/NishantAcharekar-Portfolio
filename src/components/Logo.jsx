import { useState } from "react";

export default function Logo({ src, fallback }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="logo-badge">{fallback?.[0] || "•"}</span>;
  }
  return (
    <img
      className="logo-img"
      src={src}
      alt={fallback || ""}
      onError={() => setFailed(true)}
    />
  );
}