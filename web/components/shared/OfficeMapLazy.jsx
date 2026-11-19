"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useBP } from "@/lib/useBP";

// The map pulls in d3-geo, topojson and the world atlas (~100 KB+ of JS).
// Load it only when the section is about to scroll into view, and reserve its
// height so the page does not shift (CLS).
const OfficeMapInner = dynamic(() => import("@/components/shared/OfficeMap").then((m) => m.OfficeMap), {
  ssr: false,
});

export function OfficeMap(props) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const bp = useBP();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setShow(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: bp.ltDesktop ? 620 : 470 }}>
      {show ? <OfficeMapInner {...props} /> : <div role="status" style={{ minHeight: "inherit", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-xl)", border: "1px dashed var(--ink-100)", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)" }}>Loading office map… Kolkata office, Kasba · Mon–Sat 10:00–19:00 IST</div>}
    </div>
  );
}
