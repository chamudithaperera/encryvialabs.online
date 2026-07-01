import { stackGroups } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStackGrid() {
  return (
    <section className="bg-gradient-to-b from-brand-50/20 to-white py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="A practical stack chosen for maintainability and delivery speed."
          description="The architecture stays simple enough for a small company to own, while still being modern, scalable, and easy to extend."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group) => (
            <GlassCard key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
