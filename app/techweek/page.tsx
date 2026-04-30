import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const pageTheme = {
  "--background": "var(--background)",
  "--foreground": "var(--foreground)",
  "--accent": "var(--accent)",
  "--muted": "var(--muted)",
  "--border": "var(--border)",
  "--text-muted": "var(--text-muted)",
} as CSSProperties;

const socialImage = {
  url: "https://christchurch-ai.com/images/epic-ai-conference/chchai-tw26-bg.png",
  alt: "Christchurch AI TechWeek 2026",
};

const events = [
  {
    slug: "openclaw-office-hours",
    title: "OpenClaw Open Office Hours",
    href: "https://www.meetup.com/christchurch-ai/events/314520648/",
    buttonLabel: "RSVP on Meetup",
    image: "/images/techweek/openclaw-office-hours.jpg",
    date: "Monday 18 May 2026",
    time: "8:00–9:00am",
    venue: "Online",
    kicker: "TechWeek kickoff",
    description:
      "A one-hour open session for people who want to see what OpenClaw can do, compare notes with other users, and ask practical questions about keeping an autonomous AI assistant useful, secure, and online.",
    details:
      "Caelan opens up the weekly AI Coaching Academy office hours for TechWeek so Claw-curious builders, consultants, and operators can learn best practices, see real projects and prompts, and trade ideas with other OpenClaw users.",
  },
  {
    slug: "managing-ai-agents",
    title: "Managing AI Agents: The Next High-Value Skill Set",
    href: "https://events.humanitix.com/managing-ai-agents-tw26",
    buttonLabel: "RSVP",
    image: "/images/techweek/managing-ai-agents.jpg",
    date: "Monday 18 May 2026",
    time: "4:30–5:30pm",
    venue: "Online",
    kicker: "TechWeek presentation",
    description:
      "AI agents are changing the way work gets done, and the new advantage is not just using the tools — it is knowing how to scope, manage, monitor, and improve autonomous systems well.",
    details:
      "This intermediate-level session is for proficient AI operators, team leaders, and decision-makers who want to understand agentic workflows, useful agent projects, context engineering, performance evaluation, and the practical toolsets emerging around AI automation.",
  },
  {
    slug: "ai-governance",
    title: "AI Governance & The Future of Work in New Zealand",
    href: "https://events.humanitix.com/ai-governance-tw26",
    buttonLabel: "RSVP",
    image: "/images/techweek/ai-governance.jpg",
    date: "Wednesday 20 May 2026",
    time: "10:00–11:00am",
    venue: "Online",
    kicker: "Leadership session",
    description:
      "AI is already in the room. This session is for directors, executives, and decision-makers who need clearer frameworks for leading AI adoption without letting governance lag behind the pace of deployment.",
    details:
      "Caelan explores the tensions shaping the next decade in Aotearoa — innovation and oversight, speed and safety, productivity and purpose — then gives leaders practical ways to identify governance gaps, define boundaries, and structure decision-making around AI.",
  },
  {
    slug: "epic-am",
    title: "EPIC AI Conference — AM Workshops",
    href: "https://events.humanitix.com/epic-ai-conference-am",
    buttonLabel: "RSVP",
    image: "/images/epic-ai-conference/epic-ai-am.png",
    date: "Thursday 21 May 2026",
    time: "9:00–11:45am",
    venue: "EPIC Innovation, Christchurch",
    kicker: "Conference morning",
    description:
      "A fast, hands-on morning of practical AI workshops covering communication, meeting intelligence, workflow design, nonprofit impact, and creative AI.",
    details:
      "The opening conference block is built for people who want to experiment, not just listen. It brings together local and international practitioners for compact, high-value sessions that help attendees discover where AI fits into real work and how to use it more effectively.",
  },
  {
    slug: "coffee-and-jam",
    title: "Ministry of Awesome: Coffee & Jam #371",
    href: "https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371",
    buttonLabel: "RSVP",
    image: "/images/techweek/coffee-and-jam.jpg",
    date: "Thursday 21 May 2026",
    time: "12:00–1:15pm",
    venue: "EPIC Christchurch",
    kicker: "Founder lunchtime session",
    description:
      "Christchurch’s longest-running founder meetup drops right into the middle of TechWeek day — a relaxed lunchtime session for entrepreneurs, ecosystem builders, and startup people to connect, learn, and cross-pollinate ideas.",
    details:
      "With light refreshments and a founder-focused lineup, Coffee & Jam bridges the morning conference workshops and the afternoon speaker block, widening the day from AI tooling into the broader innovation community around EPIC.",
  },
  {
    slug: "epic-pm",
    title: "EPIC AI Conference — PM Presentations",
    href: "https://events.humanitix.com/epic-ai-conference-pm",
    buttonLabel: "RSVP",
    image: "/images/epic-ai-conference/epic-ai-pm.png",
    date: "Thursday 21 May 2026",
    time: "1:30–5:00pm",
    venue: "EPIC Innovation, Christchurch",
    kicker: "Conference afternoon",
    description:
      "The afternoon programme moves from experimentation into implementation, risk, infrastructure, and strategy — grounded talks from people working where AI hits the real world.",
    details:
      "Attendees hear perspectives on operational excellence, AI safety, privacy-preserving systems, and the larger future AI may unlock, with a Christchurch AI framing that keeps the ideas practical, local, and relevant.",
  },
  {
    slug: "epic-panel",
    title: "EPIC AI Conference — Evening Panel",
    href: "https://events.humanitix.com/epic-ai-conference-panel",
    buttonLabel: "RSVP",
    image: "/images/epic-ai-conference/epic-ai-panel.png",
    date: "Thursday 21 May 2026",
    time: "5:30–7:00pm",
    venue: "EPIC Innovation, Christchurch",
    kicker: "Conference close",
    description:
      "The day closes with a wider conversation about leadership, responsibility, trust, and change — the human questions that determine how AI actually lands inside teams and institutions.",
    details:
      "After a full day of workshops and presentations, the panel creates space for founders, operators, and leaders to reflect on what trustworthy adoption requires when AI stops being a curiosity and becomes part of how organisations work.",
  },
  {
    slug: "ai-coaching-power-hour",
    title: "AI Coaching Power Hour",
    href: "https://events.humanitix.com/ai-coaching-power-hour-tw26",
    buttonLabel: "RSVP",
    image: "/images/techweek/ai-coaching-power-hour.jpg",
    date: "Friday 22 May 2026",
    time: "10:00–11:00am",
    venue: "Online",
    kicker: "Interactive coaching session",
    description:
      "A facilitated hour blending coaching frameworks, human reflection, and AI conversation to create clarity, confidence, and momentum.",
    details:
      "Participants work through a structured live session: group check-in, solo time with an AI coach, debrief, breakout conversations, commitments, and Q&A. It is designed for people who want a practical experience of AI as a thinking partner rather than another passive demo.",
  },
  {
    slug: "ai-roadmap-workshop",
    title: "AI Roadmap Workshop",
    href: "https://events.humanitix.com/ai-roadmap-workshop-0526",
    buttonLabel: "RSVP",
    image: "/images/techweek/ai-roadmap-workshop.jpg",
    date: "Saturday 23 May 2026",
    time: "10:00am–12:00pm",
    venue: "EPIC Innovation, Christchurch",
    kicker: "Hands-on strategy workshop",
    description:
      "A two-hour working session that helps professionals turn AI curiosity into a practical implementation plan by mapping workflows, spotting leverage points, and prioritising useful experiments.",
    details:
      "Instead of another abstract overview, attendees leave with a short list of relevant use cases, a simple experimentation roadmap, prompt templates, and a clearer sense of where AI genuinely creates value in their role or organisation.",
  },
] as const;

