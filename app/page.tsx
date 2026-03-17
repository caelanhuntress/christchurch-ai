import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const EVENTS = [
  {
    month: "March",
    date: "Tuesday, 24 March 2026",
    time: "12:00 – 1:00 PM NZST",
    title: "OpenClaw User Group — Casual Lunchtime Meetup",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    meetupUrl: "https://www.meetup.com/christchurch-ai/events/313637828/",
    pageUrl: "/openclaw-user-group-march-2026",
    image: "/images/event-march-2026.jpg",
    talks: [
      {
        speaker: "Open Floor — Show & Tell",
        title: "Are you using OpenClaw?",
        bio: "A casual lunchtime gathering for OpenClaw users to share best practices, ideas, and resources. 5–10 minute Show & Tell slots welcome. Bring a bag lunch.",
      },
    ],
  },
  {
    month: "April",
    date: "Monday, 6 April 2026",
    time: "5:30 – 8:00 PM NZST",
    title: "Vibe Coding & Web App Development with AI",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    meetupUrl: "https://www.meetup.com/christchurch-ai/events/313137130/",
    pageUrl: "/vibe-coding-april-2026",
    image: "/images/event-april-2026.jpg",
    talks: [
      {
        speaker: "Greg Dickson",
        title: "From SOP to Web App (No Developers Required)",
        bio: "How non-developers can transform Standard Operating Procedures into fully functional web applications — no coding experience needed.",
      },
      {
        speaker: "Caelan Huntress",
        title: "Vibe Coding with Claude",
        bio: "Build software by describing what you want instead of writing code. Express your ideas naturally and watch them become working software.",
      },
    ],
  },
  {
    month: "May",
    date: "Monday, 4 May 2026",
    time: "5:30 – 8:00 PM NZST",
    title: "AI Governance & AI Literacy Frameworks",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    meetupUrl: "https://meetup.com/christchurch-ai",
    pageUrl: "/ai-governance-may-2026",
    image: "/images/event-may-2026.jpg",
    talks: [
      {
        speaker: "Dr Elsamari Botha",
        title: "Beyond Prompting: Multi-Dimensional AI Literacy and New Operating Models for the AI Era",
        bio: "AI literacy researcher and framework designer.",
      },
      {
        speaker: "Todd Bowman",
        title: "Best Practices for AI Governance Implementation",
        bio: "AI governance and responsible deployment specialist.",
      },
    ],
  },
];

