import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI in Christchurch — Canterbury's Artificial Intelligence Community",
  description: "Everything happening in AI in Christchurch, New Zealand. Monthly meetups, TechWeek events, speakers, and the Canterbury AI community at EPIC Innovation Centre.",
  keywords: ["AI Christchurch", "artificial intelligence Christchurch NZ", "Christchurch AI community", "AI in Canterbury", "machine learning Christchurch"],
  alternates: { canonical: "https://christchurch-ai.com/ai-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI in Christchurch",
  "description": "Canterbury's artificial intelligence community — monthly meetups, events, and resources.",
  "url": "https://christchurch-ai.com/ai-christchurch",
  "publisher": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
};

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(6,13,6,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#060d06" }}>
          Join Free →
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Canterbury, New Zealand
        </div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AI in Christchurch</h1>
        <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
          Christchurch has a growing artificial intelligence community — researchers, builders, and business
          leaders who are doing real work with AI and gathering regularly to share what they're learning.
        </p>

        <h2 className="text-2xl font-bold mb-4">The Monthly Meetup</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          The <strong className="text-white">Christchurch Artificial Intelligence</strong> meetup runs on the
          First Monday of every month at <strong className="text-white">EPIC Innovation Centre</strong> in the CBD.
          Two speakers, drinks, and real conversation — free to attend, every month.
        </p>
        <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Topics span the full spectrum: AI governance, machine learning, practical tools,
          automation for business, and the social impact of AI in New Zealand. No background required.
        </p>

        <h2 className="text-2xl font-bold mb-4">Who's Building AI in Christchurch</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            { title: "University of Canterbury", desc: "AI and machine learning research across engineering, commerce, and computer science." },
            { title: "Lincoln University", desc: "Agricultural AI, environmental data science, and precision farming technology." },
            { title: "EPIC Innovation Centre", desc: "Canterbury's startup hub — home to AI-first companies and deep tech ventures." },
            { title: "Canterbury Tech", desc: "The regional tech industry body connecting Christchurch's tech sector." },
            { title: "AI Coaching Academy", desc: "Training professionals to become effective AI operators. Based in Christchurch." },
            { title: "Crown Research Institutes", desc: "ESR, Scion, AgResearch and others applying AI to NZ's core industries." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">TechWeek 2026</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Christchurch AI is hosting an official <strong className="text-white">TechWeek NZ 2026</strong> conference
          event in May — the biggest AI event Canterbury has seen. Speaker applications are open now.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://sessionize.com/christchurch-ai-techweek-conference/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#060d06" }}>
            Apply to Speak at TechWeek →
          </a>
          <Link href="/blog/techweek-2026-christchurch"
            className="px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
            Learn More →
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <div className="space-y-3">
          {[
            { href: "/blog/what-is-christchurch-ai", label: "What Is Christchurch AI? — The full story" },
            { href: "/blog/ai-events-christchurch", label: "AI Events in Christchurch — What's on in 2026" },
            { href: "/blog/ai-community-new-zealand", label: "How Christchurch fits into the national AI picture" },
            { href: "/blog/ai-speaker-christchurch", label: "How to speak at a Christchurch AI event" },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="block text-sm hover:text-white transition-colors"
              style={{ color: "var(--accent)" }}>
              {link.label} →
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border p-8 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="text-xl font-bold text-white mb-3">Join the community</div>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Free to attend. First Monday of every month. EPIC Innovation Centre, Christchurch.
          </p>
          <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#060d06" }}>
            Join on Meetup — Free
          </a>
        </div>
      </div>

      <footer className="px-6 py-8 border-t text-center text-sm mt-10" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</Link>
        {" "}· Monthly meetups at EPIC Innovation, Canterbury, New Zealand
      </footer>
    </div>
  );
}
