import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI Reasoning & Context Engineering | Christchurch AI — December 2025",
  description: "December 2025 Christchurch AI Meetup: Andy Masters on hierarchical reasoning models and the Christmas tree packing challenge, plus Caelan Huntress on context engineering.",
};

export default function DecEventPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI Reasoning & Context Engineering",
    "startDate": "2025-12-01T17:30:00+13:00",
    "endDate": "2025-12-01T20:00:00+13:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "recordedIn": { "@type": "VideoObject", "embedUrl": "https://www.youtube.com/embed/PG7Pq8F55vM" },
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
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <span>/</span>
            <span style={{ color: "var(--foreground)" }}>December 2025</span>
          </div>

          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Christchurch AI Meetup · December 2025
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            AI Reasoning & Context Engineering
          </h1>
          <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
            Monday, 1 December 2025 · EPIC Innovation Centre, Christchurch
          </p>
          <div className="flex flex-wrap gap-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>🧠 <strong>Andy Masters</strong> — Hierarchical Reasoning Models & the Christmas Tree Packing Challenge</span>
            <span>·</span>
            <span>🎤 <strong>Caelan Huntress</strong> — Context Engineering</span>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ height: "360px" }}>
            <Image
              src="/images/past-event-dec-2025.jpg"
              alt="AI Reasoning & Context Engineering — Christchurch AI December 2025"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Christchurch AI Meetup Recap — December 2025</h2>

            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
              <h3 className="text-xl font-bold mb-3">Hierarchical Reasoning Models: Small AI That Beats the Giants — Andy Masters</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Andy Masters — Lead Solutions Architect at Caitlyn AI — delivered one of the most technically adventurous talks in the meetup's history, weaving together cutting-edge AI research and a festive Kaggle competition: the <strong className="text-black">Santa 2025 Christmas Tree Packing Challenge</strong>.
                </p>
                <p>
                  The challenge: fit as many arbitrarily-rotated Christmas trees as possible into the smallest possible box, solved for 1 to 200 trees. Andy turned this into a live audience participation event, deploying a <strong className="text-black">fully vibe-coded interactive web app</strong> — built entirely through prompting with no hand-written code — that let attendees compete in real time to pack trees manually, with chocolate prizes for the winners.
                </p>
                <p>
                  Behind the game was a rigorous exploration of <strong className="text-black">hierarchical reasoning models (HRMs)</strong> — a class of small, domain-specific AI models that can outperform giant LLMs on abstract reasoning tasks. Andy traced the evolution from a breakthrough October 2025 paper describing a 27-million parameter supervisor/worker model architecture, to a follow-up "Less is More" paper that simplified the approach to just <strong className="text-black">7 million parameters</strong> — doubling performance by making the model recursive rather than hierarchical.
                </p>
                <p>
                  The key insight: by tokenizing problems in their native abstract space rather than encoding everything into English, these tiny models achieve remarkable results. A 7-million parameter recursive reasoning model outperforming Gemini on logic tasks. Running on a consumer GPU. Trainable at home.
                </p>
                <p>
                  Andy's live demo showed a genetic algorithm-based training data generator he'd built to teach a Tiny Recursive Model (TRM) — vibe-coded in Python without writing a single line of code himself — and his position on the Kaggle leaderboard (~600th out of 1,200+) after only generating training data without yet implementing the TRM itself.
                </p>
                <p>
                  His closing message: <em>"It sounds like quite a hard problem and it is — but you can get so far with vibe coding."</em>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
              <h3 className="text-xl font-bold mb-3">Context Engineering: The AI Skill That Actually Matters — Caelan Huntress</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Caelan Huntress — Head of Learning & Enablement at Agentic Intelligence, AI educator and public speaker — closed the evening with a talk on <strong className="text-black">context engineering</strong>: the practice of deliberately shaping the information environment you give an AI to dramatically improve its outputs.
                </p>
                <p>
                  Where most people think of AI capability as a function of the model itself, context engineering flips the perspective: the <strong className="text-black">operator is the bottleneck</strong>. The same model, given richer, better-structured context, produces categorically different results. Learning to craft that context is the core skill of the proficient AI operator.
                </p>
                <p>
                  Caelan introduced his <strong className="text-black">PILLARS framework</strong> — a structured approach to prompt construction that ensures AI has everything it needs to perform at its best: Persona, Intent, Length, Language, Audience, Restrictions, and Style. He demonstrated how applying this framework transforms vague, generic responses into targeted, actionable outputs.
                </p>
                <p>
                  The session also previewed the 2026 calendar — including the February meetup on AI data testing and coaching with AI — and introduced the AI Coaching Power Hours running through January: free weekly Zoom sessions for hands-on AI practice.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways for the NZ AI Community</h2>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <li>🎄 <strong className="text-black">Vibe coding works for serious engineering</strong> — Andy built a full genetic algorithm optimiser and interactive web app without writing a single line of code</li>
              <li>🤏 <strong className="text-black">Tiny models can beat giants</strong> — a 7M parameter recursive reasoning model outperforms Gemini on abstract logic by reasoning in native token space, not English</li>
              <li>🔁 <strong className="text-black">Recursion over hierarchy</strong> — the "Less is More" paper showed that simplifying HRMs to recursive models doubled performance with a fraction of the parameters</li>
              <li>🏗️ <strong className="text-black">Context is the product</strong> — the quality of AI output is a function of the context you give it, not just the model you use</li>
              <li>🎯 <strong className="text-black">PILLARS framework</strong> — Persona, Intent, Length, Language, Audience, Restrictions, Style — a repeatable structure for prompts that actually work</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Watch the Full AI Meetup Recording</h2>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/PG7Pq8F55vM"
                title="AI Reasoning & Context Engineering — Christchurch AI December 2025"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div className="mb-16 text-center">
            <a
              href="https://gait.s3-ap-southeast-2.amazonaws.com/events/slides/chch-ai-1225.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              ⬇ DOWNLOAD THE SLIDES
            </a>
          </div>

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