const leadInEvents = events.slice(0, 3);
const thursdayEvents = events.slice(3, 7);
const closingEvents = events.slice(7);

export const metadata: Metadata = {
  title: "TechWeek Christchurch 2026 | Christchurch TechWeek Events",
  description:
    "Browse TechWeek Christchurch events in one place, including Christchurch AI online sessions, the EPIC AI Conference day, Coffee & Jam, and practical AI workshops across Ōtautahi.",
  keywords: [
    "techweek christchurch",
    "techweek events in christchurch",
    "christchurch techweek events",
    "christchurch ai techweek",
    "christchurch tech events may 2026",
    "epic ai conference christchurch",
    "ai events christchurch",
    "techweek nz christchurch",
  ],
  alternates: { canonical: "https://christchurch-ai.com/techweek" },
  openGraph: {
    title: "TechWeek Christchurch 2026 | Christchurch AI Events",
    description:
      "A guide to TechWeek Christchurch events from Christchurch AI, including online sessions, the EPIC AI Conference programme, and closing workshops in Ōtautahi.",
    url: "https://christchurch-ai.com/techweek",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechWeek Christchurch 2026 | Christchurch AI Events",
    description:
      "TechWeek events in Christchurch, with AI sessions, EPIC conference details, dates, venues, and RSVP links in one place.",
    images: [socialImage.url],
  },
};

