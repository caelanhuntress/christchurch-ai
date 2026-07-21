import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Roadmap Workshop for Smart Websites Clients | Christchurch",
  description:
    "Build a practical 90-day AI strategy for your business in this two-hour Christchurch workshop from Smart Websites and the AI Coaching Academy.",
  alternates: { canonical: "https://christchurch-ai.com/smart-roadmap" },
  openGraph: {
    title: "Build Your 90-Day AI Roadmap",
    description:
      "Identify your best AI opportunities, choose your priorities, and leave with a practical three-month implementation plan.",
    url: "https://christchurch-ai.com/smart-roadmap",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
  },
};

const aiOpportunities = [
  "Reduce repetitive administration",
  "Accelerate research, writing, and analysis",
  "Improve marketing and customer communication",
  "Help you respond to enquiries more efficiently",
  "Capture and reuse your business knowledge",
  "Support faster, better-informed decisions",
  "Create more consistent processes across your team",
];

const stages = [
  {
    title: "Map Your Work",
    text: "Identify the recurring tasks, decisions, communications, and workflows that consume time across your business.",
  },
  {
    title: "Find the Leverage",
    text: "Explore where AI could save time, improve quality, reduce friction, or help your team make better decisions.",
  },
  {
    title: "Prioritise the Opportunities",
    text: "Compare potential AI projects according to their likely value, difficulty, risk, and readiness.",
  },
  {
    title: "Build Your Roadmap",
    text: "Choose a focused set of experiments and organise them into a practical 30-, 60-, and 90-day plan.",
  },
];

const outcomes = [
  "A mapped view of the workflows you want to improve",
  "A prioritised shortlist of relevant AI use cases",
  "A practical 90-day AI roadmap",
  "Several experiments you can begin immediately",
  "Prompt templates and workflows to support your first steps",
  "A clearer understanding of where AI can create value in your business",
  "Greater confidence about what to do next",
];

const challenges = [
  "Creating website or social media content",
  "Responding to customer enquiries",
  "Preparing proposals, reports, or follow-up emails",
  "Researching customers, competitors, or markets",
  "Organising internal knowledge",
  "Planning projects or campaigns",
  "Summarising meetings and documents",
  "Completing recurring administrative tasks",
];

const audience = [
  "Business owners",
  "Managers and team leaders",
  "Marketing professionals",
  "Operations professionals",
  "Consultants and service providers",
  "Anyone responsible for improving how work gets done",
];

const workshopDetails = [
  ["Duration", "Two hours"],
  ["Venue", "EPIC Innovation"],
  ["Address", "100 Manchester Street, Christchurch Central City"],
  ["Format", "In-person, hands-on workshop"],
  ["Bring", "A laptop and a real workflow you want to improve"],
];

const sessions = [
  {
    label: "Morning Session",
    date: "Monday, 10 August 2026",
    time: "10:00 am-12:00 pm",
    venue: "EPIC Innovation, Christchurch",
    button: "Register for Monday, 10 August",
    shortButton: "Monday, 10 August - 10:00 am",
    href: "https://events.humanitix.com/ai-roadmap-workshop-0826-1",
    startDate: "2026-08-10T10:00:00+12:00",
    endDate: "2026-08-10T12:00:00+12:00",
  },
  {
    label: "Afternoon Session",
    date: "Friday, 21 August 2026",
    time: "3:00 pm-5:00 pm",
    venue: "EPIC Innovation, Christchurch",
    button: "Register for Friday, 21 August",
    shortButton: "Friday, 21 August - 3:00 pm",
    href: "https://events.humanitix.com/ai-roadmap-workshop-0826-2",
    startDate: "2026-08-21T15:00:00+12:00",
    endDate: "2026-08-21T17:00:00+12:00",
  },
];

