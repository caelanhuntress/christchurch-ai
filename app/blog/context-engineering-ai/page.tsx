import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Context Engineering: Why It Matters More Than Prompting | Christchurch AI",
  description: "Context engineering is the AI skill separating average users from power operators. Here's what it is, why it beats prompting alone, and how to start doing it.",
  keywords: ["context engineering AI", "AI context engineering NZ", "AI prompting vs context engineering", "how to use AI better", "AI operator skills"],
  alternates: { canonical: "https://christchurch-ai.com/blog/context-engineering-ai" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Context Engineering: Why It Matters More Than Prompting",
  "description": "Context engineering is the AI skill separating average users from power operators.",
  "url": "https://christchurch-ai.com/blog/context-engineering-ai",
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
        <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          Join Free →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">Context Engineering: Why It Matters More Than Prompting</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            Everyone is talking about prompting. Write better prompts, use prompt frameworks,
            learn the magic words that unlock better AI output.
          </p>
          <p>
            But the professionals getting consistently excellent results from AI aren't just
            writing better prompts — they're engineering better <strong className="text-white">context</strong>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What's the Difference?</h2>
          <p>
            A prompt is what you ask. Context is everything the AI knows before you ask it.
          </p>
          <p>
            Think about hiring a contractor. You wouldn't walk in on their first day and give them
            a list of tasks with no background. You'd tell them about the project, the client,
            the constraints, the standards you work to, the things that have gone wrong before.
            You'd give them <em>context</em>. Then the tasks make sense.
          </p>
          <p>
            AI works the same way. A great prompt with poor context produces mediocre output.
            A mediocre prompt with rich, well-structured context often produces excellent output.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Context Engineering Actually Involves</h2>

          <div className="space-y-4 rounded-2xl border p-6 my-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div>
              <div className="font-semibold text-white mb-1">Role and expertise</div>
              <div className="text-sm">Not "you are a helpful assistant" — but "you are a senior employment lawyer
              advising a Christchurch accounting firm on their AI policy. You are direct and practical."</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Background and situation</div>
              <div className="text-sm">What does the AI need to know about your organisation, client, or project?
              Provide it explicitly — the AI cannot infer what you haven't told it.</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">The real objective</div>
              <div className="text-sm">Not "write an email" but "write an email that persuades a cautious CFO
              to approve a $15K AI training budget before end of financial year — focus on risk of inaction,
              not features of the training."</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Constraints and style</div>
              <div className="text-sm">Word limits, tone, things to avoid, format required. The more specific
              your constraints, the more predictable and useful the output.</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Examples of good output</div>
              <div className="text-sm">If you have previous output that worked well, include it. AI models are
              excellent at pattern-matching to examples — often more effective than detailed instructions.</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Practical Technique: Context Documents</h2>
          <p>
            The most effective AI operators build <strong className="text-white">context documents</strong> —
            reusable files containing everything the AI needs to know about a project, client, or domain.
          </p>
          <p>
            Before starting a task, they load the relevant context document. The AI already knows the
            background. The "prompt" can then be short, specific, and task-focused — because all the
            setup work is already done.
          </p>
          <p>
            This is why two people using the same AI tool get radically different results. One is
            starting from scratch every time. The other is building on prepared context.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why This Is the Skill That Matters</h2>
          <p>
            Most organisations disappointed with AI are experiencing the <strong className="text-white">operator problem</strong>:
            they have capable tools and people who haven't learned to use them effectively.
          </p>
          <p>
            Context engineering is the highest-leverage skill you can develop right now. It doesn't
            require better tools, bigger budgets, or technical expertise. It requires learning how
            to structure information — which is something any professional can do.
          </p>
          <p>
            The AI landscape in 2026 rewards operators. The people who understand how to give AI
            rich, structured context are doing the work of two or three people. The people treating
            AI like a search engine are wondering why it doesn't seem that useful.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Start Here</h2>
          <p>
            Pick one recurring task you do with AI — a document type you produce regularly, a
            kind of research you often need, a communication format you write repeatedly.
          </p>
          <p>
            Now write a context document for it. Include: your role, the purpose of this task,
            who the audience is, what good output looks like, what to avoid, and two examples of
            output you've been happy with before.
          </p>
          <p>
            Paste that context document at the start of your next session. See what happens to
            the quality of output.
          </p>
          <p>
            That's context engineering. It's not complicated — it's just deliberate.
          </p>

        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="rounded-2xl border p-6 mb-8 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="font-bold text-white mb-2">Hear more on this topic</div>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Caelan Huntress spoke on context engineering at Agent Camp 2026.
              Come to the next Christchurch AI meetup to continue the conversation.
            </p>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join the Community →
            </a>
          </div>
          <div className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>More from Christchurch AI</div>
          <div className="flex flex-col gap-3">
            <Link href="/blog/ai-speaker-christchurch" className="text-sm transition-colors" style={{ color: "var(--accent)" }}>
              How to Speak at a Christchurch AI Event →
            </Link>
            <Link href="/blog/techweek-2026-christchurch" className="text-sm transition-colors" style={{ color: "var(--accent)" }}>
              TechWeek 2026 Christchurch →
            </Link>
            <Link href="/blog/what-is-christchurch-ai" className="text-sm transition-colors" style={{ color: "var(--accent)" }}>
              What Is Christchurch AI? →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
