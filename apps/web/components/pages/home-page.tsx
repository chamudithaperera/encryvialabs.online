import { Hero3D } from "@/components/sections/hero-3d";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServiceGrid } from "@/components/sections/service-grid";
import { WhyEncryvia } from "@/components/sections/why-encryvia";
import { AIDelivery } from "@/components/sections/ai-delivery";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TechStackGrid } from "@/components/sections/tech-stack";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { BlogGrid } from "@/components/sections/blog-grid";

export function HomePage() {
  return (
    <>
      <Hero3D />
      <TrustStrip />
      <ServiceGrid />
      <WhyEncryvia />
      <AIDelivery />
      <CaseStudiesSection />
      <ProcessTimeline />
      <TechStackGrid />
      <FAQAccordion />
      <BlogGrid />
      <CTABanner />
    </>
  );
}
