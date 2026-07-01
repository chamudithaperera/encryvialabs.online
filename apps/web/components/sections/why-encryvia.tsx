"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Sparkles, Laptop, Database } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyEncryvia() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section className="bg-panel py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Why Encryvia Labs"
          title="High-trust execution with a calm, modern product feel."
          description="The brand sits where enterprise credibility and startup polish meet: secure by design, AI-aware, and easy to work with."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "AI-powered, but not AI-only", text: "We use AI where it speeds up delivery or improves outcomes, not where it adds noise.", icon: Sparkles },
              { title: "Engineering-led", text: "Architecture and maintainability are considered from day one.", icon: Laptop },
              { title: "Security-aware", text: "Authentication, encryption, and safe defaults are built into the process.", icon: ShieldCheck },
              { title: "Structured around real systems", text: "Services, content, dashboards, and future growth all fit the same design logic.", icon: Database },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title}>
                  <Icon className="h-5 w-5 text-brand-700" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </GlassCard>
              );
            })}
          </div>
          <motion.div style={{ y }} className="relative">
            <GlassCard className="sticky top-28 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-teal-50" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Brand logic</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">Encryvia signals secure intelligence from the first impression.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The name combines encrypted trust with a forward-moving, human-guided approach to digital systems. The site reflects that by pairing a clean white canvas with subtle depth, precision, and calm motion.
                </p>
                <div className="mt-8 grid gap-3">
                  <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Mission</p>
                    <p className="mt-2 text-sm text-ink">Build secure, intelligent digital systems that help businesses move faster with confidence.</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Vision</p>
                    <p className="mt-2 text-sm text-ink">Be the small, highly capable engineering partner businesses trust for web, product, cloud, and AI delivery.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
