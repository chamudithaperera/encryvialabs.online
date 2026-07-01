"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-sun-50/10 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="A few practical answers before we start."
          description="The goal is to keep expectations clear, especially for early-stage companies and small teams."
        />
        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const expanded = open === index;
            return (
              <GlassCard key={item.question} className="overflow-hidden p-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                >
                  <span className="text-base font-medium text-ink">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded ? (
                  <div className="border-t border-border px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </div>
                ) : null}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
