"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled ? "border-border/80 bg-white/95 backdrop-blur-xl shadow-sm" : "border-transparent bg-white/78 backdrop-blur-lg",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-sun-50 text-sm font-semibold text-brand-800 shadow-sm">
            EL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-ink">{site.name}</span>
            <span className="text-xs text-slate-500">AI-powered engineering studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="outline">
            Request a proposal
          </Button>
          <Button href="/contact">Book a discovery call</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-gradient-to-br from-white to-brand-50 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-4 pb-5 lg:hidden">
          <div className="container flex flex-col gap-2 pt-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <Button href="/contact" variant="outline" className="w-full">
                Request a proposal
              </Button>
              <Button href="/contact" className="w-full">
                Book a discovery call
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
