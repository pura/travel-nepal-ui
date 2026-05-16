import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEAM } from "@/lib/site-config";

export function TeamSection() {
  return (
    <section className="section-padding bg-[#faf9f7]" aria-labelledby="team-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={TEAM.founder.image}
              alt={TEAM.founder.name}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <div id="team-heading">
              <SectionHeading
                eyebrow="Meet your guides"
                title="Real people, real expertise"
                description="You're not booking a faceless platform — you're traveling with a Kathmandu-based team that lives and breathes Nepal."
              />
            </div>
            <div className="mt-8 rounded-2xl border border-charcoal-100 bg-white p-6">
              <p className="text-sm font-semibold text-brand-700">{TEAM.founder.role}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-charcoal-900">
                {TEAM.founder.name}
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal-600">{TEAM.founder.bio}</p>
            </div>
            <ul className="mt-6 space-y-3">
              {TEAM.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
