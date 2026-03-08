import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw User Group Christchurch: What It Is and What to Expect | Christchurch AI",
  description: "The first OpenClaw User Group in Christchurch meets March 24 at EPIC Innovation. Here's what OpenClaw is, who it's for, and what you'll get from coming along.",
  keywords: ["OpenClaw user group Christchurch", "OpenClaw NZ", "personal AI assistant NZ", "AI assistant Christchurch", "OpenClaw community"],
  alternates: { canonical: "https://christchurch-ai.com/blog/openclaw-user-group-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "OpenClaw User Group Christchurch: What It Is and What to Expect",
  "description": "The first OpenClaw User Group in Christchurch meets March 24 at EPIC Innovation. Here's what to expect.",
  "url": "https://christchurch-ai.com/blog/openclaw-user-group-christchurch",
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
        <a href="/openclaw-user-group-march-2026"
          className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--accent)", color: "#ffffff" }}>
          RSVP — March 24 →
        </a>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--text-muted)" }}>← Back to Blog</Link>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>March 2026</div>
        <h1 className="text-4xl font-bold mb-6 leading-tight">OpenClaw User Group Christchurch: What It Is and What to Expect</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <p>
            On Tuesday 24 March, a small group of Christchurch professionals will gather at EPIC
            Innovation Centre for something a bit different: the first OpenClaw User Group in
            Canterbury.
          </p>
          <p>
            If you&apos;re not sure what OpenClaw is or whether this is for you, this post explains
            it — and why it might be the most useful hour you spend on AI this month.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Is OpenClaw?</h2>
          <p>
            OpenClaw is a personal AI assistant that runs on your own hardware — a dedicated
            device in your home or office, not a cloud service. It connects to AI models like
            Claude, keeps your data local, and runs quietly in the background ready to help
            whenever you need it.
          </p>
          <p>
            The difference from tools like ChatGPT or Microsoft Copilot isn&apos;t just technical.
            It&apos;s about ownership. Your conversations, files, and context stay on your hardware.
            You configure it to know your business, your preferences, and your workflows. Over
            time, it becomes genuinely useful in the way a well-briefed assistant would be —
            rather than a generic tool you have to re-explain yourself to every session.
          </p>
          <p>
            It&apos;s particularly popular with professionals who handle sensitive client information:
            lawyers, accountants, healthcare practitioners, consultants. People who want the
            productivity of AI without the data exposure of consumer cloud tools.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What&apos;s a User Group?</h2>
          <p>
            A user group is an informal gathering of people using the same tool — to share what
            they&apos;ve discovered, troubleshoot together, swap workflows, and collectively get more
            out of the technology than any of them would alone.
          </p>
          <p>
            User groups predate the internet. They&apos;re how the Macintosh community grew in the
            1980s, how Linux spread in the 90s, how WordPress became the world&apos;s most popular
            CMS. The format works because learning from peers who are using the same tool in
            similar contexts is often more useful than documentation or formal training.
          </p>
          <p>
            This first meeting is intentionally small — an hour, a handful of OpenClaw users,
            and an open agenda. The goal is to see what people are actually doing with it, what&apos;s
            working, and what questions are common.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who Should Come</h2>
          <p>You&apos;ll get the most from this if you:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Already have OpenClaw installed and have been using it (even a little)</li>
            <li>Are considering getting OpenClaw and want to see how others use it before committing</li>
            <li>Work with sensitive data and are curious about local AI alternatives to cloud tools</li>
            <li>Want to connect with others in Christchurch who are serious about practical AI use</li>
          </ul>
          <p>
            You don&apos;t need to be technical. OpenClaw is designed for professionals, not developers.
            Most users interact with it entirely through conversation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to Expect on the Day</h2>
          <p>
            Format is deliberately loose for this first session. Expect:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Introductions — who&apos;s using it and in what context</li>
            <li>A few people showing what they&apos;ve set up or built</li>
            <li>Open Q&amp;A — there are no dumb questions here</li>
            <li>Discussion of what people want from future sessions</li>
          </ul>
          <p>
            It&apos;s a lunchtime event — 12pm to 1pm — so bring your lunch if you like.
            EPIC Innovation Centre has good coffee nearby.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Bigger Picture</h2>
          <p>
            The Christchurch AI community has grown fast. Monthly meetups at EPIC regularly draw
            40–60 people. AgentCamp sold out at 100 in weeks. There&apos;s a TechWeek AI conference
            in the works.
          </p>
          <p>
            The OpenClaw User Group sits at a specific part of that ecosystem — smaller, more
            hands-on, focused on a particular tool. But it&apos;s part of the same trend: Canterbury
            professionals taking AI seriously and learning together rather than figuring it out
            in isolation.
          </p>
          <p>
            If that sounds like the kind of room you want to be in, come along.
          </p>

          <div className="mt-12 p-6 rounded-2xl border" style={{ borderColor: "var(--accent)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>Special Event</div>
            <h3 className="text-xl font-bold mb-1">OpenClaw User Group — Christchurch</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Tuesday 24 March 2026 — 12:00 PM – 1:00 PM<br />
              EPIC Innovation Centre, 78–100 Manchester St, Christchurch<br />
              Free to attend
            </p>
            <a href="/openclaw-user-group-march-2026"
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
