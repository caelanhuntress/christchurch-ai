import Link from "next/link";

const NEXT_EVENT = {
  date: "Monday, 4 May 2026",
  time: "5:30 – 8:00 PM NZST",
  venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
  mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
  meetupUrl: "https://meetup.com/christchurch-ai",
  talks: [
    {
      speaker: "Dr Elsamari Botha",
      title: "Beyond Prompting: Multi-Dimensional AI Literacy and New Operating Models for the AI Era",
      bio: "AI literacy researcher and framework designer",
    },
    {
      speaker: "Todd Bowman",
      title: "Best Practices for AI Governance Implementation",
      bio: "AI governance and responsible deployment specialist",
    },
  ],
};

const PAST_TALKS = [
  { speaker: "Dan Randow", topic: "Collective Intelligence & AI", month: "September 2025" },
  { speaker: "Dr Elsamari Botha", topic: "AI Literacy Frameworks", month: "May 2026" },
  { speaker: "Blake Harkness", topic: "AI in the Real World", month: "2025" },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Christchurch AI Meetup — May 2026",
    "description": "Monthly AI meetup featuring talks on AI governance and AI literacy frameworks at EPIC Innovation, Christchurch.",
    "startDate": "2026-05-04T17:30:00+12:00",
    "endDate": "2026-05-04T20:00:00+12:00",
    "location": {
      "@type": "Place",
      "name": "EPIC Innovation Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "78-100 Manchester St",
        "addressLocality": "Christchurch",
        "addressRegion": "Canterbury",
        "addressCountry": "NZ",
      },
    },
    "organizer": {
      "@type": "Organization",
      "name": "Christchurch Artificial Intelligence",
      "url": "https://christchurch-ai.com",
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "isAccessibleForFree": true,
    "url": "https://meetup.com/christchurch-ai",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Christchurch Artificial Intelligence",
    "url": "https://christchurch-ai.com",
    "description": "Christchurch's monthly AI meetup community. We meet on the First Monday of every month at EPIC Innovation Centre.",
    "location": {
      "@type": "Place",
      "name": "EPIC Innovation Centre, Christchurch, New Zealand",
    },
    "sameAs": ["https://meetup.com/christchurch-ai"],
    "sponsor": {
      "@type": "Organization",
      "name": "AI Coaching Academy",
      "url": "https://ai-coaching.academy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="min-h-screen" style={{ background: "var(--background)" }}>

        {/* Nav */}
        <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
          style={{ borderColor: "var(--border)", background: "rgba(6,13,6,0.9)" }}>
          <div className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>
            Christchurch AI
          </div>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#next-event" className="hover:text-white transition-colors">Next Event</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
            <a
              href={NEXT_EVENT.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#060d06" }}
            >
              Join Free →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 border"
            style={{ borderColor: "var(--border)", color: "var(--accent)", background: "rgba(74,222,128,0.05)" }}>
            First Monday of every month · Christchurch, NZ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Artificial Intelligence<br />
            <span style={{ color: "var(--accent)" }}>in Christchurch</span>
          </h1>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Canterbury's monthly gathering for people building with, thinking about, and curious about AI.
            Speakers, demos, drinks, and real conversations — at EPIC Innovation, every First Monday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={NEXT_EVENT.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#060d06" }}
            >
              Join the Community — Free
            </a>
            <a
              href="#next-event"
              className="px-8 py-4 rounded-full font-semibold text-base border transition-all hover:bg-white/5"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Next Event ↓
            </a>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y py-10 px-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[
              { stat: "Monthly", label: "Events since 2024" },
              { stat: "EPIC", label: "Innovation Centre" },
              { stat: "Free", label: "Always free to attend" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>{item.stat}</div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Event */}
        <section id="next-event" className="px-6 py-20 max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Coming Up
          </div>
          <h2 className="text-3xl font-bold mb-2">Next Meetup</h2>
          <p className="mb-10" style={{ color: "var(--text-muted)" }}>
            {NEXT_EVENT.date} · {NEXT_EVENT.time}
          </p>

          <div className="rounded-2xl border p-6 mb-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-xl">📍</span>
              <div>
                <div className="font-medium">EPIC Innovation Centre</div>
                <a href={NEXT_EVENT.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)" }}>
                  78-100 Manchester St, Christchurch Central →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🍺</span>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                Drinks & networking 5:30–6:00 PM · Talks 6:00–7:30 PM · Open Q&A until 8:00 PM<br />
                Sponsored by <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors">AI Coaching Academy</a>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">May Talks</h3>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {NEXT_EVENT.talks.map((talk) => (
              <div key={talk.speaker} className="rounded-2xl border p-6 transition-all hover:border-green-700"
                style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--accent)" }}>
                  Speaker
                </div>
                <div className="font-bold text-lg mb-2">{talk.speaker}</div>
                <div className="text-sm leading-relaxed mb-3" style={{ color: "var(--foreground)" }}>
                  {talk.title}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{talk.bio}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={NEXT_EVENT.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#060d06" }}
            >
              RSVP on Meetup — Free
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-20 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              About
            </div>
            <h2 className="text-3xl font-bold mb-6">Christchurch's AI Community</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                The <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup brings together developers,
                business leaders, researchers, and curious minds to explore what's happening in AI — practically, ethically, and locally.
              </p>
              <p>
                We meet on the <strong className="text-white">First Monday of every month</strong> at{" "}
                <strong className="text-white">EPIC Innovation Centre</strong> in Christchurch's CBD.
                Each event features two speakers, drinks, and plenty of time to connect with the people building
                the future of AI in Canterbury and beyond.
              </p>
              <p>
                Topics range from AI governance and machine learning to practical tools, business automation,
                and the social impact of artificial intelligence in New Zealand. No jargon required — we welcome
                everyone from beginners to experts.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "AI governance & ethics",
                "Machine learning & LLMs",
                "AI for business",
                "Practical tools & demos",
                "NZ AI ecosystem",
                "Responsible AI",
              ].map((topic) => (
                <div key={topic}
                  className="rounded-xl border px-4 py-3 text-sm text-center"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community / Who attends */}
        <section id="community" className="px-6 py-20 max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Community
          </div>
          <h2 className="text-3xl font-bold mb-4">Who comes to Christchurch AI?</h2>
          <p className="mb-12" style={{ color: "var(--text-muted)" }}>
            A room full of people doing interesting things with AI in Canterbury.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "💼",
                title: "Business Leaders",
                desc: "Exploring how AI can improve operations, marketing, and decision-making in their organisations.",
              },
              {
                emoji: "🛠️",
                title: "Builders & Developers",
                desc: "Building with LLMs, automation tools, and AI-powered products for New Zealand and global markets.",
              },
              {
                emoji: "🎓",
                title: "Researchers & Educators",
                desc: "From University of Canterbury to Lincoln — academics connecting with the local AI ecosystem.",
              },
              {
                emoji: "🚀",
                title: "Founders & Startups",
                desc: "Christchurch's growing startup scene exploring AI as a core part of their product strategy.",
              },
              {
                emoji: "🤔",
                title: "Curious Beginners",
                desc: "No background required. Just bring your questions and an open mind.",
              },
              {
                emoji: "🌏",
                title: "NZ AI Ecosystem",
                desc: "Connect with the wider AI Forum NZ network and Canterbury Tech community.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6"
                style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <div className="font-semibold mb-2">{item.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            It's free. It's monthly. It's the best room in Christchurch for AI conversations.
          </p>
          <a
            href={NEXT_EVENT.meetupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#060d06" }}
          >
            Join on Meetup — Free
          </a>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
            Sponsored by <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-white transition-colors">AI Coaching Academy</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</span>
              {" "}· Monthly meetups at EPIC Innovation, Canterbury, New Zealand
            </div>
            <div className="flex items-center gap-6">
              <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors">Meetup</a>
              <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors">AI Coaching Academy</a>
              <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors">OpenClaws</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
