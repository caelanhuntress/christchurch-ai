import type { Metadata } from "next";
import Link from "next/link";

const events = [
  {
    slug: "am-workshops",
    eyebrow: "Event 1 of 4",
    time: "9:00 AM – 11:45 AM",
    title: "AM Workshops",
    subtitle: "Learn AI by doing",
    href: "https://events.humanitix.com/epic-ai-conference-am",
    badge: "Hands-on",
    description:
      "Five fast, practical sessions for people who want to use AI more skillfully at work — not just hear theory about it.",
    bullets: [
      "Create your own AI coach with Caelan Huntress",
      "Turn meetings into useful outputs with Hannah Hardy-Jones",
      "Map AI opportunities inside your organisation with Steve Fox",
      "See how nonprofits can use AI effectively with Lois McClintock",
      "Learn filmmaking frameworks for better AI visuals with Arthur Machado",
    ],
    audience: "Best for professionals, founders, operators, nonprofit teams, marketers, and curious learners who want practical takeaways.",
  },
  {
    slug: "coffee-and-jam",
    eyebrow: "Event 2 of 4",
    time: "12:00 PM – 1:15 PM",
    title: "Coffee & Jam",
    subtitle: "Meet the people building Christchurch",
    href: "https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371",
    badge: "Networking",
    description:
      "A relaxed lunchtime founder meetup hosted by Ministry of Awesome, with startup conversations, fresh connections, and light refreshments.",
    bullets: [
      "Christchurch’s longest-running founder meetup",
      "Great if you want real conversations between sessions",
      "Meet entrepreneurs, operators, and ecosystem supporters",
      "Features Emma Humphrey, Nick Latty, and Arindam Bose",
      "Easy on-ramp if you want community as much as content",
    ],
    audience: "Best for founders, operators, community builders, startup-curious professionals, and anyone who values useful room energy.",
  },
  {
    slug: "pm-presentations",
    eyebrow: "Event 3 of 4",
    time: "1:30 PM – 5:00 PM",
    title: "PM Presentations",
    subtitle: "Big ideas, practical lessons, sharper questions",
    href: "https://events.humanitix.com/epic-ai-conference-pm",
    badge: "Talks",
    description:
      "Four substantial talks on operational excellence, AI risk, privacy-preserving infrastructure, and the wider future AI may unlock.",
    bullets: [
      "Varsha Das on why operational excellence becomes the moat",
      "Emma Humphrey on AI self-defence, risk, and solutions",
      "Dr Chandranil Chakraborttii on ghost vectors and AI privacy",
      "Caelan Huntress on the case for a superabundant future",
      "Built for leaders, builders, advisors, and serious AI adopters",
    ],
    audience: "Best for people who need better mental models for adoption, governance, risk, infrastructure, and strategy.",
  },
  {
    slug: "leadership-panel",
    eyebrow: "Event 4 of 4",
    time: "5:30 PM – 7:00 PM",
    title: "Leadership in the Age of AI Panel",
    subtitle: "The leadership conversation people actually need",
    href: "https://events.humanitix.com/epic-ai-conference-panel",
    badge: "Panel",
    description:
      "A closing live conversation about judgment, trust, capability, and what strong leadership looks like when technology changes faster than organisations do.",
    bullets: [
      "Panelists: Anya Anderson, Julie Ryan, Brad Fraser, and Tom Sweeney",
      "Grounded discussion about adoption, trust, and change",
      "Better than another shallow prompt-engineering talk",
      "Designed for executives, founders, managers, consultants, and team leads",
      "A strong closing session for the full conference day",
    ],
    audience: "Best for decision-makers who care about culture, capability, governance, adoption, and leading people through change.",
  },
] as const;

const faq = [
  {
    question: "Do I need to attend all four events?",
    answer:
      "No. This page is built so you can choose your own adventure. Come to one session, stack two or three, or make a full day of it.",
  },
  {
    question: "What’s the smartest combination if I only have half a day?",
    answer:
      "If you want practical skills, choose AM Workshops plus Coffee & Jam. If you want strategic thinking, choose PM Presentations plus the Leadership Panel.",
  },
  {
    question: "Who is this conference for?",
    answer:
      "Professionals, founders, managers, consultants, builders, researchers, educators, nonprofit teams, and curious operators who want substance instead of fluff.",
  },
  {
    question: "Where is everything happening?",
    answer:
      "At EPIC Innovation in Christchurch, with Coffee & Jam also at EPIC. That makes it easy to attend multiple sessions without logistical nonsense.",
  },
] as const;

