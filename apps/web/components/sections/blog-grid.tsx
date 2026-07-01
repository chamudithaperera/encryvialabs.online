import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogGrid() {
  return (
    <section className="bg-panel py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="SEO-friendly articles that support research, hiring, and trust."
          description="The blog gives the site a useful resource hub from day one, even before the company has a large library of posts."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <span key={category} className="rounded-full border border-border bg-white px-4 py-2 text-sm text-slate-600">
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <GlassCard key={post.slug} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {post.category} • {post.readTime}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6">
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-brand-700 hover:text-brand-800">
                  Read article
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
