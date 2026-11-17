export function ConsentNote({ style, dark = false }) {
  return (
    <p style={{ margin: "8px 0 0", fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, textAlign: "center", color: dark ? "var(--navy-300)" : "var(--ink-400)", ...style }}>
      By submitting, you agree to be contacted by Income N Filing about your enquiry. We use your details only for this and never sell them. See our{" "}
      <a href="/legal#privacy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>.
    </p>
  );
}
