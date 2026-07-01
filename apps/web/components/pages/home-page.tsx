import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  Mail,
  MapPin,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroStats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "5+", label: "Years" },
  { value: "99%", label: "Satisfaction" },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for optimal performance.",
    color: "from-blue-500 to-blue-600",
    features: ["Custom Websites", "Web Apps", "E-commerce", "APIs"],
  },
  {
    icon: Phone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless experiences.",
    color: "from-cyan-500 to-teal-500",
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "Maintenance"],
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "Scalable cloud-based software solutions that grow with your business.",
    color: "from-teal-500 to-emerald-500",
    features: ["Cloud Architecture", "Multi-tenancy", "Subscriptions", "Analytics"],
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description: "Intelligent systems powered by machine learning and AI automation.",
    color: "from-violet-500 to-purple-500",
    features: ["Machine Learning", "NLP", "Computer Vision", "Automation"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with users in mind.",
    color: "from-pink-500 to-rose-500",
    features: ["User Research", "Interface Design", "Prototyping", "Design Systems"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored software solutions engineered for your unique challenges.",
    color: "from-orange-500 to-amber-500",
    features: ["Business Logic", "Integrations", "Modernization", "Support"],
  },
];

const aboutFeatures = [
  { icon: CheckCircle2, title: "Performance First", desc: "Optimized for speed" },
  { icon: ShieldCheck, title: "Security Driven", desc: "Built with security in mind" },
  { icon: Users, title: "User Focused", desc: "Exceptional experiences" },
  { icon: Sparkles, title: "Future Ready", desc: "Cutting-edge technology" },
];

const aboutStats = [
  { value: "50+", label: "Projects Completed", gradient: "from-blue-500 to-cyan-500" },
  { value: "30+", label: "Happy Clients", gradient: "from-cyan-500 to-teal-500" },
  { value: "5+", label: "Years Experience", gradient: "from-teal-500 to-emerald-500" },
  { value: "99%", label: "Client Satisfaction", gradient: "from-blue-400 to-violet-500" },
];

const differenceCards = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile methodology and experienced teams for faster time-to-market.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Security-first approach with best practices at every layer.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Rigorous testing for reliable, maintainable products.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "International development standards for world-class results.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced professionals fully invested in your success.",
  },
  {
    icon: Workflow,
    title: "Continuous Support",
    description: "Post-launch support and maintenance for optimal performance.",
  },
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@encryvialabs.online", gradient: "from-blue-500 to-cyan-500" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", gradient: "from-cyan-500 to-teal-500" },
  { icon: MapPin, label: "Location", value: "Remote-First, Worldwide", gradient: "from-teal-500 to-emerald-500" },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
];

type Tone = "blue" | "cyan" | "teal" | "purple";

const eyebrowStyles: Record<Tone, string> = {
  blue: "border-blue-100 bg-blue-50 text-blue-600",
  cyan: "border-cyan-100 bg-cyan-50 text-cyan-600",
  teal: "border-teal-100 bg-teal-50 text-teal-600",
  purple: "border-purple-100 bg-purple-50 text-purple-600",
};

const accentStyles: Record<Tone, string> = {
  blue: "from-blue-600 to-cyan-600",
  cyan: "from-cyan-600 to-teal-600",
  teal: "from-teal-500 to-emerald-500",
  purple: "from-blue-600 to-purple-600",
};

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
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent: string;
  description: string;
  tone?: Tone;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-20 max-w-3xl text-center" : "mb-20 max-w-3xl"}>
      <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${centered ? "mx-auto" : ""} ${eyebrowStyles[tone]}`}>
        <Icon className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {title}
        <span className={`mt-2 block bg-gradient-to-r ${accentStyles[tone]} bg-clip-text text-transparent`}>
          {accent}
        </span>
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
        </div>

        <div className="container relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/80 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <div className="px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-600 animate-fade-up">
                  <Sparkles className="h-4 w-4" />
                  Your Trusted Digital Product Partner
                </div>

                <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="block">We build</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    innovative
                  </span>
                  <span className="block">digital solutions</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 animate-fade-up delay-100 sm:text-lg">
                  From custom software and mobile apps to AI-powered platforms, we help businesses grow with cutting-edge technology that drives real, measurable results.
                </p>

                <div className="mt-8 flex flex-col gap-4 animate-fade-up delay-200 sm:flex-row">
                  <Button href="/#contact" className="w-full sm:w-auto">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/#services" variant="outline" className="w-full sm:w-auto">
                    <span>Explore Services</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
                      <ArrowUpRight className="h-3 w-3 text-cyan-600" />
                    </span>
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-up delay-300">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 shadow-soft">
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
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
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Fast Delivery</div>
                    <div className="text-[10px] text-slate-400">Agile & Reliable</div>
                  </div>
                </div>

                <div className="relative mx-auto max-w-md">
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/20">
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
                        <span className="text-emerald-400 font-semibold">ready for launch</span>
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
                  </div>

                  <div className="absolute -top-4 -left-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg shadow-blue-500/10">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Signal</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Premium surfaces, clean motion, and focused execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group h-full rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift"
                >
                  <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-90 transition-opacity group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
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
                description="Encryvia Labs is a modern technology company providing innovative digital solutions for businesses of all sizes. We specialize in building high-quality websites, custom software systems, mobile applications, SaaS platforms, and AI-powered solutions."
                tone="cyan"
                centered={false}
              />
              <p className="-mt-10 text-lg leading-relaxed text-slate-500">
                Our focus is on creating clean, modern, secure, and scalable digital products using the latest technologies. From business websites and web applications to mobile apps, cloud-based systems, APIs, automation tools, and UI/UX design, we deliver complete end-to-end technology solutions tailored to each client&apos;s needs.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {aboutFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group flex items-start gap-4">
                      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutStats.map((stat, index) => (
                <div key={stat.label} className={`rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft animate-fade-up ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}>
                  <div className={`mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-5xl font-bold text-transparent sm:text-6xl`}>
                    {stat.value}
                  </div>
                  <p className="font-medium text-slate-600">{stat.label}</p>
                </div>
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
            description="We combine technical excellence with business understanding to deliver solutions that truly make an impact."
            tone="teal"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differenceCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-sm transition-all group-hover:border-teal-200 group-hover:shadow-teal-500/10">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-10 shadow-[0_30px_80px_rgba(6,182,212,0.18)] lg:p-16">
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
                <Button href="/#contact" className="bg-white text-blue-600 shadow-2xl shadow-white/20 hover:bg-white/95">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
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
                description="Ready to transform your ideas into powerful digital products? Reach out and let's discuss your project."
                tone="purple"
                centered={false}
              />

              <div className="space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="group flex items-center gap-5">
                      <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
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

            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-2xl shadow-blue-500/5 lg:p-10">
              <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
