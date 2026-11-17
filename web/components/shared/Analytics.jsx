"use client";
import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";

const GA_ID = "G-ME6GXBHFZ4";
const CLARITY_ID = "zf44688vd9";

export default function Analytics() {
  useEffect(() => {
    // Delegated click tracking for phone and WhatsApp links.
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("call_click", { link_url: href, page_path: location.pathname });
      else if (href.includes("wa.me/") || href.includes("api.whatsapp.com"))
        track("whatsapp_click", { link_url: href, page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Script id="clarity-init" strategy="lazyOnload">{`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${CLARITY_ID}");
      `}</Script>
    </>
  );
}
