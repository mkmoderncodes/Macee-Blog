import { useState } from "react";
import { POSTS } from "./data/posts";
import { CATEGORIES } from "./data/categories";
import { getThemeColors } from "./constants/colors";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedSection from "./components/FeaturedSection";
import LatestSection from "./components/LatestSection";
import EmptyState from "./components/EmptyState";
import Newsletter from "./components/Newsletter";
import PostDetail from "./components/PostDetail";

export default function BlogWebsite() {
  const [dark, setDark] = useState(true);
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [liked, setLiked] = useState({});
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const colors = getThemeColors(dark);

  // Filter posts based on category and search
  const filtered = POSTS.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())),
  );
  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  // Show post detail view if selected
  if (selected) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@400;600;700;800&display=swap');`}</style>
        <PostDetail
          post={selected}
          onBack={() => setSelected(null)}
          dark={dark}
          bg={colors.bg}
          text={colors.text}
          subtext={colors.subtext}
          card={colors.card}
          border={colors.border}
        />
      </>
    );
  }

  // Main blog view
  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.text,
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.3s",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=Playfair+Display:wght@700;900&display=swap'); *{box-sizing:border-box;} input:focus{outline:none;}`}</style>

      <Navigation
        dark={dark}
        setDark={setDark}
        bg={colors.bg}
        text={colors.text}
        subtext={colors.subtext}
        border={colors.border}
        card={colors.card}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
        <Hero
          search={search}
          setSearch={setSearch}
          card={colors.card}
          border={colors.border}
          text={colors.text}
          subtext={colors.subtext}
        />

        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={cat}
          onCategoryChange={setCat}
          card={colors.card}
          border={colors.border}
          subtext={colors.subtext}
        />

        <FeaturedSection
          posts={featured}
          border={colors.border}
          card={colors.card}
          subtext={colors.subtext}
          text={colors.text}
          onSelect={setSelected}
          liked={liked}
          onToggleLike={(id) => setLiked((l) => ({ ...l, [id]: !l[id] }))}
        />

        <LatestSection
          posts={regular}
          border={colors.border}
          card={colors.card}
          subtext={colors.subtext}
          text={colors.text}
          onSelect={setSelected}
          liked={liked}
          onToggleLike={(id) => setLiked((l) => ({ ...l, [id]: !l[id] }))}
        />

        {filtered.length === 0 && <EmptyState />}

        <Newsletter
          email={email}
          setEmail={setEmail}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
          border={colors.border}
          dark={dark}
          text={colors.text}
          subtext={colors.subtext}
        />
      </div>
    </div>
  );
}
