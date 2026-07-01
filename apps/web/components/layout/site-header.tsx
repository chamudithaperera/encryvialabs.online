"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site-data";

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
        "sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl transition-all duration-300",
        scrolled ? "shadow-[0_12px_30px_rgba(15,23,42,0.08)]" : "",
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
            EL
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900">{site.name}</span>
            <span className="text-xs text-slate-500">Innovative Digital Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600",
                scrolled ? "text-slate-600" : "",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button href="/#contact">Get Started</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="container animate-fade-in space-y-2 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/#contact" className="w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
