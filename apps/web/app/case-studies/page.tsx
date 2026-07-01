import { caseStudies } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Case Studies | Encryvia Labs",
  description: "Representative projects, internal concept builds, and founders’ prior experience presented honestly.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="Proof without invention."
          description="These cards are clearly labelled so the site can demonstrate seriousness without pretending to have fake clients or certifications."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <GlassCard key={study.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{study.label}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{study.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Industry</dt>
                  <dd className="mt-2 text-sm text-ink">{study.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Timeline</dt>
                  <dd className="mt-2 text-sm text-ink">{study.timeline}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</dt>
                  <dd className="mt-2 text-sm text-ink">{study.stack.slice(0, 2).join(", ")}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Link href={`/case-studies/${study.slug}`} className="text-sm font-medium text-brand-700">
                  Open detail page
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
