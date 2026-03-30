import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AgentCamp Christchurch 2026 — What We Learned — Christchurch AI",
  description: "A recap of AgentCamp Christchurch 2026 — 100 attendees, 12 speakers, Microsoft MVPs, and a full day of AI agents, context engineering, and practical applications at Ara Institute.",
  keywords: ["AgentCamp Christchurch 2026", "AI event Christchurch", "AI agents New Zealand", "context engineering NZ", "GlobalAICommunity Christchurch"],
  alternates: { canonical: "https://christchurch-ai.com/blog/agentcamp-christchurch-2026" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AgentCamp Christchurch 2026 — What We Learned",
  "description": "A recap of AgentCamp Christchurch 2026 — 100 attendees, 12 speakers including 6 Microsoft MVPs, and a full day on AI agents and practical applications.",
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
          Join the Community →
        </a>
      </nav>
      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>7 March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AgentCamp Christchurch 2026 — What We Learned</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            On Saturday 7 March, <strong className="text-white">100 people</strong> gathered at{" "}
            <strong className="text-white">Ara Institute (DLECT / K Block)</strong> for AgentCamp Christchurch — a free,
            community-driven day of learning about AI agents, tools, and practical applications. The event sold out weeks
            in advance and brought together developers, Microsoft MVPs, and AI practitioners from across the South Island.
          </p>

          <p>
            AgentCamp is part of the{" "}
            <a href="https://globalai.community/agentcamp" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#004aad" }}>
              Global AI Community's AgentCamp series
            </a>{" "}
            — free events running in cities worldwide from February to June 2026. The Christchurch event was organised by{" "}
            <strong className="text-white">Steve Knutson</strong> (Microsoft MVP, Director at Stratos Technology Partners),
            continuing the tradition he established with Code Camp Christchurch.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>The Day in Brief</h2>

          <p>
            Twelve speakers took the stage across the full day, including six Microsoft MVPs spanning Power Platform,
            Software Development, and AI. The sessions ranged from hands-on agent demos to strategic takes on where
            agentic AI is headed.
          </p>

          <p>
            One of the day's talks — <em>Context Engineering: The Key to Agentic Design</em> — was delivered by{" "}
            <strong className="text-white">Caelan Huntress</strong>, who organises the{" "}
            <Link href="/" className="underline" style={{ color: "#004aad" }}>Christchurch AI monthly meetup</Link>. The talk argued that
            as AI agents become more capable, the limiting factor isn't the model — it's how well operators structure
            the information, instructions, and context that agents work with.
          </p>

          <blockquote className="border-l-4 pl-4 italic my-6" style={{ borderColor: "var(--accent)", color: "var(--text-muted)" }}>
            "The gap between a good AI operator and a great one isn't the tools they use — it's how well they engineer
            the context those tools work within."
          </blockquote>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Key Themes</h2>

          <p>
            A few themes ran through multiple sessions across the day:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-2">
            <li>
              <strong className="text-white">Agents are moving from demos to deployment.</strong>{" "}
              The conversation has shifted from "what can agents do?" to "how do we run them reliably in production?"
              Orchestration, error handling, and human-in-the-loop design featured heavily.
            </li>
            <li>
              <strong className="text-white">Microsoft's Power Platform is deeply agent-integrated.</strong>{" "}
              For enterprise NZ organisations already on Microsoft 365, Copilot Studio and Power Automate are becoming
              serious agent-building platforms — no Python required.
            </li>
            <li>
              <strong className="text-white">Context is the new prompt engineering.</strong>{" "}
              Multiple speakers echoed the idea that structuring what agents know — memory, tools, instructions,
              retrieved data — matters more than prompt wording.
            </li>
            <li>
              <strong className="text-white">Community beats solo learning.</strong>{" "}
              The hallway conversations were as valuable as the sessions. AI is moving too fast for any one person
              to keep up alone — the people in the room collectively know far more than any individual.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>What This Means for Christchurch's AI Scene</h2>

          <p>
            A sold-out event with 100 attendees on a Saturday is a signal: Christchurch has a serious, growing AI
            community that isn't waiting for Wellington or Auckland to lead. The people building, deploying, and
            experimenting with AI agents are here — and they're connecting with each other.
          </p>

          <p>
            AgentCamp sits in a different part of the ecosystem to the monthly{" "}
            <Link href="/" className="underline" style={{ color: "#004aad" }}>Christchurch AI meetup</Link> — it skews more toward
            developers and Microsoft stack practitioners, while our meetup tends to include more business leaders,
            educators, and sector-specific practitioners. Both serve the same underlying goal: helping Canterbury's
            AI community learn, connect, and build.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Get Involved</h2>

          <p>
            If you were at AgentCamp and want to stay connected with Canterbury's broader AI community, the{" "}
            <Link href="/" className="underline" style={{ color: "#004aad" }}>Christchurch AI monthly meetup</Link> runs at
            <strong className="text-white">EPIC Innovation Centre</strong> as a regular monthly event.
            Our next event is <strong className="text-white">Monday 4 May 2026</strong>.
          </p>

          <p>
            We're also calling for speakers for our <strong className="text-white">TechWeek 2026 AI Conference</strong>{" "}
            at EPIC Innovation. If you've got something worth sharing with Canterbury's AI community,{" "}
            <a href="https://sessionize.com/christchurch-ai-techweek-conference/" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: "#004aad" }}>submit a talk proposal</a>.
          </p>

          <div className="mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Follow the conversation:{" "}
              <a href="https://twitter.com/search?q=%23AgentCamp&src=hashtag_click" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#004aad" }}>#AgentCamp</a>{" "}
              ·{" "}
              <a href="https://twitter.com/search?q=%23GlobalAICommunity&src=hashtag_click" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#004aad" }}>#GlobalAICommunity</a>
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}
