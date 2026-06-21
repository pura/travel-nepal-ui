import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AiChatRoot } from "@/components/ai-chat";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — UK-arranged Himalayan trekking specialists`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "UK-based trekking company arranging Everest Base Camp trekking, Annapurna trekking & bespoke Nepal itineraries—Nepal-ground delivery through trusted Kathmandu partners, transparent quoting, disciplined safety culture.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — Trek Nepal from the UK`,
    description:
      "British booking clarity + Kathmandu operational muscle for Nepal trekking expeditions—with senior Sherpa-led guides, pragmatic pacing, audited logistics partners.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${displayFont.variable}`}>
      <body className="min-h-screen bg-[#faf9f7] font-sans antialiased text-charcoal-900">
        <AiChatRoot>
          <SiteHeader />
          <main className="min-h-[calc(100vh-4rem)] pb-20 sm:pb-0">{children}</main>
          <SiteFooter />
          <StickyMobileCta />
        </AiChatRoot>
      </body>
    </html>
  );
}
