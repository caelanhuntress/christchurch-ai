import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "June AI Meetup — Agent Management & Engineering Habits | Christchurch AI",
  description: "Christchurch AI meetup June 2026: Caelan Huntress on agent management and Blake Burgess on engineering habits for working with AI agents.",
  keywords: ["Christchurch AI June 2026", "AI agents Christchurch", "Caelan Huntress", "Blake Burgess", "agent management", "AI meetup Christchurch"],
  openGraph: {
    title: "June AI Meetup — Agent Management & Engineering Habits",
    description: "Caelan Huntress and Blake Burgess at Christchurch AI — Monday 8 June 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/june-agent-management-2026.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "June AI Meetup — Agent Management & Engineering Habits",
    description: "Christchurch AI meetup — Caelan Huntress and Blake Burgess, Monday 8 June 2026.",
    images: ["https://christchurch-ai.com/june-agent-management-2026.svg"],
  },
  alternates: { canonical: "https://christchurch-ai.com/agent-management-june-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "June AI Meetup — Agent Management & Engineering Habits",
  description: "Caelan Huntress on agent management as a high-value skill set and Blake Burgess on engineering habits for working with AI agents.",
  startDate: "2026-06-08T17:30:00+12:00",
  endDate: "2026-06-08T20:00:00+12:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  location: {
    "@type": "Place",
    name: "EPIC Innovation Centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "78-100 Manchester St",
      addressLocality: "Christchurch",
      addressRegion: "Canterbury",
      addressCountry: "NZ"
    }
  },
  organizer: {
    "@type": "Organization",
    name: "Christchurch Artificial Intelligence",
    url: "https://christchurch-ai.com"
  },
  performer: [
    { "@type": "Person", name: "Caelan Huntress" },
    { "@type": "Person", name: "Blake Burgess" }
  ],
  url: "https://christchurch-ai.com/agent-management-june-2026"
};

export default function AgentManagementJune2026() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://www.meetup.com/christchurch-ai/events/314554727/" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Home</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup — June 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Agent Management &amp; <br />Engineering Habits
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span><strong className="text-white">Monday 8 June 2026</strong> — 5:30 PM to 8:00 PM NZST</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>
              <strong className="text-white">EPIC Innovation Centre</strong>{" "}
              <a href="https://maps.google.com/?q=EPIC+Innovation+Christchurch" target="_blank" rel="noopener noreferrer"
                className="underline" style={{ color: "var(--accent)" }}>
                78–100 Manchester St, Christchurch
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎟</span>
            <span><strong className="text-white">Free</strong> — RSVP on Meetup</span>
          </div>
        </div>

        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <img src="/june-agent-management-2026.svg" alt="Christchurch AI June 2026 featured speakers Caelan Huntress and Blake Burgess" className="w-full rounded-xl border mb-8" style={{ borderColor: "var(--border)" }} />

          <p>
            The bottleneck has moved. Agents can now take action on your behalf, and the people who know how to manage them well will pull ahead.
            This Christchurch AI meetup is about the next layer of AI capability: not just using tools, but scoping, supervising, and improving agentic systems in real work.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Agent Management: The Next High-Value Skillset
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Caelan Huntress — AI Coaching Academy</p>
            <p>
              As agentic systems become more capable, our advantage will not come from technical proficiency alone.
              It will come from knowing how to scope agentic projects, manage autonomous systems, evaluate their performance,
              and design the information environments that make them effective.
            </p>
            <p className="mt-3">
              Caelan will unpack what AI agents are, how they differ from simple chat tools, which skills matter when agents start taking action,
              what tools can be used to build agent harnesses, and why context engineering and performance evaluation are becoming core capabilities.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Agent Habits with an Engineer&apos;s Mindset
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Blake Burgess — Senior Engineer</p>
            <p>
              What are AI agents, really, and what can they actually do? Blake brings 20 years of programming experience to a motivational,
              practical walkthrough of agents in practice — from local agents to cloud agents, explained simply.
            </p>
            <p className="mt-3">
              Expect a grounded engineer&apos;s perspective on harnesses, models, and where agents fit into existing workflows without rebuilding everything.
              You&apos;ll leave with practical habits and hooks you can start using straight away.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Proficient AI users who want to level up into agentic workflows</li>
            <li>Team leaders and decision-makers evaluating agent opportunities</li>
            <li>Developers and technical operators building useful harnesses around models</li>
            <li>Professionals curious about where agents fit into everyday work</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Format</h2>
          <p>
            Drinks and networking from <strong className="text-white">5:30 PM</strong>.
            Talks run from <strong className="text-white">6:00 PM to 7:30 PM</strong>, followed by open Q&amp;A and more conversation until <strong className="text-white">8:00 PM</strong>.
            Sponsored by <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>AI Coaching Academy</a>.
          </p>

          <div className="mt-10">
            <a href="https://www.meetup.com/christchurch-ai/events/314554727/" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "var(--accent)" }}>
              RSVP on Meetup — It&apos;s Free →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-semibold text-white mb-3">Also Coming Up</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-governance-may-2026" className="text-white underline">
                  May 4 — The AI Tension: Implementation vs Existential Risk
                </Link>
              </li>
              <li>
                <Link href="/ai-healthcare-agrifood-july-2026" className="text-white underline">
                  July 13 — AI in Healthcare &amp; Agri-Food Industries
                </Link>
              </li>
            </ul>
            <p className="text-sm mt-4">
              <Link href="/" className="text-white underline">← All events at Christchurch AI</Link>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
