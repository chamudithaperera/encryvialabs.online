import { pageMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/home-page";

export const metadata = pageMetadata({
  title: "Encryvia Labs | Secure intelligence for modern digital products",
  description:
    "AI-powered websites, software, mobile apps, cloud systems, databases, and security solutions built with a premium white-first design system.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
