import { MessageCircleMore, Mail, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = pageMetadata({
  title: "Contact | Encryvia Labs",
  description: "Contact form, service selector, budget range, timeline selector, and direct email/WhatsApp-style CTAs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to Encryvia Labs about your next build."
          description="The contact flow is designed to be clear, low-friction, and ready for a real service sales process."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard>
            <ContactForm />
          </GlassCard>
          <div className="grid gap-6">
            <GlassCard>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Direct contact</p>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand-700" />
                  hello@encryvialabs.online
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircleMore className="h-4 w-4 text-brand-700" />
                  WhatsApp-style quick contact can be added here later
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brand-700" />
                  Remote-friendly delivery with meeting-by-appointment support
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Map placeholder</p>
              <div className="mt-4 grid aspect-[4/3] place-items-center rounded-3xl border border-dashed border-border bg-gradient-to-br from-slate-50 to-white text-center">
                <div>
                  <p className="text-sm font-semibold text-ink">Location / service area placeholder</p>
                  <p className="mt-2 text-sm text-slate-500">Replace with an embedded map or office information when available.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
