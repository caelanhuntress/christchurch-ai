import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "EPIC AI Conference Christchurch: Full TechWeek Guide",
  description:
    "Looking for the EPIC AI Conference Christchurch page? Here is the full TechWeek guide, speaker lineup, venue details, and direct registration links.",
  alternates: { canonical: "https://christchurch-ai.com/blog/epic-ai-conference-christchurch" },
};

export default function EpicConferenceGuidePost() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          Christchurch AI Blog
        </div>
        <h1 className="text-4xl font-bold mb-4">EPIC AI Conference Christchurch: Full TechWeek Guide</h1>
        <p className="mb-8 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          If you are searching for the <strong style={{ color: "var(--foreground)" }}>EPIC AI Conference Christchurch</strong>, this is the best place to start. Christchurch AI has published a full event guide with the programme, speaker lineup, session times, venue details, and direct Humanitix registration links.
        </p>

        <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <h2 className="text-2xl font-bold mb-3">Go straight to the main event page</h2>
          <p className="mb-4" style={{ color: "var(--text-muted)" }}>
            Visit the <Link href="/epic-ai-conference" className="underline font-semibold" style={{ color: "var(--accent)" }}>EPIC AI Conference Christchurch page</Link> for the complete TechWeek programme.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <li>AM workshops</li>
            <li>Ministry of Awesome Coffee &amp; Jam</li>
            <li>PM presentations</li>
            <li>Leadership in the Age of AI panel</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-3">Why this page exists</h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Many people first discover the event through Humanitix links. That makes sense for tickets, but it does not give the full context of the day. The Christchurch AI event guide gives you the complete picture of the <strong style={{ color: "var(--foreground)" }}>TechWeek AI conference at EPIC Innovation</strong>, including the local community angle and the full speaker lineup in one place.
        </p>

        <h2 className="text-2xl font-bold mb-3">What you will find on the full guide</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: "var(--text-muted)" }}>
          <li>speaker and panelist profiles</li>
          <li>session-by-session schedule</li>
          <li>venue and timing details</li>
          <li>direct registration links for each session</li>
          <li>context about Christchurch AI and TechWeekNZ</li>
        </ul>

        <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
          If you want the complete <strong style={{ color: "var(--foreground)" }}>EPIC AI Conference Christchurch programme</strong>, head to the main guide here: <Link href="/epic-ai-conference" className="underline font-semibold" style={{ color: "var(--accent)" }}>EPIC AI Conference Christchurch</Link>.
        </p>
      </main>
    </div>
  );
}
