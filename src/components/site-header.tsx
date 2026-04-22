import Link from "next/link";

const links = [
  { href: "/trips", label: "Trips" },
  { href: "/#how-it-works", label: "How it works" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-emerald-900">
          Travel Nepal
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-stone-700">
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
    </header>
  );
}
