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
        "sticky top-0 z-50 border-b border-black/5 transition-all",
        scrolled ? "bg-black/70 text-white backdrop-blur-xl shadow-2xl" : "bg-transparent backdrop-blur-lg",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-black/90 text-sm font-semibold text-white shadow-sm">
            EL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-ink">{site.name}</span>
            <span className="text-xs text-slate-700">AI-powered engineering studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                scrolled
                  ? "text-white/75 hover:bg-white/10 hover:text-white"
                  : "text-slate-700 hover:bg-black/5 hover:text-ink",
              )}
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
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
            scrolled ? "border-white/10 bg-white/10 text-white" : "border-black/10 bg-white/80 text-ink",
          )}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className={cn("border-t px-4 pb-5 lg:hidden", scrolled ? "border-white/10 bg-black/95" : "border-black/10 bg-white/95")}>
          <div className="container flex flex-col gap-2 pt-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  scrolled ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-black/5 hover:text-ink",
                )}
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
