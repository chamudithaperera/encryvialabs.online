import { BrainCircuit, Bot, Search, Workflow } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function AIDelivery() {
  return (
    <section className="bg-gradient-to-b from-white to-sun-50/10 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="AI-powered delivery"
          title="AI is woven into the delivery model, not isolated in a novelty page."
          description="Useful AI can speed up discovery, content, support, internal ops, and product workflows. We build it with guardrails and a clear business purpose."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: BrainCircuit,
              title: "Discovery and planning",
              text: "Use AI to organise requirements, identify edge cases, and reduce the time spent untangling context.",
            },
            {
              icon: Bot,
              title: "Workflow automation",
              text: "Automate repetitive operational tasks, intake flows, and handoffs with clear triggers and fallbacks.",
            },
            {
              icon: Search,
              title: "Knowledge and search",
              text: "Create better internal search, support discovery, and knowledge assistants with controlled sources.",
            },
            {
              icon: Workflow,
              title: "Product augmentation",
              text: "Add AI features only where they improve the product experience or reduce support burden.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title}>
                <Icon className="h-5 w-5 text-brand-700" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
