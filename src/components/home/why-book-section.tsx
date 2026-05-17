import { Container } from "@/components/ui/container";
import { SiteIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_BOOK } from "@/lib/site-config";

export function WhyBookSection() {
  return (
    <section className="section-padding bg-[#faf9f7]" aria-labelledby="why-book-heading">
      <Container>
        <div id="why-book-heading">
          <SectionHeading
            eyebrow="Why travellers choose us"
            title="Why hikers book Easy Travel Nepal"
            description="Eight decisions we take seriously—British accountability fused with Kathmandu operational depth for Everest trekking, Annapurna circuits & bespoke Nepal expedition travel."
            align="center"
          />
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_BOOK.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col rounded-3xl border border-charcoal-100 bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-brand-200/70 hover:shadow-card motion-reduce:hover:translate-y-0"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800 ring-1 ring-brand-200/70 transition-colors group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700/30">
                <SiteIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-charcoal-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
