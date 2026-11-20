export function ConsentNote({ style, dark = false }) {
  return (
    <p style={{ margin: "8px 0 0", fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, textAlign: "center", color: dark ? "var(--navy-300)" : "var(--ink-400)", ...style }}>
      By submitting, you agree that Income N Filing may contact you by phone, WhatsApp or email about this enquiry. We never sell your details. You can withdraw consent any time. See our{" "}
      <a href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a> and{" "}
      <a href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>Terms</a>.
    </p>
  );
}
