import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI Multimedia: Image Generation & Video Generation | Christchurch AI — March 2026",
  description: "A hands-on exploration of AI image and video generation at the March 2026 Christchurch AI First Monday Meetup. Featuring Caelan Huntress on image generation and Arthur Machado on AI video tools.",
};

export default function MarchEventPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI Multimedia: Image Generation & Video Generation",
    "startDate": "2026-03-02T17:30:00+13:00",
    "endDate": "2026-03-02T20:00:00+13:00",
    "location": { "@type": "Place", "name": "EPIC Innovation Centre", "address": { "@type": "PostalAddress", "streetAddress": "78-100 Manchester St", "addressLocality": "Christchurch", "addressCountry": "NZ" } },
    "organizer": { "@type": "Organization", "name": "Christchurch Artificial Intelligence", "url": "https://christchurch-ai.com" },
    "recordedIn": { "@type": "VideoObject", "name": "AI Multimedia: Image Generation & Video Generation — Christchurch AI March 2026", "embedUrl": "https://www.youtube.com/embed/QWd19BDeuJE" },
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
            <span>/</span>
            <span style={{ color: "var(--foreground)" }}>March 2026</span>
          </div>

          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            First Monday Meetup · March 2026
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            AI Multimedia: Image Generation & Video Generation
          </h1>
          <p className="text-lg mb-6" style={{ color: "var(--text-muted)" }}>
            Monday, 2 March 2026 · EPIC Innovation Centre, Christchurch
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>🎨 <strong>Caelan Huntress</strong> — AI Image Generation</span>
            <span>·</span>
            <span>🎬 <strong>Arthur Machado</strong> — AI Video Generation</span>
          </div>

          {/* Sponsor / backlinks row */}
          <div className="rounded-xl border px-5 py-4 mb-10 text-sm" style={{ borderColor: "var(--border)", background: "var(--muted)", color: "var(--text-muted)" }}>
            Sponsored by the{" "}
            <a href={`https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors font-medium">AI Coaching Academy</a>
            {" "}— Christchurch's home for{" "}
            <a href={`https://caelanhuntress.com/training/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors">AI training in New Zealand</a>.
            {" "}Hosted by{" "}
            <a href={`https://caelanhuntress.com/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-black transition-colors">Caelan Huntress, AI trainer and public speaker</a>.
          </div>

          {/* Featured Image */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ height: "360px" }}>
            <Image
              src="/images/past-event-march-2026.jpg"
              alt="AI Multimedia: Image Generation & Video Generation — Christchurch AI March 2026"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Event Summary</h2>

            {/* Talk 1 — Caelan */}
            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 1</div>
              <h3 className="text-xl font-bold mb-3">AI Image Generation — Caelan Huntress</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Host{" "}
                  <a href={`https://caelanhuntress.com/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors font-medium">Caelan Huntress</a>
                  {" "}opened with a compelling parallel to photography's disruptive arrival in the 19th century — when painters felt threatened by a machine that could capture reality at the click of a button. Today, AI image generation is producing the same cultural friction. "Visual art is no longer limited by skill or craft," he argued. "Anyone with an idea can make an image in any style with AI. We are all artists now."
                </p>
                <p>
                  The talk featured a live demonstration of <strong className="text-black">parallel prompting</strong> — sending the same prompt simultaneously to ChatGPT, Gemini, and Copilot to compare outputs in real time. The audience collectively chose "a cowboy in Swan Lake" as the test subject, revealing fascinating differences in how each model interprets creative briefs — and where their guardrails kick in (Wolverine and John Wick were off-limits across the board).
                </p>
                <p>
                  Caelan introduced the concept of AI accelerating the five-step creative process — collect, sort, craft, polish, publish — arguing that humans remain essential at the beginning and end: identifying which ideas are worth pursuing, and knowing when something is finished. "It's our creative taste that sets us apart from the machines."
                </p>
                <p>
                  He shared striking market data: in 2024, an estimated <strong className="text-black">34 million AI images were created every day</strong>, and according to PhotoRoom, 71% of images shared on social media are now AI-generated. Jensen Huang's vision of a world where "every single pixel will be generated" rather than rendered felt less like science fiction and more like an imminent reality.
                </p>
                <p>
                  Caelan also introduced{" "}
                  <a href={`https://openclaws.nz/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors">OpenClaw — a personal AI assistant for New Zealand businesses</a>
                  {" "}— open-source software that runs on dedicated hardware and acts as a 24/7 digital worker. He demonstrated how Puck (his own OpenClaw agent) built{" "}
                  <a href={`https://openclaws.nz/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors">openclaws.nz</a>
                  {" "}in 40 minutes, and offered{" "}
                  <a href={`https://openclaws.nz/directory/agents?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors">OpenClaw installations for Christchurch businesses</a>
                  {" "}at a flat rate.
                </p>
                <p>
                  If you want to go deeper on using AI for your business, the{" "}
                  <a href={`https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors">AI Coaching Academy</a>
                  {" "}offers structured{" "}
                  <a href={`https://genaitraining.co.nz/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors">generative AI training in New Zealand</a>
                  {" "}for ambitious professionals.
                </p>
              </div>
            </div>

            {/* Talk 2 — Arthur */}
            <div className="rounded-2xl border p-6 mb-6" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Talk 2</div>
              <h3 className="text-xl font-bold mb-3">AI Video Generation — Arthur Machado</h3>

              {/* Cheat sheet image */}
              <div className="relative w-full rounded-xl overflow-hidden mb-5" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/images/odd-image-to-video-cheat-sheet.png"
                  alt="Image to Video AI Cheat Sheet — Arthur Machado / ODD"
                  fill
                  style={{ objectFit: "contain", background: "#f8fafc" }}
                />
              </div>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                Arthur's Image-to-Video cheat sheet — a handy reference for AI video workflows.
              </p>

              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Arthur Machado is an{" "}
                  <a href="https://odd.global?utm_source=chch-ai&utm_medium=post&utm_campaign=0326" target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-black transition-colors font-medium">AI filmmaker in New Zealand</a>
                  {" "}who works at the intersection of cinematic storytelling and generative AI. At the March meetup he took the baton from Caelan's image generation session and showed how still images created moments earlier could be brought to life — completing the full text-to-image-to-video pipeline in a single evening.
                </p>
                <p>
                  Arthur demonstrated the leading AI video generation tools — including Sora, Runway, and Kling — and walked through the practical differences between them: which excel at smooth motion, which handle camera moves well, and which are best suited to turning a single generated image into a short cinematic clip.
                </p>
                <p>
                  His Image-to-Video cheat sheet (above) distils the key workflow into a practical reference: how to prepare source images for animation, what motion prompts work reliably, and how to chain tools together to extend and refine clips. The cheat sheet was shared with all attendees.
                </p>
                <p>
                  The evening closed with an open Q&A on the ethics of style transfer, the nature of copyright in a generated world, and what it means for creative professionals to have AI tools that can produce polished video from a single sentence.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <li>🎨 <strong className="text-black">Parallel prompting</strong> — submit the same prompt to multiple AI tools simultaneously to compare results</li>
              <li>🎭 <strong className="text-black">Creative taste is the human edge</strong> — AI can generate thousands of ideas and revisions, but humans know which ones matter</li>
              <li>📸 <strong className="text-black">The photography parallel</strong> — every disruptive image technology expands creative participation rather than replacing artists</li>
              <li>🎬 <strong className="text-black">Text → Image → Video</strong> — the full multimodal pipeline is now accessible to anyone, demonstrated live at a Christchurch meetup</li>
              <li>📊 <strong className="text-black">34 million AI images per day</strong> in 2024 — the multimodal market was valued at $2.3 billion and growing fast</li>
            </ul>
          </div>

          {/* YouTube embed */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Watch the Recording</h2>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/QWd19BDeuJE"
                title="AI Multimedia: Image Generation & Video Generation — Christchurch AI March 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* Download slides */}
          <div className="mb-16 text-center">
            <a
              href="https://ai-coaching-academy.s3-ap-southeast-2.amazonaws.com/slides/2026/chchai-0326.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--accent)", color: "#ffffff" }}
            >
              ⬇ DOWNLOAD THE SLIDES
            </a>
          </div>

          {/* Back link */}
          <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
            <Link href="/past-events" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors" style={{ color: "var(--accent)" }}>
              ← Back to Past Events
            </Link>
          </div>
        </article>

        <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div><span style={{ color: "var(--accent)" }} className="font-semibold">Christchurch AI</span> · Monthly meetups at EPIC Innovation, Canterbury, New Zealand</div>
            <div className="flex items-center gap-6">
              <a href="https://meetup.com/christchurch-ai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Meetup</a>
              <Link href="/past-events" className="hover:text-black transition-colors">Past Events</Link>
              <a href={`https://ai-coaching.academy/?utm_source=chch-ai&utm_medium=post&utm_campaign=0326`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">AI Coaching Academy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
