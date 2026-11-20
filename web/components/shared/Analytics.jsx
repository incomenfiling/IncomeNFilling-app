"use client";
import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";

const GA_ID = "G-ME6GXBHFZ4";
const TAWK_PROPERTY = "670fe2bd2480f5b4f58e7744";
const TAWK_WIDGET = "1iab0rdcg";
const CLARITY_ID = "zf44688vd9";

export default function Analytics() {
  useEffect(() => {
    // Delegated click tracking for phone and WhatsApp links.
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("call_click", { link_url: href, page_path: location.pathname });
      else if (href.includes("calendly.com/")) track("booking_click", { link_url: href, page_path: location.pathname });
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
      <Script id="tawk-init" strategy="lazyOnload">{`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        Tawk_API.customStyle = { visibility: {
          desktop: { position: "bl", xOffset: 20, yOffset: 20 },
          mobile: { position: "bl", xOffset: 8, yOffset: 72 }
        } };
        (function(){
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true; s1.src = "https://embed.tawk.to/${TAWK_PROPERTY}/${TAWK_WIDGET}";
          s1.charset = "UTF-8"; s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}</Script>
    </>
  );
}
