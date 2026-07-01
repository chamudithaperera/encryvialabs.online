import { pageMetadata } from "@/lib/seo";
import { values } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = pageMetadata({
  title: "About | Encryvia Labs",
  description: "Company story, mission, vision, principles, and engineering-first culture.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">About</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">A secure, intelligent brand for modern software work.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Encryvia Labs is positioned as a high-trust engineering partner for businesses that need websites, products, and AI-assisted systems built properly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company story</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The brand is designed to feel like a modern software studio rather than a generic agency. It combines clarity, technical competence, and a calm premium aesthetic.
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why the name fits</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              “Encryvia” suggests encrypted trust and secure movement; “Labs” signals experimentation, practical delivery, and room to grow into new products.
            </p>
          </GlassCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Mission</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Build secure, intelligent digital systems that help businesses move faster with confidence.
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Vision</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Become the small, highly capable partner that teams trust for engineering, design, AI, and delivery discipline.
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Leadership</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Add founder bios, photos, and team structure here once the real leadership lineup is ready.
            </p>
          </GlassCard>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Principles"
            title="Engineering-first culture, guided by humans and accelerated with AI."
            description="We value curiosity, ownership, design sense, technical discipline, and practical judgment."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value) => (
              <GlassCard key={value}>
                <p className="text-sm leading-7 text-slate-600">{value}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
