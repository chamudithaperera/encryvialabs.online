import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="bg-panel py-20">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
          {post.category} • {post.readTime}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>

        <div className="mt-12 space-y-6">
          <GlassCard>
            <h2 className="text-2xl font-semibold text-ink">Why this topic matters</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This starter article can be expanded into a full SEO post later. For now it gives the site a credible publishing structure and a clear topic map.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-semibold text-ink">Practical angle</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Each article should stay grounded in engineering decisions, business outcomes, and examples that help readers act on the advice.
            </p>
          </GlassCard>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/blog" variant="outline">
            Back to blog
          </Button>
          <Button href="/contact">Discuss a project</Button>
        </div>
      </div>
    </article>
  );
}
