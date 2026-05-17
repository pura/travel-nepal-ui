/** Compact mountain motif for navigation lockup */

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill="currentColor" fillOpacity="0.18" d="M2 20h20L12 4 2 20z" />
      <path fill="currentColor" d="M6 20h12L12 10 6 20z" />
    </svg>
  );
}
