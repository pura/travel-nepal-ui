"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { IconCalendar, IconRoute, IconStar } from "@/components/ui/icons";
import { AiChatTrigger } from "@/components/ai-chat";
import { BrandMark } from "@/components/brand-mark";
import { SITE } from "@/lib/site-config";

type NavIcon = (props: { className?: string }) => JSX.Element;

const navLinks: ReadonlyArray<{
  href: string;
  label: string;
  Icon: NavIcon;
}> = [
  { href: "/trips", label: "Trips & tours", Icon: IconRoute },
  { href: "/#why-book-heading", label: "Why us", Icon: IconStar },
];

function isActiveHref(pathname: string, href: string) {
  if (href.startsWith("/trips")) {
    return pathname === "/trips" || pathname.startsWith("/trips/");
  }
  return false;
}

function NavLink({
  href,
  Icon,
  children,
  onClick,
}: {
  href: string;
  Icon: NavIcon;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = isActiveHref(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[0.9375rem] font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
        active
          ? "bg-brand-50 text-brand-800"
          : "text-charcoal-600 hover:bg-charcoal-100/70 hover:text-charcoal-900"
      }`}
    >
      <span className={`inline-flex shrink-0 ${active ? "text-brand-600/90" : "text-charcoal-400 group-hover:text-charcoal-600"}`} aria-hidden>
        <Icon className="h-[1.0625rem] w-[1.0625rem]" />
      </span>
      {children}
    </Link>
  );
}

function IconMenuOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" d="M5 8h14M5 12h14M5 16h14" />
    </svg>
  );
}

function IconMenuClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}

function SiteWordMark() {
  const name = SITE.name;
  const lastSpace = name.lastIndexOf(" ");
  if (lastSpace <= 0) {
    return <span className="text-brand-950">{name}</span>;
  }
  return (
    <>
      <span className="text-brand-950">{name.slice(0, lastSpace)}</span>{" "}
      <span className="text-brand-700">{name.slice(lastSpace + 1)}</span>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal-200/60 bg-[#faf9f7]/85 shadow-[0_1px_0_rgba(31,30,28,0.04)] backdrop-blur-lg">
      <div className="mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group/logo flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-700/[0.11] text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-brand-700/10 transition-colors group-hover/logo:bg-brand-700/[0.16]">
            <BrandMark className="h-[1.35rem] w-[1.35rem]" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-[1rem] font-semibold tracking-tight sm:text-[1.125rem]">
              <SiteWordMark />
            </span>
            <span className="mt-[3px] block max-w-[11rem] truncate text-[0.6875rem] font-medium tracking-wide text-charcoal-500 sm:max-w-[20rem] sm:text-[11px] sm:tracking-[0.02em] lg:max-w-[26rem]">
              {SITE.brandSlogan}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-charcoal-200/90 bg-white text-charcoal-700 shadow-sm transition hover:border-charcoal-300 hover:bg-charcoal-50 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <IconMenuClose className="h-5 w-5" /> : <IconMenuOpen className="h-5 w-5" />}
        </button>

        <nav
          aria-label="Main navigation"
          className="hidden h-full flex-1 items-center justify-end gap-1 md:flex"
        >
          <div className="flex items-center rounded-full bg-charcoal-100/35 p-0.5 pr-1 backdrop-blur-sm">
            {navLinks.map((l) => (
              <NavLink key={l.href} href={l.href} Icon={l.Icon}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <span className="mx-2 hidden h-6 w-px shrink-0 bg-charcoal-200 md:block lg:mx-3" aria-hidden />

          <div className="flex items-center gap-2 lg:gap-3">
            <ButtonLink href="/plan" size="sm" className="shadow-sm">
              <span className="inline-flex shrink-0 opacity-95" aria-hidden>
                <IconCalendar className="h-4 w-4" />
              </span>
              Plan your trip
            </ButtonLink>
            <AiChatTrigger
              showIcon
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3.5 py-2 text-[0.8125rem] font-semibold text-brand-800 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              AI assistant
            </AiChatTrigger>
          </div>
        </nav>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="max-h-[min(70vh,calc(100dvh-3.75rem))] overflow-y-auto border-t border-charcoal-200/80 bg-white shadow-inner md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((l) => {
              const Icon = l.Icon;
              const active = isActiveHref(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[0.9375rem] font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-800"
                      : "text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-900"
                  }`}
                  onClick={closeMenu}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                      active
                        ? "border-brand-200/80 bg-brand-100/80 text-brand-700"
                        : "border-charcoal-200/80 bg-charcoal-50/90 text-charcoal-500 group-hover:border-charcoal-300 group-hover:text-charcoal-700"
                    }`}
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-charcoal-100 pt-4">
              <ButtonLink
                href="/plan"
                size="sm"
                className="w-full justify-center shadow-sm"
                onClick={closeMenu}
              >
                <span className="inline-flex shrink-0 opacity-95" aria-hidden>
                  <IconCalendar className="h-4 w-4" />
                </span>
                Plan your trip
              </ButtonLink>
              <AiChatTrigger
                showIcon
                onOpen={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 py-3 text-[0.875rem] font-semibold text-brand-800 shadow-sm transition hover:bg-brand-100"
              >
                Ask our AI planner
              </AiChatTrigger>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
