import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Christchurch AI",
  description: "Insights, event recaps, and resources from the Christchurch AI community. AI news and perspectives from Canterbury, New Zealand.",
  alternates: { canonical: "https://christchurch-ai.com/blog" },
};

const posts = [
  {
    slug: "context-engineering-ai",
    title: "Context Engineering: Why It Matters More Than Prompting",
    date: "March 2026",
    excerpt: "Context engineering is the AI skill separating average users from power operators. What it is, why it beats prompting alone, and how to start today.",
  },
  {
    slug: "techweek-2026-christchurch",
    title: "TechWeek 2026 Christchurch — AI Conference at EPIC Innovation",
    date: "March 2026",
    excerpt: "Christchurch AI is hosting an official TechWeek 2026 event. Find out what's on, how to attend, and how to apply to speak at Canterbury's biggest AI event of the year.",
  },
  {
    slug: "ai-speaker-christchurch",
    title: "How to Speak at an AI Event in Christchurch",
    date: "March 2026",
    excerpt: "Want to share your AI work with Canterbury's tech community? Here's how to apply to speak at the Christchurch AI meetup and TechWeek 2026.",
  },
  {
    slug: "what-is-christchurch-ai",
    title: "What Is Christchurch AI? Canterbury's Monthly AI Meetup Explained",
    date: "March 2026",
    excerpt: "Everything you need to know about Christchurch's AI community — who comes, what happens, and why it's become the best room in Canterbury for AI conversations.",
  },
  {
    slug: "ai-events-christchurch",
    title: "AI Events in Christchurch: Your Guide to the Local Scene",
    date: "March 2026",
    excerpt: "A guide to AI meetups, conferences, and events happening in Christchurch and Canterbury — from monthly gatherings to TechWeek.",
  },
  {
    slug: "ai-community-new-zealand",
    title: "The NZ AI Community: How Christchurch Fits Into the National Picture",
    date: "March 2026",
    excerpt: "New Zealand's AI ecosystem is growing fast. Here's how Christchurch's community connects to the national picture — and what makes Canterbury's scene unique.",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}>
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>
          Christchurch AI
        </Link>
        <Link href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
          style={{ background: "var(--accent)", color: "#ffffff" }}>
          Join Free →
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Resources
        </div>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="mb-12" style={{ color: "var(--text-muted)" }}>
          Insights and perspectives from the Christchurch AI community.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="block rounded-2xl border p-6 transition-all hover:border-blue-600"
              style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{post.date}</div>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">{post.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</Link>
        {" "}· Monthly meetups at EPIC Innovation, Canterbury, New Zealand
      </footer>
    </div>
  );
}
