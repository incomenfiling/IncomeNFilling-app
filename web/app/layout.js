import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteGraph, jsonLd } from "@/lib/site";
import Analytics from "@/components/shared/Analytics";

const display = Space_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE = "https://incomenfiling.com";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ITR and GST Filing in Kolkata | Income N Filing",
    template: "%s | Income N Filing",
  },
  description:
    "Tax and compliance in Kasba, Kolkata since 2017. 500+ clients. Every file made by one, checked by another, before and after filing. Get a fixed quote.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Income N Filing",
    locale: "en_IN",
    url: "/",
    title: "ITR and GST Filing in Kolkata | Income N Filing",
    description:
      "ITR and GST filing in Kolkata. Every file made by one, checked by another. If our mistake costs you a penalty, we pay it.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Income N Filing: ITR and GST filing in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income N Filing — GST, Income Tax & Compliance",
    description:
      "ITR and GST filing in Kolkata. Every file made by one, checked by another. If our mistake costs you a penalty, we pay it.",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(siteGraph()) }} />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
