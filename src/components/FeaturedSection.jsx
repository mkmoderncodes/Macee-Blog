import PostCard from "./PostCard";

export default function FeaturedSection({
  posts,
  border,
  card,
  subtext,
  text,
  onSelect,
  liked,
  onToggleLike,
}) {
  if (posts.length === 0) return null;

  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Playfair Display'",
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 20,
          opacity: 0.8,
        }}
      >
        Featured
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {posts.map((p) => (
          <PostCard
            key={p.id}
            post={p}
            big
            border={border}
            card={card}
            subtext={subtext}
            text={text}
            onSelect={onSelect}
            liked={liked}
            onToggleLike={onToggleLike}
          />
        ))}
      </div>
    </div>
  );
}
