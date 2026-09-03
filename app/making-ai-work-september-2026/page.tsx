import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const meetupUrl = "https://www.meetup.com/christchurch-ai/events/315884707/";

export const metadata: Metadata = {
  title: "September AI Meetup - Making AI Work: Judgment, Experiments, & ROI | Christchurch AI",
  description:
    "Christchurch AI meetup September 2026: Pamela Simpson on human judgement in an AI world, plus Dan Randow on disciplined AI experiments, risk, and time to ROI.",
  keywords: [
    "Christchurch AI September 2026",
    "AI experiments Christchurch",
    "human judgement AI",
    "AI ROI",
    "AI meetup Christchurch",
  ],
  openGraph: {
    title: "September AI Meetup - Making AI Work: Judgment, Experiments, & ROI",
    description:
      "Pamela Simpson and Dan Randow at Christchurch AI - Monday 14 September 2026 at EPIC Innovation Centre.",
    images: ["https://christchurch-ai.com/chchai-0926.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "September AI Meetup - Making AI Work: Judgment, Experiments, & ROI",
    description:
      "Christchurch AI meetup - human judgement in an AI world plus practical AI experiments at work.",
    images: ["https://christchurch-ai.com/chchai-0926.jpeg"],
  },
  alternates: { canonical: "https://christchurch-ai.com/making-ai-work-september-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "September AI Meetup - Making AI Work: Judgment, Experiments, & ROI",
  description:
    "Pamela Simpson shares research on human judgement, expertise, accountability, and trust in AI-enabled workplaces, followed by Dan Randow with an interactive simulation on strategic AI experiments, evidence, risk, and time to ROI.",
  startDate: "2026-09-14T17:30:00+12:00",
  endDate: "2026-09-14T20:00:00+12:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: "https://christchurch-ai.com/chchai-0926.jpeg",
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
    { "@type": "Person", name: "Pamela Simpson" },
    { "@type": "Person", name: "Dan Randow" },
  ],
  url: "https://christchurch-ai.com/making-ai-work-september-2026",
  sameAs: meetupUrl,
};

export default function MakingAiWorkSeptember2026() {
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
        <a
          href={meetupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: "var(--accent)", color: "#ffffff" }}
        >
          RSVP Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>
          ← Back to Home
        </Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
          Monthly Meetup - September 2026
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Making AI Work: <br />Judgment, Experiments, &amp; ROI
        </h1>

        <div className="flex flex-col gap-2 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>
              <strong className="text-white">Monday 14 September 2026</strong> - 5:30 PM to 8:00 PM NZST
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
            src="/chchai-0926.jpeg"
            alt="Christchurch AI September 2026 Making AI Work: Judgment, Experiments, and ROI event"
            width={1670}
            height={939}
            className="w-full rounded-xl border mb-8"
            style={{ borderColor: "var(--border)" }}
            priority
          />

          <p>
            September&apos;s Christchurch AI meetup explores how organisations can combine human
            judgement with disciplined AI experimentation. Pamela Simpson will look at expertise,
            accountability, and trust in AI-enabled workplaces, while Dan Randow will put those
            questions into practice through an interactive simulation about choosing AI experiments
            and measuring what matters.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">The Talks</h2>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Human Judgement in an AI World</h3>
            <p className="text-sm font-semibold text-white mb-3">Pamela Simpson - DBA Candidate, University of Otago</p>
            <p>
              Pamela Simpson will share initial insights from her research with 43 subject-matter experts
              across professional, corporate, and government sectors in New Zealand.
            </p>
            <p className="mt-3">
              The session explores the human side of AI adoption: how people decide what to trust,
              what counts as expertise, and how organisations can preserve epistemic integrity,
              professional standards, accountability, and trust.
            </p>
          </div>

          <div className="border rounded-lg p-6" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Talk 2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Experiments at Work: Reducing Risk and Time to ROI</h3>
            <p className="text-sm font-semibold text-white mb-3">Dan Randow</p>
            <p>
              Dan Randow will facilitate an interactive simulation of a leadership team inside a typical
              New Zealand organisation. Participants will compare competing AI investments, debate their
              alignment with strategy, and choose a small portfolio of experiments to pursue.
            </p>
            <p className="mt-3">
              The leadership team will also decide what each experiment should measure, so the room can
              watch decisions take shape in real time as participants weigh value, uncertainty, risk,
              evidence, and competing priorities.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Business owners, leaders, managers, consultants, and technologists deciding where to invest in AI</li>
            <li>Professionals thinking seriously about trust, expertise, and accountability with AI</li>
            <li>Teams moving beyond disconnected pilots towards strategic AI experimentation</li>
            <li>People who want clearer evidence before committing more time, money, or attention to AI</li>
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

          <div className="mt-10">
            <a
              href={meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-white text-lg"
              style={{ background: "var(--accent)" }}
            >
              RSVP on Meetup - It&apos;s Free →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="font-semibold text-white mb-3">Also Coming Up</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/building-with-ai-october-2026" className="text-white underline">
                  October 12 - Building with AI: Speed, Structure &amp; Scale
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
