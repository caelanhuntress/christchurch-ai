import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Events in Christchurch: Your Guide to the Local Scene",
  description: "A guide to AI meetups, conferences, and events in Christchurch and Canterbury — from monthly gatherings to TechWeek NZ. Find your local AI community.",
  keywords: ["AI events Christchurch", "artificial intelligence events Canterbury", "AI meetup Christchurch NZ", "tech events Christchurch 2026"],
  alternates: { canonical: "https://christchurch-ai.com/blog/ai-events-christchurch" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Events in Christchurch: Your Guide to the Local Scene",
  "url": "https://christchurch-ai.com/blog/ai-events-christchurch",
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
        <h1 className="text-4xl font-bold mb-6 leading-tight">AI Events in Christchurch: Your Guide to the Local Scene</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>Canterbury's AI community is more active than most people realise. If you are looking for places to learn, connect, and stay current with artificial intelligence in Christchurch, here is a guide to what is happening locally.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Christchurch AI — First Monday Meetup</h2>
          <p>The flagship event for AI in Canterbury. <strong className="text-white">Christchurch Artificial Intelligence</strong> meets on the First Monday of every month at EPIC Innovation Centre. It is free, open to everyone, and consistently draws a mixed crowd of developers, business leaders, researchers, and curious beginners.</p>
          <p>Each event features two speakers and genuine networking time. Topics range from practical AI tools and LLMs to governance, ethics, and the social impact of AI in New Zealand. Sponsored by the <a href="https://ai-coaching.academy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">AI Coaching Academy</a>.</p>
          <p><strong className="text-white">Where:</strong> EPIC Innovation Centre, 78-100 Manchester St, Christchurch<br />
          <strong className="text-white">When:</strong> First Monday of each month, 5:30 PM<br />
          <strong className="text-white">Cost:</strong> Free<br />
          <strong className="text-white">RSVP:</strong> <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">meetup.com/christchurch-ai</a></p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">TechWeek NZ — Christchurch Programme</h2>
          <p>New Zealand's national technology festival runs every year across multiple cities. Christchurch typically hosts a strong programme in May, including AI-focused sessions, panels, and workshops. TechWeek is a great opportunity to hear from both local innovators and national voices in the AI space.</p>
          <p>Check the official TechWeek programme for Christchurch events closer to the date.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Canterbury Tech Events</h2>
          <p><strong className="text-white">Canterbury Tech</strong> maintains a community calendar of tech events across the region, including AI-related meetups, hackathons, and networking events. It is worth bookmarking if you want to stay across the full tech event landscape in Canterbury.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Global AI Bootcamp — Christchurch</h2>
          <p>Christchurch has hosted the <strong className="text-white">Global AI Bootcamp</strong>, an international one-day learning event focused on AI and machine learning. It is run by the global AI community and typically involves hands-on workshops and sessions on Microsoft Azure AI, machine learning tools, and AI development.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">University of Canterbury — AI Research Events</h2>
          <p>The University of Canterbury's AI Research Group runs seminars and public events connected to its research programme. If you are interested in the academic side of AI — computer vision, natural language processing, reinforcement learning — their events are worth following.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Online Events with a Christchurch Community</h2>
          <p>Several regular online AI events draw participants from Christchurch, including sessions run through the AI Forum NZ and various Wellington and Auckland-based groups that welcome remote participants. The Christchurch AI group also runs occasional online sessions.</p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">How to Stay Updated</h2>
          <p>The easiest way to keep across AI events in Christchurch is to join the Christchurch AI meetup group. We share upcoming events, speaker announcements, and resources through Meetup.com — and if something big is happening in Canterbury's AI space, you will hear about it there first.</p>

          <div className="mt-12 rounded-2xl border p-6 text-center" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="font-bold text-white text-lg mb-2">Start Here: Join Christchurch AI</div>
            <p className="text-sm mb-4">Free monthly meetups, speaker talks, and the best AI network in Canterbury.</p>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-semibold" style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join on Meetup — Free
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
