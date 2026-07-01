import Link from "next/link";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

const services = [
  "Web Development",
  "Mobile Apps",
  "Cloud Solutions",
  "AI Solutions",
  "Custom Software",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white/95 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.08),transparent_20%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.06),transparent_24%)]" />
      <div className="container relative py-20">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold text-slate-900">{site.name}</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">{site.description}</p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              {services.map((service) => (
                <span key={service} className="transition-colors hover:text-slate-900">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Encryvia Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <button type="button" className="transition-colors hover:text-slate-900">
              Privacy Policy
            </button>
            <button type="button" className="transition-colors hover:text-slate-900">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
