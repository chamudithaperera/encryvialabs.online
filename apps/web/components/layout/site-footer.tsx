import Link from "next/link";
import { navLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-white">
              EL
            </span>
            <span className="font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            {site.description}
          </p>
          <p className="mt-6 text-sm text-white/55">Built for lead generation, hiring, and future product growth.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Navigate</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>
              <a href={`mailto:${process.env.CONTACT_TO_EMAIL || "hello@encryvialabs.online"}`} className="hover:text-white">
                hello@encryvialabs.online
              </a>
            </p>
            <p>encryvialabs.online</p>
            <p>White-space friendly, remote-first delivery.</p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-sun-300 hover:text-sun-200">
            Talk to Encryvia Labs
          </Link>
        </div>
      </div>
    </footer>
  );
}
