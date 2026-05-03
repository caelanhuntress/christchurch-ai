import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "July AI Meetup — AI in Healthcare & Agri-Food Industries | Christchurch AI",
  description: "Christchurch AI meetup July 2026: Rowena Woolgar on healthcare AI and Dr Harold Mayaba on AI in agri-food and market intelligence.",
  keywords: ["Christchurch AI July 2026", "healthcare AI Christchurch", "agri-food AI NZ", "Rowena Woolgar", "Harold Mayaba", "AI meetup Christchurch"],
  openGraph: {
    title: "July AI Meetup — AI in Healthcare & Agri-Food Industries",
    description: "Rowena Woolgar and Dr Harold Mayaba at Christchurch AI — Monday 13 July 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-0726.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "July AI Meetup — AI in Healthcare & Agri-Food Industries",
    description: "Christchurch AI meetup — Rowena Woolgar and Dr Harold Mayaba, Monday 13 July 2026.",
    images: ["https://christchurch-ai.com/chchai-0726.png"],
  },
  alternates: { canonical: "https://christchurch-ai.com/ai-healthcare-agrifood-july-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "July AI Meetup — AI in Healthcare & Agri-Food Industries",
  description: "Rowena Woolgar on healthcare AI delivery and Dr Harold Mayaba on AI in agri-food and market intelligence at Christchurch AI.",
  startDate: "2026-07-13T17:30:00+12:00",
  endDate: "2026-07-13T20:00:00+12:00",
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
    { "@type": "Person", name: "Rowena Woolgar" },
    { "@type": "Person", name: "Dr Harold Mayaba" }
  ],
  url: "https://christchurch-ai.com/ai-healthcare-agrifood-july-2026"
};

export default function AIHealthcareAgrifoodJuly2026() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://www.meetup.com/christchurch-ai/events/314554735/" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Home</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup — July 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          AI in Healthcare &amp; <br />Agri-Food Industries
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span><strong className="text-white">Monday 13 July 2026</strong> — 5:30 PM to 8:00 PM NZST</span>
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
          <img src="/chchai-0726.png" alt="Christchurch AI July 2026 featured speakers Rowena Woolgar and Dr Harold Mayaba" className="w-full rounded-xl border mb-8" style={{ borderColor: "var(--border)" }} />

          <p>
            Generic AI advice only takes you so far. The real adoption work happens inside specific industries,
            where the stakes, the data, the regulations, and the people are unlike any other vertical.
            This month, Christchurch AI goes deep into two of them: healthcare and agri-food.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
            <h3 className="text-xl font-bold text-white mb-2">
              AI Is Not Neutral: Designing Healthcare AI for Real Work, Real Risk
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Rowena Woolgar — Healthcare AI Delivery</p>
            <p>
              AI in healthcare is never just a technical decision. It reshapes judgement, accountability, and trust.
              Rowena explores how AI must be designed and implemented differently across healthcare roles,
              from administrators and clinicians through to multidisciplinary teams, service delivery, and national systems.
            </p>
            <p className="mt-3">
              Expect a grounded look at where AI can safely support administrative flow, augment clinical reasoning,
              scale insight across services, and meet the governance and commissioning realities of healthcare delivery.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
            <h3 className="text-xl font-bold text-white mb-2">
              AI in Agri-Food: Real Opportunities and Smarter Growth
            </h3>
            <p className="text-sm font-semibold text-white mb-3">Dr Harold Mayaba — Agri-Food &amp; Market Intelligence</p>
            <p>
              Agri-food is one of New Zealand&apos;s most strategically important industries, and one where AI adoption is still uneven.
              Harold will show how practical AI systems can help producers, exporters, and organisations identify real opportunities,
              sharpen market positioning, and improve decisions.
            </p>
            <p className="mt-3">
              The session connects AI, market intelligence, consumer behaviour, and business growth,
              with examples from working systems already in use across the sector.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Healthcare leaders and professionals thinking about safe AI adoption</li>
            <li>People in agri-food, market intelligence, and producer-exporter ecosystems</li>
            <li>Business leaders who want industry-specific AI examples instead of generic advice</li>
            <li>Anyone curious about how AI lands differently across real-world sectors</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Format</h2>
          <p>
            Drinks and networking from <strong className="text-white">5:30 PM</strong>.
            Talks run from <strong className="text-white">6:00 PM to 7:30 PM</strong>, followed by open Q&amp;A and more conversation until <strong className="text-white">8:00 PM</strong>.
            Sponsored by <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--accent)" }}>AI Coaching Academy</a>.
          </p>

          <div className="mt-10">
            <a href="https://www.meetup.com/christchurch-ai/events/314554735/" target="_blank" rel="noopener noreferrer"
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
                <Link href="/agent-management-june-2026" className="text-white underline">
                  June 8 — Agent Management &amp; Engineering Habits
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
