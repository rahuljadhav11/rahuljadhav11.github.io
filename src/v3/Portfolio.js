import React, { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Database,
  Cloud,
  Cpu,
  Zap,
  TrendingUp,
  Award,
  GraduationCap,
  Download,
  ArrowUpRight,
  Sparkles,
  Code2,
  Server,
  Layers,
  Menu,
  X,
} from "lucide-react";

const PROFILE = {
  name: "Rahul Jadhav",
  title: "Senior Software Engineer",
  focus: "Data Engineering · Distributed Systems · Cloud",
  location: "Pune, India",
  email: "rahul.rj9421@gmail.com",
  phone: "+91 94043 78965",
  linkedin: "https://linkedin.com/in/rahul-jadhav",
  github: "https://github.com/rahuljadhav11",
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  summary:
    "Senior Software Engineer with 8 years of experience architecting scalable SaaS products and data platforms, specializing in Apache Spark, AWS, and large-scale ETL/streaming pipelines. Proven track record of leading complex initiatives from infrastructure migration to real-time analytics. Increasingly focused on applying AI — from GenAI-powered features to agentic systems — to solve real business problems.",
};

const NAV = [
  { id: "impact", label: "Impact" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

const METRICS = [
  {
    value: "$150K",
    label: "Annual savings",
    detail: "AWS EMR migration & Spark tuning",
    icon: TrendingUp,
  },
  {
    value: "100M+",
    label: "Events / day",
    detail: "Real-time streaming pipelines",
    icon: Zap,
  },
  {
    value: "99.9%",
    label: "Uptime",
    detail: "Production streaming platform",
    icon: Server,
  },
  {
    value: "70%",
    label: "Faster ETL",
    detail: "MapReduce → Spark, 8h → 2.4h",
    icon: Cpu,
  },
];

const EXPERIENCE = [
  {
    company: "Blueshift",
    role: "Senior Software Engineer",
    period: "May 2021 — Present",
    location: "Pune, India",
    summary:
      "Own data-platform initiatives end-to-end: infra migration, real-time pipelines, analytics, and an in-house agentic system.",
    bullets: [
      {
        headline: "Migrated data science infra from on-prem Ambari → AWS EMR",
        detail:
          "Tuned EMR and Spark configurations, delivering a 33% cost reduction and $150K in annual savings.",
      },
      {
        headline: "Built a Text-to-SQL agentic system",
        detail:
          "Enabled natural-language querying of structured data — contributed to the company's Agentic Launchpad, including MCP servers and autonomous-agent capabilities.",
      },
      {
        headline: "Architected real-time streaming pipelines at 100M+ events/day",
        detail:
          "Operated at 99.9% uptime, powering personalized recommendations at scale.",
      },
      {
        headline: "Shipped near real-time analytics platform",
        detail:
          "Delivers customer-order, revenue, engagement, and interaction insights to drive business decisions.",
      },
      {
        headline: "Rewrote legacy MapReduce jobs on Apache Spark",
        detail:
          "Achieved 70% faster processing — daily ETL windows dropped from 8 hours to 2.4 hours.",
      },
      {
        headline: "Hardened Kafka & Apache Pulsar transmission pipelines",
        detail:
          "Ensured zero data loss during outages and consistent delivery across systems.",
      },
    ],
    stack: [
      "Apache Spark",
      "AWS EMR",
      "Kafka",
      "Pulsar",
      "Airflow",
      "Python",
      "Scala",
      "Terraform",
    ],
  },
  {
    company: "Josh Software",
    role: "Software Engineer",
    period: "Jun 2018 — May 2021",
    location: "Pune, India",
    summary:
      "Built and optimized a sales-management SaaS product for a media client, from feature work to performance tuning.",
    bullets: [
      {
        headline: "Delivered end-to-end features for a sales-management web app",
        detail:
          "Reduced manual Excel maintenance by 80% and cut daily reporting from 3 hours to 30 minutes.",
      },
      {
        headline: "Performance-tuned the platform",
        detail:
          "Async job processing, database denormalization, query tuning, and Redis caching — big page-load wins.",
      },
      {
        headline: "Designed RESTful APIs powering ad-sales workflows",
        detail:
          "Including seamless integrations with external third-party systems.",
      },
    ],
    stack: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Redis", "REST APIs"],
  },
];

const SKILLS = [
  {
    title: "Data Engineering",
    icon: Database,
    items: [
      "Apache Spark",
      "Kafka",
      "Spark Streaming",
      "Apache Pulsar",
      "AWS Glue",
      "ETL Pipelines",
      "Distributed Systems",
      "Apache Druid",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: ["AWS EMR", "EC2", "S3", "Lambda", "Airflow", "Terraform", "CI/CD"],
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Scala", "Ruby", "SQL", "JavaScript", "REST APIs"],
  },
  {
    title: "Storage",
    icon: Layers,
    items: ["MySQL", "HBase", "Scylla", "Redis"],
  },
];

const EDUCATION = {
  degree: "B.Tech in Information Technology",
  institute: "Walchand College of Engineering",
  period: "Aug 2014 — Jun 2018",
  detail: "CGPA 8.3 / 10",
};

const AWARD = {
  title: "Morpheus Award (Raise the Bar)",
  org: "Blueshift",
  year: "2024",
  detail:
    "Company-wide recognition for successfully delivering the AWS EMR migration and analytics platform — directly contributing to $150K annual savings and improved data-processing capability.",
};

function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-400 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/5 bg-slate-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-slate-950">
            RJ
          </span>
          <span className="text-sm font-medium text-slate-200 group-hover:text-white">
            Rahul Jadhav
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-4 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-40 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at top, rgba(0,0,0,0.9), transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, rgba(0,0,0,0.9), transparent 70%)",
          }}
        />
      </div>

      <Section id="hero" className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Senior / Staff Data Engineering roles
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I'm {PROFILE.name.split(" ")[0]}.
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                I build data platforms
              </span>
              <br />
              that scale.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
              {PROFILE.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-300 transition hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-300 transition hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {PROFILE.location}
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span>{PROFILE.title}</span>
              <span className="h-3 w-px bg-white/10" />
              <span>{PROFILE.focus}</span>
            </div>
          </div>

          {/* profile card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-bold text-slate-950">
                  RJ
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    Senior SWE · Blueshift
                  </p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-slate-400">Experience</dt>
                  <dd className="font-medium text-white">8+ years</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-slate-400">Focus</dt>
                  <dd className="font-medium text-white">Data Platforms</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <dt className="text-slate-400">Stack</dt>
                  <dd className="font-medium text-white">Spark · AWS · Kafka</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-400">Recognition</dt>
                  <dd className="font-medium text-white">Morpheus '24</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Python", "Scala", "Spark", "AWS", "Kafka"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Impact() {
  return (
    <Section id="impact" className="pt-0">
      <SectionHeader
        eyebrow="Impact"
        title="Numbers that shipped to production"
        description="Real outcomes from data-platform work at Blueshift."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              <Icon className="h-5 w-5 text-indigo-300" />
              <p className="mt-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                {m.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white">{m.label}</p>
              <p className="mt-1 text-xs text-slate-400">{m.detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Data-first engineer, product-minded.
          </h2>
        </div>
        <div className="space-y-5 text-base text-slate-300 sm:text-lg">
          <p>
            I've spent the last eight years turning messy, high-volume data into
            product features people rely on — from a real-time engagement
            platform processing{" "}
            <span className="text-white">100M+ events per day</span> to a
            <span className="text-white"> Text-to-SQL agentic system</span> that
            lets teams query structured data in plain English.
          </p>
          <p>
            I love the engineering side of scale — tuning Spark jobs on EMR to
            cut{" "}
            <span className="text-white">$150K/year</span> off compute, cutting
            an 8-hour daily ETL down to under 2.5 hours, and keeping streaming
            infra above 99.9% uptime. But my favourite problems are the ones
            where the platform work opens the door to a new product surface.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Distributed Systems",
              "Streaming",
              "ETL",
              "Agentic AI",
              "Cost Optimization",
              "Observability",
            ].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've built."
        description="Two companies, one thread: platforms that let product teams move faster."
      />
      <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-10">
        {EXPERIENCE.map((exp) => (
          <li key={exp.company} className="relative">
            <span className="absolute -left-[33px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-slate-950 sm:-left-[43px]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400" />
            </span>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 sm:p-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {exp.role}
                    <span className="ml-2 font-normal text-slate-400">
                      @ {exp.company}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{exp.location}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">
                  {exp.period}
                </span>
              </div>
              <p className="mb-6 text-sm text-slate-400 sm:text-base">
                {exp.summary}
              </p>
              <ul className="space-y-3">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
                    <div>
                      <p className="text-sm font-medium text-white sm:text-base">
                        {b.headline}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {b.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Toolbox"
        title="Skills & technologies"
        description="Things I reach for daily, grouped by where they sit in the stack."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 text-indigo-300">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-white">
                  {s.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Recognition() {
  return (
    <Section id="recognition">
      <SectionHeader
        eyebrow="Recognition & Education"
        title="Signals along the way."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] to-cyan-400/[0.05] p-6 sm:p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-slate-950">
              <Award className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
              Award · {AWARD.year}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white">{AWARD.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{AWARD.org}</p>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            {AWARD.detail}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-indigo-300">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
              Education
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white">
            {EDUCATION.degree}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{EDUCATION.institute}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span>{EDUCATION.period}</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="font-medium text-white">{EDUCATION.detail}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
              Let's talk
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Hiring for a data platform role?
            </h2>
            <p className="mt-4 max-w-lg text-base text-slate-300 sm:text-lg">
              Happiest talking about streaming systems, cost-efficient Spark,
              and where LLM agents fit into an internal data stack. Reach out —
              I'll get back within a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">
                  Email
                </dt>
                <dd className="mt-1 font-medium text-white">
                  {PROFILE.email}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1 font-medium text-white">{PROFILE.phone}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">
                  Location
                </dt>
                <dd className="mt-1 font-medium text-white">
                  {PROFILE.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-500">
                  Availability
                </dt>
                <dd className="mt-1 font-medium text-emerald-300">
                  Open to opportunities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with React &
          Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-indigo-500/30">
      <Nav />
      <Hero />
      <Impact />
      <About />
      <Experience />
      <Skills />
      <Recognition />
      <Contact />
      <Footer />
    </div>
  );
}
