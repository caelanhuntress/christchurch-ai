import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Christchurch AI? Canterbury's Monthly AI Meetup Explained",
  description: "Everything you need to know about the Christchurch Artificial Intelligence meetup — who comes, what happens, and why it is Canterbury's best room for AI conversations.",
  keywords: ["Christchurch AI meetup", "artificial intelligence Christchurch", "AI community Christchurch", "Canterbury AI events"],
  alternates: { canonical: "https://christchurch-ai.com/blog/what-is-christchurch-ai" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is Christchurch AI? Canterbury's Monthly AI Meetup Explained",
  "url": "https://christchurch-ai.com/blog/what-is-christchurch-ai",
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
        <h1 className="text-4xl font-bold mb-6 leading-tight">What Is Christchurch AI? Canterbury's Monthly AI Meetup Explained</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>If you have heard about the <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup and wondered what it actually is, this is your guide.</p>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Short Version</h2>
          <p>Christchurch AI is a <strong className="text-white">free monthly meetup</strong> for anyone interested in artificial intelligence. We meet on the <strong className="text-white">First Monday of every month</strong> at <strong className="text-white">EPIC Innovation Centre</strong> in Christchurch's CBD. Each event features two speakers, drinks, and time to connect with the people building and thinking about AI in Canterbury.</p>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Comes?</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white">Business leaders</strong> exploring practical AI adoption</li>
            <li><strong className="text-white">Developers and engineers</strong> building with LLMs and automation tools</li>
            <li><strong className="text-white">Researchers and academics</strong> from University of Canterbury and Lincoln University</li>
            <li><strong className="text-white">Founders</strong> using AI in their products</li>
            <li><strong className="text-white">Marketers and communicators</strong> navigating AI in their industries</li>
            <li><strong className="text-white">Curious beginners</strong> who just want to understand what is going on</li>
          </ul>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Happens at an Event?</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white">5:30 to 6:00 PM</strong> — Drinks and networking</li>
            <li><strong className="text-white">6:00 to 6:45 PM</strong> — First speaker</li>
            <li><strong className="text-white">6:45 to 7:30 PM</strong> — Second speaker</li>
            <li><strong className="text-white">7:30 to 8:00 PM</strong> — Open Q&A and more networking</li>
          </ul>
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Runs It?</h2>
          <p>The meetup is organised by <strong className="text-white">Caelan Huntress</strong> of the <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">AI Coaching Academy</a>, which sponsors drinks at every event, keeping it free for everyone. The group connects with the <strong className="text-white">AI Forum NZ</strong> and <strong className="text-white">Canterbury Tech</strong> networks.</p>
          <div className="mt-12 rounded-2xl border p-6 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="font-bold text-white text-lg mb-2">Next Meetup: Monday 4 May 2026</div>
            <p className="text-sm mb-4">AI Governance and AI Literacy Frameworks at EPIC Innovation Centre</p>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-semibold" style={{ background: "var(--accent)", color: "#ffffff" }}>
              RSVP on Meetup — Free
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
