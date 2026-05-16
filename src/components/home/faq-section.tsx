import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQ_ITEMS } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section className="section-padding border-t border-charcoal-100 bg-[#faf9f7]" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <div id="faq-heading">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers before you reach out — we're happy to go deeper on WhatsApp."
            align="center"
          />
        </div>

        <dl className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-charcoal-100 bg-white p-6"
              itemScope
              itemType="https://schema.org/Question"
            >
              <dt className="font-display text-lg font-semibold text-charcoal-900" itemProp="name">
                {item.question}
              </dt>
              <dd
                className="mt-3 text-sm leading-relaxed text-charcoal-600"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <span itemProp="text">{item.answer}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
