import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The AI Tension — Implementation vs Existential Risk | Christchurch AI",
  description: "Christchurch AI meetup May 2026: Dr Elsamari Botha on multi-dimensional AI literacy and Hazel Shanks on The Doom Thesis. EPIC Innovation Centre.",
  keywords: ["AI governance Christchurch", "AI literacy NZ", "Christchurch AI meetup May 2026", "Hazel Shanks", "Dr Elsamari Botha", "existential risk AI"],
  openGraph: {
    title: "The AI Tension — Implementation vs Existential Risk",
    description: "Dr Elsamari Botha and Hazel Shanks at Christchurch AI — Monday 4 May 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-0526-2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Tension — Implementation vs Existential Risk",
    description: "Christchurch AI meetup — Dr Elsamari Botha and Hazel Shanks, Monday 4 May 2026.",
    images: ["https://christchurch-ai.com/chchai-0526-2.png"],
  },
  alternates: { canonical: "https://christchurch-ai.com/ai-governance-may-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "The AI Tension — Implementation vs Existential Risk",
  "description": "Dr Elsamari Botha on multi-dimensional AI literacy frameworks and Hazel Shanks on The Doom Thesis at the Christchurch AI monthly meetup.",
  "startDate": "2026-05-04T17:30:00+12:00",
  "endDate": "2026-05-04T20:00:00+12:00",
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
    { "@type": "Person", "name": "Dr Elsamari Botha" },
    { "@type": "Person", "name": "Hazel Shanks" }
  ],
  "url": "https://christchurch-ai.com/ai-governance-may-2026"
};

export default function AIGovernanceMay2026() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Home</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup — May 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          The AI Tension —<br />Implementation vs Existential Risk
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span><strong className="text-white">Monday 4 May 2026</strong> — 5:30 PM to 8:00 PM NZST</span>
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

          <img src="/chchai-0526-2.png" alt="Christchurch AI May 2026 featured speakers Dr Elsamari Botha and Hazel Shanks" className="w-full rounded-xl border mb-8" style={{ borderColor: "var(--border)" }} />

          <p>
            Artificial intelligence is advancing rapidly, and with it comes a growing tension:
            how should we build it — and what happens if we get it wrong?
            This month’s Christchurch AI meetup brings together two perspectives that rarely share the same stage:
            practical implementation frameworks, and the existential risk case for taking AI danger seriously.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          {/* Talk 1 */}
          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Beyond Prompting: Multi-Dimensional AI Literacy and New Operating Models for the AI Era
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Dr Elsamari Botha — Beyond Prompting: Multi-Dimensional AI Literacy and New Operating Models for the AI Era</p>
            <p>
              AI is already being deployed across industries — but implementation is not just technical.
              It’s organisational, ethical, and strategic. The integration of AI into organizations represents
              more than a technological upgrade; it demands a transformation in how we work, decide, and deliver value.
            </p>
            <p className="mt-3">
              In this session, Dr Elsamari will define what multi-dimensional AI literacy really means beyond prompting,
              present frameworks for building AI capability across organisations, explore new operating models for the AI era,
              and discuss the skills employees need to thrive in AI-enabled contexts.
            </p>
          </div>

          {/* Talk 2 */}
          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
            <h3 className="text-xl font-bold text-white mb-2">
              The Doom Thesis — Why “If Anyone Builds It, Everyone Dies”
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Hazel Shanks — The Doom Thesis</p>
            <p>
              What if the biggest risk isn’t misuse — but success?
              Hazel introduces the Doom Thesis: the general argument for existential risk from advanced AI.
            </p>
            <p className="mt-3">
              Together, we will explore the plans to build superintelligence at AI labs, the core argument behind the doomer perspective,
              whether current governance approaches are enough, what it would actually mean to pause or restrict AI development,
              and whether the Yudkowsky book is worth reading.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Business leaders responsible for AI strategy and implementation</li>
            <li>People interested in AI governance, safety, and existential risk</li>
            <li>Educators and trainers building AI literacy programmes</li>
            <li>Anyone curious about what’s at stake as AI capabilities continue to accelerate</li>
            <li>The curious — implementation and risk affect every serious AI user</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Format</h2>
          <p>
            Doors open at <strong className="text-white">5:30 PM</strong> for networking.
            Talks begin at <strong className="text-white">6:00 PM</strong>.
            Q&A and further networking until <strong className="text-white">8:00 PM</strong>.
            Free to attend — no ticket required on the door.
          </p>

          <div className="mt-10">
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "var(--accent)" }}>
              RSVP on Meetup — It's Free →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-semibold text-white mb-3">Also Coming Up</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/openclaw-user-group-march-2026" className="text-white underline">
                  March 24 — OpenClaw User Group (Lunchtime)
                </Link>
              </li>
              <li>
                <Link href="/vibe-coding-april-2026" className="text-white underline">
                  April 6 — Vibe Coding & Web App Development with AI
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
