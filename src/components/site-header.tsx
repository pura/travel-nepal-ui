"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/trips", label: "Trips" },
  { href: "/#how-it-works", label: "How it works" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight" onClick={closeMenu}>
          <span className="text-lg font-semibold tracking-tight text-emerald-900">
            DreamExploreRepeat.com
          </span>
          <span className="text-xs text-stone-600">Leave us to curate your journey.</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-stone-300 px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-emerald-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/trips"
            className="rounded-full bg-emerald-700 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-800"
          >
            Browse trips
          </Link>
        </nav>
      </div>
      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-stone-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-stone-700 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-2 py-2 transition hover:bg-stone-100 hover:text-emerald-800"
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/trips"
              className="mt-1 inline-flex w-fit rounded-full bg-emerald-700 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-800"
              onClick={closeMenu}
            >
              Browse trips
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
