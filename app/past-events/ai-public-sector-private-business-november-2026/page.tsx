import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const eventUrl = "https://www.meetup.com/christchurch-ai/events/316823655/";
const slidesUrl =
  "https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/chchai-1126.pdf";
const videoUrl = "https://www.youtube.com/embed/IGwPnW6WFCY";
const pageUrl =
  "https://christchurch-ai.com/past-events/ai-public-sector-private-business-november-2026";

export const metadata: Metadata = {
  title:
    "AI in Public Sector & Private Business | Christchurch AI — November 2026",
  description:
    "Recap of Christchurch AI's November 2026 meetup with Cr Joe Davies on AI in the public sector and Blake Harkness on AI-powered business operations.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "AI in Public Sector & Private Business | Christchurch AI",
    description:
      "Christchurch AI's November 2026 meetup with Cr Joe Davies and Blake Harkness.",
    url: pageUrl,
    images: [
      "https://secure.meetupstatic.com/photos/event/4/6/c/6/600_536418118.jpeg",
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "AI in Public Sector & Private Business",
  description:
    "Christchurch AI's November 2026 meetup with Cr Joe Davies on AI in the public sector and Blake Harkness on AI-powered business operations.",
  startDate: "2026-11-09T17:30:00+13:00",
  endDate: "2026-11-09T20:00:00+13:00",
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  image: "https://secure.meetupstatic.com/photos/event/4/6/c/6/600_536418118.jpeg",
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
    { "@type": "Person", name: "Cr Joe Davies" },
    { "@type": "Person", name: "Blake Harkness" },
  ],
  url: pageUrl,
};

export default function November2026PastEventPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/past-events" className="hover:text-white transition-colors">Past Events</Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>November 2026</span>
        </div>

        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Christchurch AI Meetup · November 2026
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          AI in Public Sector &amp; Private Business
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
          Monday, 9 November 2026 · EPIC Innovation Centre, Christchurch
        </p>

        <div className="flex flex-wrap gap-3 mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          <span>🏛️ <strong>Cr Joe Davies</strong> — AI in the Public Sector</span>
          <span>·</span>
          <span>⚙️ <strong>Blake Harkness</strong> — How I Run My Business on AI</span>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="https://secure.meetupstatic.com/photos/event/4/6/c/6/600_536418118.jpeg"
            alt="AI in Public Sector and Private Business — Christchurch AI November 2026"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
            Event resource
          </div>
          <h2 className="text-2xl font-bold mb-3">Download the slides</h2>
          <p className="mb-5" style={{ color: "var(--text-muted)" }}>
            Revisit the presentations from the November meetup, covering AI in the public sector and practical AI-powered business operations.
          </p>
          <a
            href={slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}
          >
            Download the November slides →
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Watch the event replay</h2>
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={videoUrl}
              title="AI in Public Sector & Private Business — Christchurch AI November 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: "none" }}
            />
          </div>
        </section>

        <section className="space-y-8 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            November&apos;s Christchurch AI meetup explored how AI is being put to work across local government and private business, from public experimentation and discussion to an AI-powered back office.
          </p>

          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1 · Cr Joe Davies</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>AI in the Council Chamber: Learning in Public</h2>
            <p className="mb-4">
              Environment Canterbury Councillor Joe Davies chairs the council&apos;s AI Working Group, re-established in May 2026. He shared how personal experimentation led to a public forum where councillors could explore AI, share knowledge, and report insights back into council discussions.
            </p>
            <p>
              The talk covered working within real constraints — no budget or delegated authority, but a council chamber, a livestream, and the ability to make recommendations in public — as well as what AI may mean for local government as its responsibilities and structures evolve.
            </p>
          </div>

          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2 · Blake Harkness</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>How I Run My Businesses on AI</h2>
            <p className="mb-4">
              AI engineer Blake Harkness, founder of Harkness AI and Young Kiwis in AI, shared practical examples from running two ventures with an AI-powered back office. He walked through builds across marketing, accounting, web development, sales, and content.
            </p>
            <p>
              Each example followed the same useful pattern: the problem, what he built, the results, and what comes next — giving attendees a list of ideas they could adapt to their own businesses and workflows.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Event schedule</h2>
            <ul className="space-y-2">
              <li><strong style={{ color: "var(--foreground)" }}>5:30–6:00 pm</strong> — Drinks and networking</li>
              <li><strong style={{ color: "var(--foreground)" }}>6:00–6:45 pm</strong> — Cr Joe Davies: AI in the Public Sector</li>
              <li><strong style={{ color: "var(--foreground)" }}>6:45–7:30 pm</strong> — Blake Harkness: How I Run My Business on AI</li>
              <li><strong style={{ color: "var(--foreground)" }}>7:30–8:00 pm</strong> — Drinks and open Q&amp;A</li>
            </ul>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>More from Christchurch AI</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <li><a href={eventUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">View the original Meetup event listing →</a></li>
            <li><Link href="/past-events" className="underline hover:text-white">Browse all past events</Link></li>
          </ul>
        </div>
      </article>
    </div>
  );
}
