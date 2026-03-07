import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw User Group Christchurch — March 24, 2026 | Christchurch AI",
  description: "Join the first OpenClaw User Group in Christchurch — March 24, 2026. Share experiences, get tips, and connect with other OpenClaw users in Canterbury.",
  keywords: ["OpenClaw user group Christchurch", "OpenClaw NZ", "AI assistant Christchurch", "personal AI assistant NZ", "Christchurch AI meetup March 2026"],
  alternates: { canonical: "https://christchurch-ai.com/openclaw-user-group-march-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "OpenClaw User Group Christchurch — March 2026",
  "description": "The first OpenClaw User Group in Christchurch. Share experiences, get tips, and connect with other OpenClaw users in Canterbury.",
  "startDate": "2026-03-24T17:30:00+13:00",
  "endDate": "2026-03-24T19:30:00+13:00",
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
  "url": "https://christchurch-ai.com/openclaw-user-group-march-2026"
};

export default function OpenClawUserGroup() {
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

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Home</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Special Event
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          OpenClaw User Group<br />Christchurch
        </h1>

        <div className="flex flex-col gap-2 mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span><strong className="text-white">Monday 24 March 2026</strong> — 5:30 PM to 7:30 PM NZST</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span><strong className="text-white">EPIC Innovation Centre</strong> — 78–100 Manchester St, Christchurch</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎟</span>
            <span><strong className="text-white">Free</strong> — RSVP appreciated</span>
          </div>
        </div>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            If you've got <strong className="text-white">OpenClaw</strong> installed — or you're seriously
            thinking about it — this is your event. The first Christchurch OpenClaw User Group brings
            together Canterbury's OpenClaw users to share what's working, swap tips, and help each other
            get more from their personal AI assistants.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to Expect</h2>

          <p>This is a peer gathering, not a sales event. The format is informal:</p>

          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white">Show and tell</strong> — bring your best OpenClaw use case, workflow, or skill to share</li>
            <li><strong className="text-white">Troubleshooting</strong> — stuck on something? Bring it. Collective knowledge beats solo debugging.</li>
            <li><strong className="text-white">What's new</strong> — recent OpenClaw updates, new skills, what's changed</li>
            <li><strong className="text-white">Open discussion</strong> — where is the platform heading? What do we want to see?</li>
          </ul>

          <p>
            Whether you've had OpenClaw for six months or six days, you belong here. The only
            qualification is curiosity about making your personal AI actually work for you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">About OpenClaw</h2>

          <p>
            <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer" className="text-white underline">OpenClaw</a>{" "}
            is a personal AI assistant that lives on dedicated hardware — in your home or office —
            rather than on someone else's cloud. It knows your business, your preferences, and your
            workflows. It's private, always available, and gets better the longer you use it.
          </p>

          <p>
            Canterbury has a growing community of OpenClaw users — freelancers, small business owners,
            professionals, and curious early adopters. This User Group is where that community meets.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Not an OpenClaw User Yet?</h2>

          <p>
            If you've been curious about OpenClaw but haven't taken the step, this is a good event to
            attend before you do. Talk to people who are actually using it. Ask the real questions.
            Find out if it's right for your situation.
          </p>

          <p>
            For more information about OpenClaw installations in Christchurch, visit{" "}
            <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer" className="text-white underline">openclaws.nz</a>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">RSVP</h2>

          <p>
            Free to attend — RSVP through our{" "}
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="text-white underline">
              Meetup page
            </a>{" "}
            so we can plan for numbers. No ticket needed on the door.
          </p>

          <div className="mt-10 p-6 rounded-lg border" style={{ borderColor: "var(--accent)", background: "rgba(0,74,173,0.08)" }}>
            <p className="font-semibold text-white mb-2">Hosted by Christchurch AI</p>
            <p className="text-sm">
              The Christchurch AI monthly meetup runs on the{" "}
              <strong className="text-white">First Monday of every month</strong> at EPIC Innovation Centre.
              Our next regular meetup is <strong className="text-white">Monday 4 May 2026</strong>.
            </p>
            <p className="text-sm mt-2">
              <Link href="/" className="text-white underline">← Back to Christchurch AI</Link>
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}
