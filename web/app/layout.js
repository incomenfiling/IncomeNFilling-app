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
    default: "GST, Income Tax & Compliance Services in Kolkata | Income N Filing",
    template: "%s | Income N Filing",
  },
  description:
    "Income N Filing handles GST, income tax return filing, company incorporation and corporate compliance for businesses and individuals, end to end.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Income N Filing",
    locale: "en_IN",
    url: "/",
    title: "GST, Income Tax & Compliance Services in Kolkata | Income N Filing",
    description:
      "GST, income tax return filing, company incorporation and corporate compliance, handled end to end.",
    images: [{ url: "/logo.jpg", alt: "Income N Filing" }],
  },
  twitter: {
    card: "summary",
    title: "Income N Filing — GST, Income Tax & Compliance",
    description:
      "GST, income tax return filing, company incorporation and corporate compliance, handled end to end.",
    images: ["/logo.jpg"],
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
