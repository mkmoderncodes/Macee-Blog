import PostCard from "./PostCard";

export default function LatestSection({
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
    <div>
      <h2
        style={{
          fontFamily: "'Playfair Display'",
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 20,
          opacity: 0.8,
        }}
      >
        Latest
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {posts.map((p) => (
          <PostCard
            key={p.id}
            post={p}
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
