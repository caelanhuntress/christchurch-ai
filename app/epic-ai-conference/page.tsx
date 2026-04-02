import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const pageTheme = {
  "--background": "#f8fafc",
  "--foreground": "#111827",
  "--accent": "#004AAD",
  "--muted": "#eef2f7",
  "--border": "#d6deea",
  "--text-muted": "#4b5563",
} as CSSProperties;

const dayEvents = [
  {
    slug: "am-workshops",
    label: "Morning workshops",
    time: "9:00 AM – 11:45 AM",
    title: "EPIC AI Conference — AM Workshops",
    href: "https://events.humanitix.com/epic-ai-conference-am",
    image: "/images/epic-ai-conference/epic-ai-am.png",
    description:
      "The morning workshop block is designed for people who want practical experience, not just theory. Across five fast, hands-on sessions, attendees explore how AI can support communication, workflow design, nonprofit impact, and visual creation.",
    details:
      "Hosted by the Christchurch AI Meetup Group as part of TechWeekNZ, the EPIC AI Conference brings together local and international practitioners for a compact, high-value morning of experimentation and applied learning. Whether you’re just getting started, or already using AI at work, these sessions will give you fresh ways to think about what the tools can do, where they fit, and how to use them more effectively.",
  },
  {
    slug: "coffee-and-jam",
    label: "Community lunch",
    time: "12:00 PM – 1:15 PM",
    title: "Ministry of Awesome: Coffee & Jam",
    href: "https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371",
    companyName: "Ministry of Awesome",
    companyUrl: "https://ministryofawesome.com/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26",
    description:
      "Coffee & Jam is Christchurch’s longest-running founder meetup: a lunchtime tradition where the Ōtautahi startup community comes together to connect, learn from founders across different stages, and collaborate on ideas that help startups thrive.",
    details:
      "With light refreshments provided at EPIC, this session creates a natural bridge between the morning workshops and the afternoon presentations. It broadens the day beyond AI tooling alone and roots the programme in the wider innovation community around EPIC.",
  },
  {
    slug: "pm-presentations",
    label: "Afternoon presentations",
    time: "1:30 PM – 5:00 PM",
    title: "EPIC AI Conference — PM Presentations",
    href: "https://events.humanitix.com/epic-ai-conference-pm",
    image: "/images/epic-ai-conference/epic-ai-pm.png",
    description:
      "The afternoon speaker session of the EPIC AI Conference brings together practitioners working at the edge of AI implementation, risk, infrastructure, and strategy.",
    details:
      "These are not abstract future-gazing talks. They are grounded presentations from people thinking deeply about what happens when AI moves from prototype to production, from possibility to governance, and from technical novelty to social consequence. Across four sessions, attendees hear perspectives on operational excellence, AI safety, privacy-preserving infrastructure, and the long-term future AI may unlock.",
  },
  {
    slug: "leadership-panel",
    label: "Evening panel",
    time: "5:30 PM – 7:00 PM",
    title: "Leadership in the Age of AI",
    href: "https://events.humanitix.com/epic-ai-conference-panel",
    image: "/images/epic-ai-conference/epic-ai-panel.png",
    description:
      "The closing panel widens the lens from tools and implementation to leadership, responsibility, trust, and change.",
    details:
      "After a full programme of workshops and presentations, this is where the conversation turns to leadership, responsibility, and the human decisions that shape how AI actually lands inside teams and institutions.",
  },
] as const;

