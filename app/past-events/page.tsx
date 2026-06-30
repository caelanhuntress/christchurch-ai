import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import { getEventHref, getPastEvents } from "../data/events";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Past AI Events in Christchurch | Christchurch AI",
  description:
    "Browse recordings, slides, and recaps from past Christchurch AI meetups at EPIC Innovation, including sessions on governance, vibe coding, AI media, and context engineering.",
  alternates: {
    canonical: "https://christchurch-ai.com/past-events",
  },
  openGraph: {
    title: "Past AI Events in Christchurch | Christchurch AI",
    description:
      "Recordings, slides, and summaries from previous Christchurch AI meetups in Canterbury, New Zealand.",
    url: "https://christchurch-ai.com/past-events",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
  },
};

export default function PastEventsPage() {
  const pastEvents = getPastEvents();

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <SiteHeader />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Archive</div>
        <h1 className="text-4xl font-bold mb-4">Past Events</h1>
        <p className="mb-12 text-lg" style={{ color: "var(--text-muted)" }}>
          Recordings, slides, and summaries from previous Christchurch AI meetups.
        </p>

        <div className="space-y-8">
          {pastEvents.map((event) => (
            <Link key={event.slug} href={getEventHref(event)}
              className="group block rounded-2xl border overflow-hidden hover:border-blue-300 transition-all"
              style={{ borderColor: "var(--border)" }}>
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0">
                  <Image src={event.image} alt={event.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>{event.date}</div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h2>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{event.description}</p>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {event.talks.map((talk) => talk.speaker).join(" · ")}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="px-6 py-8 border-t text-center text-sm mt-12" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div><span style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</span> · Monthly meetups at EPIC Innovation, Canterbury, New Zealand</div>
          <div className="flex items-center gap-6">
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Meetup</a>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">AI Coaching Academy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
