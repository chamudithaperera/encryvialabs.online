import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.title} | Case Studies`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  return (
    <section className="bg-panel py-20">
      <div className="container max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{study.label}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{study.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{study.summary}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Challenge</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{study.challenge}</p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Approach</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{study.approach}</p>
          </GlassCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Stack</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {study.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Outcome</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {study.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Timeline</p>
            <p className="mt-4 text-sm text-slate-600">{study.timeline}</p>
          </GlassCard>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Request a similar build</Button>
          <Button href="/services" variant="outline">
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
