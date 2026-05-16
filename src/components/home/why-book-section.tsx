import { Container } from "@/components/ui/container";
import { SiteIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_BOOK } from "@/lib/site-config";

export function WhyBookSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-book-heading">
      <Container>
        <div id="why-book-heading">
          <SectionHeading
            eyebrow="Why book with us"
            title="Travel Nepal with people who know every trail"
            description="Six reasons travelers choose us over generic booking sites."
            align="center"
          />
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_BOOK.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-charcoal-100 bg-[#faf9f7] p-6 transition hover:border-brand-200 hover:shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <SiteIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
