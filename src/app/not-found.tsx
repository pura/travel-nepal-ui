import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-stone-900">Page not found</h1>
      <p className="mt-2 text-stone-600">That trip or page does not exist.</p>
      <Link
        href="/trips"
        className="mt-8 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Browse trips
      </Link>
    </div>
  );
}
