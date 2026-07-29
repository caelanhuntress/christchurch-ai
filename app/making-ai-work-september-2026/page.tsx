import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const meetupUrl = "https://www.meetup.com/christchurch-ai/events/315884707/";

export const metadata: Metadata = {
  title: "September AI Meetup - Making AI Work | Christchurch AI",
  description:
    "Christchurch AI meetup September 2026: Pamela Simpson on human judgement in an AI world, plus Caelan Huntress on practical AI implementation in business.",
  keywords: [
    "Christchurch AI September 2026",
    "AI implementation Christchurch",
    "human judgement AI",
    "AI agents business",
    "AI meetup Christchurch",
  ],
  openGraph: {
    title: "September AI Meetup - Making AI Work",
    description:
      "Pamela Simpson and Caelan Huntress at Christchurch AI - Monday 14 September 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-0926.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "September AI Meetup - Making AI Work",
    description:
      "Christchurch AI meetup - human judgement in an AI world plus practical AI implementation in business.",
    images: ["https://christchurch-ai.com/chchai-0926.jpeg"],
  },
  alternates: { canonical: "https://christchurch-ai.com/making-ai-work-september-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "September AI Meetup - Making AI Work: from Judgment to Implementation",
  description:
    "Pamela Simpson shares research on human judgement, expertise, accountability, and trust in AI-enabled workplaces, followed by Caelan Huntress on onboarding AI agents, transferring workflows, and launching an internal AI working group.",
  startDate: "2026-09-14T17:30:00+12:00",
  endDate: "2026-09-14T20:00:00+12:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: "https://christchurch-ai.com/chchai-0926.jpeg",
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
    { "@type": "Person", name: "Pamela Simpson" },
    { "@type": "Person", name: "Caelan Huntress" },
  ],
  url: "https://christchurch-ai.com/making-ai-work-september-2026",
  sameAs: meetupUrl,
};

export default function MakingAiWorkSeptember2026() {
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
          href={meetupUrl}
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
          Monthly Meetup - September 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Making AI Work: <br />from Judgment to Implementation
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>
              <strong className="text-white">Monday 14 September 2026</strong> - 5:30 PM to 8:00 PM NZST
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
            src="/chchai-0926.jpeg"
            alt="Christchurch AI September 2026 Making AI Work event"
            width={1672}
            height={941}
            className="w-full rounded-xl border mb-8"
            style={{ borderColor: "var(--border)" }}
            priority
          />

          <p>
            September&apos;s Christchurch AI meetup explores how organisations can balance human
            judgement with practical AI implementation. Pamela Simpson will look at expertise,
            accountability, and trust in AI-enabled workplaces, while Caelan Huntress will show how
            businesses can onboard AI agents into repeatable work.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Human Judgement in an AI World</h3>
            <p className="text-sm font-semibold text-white mb-3">Pamela Simpson - DBA Candidate, University of Otago</p>
            <p>
              Pamela Simpson will share early insights from research with subject-matter experts across
              professional, corporate, and government sectors in New Zealand.
            </p>
            <p className="mt-3">
              The session explores how people decide what to trust, what counts as expertise, and how
              organisations can preserve epistemic integrity as AI becomes part of knowledge work.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Implementation in Business</h3>
            <p className="text-sm font-semibold text-white mb-3">Caelan Huntress - AI Coaching Academy</p>
            <p>
              Caelan Huntress will unpack what it means to teach AI agents how a business actually works:
              workflows, standards, rules, decisions, exceptions, and institutional knowledge.
            </p>
            <p className="mt-3">
              The talk covers agent onboarding, workflow handoff, AI readiness, and how to assemble an
              internal AI working group that can test use cases and share lessons across an organisation.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Business owners, leaders, consultants, and operations teams implementing AI at work</li>
            <li>Professionals thinking seriously about trust, expertise, and accountability with AI</li>
            <li>Teams moving from isolated experiments into repeatable AI-enabled workflows</li>
            <li>Builders and AI practitioners interested in responsible adoption inside organisations</li>
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
              href={meetupUrl}
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
                <Link href="/ai-marketing-comms-august-2026" className="text-white underline">
                  August 10 - Marketing &amp; Comms with AI
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
