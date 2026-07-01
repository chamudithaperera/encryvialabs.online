import {
  ArrowRight,
  BrainCircuit,
  Database,
  Globe,
  Laptop,
  Lock,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const site = {
  name: "Encryvia Labs",
  tagline: "Secure intelligence for modern digital products.",
  description:
    "Encryvia Labs designs and builds modern websites, software platforms, mobile apps, cloud systems, secure databases, and AI-powered solutions for ambitious businesses.",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const trustBullets = [
  "AI-powered delivery across websites, software, cloud, and security",
  "Engineering-led execution with practical architecture decisions",
  "White-first, premium design system with accessible interactions",
  "Fast, SEO-ready marketing pages and extendable internal tooling",
  "Clear process, visible milestones, and honest communication",
  "Built to support lead generation, hiring, blogging, and dashboards",
];

export const services = [
  {
    slug: "websites",
    title: "Website Design & Development",
    intro: "Conversion-focused sites that feel polished, load fast, and rank well.",
    outcomes: ["Stronger first impressions", "Higher enquiry quality", "Better search visibility"],
    capabilities: [
      "Information architecture",
      "Tailwind component systems",
      "SEO metadata and schema",
      "Performance and accessibility tuning",
    ],
    deliverables: ["Marketing site", "Landing pages", "SEO foundations", "Analytics setup"],
    idealClients: ["Founders", "SMEs", "B2B teams", "Professional services"],
    cta: "Explore website builds",
    icon: Globe,
  },
  {
    slug: "software",
    title: "Custom Software Development",
    intro: "Internal tools and customer-facing platforms built around real workflows.",
    outcomes: ["Less manual work", "Clearer data flows", "Better team productivity"],
    capabilities: ["React frontends", "API design", "Workflow automation", "Role-based access"],
    deliverables: ["Web app", "Admin console", "API services", "Integration layers"],
    idealClients: ["Operations teams", "Startups", "Growing SMEs", "Product owners"],
    cta: "Plan a software build",
    icon: Laptop,
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    intro: "Native-feeling mobile experiences that connect with existing systems.",
    outcomes: ["Better customer access", "Field-team efficiency", "Higher retention"],
    capabilities: ["Cross-platform app architecture", "Offline-first patterns", "Push notifications", "API integration"],
    deliverables: ["iOS app", "Android app", "App store release support", "Maintenance plan"],
    idealClients: ["Consumer brands", "Field operations", "Membership businesses"],
    cta: "Discuss a mobile app",
    icon: Phone,
  },
  {
    slug: "databases",
    title: "Database Design & Engineering",
    intro: "Structured data foundations that stay reliable as your product grows.",
    outcomes: ["Cleaner reporting", "Safer data handling", "Better system scalability"],
    capabilities: ["Schema modelling", "Performance optimisation", "Backup strategy", "Data access policies"],
    deliverables: ["Schema design", "Migration scripts", "Query tuning", "Data documentation"],
    idealClients: ["Product teams", "Operations-heavy businesses", "Data-led founders"],
    cta: "Shape your data layer",
    icon: Database,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    intro: "Deployment workflows and infrastructure that are easier to maintain.",
    outcomes: ["Faster releases", "Lower hosting friction", "More predictable uptime"],
    capabilities: ["CI/CD pipelines", "Environment management", "Container deployment", "Cost controls"],
    deliverables: ["Cloud setup", "Deployment pipeline", "Monitoring", "Runbooks"],
    idealClients: ["SaaS teams", "Agencies", "Internal product groups"],
    cta: "Review your cloud setup",
    icon: ServerCog,
  },
  {
    slug: "security",
    title: "Security & Encryption Solutions",
    intro: "Practical security improvements that fit the product instead of fighting it.",
    outcomes: ["Reduced risk", "Better trust", "Safer customer data handling"],
    capabilities: ["Auth flows", "Secrets management", "Encryption at rest and in transit", "Security reviews"],
    deliverables: ["Security checklist", "Threat review", "Hardening plan", "Encryption patterns"],
    idealClients: ["Regulated industries", "B2B software teams", "Data-sensitive organisations"],
    cta: "Strengthen security",
    icon: ShieldCheck,
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    intro: "Useful AI features and automations that reduce repetitive work and improve decisions.",
    outcomes: ["Faster operations", "Smarter workflows", "More responsive customer experiences"],
    capabilities: ["Prompt-driven workflows", "RAG prototypes", "AI-assisted operations", "Automation design"],
    deliverables: ["AI feature prototype", "Automation flow", "Knowledge assistant", "Integration plan"],
    idealClients: ["Forward-looking SMEs", "Product teams", "Ops leaders", "Founders"],
    cta: "Explore AI delivery",
    icon: BrainCircuit,
  },
  {
    slug: "maintenance-support",
    title: "Maintenance, Support & Optimisation",
    intro: "Ongoing care for websites and software that need reliable performance.",
    outcomes: ["Fewer regressions", "Faster issue resolution", "Continual improvement"],
    capabilities: ["Bug fixes", "Performance tuning", "Content changes", "Release support"],
    deliverables: ["Support retainer", "Monthly reporting", "Priority fixes", "Optimisation backlog"],
    idealClients: ["Teams without in-house engineering", "Busy founders", "SMEs"],
    cta: "Set up support",
    icon: Workflow,
  },
] as const;

export const featuredServices = services.slice(0, 4);

export const caseStudies = [
  {
    slug: "operations-portal",
    title: "Operations portal for a service-led business",
    label: "Representative project",
    industry: "Services",
    challenge: "Manual tracking lived across spreadsheets and chat threads.",
    approach:
      "We designed a single web portal with role-based access, workflow tracking, and a lightweight reporting layer.",
    stack: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS"],
    outcome: ["Cut manual status updates by 40%", "Improved visibility across active work", "Reduced handover errors"],
    timeline: "6 weeks",
    summary:
      "A representative build showing how Encryvia Labs combines product thinking, clean interfaces, and operational discipline.",
  },
  {
    slug: "secure-client-onboarding",
    title: "Secure onboarding flow for a B2B platform",
    label: "Representative project",
    industry: "B2B software",
    challenge: "Customer onboarding needed to be clearer, safer, and easier to support.",
    approach:
      "We mapped the onboarding journey, added validation and audit-friendly steps, and simplified the admin experience.",
    stack: ["React", "Node.js", "PostgreSQL", "Zod"],
    outcome: ["Reduced drop-off in the sign-up process", "Simplified support handling", "Improved data quality"],
    timeline: "4 weeks",
    summary:
      "A secure, human-guided flow with a modern UI and practical backend guardrails.",
  },
  {
    slug: "ai-knowledge-assistant",
    title: "Internal knowledge assistant for a founder team",
    label: "Internal concept build",
    industry: "AI automation",
    challenge: "The team needed a faster way to search process notes and project context.",
    approach:
      "We built a small knowledge assistant concept with controlled document ingestion and a clean query interface.",
    stack: ["Next.js", "OpenAI APIs", "Node.js", "Vector search"],
    outcome: ["Shortened context lookup time", "Provided a reusable prototype for future rollout", "Created a clear product direction"],
    timeline: "2 weeks",
    summary:
      "A concept build focused on practical automation rather than flashy demos.",
  },
  {
    slug: "founders-prior-experience",
    title: "Founders’ prior experience in product delivery",
    label: "Founders’ prior experience",
    industry: "Product engineering",
    challenge: "Teams needed a partner who could bridge design, delivery, and operations.",
    approach:
      "Prior work spanned product launches, support tooling, and secure system improvements across mixed technical environments.",
    stack: ["React", "TypeScript", "Cloud platforms", "Database tooling"],
    outcome: ["Better launch readiness", "Clearer handoffs", "More maintainable systems"],
    timeline: "Ongoing",
    summary:
      "Use this card to describe the team’s background once real project details are available.",
  },
] as const;

export const blogPosts = [
  {
    slug: "ai-in-software-development",
    title: "AI in software development: where it helps and where it does not",
    category: "AI",
    excerpt: "A practical guide to using AI for planning, implementation, and support without over-automating the wrong parts.",
    readTime: "6 min read",
    date: "2026-06-15",
  },
  {
    slug: "mobile-app-architecture",
    title: "Mobile app architecture for growing businesses",
    category: "Mobile",
    excerpt: "How to choose a mobile stack that balances speed, maintainability, and future integrations.",
    readTime: "5 min read",
    date: "2026-05-20",
  },
  {
    slug: "secure-database-design",
    title: "Secure database design for customer-facing systems",
    category: "Security",
    excerpt: "A checklist for access control, encryption, backups, and operational safety.",
    readTime: "7 min read",
    date: "2026-04-30",
  },
  {
    slug: "cloud-cost-optimisation",
    title: "Cloud cost optimisation without slowing teams down",
    category: "Cloud",
    excerpt: "Simple infrastructure and deployment decisions that keep costs predictable.",
    readTime: "5 min read",
    date: "2026-04-11",
  },
  {
    slug: "website-performance",
    title: "Website performance: the quiet conversion advantage",
    category: "Web",
    excerpt: "Why fast pages, careful asset handling, and better layouts improve trust and conversion.",
    readTime: "4 min read",
    date: "2026-03-25",
  },
  {
    slug: "automation-for-smes",
    title: "Practical automation ideas for SMEs",
    category: "Automation",
    excerpt: "The best automation projects are small, visible, and tied to one repeated pain point.",
    readTime: "5 min read",
    date: "2026-03-09",
  },
] as const;

export const blogCategories = ["All", "AI", "Mobile", "Security", "Cloud", "Web", "Automation"];

export const faqItems = [
  {
    question: "Do you work with companies that do not have a clear tech stack yet?",
    answer:
      "Yes. We can help define the stack, architecture, and delivery plan first, then implement in phases.",
  },
  {
    question: "Can Encryvia Labs help with AI features even if the product is not AI-first?",
    answer:
      "Absolutely. We add AI where it creates useful time savings, better search, or smarter workflows.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Support, optimisation, and maintenance can be set up as a retainer or a defined monthly scope.",
  },
  {
    question: "Will the site be easy to update later?",
    answer:
      "Yes. The structure uses reusable components and content-driven sections so a developer can extend it later.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We clarify goals, constraints, users, and what success should actually look like.",
  },
  {
    title: "Design",
    description: "We shape the information architecture, flows, and visual system before building.",
  },
  {
    title: "Build",
    description: "We implement the product in small, reviewable slices with practical technical decisions.",
  },
  {
    title: "Launch",
    description: "We validate, deploy, and hand over with documentation, support, and next-step recommendations.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Zod", "REST APIs"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Schema design", "Migrations", "Analytics"],
  },
  {
    title: "Delivery",
    items: ["Vercel", "Netlify", "CI/CD", "Monitoring"],
  },
];

export const careers = [
  {
    title: "Full-stack engineer",
    type: "Remote / Hybrid",
    description: "Build polished product and marketing experiences with an engineering-first mindset.",
  },
  {
    title: "Product designer",
    type: "Remote / Hybrid",
    description: "Shape clean interfaces, content hierarchy, and systems that feel premium and usable.",
  },
  {
    title: "AI / automation specialist",
    type: "Flexible",
    description: "Design practical AI-enabled workflows and internal tools that save time.",
  },
  {
    title: "DevOps / cloud engineer",
    type: "Flexible",
    description: "Improve deployment, reliability, and observability without adding unnecessary complexity.",
  },
];

export const values = [
  "Curiosity over assumptions",
  "Ownership over hand-offs",
  "Design sense and technical discipline",
  "AI-assisted, human-guided execution",
  "Secure, maintainable, and clear delivery",
];

export const serviceCta = {
  title: "Need a partner for a website, product, or AI-assisted workflow?",
  description: "Book a discovery call and we’ll map the most practical path forward.",
  action: "Book a discovery call",
};

export const icons = {
  arrow: ArrowRight,
  sparkles: Sparkles,
  lock: Lock,
};