const eventSchema = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  description: `${event.description} ${event.details}`,
  startDate:
    event.slug === "openclaw-office-hours"
      ? "2026-05-18T08:00:00+12:00"
      : event.slug === "managing-ai-agents"
        ? "2026-05-18T16:30:00+12:00"
        : event.slug === "ai-governance"
          ? "2026-05-20T10:00:00+12:00"
          : event.slug === "epic-am"
            ? "2026-05-21T09:00:00+12:00"
            : event.slug === "coffee-and-jam"
              ? "2026-05-21T12:00:00+12:00"
              : event.slug === "epic-pm"
                ? "2026-05-21T13:30:00+12:00"
                : event.slug === "epic-panel"
                  ? "2026-05-21T17:30:00+12:00"
                  : event.slug === "ai-coaching-power-hour"
                    ? "2026-05-22T10:00:00+12:00"
                    : "2026-05-23T10:00:00+12:00",
  endDate:
    event.slug === "openclaw-office-hours"
      ? "2026-05-18T09:00:00+12:00"
      : event.slug === "managing-ai-agents"
        ? "2026-05-18T17:30:00+12:00"
        : event.slug === "ai-governance"
          ? "2026-05-20T11:00:00+12:00"
          : event.slug === "epic-am"
            ? "2026-05-21T11:45:00+12:00"
            : event.slug === "coffee-and-jam"
              ? "2026-05-21T13:15:00+12:00"
              : event.slug === "epic-pm"
                ? "2026-05-21T17:00:00+12:00"
                : event.slug === "epic-panel"
                  ? "2026-05-21T19:00:00+12:00"
                  : event.slug === "ai-coaching-power-hour"
                    ? "2026-05-22T11:00:00+12:00"
                    : "2026-05-23T12:00:00+12:00",
  eventAttendanceMode: event.venue === "Online" ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: `https://christchurch-ai.com${event.image}`,
  location:
    event.venue === "Online"
      ? { "@type": "VirtualLocation", url: event.href }
      : {
          "@type": "Place",
          name: event.venue,
          address: {
            "@type": "PostalAddress",
            streetAddress: "100 Manchester Street",
            addressLocality: "Christchurch",
            addressRegion: "Canterbury",
            addressCountry: "NZ",
          },
        },
  organizer: {
    "@type": "Organization",
    name: event.slug === "coffee-and-jam" ? "Ministry of Awesome" : "Christchurch AI",
    url: event.slug === "coffee-and-jam" ? "https://ministryofawesome.com/" : "https://christchurch-ai.com",
  },
  url: event.href,
}));

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TechWeek Christchurch 2026 | Christchurch AI",
  description:
    "A Christchurch AI landing page for TechWeek Christchurch 2026, covering online events, the EPIC AI Conference day, and practical workshops in Ōtautahi.",
  url: "https://christchurch-ai.com/techweek",
  publisher: {
    "@type": "Organization",
    name: "Christchurch AI",
    url: "https://christchurch-ai.com",
  },
};

