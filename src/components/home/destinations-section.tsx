import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DESTINATIONS } from "@/lib/site-config";

export function DestinationsSection() {
  return (
    <section className="section-padding bg-charcoal-950 text-white" aria-labelledby="destinations-heading">
      <Container>
        <div
          id="destinations-heading"
          className="[&_.text-brand-600]:text-brand-300 [&_h2]:text-white [&_p]:text-white/75"
        >
          <SectionHeading
            eyebrow="Geography anchors"
            title="Nepal trekking regions mapped with precision"
            description="Everest amphitheatre, Annapurna's teahouse lattice, Kathmandu heritage valleys, jungle Terai gateways—tap a pillar to inspect featured departures calibrated with local pacing intelligence."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal-900/40 sm:min-h-[220px]"
            >
              <Image
                src={dest.image}
                alt=""
                aria-hidden
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="card-image-overlay absolute inset-0" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{dest.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/85">{dest.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-200 transition group-hover:text-white">
                  Explore region<span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
