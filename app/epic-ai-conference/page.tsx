import type { Metadata } from "next";
import Link from "next/link";

const dayEvents = [
  {
    slug: "am-workshops",
    label: "Morning workshops",
    time: "9:00 AM – 11:45 AM",
    title: "EPIC AI Conference — AM Workshops",
    href: "https://events.humanitix.com/epic-ai-conference-am",
    description:
      "The morning workshop block is designed for people who want practical experience, not just theory. Across five fast, hands-on sessions, attendees explore how AI can support communication, workflow design, nonprofit impact, and visual creation.",
    details:
      "Hosted by the Christchurch AI Meetup Group as part of TechWeek26, this session brings together local and international practitioners for a compact morning of experimentation and applied learning. It is suited to professionals, founders, operators, and curious learners who want methods they can use straight away.",
  },
  {
    slug: "coffee-and-jam",
    label: "Community lunch",
    time: "12:00 PM – 1:15 PM",
    title: "Ministry of Awesome: Coffee & Jam",
    href: "https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371",
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
    description:
      "The afternoon session brings together practitioners working at the edge of AI implementation, risk, infrastructure, and strategy. These are grounded presentations from people thinking deeply about what happens when AI moves from prototype to production, from possibility to governance, and from technical novelty to social consequence.",
    details:
      "Across four sessions, attendees hear perspectives on operational excellence, AI safety, privacy-preserving infrastructure, and the wider future AI may unlock. It is designed for professionals who want stronger mental models, sharper questions, and a clearer sense of what matters next.",
  },
  {
    slug: "leadership-panel",
    label: "Evening panel",
    time: "5:30 PM – 7:00 PM",
    title: "Leadership in the Age of AI",
    href: "https://events.humanitix.com/epic-ai-conference-panel",
    description:
      "The closing panel widens the lens from tools and implementation to leadership, responsibility, trust, and change. It asks what strong leadership looks like when technology changes faster than organisations do, and when the quality of judgment matters as much as the quality of tools.",
    details:
      "Designed for executives, founders, team leaders, managers, consultants, and professionals, the panel explores capability, culture, adoption, and decision-making in an AI-shaped world. It closes the day with a live conversation about the human choices that shape how AI lands inside teams and institutions.",
  },
] as const;

