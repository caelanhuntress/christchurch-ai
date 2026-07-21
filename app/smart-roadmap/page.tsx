import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Roadmap - Christchurch AI",
  description:
    "A coming-soon landing page for Smart Roadmap, a practical AI roadmap offer for Christchurch businesses.",
  alternates: { canonical: "https://christchurch-ai.com/smart-roadmap" },
  openGraph: {
    title: "Smart Roadmap - Christchurch AI",
    description:
      "A practical AI roadmap for smart businesses. Coming soon from Christchurch AI.",
    url: "https://christchurch-ai.com/smart-roadmap",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Smart Roadmap",
  description:
    "A practical AI roadmap offer for Christchurch businesses, delivered by Christchurch AI.",
  url: "https://christchurch-ai.com/smart-roadmap",
  publisher: {
    "@type": "Organization",
    name: "Christchurch AI",
    url: "https://christchurch-ai.com",
  },
};

const roadmapSteps = [
  {
    title: "Find the useful AI wins",
    text: "Map where AI can save time, improve decisions, or remove friction in the way your team already works.",
  },
  {
    title: "Choose a sensible first move",
    text: "Prioritise the opportunities that are practical, low-risk, and valuable enough to justify attention.",
  },
  {
    title: "Leave with the next steps",
    text: "Turn scattered ideas into a short action plan your team can understand, test, and improve.",
  },
];

export default function SmartRoadmapPage() {
  return (
    <main className="min-h-screen bg-white text-[#102033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
          <Link href="/" className="group flex items-center gap-3" aria-label="Christchurch AI home">
            <span className="relative flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden">
              <span className="absolute left-2 top-1 grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#2ea3f2] opacity-80" />
                ))}
              </span>
              <span className="absolute bottom-1 right-1 h-9 w-10 -skew-x-12 rounded-br-2xl rounded-tl-lg bg-gradient-to-br from-[#64bc6c] to-[#1582c4]" />
            </span>
            <span className="leading-none">
              <span className="block text-2xl font-black uppercase tracking-wide text-[#68bf6b]">
                Smart
              </span>
              <span className="block text-xl font-black uppercase tracking-wide text-[#2ea3f2]">
                Roadmap
              </span>
            </span>
          </Link>

          <a
            href="mailto:caelan@christchurch-ai.com?subject=Smart%20Roadmap%20interest"
            className="rounded-full bg-[#e0cd00] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#082263] shadow-lg shadow-black/20 transition hover:bg-white hover:text-[#005da0]"
          >
            Get updates
          </a>
        </div>
      </header>

      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#005da0] px-6 pb-28 pt-36 text-center text-[#ffffff]">
        <Image
          src="/images/techweek/ai-roadmap-workshop.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#005da0]/88" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-white [clip-path:polygon(0_55%,50%_92%,100%_50%,100%_100%,0_100%)]" />

        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-base font-black uppercase tracking-[0.42em] text-[#ffffff]/70">
            New workshop coming soon
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.98] tracking-normal text-[#ffffff] drop-shadow-lg md:text-7xl">
            Smart Roadmaps for Smart Businesses
          </h1>
          <div className="mx-auto my-9 h-2 w-32 bg-[#e0cd00]" />
          <p className="mx-auto max-w-3xl text-xl font-bold leading-relaxed text-[#ffffff]/82 md:text-2xl">
            A practical AI planning session for Christchurch teams who want clear next steps,
            not another pile of tool demos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:caelan@christchurch-ai.com?subject=Smart%20Roadmap%20interest"
              className="rounded-full bg-[#0c71c3] px-8 py-4 text-base font-black uppercase tracking-wide text-[#ffffff] shadow-xl shadow-black/25 ring-1 ring-white/20 transition hover:bg-black"
            >
              Register interest
            </a>
            <a
              href="#roadmap"
              className="rounded-full border-2 border-white/75 px-8 py-4 text-base font-black uppercase tracking-wide text-[#ffffff] transition hover:border-[#e0cd00] hover:bg-[#e0cd00] hover:text-[#082263]"
            >
              See what is coming
            </a>
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#0c71c3]">
              Working smarter online
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight text-[#082263] md:text-5xl">
              A placeholder for the offer, with the brand already pointed in the right direction.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {roadmapSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-[#0c71c3]/20 bg-[#f5fbff] p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e0cd00] text-lg font-black text-[#082263]">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-black uppercase text-[#005da0]">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4c5b68]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082263] px-6 py-20 text-[#ffffff]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#e0cd00]">
              Built for local teams
            </p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Get ready before the page is finished.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#ffffff]/75">
              This page is holding the place for a sharper Smart Roadmap offer. The
              direction is simple: help Canterbury businesses make a practical AI plan
              they can act on without overcomplicating the first step.
            </p>
          </div>

          <div className="border border-[#0c71c3] bg-[#0d2ea5]/55 p-8 shadow-2xl shadow-black/30">
            <h3 className="mb-5 text-center text-2xl font-black uppercase text-[#edf000]">
              Get in touch
            </h3>
            <div className="space-y-4 text-sm font-semibold text-[#ffffff]/80">
              <div className="bg-white px-4 py-3 text-[#8c8c8c]">Email</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white px-4 py-3 text-[#8c8c8c]">First name</div>
                <div className="bg-white px-4 py-3 text-[#8c8c8c]">Last name</div>
              </div>
              <div className="bg-white px-4 py-3 text-[#8c8c8c]">Company</div>
              <div className="min-h-28 bg-white px-4 py-3 text-[#8c8c8c]">
                What would you like your AI roadmap to solve?
              </div>
            </div>
            <a
              href="mailto:caelan@christchurch-ai.com?subject=Smart%20Roadmap%20interest"
              className="mt-6 inline-block rounded-sm bg-[#0c71c3] px-6 py-3 font-bold text-[#ffffff] ring-1 ring-white/60 transition hover:bg-black"
            >
              Submit interest
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#061947] px-6 py-8 text-sm text-[#ffffff]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 sm:flex-row">
          <p>
            Copyright <strong>Christchurch AI</strong>
          </p>
          <Link href="/" className="font-semibold text-[#ffffff]/75 transition hover:text-[#e0cd00]">
            Back to Christchurch AI
          </Link>
        </div>
      </footer>
    </main>
  );
}
