import { processSteps } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Delivery process"
          title="A simple process that keeps momentum and avoids surprises."
          description="We keep the work visible and reviewable so the end result is easy to trust and easy to hand over."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <GlassCard key={step.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
