import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "August AI Meetup - Marketing & Comms with AI | Christchurch AI",
  description:
    "Christchurch AI meetup August 2026: Simon Rush and Nic Hendrie from Trimble on AI marketing strategy, plus Caelan Huntress on building an AI Brand Voice Kit.",
  keywords: [
    "Christchurch AI August 2026",
    "marketing AI Christchurch",
    "communications AI NZ",
    "Trimble AI marketing",
    "brand voice AI",
    "AI meetup Christchurch",
  ],
  openGraph: {
    title: "August AI Meetup - Marketing & Comms with AI",
    description:
      "Simon Rush, Nic Hendrie, and Caelan Huntress at Christchurch AI - Monday 10 August 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-0826.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "August AI Meetup - Marketing & Comms with AI",
    description:
      "Christchurch AI meetup - Trimble marketing strategy with AI plus Caelan Huntress on AI Brand Voice Kits.",
    images: ["https://christchurch-ai.com/chchai-0826.jpeg"],
  },
  alternates: { canonical: "https://christchurch-ai.com/ai-marketing-comms-august-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "August AI Meetup - Marketing & Comms with AI",
  description:
    "Simon Rush and Nic Hendrie from Trimble share how enterprise marketing teams can accelerate campaign strategy with AI, followed by Caelan Huntress on building an AI Brand Voice Kit.",
  startDate: "2026-08-10T17:30:00+12:00",
  endDate: "2026-08-10T20:00:00+12:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: "https://christchurch-ai.com/chchai-0826.jpeg",
  location: {
    "@type": "Place",
    name: "EPIC Innovation Centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "78-100 Manchester St",
      addressLocality: "Christchurch",
      addressRegion: "Canterbury",
      addressCountry: "NZ",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Christchurch Artificial Intelligence",
    url: "https://christchurch-ai.com",
  },
  performer: [
    { "@type": "Person", name: "Simon Rush" },
    { "@type": "Person", name: "Nic Hendrie" },
    { "@type": "Person", name: "Caelan Huntress" },
  ],
  url: "https://christchurch-ai.com/ai-marketing-comms-august-2026",
};

export default function AIMarketingCommsAugust2026() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav
        className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}
      >
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>
          Christchurch AI
        </Link>
        <a
          href="https://www.meetup.com/christchurch-ai/events/314554734/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: "var(--accent)", color: "#ffffff" }}
        >
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>
          ← Back to Home
        </Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup - August 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Marketing &amp; Comms <br />with AI
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>
              <strong className="text-white">Monday 10 August 2026</strong> - 5:30 PM to 8:00 PM NZST
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>
              <strong className="text-white">EPIC Innovation Centre</strong>{" "}
              <a
                href="https://maps.google.com/?q=EPIC+Innovation+Christchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--accent)" }}
              >
                78-100 Manchester St, Christchurch
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎟</span>
            <span>
              <strong className="text-white">Free</strong> - RSVP on Meetup
            </span>
          </div>
        </div>

        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <Image
            src="/chchai-0826.jpeg"
            alt="Christchurch AI August 2026 Marketing and Comms with AI event"
            width={1536}
            height={864}
            className="w-full rounded-xl border mb-8"
            style={{ borderColor: "var(--border)" }}
            priority
          />

          <p>
            AI is changing how marketing and communications teams plan campaigns, write content, review
            strategy, and maintain a consistent voice across channels. This month, Christchurch AI brings
            together an enterprise case study from Trimble and a practical brand-voice workflow you can use
            in your own work.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Accelerating Marketing Strategy with AI</h3>
            <p className="text-sm font-semibold text-white mb-3">Simon Rush &amp; Nic Hendrie - Trimble</p>
            <p>
              Simon Rush and Nic Hendrie will share how Trimble builds and executes always-on promotional
              campaigns through a Vertex AI-connected workflow.
            </p>
            <p className="mt-3">
              The session covers how campaign briefs can become market research, strategy, tactical plans,
              and supporting deliverables in minutes, plus how automated critique, QA, review, and approval
              can improve campaign quality without requiring every user to become a prompt engineer.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Build an AI Brand Voice Kit: Clone Your Voice with AI
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Caelan Huntress - AI Coaching Academy</p>
            <p>
              AI can write quickly. The harder question is whether it can write like you. Caelan Huntress
              will show how to build a Brand Voice Kit: a reusable set of examples, rules, tone markers,
              vocabulary patterns, and writing preferences that helps AI produce content in your voice.
            </p>
            <p className="mt-3">
              You will learn how to capture tone, rhythm, vocabulary, structure, and personality, then use
              that system across emails, newsletters, social posts, articles, proposals, and internal
              communications.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Marketing and communications professionals using AI in real campaigns</li>
            <li>Business leaders who want practical AI workflows for strategy and content</li>
            <li>Founders, consultants, creators, and teams who need a consistent brand voice</li>
            <li>Developers and AI builders thinking about workflow UX, critique, QA, and approvals</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Format</h2>
          <p>
            Drinks and networking from <strong className="text-white">5:30 PM</strong>. Talks run from{" "}
            <strong className="text-white">6:00 PM to 7:30 PM</strong>, followed by open Q&amp;A and more
            conversation until <strong className="text-white">8:00 PM</strong>. Sponsored by{" "}
            <a
              href="https://ai-coaching.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--accent)" }}
            >
              AI Coaching Academy
            </a>
            .
          </p>

          <div className="mt-10">
            <a
              href="https://www.meetup.com/christchurch-ai/events/314554734/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "var(--accent)" }}
            >
              RSVP on Meetup - It&apos;s Free →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-semibold text-white mb-3">Also Coming Up</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-healthcare-agrifood-july-2026" className="text-white underline">
                  July 13 - AI in Healthcare &amp; Agri-Food Industries
                </Link>
              </li>
            </ul>
            <p className="text-sm mt-4">
              <Link href="/" className="text-white underline">
                ← All events at Christchurch AI
              </Link>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
