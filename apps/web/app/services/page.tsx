import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata = pageMetadata({
  title: "Services | Encryvia Labs",
  description: "Website design, software development, mobile apps, databases, cloud, security, AI solutions, and ongoing support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="A practical service catalogue for modern digital products."
          description="The structure is designed to help visitors quickly find the type of work they need and understand the outcomes Encryvia Labs focuses on."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <GlassCard key={service.slug}>
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-brand-100 bg-brand-50 p-3 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Link href={`/services/${service.slug}`} className="text-sm font-medium text-brand-700">
                    Detail page
                  </Link>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.intro}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Outcomes</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      {service.outcomes.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Deliverables</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button href={`/services/${service.slug}`} variant="outline">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
