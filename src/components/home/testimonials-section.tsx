"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { IconStar } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/site-config";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
      <Container>
        <div id="testimonials-heading">
          <SectionHeading
            eyebrow="Field-proven teams"
            title="What trekkers say once boots are off"
            description="Long-haul hikers who wanted British booking clarity without surrendering Sherpa-led Himalayan craft—real pacing, candid risk calls, lodge standards that held up."
            align="center"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <blockquote className="rounded-3xl border border-charcoal-100 bg-[#faf9f7] p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-amber-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <IconStar key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-700 sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-8 flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image src={t.image} alt="" fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <cite className="not-italic font-semibold text-charcoal-900">{t.name}</cite>
                <p className="text-sm text-charcoal-500">
                  {t.location} · {t.trip}
                </p>
              </div>
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-brand-700" : "w-2.5 bg-charcoal-200 hover:bg-charcoal-300"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
