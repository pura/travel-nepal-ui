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
            eyebrow="Destinations"
            title="Where will your story begin?"
            description="From Everest's shadow to Pokhara's lakes — explore Nepal's most iconic regions."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {DESTINATIONS.map((dest, i) => (
            <Link
              key={dest.slug}
              href={`/trips?region=${dest.slug}`}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2" : "lg:col-span-1"
              } ${i === 0 ? "aspect-[4/5] min-h-[280px]" : "aspect-[4/5] min-h-[200px]"}`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={i === 0 ? "50vw" : "25vw"}
              />
              <div className="card-image-overlay absolute inset-0" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold">{dest.name}</h3>
                <p className="mt-1 text-sm text-white/80">{dest.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