const speakers = [
  {
    name: "Caelan Huntress",
    role: "Founder, AI Coaching Academy · Organiser, Christchurch AI Meetup Group",
    session: "AM Workshops · 9:00–9:30am",
    talk: "Create Your Own AI Coach to Learn Anything",
    bio:
      "Caelan Huntress opens the day with a workshop on using conversational AI as a partner for learning, reflection, and growth. Framed around coaching as a meta-skill, the session focuses on asking better questions and shaping AI around the goals that matter to each learner.",
  },
  {
    name: "Hannah Hardy-Jones",
    role: "Workshop speaker",
    session: "AM Workshops · 9:30–10:00am",
    talk: "Transform Meetings into Actionable Insights",
    bio:
      "Hannah Hardy-Jones demonstrates how AI can turn conversation into useful outputs, insights, actions, and communications. Her session treats meetings and spoken exchanges as one of the most valuable and underused resources in any organisation.",
  },
  {
    name: "Steve Fox",
    role: "Workshop speaker",
    session: "AM Workshops · 10:00–10:30am",
    talk: "Mapping AI Opportunities in Your Organisation",
    bio:
      "Steve Fox introduces a practical framework for identifying where AI can create value in real workflows. Using a simple scale from manual to fully automated, he guides attendees through breaking work into tasks, assessing where AI fits, and identifying where human oversight still matters.",
  },
  {
    name: "Lois McClintock",
    role: "Workshop speaker",
    session: "AM Workshops · 10:30–11:00am",
    talk: "AI for Good: Empowering Nonprofits",
    bio:
      "Lois McClintock explores how nonprofits can use AI to increase impact, free volunteer time, and improve operations without requiring large budgets or complex systems. Her session includes practical examples across strategy, social media, fundraising, and policy support.",
  },
  {
    name: "Arthur Machado",
    role: "Workshop speaker",
    session: "AM Workshops · 11:00–11:30am",
    talk: "Filmmaking Frameworks for High-Impact AI Visuals",
    bio:
      "Arthur Machado brings a visual storytelling lens to AI image generation, encouraging attendees to think like directors rather than technicians. His workshop focuses on creating stronger prompts and better creative assets, from hero images to product mockups.",
  },
  {
    name: "Emma Humphrey",
    role: "AI Safety ANZ · Speaker in Coffee & Jam and PM Presentations",
    session: "Coffee & Jam · PM Presentations",
    talk: "AI Self Defence: Risks and Solutions",
    bio:
      "Emma Humphrey appears in both the lunchtime community session and the afternoon programme. In the presentations block she draws on experience from AI implementation in the UK Home Office to examine cybercrime, misinformation, bias, digital trust, safety engineering, and responsible procurement.",
  },
  {
    name: "Nick Latty",
    role: "Agentic Intelligence",
    session: "Coffee & Jam · 12:00–1:15pm",
    talk: "Coffee & Jam speaker",
    bio:
      "Nick Latty joins the Ministry of Awesome lunchtime meetup as part of a founder lineup rooted in Christchurch’s startup ecosystem. His presence helps connect the AI programme to the broader local community of builders, entrepreneurs, and ecosystem supporters.",
  },
  {
    name: "Arindam Bose",
    role: "Aesculytics Limited",
    session: "Coffee & Jam · 12:00–1:15pm",
    talk: "Coffee & Jam speaker",
    bio:
      "Arindam Bose is part of the Coffee & Jam lunchtime lineup, contributing to the day’s emphasis on shared learning and cross-sector conversation. The session creates space for attendees to meet founders and innovators beyond their own usual circles.",
  },
  {
    name: "Varsha Das",
    role: "Presentation speaker",
    session: "PM Presentations · 1:30–2:15pm",
    talk: "When Code Gets Cheap, Operational Excellence Wins",
    bio:
      "Varsha Das examines what happens when AI makes software faster and cheaper to build but leaves reliability, recovery, and trust as the real differentiators. Her talk draws on production incidents and the realities of running AI systems at scale.",
  },
  {
    name: "Dr Chandranil Chakraborttii",
    role: "Presentation speaker",
    session: "PM Presentations · 3:30–4:15pm",
    talk: "Ghost Vectors: Securing AI Privacy Without Sacrificing System Performance",
    bio:
      "Dr Chandranil Chakraborttii explores privacy risks in vector databases, including how deleted or updated data can leave structural traces behind. His session looks at privacy-by-design approaches that improve both compliance and system performance.",
  },
  {
    name: "Anya Anderson",
    role: "Founder and CEO, RedSeed",
    session: "Leadership Panel · 5:30–7:00pm",
    talk: "Panelist",
    bio:
      "Anya Anderson leads RedSeed, a corporate training platform focused on creating coaching cultures and high-performing teams. On the panel, she brings a leadership development perspective to the conversation about trust, capability, and organisational change.",
  },
  {
    name: "Julie Ryan",
    role: "CEO, Caitlyn",
    session: "Leadership Panel · 5:30–7:00pm",
    talk: "Panelist",
    bio:
      "Julie Ryan leads Caitlyn, an AI-powered knowledge platform that turns agricultural and research-led knowledge into trusted, usable insight. Her perspective helps ground the discussion in practical adoption, trusted information, and sector-specific usefulness.",
  },
  {
    name: "Brad Fraser",
    role: "Head of AI Solutions & CEO, Agentic Intelligence",
    session: "Leadership Panel · 5:30–7:00pm",
    talk: "Panelist",
    bio:
      "Brad Fraser works with organisations moving beyond experimentation into real capability building. His contribution to the panel focuses on adoption, solution design, and what meaningful AI implementation looks like beyond surface-level hype.",
  },
  {
    name: "Tom Sweeney",
    role: "Serial Founder and Director",
    session: "Leadership Panel · 5:30–7:00pm",
    talk: "Panelist",
    bio:
      "Tom Sweeney brings a founder and systems perspective shaped by companies that leverage both human capital and operational systems. His voice adds breadth to the discussion about leadership, performance, and navigating uncertainty with discipline.",
  },
] as const;

const techweekThemes = [
  "innovation, inspiration and impact across Aotearoa",
  "connecting innovators with communities across the motu",
  "ideas, people and opportunities that help shape New Zealand’s future",
  "digital foundations and skills",
  "social good",
  "responsible governance",
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
] as const;

