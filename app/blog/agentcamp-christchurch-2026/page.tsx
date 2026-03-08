import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AgentCamp Christchurch 2026 — What We Learned | Christchurch AI",
  description: "100 people. 12 speakers. 6 Microsoft MVPs. One sold-out Saturday. Here's what AgentCamp Christchurch 2026 revealed about the state of AI agents in New Zealand.",
  keywords: ["AgentCamp Christchurch", "AI agents NZ", "AI events Christchurch 2026", "Microsoft MVP AI", "AI community Canterbury", "context engineering"],
  alternates: { canonical: "https://christchurch-ai.com/blog/agentcamp-christchurch-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AgentCamp Christchurch 2026 — What We Learned",
  "description": "A recap of AgentCamp Christchurch 2026 — 100 attendees, 12 speakers, and what it revealed about Canterbury's growing AI community.",
  "url": "https://christchurch-ai.com/blog/agentcamp-christchurch-2026",
  "datePublished": "2026-03-07",
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
        <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Join Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026 · Event Recap</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AgentCamp Christchurch 2026 — What We Learned</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            On Saturday 7 March, 100 people gathered at Ara Institute (DLECT / K Block) for
            AgentCamp Christchurch — a free, community-driven day of learning about AI agents,
            tools, and practical applications. The event sold out weeks in advance and brought
            together developers, Microsoft MVPs, and AI practitioners from across the South Island.
          </p>
          <p>
            AgentCamp is part of the Global AI Community&apos;s AgentCamp series — free events running
            in cities worldwide from February to June 2026. The Christchurch event was organised
            by Steve Knutson (Microsoft MVP, Director at Stratos Technology Partners), continuing
            the tradition he established with Code Camp Christchurch.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Day in Brief</h2>
          <p>
            Twelve speakers took the stage across the full day, including six Microsoft MVPs
            spanning Power Platform, Software Development, and AI. The sessions ranged from
            hands-on agent demos to strategic takes on where agentic AI is headed.
          </p>
          <p>
            One of the day&apos;s talks — <em>Context Engineering: The Key to Agentic Design</em> — was
            delivered by Caelan Huntress, who organises the Christchurch AI monthly meetup. The
            talk argued that as AI agents become more capable, the limiting factor isn&apos;t the model —
            it&apos;s how well operators structure the information, instructions, and context that agents
            work with.
          </p>
          <blockquote className="border-l-4 pl-5 italic" style={{ borderColor: "var(--accent)" }}>
            &quot;The gap between a good AI operator and a great one isn&apos;t the tools they use — it&apos;s
            how well they engineer the context those tools work within.&quot;
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Key Themes</h2>
          <p>A few themes ran through multiple sessions across the day:</p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h3 className="font-bold text-white mb-2">Agents are moving from demos to deployment</h3>
              <p>
                The conversation has shifted from &quot;what can agents do?&quot; to &quot;how do we run them
                reliably in production?&quot; Orchestration, error handling, and human-in-the-loop
                design featured heavily.
              </p>
            </div>
            <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h3 className="font-bold text-white mb-2">Microsoft&apos;s Power Platform is deeply agent-integrated</h3>
              <p>
                For enterprise NZ organisations already on Microsoft 365, Copilot Studio and
                Power Automate are becoming serious agent-building platforms — no Python required.
              </p>
            </div>
            <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h3 className="font-bold text-white mb-2">Context is the new prompt engineering</h3>
              <p>
                Multiple speakers echoed the idea that structuring what agents know — memory,
                tools, instructions, retrieved data — matters more than prompt wording.
              </p>
            </div>
            <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h3 className="font-bold text-white mb-2">Community beats solo learning</h3>
              <p>
                The hallway conversations were as valuable as the sessions. AI is moving too fast
                for any one person to keep up alone — the people in the room collectively know far
                more than any individual.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What This Means for Christchurch&apos;s AI Scene</h2>
          <p>
            A sold-out event with 100 attendees on a Saturday is a signal: Christchurch has a
            serious, growing AI community that isn&apos;t waiting for Wellington or Auckland to lead.
            The people building, deploying, and experimenting with AI agents are here — and
            they&apos;re connecting with each other.
          </p>
          <p>
            AgentCamp sits in a different part of the ecosystem to the monthly Christchurch AI
            meetup — it skews more toward developers and Microsoft stack practitioners, while our
            meetup tends to include more business leaders, educators, and sector-specific
            practitioners. Both serve the same underlying goal: helping Canterbury&apos;s AI community
            learn, connect, and build.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Get Involved</h2>
          <p>
            If you were at AgentCamp and want to stay connected with Canterbury&apos;s broader AI
            community, the Christchurch AI monthly meetup runs on the First Monday of every month
            at EPIC Innovation Centre.
          </p>
          <p>
            We&apos;re also calling for speakers for our TechWeek 2026 AI Conference at EPIC Innovation.
            If you&apos;ve got something worth sharing with Canterbury&apos;s AI community,{" "}
            <a href="https://sessionize.com/christchurch-ai-techweek-2026" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}>submit a talk proposal</a>.
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
