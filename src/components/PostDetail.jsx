import { ACCENT_COLOR } from "../constants/colors";

export default function PostDetail({
  post,
  onBack,
  dark,
  bg,
  text,
  subtext,
  card,
  border,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily: "'Lora', Georgia, serif",
        padding: "24px 16px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <button
          onClick={onBack}
          style={{
            background: card,
            border: `1px solid ${border}`,
            color: text,
            padding: "8px 18px",
            borderRadius: 10,
            cursor: "pointer",
            marginBottom: 28,
            fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          ← Back to Blog
        </button>
        <div style={{ fontSize: 60, marginBottom: 16 }}>{post.emoji}</div>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: 99,
              background: `${ACCENT_COLOR}22`,
              color: ACCENT_COLOR,
              border: `1px solid ${ACCENT_COLOR}44`,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontSize: 12,
              color: subtext,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {post.date} · {post.readTime} read
          </span>
        </div>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: subtext,
            marginBottom: 32,
            borderLeft: `3px solid ${ACCENT_COLOR}`,
            paddingLeft: 16,
          }}
        >
          {post.excerpt}
        </p>
        {[
          "The landscape of modern web development is constantly evolving. As developers, we're challenged to stay current while delivering high-quality, maintainable code.",
          "In this article, we'll explore the core concepts in depth, backed by real-world examples from production codebases. Each example has been carefully chosen to illustrate common pitfalls and best practices.",
          "By the end, you'll have a solid mental model and practical tools to apply these concepts in your own projects. Let's dive in.",
        ].map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: 17,
              lineHeight: 1.9,
              marginBottom: 20,
              color: dark ? "rgba(232,230,223,0.8)" : "rgba(28,28,46,0.75)",
            }}
          >
            {p}
          </p>
        ))}
        <div
          style={{
            background: dark
              ? "rgba(232,121,249,0.08)"
              : "rgba(232,121,249,0.06)",
            border: "1px solid rgba(232,121,249,0.2)",
            borderRadius: 12,
            padding: "20px 24px",
            marginTop: 32,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {post.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  padding: "4px 12px",
                  borderRadius: 99,
                  background: "rgba(232,121,249,0.15)",
                  color: ACCENT_COLOR,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
