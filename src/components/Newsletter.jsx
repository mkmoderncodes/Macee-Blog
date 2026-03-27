import {
  ACCENT_COLOR,
  SECONDARY_COLOR,
  SUCCESS_COLOR,
} from "../constants/colors";

export default function Newsletter({
  email,
  setEmail,
  subscribed,
  setSubscribed,
  border,
  dark,
  text,
  subtext,
}) {
  return (
    <div
      style={{
        marginTop: 64,
        background:
          "linear-gradient(135deg, rgba(232,121,249,0.1), rgba(99,102,241,0.1))",
        border: `1px solid rgba(232,121,249,0.2)`,
        borderRadius: 20,
        padding: "40px 32px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display'",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        Stay in the loop 📬
      </h3>
      <p style={{ color: subtext, marginBottom: 20 }}>
        Get new articles delivered to your inbox every week.
      </p>
      {subscribed ? (
        <p style={{ color: SUCCESS_COLOR, fontWeight: 700 }}>
          ✅ You're subscribed! Welcome aboard.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 10,
            maxWidth: 400,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: 10,
              background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
              border: `1px solid ${border}`,
              color: text,
              fontSize: 14,
              minWidth: 200,
            }}
          />
          <button
            onClick={() => {
              if (email.includes("@")) setSubscribed(true);
            }}
            style={{
              padding: "12px 22px",
              borderRadius: 10,
              background: `linear-gradient(135deg,${ACCENT_COLOR},${SECONDARY_COLOR})`,
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}
