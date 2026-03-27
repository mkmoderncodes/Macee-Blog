import { ACCENT_COLOR } from "../constants/colors";

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  card,
  border,
  subtext,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 36,
        justifyContent: "center",
      }}
    >
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onCategoryChange(c)}
          style={{
            padding: "7px 18px",
            borderRadius: 99,
            border: `1px solid ${activeCategory === c ? ACCENT_COLOR : border}`,
            background: activeCategory === c ? `${ACCENT_COLOR}22` : card,
            color: activeCategory === c ? ACCENT_COLOR : subtext,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
