"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Brain,
  ChevronDown,
  Code2,
  Cloud,
  Cpu,
  Database,
  Github,
  Globe,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Move3d,
  Palette,
  Phone,
  Play,
  Rocket,
  Smartphone,
  Sparkles,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import type { ComponentType, MouseEvent as ReactMouseEvent, ReactNode, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollResult<T extends HTMLElement> = {
  ref: RefObject<T>;
  isVisible: boolean;
};

type SectionTone = "blue" | "cyan" | "teal" | "slate";

const heroStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Supported" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and applications built for speed, clarity, and conversion.",
    highlights: ["Landing pages", "Web apps", "SEO", "Performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-feeling mobile experiences that keep teams and customers connected wherever they are.",
    highlights: ["iOS", "Android", "Cross-platform", "Push"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable architecture and deployment support for reliable products and smoother operations.",
    highlights: ["Infrastructure", "DevOps", "Monitoring", "Automation"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Practical AI integrations and automation that reduce repetitive work and accelerate decisions.",
    highlights: ["Assistants", "RAG", "Workflow AI", "Insights"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean interfaces and thoughtful flows designed to feel polished on every screen size.",
    highlights: ["Research", "Wireframes", "Systems", "Prototypes"],
  },
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored software for unique business problems, from internal tools to customer platforms.",
    highlights: ["Portals", "Dashboards", "Integrations", "Automation"],
  },
];

const aboutFeatures = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Lean builds that feel fast and dependable across devices.",
  },
  {
    icon: Lock,
    title: "Security Driven",
    description: "Thoughtful architecture and practical safeguards from the start.",
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Interfaces shaped around the people who actually use them.",
  },
  {
    icon: Cpu,
    title: "Future Ready",
    description: "Flexible systems built to grow with your business.",
  },
];

const aboutStats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

const differenceCards = [
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description: "We move quickly without sacrificing the quality or clarity of the final product.",
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Security is baked into the product structure instead of patched on later.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Built with modern web practices so the result feels current and durable.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A responsive, collaborative workflow that keeps the project moving forward.",
  },
  {
    icon: Mail,
    title: "Clear Communication",
    description: "Simple updates, practical decisions, and a shared view of progress.",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description: "From planning and launch through iteration and maintenance.",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@encryvialabs.online",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, worldwide",
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
];

