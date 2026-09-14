import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const slidesUrl =
  "https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/chchai-0926.pdf";

export const metadata: Metadata = {
  title: "Making AI Work: Judgment, Experiments, & ROI | Christchurch AI — September 2026",
  description:
    "Slides and event highlights from Christchurch AI's September 2026 meetup with Pamela Simpson and Dan Randow at EPIC Innovation Centre.",
  alternates: {
    canonical:
      "https://christchurch-ai.com/past-events/making-ai-work-september-2026",
  },
  openGraph: {
    title: "Making AI Work: Judgment, Experiments, & ROI | Christchurch AI",
    description:
      "Slides and event highlights from Christchurch AI's September 2026 meetup.",
    url: "https://christchurch-ai.com/past-events/making-ai-work-september-2026",
    images: ["https://christchurch-ai.com/chchai-0926.jpeg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Making AI Work: Judgment, Experiments, & ROI",
  description:
    "Christchurch AI's September 2026 meetup with Pamela Simpson on human judgement in an AI world and Dan Randow on disciplined AI experiments.",
  startDate: "2026-09-14T17:30:00+12:00",
  endDate: "2026-09-14T20:00:00+12:00",
  eventStatus: "https://schema.org/EventCompleted",
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
  url: "https://christchurch-ai.com/past-events/making-ai-work-september-2026",
};

export default function September2026PastEventPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="flex items-center gap-2 text-sm mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/past-events" className="hover:text-white transition-colors">Past Events</Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>September 2026</span>
        </div>

        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Christchurch AI Meetup · September 2026
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Making AI Work: <br />Judgment, Experiments, &amp; ROI
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
          Monday, 14 September 2026 · EPIC Innovation Centre, Christchurch
        </p>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/chchai-0926.jpeg"
            alt="Christchurch AI September 2026: Making AI Work, Judgment, Experiments, and ROI"
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
            The September slide deck is available to revisit and share. There is no video replay for this event.
          </p>
          <a
            href={slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}
          >
            Download the September slides →
          </a>
        </section>

        <section className="space-y-8 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            September&apos;s Christchurch AI meetup explored a practical question for organisations adopting AI: how to use new capabilities without giving up human judgement, accountable decision-making, or a clear view of return on investment.
          </p>

          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>The talks</h2>

          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 1 · Pamela Simpson</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Human Judgement in an AI World</h3>
            <p>
              Pamela Simpson shared initial insights from her research with subject-matter experts across professional, corporate, and government sectors in New Zealand. The session examined expertise, accountability, trust, and the standards organisations need as AI changes how people decide what to rely on.
            </p>
          </div>

          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Talk 2 · Dan Randow</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>AI Experiments at Work: Reducing Risk and Time to ROI</h3>
            <p>
              Dan Randow led an interactive simulation for choosing strategic AI experiments, balancing alignment, risk, uncertainty, evidence, and value. Participants considered what each experiment should measure before deciding whether to continue, adapt, or stop.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--foreground)" }}>Event gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  src: "/images/september-2026-western-framing.jpg",
                  alt: "September event visual showing a presentation on Western and Indigenous framing",
                },
                {
                  src: "/images/september-2026-epic-rebuild.jpg",
                  alt: "September event visual showing a presenter and an EPIC 2.0 screen",
                },
                {
                  src: "/images/september-2026-indigenous-framing.jpg",
                  alt: "September event visual showing a presentation on Indigenous and Pacific framing",
                },
              ].map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)" }}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        </section>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>More from Christchurch AI</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/building-with-ai-october-2026" className="underline hover:text-white">October 2026: Building with AI — Speed, Structure &amp; Scale</Link></li>
            <li><Link href="/past-events" className="underline hover:text-white">Browse all past events</Link></li>
          </ul>
        </div>
      </article>
    </div>
  );
}
