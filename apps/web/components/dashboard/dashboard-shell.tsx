"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Menu,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const sections = [
  { label: "Leads", icon: MessageSquareText, value: "12" },
  { label: "Proposals", icon: FileText, value: "5" },
  { label: "Projects", icon: Rocket, value: "8" },
  { label: "Blog drafts", icon: Sparkles, value: "4" },
  { label: "Analytics", icon: BarChart3, value: "92%" },
];

export function DashboardShell() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(window.localStorage.getItem("encryvia-dashboard-demo") === "true");
  }, []);

  if (!authed) {
    return (
      <section className="container py-20">
        <GlassCard className="mx-auto max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Dashboard demo</p>
          <h1 className="mt-4 text-3xl font-semibold text-ink">Protected workspace shell</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This is a starter authenticated area for future leads, proposals, projects, blog drafts, and analytics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() => {
                window.localStorage.setItem("encryvia-dashboard-demo", "true");
                setAuthed(true);
              }}
            >
              Enter demo dashboard
            </Button>
            <Button href="/contact" variant="outline">
              Talk to Encryvia Labs
            </Button>
          </div>
        </GlassCard>
      </section>
    );
  }

  return (
    <section className="bg-panel">
      <div className="container flex min-h-[calc(100vh-5rem)] gap-6 py-6">
        <aside className="hidden w-72 flex-col rounded-[2rem] border border-border bg-white p-5 shadow-soft lg:flex">
          <div className="flex items-center gap-3 border-b border-border pb-5">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">
              EL
            </div>
            <div>
              <p className="font-semibold text-ink">Workspace</p>
              <p className="text-xs text-slate-500">Encryvia Labs</p>
            </div>
          </div>
          <nav className="mt-5 space-y-2">
            {[
              "Overview",
              "Leads",
              "Proposals",
              "Projects",
              "Blog drafts",
              "Analytics",
            ].map((item, index) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition hover:bg-slate-100",
                  index === 0 && "bg-brand-50 text-brand-700",
                )}
              >
                {index === 0 ? <LayoutDashboard className="h-4 w-4" /> : <LifeBuoy className="h-4 w-4" />}
                {item}
              </button>
            ))}
          </nav>
          <div className="mt-auto border-t border-border pt-5">
            <Button variant="outline" className="w-full" onClick={() => window.localStorage.removeItem("encryvia-dashboard-demo")}>
              <LogOut className="h-4 w-4" />
              Reset demo access
            </Button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mb-6 flex items-center justify-between rounded-[2rem] border border-border bg-white px-5 py-4 shadow-soft lg:hidden">
            <div>
              <p className="text-sm font-semibold text-ink">Workspace</p>
              <p className="text-xs text-slate-500">Protected shell</p>
            </div>
            <button className="rounded-full border border-border p-2">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <GlassCard className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-ink">Lead and delivery workspace</h1>
            </div>
            <Button variant="outline" onClick={() => window.localStorage.removeItem("encryvia-dashboard-demo")}>
              <ShieldCheck className="h-4 w-4" />
              Exit demo
            </Button>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <GlassCard key={section.label}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">{section.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-ink">{section.value}</p>
                    </div>
                    <Icon className="h-5 w-5 text-brand-700" />
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <GlassCard>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Activity</p>
              <div className="mt-5 space-y-4">
                {[
                  "New contact form enquiry received",
                  "Proposal updated for a representative project",
                  "Blog draft queued for review",
                  "Security checklist pending confirmation",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white px-4 py-3 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Notes</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>Placeholder auth flow only.</li>
                <li>Useful for future CRM, proposal, and content management integration.</li>
                <li>Built to sit behind proper authentication later.</li>
              </ul>
            </GlassCard>
          </div>
        </main>
      </div>
    </section>
  );
}
