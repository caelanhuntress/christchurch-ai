import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const PAST_EVENTS = [
  {
    slug: "april-ai-meetup-vibe-coding-web-apps-2026",
    title: "Vibe Coding & Web App Development with AI",
    date: "Monday, 6 April 2026",
    speakers: ["Greg Dickson", "Caelan Huntress"],
    image: "https://secure.meetupstatic.com/photos/event/8/3/7/d/highres_532593661.webp?w=1080",
    description: "Greg Dickson on turning SOPs into working web apps with Manis, plus Caelan Huntress on vibe coding with Claude, agents, skills, and live app demos.",
  },
  {
    slug: "ai-image-video-generation-march-2026",
    title: "AI Multimedia: Image Generation & Video Generation",
    date: "Monday, 2 March 2026",
    speakers: ["Caelan Huntress", "Arthur Machado"],
    image: "/images/past-event-march-2026.jpg",
    description: "A hands-on exploration of AI image and video generation — from Ghibli-style transformations to live demos with Sora, Gemini, and ChatGPT.",
  },
  {
    slug: "ai-data-testing-coaching-feb-2026",
    title: "AI & Data Testing + Create a Coaching Relationship with AI",
    date: "Monday, 2 February 2026",
    speakers: ["Hamish Watson", "Caelan Huntress"],
    image: "/images/past-event-feb-2026.jpg",
    description: "Hamish Watson on why good AI requires good data, plus Caelan Huntress on building a genuine coaching relationship with AI — including personality profiles and the coaching container.",
  },
  {
    slug: "ai-reasoning-context-engineering-dec-2025",
    title: "AI Reasoning & Context Engineering",
    date: "Monday, 1 December 2025",
    speakers: ["Andy Masters", "Caelan Huntress"],
    image: "/images/past-event-dec-2025.jpg",
    description: "Andy Masters on tiny recursive reasoning models and the festive Christmas tree packing Kaggle challenge — with live audience participation. Plus Caelan Huntress on context engineering and the PILLARS framework.",
  },
];

export default function PastEventsPage() {
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
          {PAST_EVENTS.map((event) => (
            <Link key={event.slug} href={`/past-events/${event.slug}`}
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
                    {event.speakers.join(" · ")}
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
