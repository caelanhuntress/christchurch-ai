import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The NZ AI Community: How Christchurch Fits Into the National Picture",
  description: "New Zealand's AI ecosystem is growing fast. Here's how Christchurch's community connects to the national picture — and what makes Canterbury's AI scene unique.",
  keywords: ["AI community New Zealand", "artificial intelligence New Zealand", "Christchurch AI community", "NZ AI ecosystem", "Canterbury AI"],
  alternates: { canonical: "https://christchurch-ai.com/blog/ai-community-new-zealand" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The NZ AI Community: How Christchurch Fits Into the National Picture",
  "url": "https://christchurch-ai.com/blog/ai-community-new-zealand",
  "datePublished": "2026-03-04",
  "publisher": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
};

export default function Post() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <Link href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Join Free
        </Link>
      </nav>
      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">The NZ AI Community: How Christchurch Fits Into the National Picture</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>New Zealand's artificial intelligence ecosystem has matured significantly over the past few years. From government strategy to grassroots meetups, the country is developing its own distinct approach to AI — one that emphasises responsibility, practicality, and local context. Christchurch plays an important role in that story.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>The National Landscape</h2>
          <p>New Zealand's AI community is anchored by the <strong className="text-white">AI Forum NZ</strong>, the country's peak body for artificial intelligence. The Forum brings together researchers, businesses, and government agencies, and publishes regular reports on AI adoption, governance, and opportunity across the country.</p>
          <p>At a government level, New Zealand has been developing an AI strategy that focuses on responsible adoption — positioning the country as a place where AI is used thoughtfully, with particular attention to Treaty of Waitangi obligations and Maori data sovereignty.</p>
          <p>Nationally, AI activity is concentrated in Auckland and Wellington, but the South Island — and Christchurch in particular — has a growing and increasingly confident presence.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>What Makes Christchurch Different</h2>
          <p>Canterbury's AI scene has a few characteristics that make it distinct from the larger northern cities.</p>
          <p><strong className="text-white">It is more practical than theoretical.</strong> The Christchurch community tends to attract people who are building things, implementing AI in real organisations, or trying to solve specific problems. The conversations are grounded.</p>
          <p><strong className="text-white">It has strong academic foundations.</strong> The University of Canterbury has a well-regarded AI research group, and Lincoln University contributes expertise in agricultural and environmental AI applications. That research base feeds into the local practitioner community.</p>
          <p><strong className="text-white">It has produced globally significant companies.</strong> Christchurch-based companies like Custom D — whose AI platform Caitlyn won two regional AWS Partner Awards in 2025 — are building world-class AI technology from the South Island. That kind of success creates local confidence and ambition.</p>
          <p><strong className="text-white">The community is deliberately inclusive.</strong> The Christchurch AI meetup is free, open to everyone, and explicitly welcomes people at all levels of AI knowledge. That access-first approach means the community grows faster and stays more connected to the real world.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Christchurch AI in the National Network</h2>
          <p>The <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup connects directly to the national AI ecosystem. Our events draw speakers from across New Zealand — researchers, founders, and practitioners who bring national and international perspectives to local audiences.</p>
          <p>We are also connected to <strong className="text-white">Canterbury Tech</strong>, the regional technology community organisation, and to the broader AI Forum NZ network. When significant AI events happen nationally — the Aotearoa AI Summit, TechWeek, major research publications — they tend to generate discussion and follow-up conversation in our community.</p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>The Opportunity Ahead</h2>
          <p>New Zealand is well positioned in the global AI landscape — small enough to move quickly, trusted enough to be taken seriously, and with a culture that values both innovation and responsibility. Christchurch, as the South Island's largest city and a growing tech hub, has a real opportunity to become a reference point for how AI is done well at a community level.</p>
          <p>That is what the Christchurch AI meetup is working towards: building a community that is informed, connected, and ready to make the most of what AI makes possible — in Canterbury and beyond.</p>

          <div className="mt-12 rounded-2xl border p-6 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="font-bold text-white text-lg mb-2">Be Part of It</div>
            <p className="text-sm mb-4">Join Christchurch's AI community. Free, monthly, and genuinely worth your time.</p>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-semibold" style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join on Meetup — Free
            </a>
          </div>
        </div>
      </article>
      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</Link> · Monthly meetups at EPIC Innovation, Canterbury, New Zealand
      </footer>
    </div>
  );
}