function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(threshold = 0.15): ScrollResult<T> {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Card3D({
  children,
  className,
  depth = 16,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
}) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)");

  function handleMove(event: ReactMouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * depth;
    const rotateY = (x - 0.5) * depth;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`);
  }

  function handleLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)");
  }

  return (
    <div
      className={cn("transform-gpu transition-transform duration-200 motion-reduce:transition-none", className)}
      style={{ transform, transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  accent,
  description,
  tone = "blue",
  centered = true,
}: {
  eyebrow: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  accent: string;
  description: string;
  tone?: SectionTone;
  centered?: boolean;
}) {
  const toneStyles: Record<SectionTone, string> = {
    blue: "border-blue-100 bg-blue-50 text-blue-600",
    cyan: "border-cyan-100 bg-cyan-50 text-cyan-600",
    teal: "border-teal-100 bg-teal-50 text-teal-600",
    slate: "border-slate-200 bg-white text-slate-600",
  };

  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", "mb-12 sm:mb-16")}>
      <div className={cn("inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium", centered && "mx-auto", toneStyles[tone])}>
        <Icon className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {title}
        <span className="gradient-text mt-2 block">{accent}</span>
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.25 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const heroGlowStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(37, 99, 235, 0.22), transparent 20%), radial-gradient(circle at 18% 20%, rgba(6, 182, 212, 0.18), transparent 22%), radial-gradient(circle at 84% 14%, rgba(16, 185, 129, 0.12), transparent 20%)`,
  } as const;

  return (
    <>
      <section id="home" className="relative overflow-hidden pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.85),rgba(255,255,255,0.96))]" />
          <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" style={heroGlowStyle} />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
        </div>

        <div className="container relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/80 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
                <AnimatedSection>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-600">
                    <Sparkles className="h-4 w-4" />
                    Your Trusted Digital Product Partner
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={80}>
                  <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="block">We build</span>
                    <span className="gradient-text block">innovative</span>
                    <span className="block">digital solutions</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={160}>
                  <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                    From custom software and mobile apps to AI-powered platforms, we help businesses grow with technology that feels modern, useful, and reliable.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={240}>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button href="/#contact" className="w-full sm:w-auto" onClick={() => scrollToSection("contact")}>
                      <span>Start Your Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="/#services" variant="outline" className="w-full sm:w-auto" onClick={() => scrollToSection("services")}>
                      <span>Explore Services</span>
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <Play className="h-3 w-3 text-cyan-600" />
                      </span>
                    </Button>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={320}>
                  <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {heroStats.map((stat) => (
                      <Card3D key={stat.label} className="h-full">
                        <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 shadow-soft">
                          <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                        </div>
                      </Card3D>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div className="relative border-t border-slate-200/80 bg-[linear-gradient(180deg,rgba(239,246,255,.78),rgba(255,255,255,.92))] px-6 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-14">
                <div className="absolute -right-5 top-12 hidden rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-blue-500/10 md:flex md:items-center md:gap-2 animate-float-slow">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">AI-Powered</div>
                    <div className="text-[10px] text-slate-400">Smart Solutions</div>
                  </div>
                </div>

                <div className="absolute -bottom-5 left-0 hidden rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-lg shadow-cyan-500/10 lg:flex lg:items-center lg:gap-2 animate-float-slow">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Fast Delivery</div>
                    <div className="text-[10px] text-slate-400">Agile & Reliable</div>
                  </div>
                </div>

                <div className="relative mx-auto max-w-md">
                  <Card3D className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/20">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400/80" />
                        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/55">
                        Live Delivery Board
                      </span>
                    </div>

                    <div className="mt-5 space-y-4 font-mono text-[11px] leading-6 text-slate-300">
                      <div className="flex items-start gap-3">
                        <span className="select-none text-slate-500">1</span>
                        <span>
                          <span className="text-cyan-400">project</span>
                          <span className="text-slate-500">.</span>
                          <span className="text-white">launch</span>
                          <span className="text-slate-500">("web", "mobile", "ai")</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="select-none text-slate-500">2</span>
                        <span>
                          <span className="text-cyan-400">design</span>
                          <span className="text-slate-500">.</span>
                          <span className="text-white">system</span>
                          <span className="text-slate-500">("bolt", "responsive", "accessible")</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="select-none text-slate-500">3</span>
                        <span>
                          <span className="text-emerald-400">deploy</span>
                          <span className="text-slate-500">("fast", "secure", "measurable")</span>
                        </span>
                      </div>
                      <div className="flex items-start gap-3 pt-2">
                        <span className="select-none text-slate-500">4</span>
                        <span className="text-slate-400">status: </span>
                        <span className="font-semibold text-emerald-400">ready for launch</span>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Next step</p>
                        <p className="mt-2 text-sm font-semibold text-white">Review the experience</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Priority</p>
                        <p className="mt-2 text-sm font-semibold text-white">Fast delivery</p>
                      </div>
                    </div>
                  </Card3D>

                  <div className="absolute -top-4 -left-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg shadow-blue-500/10">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Signal</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Premium surfaces, clean motion, and focused execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll to services"
            onClick={() => scrollToSection("services")}
            className="mx-auto mt-10 grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-500 shadow-soft transition-all hover:-translate-y-1 hover:text-slate-900"
          >
            <ChevronDown className="h-5 w-5 animate-bounce-slow" />
          </button>
        </div>
      </section>

      <section id="services" className="relative py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            icon={Sparkles}
            title="Complete Digital"
            accent="Solutions"
            description="End-to-end technology solutions tailored to your business needs, from concept to deployment."
            tone="blue"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 70}>
                  <Card3D className="h-full">
                    <div className="group h-full rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-500 hover:border-blue-200 hover:shadow-lift">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <Move3d className="h-5 w-5 text-slate-300 transition-colors group-hover:text-cyan-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-90 transition-opacity group-hover:opacity-100">
                        <span>Learn more</span>
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Card3D>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white to-white" />
        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Us"
                icon={Sparkles}
                title="Building the"
                accent="Future of Digital"
                description="Encryvia Labs is a modern technology company creating high-quality websites, custom software systems, mobile applications, SaaS platforms, and AI-powered solutions."
                tone="cyan"
                centered={false}
              />

              <p className="-mt-6 text-lg leading-8 text-slate-500">
                We focus on clean, secure, and scalable products using the latest practical technologies. From business websites and web applications to cloud-based systems, APIs, automation tools, and UI/UX design, we build the pieces that help teams move faster.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {aboutFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedSection key={item.title}>
                      <div className="group flex items-start gap-4">
                        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-100">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{item.title}</h3>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 90}>
                  <Card3D className="h-full">
                    <div className={cn("rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft", index % 2 === 1 ? "mt-4 sm:mt-8" : "")}>
                      <div className="gradient-text mb-3 text-5xl font-bold text-transparent sm:text-6xl">
                        {stat.value}
                      </div>
                      <p className="font-medium text-slate-600">{stat.label}</p>
                    </div>
                  </Card3D>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            icon={Sparkles}
            title="The Encryvia"
            accent="Difference"
            description="We combine technical excellence with practical business thinking to deliver solutions that genuinely move the needle."
            tone="teal"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differenceCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 60}>
                  <Card3D className="h-full">
                    <div className="group h-full rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-500 hover:border-teal-200 hover:shadow-lift">
                      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-sm transition-all group-hover:border-teal-200 group-hover:shadow-teal-500/10">
                        <Icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </Card3D>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container">
          <Card3D className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-10 shadow-[0_30px_80px_rgba(6,182,212,0.18)] lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to Transform Your Business?</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Let&apos;s discuss your project and explore how we can help you achieve your goals.
              </p>
              <div className="mt-10">
                <Button href="/#contact" variant="outline" className="border-white/20 bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl shadow-white/20 hover:text-blue-700">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24">
        <div className="container relative">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                icon={Sparkles}
                title="Let's Build"
                accent="Something Amazing"
                description="Ready to transform your ideas into powerful digital products? Reach out and let&apos;s discuss your project."
                tone="slate"
                centered={false}
              />

              <div className="space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="group flex items-center gap-5">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.label}</p>
                        <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white transition-all hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-blue-500/30"
                      aria-label={item.label}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            <Card3D className="h-full">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-2xl shadow-blue-500/5 lg:p-10">
                <form
                  className="space-y-6"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-700">Name</span>
                      <input
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="John Doe"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-700">Email</span>
                      <input
                        type="email"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="john@company.com"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Subject</span>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Project Inquiry"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-700">Message</span>
                    <textarea
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Tell us about your project..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </Card3D>
          </div>
        </div>
      </section>
    </>
  );
}
