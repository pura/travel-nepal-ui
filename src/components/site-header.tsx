"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { getWhatsAppUrl, SITE } from "@/lib/site-config";

const links = [
  { href: "/trips", label: "Tours" },
  { href: "/#destinations-heading", label: "Destinations" },
  { href: "/#why-book-heading", label: "Why us" },
  { href: "/#plan-trip", label: "Plan trip" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal-100/80 bg-[#faf9f7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight" onClick={closeMenu}>
          <span className="font-display text-lg font-semibold tracking-tight text-brand-900">
            {SITE.name}
          </span>
          <span className="hidden text-xs text-charcoal-500 sm:block">{SITE.tagline}</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-charcoal-200 px-4 py-2 text-sm font-medium text-charcoal-700 transition hover:bg-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal-700 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-brand-700">
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/#plan-trip" size="sm">
            Plan Your Trip
          </ButtonLink>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#128C7E] transition hover:text-[#0d6b5f]"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-charcoal-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm font-medium sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2.5 transition hover:bg-brand-50 hover:text-brand-800"
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#plan-trip"
              className="mt-2 rounded-full bg-brand-700 px-4 py-3 text-center text-white"
              onClick={closeMenu}
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