const amSpeakers = [
  {
    name: "Caelan Huntress",
    role: "Founder, AI Coaching Academy · Organiser, Christchurch AI Meetup Group",
    session: "AM Workshops · 9:00–9:30am",
    talk: "Create Your Own AI Coach to Learn Anything",
    image: "/images/epic-ai-conference/headshots/caelan-huntress.jpg",
    linkedin: "https://nz.linkedin.com/in/caelanhuntress",
    bio:
      "Caelan Huntress opens the day with an interactive workshop on using conversational AI as a partner for learning, reflection, and growth. As LLMs become more conversational, asking better questions shapes your AI thinking partner around the goals you care about and the way you learn best.",
  },
  {
    name: "Hannah Hardy-Jones",
    role: "Workshop speaker",
    session: "AM Workshops · 9:30–10:00am",
    talk: "Transform Meetings into Actionable Insights",
    image: "/images/epic-ai-conference/headshots/hannah-hardy-jones.jpg",
    linkedin: "https://nz.linkedin.com/in/hannah-hardy-jones-63b3b238",
    bio:
      "Hannah Hardy-Jones demonstrates how AI can turn conversation into useful outputs, insights, actions, and communications. Her session treats meetings and spoken exchanges as one of the most valuable and underused resources in any organisation.",
  },
  {
    name: "Steve Fox",
    role: "Workshop speaker",
    session: "AM Workshops · 10:00–10:30am",
    talk: "Mapping AI Opportunities in Your Organisation",
    image: "/images/epic-ai-conference/headshots/steve-fox.png",
    linkedin: "https://nz.linkedin.com/in/stevefoxnz",
    bio:
      "Steve Fox introduces a practical framework for identifying where AI can create new value in real workflows. Using a simple sliding scale from manual to fully automated, he guides participants through breaking work into tasks, assessing where AI fits, identifying where human oversight still matters, and estimating the cost and opportunity impact of each change.",
  },
  {
    name: "Lois McClintock",
    role: "Workshop speaker",
    session: "AM Workshops · 10:30–11:00am",
    talk: "AI for Good: Empowering Nonprofits",
    image: "/images/epic-ai-conference/headshots/lois-mcclintock.jpg",
    linkedin: "https://nz.linkedin.com/in/lois-mcclintock",
    bio:
      "Lois McClintock explores how nonprofits can use AI to increase impact, free up volunteer time, and improve operations without needing large budgets or complex systems. Her session includes practical examples from nonprofit work including strategy, social media, fundraising, and policy support.",
  },
  {
    name: "Arthur Machado",
    role: "Workshop speaker",
    session: "AM Workshops · 11:00–11:30am",
    talk: "Filmmaking Frameworks for High-Impact AI Visuals",
    image: "/images/epic-ai-conference/headshots/arthur-machado.jpg",
    linkedin: "https://nz.linkedin.com/in/arthurmachado1",
    bio:
      "Arthur Machado shares a practical visual storytelling framework for prompting better creative assets, from hero images to product mockups. His session encourages attendees to think like directors rather than technicians when working with AI-generated visuals.",
  },
] as const;

const pmSpeakers = [
  {
    name: "Varsha Das",
    role: "Presentation speaker",
    session: "PM Presentations · 1:30–2:15pm",
    talk: "When Code Gets Cheap, Operational Excellence Wins",
    image: "/images/epic-ai-conference/headshots/varsha-das.jpg",
    linkedin: "https://in.linkedin.com/in/varsha-das-se",
    bio:
      "Varsha Das explores why operational excellence becomes the real differentiator when code generation is abundant. Drawing on real production incidents and the realities of running AI systems at scale, she unpacks the failure modes that appear under real load and the patterns that separate demos from dependable services.",
  },
  {
    name: "Emma Humphrey",
    role: "AI Safety ANZ · Presentation speaker",
    session: "PM Presentations · 2:30–3:15pm",
    talk: "AI Self Defence: Risks and Solutions",
    image: "/images/epic-ai-conference/headshots/emma-humphrey.jpg",
    linkedin: "https://www.linkedin.com/in/emma-humphrey17/",
    bio:
      "Emma Humphrey brings experience from AI implementation in the UK Home Office to explore cybercrime, misinformation, bias, digital trust, safety engineering, and responsible procurement. Her session helps attendees move beyond hype into more mature thinking about AI governance and risk.",
  },
  {
    name: "Dr Chandranil Chakraborttii",
    role: "Presentation speaker",
    session: "PM Presentations · 3:30–4:15pm",
    talk: "Ghost Vectors: Securing AI Privacy Without Sacrificing System Performance",
    image: "/images/epic-ai-conference/headshots/chandranil-chakraborttii.jpg",
    linkedin: "https://www.linkedin.com/in/chandranil-chakraborttii-a7552ba2/",
    bio:
      "Dr Chandranil Chakraborttii examines how ‘ghost vectors’ can expose supposedly removed information, why conventional deletion methods fail in high-dimensional environments, and what architects can do instead. Attendees gain insight into privacy-by-design approaches that improve both compliance and performance.",
  },
  {
    name: "Caelan Huntress",
    role: "Founder, AI Coaching Academy · Organiser, Christchurch AI Meetup Group",
    session: "PM Presentations · 4:30–5:00pm",
    talk: "The Case for a Superabundant Future",
    image: "/images/epic-ai-conference/headshots/caelan-huntress.jpg",
    linkedin: "https://nz.linkedin.com/in/caelanhuntress",
    bio:
      "To close the afternoon, Caelan Huntress zooms out from present-day implementation into the larger human story. Drawing on recent writings from Dario Amodei and Peter Diamandis, this talk explores the idea that AI may not just change how we work, but could also change what it means to be human — for the better.",
  },
] as const;

