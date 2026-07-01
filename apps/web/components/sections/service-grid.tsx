import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServiceGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Everything Encryvia Labs builds, organised as a clear system."
          description="The site intentionally covers websites, software, mobile apps, databases, cloud, security, and AI so visitors can understand the full delivery range quickly."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard key={service.slug} className={index === 0 ? "xl:col-span-2" : ""}>
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-brand-100 bg-brand-50 p-3 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border bg-white px-3 py-1 text-xs text-slate-500">
                      {service.slug.replaceAll("-", " ")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.intro}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {service.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button href={`/services/${service.slug}`} variant="outline" className="text-xs">
                      View details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
