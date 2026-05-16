type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${align === "center" ? "mx-auto" : ""}`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed text-charcoal-600 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

