import * as SI from "react-icons/si";

export default function TechChip({ name, icon }) {
  const Icon = icon ? SI[icon] : null;
  return (
    <span className="chip">
      {Icon ? <Icon className="chip-icon" /> : <span className="chip-dot" />}
      <span>{name}</span>
    </span>
  );
}