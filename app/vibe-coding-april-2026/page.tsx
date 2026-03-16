import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vibe Coding & Web App Development with AI — April 6, 2026 | Christchurch AI",
  description: "Christchurch AI meetup April 2026: Learn how to build web apps from SOPs and code by conversation with Claude. Greg Dickson and Caelan Huntress speaking at EPIC Innovation.",
  keywords: ["vibe coding Christchurch", "AI web development NZ", "build apps with AI Christchurch", "Claude coding NZ", "Christchurch AI meetup April 2026"],
  alternates: { canonical: "https://christchurch-ai.com/vibe-coding-april-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Vibe Coding & Web App Development with AI — Christchurch AI April 2026",
  "description": "Learn how non-developers can build web apps from SOPs, and how to code by conversation using Claude. Two talks at EPIC Innovation Centre.",
  "startDate": "2026-04-06T17:30:00+13:00",
  "endDate": "2026-04-06T20:00:00+13:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "isAccessibleForFree": true,
  "location": {
    "@type": "Place",
    "name": "EPIC Innovation Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "78-100 Manchester St",
      "addressLocality": "Christchurch",
      "addressRegion": "Canterbury",
      "addressCountry": "NZ"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Christchurch Artificial Intelligence",
    "url": "https://christchurch-ai.com"
  },
  "performer": [
    { "@type": "Person", "name": "Greg Dickson" },
    { "@type": "Person", "name": "Caelan Huntress", "url": "https://caelanhuntress.com" }
  ],
  "url": "https://christchurch-ai.com/vibe-coding-april-2026"
};

export default function VibeCodingApril2026() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://www.meetup.com/christchurch-ai/events/313137130/" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Home</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup — April 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Vibe Coding &<br />Web App Development with AI
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span><strong className="text-white">Monday 6 April 2026</strong> — 5:30 PM to 8:00 PM NZST</span>
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

          <p>
            You don't need to write code to build software anymore. You need to know what you want
            to build and how to describe it clearly — and AI handles the rest.
          </p>
          <p>
            This month's Christchurch AI meetup is for anyone who's curious about building real
            tools and web apps with AI assistance — whether you're a developer looking to move
            faster, or a non-technical professional who's never written a line of code.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          {/* Talk 1 */}
          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
            <h3 className="text-xl font-bold text-white mb-2">From SOP to Web App<br />(No Developers Required)</h3>
            <p className="text-sm font-semibold text-white mb-3">Greg Dickson</p>
            <p>
              Standard Operating Procedures exist in almost every organisation — step-by-step guides
              for how things get done. Greg will show how you can transform those SOPs into fully
              functional web applications using AI, without writing a single line of code yourself.
            </p>
            <p className="mt-3">
              If you've got processes that should be software but the cost and complexity of
              development has kept them as Word docs, this talk is for you.
            </p>
          </div>

          {/* Talk 2 */}
          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
            <h3 className="text-xl font-bold text-white mb-2">Vibe Coding with Claude</h3>
            <p className="text-sm font-semibold text-white mb-3">
              <a href="https://caelanhuntress.com" target="_blank" rel="noopener noreferrer" className="underline">Caelan Huntress</a>
            </p>
            <p>
              Vibe coding is building software by describing what you want — in plain language —
              and watching it become working code. No syntax to memorise. No debugging rabbit holes.
              Just clear communication between you and an AI that knows how to build things.
            </p>
            <p className="mt-3">
              Caelan will demonstrate vibe coding live using Claude, showing how to go from an idea
              to a working application in a single session. Expect something to be built on stage.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Business owners with processes that should be software</li>
            <li>Developers curious about AI-assisted coding workflows</li>
            <li>Anyone who's wanted to build a tool but been blocked by technical complexity</li>
            <li>Product managers and operations people tired of manual workarounds</li>
            <li>The curious — you don't need any technical background to get value from this</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Format</h2>
          <p>
            Doors open at <strong className="text-white">5:30 PM</strong> for networking.
            Talks begin at <strong className="text-white">6:00 PM</strong>.
            Q&A and further networking until <strong className="text-white">8:00 PM</strong>.
            Free to attend — bring a colleague.
          </p>

          <div className="mt-10">
            <a href="https://www.meetup.com/christchurch-ai/events/313137130/"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "var(--accent)" }}>
              RSVP on Meetup — It's Free →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              <strong className="text-white">Christchurch AI</strong> hosts monthly meetups at
              EPIC Innovation Centre. <Link href="/" className="text-white underline">See all upcoming events →</Link>
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}
