import { Container } from "@/components/ui/container";
import { AiChatTrigger } from "@/components/ai-chat";
import { InquiryForm } from "@/components/home/inquiry-form";

type PlanTripInquirySectionProps = {
  id?: string;
  prefilledTripType?: string;
  prefilledDuration?: string;
};

export function PlanTripInquirySection({
  id,
  prefilledTripType = "",
  prefilledDuration = "",
}: PlanTripInquirySectionProps) {
  return (
    <section
      {...(id ? { id } : {})}
      className="section-padding relative overflow-hidden bg-brand-900"
      aria-labelledby="plan-trip-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
              Free itinerary request
            </p>
            <h2
              id="plan-trip-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Get a suggested plan back within one working day.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Tell us where you&apos;d like to go (Everest area, Annapurna, Mustang, or a trekking-and-culture mix),
              roughly when, and whether you prefer an easier pace or longer days on the trail. We&apos;ll outline what fits,
              what it might cost, and how our UK desk and Nepal team handle guides, permits, lodges, and transfers. Ask us
              anything — if we&apos;re not right for your trip, we&apos;ll tell you plainly; there&apos;s no pressure to
              book.
            </p>
            <AiChatTrigger
              showIcon
              seedMessage="I'd like trekking advice from Easy Travel Nepal (UK-arranged Nepal operations)."
              autoSend
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-white/20"
            >
              Ask our AI planner
            </AiChatTrigger>
          </div>
          <InquiryForm initialTripType={prefilledTripType} initialDuration={prefilledDuration} />
        </div>
      </Container>
    </section>
  );
}
