import { pageMetadata } from "@/lib/seo";
import { careers } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { JobApplicationForm } from "@/components/forms/job-application-form";

export const metadata = pageMetadata({
  title: "Careers | Encryvia Labs",
  description: "Culture, sample roles, and a general application form for future hiring.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <section className="bg-panel py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Careers</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">A small, serious team with room for curious people.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Encryvia Labs values ownership, curiosity, design sense, and engineering discipline. Remote and hybrid-friendly opportunities can be used here as the team grows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {careers.map((role) => (
            <GlassCard key={role.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{role.type}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{role.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{role.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Culture</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>We work with clear briefs and tight feedback loops.</li>
              <li>We prefer calm, high-quality output over noisy process theatre.</li>
              <li>We value people who can think about users, systems, and delivery together.</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">General application</p>
            <div className="mt-4">
              <JobApplicationForm />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
