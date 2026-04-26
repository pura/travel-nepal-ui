import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-emerald-900">DreamExploreRepeat.com</p>
            <p className="mt-1 text-sm text-stone-700">Leave us to curate your journey.</p>
            <p className="mt-2 max-w-sm text-sm text-stone-600">
              Curated itineraries from local operators. Book with confidence — full
              payment integration connects to your Symfony backend.
            </p>
          </div>
          <div className="flex gap-10 text-sm text-stone-600">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-stone-900">Explore</span>
              <Link href="/trips" className="hover:text-emerald-800">
                All trips
              </Link>
              <Link href="/" className="hover:text-emerald-800">
                Home
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-stone-500">
          © {new Date().getFullYear()} DreamExploreRepeat.com. Prices shown are
          indicative until your API supplies live rates.
        </p>
      </div>
    </footer>
  );
}
