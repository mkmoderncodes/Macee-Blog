import { ACCENT_COLOR, DANGER_COLOR, WARNING_COLOR } from "../constants/colors";

export default function PostCard({
  post,
  big = false,
  border,
  card,
  subtext,
  text,
  onSelect,
  liked,
  onToggleLike,
}) {
  return (
    <div
      onClick={() => onSelect(post)}
      style={{
        background: card,
        border: `1px solid ${border}`,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = ACCENT_COLOR;
        e.currentTarget.style.boxShadow = `0 16px 40px rgba(232,121,249,0.15)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = border;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ padding: big ? "28px 28px 20px" : "20px 20px 16px" }}>
        <div style={{ fontSize: big ? 40 : 30, marginBottom: 12 }}>
          {post.emoji}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 99,
              background: `${ACCENT_COLOR}22`,
              color: ACCENT_COLOR,
              border: `1px solid ${ACCENT_COLOR}44`,
            }}
          >
            {post.category}
          </span>
          {post.featured && (
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 99,
                background: `${WARNING_COLOR}22`,
                color: WARNING_COLOR,
                border: `1px solid ${WARNING_COLOR}44`,
              }}
            >
              ⭐ Featured
            </span>
          )}
        </div>
        <h3
          style={{
            color: text,
            fontWeight: 800,
            fontSize: big ? 22 : 17,
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            color: subtext,
            fontSize: 13,
            lineHeight: 1.6,
            margin: "0 0 14px",
          }}
        >
          {post.excerpt}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: subtext,
          }}
        >
          <span>
            {post.date} · {post.readTime} read
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike(post.id);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: liked[post.id] ? DANGER_COLOR : subtext,
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {liked[post.id] ? "❤️" : "🤍"}{" "}
            {post.likes + (liked[post.id] ? 1 : 0)}
          </button>
        </div>
      </div>
    </div>
  );
}