const panelists = [
  {
    name: "Anya Anderson",
    role: "Founder and CEO, RedSeed",
    image: "/images/epic-ai-conference/headshots/anya-anderson.jpg",
    linkedin: "https://nz.linkedin.com/in/anyaanderson",
    companyName: "RedSeed",
    companyUrl: "https://www.redseed.com/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26",
    bio:
      "Anya Anderson leads RedSeed, a corporate training platform that creates a coaching culture to build high-performing teams. She brings a leadership development perspective to the conversation about trust, capability, and organisational change.",
  },
  {
    name: "Julie Ryan",
    role: "CEO, Caitlyn",
    image: "/images/epic-ai-conference/headshots/julie-ryan.jpg",
    linkedin: "https://www.linkedin.com/in/julie-ryan-03872b15/",
    companyName: "Caitlyn",
    companyUrl: "https://www.caitlyn.ai/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26",
    bio:
      "Julie Ryan leads Caitlyn, an AI-powered knowledge platform that turns agricultural and research-led knowledge into trusted, usable insight. Her perspective helps ground the discussion in practical adoption, trusted information, and sector-specific usefulness.",
  },
  {
    name: "Brad Fraser",
    role: "Head of AI Solutions & CEO, Agentic Intelligence",
    image: "/images/epic-ai-conference/headshots/bradley-fraser.jpg",
    linkedin: "https://www.linkedin.com/in/bradley-fraser-a8135052/",
    companyName: "Agentic Intelligence",
    companyUrl: "https://www.agenticintelligence.co.nz/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26",
    bio:
      "Brad Fraser helps organisations move beyond experimentation into real capability building. His contribution focuses on adoption, solution design, and what meaningful AI implementation looks like beyond surface-level hype.",
  },
  {
    name: "Tom Sweeney",
    role: "Serial Founder and Director",
    image: "/images/epic-ai-conference/headshots/tom-sweeney.jpg",
    linkedin: "https://www.linkedin.com/in/tomsweeney/",
    bio:
      "Tom Sweeney brings a founder and systems perspective shaped by companies that leverage systems and human capital to achieve strong business outcomes. His voice adds breadth to the discussion about leadership, performance, and navigating uncertainty with discipline.",
  },
] as const;

const faq = [
  {
    question: "Do I need to register separately for each event?",
    answer:
      "Yes. Each session has its own Humanitix registration page, so this page acts as a guide to the full programme while keeping the direct event links in one place.",
  },
  {
    question: "Where is the conference happening?",
    answer:
      "The programme is centred on EPIC Innovation, 78–100 Manchester Street in Christchurch. Coffee & Jam is also hosted at EPIC, making it easy to move through the day as a continuous community event.",
  },
  {
    question: "What is the overall shape of the day?",
    answer:
      "The day begins with hands-on workshops, moves into a lunchtime networking session, continues with presentations on implementation and strategy, and closes with a leadership panel about trust, capability, and adoption.",
  },
  {
    question: "Who is the day for?",
    answer:
      "Professionals, founders, operators, managers, community builders, nonprofit teams, consultants, and curious learners who want to engage with AI in a grounded, practical, community-minded way.",
  },
  {
    question: "Where do I go to continue building my AI Literacy?",
    answer:
      "Join the Christchurch Artificial Intelligence Meetup Group to be notified of future events. Join the AI Coaching Academy for practical games and activities to build your AI literacy, and to join a community of ambitious professionals practicing the tools of the future.",
  },
] as const;

