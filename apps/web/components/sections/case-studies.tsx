import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  return (
    <section className="bg-panel py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Featured case studies"
          title="Representative projects that show the shape of the work."
          description="No fake logos, no invented enterprise claims. These examples are clearly labelled so the site stays honest while still demonstrating capability."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.slice(0, 3).map((study) => (
            <GlassCard key={study.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{study.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Industry</dt>
                  <dd className="mt-2 text-sm text-ink">{study.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Timeline</dt>
                  <dd className="mt-2 text-sm text-ink">{study.timeline}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Outcome</dt>
                  <dd className="mt-2 text-sm text-ink">{study.outcome[0]}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button href={`/case-studies/${study.slug}`} variant="outline">
                  View case study <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
