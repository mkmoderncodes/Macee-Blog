import { ACCENT_COLOR } from "../constants/colors";

export default function Hero({
  search,
  setSearch,
  card,
  border,
  text,
  subtext,
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h1
        style={{
          fontFamily: "'Playfair Display'",
          fontSize: 52,
          fontWeight: 900,
          margin: "0 0 12px",
          lineHeight: 1.1,
        }}
      >
        Thoughts on <span style={{ color: ACCENT_COLOR }}>Frontend</span>
      </h1>
      <p
        style={{
          color: subtext,
          fontSize: 16,
          maxWidth: 500,
          margin: "0 auto 28px",
        }}
      >
        Articles, tutorials and opinions on modern web development.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          maxWidth: 420,
          margin: "0 auto",
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍  Search articles…"
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 12,
            background: card,
            border: `1px solid ${border}`,
            color: text,
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
}
