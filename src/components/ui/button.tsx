import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const variants = {
  primary:
    "bg-brand-700 text-white shadow-soft hover:bg-brand-800 focus-visible:ring-brand-600",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white",
  outline:
    "border border-charcoal-200 bg-white text-charcoal-900 shadow-sm hover:border-brand-300 hover:bg-brand-50 focus-visible:ring-brand-500",
  whatsapp:
    "bg-[#25D366] text-white shadow-soft hover:bg-[#1fb855] focus-visible:ring-[#25D366]",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-500",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type LinkButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

function cn(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