export const metadata: Metadata = {
  title: "EPIC AI Conference Christchurch — RSVP for 1 to 4 Events | Christchurch AI",
  description:
    "One page for the full EPIC AI Conference day in Christchurch: AM Workshops, Coffee & Jam, PM Presentations, and the Leadership in the Age of AI panel.",
  keywords: [
    "EPIC AI Conference Christchurch",
    "TechWeek AI Christchurch",
    "Christchurch AI conference",
    "EPIC Innovation AI event",
    "AI workshops Christchurch",
    "AI panel Christchurch",
  ],
  alternates: { canonical: "https://christchurch-ai.com/epic-ai-conference" },
  openGraph: {
    title: "EPIC AI Conference Christchurch — Build Your Day",
    description:
      "RSVP for one session or all four: workshops, networking, presentations, and a leadership panel at EPIC Innovation.",
    url: "https://christchurch-ai.com/epic-ai-conference",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
  },
};

const eventSchema = events.map((event, index) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name:
    index === 0
      ? 'EPIC AI Conference - AM Workshops'
      : index === 1
        ? 'Ministry of Awesome: Coffee & Jam'
        : index === 2
          ? 'EPIC AI Conference - PM Presentations'
          : 'EPIC AI Conference - Leadership in the Age of AI Panel',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'EPIC Innovation Centre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '78-100 Manchester Street',
      addressLocality: 'Christchurch',
      addressRegion: 'Canterbury',
      addressCountry: 'NZ',
    },
  },
  url: event.href,
  organizer: {
    '@type': 'Organization',
    name: index === 1 ? 'Ministry of Awesome' : 'Christchurch AI',
    url: index === 1 ? 'https://ministryofawesome.com' : 'https://christchurch-ai.com',
  },
}));

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'EPIC AI Conference Christchurch',
  description:
    'A single planning page for the full EPIC AI Conference day in Christchurch, including workshops, networking, presentations, and the closing panel.',
  url: 'https://christchurch-ai.com/epic-ai-conference',
  publisher: {
    '@type': 'Organization',
    name: 'Christchurch AI',
    url: 'https://christchurch-ai.com',
  },
};

function ButtonBlock() {
  return (
    <div className="rounded-3xl border p-5 md:p-6" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
        RSVP Options
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {events.map((event) => (
          <a
            key={event.slug}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-4 rounded-2xl text-sm font-semibold text-center transition-all hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#ffffff' }}
          >
            RSVP {event.title} →
          </a>
        ))}
      </div>
      <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
        Pick one. Pick two. Stack the whole day. No need to overthink it.
      </p>
    </div>
  );
}

