import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI & Data Testing + Create a Coaching Relationship with AI | Christchurch AI — February 2026",
  description: "February 2026 Christchurch AI Meetup: Hamish Watson on AI & Data Testing, plus Caelan Huntress on creating a coaching relationship with AI. Recording, slides, and summary.",
};

export default function FebEventPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI & Data Testing + Create a Coaching Relationship with AI",
    "startDate": "2026-02-02T17:30:00+13:00",
    "endDate": "2026-02-02T20:00:00+13:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
        <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.95)" }}>
          <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="/#events" className="hover:text-black transition-colors">Events</Link>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join Free →
            </a>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <span>/</span>
            <span style={{ color: "var(--foreground)" }}>February 2026</span>
          </div>

          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Christchurch AI Meetup · February 2026
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            AI & Data Testing + Create a Coaching Relationship with AI
          </h1>
          <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
            Monday, 2 February 2026 · EPIC Innovation Centre, Christchurch
          </p>
          <div className="flex flex-wrap gap-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>📊 <strong>Hamish Watson</strong> — AI & Data Testing</span>
            <span>·</span>
            <span>🎤 <strong>Caelan Huntress</strong> — Create a Coaching Relationship with AI</span>
          </div>


          {/* Sponsor / backlinks row */}
          <div className="rounded-xl border px-5 py-4 mb-10 text-sm" style={{ borderColor: "var(--border)", background: "var(--muted)", color: "var(--text-muted)" }}>
            Sponsored by the{" "}
            <a href="https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors font-medium">AI Coaching Academy</a>
            {" "}— New Zealand&apos;s home for{" "}
            <a href="https://caelanhuntress.com/training/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors">AI training and upskilling</a>.
            {" "}Hosted by{" "}
            <a href="https://caelanhuntress.com/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors">Caelan Huntress, AI trainer and public speaker in Christchurch</a>.
          </div>

          {/* Featured Image */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ height: "360px" }}>
            <Image
              src="/images/past-event-feb-2026.jpg"
              alt="Christchurch AI Meetup — February 2026"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">AI Meetup Recap: Christchurch, February 2026</h2>

            {/* Talk 1 */}
            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
              <h3 className="text-xl font-bold mb-3">AI & Data Testing in New Zealand — Hamish Watson</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Hamish Watson — dual Microsoft MVP (Data Platform and AI), technologist, and community educator — opened the evening with a compelling argument: <strong className="text-black">you can't have good AI without good data</strong>. The relationship is intrinsic and non-negotiable.
                </p>
                <p>
                  Drawing on a vivid example from 2017, when he spent weeks cleaning and testing data for a University of Canterbury machine learning project, Hamish demonstrated that returning to the same dataset in 2024 with AI assistance reduced that work to <strong className="text-black">minutes</strong>. The exponential improvement wasn't incremental — it was a category shift.
                </p>
                <p>
                  His talk tackled one of the persistent pain points in data engineering: <strong className="text-black">testing production data</strong>. Traditional approaches — copying production, restoring as test, then scrambling with data masking for PII compliance — are cumbersome and error-prone. AI changes this by enabling smarter data generation, automated pattern identification, bias reduction, and practical test-driven development (TDD) workflows for data pipelines.
                </p>
                <p>
                  Hamish made an impassioned case for TDD in data — writing tests before writing code — an approach he's championed since 2018. His live demo showed how AI can now scaffold this process, reducing the friction that has historically made data testing so difficult.
                </p>
                <p>
                  His core message: <em>"It's not going to be AI that replaces us. It's going to be a person who uses AI."</em> — a framing that landed well with the technically-minded crowd.
                </p>
              </div>
            </div>

            {/* Talk 2 */}
            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
              <h3 className="text-xl font-bold mb-3">How to Create a Coaching Relationship with AI — Caelan Huntress</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  <em>Note: The live meetup livestream did not capture Caelan's presentation. The recording below is an expanded replay of the same material, covering additional depth and practical exercises.</em>
                </p>
                <p>
                  Caelan Huntress — AI educator, public speaker, and founder of the AI Coaching Academy — explored how to move beyond treating AI as a search engine and instead build a genuine <strong className="text-black">coaching relationship</strong> with it.
                </p>
                <p>
                  He introduced a spectrum of AI adoption: from <strong className="text-black">dissidents</strong> (actively resistant, eventually obsolete) through novices and explorers to <strong className="text-black">builders</strong> and <strong className="text-black">champions</strong> — people who have achieved a symbiosis with AI and couldn't conceive of working without it. Champions use AI all day every day; builders an hour a day; explorers once or twice a week.
                </p>
                <p>
                  The session introduced the concept of the <strong className="text-black">coaching container</strong> — a structured context you create for your AI that enables it to coach you effectively. This involves feeding personality profiles, personalization data, and your specific goals into the model so it can give targeted, meaningful feedback rather than generic responses.
                </p>
                <p>
                  Practical outcomes from Caelan's AI training workshops: participants reported a <strong className="text-black">65% increase in productivity</strong> and a <strong className="text-black">75% improvement in strategic decision-making</strong>. The key driver? Hands-on practice — not just reading about AI, but getting behind the wheel.
                </p>
                <p>
                  He closed with a challenge to the audience: identify where you sit on the adoption spectrum, and ask yourself what it would take to move one level higher.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways for AI Practitioners in Christchurch</h2>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <li>🗄️ <strong className="text-black">Data quality is the foundation of AI quality</strong> — garbage in, garbage out has never been more true</li>
              <li>⚡ <strong className="text-black">Weeks → minutes</strong> — AI has compressed data cleaning and testing timelines by orders of magnitude</li>
              <li>🧪 <strong className="text-black">Test-driven development for data</strong> — write your tests first, then let AI help you build code to satisfy them</li>
              <li>🎯 <strong className="text-black">The coaching container</strong> — give your AI context about you to get coaching-quality responses, not generic answers</li>
              <li>📈 <strong className="text-black">Move up the adoption ladder</strong> — identify your level (dissident → novice → explorer → builder → champion) and take one step higher</li>
            </ul>
          </div>

          {/* Recording — Hamish's talk */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Watch the Full Christchurch AI Meetup Recording</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Hamish Watson — AI & Data Testing (live from EPIC Innovation)
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/4jKC8-mNfno"
                title="AI & Data Testing — Hamish Watson — Christchurch AI February 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>

            <div className="rounded-2xl border p-5 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <p className="text-sm font-semibold mb-1">📝 Note on Caelan's presentation</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                The live meetup stream did not capture Caelan's talk. The video below is an expanded replay of <em>Create a Coaching Relationship with AI</em>, covering the full material plus additional depth and exercises.
              </p>
            </div>

            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Caelan Huntress — Create a Coaching Relationship with AI (expanded replay)
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/f6ECMcdtpu4"
                title="Create a Coaching Relationship with AI — Caelan Huntress"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* Download slides */}
          <div className="mb-16 text-center">
            <a
              href="https://caelanhuntress.s3.amazonaws.com/events/2026/chchai-0226.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              ⬇ DOWNLOAD THE SLIDES
            </a>
          </div>


          {/* Internal links / related */}
          <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h2 className="text-lg font-bold mb-4">More from Christchurch AI</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>→ <a href="/past-events/ai-image-video-generation-march-2026" className="underline hover:text-black transition-colors">March 2026: AI Image & Video Generation with Caelan Huntress & Arthur Machado</a></li>
              <li>→ <a href="/past-events/ai-reasoning-context-engineering-dec-2025" className="underline hover:text-black transition-colors">December 2025: AI Reasoning & Context Engineering with Andy Masters</a></li>
              <li>→ <a href="/blog/ai-events-christchurch" className="underline hover:text-black transition-colors">All AI events in Christchurch — what to expect at the monthly meetup</a></li>
              <li>→ <a href="/#events" className="underline hover:text-black transition-colors">Upcoming Christchurch AI meetups — RSVP free</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
              Want to level up your AI skills beyond the meetup? Explore{" "}
              <a href="https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">AI coaching and training programmes in New Zealand</a>
              {" "}or browse{" "}
              <a href="https://genaitraining.co.nz/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">generative AI workshops for NZ businesses</a>.
              {" "}Running OpenClaw? Visit{" "}
              <a href="https://openclaws.nz/?utm_source=chch-ai&utm_medium=post&utm_campaign=0226" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">openclaws.nz — personal AI assistants for New Zealand</a>.
            </div>
          </div>

          {/* Back link */}
          <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
            <Link href="/past-events" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors" style={{ color: "var(--accent)" }}>
              ← Back to Past Events
            </Link>
          </div>
        </article>

        <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div><span style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</span> · Monthly meetups at EPIC Innovation, Canterbury, New Zealand</div>
            <div className="flex items-center gap-6">
              <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Meetup</a>
              <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
              <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">AI Coaching Academy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
