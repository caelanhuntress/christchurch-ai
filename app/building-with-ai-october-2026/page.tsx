import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const meetupUrl = "https://www.meetup.com/christchurch-ai/events/316398338/";

export const metadata: Metadata = {
  title: "October AI Meetup - Building with AI: Speed, Structure & Scale | Christchurch AI",
  description:
    "Christchurch AI meetup October 2026: Joshua Campbell on what AI speeds up and what it can't replace, plus Caelan Huntress on practical AI implementation in business.",
  keywords: [
    "Christchurch AI October 2026",
    "AI assisted development Christchurch",
    "AI implementation Christchurch",
    "Company Brain",
    "AI meetup Christchurch",
  ],
  openGraph: {
    title: "October AI Meetup - Building with AI: Speed, Structure & Scale",
    description:
      "Joshua Campbell and Caelan Huntress at Christchurch AI - Monday 12 October 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-1026.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "October AI Meetup - Building with AI: Speed, Structure & Scale",
    description:
      "Christchurch AI meetup - AI-assisted development, responsible software design, Company Brains, and AI implementation in business.",
    images: ["https://christchurch-ai.com/chchai-1026.jpeg"],
  },
  alternates: { canonical: "https://christchurch-ai.com/building-with-ai-october-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "October AI Meetup - Building with AI: Speed, Structure & Scale",
  description:
    "Joshua Campbell shares practical lessons from building AI-enabled tools inside a growing Christchurch business, followed by Caelan Huntress on documenting workflows, onboarding AI agents, building a Company Brain, and establishing an internal AI Working Group.",
  startDate: "2026-10-12T17:30:00+13:00",
  endDate: "2026-10-12T20:00:00+13:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: "https://christchurch-ai.com/chchai-1026.jpeg",
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
    { "@type": "Person", name: "Joshua Campbell" },
    { "@type": "Person", name: "Caelan Huntress" },
  ],
  url: "https://christchurch-ai.com/building-with-ai-october-2026",
  sameAs: meetupUrl,
};

export default function BuildingWithAiOctober2026() {
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
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>
          ← Back to Home
        </Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup - October 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Building with AI: <br />Speed, Structure &amp; Scale
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>
              <strong className="text-white">Monday 12 October 2026</strong> - 5:30 PM to 8:00 PM NZDT
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
            src="/chchai-1026.jpeg"
            alt="Christchurch AI October 2026 Building with AI: Speed, Structure, and Scale event"
            width={1670}
            height={939}
            className="w-full rounded-xl border mb-8"
            style={{ borderColor: "var(--border)" }}
            priority
          />

          <p>
            AI is making it possible for small teams to build software, automate workflows, and create
            new capabilities at a pace that was difficult to imagine a few years ago. October&apos;s
            Christchurch AI meetup looks at what that speed makes possible, and what structure is needed
            underneath it.
          </p>

          <p>
            Joshua Campbell will share practical lessons from building with AI inside a growing
            Christchurch business. Caelan Huntress will then explore how organisations can move from
            individual AI use and isolated experiments towards operational implementation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">What AI Speeds Up and What It Can&apos;t Replace</h3>
            <p className="text-sm font-semibold text-white mb-3">Joshua Campbell - Atlas</p>
            <p>
              Joshua Campbell will share lessons from Atlas, which began as a small Christchurch video
              production business and grew into a company building internal tools for content management,
              distribution, websites, and social platforms.
            </p>
            <p className="mt-3">
              He will use that experience as a case study in what AI-assisted development makes easier,
              where the limits remain, and why privacy, consent, security, ownership, architecture, and
              careful technical design matter more when software can be built faster.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Implementation in Business</h3>
            <p className="text-sm font-semibold text-white mb-3">Caelan Huntress - AI Coaching Academy</p>
            <p>
              As AI moves from optional to operational, the challenge is teaching AI agents how the
              business actually works. The workflows, standards, decisions, rules, exceptions, and
              institutional knowledge need a digital Company Brain.
            </p>
            <p className="mt-3">
              Caelan Huntress will show what practical AI implementation looks like inside a business:
              documenting workflows, onboarding agents, transferring repeatable work, assessing AI
              readiness, and assembling an internal AI Working Group.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Developers, founders, product teams, and consultants building AI-enabled tools</li>
            <li>Business owners and leaders considering what small teams can now build with AI</li>
            <li>Operations teams ready to document workflows and hand repeatable work to AI agents</li>
            <li>Professionals thinking about privacy, consent, architecture, and responsible implementation</li>
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

          <section className="mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">Resources</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/chchai-1026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  Slides →
                </a>
              </li>
              <li>
                <a
                  href="https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/resources/atlas-chchai-1026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  Joshua&apos;s Reader&apos;s Guide →
                </a>
              </li>
              <li>
                <a
                  href="https://ai-coaching-academy.s3.amazonaws.com/whitepapers/ai-working-group.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  AI Working Group Whitepaper →
                </a>
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-semibold text-white mb-3">Also Coming Up</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/past-events/making-ai-work-september-2026" className="text-white underline">
                  September 14 - Making AI Work: Judgment, Experiments, &amp; ROI
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
