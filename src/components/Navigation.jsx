import { ACCENT_COLOR } from "../constants/colors";

export default function Navigation({
  dark,
  setDark,
  bg,
  text,
  subtext,
  border,
  card,
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: dark ? "rgba(12,12,20,0.9)" : "rgba(250,250,248,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${border}`,
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display'",
          fontSize: 22,
          fontWeight: 900,
          color: ACCENT_COLOR,
        }}
      >
        DevBlog
      </span>
      <div style={{ display: "flex", gap: 8 }}>
        {["Home", "Articles", "About"].map((l) => (
          <button
            key={l}
            style={{
              background: "none",
              border: "none",
              color: subtext,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {l}
          </button>
        ))}
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            background: card,
            border: `1px solid ${border}`,
            color: text,
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
