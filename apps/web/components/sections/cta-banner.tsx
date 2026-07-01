import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { serviceCta } from "@/lib/site-data";

export function CTABanner() {
  return (
    <section className="bg-panel py-24">
      <div className="container">
        <GlassCard className="relative overflow-hidden px-8 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-sun-50" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {serviceCta.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{serviceCta.description}</p>
            </div>
            <Button href="/contact" className="shrink-0">
              {serviceCta.action} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