const PAST_TALKS = [
  { speaker: "Dan Randow", topic: "Collective Intelligence & AI", month: "September 2025" },
  { speaker: "Blake Harkness", topic: "AI in the Real World", month: "2025" },
];

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Christchurch Artificial Intelligence",
    "url": "https://christchurch-ai.com",
    "description": "Christchurch's monthly AI meetup community. We host regular meetups at EPIC Innovation Centre.",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre, Christchurch, New Zealand" },
    "sameAs": ["https://meetup.com/christchurch-ai"],
    "sponsor": { "@type": "Organization", "name": "AI Coaching Academy", "url": "https://ai-coaching.academy" },
  };

  const marchSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "OpenClaw User Group — Casual Lunchtime Meetup",
    "startDate": "2026-03-24T12:00:00+13:00",
    "endDate": "2026-03-24T13:00:00+13:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "isAccessibleForFree": true,
    "url": "https://www.meetup.com/christchurch-ai/events/313637828/",
  };

  const aprilSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Christchurch AI Meetup — April 2026: Vibe Coding & Web App Development with AI",
    "startDate": "2026-04-06T17:30:00+12:00",
    "endDate": "2026-04-06T20:00:00+12:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "isAccessibleForFree": true,
    "url": "https://www.meetup.com/christchurch-ai/events/313137130/",
  };

  const maySchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Christchurch AI Meetup — May 2026: AI Governance & AI Literacy Frameworks",
    "startDate": "2026-05-04T17:30:00+12:00",
    "endDate": "2026-05-04T20:00:00+12:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "isAccessibleForFree": true,
    "url": "https://meetup.com/christchurch-ai",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marchSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aprilSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(maySchema) }} />

      <div className="min-h-screen" style={{ background: "var(--background)" }}>

        {/* Nav */}
        <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.95)" }}>
          <div className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</div>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#speak" className="hover:text-white transition-colors">Speak</a>
            <Link href="/past-events" className="hover:text-white transition-colors">Past Events</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ThemeToggle />
            <a
              href="https://meetup.com/christchurch-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              Join Free →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 py-24 text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 border"
            style={{ borderColor: "var(--border)", color: "var(--accent)", background: "rgba(74,222,128,0.05)" }}>
            Monthly meetups · Christchurch, NZ
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Artificial Intelligence<br />
            <span style={{ color: "var(--accent)" }}>in Christchurch</span>
          </h1>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Canterbury's monthly gathering for people building with, thinking about, and curious about AI.
            Speakers, demos, drinks, and real conversations — at EPIC Innovation, every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join the Community — Free
            </a>
            <a href="#events" className="px-8 py-4 rounded-full font-semibold text-base border transition-all hover:bg-white/5"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
              Upcoming Events ↓
            </a>
          </div>
        </section>

        {/* Stats */}
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

        {/* Events */}
        <section id="events" className="px-6 py-20 max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Coming Up
          </div>
          <h2 className="text-3xl font-bold mb-12">Upcoming Meetups</h2>

          <div className="space-y-16">
            {EVENTS.map((event, idx) => (
              <div key={event.month} className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                {/* Event image */}
                <div className="relative w-full" style={{ height: "240px" }}>
                  <Image
                    src={event.image}
                    alt={`${event.month} 2026 Christchurch AI Meetup — ${event.title}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>
                      {event.month} 2026
                    </div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>

                {/* Event details */}
                <div className="p-6" style={{ background: "var(--muted)" }}>
                  <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                    {event.date} · {event.time}
                  </p>

                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-lg">📍</span>
                    <div>
                      <div className="font-medium text-sm">EPIC Innovation Centre</div>
                      <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                        78-100 Manchester St, Christchurch Central →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-lg">🍺</span>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Drinks & networking 5:30–6:00 PM · Talks 6:00–7:30 PM · Open Q&A until 8:00 PM<br />
                      Sponsored by <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors">AI Coaching Academy</a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {event.talks.map((talk) => (
                      <div key={talk.speaker} className="rounded-xl border p-4"
                        style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                        <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Speaker</div>
                        <div className="font-bold mb-1">{talk.speaker}</div>
                        <div className="text-xs leading-relaxed mb-2" style={{ color: "var(--foreground)" }}>{talk.title}</div>
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>{talk.bio}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <a href={event.meetupUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-block px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                      style={{ background: "var(--accent)", color: "#ffffff" }}>
                      RSVP on Meetup — Free
                    </a>
                    {event.pageUrl && (
                      <Link href={event.pageUrl}
                        className="inline-block px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:opacity-90"
                        style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                        Event Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-20 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>About</div>
            <h2 className="text-3xl font-bold mb-6">Christchurch's AI Community</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>The <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup brings together developers, business leaders, researchers, and curious minds to explore what is happening in AI — practically, ethically, and locally.</p>
              <p>We host <strong className="text-white">monthly meetups</strong> at <strong className="text-white">EPIC Innovation Centre</strong>. Each event features two speakers, drinks, and time to connect with the people building the future of AI in Canterbury and beyond.</p>
              <p>Topics range from AI governance and machine learning to practical tools, business automation, and the social impact of artificial intelligence in New Zealand. No jargon required.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {["AI governance & ethics","Machine learning & LLMs","AI for business","Practical tools & demos","NZ AI ecosystem","Responsible AI"].map((topic) => (
                <div key={topic} className="rounded-xl border px-4 py-3 text-sm text-center"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{topic}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Community</div>
          <h2 className="text-3xl font-bold mb-4">Who comes to Christchurch AI?</h2>
          <p className="mb-12" style={{ color: "var(--text-muted)" }}>A room full of people doing interesting things with AI in Canterbury.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "💼", title: "Business Leaders", desc: "Exploring how AI can improve operations, marketing, and decision-making." },
              { emoji: "🛠️", title: "Builders & Developers", desc: "Building with LLMs, automation tools, and AI-powered products." },
              { emoji: "🎓", title: "Researchers & Educators", desc: "From University of Canterbury to Lincoln — academics connecting with the local AI ecosystem." },
              { emoji: "🚀", title: "Founders & Startups", desc: "Christchurch's growing startup scene exploring AI as a core product strategy." },
              { emoji: "🤔", title: "Curious Beginners", desc: "No background required. Just bring your questions and an open mind." },
              { emoji: "🌏", title: "NZ AI Ecosystem", desc: "Connect with the wider AI Forum NZ and Canterbury Tech community." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <div className="font-semibold mb-2">{item.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Host */}
        <section className="px-6 py-20 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Your Host</div>
            <h2 className="text-3xl font-bold mb-10">Meet the Host</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/caelan-huntress.png"
                  alt="Caelan Huntress — AI Trainer and Public Speaker"
                  width={220}
                  height={220}
                  className="rounded-2xl"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Caelan Huntress</h3>
                <div className="text-sm mb-4" style={{ color: "var(--accent)" }}>AI Trainer · Public Speaker · Founder, AI Coaching Academy</div>
                <div className="space-y-3 text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  <p>Caelan started his career as an acrobat in the circus. Now he teaches ambitious professionals how to become great AI operators — combining the skills of a theatrical performer and technical geek to make education genuinely engaging.</p>
                  <p>Classically educated at St John's College in Santa Fe (Great Books programme), he sees the fast-moving world of technology through the lens of the humanities. After a decade as a digital nomad, he now calls Christchurch home.</p>
                  <p>He is the founder of the <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">AI Coaching Academy</a>, author of <em>Marketing Yourself</em>, and the organiser of the Christchurch AI Meetup.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Website", href: "https://caelanhuntress.com" },
                    { label: "AI Coaching Academy", href: "https://ai-coaching.academy" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/caelanhuntress" },
                    { label: "X / Twitter", href: "https://twitter.com/caelanhuntress" },
                    { label: "YouTube", href: "https://www.youtube.com/c/CaelanHuntress" },
                                  ].map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs border transition-all hover:border-blue-500 hover:text-white"
                      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call For Speakers */}
        <section id="speak" className="border-t" style={{ borderColor: "var(--border)" }}>
          {/* Featured image */}
          <div className="w-full overflow-hidden" style={{ maxHeight: "380px" }}>
            <Image
              src="/images/chchai-tw26-bg.png"
              alt="Christchurch AI TechWeek 2026 — Call For Speakers"
              width={1600}
              height={600}
              className="w-full object-cover object-center"
              style={{ maxHeight: "380px" }}
            />
          </div>
          <div className="px-6 py-20 max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Get Involved</div>
            <h2 className="text-3xl font-bold mb-4">Call For Speakers</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              We're always looking for people doing interesting things with AI to share their work with the
              Christchurch community. Whether you're building something, researching something, or have hard-won
              lessons to share — we'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  emoji: "🛠️",
                  title: "Builders & Makers",
                  desc: "Show us what you're building — demos welcome, polish not required.",
                },
                {
                  emoji: "🔬",
                  title: "Researchers",
                  desc: "Share findings, frameworks, or work-in-progress. Academic and industry both welcome.",
                },
                {
                  emoji: "💼",
                  title: "Practitioners",
                  desc: "Real-world AI in your industry — what's working, what's not, what you've learned.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <div className="font-semibold mb-2 text-sm">{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border p-6 mb-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-sm font-semibold mb-3">Talk format</div>
              <ul className="text-sm space-y-2" style={{ color: "var(--text-muted)" }}>
                <li>⏱ <strong className="text-white">25–45 minutes</strong> including Q&A</li>
                <li>📍 <strong className="text-white">In person</strong> at EPIC Innovation Centre, Christchurch</li>
                <li>🎯 Audience ranges from complete beginners to senior engineers — aim for accessible</li>
                <li>💡 Slides optional — demos, walkthroughs, and live tools all work great</li>
              </ul>
            </div>
            <a
              href="https://sessionize.com/christchurch-ai-techweek-conference/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              Submit a Talk on Sessionize →
            </a>
          </div>
        </section>

        {/* Blog teaser */}
        <section className="px-6 py-12 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>Resources</div>
              <div className="font-bold text-lg">Read the Blog</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Insights and perspectives from the Christchurch AI community.</div>
            </div>
            <Link href="/blog" className="px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-white/5 flex-shrink-0"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
              View Blog →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center border-t" style={{ borderColor: "var(--border)" }}>
          <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            It is free. It is monthly. It is the best room in Christchurch for AI conversations.
          </p>
          <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}>
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
            <div><span style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</span> · Monthly meetups at EPIC Innovation, Canterbury, New Zealand</div>
            <div className="flex items-center gap-6">
              <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Meetup</a>
              <Link href="/past-events" className="hover:text-white transition-colors">Past Events</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Coaching Academy</a>
              <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OpenClaws</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
