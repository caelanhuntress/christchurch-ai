import Link from "next/link";

export const metadata = {
  title: "April AI Meetup: Vibe Coding & Web App Development with AI | Christchurch AI — April 2026",
  description: "A recap of the April 2026 Christchurch AI meetup featuring Greg Dickson on turning SOPs into web apps with Manis, and Caelan Huntress on vibe coding with Claude.",
};

export default function AprilEventPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "April AI Meetup - Vibe Coding & Web App Development with AI",
    "startDate": "2026-04-06T17:30:00+12:00",
    "endDate": "2026-04-06T20:00:00+12:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "recordedIn": { "@type": "VideoObject", "name": "April AI Meetup - Vibe Coding & Web App Development with AI", "embedUrl": "https://www.youtube.com/embed/wfVaB71ZXCo?start=175" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
        <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.95)" }}>
          <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>Christchurch AI</Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="/#events" className="hover:text-black transition-colors">Events</Link>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#ffffff" }}>
              Join Free →
            </a>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <span>/</span>
            <span style={{ color: "var(--foreground)" }}>April 2026</span>
          </div>

          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Christchurch AI Meetup · April 2026
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Vibe Coding & Web App Development with AI
          </h1>
          <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
            Monday, 6 April 2026 · EPIC Innovation Centre, Christchurch
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>🛠️ <strong>Greg Dickson</strong> — Web Apps for Non-Devs</span>
            <span>·</span>
            <span>🎤 <strong>Caelan Huntress</strong> — Vibe Coding with Claude</span>
          </div>

          <div className="rounded-xl border px-5 py-4 mb-10 text-sm" style={{ borderColor: "var(--border)", background: "var(--muted)", color: "var(--text-muted)" }}>
            Sponsored by the{" "}
            <a href="https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0426" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors font-medium">AI Coaching Academy</a>
            {" "}— Christchurch's home for practical AI capability building.
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">AI Meetup Recap: Christchurch, April 2026</h2>

            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
              <h3 className="text-xl font-bold mb-3">From SOP to Web App (No Developers Required) — Greg Dickson</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Greg Dickson opened the evening with a practical case for turning static internal documentation into usable software. His premise was simple: most organisations already have the raw material for internal tools sitting in Google Docs, spreadsheets, and standard operating procedures — but those processes are rarely followed consistently because they remain boring, static, and hard to use.
                </p>
                <p>
                  Instead of waiting on internal dev teams or paying agencies to build bespoke systems, Greg showed how non-developers can use <strong className="text-black">Claude as a product manager</strong> and <strong className="text-black">Manis as the engineering layer</strong>. His workflow was clear and replicable: dump the SOP into Claude, have it summarise the workflow and write a proper spec, then hand that spec over to Manis to generate the application.
                </p>
                <p>
                  The live demo made the point. Starting from a YouTube best-practices article, Greg used Claude to create a detailed product requirements document, then used Manis to turn that into a functioning internal checklist app in under half an hour. The result included review workflows, performance tracking, team roles, and dummy data — more than enough to prove the concept.
                </p>
                <p>
                  Greg was refreshingly honest about the trade-offs. This was not a sermon about best practice. In his words, the code may break rules, but it gets the job done. For internal tools, MVPs, and quick experiments, that speed matters. His strongest point was that when non-developers can prototype their own ideas, they reduce bottlenecks, create better buy-in, and learn how to communicate specifications more clearly to technical teams later.
                </p>
                <p>
                  The most useful takeaway from Greg's talk was not just that these tools are fast, but that <strong className="text-black">play is now a productive business activity</strong>. Throw a process into the machine, see what comes back, refine it, and learn where the boundaries really are.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
              <h3 className="text-xl font-bold mb-3">Vibe Coding with Claude — Caelan Huntress</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Caelan Huntress took the idea further, framing vibe coding not just as a software technique, but as a creative shift. Using Rick Rubin as the patron saint of the movement, Caelan argued that the human role in AI-assisted building is not to type every line, but to bring <strong className="text-black">taste, direction, and decisiveness</strong>. AI can generate endless options; humans still decide what is worth making.
                </p>
                <p>
                  The talk moved fluidly between philosophy and live demos. Caelan walked the room through a maturity ladder of AI building — from plain prompting, to custom GPTs and Gems, to skills, Claude co-work, and finally Claude Code connected to GitHub. This helped the audience place themselves on the map, whether they were complete beginners or already experimenting with agentic tooling.
                </p>
                <p>
                  The live demo was classic vibe coding: the audience named a new Christchurch cafe, Caelan generated a logo and dummy menu data in parallel, then used Claude Code to build a mobile-friendly one-page website. At the same time, Puck — his OpenClaw agent — attempted the same task in parallel on a live deployment. The local version worked quickly; the public deployment hit friction. That contrast was actually useful. It showed the room where AI feels magical and where real-world deployment still demands oversight.
                </p>
                <p>
                  Caelan also used the recent accidental Claude Code code release as a teachable moment, surfacing what operators can learn from the architecture beneath the interface: lean memory files, self-improvement loops, spinner verbs, and why reasoning structure matters. The message was that the most valuable AI operators won't just prompt well — they'll understand enough of the machinery to direct, evaluate, and improve it.
                </p>
                <p>
                  One of the most memorable moments was the juggling metaphor. Managing agents, Caelan argued, is like keeping multiple balls in the air. You drop things. Everyone who tries this seriously drops things. But the people trying, learning, and recovering are also the people building new capability. In that frame, mistakes aren't evidence of failure; they're part of becoming effective.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways for Christchurch AI Practitioners</h2>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <li>⚙️ <strong className="text-black">Processes can become products</strong> — SOPs, checklists, and spreadsheets are now viable raw material for internal tools</li>
              <li>🎯 <strong className="text-black">Taste is the differentiator</strong> — AI can produce countless options, but humans still decide what matters</li>
              <li>🧠 <strong className="text-black">Spec first, build second</strong> — separating planning from execution improves output quality dramatically</li>
              <li>🗣️ <strong className="text-black">Conversation is becoming an interface layer</strong> — software can now be built by describing what you want, not just by writing code line by line</li>
              <li>🤹 <strong className="text-black">Agent management is a skill</strong> — learning to direct, evaluate, and recover from mistakes is part of the new craft</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Watch the Full Christchurch AI Meetup Recording</h2>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/wfVaB71ZXCo?start=175"
                title="April AI Meetup - Vibe Coding & Web App Development with AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h2 className="text-lg font-bold mb-4">Resources from this event</h2>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>→ <a href="https://www.youtube.com/live/wfVaB71ZXCo?si=phsA05BXwxVwfOuK&t=175" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Watch the full YouTube replay</a></li>
              <li>→ <a href="https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/chchai-0426.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Download Caelan's slides (PDF)</a></li>
              <li>→ <a href="https://ai-coaching.academy/events/prompt-like-a-pro-practical-ai-techniques" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Prompt Like a Pro — practical AI techniques workshop</a></li>
              <li>→ <a href="https://join.ai-coaching.academy/founders" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">AI Coaching Academy Founders plan</a></li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6 mb-10" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <h2 className="text-lg font-bold mb-4">More from Christchurch AI</h2>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>→ <a href="/past-events/ai-image-video-generation-march-2026" className="underline hover:text-black transition-colors">March 2026: AI Multimedia — Image Generation & Video Generation</a></li>
              <li>→ <a href="/past-events/ai-data-testing-coaching-feb-2026" className="underline hover:text-black transition-colors">February 2026: AI & Data Testing + Coaching with AI</a></li>
              <li>→ <a href="/past-events/ai-reasoning-context-engineering-dec-2025" className="underline hover:text-black transition-colors">December 2025: AI Reasoning & Context Engineering</a></li>
              <li>→ <a href="/#events" className="underline hover:text-black transition-colors">Upcoming Christchurch AI meetups — RSVP free on Meetup</a></li>
            </ul>
          </div>

          <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
            <Link href="/past-events" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors" style={{ color: "var(--accent)" }}>
              ← Back to Past Events
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
