import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TechWeek 2026 Christchurch — AI Conference at EPIC Innovation",
  description: "Christchurch AI is hosting a TechWeek 2026 conference event. Find out what's on, how to attend, and how to apply to speak at Canterbury's biggest AI event of the year.",
  keywords: ["TechWeek 2026 Christchurch", "AI conference New Zealand 2026", "TechWeek NZ AI", "Canterbury tech events 2026", "AI conference Christchurch"],
  alternates: { canonical: "https://christchurch-ai.com/blog/techweek-2026-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TechWeek 2026 Christchurch — AI Conference at EPIC Innovation",
  "description": "Christchurch AI is hosting a TechWeek 2026 event. Find out what's on and how to apply to speak.",
  "url": "https://christchurch-ai.com/blog/techweek-2026-christchurch",
  "datePublished": "2026-03-06",
  "publisher": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
  "author": { "@type": "Person", "name": "Caelan Huntress", "url": "https://caelanhuntress.com" },
};

export default function Post() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://sessionize.com/christchurch-ai-techweek-conference/" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Apply to Speak →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">TechWeek 2026 Christchurch — AI Conference at EPIC Innovation</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            <strong className="text-white">TechWeek NZ</strong> is New Zealand's largest technology festival —
            a nationwide series of events each May bringing together founders, researchers, executives, and technologists
            across Auckland, Wellington, Christchurch, and beyond.
          </p>
          <p>
            This year, <strong className="text-white">Christchurch AI</strong> is hosting an official TechWeek 2026 conference
            event right here in Canterbury. It will be held at <strong className="text-white">EPIC Innovation Centre</strong> —
            the same venue where we run our monthly meetups — and it will be our biggest event of the year.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Is TechWeek?</h2>
          <p>
            TechWeek NZ runs every May and draws thousands of attendees to hundreds of events around the country.
            Events are independently organised under the TechWeek banner — which means the Christchurch AI conference
            is curated specifically for Canterbury's community, not a watered-down copy of what happens in Auckland.
          </p>
          <p>
            Our TechWeek event will focus on <strong className="text-white">practical AI</strong> — real applications,
            honest lessons from deployment, and the tools and approaches that are actually working in 2026.
            Less hype. More signal.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to Expect</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white">Multiple speakers</strong> across a full afternoon/evening programme</li>
            <li><strong className="text-white">Live demos</strong> — AI tools in action, not slides about AI tools</li>
            <li><strong className="text-white">Industry perspectives</strong> from builders, researchers, and practitioners</li>
            <li><strong className="text-white">Networking</strong> with Canterbury's AI community and visiting technologists</li>
            <li><strong className="text-white">Free to attend</strong> — as always, Christchurch AI events are open and free</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">When and Where</h2>
          <div className="rounded-2xl border p-5 space-y-3" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="flex gap-3">
              <span>📅</span>
              <div>
                <div className="font-semibold text-white text-sm">May 2026</div>
                <div className="text-sm">During TechWeek NZ — exact date to be confirmed</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span>📍</span>
              <div>
                <div className="font-semibold text-white text-sm">EPIC Innovation Centre</div>
                <div className="text-sm">78–100 Manchester St, Christchurch Central</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span>🎟️</span>
              <div>
                <div className="font-semibold text-white text-sm">Free to attend</div>
                <div className="text-sm">RSVP via <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Meetup</a> when registrations open</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Call For Speakers</h2>
          <p>
            Speaker applications are open now. We are looking for people working in AI who have something
            concrete to share — a project, a finding, a hard lesson, a live demo.
          </p>
          <p>
            This is a higher-profile opportunity than our regular monthly meetups. TechWeek draws attention
            from national media, investors, and the broader NZ tech ecosystem. If you have been waiting for
            the right moment to put your work in front of a bigger audience, this is it.
          </p>
          <p>
            We welcome applications from:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Researchers at Canterbury universities and Crown Research Institutes</li>
            <li>Founders and engineers building AI products</li>
            <li>Business leaders who have deployed AI at scale</li>
            <li>First-time speakers with something genuine to say</li>
          </ul>

          <div className="mt-8 rounded-2xl border p-8 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xl font-bold text-white mb-3">Apply to Speak at TechWeek 2026</div>
            <p className="text-sm mb-6">
              Submit your proposal through Sessionize. We review all applications and
              aim to confirm speakers by late March 2026.
            </p>
            <a
              href="https://sessionize.com/christchurch-ai-techweek-conference/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              Submit on Sessionize →
            </a>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Stay in the Loop</h2>
          <p>
            Full programme details, registration links, and speaker announcements will be shared through our
            Meetup group as they are confirmed. The best way to stay updated is to join the community.
          </p>
          <p>
            In the meantime, our regular <strong className="text-white">monthly meetups</strong> continue at EPIC Innovation Centre —
            so if you want to get a feel for the community before TechWeek, come along. We would love to see you.
          </p>

        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>More from Christchurch AI</div>
          <div className="flex flex-col gap-3">
            <Link href="/blog/ai-speaker-christchurch" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              How to Speak at an AI Event in Christchurch →
            </Link>
            <Link href="/blog/ai-events-christchurch" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              AI Events in Christchurch: What's On in 2026 →
            </Link>
            <Link href="/blog/ai-community-new-zealand" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              The State of New Zealand's AI Community →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
