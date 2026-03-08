import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Governance in NZ: What It Actually Means for Your Organisation | Christchurch AI",
  description: "AI governance isn't just a policy document. Here's a practical take on what it means for NZ organisations, the three most common failures, and a starting framework.",
  keywords: ["AI governance NZ", "AI policy New Zealand", "AI governance framework", "AI Privacy Act NZ", "responsible AI NZ", "AI compliance NZ"],
  alternates: { canonical: "https://christchurch-ai.com/blog/ai-governance-nz-organisations" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Governance in NZ: What It Actually Means for Your Organisation",
  "description": "A practical take on AI governance for NZ organisations — what it is, why policies alone fail, and a starting framework that works.",
  "url": "https://christchurch-ai.com/blog/ai-governance-nz-organisations",
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
        <a href="/ai-governance-may-2026"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          May 4 Governance Meetup →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">AI Governance in NZ: What It Actually Means for Your Organisation</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            Most NZ organisations have now started using AI in some capacity. Many are discovering
            that the harder question isn&apos;t how to use AI — it&apos;s how to govern it.
          </p>
          <p>
            AI governance is one of those terms that sounds important but often stays abstract.
            Here&apos;s a practical take on what it actually means and why it matters.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What AI Governance Actually Is</h2>
          <p>
            At its core, AI governance is the set of policies, processes, and accountability
            structures that determine how AI is used in your organisation — and who&apos;s responsible
            when something goes wrong.
          </p>
          <p>It answers questions like:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Which AI tools are approved for use, and which aren&apos;t?</li>
            <li>What data can staff put into AI systems?</li>
            <li>Who reviews AI-generated outputs before they&apos;re acted on?</li>
            <li>How do we handle errors or biased outputs from AI?</li>
            <li>Are we compliant with the NZ Privacy Act when using AI on client data?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why a Policy Document Isn&apos;t Enough</h2>
          <p>
            Many organisations respond to AI governance concerns by writing a policy. That&apos;s a start,
            but governance that only exists on paper tends to fail in practice. People don&apos;t read
            policies under deadline pressure. Edge cases aren&apos;t covered. The policy gets outdated
            as AI tools evolve faster than review cycles.
          </p>
          <p>
            Effective AI governance is embedded in workflows, not just documented in handbooks.
            It means the decision about whether to use AI — and how — is built into the process
            itself, not left to individual judgement in the moment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Three Governance Failures We See Most</h2>

          <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h3 className="font-bold text-white mb-2">1. Shadow AI adoption</h3>
            <p>
              Staff using personal ChatGPT accounts, consumer tools, or browser extensions without
              organisational knowledge — often putting client data into systems that weren&apos;t approved
              and may not be compliant.
            </p>
          </div>

          <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h3 className="font-bold text-white mb-2">2. No accountability structure</h3>
            <p>
              When AI makes a mistake — a wrong summary, a biased recommendation, a hallucinated fact —
              it&apos;s unclear who&apos;s responsible for catching it, correcting it, and ensuring it doesn&apos;t
              happen again.
            </p>
          </div>

          <div className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h3 className="font-bold text-white mb-2">3. Governance as friction</h3>
            <p>
              Governance designed primarily to restrict AI use tends to be bypassed. The goal should
              be enabling responsible adoption — making it easy to do the right thing, not just hard
              to do the wrong thing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">A Starting Framework for NZ Organisations</h2>
          <p>
            You don&apos;t need a 40-page governance framework to start. Three foundations get most
            organisations most of the way:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-2">
            <li>
              <strong className="text-white">Approved tools list</strong> — a clear, maintained list of which AI tools staff
              can use and for what purposes. Updated quarterly as the landscape changes.
            </li>
            <li>
              <strong className="text-white">Data classification rules</strong> — which data types can go into which AI systems.
              Client information, commercially sensitive data, and personal data should have explicit rules.
            </li>
            <li>
              <strong className="text-white">Review requirements</strong> — which categories of AI output require human review
              before action. Not everything needs review; being specific about what does keeps governance practical.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Go Deeper at Our May Meetup</h2>
          <p>
            At our May 4 meetup, Todd Bowman will present practical best practices for AI governance
            implementation — drawn from real organisational deployments. Alongside that, Dr Elsamari
            Botha will challenge the narrow definition of AI literacy and present a multi-dimensional
            framework for what it genuinely means to be AI-capable in 2026.
          </p>
          <p>
            Whether you&apos;re starting from scratch on AI governance or trying to improve what you
            already have, this is the event to attend.
          </p>

          <div className="mt-12 p-6 rounded-2xl border" style={{ borderColor: "var(--accent)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Next Event</div>
            <h3 className="text-xl font-bold mb-1">AI Governance &amp; AI Literacy Frameworks</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Monday 4 May 2026 — 5:30 PM, EPIC Innovation Centre<br />
              Dr Elsamari Botha + Todd Bowman — Free to attend
            </p>
            <a href="/ai-governance-may-2026"
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
