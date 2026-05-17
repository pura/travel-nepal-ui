"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconShieldCheck } from "@/components/ui/icons";
import { HOMEPAGE_TRUST_CAROUSEL_SLIDES as slidesConst } from "@/lib/site-config";

type TrustSlide = (typeof slidesConst)[number];

const slides = [...slidesConst];

function TrustCarouselCard({ slide }: { slide: TrustSlide }) {
  const isPartner = slide.kind === "partner";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-200 bg-white shadow-card">
      <div className="flex min-h-[7.25rem] items-center justify-center border-b border-charcoal-100 bg-charcoal-50/60 px-8 py-10">
        {isPartner ? (
          <div className="relative h-14 w-full max-w-[240px]">
            <Image
              src={slide.logoUrl}
              alt={`${slide.name} logo`}
              fill
              className="object-contain object-center"
              sizes="240px"
            />
          </div>
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-sm">
            <IconShieldCheck className="h-9 w-9" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-charcoal-900">{slide.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-700">{slide.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-600">{slide.description}</p>
        <Link
          href={slide.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 transition hover:text-brand-950"
        >
          {slide.linkLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export function PartnersSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const multi = slides.length > 1;

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || slides.length === 0) return;
    const rect = root.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let best = 0;
    let bestDist = Infinity;
    root.querySelectorAll<HTMLElement>("[data-trust-slide]").forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const mid = r.left + r.width / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || !multi) return;
    updateActiveFromScroll();
    root.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    return () => {
      root.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [multi, updateActiveFromScroll]);

  const scrollToIndex = (i: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(`[data-trust-slide="${i}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const canPrev = active > 0;
  const canNext = active < slides.length - 1;

  return (
    <section className="section-padding bg-[#faf9f7]" aria-labelledby="partners-heading">
      <Container>
        <div id="partners-heading">
          <SectionHeading
            eyebrow="Peace of mind"
            title="ATOL protection, trusted operators"
            description="From ATOL safeguards on qualifying bookings to Himalayan Circuit’s ground handling in Nepal—we pair financial clarity with dependable local delivery."
            align="center"
          />
        </div>

        {!multi ? (
          <div className="mx-auto mt-12 max-w-xl">{slides[0] ? <TrustCarouselCard slide={slides[0]} /> : null}</div>
        ) : (
          <div className="relative mt-12">
            <button
              type="button"
              className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-200 bg-white text-charcoal-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-30 sm:flex"
              aria-label="Previous slide"
              disabled={!canPrev}
              onClick={() => scrollToIndex(active - 1)}
            >
              <span aria-hidden className="text-lg leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-200 bg-white text-charcoal-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-30 sm:flex"
              aria-label="Next slide"
              disabled={!canNext}
              onClick={() => scrollToIndex(active + 1)}
            >
              <span aria-hidden className="text-lg leading-none">
                ›
              </span>
            </button>

            <div
              ref={scrollerRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="ATOL and partner information"
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {slides.map((slide, i) => (
                <article
                  key={slide.id}
                  data-trust-slide={i}
                  aria-label={`${i + 1} of ${slides.length}: ${slide.name}`}
                  className="w-[min(100%,24rem)] shrink-0 snap-center sm:w-[min(100%,28rem)] lg:w-[min(100%,32rem)]"
                >
                  <TrustCarouselCard slide={slide} />
                </article>
              ))}
            </div>

            <div className="mt-2 flex justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.name}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-brand-700" : "w-2 bg-charcoal-300 hover:bg-charcoal-400"
                  }`}
                />
              ))}
            </div>

            <p className="mt-3 text-center text-xs text-charcoal-500 sm:hidden">
              Swipe sideways for ATOL information and partner details
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