export const metadata: Metadata = {
  title: "EPIC AI Conference Christchurch | TechWeekNZ at EPIC Innovation",
  description:
    "A full-day TechWeekNZ programme guide for the EPIC AI Conference in Christchurch, including workshops, Coffee & Jam, afternoon presentations, and the Leadership in the Age of AI panel.",
  keywords: [
    "EPIC AI Conference Christchurch",
    "TechWeekNZ Christchurch",
    "Christchurch AI community",
    "EPIC Innovation AI event",
    "AI workshops Christchurch",
    "Leadership in the Age of AI panel",
  ],
  alternates: { canonical: "https://christchurch-ai.com/epic-ai-conference" },
  openGraph: {
    title: "EPIC AI Conference Christchurch | TechWeekNZ",
    description:
      "A community-focused guide to a full day of AI workshops, networking, presentations, and leadership discussion at EPIC Innovation in Christchurch.",
    url: "https://christchurch-ai.com/epic-ai-conference",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
    images: ["https://christchurch-ai.com/images/epic-ai-conference/epic-ai-am.png"],
  },
};

const eventSchema = dayEvents.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "EPIC Innovation Centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "78-100 Manchester Street",
      addressLocality: "Christchurch",
      addressRegion: "Canterbury",
      addressCountry: "NZ",
    },
  },
  url: event.href,
  organizer: {
    "@type": "Organization",
    name: event.slug === "coffee-and-jam" ? "Ministry of Awesome" : "Christchurch AI",
  },
}));

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "EPIC AI Conference Christchurch",
  description:
    "A TechWeekNZ programme page for the EPIC AI Conference in Christchurch, bringing together workshops, networking, presentations, and the closing leadership panel.",
  url: "https://christchurch-ai.com/epic-ai-conference",
  publisher: {
    "@type": "Organization",
    name: "Christchurch AI",
    url: "https://christchurch-ai.com",
  },
};

