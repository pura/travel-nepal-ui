import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { WhatsAppFab } from "@/components/whatsapp-fab";
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
    default: `${SITE.name} — Custom Nepal Tours & Treks`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium Nepal travel experiences — Everest treks, cultural tours, and custom itineraries crafted by local experts. Get a free itinerary within 24 hours.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — Explore Nepal Beyond the Guidebooks`,
    description:
      "Handcrafted treks and tours with local guides. Transparent pricing, flexible travel, 24/7 WhatsApp support.",
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
        <SiteHeader />
        <main className="min-h-[calc(100vh-4rem)] pb-20 sm:pb-0">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <StickyMobileCta />
      </body>
    </html>
  );
}