export default function EpicAIConferencePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <nav
        className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: 'var(--border)', background: 'rgba(20,8,14,0.9)' }}
      >
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: 'var(--accent)' }}>
          Christchurch AI
        </Link>
        <a
          href="#rsvp"
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: 'var(--accent)', color: '#ffffff' }}
        >
          Build Your Day ↓
        </a>
      </nav>

      <main>
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ borderColor: 'var(--border)', color: 'var(--accent)', background: 'rgba(0,74,173,0.08)' }}
              >
                TechWeek26 · EPIC Innovation · Christchurch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                EPIC AI Conference.
                <br />
                One page. All four events.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: 'var(--text-muted)' }}>
                On <strong className="text-white">Thursday 21 May</strong>, EPIC turns into a full-day AI experience: practical workshops in the morning,
                Coffee & Jam at lunch, deeper presentations in the afternoon, and a leadership panel to close the day.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--text-muted)' }}>
                If you looked at the Humanitix pages and thought <strong className="text-white">wait, how do these fit together?</strong>, good news:
                this page does the stitching for you. RSVP for <strong className="text-white">one event or all four</strong>, then show up at
                <strong className="text-white"> EPIC Innovation, 78–100 Manchester Street</strong> ready for a genuinely useful day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#rsvp"
                  className="px-8 py-4 rounded-full font-semibold text-base text-center transition-all hover:opacity-90"
                  style={{ background: 'var(--accent)', color: '#ffffff' }}
                >
                  RSVP for 1–4 Events →
                </a>
                <a
                  href="#schedule"
                  className="px-8 py-4 rounded-full font-semibold text-base text-center border transition-all hover:bg-white/5"
                  style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
                >
                  See the Full Schedule ↓
                </a>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: '4', label: 'separate events, one easy plan' },
                  { stat: '1', label: 'venue that makes stacking sessions simple' },
                  { stat: '0', label: 'reason to guess which link to click next' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border p-5"
                    style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}
                  >
                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                      {item.stat}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-4 gap-3 mt-6 text-sm">
                {[
                  '9:00 AM start',
                  '12:00 PM networking reset',
                  '1:30 PM strategy-heavy talks',
                  '5:30 PM leadership panel close',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--text-muted)' }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border p-6 md:p-7 lg:sticky lg:top-24" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
                Quick Decision Guide
              </div>
              <h2 className="text-2xl font-bold mb-4">Choose your version of the day</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p><strong className="text-white">Want practical skills?</strong> Do the AM Workshops.</p>
                <p><strong className="text-white">Want better people in your orbit?</strong> Add Coffee & Jam.</p>
                <p><strong className="text-white">Want sharper thinking?</strong> Stay for the PM Presentations.</p>
                <p><strong className="text-white">Want the leadership conversation?</strong> Finish with the evening panel.</p>
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="text-sm font-semibold text-white mb-3">Best bundles</div>
                <ul className="space-y-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li><strong className="text-white">Builder half-day:</strong> AM Workshops + Coffee & Jam for practical ideas plus strong room energy</li>
                  <li><strong className="text-white">Leader half-day:</strong> PM Presentations + Leadership Panel for governance, strategy, and sharper judgment</li>
                  <li><strong className="text-white">Best networking arc:</strong> Coffee & Jam + PM Presentations + Panel</li>
                  <li><strong className="text-white">Full-send version:</strong> all four events if you want the complete conference experience</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="rsvp" className="px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            <ButtonBlock />
          </div>
        </section>

        <section id="schedule" className="px-6 py-12 md:py-16 border-y" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
              Full Schedule
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build your day at EPIC</h2>
            <p className="text-base md:text-lg max-w-3xl mb-10" style={{ color: 'var(--text-muted)' }}>
              This conference works because it moves through four useful modes: learn, connect, think, then zoom out.
              Start where it fits your calendar, or stack the whole sequence and let the day build momentum for you.
            </p>
            <div className="grid gap-5">
              {events.map((event, index) => (
                <div
                  key={event.slug}
                  className="rounded-3xl border p-6 md:p-7 grid lg:grid-cols-[180px_1fr_auto] gap-6 items-start"
                  style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: 'var(--accent)' }}>
                      {event.eyebrow}
                    </div>
                    <div className="text-2xl font-bold mb-1">{event.time}</div>
                    <div
                      className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mt-2"
                      style={{ background: 'rgba(0,74,173,0.12)', color: 'var(--accent)' }}
                    >
                      {event.badge}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h3>
                    <p className="text-lg mb-4" style={{ color: 'var(--foreground)' }}>
                      {event.subtitle}
                    </p>
                    <p className="leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                      {event.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mb-5">
                      {event.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border px-4 py-3 text-sm leading-relaxed"
                          style={{ borderColor: 'var(--border)', background: 'var(--muted)', color: 'var(--text-muted)' }}
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      <strong className="text-white">Who this is for:</strong> {event.audience}
                    </p>
                  </div>
                  <div className="lg:w-[210px] w-full">
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-5 py-4 rounded-2xl font-semibold text-sm transition-all hover:opacity-90"
                      style={{ background: 'var(--accent)', color: '#ffffff' }}
                    >
                      RSVP {index + 1} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
                Why this day is worth it
              </div>
              <h2 className="text-3xl font-bold mb-5">This is not another vague AI event</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>
                  The strongest conference days do two things at once: they give you useful ideas <strong className="text-white">and</strong>{' '}
                  put you in a room where future conversations start easily. That’s the real value proposition here.
                </p>
                <p>
                  The speaker list helps: Caelan Huntress, Emma Humphrey, Varsha Das, Julie Ryan, Brad Fraser, Arthur Machado,
                  Hannah Hardy-Jones, Steve Fox, Lois McClintock, and more. This is a room with both practical operators and strategic thinkers.
                </p>
                <p>
                  You get hands-on learning in the morning, startup energy over lunch, substantial talks in the afternoon,
                  and a leadership conversation at the end that helps everything else click into place.
                </p>
                <p>
                  In other words: this is a day built for people who want more than AI tourism. You should leave with clearer thinking,
                  better connections, and at least one next move you’ll actually use.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
                If you’re on the fence
              </div>
              <h2 className="text-2xl font-bold mb-5">Here’s the simple answer</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <p>If you want practical AI ideas you can use next week, go.</p>
                <p>If you want better conversations than the usual recycled AI chatter, go.</p>
                <p>If you want to meet the Christchurch people actually doing the work, go.</p>
                <p>If you only have one window free, the page still works: choose the block that matches your goal and register in under a minute.</p>
              </div>
              <div className="mt-6">
                <a
                  href="#rsvp"
                  className="inline-block px-6 py-4 rounded-2xl font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: 'var(--accent)', color: '#ffffff' }}
                >
                  Pick Your Event Mix →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <ButtonBlock />
          </div>
        </section>

        <section className="px-6 py-16 border-t" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-10">A few useful answers</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto rounded-3xl border p-8 md:p-10" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--accent)' }}>
              Final CTA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RSVP for the version of the day you actually want</h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Morning skills. Lunchtime connections. Afternoon substance. Evening leadership.
              Take one slice or the whole cake.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {events.map((event) => (
                <a
                  key={event.slug}
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-4 rounded-2xl font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: 'var(--accent)', color: '#ffffff' }}
                >
                  RSVP {event.title} →
                </a>
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Hosted by <strong className="text-white">Christchurch AI</strong> as part of TechWeek26 at EPIC Innovation.
            </p>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
        <Link href="/" style={{ color: 'var(--accent)' }} className="font-semibold">
          Christchurch AI
        </Link>{' '}
        · AI events at EPIC Innovation, Christchurch, New Zealand
      </footer>
    </div>
  );
}
