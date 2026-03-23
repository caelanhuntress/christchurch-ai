import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Events at EPIC Innovation Centre Christchurch",
  description: "EPIC Innovation Centre in Christchurch hosts the monthly Christchurch AI meetup — free events for the Canterbury tech and AI community.",
  keywords: ["EPIC Innovation Centre AI events", "EPIC Innovation Christchurch events", "AI events EPIC Christchurch", "Canterbury tech events EPIC", "Christchurch innovation hub AI"],
  alternates: { canonical: "https://christchurch-ai.com/epic-innovation-ai-events" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Events at EPIC Innovation Centre Christchurch",
  "description": "Monthly AI meetup events at EPIC Innovation Centre, Canterbury.",
  "url": "https://christchurch-ai.com/epic-innovation-ai-events",
  "publisher": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Join Free →
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          78–100 Manchester St, Christchurch
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AI Events at EPIC Innovation Centre</h1>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          <strong className="text-white">EPIC Innovation Centre</strong> is home to Christchurch's most active
          AI community event — the <strong className="text-white">Christchurch AI meetup</strong>, held as
          a regular monthly event.
        </p>
        <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
          If you're looking for AI events in Christchurch, this is the regular one. Free to attend,
          open to everyone, and consistently worth your Monday evening.
        </p>

        <h2 className="text-2xl font-bold mb-4">About EPIC Innovation Centre</h2>
        <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          EPIC — the <strong className="text-white">Enterprise Precinct and Innovation Campus</strong> —
          is Canterbury's hub for startups, scale-ups, and innovation-led businesses. Located at
          78–100 Manchester St in the CBD, it houses dozens of tech companies and regularly hosts
          community events across the tech ecosystem.
        </p>
        <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          For the Christchurch AI community, EPIC is home base. The central location, the right
          crowd already in the building, and the informal atmosphere make it the ideal venue for
          the kind of conversations we want to have.
        </p>

        <h2 className="text-2xl font-bold mb-4">Monthly AI Meetup — Event Details</h2>
        <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="space-y-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <div className="flex gap-3 items-start">
              <span>📅</span>
              <div><span className="font-semibold text-white">When: </span>Monthly meetups, typically 5:30–8:00 PM</div>
            </div>
            <div className="flex gap-3 items-start">
              <span>📍</span>
              <div><span className="font-semibold text-white">Where: </span>EPIC Innovation Centre, 78–100 Manchester St, Christchurch Central</div>
            </div>
            <div className="flex gap-3 items-start">
              <span>🎟️</span>
              <div><span className="font-semibold text-white">Cost: </span>Free — always</div>
            </div>
            <div className="flex gap-3 items-start">
              <span>🎤</span>
              <div><span className="font-semibold text-white">Format: </span>Two speakers, drinks, open Q&A and networking</div>
            </div>
            <div className="flex gap-3 items-start">
              <span>👥</span>
              <div><span className="font-semibold text-white">Who: </span>Developers, business leaders, researchers, founders, curious beginners</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Next Event: May 2026</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          The <strong className="text-white">May 2026 meetup</strong> features two speakers:
        </p>
        <div className="space-y-4 mb-10">
          {[
            {
              speaker: "Dr Elsamari Botha",
              title: "Beyond Prompting: Multi-Dimensional AI Literacy and New Operating Models for the AI Era",
            },
            {
              speaker: "Hazel Shanks",
              title: "The Doom Thesis — Why 'If Anyone Builds It, Everyone Dies'",
            },
          ].map((talk) => (
            <div key={talk.speaker} className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="font-semibold text-white text-sm mb-1">{talk.speaker}</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>{talk.title}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">TechWeek 2026 at EPIC</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          In May 2026, we are also hosting an official <strong className="text-white">TechWeek NZ conference event</strong> at
          EPIC — a full programme AI conference as part of New Zealand's largest tech festival.
          Speaker applications are open now.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Link href="/blog/techweek-2026-christchurch"
            className="px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
            TechWeek 2026 Details →
          </Link>
          <a href="https://sessionize.com/christchurch-ai-techweek-conference/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}>
            Apply to Speak →
          </a>
        </div>

        <div className="rounded-2xl border p-8 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="text-xl font-bold text-white mb-3">See you at EPIC</div>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            RSVP on Meetup so we know you're coming.
          </p>
          <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}>
            RSVP on Meetup — Free
          </a>
        </div>
      </div>

      <footer className="px-6 py-8 border-t text-center text-sm mt-10" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</Link>
        {" "}· Monthly meetups at EPIC Innovation, Canterbury, New Zealand
      </footer>
    </div>
  );
}