const faqs = [
  {
    question: "Do I need experience using AI?",
    answer:
      "No. The workshop is suitable for complete beginners as well as people already using tools such as ChatGPT, Copilot, Claude, or Gemini.",
  },
  {
    question: "Is this a technical workshop?",
    answer:
      "No coding is required. The session focuses on business strategy, workflows, priorities, and practical implementation.",
  },
  {
    question: "Will we be shown AI tools?",
    answer:
      "Tools may be used to demonstrate ideas, but the central outcome is your roadmap: where AI can help your business and what you should do during the next three months.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a laptop, a willingness to experiment, and a real task or workflow that you would like to improve.",
  },
  {
    question: "Will I leave with something practical?",
    answer:
      "Yes. You will develop a prioritised shortlist of AI opportunities and organise your selected experiments into a practical 90-day roadmap.",
  },
  {
    question: "Where is the workshop?",
    answer:
      "Both sessions are held at EPIC Innovation, 100 Manchester Street, Christchurch Central City.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Roadmap Workshop",
      description:
        "A practical two-hour strategy workshop for Smart Websites clients to identify valuable AI opportunities and build a 90-day roadmap.",
      url: "https://christchurch-ai.com/smart-roadmap",
      publisher: {
        "@type": "Organization",
        name: "Christchurch AI",
        url: "https://christchurch-ai.com",
      },
      about: [
        "Artificial intelligence strategy",
        "AI roadmap planning",
        "Business workflow improvement",
      ],
    },
    ...sessions.map((session) => ({
      "@type": "Event",
      name: `AI Roadmap Workshop - ${session.label}`,
      startDate: session.startDate,
      endDate: session.endDate,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      url: session.href,
      location: {
        "@type": "Place",
        name: "EPIC Innovation",
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 Manchester Street",
          addressLocality: "Christchurch Central City",
          addressRegion: "Canterbury",
          addressCountry: "NZ",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Smart Websites and the AI Coaching Academy",
      },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function SmartMark() {
  return (
    <span className="relative flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden">
      <span className="absolute left-2 top-1 grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#2ea3f2] opacity-80" />
        ))}
      </span>
      <span className="absolute bottom-1 right-1 h-9 w-10 -skew-x-12 rounded-br-2xl rounded-tl-lg bg-gradient-to-br from-[#64bc6c] to-[#1582c4]" />
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className={`mb-3 text-sm font-black uppercase tracking-[0.3em] ${dark ? "text-[#e0cd00]" : "text-[#0c71c3]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black uppercase leading-tight md:text-5xl ${dark ? "text-[#ffffff]" : "text-[#082263]"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-[#ffffff]/76" : "text-[#4c5b68]"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${
              dark ? "bg-[#e0cd00] text-[#082263]" : "bg-[#64bc6c] text-[#ffffff]"
            }`}
          >
            +
          </span>
          <span className={dark ? "text-[#ffffff]/82" : "text-[#34495d]"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
            <SmartMark />
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
            href="#dates"
            className="rounded-full bg-[#e0cd00] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#082263] shadow-lg shadow-black/20 transition hover:bg-[#ffffff] hover:text-[#005da0]"
          >
            Dates
          </a>
        </div>
      </header>

      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#005da0] px-6 pb-28 pt-36 text-center text-[#ffffff]">
        <Image
          src="/images/techweek/ai-roadmap-workshop.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#005da0]/88" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-white [clip-path:polygon(0_55%,50%_92%,100%_50%,100%_100%,0_100%)]" />

        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-base font-black uppercase tracking-[0.42em] text-[#ffffff]/70">
            Smart Websites x AI Coaching Academy
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.98] tracking-normal text-[#ffffff] drop-shadow-lg md:text-7xl">
            AI Roadmap Workshop
          </h1>
          <div className="mx-auto my-9 h-2 w-32 bg-[#e0cd00]" />
          <p className="mx-auto max-w-3xl text-xl font-bold leading-relaxed text-[#ffffff]/86 md:text-2xl">
            A practical, two-hour strategy workshop for Smart Websites clients.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#ffffff]/78">
            Identify the most valuable ways to use AI in your business, select a manageable
            set of priorities, and build a practical roadmap for the next three months.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#dates"
              className="rounded-full bg-[#0c71c3] px-8 py-4 text-base font-black uppercase tracking-wide text-[#ffffff] shadow-xl shadow-black/25 ring-1 ring-[#ffffff]/20 transition hover:bg-black"
            >
              View Workshop Dates
            </a>
            <a
              href="#plan"
              className="rounded-full border-2 border-[#ffffff]/75 px-8 py-4 text-base font-black uppercase tracking-wide text-[#ffffff] transition hover:border-[#e0cd00] hover:bg-[#e0cd00] hover:text-[#082263]"
            >
              See The Process
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <SectionIntro
            eyebrow="Choose priorities"
            title="Stop Collecting AI Ideas. Start Choosing Priorities."
            copy="New AI tools arrive every week. Without a strategy, it is easy to spend hours experimenting without producing meaningful business results."
          />
          <div className="border-l-4 border-[#e0cd00] bg-[#f5fbff] p-8 shadow-sm">
            <p className="mb-6 text-lg font-semibold leading-relaxed text-[#34495d]">
              During this workshop, you will examine how work currently gets done across your
              business and identify where AI could:
            </p>
            <CheckList items={aiOpportunities} />
            <p className="mt-7 text-lg font-semibold leading-relaxed text-[#082263]">
              You will then decide which opportunities deserve attention now, which can wait,
              and what you should test during the next 90 days.
            </p>
          </div>
        </div>
      </section>

      <section id="plan" className="bg-[#f3f8fc] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Your three-month AI plan"
            title="A guided four-stage process."
            copy="You will leave with a focused plan you can begin implementing immediately."
          />

          <div className="grid gap-5 md:grid-cols-4">
            {stages.map((stage, index) => (
              <article
                key={stage.title}
                className="border border-[#0c71c3]/20 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e0cd00] text-lg font-black text-[#082263]">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-black uppercase text-[#005da0]">
                  {stage.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4c5b68]">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082263] px-6 py-20 text-[#ffffff]">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <SectionIntro
            eyebrow="What you will leave with"
            title="Decisions, priorities, and next actions."
            copy="By the end of the workshop, you will have practical outputs you can use straight away."
            dark
          />
          <div className="border border-[#0c71c3] bg-[#0d2ea5]/55 p-8 shadow-2xl shadow-black/30">
            <CheckList items={outcomes} dark />
            <p className="mt-7 border-t border-[#ffffff]/16 pt-6 text-lg font-bold leading-relaxed text-[#ffffff]">
              You will leave with decisions, priorities, and next actions - not another
              sprawling list of tools to investigate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Bring a real business challenge"
            title="This is a working session built around your business."
            copy="Bring a laptop and one or two genuine workflows that you would like to improve. The more specific your challenge, the more useful your roadmap will be."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <div
                key={challenge}
                className="border border-[#0c71c3]/18 bg-[#f5fbff] px-5 py-4 text-sm font-bold leading-snug text-[#082263]"
              >
                {challenge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fc] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <SectionIntro
              eyebrow="Who should attend?"
              title="For Smart Websites clients who want practical, commercially useful AI decisions."
            />
            <CheckList items={audience} />
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-black uppercase text-[#005da0]">
              No technical or coding experience is required.
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#4c5b68]">
              <p>
                Beginners will receive a clear process for getting started.
              </p>
              <p>
                People already using tools such as ChatGPT, Microsoft Copilot, Claude,
                or Gemini will learn how to use them more deliberately and strategically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="flex items-center justify-center bg-[#005da0] p-10 text-[#ffffff]">
            <div className="text-center">
              <SmartMark />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.3em] text-[#e0cd00]">
                Facilitated by
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-none">
                Caelan Huntress
              </h2>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-[#082263] md:text-5xl">
              AI educator, business coach, and founder of the AI Coaching Academy.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[#4c5b68]">
              <p>
                He helps professionals and organisations develop practical AI capability
                through guided experimentation, strategic planning, and real-world application.
              </p>
              <p>
                His workshops focus on helping people use AI to think faster, create smarter,
                improve everyday workflows, and make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fc] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <SectionIntro
            eyebrow="Co-hosted workshop"
            title="Smart Websites and the AI Coaching Academy."
            copy="Smart Websites and the AI Coaching Academy have created this workshop to help Smart Websites clients prepare for the next stage of digital business."
          />
          <div className="bg-white p-8 shadow-sm">
            <div className="space-y-5 text-lg leading-relaxed text-[#4c5b68]">
              <p>
                Your website is one part of your digital presence. AI can influence how you
                create content, serve customers, manage information, make decisions, and
                operate behind the scenes.
              </p>
              <p className="font-bold text-[#082263]">
                This workshop will help you connect those possibilities to a focused business plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Workshop details"
            title="Two focused hours at EPIC Innovation."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {workshopDetails.map(([label, value]) => (
              <div key={label} className="border-t-4 border-[#64bc6c] bg-[#f5fbff] p-5">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#0c71c3]">
                  {label}
                </p>
                <p className="text-lg font-black leading-snug text-[#082263]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dates" className="bg-[#082263] px-6 py-20 text-[#ffffff]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#e0cd00]">
              Choose your workshop date
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
              Select the session that works best for you.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#ffffff]/76">
              Registration opens on Humanitix in a new browser tab.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sessions.map((session) => (
              <article
                key={session.label}
                className="border border-[#ffffff]/18 bg-[#ffffff]/8 p-8 shadow-2xl shadow-black/20"
              >
                <p className="mb-4 text-sm font-black uppercase tracking-[0.26em] text-[#e0cd00]">
                  {session.label}
                </p>
                <h3 className="text-3xl font-black uppercase leading-tight text-[#ffffff]">
                  {session.date}
                </h3>
                <p className="mt-4 text-xl font-black text-[#ffffff]">{session.time}</p>
                <p className="mt-2 text-base font-semibold text-[#ffffff]/72">{session.venue}</p>
                <a
                  href={session.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full bg-[#e0cd00] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#082263] shadow-xl shadow-black/25 transition hover:bg-[#ffffff] hover:text-[#005da0]"
                >
                  {session.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c71c3] px-6 py-20 text-center text-[#ffffff]">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#e0cd00]">
            Clearer AI direction
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            Give your business a clearer AI direction.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-bold leading-relaxed text-[#ffffff]/84">
            Two focused hours could save you months of scattered experimentation.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#ffffff]/74">
            Choose your workshop date and leave with a practical AI strategy for the next 90 days.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {sessions.map((session) => (
              <a
                key={session.shortButton}
                href={session.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#e0cd00] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#082263] shadow-xl shadow-black/20 transition hover:bg-[#ffffff] hover:text-[#005da0]"
              >
                {session.shortButton}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="FAQ" title="Frequently asked questions." />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="border border-[#0c71c3]/18 bg-[#f5fbff] p-6">
                <h3 className="mb-3 text-xl font-black uppercase leading-snug text-[#005da0]">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-[#4c5b68]">{faq.answer}</p>
              </article>
            ))}
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
