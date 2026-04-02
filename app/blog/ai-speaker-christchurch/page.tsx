import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Speak at an AI Event in Christchurch — Christchurch AI",
  description: "Want to share your AI work with Canterbury's tech community? Here's how to apply to speak at the Christchurch AI meetup and TechWeek 2026.",
  keywords: ["AI speaker Christchurch", "speak at AI event NZ", "AI conference Christchurch 2026", "TechWeek Christchurch speaker", "AI meetup speaker"],
  alternates: { canonical: "https://christchurch-ai.com/blog/ai-speaker-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Speak at an AI Event in Christchurch",
  "description": "A guide to applying to speak at the Christchurch AI meetup and TechWeek 2026.",
  "url": "https://christchurch-ai.com/blog/ai-speaker-christchurch",
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
        <a href="#apply" className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Speaking Expression of Interest →
        </a>
      </nav>
      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">How to Speak at an AI Event in Christchurch</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            Canterbury has a growing AI community — and it needs more people willing to share what they know.
            If you are doing something interesting with artificial intelligence, we want to hear about it.
          </p>
          <p>
            This is a guide to how speaking at <strong className="text-white">Christchurch AI</strong> works,
            what we look for in speakers, and how to apply.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Why Speak at Christchurch AI?</h2>
          <p>
            The Christchurch AI meetup runs as a <strong className="text-white">monthly event</strong> at
            EPIC Innovation Centre. Our audience is a mix of business leaders, developers, researchers, and curious
            beginners — people who are actively using AI or trying to figure out how to.
          </p>
          <p>
            Speaking here gives you:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>A room of <strong className="text-white">engaged, knowledgeable people</strong> who actually care about AI</li>
            <li>Exposure across the <strong className="text-white">Canterbury Tech and AI Forum NZ</strong> networks</li>
            <li>A chance to get real feedback on your work from practitioners</li>
            <li>A recording or writeup you can share (when available)</li>
            <li>Drinks — we sponsor every event, so it is genuinely social</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>What We Look For</h2>
          <p>
            We are not looking for polished keynote performers. We are looking for people with something
            real to say. Here are the three types of talks that go down best:
          </p>

          <div className="rounded-2xl border p-5 space-y-4 my-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div>
              <div className="font-semibold text-white mb-1">🛠️ Builder talks</div>
              <div className="text-sm">You built something with AI. Show us how it works, what went wrong, what surprised you.
              Demos are great. Live demos are even better (just have a backup).</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">🔬 Research talks</div>
              <div className="text-sm">You have studied something. Share your findings, your framework, your methodology.
              Academic and industry research both welcome.</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">💼 Practitioner talks</div>
              <div className="text-sm">You deployed AI in a real organisation and lived to tell the tale. What worked,
              what did not, what you would do differently.</div>
            </div>
          </div>

          <p>
            We explicitly <strong className="text-white">do not</strong> want:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Vendor pitches or sales presentations</li>
            <li>Vague thought leadership with no substance</li>
            <li>Talks that require the audience to already be experts</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Talk Format</h2>
          <p>
            Talks run <strong className="text-white">20 to 30 minutes</strong> including Q&amp;A. Slides are optional —
            some of our best talks have been whiteboard sessions, live tool demos, or straight conversation.
          </p>
          <p>
            We run two talks per event. If we accept your proposal, we will work with you on timing, AV setup,
            and framing. We want you to succeed.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>TechWeek 2026</h2>
          <p>
            We are also running a <strong className="text-white">Christchurch AI event during TechWeek 2026</strong>.
            This is a larger-format conference with a public programme — a higher-profile opportunity for speakers
            who want broader visibility across the NZ tech ecosystem.
          </p>
          <p>
            Speaker applications for Christchurch AI events and related conference opportunities go through our expression of interest form.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>How to Apply</h2>
          <p>
            We use a simple <strong className="text-white">speaker expression of interest form</strong> to collect and review submissions.
            It only takes a few minutes to complete.
          </p>
          <p>
            Tell us:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>What your talk is about (one clear sentence)</li>
            <li>Why this audience should care</li>
            <li>What type of talk it is (builder / research / practitioner)</li>
            <li>Whether you have spoken publicly before (not required — everyone starts somewhere)</li>
          </ul>

          <div id="apply" className="mt-10 rounded-2xl border p-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-2xl font-bold text-white mb-3 text-center">Ready to apply?</div>
            <p className="text-sm mb-6 text-center">
              Submit your Christchurch AI speaking expression of interest below. We review all submissions and
              get back to you within two weeks.
            </p>
            <div className="rounded-xl overflow-hidden" style={{ background: "#ffffff" }}>
              <iframe
                src="https://airtable.com/embed/appQyJddzvOGyNk4P/pag8cOvHrSNIpE2vd/form"
                width="100%"
                height="1180"
                frameBorder="0"
                style={{ background: "transparent", border: 0 }}
                title="Christchurch AI Speaking Expression of Interest"
              />
            </div>
            <div className="mt-4 text-center text-sm" style={{ color: "var(--text-muted)" }}>
              If the embedded form doesn’t load for you, use this direct link:{" "}
              <a
                href="https://airtable.com/appQyJddzvOGyNk4P/pag8cOvHrSNIpE2vd/form"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Christchurch AI Speaking Expression of Interest
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Questions?</h2>
          <p>
            If you are not sure whether your topic is a good fit, reach out before submitting.
            You can find us on{" "}
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-white transition-colors">Meetup</a>{" "}
            or email via{" "}
            <a href="https://caelanhuntress.com" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-white transition-colors">caelanhuntress.com</a>.
            We are a friendly group and we actively encourage first-time speakers.
          </p>
          <p>
            The AI community in Canterbury is still small enough that one good talk can meaningfully
            shift how people think. We would love to have yours.
          </p>

        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>More from Christchurch AI</div>
          <div className="flex flex-col gap-3">
            <Link href="/blog/what-is-christchurch-ai" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              What Is Christchurch AI? →
            </Link>
            <Link href="/blog/ai-community-new-zealand" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              The State of New Zealand's AI Community →
            </Link>
            <Link href="/blog/ai-events-christchurch" className="text-sm hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
              AI Events in Christchurch: What's On in 2026 →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
