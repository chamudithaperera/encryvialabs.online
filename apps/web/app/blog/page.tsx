import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { blogPosts, blogCategories } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = pageMetadata({
  title: "Blog | Encryvia Labs",
  description: "SEO-friendly blog listing with sample posts for AI, software, cloud, security, and performance.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="A future resource hub for technical insight and SEO."
          description="The categories and article topics are set up so the site can grow into a useful publishing system."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <span key={category} className="rounded-full border border-border bg-panel px-4 py-2 text-sm text-slate-600">
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <GlassCard key={post.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {post.category} • {post.readTime}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6">
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-brand-700">
                  Read more
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
