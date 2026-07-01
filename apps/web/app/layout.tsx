import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl("/")),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "SaaS",
    "AI solutions",
    "custom software",
    "digital transformation",
  ],
  authors: [{ name: site.name }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    url: siteUrl("/"),
    siteName: site.name,
    type: "website",
    images: [siteUrl("/og/default.svg")],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [siteUrl("/og/default.svg")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-slate-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-blue-700 focus:shadow-soft"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="relative z-10 overflow-x-hidden">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
