import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Governance in NZ: What It Actually Means for Your Organisation | Christchurch AI",
  description: "AI governance isn't just a policy document. Here's what effective AI governance looks like in practice for NZ organisations — and why it matters more than most leaders realise.",
  keywords: ["AI governance NZ", "AI governance New Zealand", "responsible AI NZ", "AI policy NZ organisations", "AI governance framework Christchurch"],
  alternates: { canonical: "https://christchurch-ai.com/blog/ai-governance-nz-organisations" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Governance in NZ: What It Actually Means for Your Organisation",
  "description": "What effective AI governance looks like in practice for NZ organisations.",
  "author": { "@type": "Organization", "name": "Christchurch AI" },
  "publisher": { "@type": "Organization", "name": "Christchurch AI", "url": "https://christchurch-ai.com" },
  "datePublished": "2026-03-08",
  "url": "https://christchurch-ai.com/blog/ai-governance-nz-organisations"
};

export default function AIGovernanceBlog() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
        <Link href="/ai-governance-may-2026"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Governance Meetup May 4 →
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Blog</Link>

        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>

        <h1 className="text-4xl font-bold mb-6 leading-tight">
          AI Governance in NZ:<br />What It Actually Means for Your Organisation
        </h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            Most NZ organisations have now started using AI in some capacity. Many are discovering
            that the harder question isn't how to use AI — it's how to govern it.
          </p>
          <p>
            AI governance is one of those terms that sounds important but often stays abstract.
            Here's a practical take on what it actually means and why it matters.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>What AI Governance Actually Is</h2>
          <p>
            At its core, AI governance is the set of policies, processes, and accountability
            structures that determine <em>how</em> AI is used in your organisation — and who's
            responsible when something goes wrong.
          </p>
          <p>It answers questions like:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Which AI tools are approved for use, and which aren't?</li>
            <li>What data can staff put into AI systems?</li>
            <li>Who reviews AI-generated outputs before they're acted on?</li>
            <li>How do we handle errors or biased outputs from AI?</li>
            <li>Are we compliant with the NZ Privacy Act when using AI on client data?</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Why a Policy Document Isn't Enough</h2>
          <p>
            Many organisations respond to AI governance concerns by writing a policy. That's a start,
            but governance that only exists on paper tends to fail in practice. People don't read
            policies under deadline pressure. Edge cases aren't covered. The policy gets outdated as
            AI tools evolve faster than review cycles.
          </p>
          <p>
            Effective AI governance is embedded in workflows, not just documented in handbooks.
            It means the decision about whether to use AI — and how — is built into the process
            itself, not left to individual judgement in the moment.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>The Three Governance Failures We See Most</h2>

          <div className="space-y-4">
            <div className="border-l-4 pl-4" style={{ borderColor: "var(--accent)" }}>
              <p className="font-semibold text-white">1. Shadow AI adoption</p>
              <p>Staff using personal ChatGPT accounts, consumer tools, or browser extensions
              without organisational knowledge — often putting client data into systems that
              weren't approved and may not be compliant.</p>
            </div>
            <div className="border-l-4 pl-4" style={{ borderColor: "var(--accent)" }}>
              <p className="font-semibold text-white">2. No accountability structure</p>
              <p>When AI makes a mistake — a wrong summary, a biased recommendation, a hallucinated
              fact — it's unclear who's responsible for catching it, correcting it, and ensuring it
              doesn't happen again.</p>
            </div>
            <div className="border-l-4 pl-4" style={{ borderColor: "var(--accent)" }}>
              <p className="font-semibold text-white">3. Governance as friction</p>
              <p>Governance designed primarily to restrict AI use tends to be bypassed. The goal
              should be enabling responsible adoption — making it easy to do the right thing,
              not just hard to do the wrong thing.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>A Starting Framework for NZ Organisations</h2>
          <p>You don't need a 40-page governance framework to start. Three foundations get most organisations most of the way:</p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li><strong className="text-white">Approved tools list</strong> — a clear, maintained list of which AI tools staff can use and for what purposes. Updated quarterly as the landscape changes.</li>
            <li><strong className="text-white">Data classification rules</strong> — which data types can go into which AI systems. Client information, commercially sensitive data, and personal data should have explicit rules.</li>
            <li><strong className="text-white">Review requirements</strong> — for which categories of AI output require human review before action. Not everything needs review; being specific about what does keeps governance practical.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#004aad" }}>Go Deeper at Our May Meetup</h2>
          <p>
            At our{" "}
            <Link href="/ai-governance-may-2026" className="underline" style={{ color: "#004aad" }}>May 4 meetup</Link>,
            Todd Bowman will present practical best practices for AI governance implementation —
            drawn from real organisational deployments. Alongside that, Dr Elsamari Botha will
            challenge the narrow definition of AI literacy and present a multi-dimensional framework
            for what it genuinely means to be AI-capable in 2026.
          </p>
          <p>
            Whether you're starting from scratch on AI governance or trying to improve what you
            already have, this is the event to attend.
          </p>

          <div className="mt-10 p-6 rounded-lg border" style={{ borderColor: "var(--accent)", background: "rgba(0,74,173,0.08)" }}>
            <p className="font-bold mb-2" style={{ color: "#004aad" }}>The AI Tension — Implementation vs Existential Risk</p>
            <p className="text-sm mb-1">Monday 4 May 2026 — 5:30 PM, EPIC Innovation Centre</p>
            <p className="text-sm mb-4">Dr Elsamari Botha + Hazel Shanks — Free to attend</p>
            <Link href="/ai-governance-may-2026"
              className="inline-block px-6 py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: "var(--accent)" }}>
              Event Details & RSVP →
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <Link href="/blog" className="text-sm underline" style={{ color: "var(--text-muted)" }}>← More from the Christchurch AI blog</Link>
          </div>

        </div>
      </article>
    </div>
  );
}
