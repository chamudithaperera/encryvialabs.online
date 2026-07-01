import Link from "next/link";
import { navLinks, site } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-brand-100 bg-brand-50 text-sm font-semibold text-brand-700">
              EL
            </span>
            <span className="font-semibold text-ink">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            {site.description}
          </p>
          <p className="mt-6 text-sm text-slate-500">
            Based on a white-first, engineering-led system for lead generation, hiring, and future product growth.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navigate</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@encryvialabs.online"}`} className="hover:text-ink">
                hello@encryvialabs.online
              </a>
            </p>
            <p>encryvialabs.online</p>
            <p>White-space friendly, remote-first delivery.</p>
          </div>
          <Link href={siteUrl("/contact")} className="mt-6 inline-flex text-sm font-medium text-brand-700 hover:text-brand-800">
            Talk to Encryvia Labs
          </Link>
        </div>
      </div>
    </footer>
  );
}
