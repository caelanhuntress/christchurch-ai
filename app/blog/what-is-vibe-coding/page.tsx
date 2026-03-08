import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Vibe Coding? Building Software by Conversation | Christchurch AI",
  description: "Vibe coding lets you build software by describing what you want — no programming knowledge required. Here's what it is, what you can build, and how to see it live in Christchurch.",
  keywords: ["vibe coding", "vibe coding NZ", "AI software development Christchurch", "Claude vibe coding", "build apps with AI", "no-code AI"],
  alternates: { canonical: "https://christchurch-ai.com/blog/what-is-vibe-coding" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is Vibe Coding? Building Software by Conversation",
  "description": "Vibe coding lets you build software by describing what you want — no programming knowledge required.",
  "url": "https://christchurch-ai.com/blog/what-is-vibe-coding",
  "datePublished": "2026-03-08",
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
        <a href="/vibe-coding-april-2026"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          See It Live April 6 →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">What Is Vibe Coding? Building Software by Conversation</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            There&apos;s a new way to build software. It doesn&apos;t involve learning a programming language,
            setting up a development environment, or spending hours on Stack Overflow. It involves
            sitting down with an AI, describing what you want to build, and watching it appear.
          </p>
          <p>
            The term is <strong className="text-white">vibe coding</strong> — coined by AI researcher Andrej Karpathy earlier
            this year — and it&apos;s changing what it means to be able to &quot;build things with technology.&quot;
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Old Way vs the New Way</h2>
          <p>
            Traditional software development requires you to think like a computer: precise syntax,
            strict logic, no ambiguity. You write instructions the machine can execute. Learning to
            do this well takes years.
          </p>
          <p>
            Vibe coding inverts this. Instead of learning to communicate in the machine&apos;s language,
            you communicate in yours — and the AI translates. You describe the outcome you want,
            the behaviour you&apos;re after, the problem you&apos;re solving. The AI produces the code.
          </p>
          <p>
            That doesn&apos;t mean you disengage. Good vibe coding requires clear thinking about what
            you actually want. You&apos;re the architect; the AI is the builder. The quality of what
            gets built depends heavily on the clarity of your brief.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What You Can Actually Build</h2>
          <p>The range is larger than most people expect. In a single session, working vibe coders are building:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Internal tools — dashboards, trackers, calculators specific to their workflow</li>
            <li>Client-facing web apps — booking systems, intake forms, interactive reports</li>
            <li>Automation scripts — things that previously required hiring a developer</li>
            <li>Prototypes — turning an idea into something clickable in an afternoon</li>
            <li>SOPs converted to software — process documents that become interactive tools</li>
          </ul>
          <p>
            None of these require knowing how to write code. They require knowing what problem
            you&apos;re trying to solve and being able to describe it clearly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Claude Is Particularly Good at This</h2>
          <p>
            Several AI models support vibe coding, but Claude (from Anthropic) has emerged as
            a favourite among practitioners for a few reasons:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>It asks clarifying questions before diving in — reducing wasted iterations</li>
            <li>It explains what it&apos;s building, not just produces output</li>
            <li>It handles ambiguous requirements gracefully rather than making arbitrary assumptions</li>
            <li>Its outputs tend to be clean, readable, and maintainable</li>
          </ul>
          <p>
            The workflow typically looks like: describe what you want → Claude builds a first version
            → you test it and give feedback → Claude refines → repeat until it does what you need.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Vibe Coding Isn&apos;t</h2>
          <p>It&apos;s worth being clear about limitations. Vibe coding works well for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Self-contained tools and apps with clear requirements</li>
            <li>Prototyping and internal tooling</li>
            <li>Automating repetitive processes</li>
          </ul>
          <p>It&apos;s less suited for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Large, complex systems with thousands of interconnected components</li>
            <li>Applications where security and reliability are critical and need expert review</li>
            <li>Situations where you need to understand and maintain the code long-term without AI help</li>
          </ul>
          <p>
            That said — for the vast majority of tools that professionals actually need built,
            vibe coding is now a completely viable approach.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">See It Live in Christchurch</h2>
          <p>
            At our April 6 meetup, Caelan Huntress will demonstrate vibe coding with Claude live —
            building something on stage, from description to working application. Alongside that,
            Greg Dickson will show how to turn Standard Operating Procedures into web apps without
            writing a line of code.
          </p>
          <p>
            If you&apos;ve been curious whether vibe coding could work for your business or role,
            this is the best possible introduction: watching it happen in real time, with someone
            who does it daily, and the chance to ask questions after.
          </p>

          <div className="mt-12 p-6 rounded-2xl border" style={{ borderColor: "var(--accent)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Next Event</div>
            <h3 className="text-xl font-bold mb-1">Vibe Coding &amp; Web App Development with AI</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Monday 6 April 2026 — 5:30 PM, EPIC Innovation Centre<br />
              Greg Dickson + Caelan Huntress — Free to attend
            </p>
            <a href="/vibe-coding-april-2026"
              className="inline-block px-5 py-2 rounded-full text-sm font-medium"
              style={{ background: "var(--accent)", color: "#ffffff" }}>
              Event Details &amp; RSVP →
            </a>
          </div>

        </div>
      </article>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</Link>
        {" "}· Monthly meetups at EPIC Innovation, Canterbury, New Zealand
      </footer>
    </div>
  );
}
