import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Meetup Christchurch — Monthly Events at EPIC Innovation",
  description: "Join the Christchurch AI meetup — free monthly events on the First Monday of every month at EPIC Innovation Centre. Speakers, demos, networking.",
  keywords: ["AI meetup Christchurch", "artificial intelligence meetup NZ", "tech meetup Christchurch", "AI networking Christchurch", "monthly AI events Canterbury"],
  alternates: { canonical: "https://christchurch-ai.com/ai-meetup-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "name": "Christchurch AI Meetup",
  "description": "Free monthly AI meetup at EPIC Innovation Centre, Christchurch. First Monday of every month.",
  "url": "https://christchurch-ai.com/ai-meetup-christchurch",
  "location": {
    "@type": "Place",
    "name": "EPIC Innovation Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "78-100 Manchester St",
      "addressLocality": "Christchurch",
      "addressCountry": "NZ",
    },
  },
  "organizer": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
  "isAccessibleForFree": true,
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
          Free · Monthly · Christchurch
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AI Meetup Christchurch</h1>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          The <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup is Canterbury's
          gathering for everyone interested in AI — whether you're building with it, thinking about it,
          or just trying to figure out what it means for your industry.
        </p>
        <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
          We meet on the <strong className="text-white">First Monday of every month</strong> at
          EPIC Innovation Centre. It's free. It's friendly. And the conversations are real.
        </p>

        <div className="rounded-2xl border p-6 mb-12" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <h2 className="text-xl font-bold text-white mb-4">Event Format</h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
            <div className="flex gap-4">
              <span className="font-semibold text-white w-28 flex-shrink-0">5:30 – 6:00 PM</span>
              <span>Drinks and networking — grab a drink, meet people</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-white w-28 flex-shrink-0">6:00 – 6:45 PM</span>
              <span>First speaker — talk + Q&A</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-white w-28 flex-shrink-0">6:45 – 7:30 PM</span>
              <span>Second speaker — talk + Q&A</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-white w-28 flex-shrink-0">7:30 – 8:00 PM</span>
              <span>Open Q&A and more networking</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Who Comes?</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A genuinely mixed crowd — which is part of what makes it good. Regulars include:
        </p>
        <ul className="space-y-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            "Software engineers and developers building with LLMs and AI APIs",
            "Business owners exploring what AI can do for their operations",
            "Researchers from University of Canterbury and Lincoln University",
            "Founders at EPIC and in the broader Canterbury startup scene",
            "Marketing and communications professionals navigating AI tools",
            "Complete beginners who just want to understand what's going on",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span style={{ color: "var(--accent)" }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">Where We Meet</h2>
        <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="font-bold text-white mb-1">EPIC Innovation Centre</div>
          <div className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>78–100 Manchester St, Christchurch Central</div>
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            EPIC is Christchurch's innovation and startup hub. Easy to find in the CBD —
            parking on Manchester St or the nearby Victoria St carpark.
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Want to Speak?</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          We're always looking for speakers. If you're doing something interesting with AI,
          we want to hear about it — demos, research, practical lessons, all welcome.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://sessionize.com/christchurch-ai-techweek-conference/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}>
            Apply to Speak →
          </a>
          <Link href="/blog/ai-speaker-christchurch"
            className="px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
            How It Works →
          </Link>
        </div>

        <div className="rounded-2xl border p-8 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="text-xl font-bold text-white mb-3">Join us next Monday</div>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            RSVP on Meetup — it's free, and it lets us know how many people to expect.
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
