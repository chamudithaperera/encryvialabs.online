import { pageMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/home-page";

export const metadata = pageMetadata({
  title: "Encryvia Labs - Innovative Digital Solutions",
  description:
    "Encryvia Labs - Modern technology solutions for businesses. We build high-quality websites, custom software, mobile apps, SaaS platforms, and AI-powered solutions.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
