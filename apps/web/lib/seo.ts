import type { Metadata } from "next";
import { siteUrl } from "./utils";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = siteUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Encryvia Labs",
      type: "website",
      images: [
        {
          url: siteUrl("/og/default.svg"),
          width: 1200,
          height: 630,
          alt: "Encryvia Labs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteUrl("/og/default.svg")],
    },
  };
}
