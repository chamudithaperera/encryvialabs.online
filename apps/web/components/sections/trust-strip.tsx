import { trustBullets } from "@/lib/site-data";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-white via-brand-50/20 to-white">
      <div className="container grid gap-3 py-6 md:grid-cols-2 xl:grid-cols-3">
        {trustBullets.map((bullet) => (
          <div key={bullet} className="rounded-2xl bg-panel px-4 py-4 text-sm text-slate-600">
            {bullet}
          </div>
        ))}
      </div>
    </section>
  );
}
