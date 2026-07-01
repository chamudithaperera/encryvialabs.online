import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} | Services`,
    description: service.intro,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <section className="bg-panel py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Service detail</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{service.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{service.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-3 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business outcomes</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ideal clients</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.idealClients.map((client) => (
                <span key={client} className="rounded-full border border-border bg-white px-3 py-2 text-sm text-slate-600">
                  {client}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Deliverables</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Capabilities</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Start here</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">Need this service packaged around a real business goal?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We can turn the service into a phased plan, a proposal, or a scoped project brief before implementation starts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">
                Request a proposal <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/case-studies" variant="outline">
                View examples
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