function RsvpBlock() {
  return (
    <div className="rounded-3xl border p-5 md:p-6" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
      <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "var(--accent)" }}>
        Registration Links
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {dayEvents.map((event) => (
          <div key={event.slug} className="group">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] mb-2 text-center" style={{ color: "#0f172a" }}>
              {event.time}
            </div>
            <a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-4 rounded-2xl text-sm font-semibold text-center border transition-all hover:!text-white hover:!bg-[#004aad]"
              style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
            >
              {event.label}
            </a>
            <p className="text-xs mt-2 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: '#ca8a04' }}>
              To attend the whole day, please RSVP to all 4 events individually
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpeakerCard({
  name,
  role,
  session,
  talk,
  bio,
  image,
  linkedin,
}: {
  name: string;
  role: string;
  session: string;
  talk: string;
  bio: string;
  image?: string;
  linkedin?: string;
}) {
  return (
    <div className="rounded-3xl border p-5 md:p-6 grid md:grid-cols-[160px_1fr] gap-5" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
      <div>
        {image ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
            <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
          </div>
        ) : (
          <div
            className="aspect-[4/5] w-full rounded-2xl border flex items-center justify-center text-center text-xs uppercase tracking-[0.18em] px-4"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--muted)" }}
          >
            Headshot
            <br />
            Placeholder
          </div>
        )}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
          {session}
        </div>
        <h3 className="text-2xl font-bold mb-1" style={{ color: "#004aad" }}>{name}</h3>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>
          {talk}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {bio}
        </p>
        {linkedin ? (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4" style={{ color: "#004aad" }} aria-label={`${name} LinkedIn`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H6.26V17H8.34M7.3 9.8A1.2 1.2 0 1 0 7.3 7.4A1.2 1.2 0 0 0 7.3 9.8M17.74 17V13.53C17.74 11.67 16.74 10.57 15.12 10.57C13.81 10.57 13.22 11.29 12.89 11.79V10.67H10.81C10.84 11.41 10.81 17 10.81 17H12.89V13.46C12.89 13.27 12.9 13.08 12.96 12.95C13.11 12.57 13.45 12.18 14.02 12.18C14.77 12.18 15.07 12.75 15.07 13.58V17H17.74Z"/></svg>
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

function PanelistCard({
  name,
  role,
  bio,
  image,
  linkedin,
  companyName,
  companyUrl,
}: {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  companyName?: string;
  companyUrl?: string;
}) {
  return (
    <div className="rounded-2xl border p-5 h-full" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
      {image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border mb-4" style={{ borderColor: "var(--border)" }}>
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
      ) : (
        <div
          className="aspect-[4/5] w-full rounded-2xl border flex items-center justify-center text-center text-xs uppercase tracking-[0.18em] px-4 mb-4"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--muted)" }}
        >
          Headshot
          <br />
          Placeholder
        </div>
      )}
      <h3 className="text-xl font-bold mb-1" style={{ color: "#004aad" }}>{name}</h3>
      <p className="text-sm mb-3" style={{ color: "var(--foreground)" }}>
        {companyName && companyUrl ? (
          <>
            {role.split(`, ${companyName}`)[0]}
            {role.includes(companyName) ? <>, <a href={companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>{companyName}</a></> : role}
          </>
        ) : (
          role
        )}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {bio}
      </p>
      {linkedin ? (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4" style={{ color: "#004aad" }} aria-label={`${name} LinkedIn`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H6.26V17H8.34M7.3 9.8A1.2 1.2 0 1 0 7.3 7.4A1.2 1.2 0 0 0 7.3 9.8M17.74 17V13.53C17.74 11.67 16.74 10.57 15.12 10.57C13.81 10.57 13.22 11.29 12.89 11.79V10.67H10.81C10.84 11.41 10.81 17 10.81 17H12.89V13.46C12.89 13.27 12.9 13.08 12.96 12.95C13.11 12.57 13.45 12.18 14.02 12.18C14.77 12.18 15.07 12.75 15.07 13.58V17H17.74Z"/></svg>
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>
      ) : null}
    </div>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/6] w-full overflow-hidden rounded-3xl border mb-6" style={{ borderColor: "var(--border)" }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />
    </div>
  );
}

export default function EpicAIConferencePage() {
  return (
    <div className="min-h-screen" style={pageTheme}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <SiteHeader />

      <main>
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ borderColor: "var(--border)", color: "var(--accent)", background: "#ffffff" }}
              >
                TechWeekNZ · EPIC Innovation · Christchurch · Thursday 21 May
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                EPIC AI Conference
                <br />
                an all-day TechWeek26 event in Christchurch
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "#ffffff" }}>
                The EPIC AI conference is a day of workshops, community conversation, presentations,
                and leadership dialogue at <a href="https://epicinnovation.co.nz/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 700 }}>EPIC Innovation</a>. This event is part of <a href="https://techweek.co.nz/?utm_source=chchai&utm_medium=landingpage&utm_campaign=epic-26" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 700 }}>TechWeekNZ</a>,
                Aotearoa New Zealand’s national festival of tech and innovation.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: "#ffffff" }}>
                The spirit of the day is shaped by the themes of this year&apos;s TechWeek festival:
                <strong style={{ color: "#ffffff" }}> innovation, inspiration and impact across Aotearoa</strong>; bringing together
                <strong style={{ color: "#ffffff" }}> ideas, people and opportunities</strong>; and connecting innovators with communities
                across the motu to help shape New Zealand’s future.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: "#ffffff" }}>
                Throughout the day, the emphasis is on local capability, shared learning, practical experimentation,
                thoughtful discussion, and the wider Christchurch AI community. This will collect and share insights about how AI is being explored, applied, and led in Aotearoa.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "14+", label: "speakers, panelists, founders, and facilitators" },
                  { stat: "4", label: "linked events across one shared TechWeek day" },
                  { stat: "1", label: "community hub at EPIC Innovation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
                    <div className="text-3xl font-bold mb-2" style={{ color: "var(--accent)" }}>
                      {item.stat}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border p-6 md:p-7 lg:sticky lg:top-24" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                TechWeek26
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>The Art of the Possible</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>The future isn’t something that happens to us — it’s something we create.</p>
                <p>Techweek26 turns imagination into execution: ideas you can trust, actions you can take, and outcomes that make a difference.</p>
                <p>As AI is moving from optional to operational, we use events like the EPIC AI Conference to increase our collective momentum as a community.</p>
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/epic-ai-conference/kelly-anne-findlay.png"
                    alt="Kelly-Anne Findlay"
                    width={64}
                    height={64}
                    className="rounded-full border"
                    style={{ borderColor: "var(--border)" }}
                  />
                  <div>
                    <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-muted)" }}>
                      “Learnt so much about how much AI has advanced in the last 12 months. Also how to use it more efficiently for some tasks. Great presenters, and fantastic that it was interactive by using it in the course. Easy to go back and see what we learnt to reference it and show other staff members.”
                    </p>
                    <p className="text-sm font-semibold mt-3" style={{ color: "var(--foreground)" }}>
                      – Kelly-Anne Findlay
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Thursday, 21 May, 2026 @ EPIC Innovation, 100 Manchester St, Christchurch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#004aad" }}>A celebration of Christchurch’s AI community at TechWeek26</h2>
            <div className="space-y-4 text-base leading-relaxed max-w-4xl" style={{ color: "var(--text-muted)" }}>
              <p>
                The EPIC AI Conference brings together different parts of the local ecosystem in one place: educators, founders, nonprofit voices, infrastructure thinkers, AI safety practitioners, startup builders, and leaders responsible for real teams and real decisions.
              </p>
              <p>
                That breadth allows us to gain a holistic view of the multifaceted Artificial Intelligence community. The morning workshops focus on skills and experimentation. Lunchtime Coffee & Jam expands the conversation into Christchurch’s founder and innovation scene. The afternoon presentations move into operational, ethical, and technical questions. The evening panel examines the evolution of leadership, trust, and the human side of adoption.
              </p>
              <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
                <ol className="space-y-2 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                  <li>1. <strong style={{ color: "var(--foreground)" }}>AM Workshops</strong> — 9–11:45am — <a href="https://events.humanitix.com/epic-ai-conference-am" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>RSVP here</a></li>
                  <li>2. <strong style={{ color: "var(--foreground)" }}>Lunchtime Coffee &amp; Jam</strong> — 12–1:15pm — <a href="https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>RSVP here</a></li>
                  <li>3. <strong style={{ color: "var(--foreground)" }}>PM Presentations</strong> — 1:30–5pm — <a href="https://events.humanitix.com/epic-ai-conference-pm" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>RSVP here</a></li>
                  <li>4. <strong style={{ color: "var(--foreground)" }}>Evening Panel</strong> — 5:30–7pm — <a href="https://events.humanitix.com/epic-ai-conference-panel" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>RSVP here</a></li>
                </ol>
                <p className="text-sm md:text-base mt-4" style={{ color: "var(--text-muted)" }}>
                  RSVP for the entire day, or only the sessions you want. Free to attend. Tickets are limited; please only RSVP to events you can commit to attending.
                </p>
              </div>
              <p>
                Seen as a whole, the day reflects TechWeek’s wider purpose: creating a space where communities can learn together, share capability, and think seriously about the future they want to build.
              </p>
            </div>
          </div>
        </section>

        <section id="programme" className="px-6 py-14 border-y" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Four Consecutive Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004aad" }}>Full-day AI conference in Christchurch</h2>
            <p className="text-base md:text-lg max-w-4xl mb-10" style={{ color: "var(--text-muted)" }}>
              From morning skill-building to evening leadership reflection, the programme unfolds as a day-long community gathering at EPIC. Each event stands on its own, but together they create a fuller picture of how AI is being explored and discussed in Christchurch during TechWeekNZ.
            </p>
            <SectionImage src="/images/epic-ai-conference/chchai-tw26-bg.png" alt="Christchurch AI TechWeek26 background" />
            <div className="grid gap-5">
              {dayEvents.map((event) => (
                <div
                  key={event.slug}
                  className="rounded-3xl border overflow-hidden"
                  style={{ borderColor: "var(--border)", background: "#ffffff" }}
                >
                  <div className="p-6 md:p-7 grid lg:grid-cols-[180px_1fr_auto] gap-6 items-start">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
                        {event.label}
                      </div>
                      <div className="text-2xl font-bold mb-1" style={{ color: "#0f172a" }}>{event.time}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#004aad" }}>
                        {"companyName" in event && event.companyName && event.companyUrl ? (
                          <a href={event.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad" }}>{event.title}</a>
                        ) : (
                          event.title
                        )}
                      </h3>
                      <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                        {event.description}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {event.details}
                      </p>
                    </div>
                    <div className="lg:w-[210px] w-full">
                      <div className="group">
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-5 py-4 rounded-2xl font-semibold text-sm border transition-all hover:!text-white hover:!bg-[#004aad]"
                          style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
                        >
                          Register
                        </a>
                        <p className="text-xs mt-2 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: '#ca8a04' }}>
                          To attend the whole day, please RSVP to all 4 events individually
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Themes through the day
              </div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>How the programme maps to TechWeek values</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>Digital foundations and skills</strong> show up most clearly in the morning workshops, where attendees build practical confidence and test real applications of AI.
                </p>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>Social good</strong> appears in conversations about nonprofit use, community impact, and the role of trustworthy systems in public life.
                </p>
                <p>
                  <strong style={{ color: "var(--foreground)" }}>Responsible governance</strong> runs through the afternoon talks and the closing panel, especially in discussions of risk, privacy, safety, procurement, leadership, and organisational trust.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Community emphasis
              </div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>Christchurch, not just content</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  The day is rooted in Christchurch’s local innovation network: Christchurch AI as organiser, EPIC as venue, Ministry of Awesome at lunchtime, and a programme that makes room for founders, advisors, operators, and community-minded practitioners.
                </p>
                <p>
                  That local grounding gives the event a different tone from a generic conference. It becomes a place to meet people, compare approaches, share capability, and build the kinds of relationships that help ideas travel beyond a single stage session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="speakers" className="px-6 py-16 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Speakers & Panelists
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004aad" }}>Profiles across the day</h2>
            <p className="text-base md:text-lg max-w-4xl mb-10" style={{ color: "var(--text-muted)" }}>
              These speaker sections are intentionally longer and more editorial, so visitors can understand not just the names on the programme, but the kind of experience, perspective, and conversation each person brings into the room. Image areas are left as placeholders for headshots to be added later.
            </p>

            <div className="space-y-12">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                  Morning workshops
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#004aad" }}>AM Workshops · 9:00 AM to 11:45 AM</h3>
                <div className="grid gap-5">
                  {amSpeakers.map((speaker, index) => (
                    <SpeakerCard key={`${speaker.name}-${index}`} {...speaker} />
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                  Afternoon presentations
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#004aad" }}>PM Presentations · 1:30 PM to 5:00 PM</h3>
                <div className="grid gap-5">
                  {pmSpeakers.map((speaker, index) => (
                    <SpeakerCard key={`${speaker.name}-${index}`} {...speaker} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border p-6 md:p-7" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                  Evening panel
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
                  &quot;Leadership in the Age of AI&quot; Panel · 5:30 PM to 7:00 PM
                  <br />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>Featuring:</span>
                </h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                  {panelists.map((panelist) => (
                    <PanelistCard key={panelist.name} {...panelist} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="registration" className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Registration
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#004aad" }}>Event links for the full day</h2>
              <p className="text-base md:text-lg max-w-4xl" style={{ color: "var(--text-muted)" }}>
                Each part of the programme is registered separately through Humanitix. The links below make it easy to move from this guide to the relevant event pages.
              </p>
            </div>
            <RsvpBlock />
          </div>
        </section>

        <section className="px-6 py-16 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-10" style={{ color: "#004aad" }}>Useful details</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.question} className="rounded-2xl border p-5 md:p-6" style={{ borderColor: "var(--border)", background: "#ffffff" }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#000000" }}>{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.question === "Where do I go to continue building my AI Literacy?" ? (
                      <>
                        Join the <a href="https://www.meetup.com/christchurch-ai/" target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>Christchurch Artificial Intelligence Meetup Group</a>, to be notified of future events. Join the <a href="https://ai-coaching.academy/" target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>AI Coaching Academy</a> for practical games and activities to build your AI literacy, and to join a community of ambitious professionals practicing the tools of the future.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "#ffffff" }}>
        <div>
          <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">
            Christchurch AI
          </Link>{" "}
          · TechWeekNZ programme page for <a href="http://epicinnovation.co.nz/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="font-semibold">EPIC Innovation</a>, Christchurch, New Zealand
        </div>
        <div className="mt-2">
          Website design vibecoded by <a href="https://caelanhuntress.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="font-semibold">Caelan Huntress</a> and his <a href="https://openclaws.nz" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="font-semibold">OpenClaw</a>
        </div>
      </footer>
    </div>
  );
}