function EventSection({
  event,
  reverse,
  background,
  withTopBorder = true,
  className = "px-6 py-14 md:py-18",
}: {
  event: (typeof events)[number];
  reverse?: boolean;
  background?: string;
  withTopBorder?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`${className} ${withTopBorder ? "border-t" : ""}`.trim()}
      style={{ borderColor: "var(--border)", background: background ?? (reverse ? "var(--muted)" : "var(--background)") }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid gap-8 lg:gap-10 items-center ${reverse ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] mb-3" style={{ color: "var(--accent)" }}>
              {event.kicker}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004aad" }}>
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              {[event.date, event.time, event.venue].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border"
                  style={{ borderColor: "var(--border)", background: "var(--background)", color: "var(--foreground)" }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "var(--text-muted)" }}>
              <p>{event.description}</p>
              <p>{event.details}</p>
            </div>
            <div className="mt-8">
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
                style={{ background: "#004aad", color: "#ffffff" }}
              >
                {event.buttonLabel} →
              </a>
            </div>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl border" style={{ borderColor: "var(--border)" }}>
              <Image
                src={event.image}
                alt={event.title}
                fill
                quality={95}
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 45vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TechWeekPage() {
  return (
    <div className="min-h-screen" style={pageTheme}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <SiteHeader />

      <main>
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ borderColor: "var(--border)", color: "var(--accent)", background: "var(--background)" }}
              >
                Christchurch AI · TechWeek26 · 18–23 May
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Christchurch AI
                <br />
                TechWeek events
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "var(--foreground)" }}>
                Looking for TechWeek Christchurch events? This page brings together the full Christchurch AI programme — from online sessions on OpenClaw, agent management, governance, and coaching through to the EPIC AI Conference day and the closing AI Roadmap Workshop.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: "var(--foreground)" }}>
                It is designed as a practical guide to TechWeek events in Christchurch, following the week in chronological order so people can scan the programme, compare formats, and jump straight to the RSVP link that fits them.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "9", label: "TechWeek Christchurch events across one Christchurch AI programme" },
                  { stat: "4", label: "EPIC conference sessions grouped into one Thursday Christchurch event day" },
                  { stat: "2", label: "online workshops and strategy sessions after the conference day" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                    <div className="text-3xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                      {item.stat}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border p-6 md:p-7 lg:sticky lg:top-24" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                TechWeekNZ
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>One week, multiple ways in</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>Some sessions are built for leaders. Some are for hands-on practitioners. Some are simply for curious people who want a better room to think in.</p>
                <p>The through-line across these TechWeek events in Christchurch is practical capability: better operators, better questions, stronger communities, and a clearer sense of how AI belongs in real work.</p>
                <p>If you want the flagship in-person day, start with the EPIC AI Conference on Thursday. If you want focused online sessions or a practical workshop, the rest of the Christchurch TechWeek programme has those covered too.</p>
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <a
                  href="https://christchurch-ai.com/epic-ai-conference"
                  className="light-mode-accent-link inline-block px-6 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
                  style={{ background: "var(--accent)", color: "#ffffff" }}
                >
                  View conference page →
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Programme overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#004aad" }}>TechWeek events in Christchurch, mapped out</h2>
            <div className="space-y-4 text-base leading-relaxed max-w-4xl" style={{ color: "var(--text-muted)" }}>
              <p>
                The week starts online with OpenClaw office hours and a session on managing AI agents, moves into governance and leadership, then expands into a full in-person conference day at EPIC with workshops, founder networking, talks, and a closing panel.
              </p>
              <p>
                Friday and Saturday shift back into smaller-format practical sessions: one designed for reflection and coaching, the other for turning AI interest into a concrete roadmap for adoption. If you are searching for Christchurch tech events during TechWeek26, this page is the fastest way to see the full AI-focused run sheet.
              </p>
            </div>
          </div>
        </section>

        {leadInEvents.map((event, index) => (
          <EventSection key={event.slug} event={event} reverse={index % 2 === 1} />
        ))}

        <section className="px-6 py-16 border-t" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
          <div
            className="max-w-6xl mx-auto rounded-[2rem] border overflow-hidden"
            style={{
              borderColor: "var(--border)",
              background: "color-mix(in srgb, var(--muted) 84%, var(--accent) 16%)",
            }}
          >
            <div className="px-6 md:px-8 py-8 md:py-10 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Thursday 21 May · EPIC conference day
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004aad" }}>
                One in-person TechWeek Christchurch event, four connected sessions
              </h2>
              <div className="space-y-4 text-base leading-relaxed max-w-4xl" style={{ color: "var(--text-muted)" }}>
                <p>
                  These four Thursday sessions work best as one continuous Christchurch TechWeek experience at EPIC: practical workshops in the morning, founder networking over lunch, implementation-focused presentations in the afternoon, and a closing panel on leadership and trust.
                </p>
                <p>
                  If you are prioritising one flagship day among TechWeek events in Christchurch, this is it.
                </p>
              </div>
            </div>

            {thursdayEvents.map((event, index) => (
              <EventSection
                key={event.slug}
                event={event}
                reverse={index % 2 === 1}
                background="transparent"
                withTopBorder={index !== 0}
                className="px-6 md:px-8 py-12 md:py-14"
              />
            ))}
          </div>
        </section>

        {closingEvents.map((event, index) => (
          <EventSection key={event.slug} event={event} reverse={index % 2 === 0} />
        ))}
      </main>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--background)" }}>
        <div>
          <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">
            Christchurch AI
          </Link>{" "}
          · TechWeek26 programme guide for Christchurch, New Zealand
        </div>
        <div className="mt-2">
          Website design vibecoded by <a href="https://caelanhuntress.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="font-semibold">Caelan Huntress</a> and his <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="font-semibold">OpenClaw</a>
        </div>
      </footer>
    </div>
  );
}
