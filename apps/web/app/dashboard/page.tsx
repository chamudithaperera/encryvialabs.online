import { pageMetadata } from "@/lib/seo";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata = pageMetadata({
  title: "Dashboard | Encryvia Labs",
  description: "Authenticated dashboard shell for leads, proposals, projects, blog drafts, and analytics.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return <DashboardShell />;
}