export const metadata: Metadata = {
  title: "EPIC AI Conference Christchurch | TechWeek26 at EPIC Innovation",
  description:
    "A full-day TechWeek26 programme guide for the EPIC AI Conference in Christchurch, including workshops, Coffee & Jam, afternoon presentations, and the Leadership in the Age of AI panel.",
  keywords: [
    "EPIC AI Conference Christchurch",
    "TechWeek26 Christchurch",
    "Christchurch AI community",
    "EPIC Innovation AI event",
    "AI workshops Christchurch",
    "Leadership in the Age of AI panel",
  ],
  alternates: { canonical: "https://christchurch-ai.com/epic-ai-conference" },
  openGraph: {
    title: "EPIC AI Conference Christchurch | TechWeek26",
    description:
      "A community-focused guide to a full day of AI workshops, networking, presentations, and leadership discussion at EPIC Innovation in Christchurch.",
    url: "https://christchurch-ai.com/epic-ai-conference",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
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
    "A TechWeek26 programme page for the EPIC AI Conference in Christchurch, bringing together workshops, networking, presentations, and the closing leadership panel.",
  url: "https://christchurch-ai.com/epic-ai-conference",
  publisher: {
    "@type": "Organization",
    name: "Christchurch AI",
    url: "https://christchurch-ai.com",
  },
};

function RsvpBlock() {
  return (
    <div className="rounded-3xl border p-5 md:p-6" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
      <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "var(--accent)" }}>
        Registration Links
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {dayEvents.map((event) => (
          <a
            key={event.slug}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-4 rounded-2xl text-sm font-semibold text-center border transition-all hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
          >
            {event.label}
          </a>
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
}: {
  name: string;
  role: string;
  session: string;
  talk: string;
  bio: string;
}) {
  return (
    <div className="rounded-3xl border p-5 md:p-6 grid md:grid-cols-[160px_1fr] gap-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
      <div>
        <div
          className="aspect-[4/5] w-full rounded-2xl border flex items-center justify-center text-center text-xs uppercase tracking-[0.18em] px-4"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--muted)" }}
        >
          Headshot
          <br />
          Placeholder
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
          {session}
        </div>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm mb-3" style={{ color: "var(--foreground)" }}>
          {role}
        </p>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>
          {talk}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {bio}
        </p>
      </div>
    </div>
  );
}

export default function EpicAIConferencePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <nav
        className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderColor: "var(--border)", background: "rgba(20,8,14,0.9)" }}
      >
        <Link href="/" className="font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>
          Christchurch AI
        </Link>
        <a
          href="#registration"
          className="px-4 py-2 rounded-full text-sm font-medium border"
          style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
        >
          Event Links
        </a>
      </nav>

      <main>
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ borderColor: "var(--border)", color: "var(--accent)", background: "rgba(0,74,173,0.08)" }}
              >
                TechWeek26 · EPIC Innovation · Christchurch · Thursday 21 May
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                EPIC AI Conference
                <br />
                as a TechWeek26 day in Christchurch
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-6" style={{ color: "var(--text-muted)" }}>
                This page brings together the full programme for a day of workshops, community conversation, presentations,
                and leadership dialogue at EPIC Innovation. It is framed as part of <strong className="text-white">TechWeek26</strong>,
                Aotearoa New Zealand’s national festival of tech and innovation.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: "var(--text-muted)" }}>
                The spirit of the day is closely aligned with the language TechWeek uses for the festival itself:
                <strong className="text-white"> innovation, inspiration and impact across Aotearoa</strong>; bringing together
                <strong className="text-white"> ideas, people and opportunities</strong>; and connecting innovators with communities
                across the motu to help shape New Zealand’s future.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: "var(--text-muted)" }}>
                Across the programme, the emphasis is on local capability, shared learning, practical experimentation,
                thoughtful discussion, and the wider Christchurch AI community. The result is less a single headline talk than
                a full-day conversation about how AI is being explored, applied, and led in Aotearoa.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "4", label: "linked events across one shared TechWeek day" },
                  { stat: "1", label: "community hub at EPIC Innovation" },
                  { stat: "14+", label: "speakers, panelists, founders, and facilitators" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
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

            <aside className="rounded-3xl border p-6 md:p-7 lg:sticky lg:top-24" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                TechWeek Context
              </div>
              <h2 className="text-2xl font-bold mb-4">A local expression of a national festival</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  TechWeek describes itself as a festival designed to connect tech with all corners of society.
                  This programme fits that shape: workshops, community networking, implementation talks, and leadership discussion.
                </p>
                <p>
                  The wider themes named by TechWeek26 include <strong className="text-white">digital foundations and skills</strong>,
                  <strong className="text-white"> social good</strong>, and <strong className="text-white">responsible governance</strong>.
                  Those ideas run clearly through the sessions across the day.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="text-sm font-semibold text-white mb-3">Theme language reflected here</div>
                <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
                  {techweekThemes.map((theme) => (
                    <li key={theme}>• {theme}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Why this day matters
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">A celebration of Christchurch’s AI community within TechWeek26</h2>
            <div className="space-y-4 text-base leading-relaxed max-w-4xl" style={{ color: "var(--text-muted)" }}>
              <p>
                Rather than treating AI as a single topic or a narrow industry vertical, the EPIC AI Conference brings together different parts of the local ecosystem in one place: educators, founders, nonprofit voices, infrastructure thinkers, AI safety practitioners, startup builders, and leaders responsible for real teams and real decisions.
              </p>
              <p>
                That breadth matters. The workshops focus on skills and experimentation. Coffee & Jam expands the conversation into Christchurch’s founder and innovation scene. The afternoon presentations move into operational, ethical, and technical questions. The closing panel turns to leadership, trust, and the human side of adoption.
              </p>
              <p>
                Seen as a whole, the day reflects TechWeek’s wider purpose: not just showcasing tools, but creating a space where communities can learn together, share capability, and think seriously about the future they want to build.
              </p>
            </div>
          </div>
        </section>

        <section id="programme" className="px-6 py-14 border-y" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Full Programme
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The shape of the day</h2>
            <p className="text-base md:text-lg max-w-4xl mb-10" style={{ color: "var(--text-muted)" }}>
              From morning skill-building to evening leadership reflection, the programme unfolds as a day-long community gathering at EPIC. Each event stands on its own, but together they create a fuller picture of how AI is being explored and discussed in Christchurch during TechWeek26.
            </p>
            <div className="grid gap-5">
              {dayEvents.map((event) => (
                <div
                  key={event.slug}
                  className="rounded-3xl border p-6 md:p-7 grid lg:grid-cols-[180px_1fr_auto] gap-6 items-start"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
                      {event.label}
                    </div>
                    <div className="text-2xl font-bold mb-1">{event.time}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{event.title}</h3>
                    <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {event.description}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {event.details}
                    </p>
                  </div>
                  <div className="lg:w-[210px] w-full">
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-5 py-4 rounded-2xl font-semibold text-sm border transition-all hover:bg-white/5"
                      style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
                    >
                      View event / RSVP
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Themes through the day
              </div>
              <h2 className="text-3xl font-bold mb-5">How the programme maps to TechWeek values</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  <strong className="text-white">Digital foundations and skills</strong> show up most clearly in the morning workshops, where attendees build practical confidence and test real applications of AI.
                </p>
                <p>
                  <strong className="text-white">Social good</strong> appears in conversations about nonprofit use, community impact, and the role of trustworthy systems in public life.
                </p>
                <p>
                  <strong className="text-white">Responsible governance</strong> runs through the afternoon talks and the closing panel, especially in discussions of risk, privacy, safety, procurement, leadership, and organisational trust.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Community emphasis
              </div>
              <h2 className="text-3xl font-bold mb-5">Christchurch, not just content</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Profiles across the day</h2>
            <p className="text-base md:text-lg max-w-4xl mb-10" style={{ color: "var(--text-muted)" }}>
              These speaker sections are intentionally longer and more editorial, so visitors can understand not just the names on the programme, but the kind of experience, perspective, and conversation each person brings into the room. Image areas are left as placeholders for headshots to be added later.
            </p>
            <div className="grid gap-5">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                Registration
              </div>
              <h2 className="text-3xl font-bold mb-4">Event links for the full day</h2>
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
            <h2 className="text-3xl font-bold mb-10">Useful details</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.question} className="rounded-2xl border p-5 md:p-6" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--accent)" }} className="font-semibold">
          Christchurch AI
        </Link>{" "}
        · TechWeek26 programme page for EPIC Innovation, Christchurch, New Zealand
      </footer>
    </div>
  );
}
