import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const pageTheme = {
  "--background": "var(--background)",
  "--foreground": "var(--foreground)",
  "--accent": "var(--accent)",
  "--muted": "var(--muted)",
  "--border": "var(--border)",
  "--text-muted": "var(--text-muted)",
} as CSSProperties;

const replayPageUtm = "utm_source=chchai&utm_medium=replay-page&utm_campaign=techweek26";

const dayEvents = [
  {
    slug: "am-workshops",
    label: "AM Workshops",
    time: "9:00 AM – 11:45 AM",
    title: "EPIC AI Conference — AM Workshops",
    href: "https://events.humanitix.com/epic-ai-conference-am",
    replayHref: "#am-workshops-replays",
    image: "/images/epic-ai-conference/epic-ai-am.png",
    description:
      "The morning workshop block is designed for people who want practical experience, not just theory. Across five fast, hands-on sessions, attendees explore how AI can support communication, workflow design, nonprofit impact, and collaborative idea-building.",
    details: (
      <>
        Hosted by the <a href={`https://www.meetup.com/christchurch-ai/?${replayPageUtm}`} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>Christchurch AI Meetup Group</a> as part of <a href={`https://techweek.co.nz/?${replayPageUtm}`} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>TechWeekNZ</a>, the EPIC AI Conference at <a href={`https://epicinnovation.co.nz/?${replayPageUtm}`} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>EPIC Innovation</a> brings together local and international practitioners for a compact, high-value morning of experimentation and applied learning. Whether you’re just getting started, or already using AI at work, these sessions will give you fresh ways to think about what the tools can do, where they fit, and how to use them more effectively.
      </>
    ),
  },
  {
    slug: "coffee-and-jam",
    label: "Coffee & Jam.",
    time: "12:00 PM – 1:15 PM",
    title: "Ministry of Awesome: Coffee & Jam",
    href: "https://events.humanitix.com/ministry-of-awesome-coffee-and-jam-371",
    replayHref: null,
    companyName: "Ministry of Awesome",
    companyUrl: `https://ministryofawesome.com/coffee-and-jam/?${replayPageUtm}`,
    description:
      "Coffee & Jam is Christchurch’s longest-running founder meetup: a lunchtime tradition where the Ōtautahi startup community comes together to connect, learn from founders across different stages, and collaborate on ideas that help startups thrive.",
    details:
      "With light refreshments provided at EPIC, this session creates a natural bridge between the morning workshops and the afternoon presentations. It broadens the day beyond AI tooling alone and roots the programme in the wider innovation community around EPIC.",
  },
  {
    slug: "pm-presentations",
    label: "PM Presentations",
    time: "1:30 PM – 5:00 PM",
    title: "EPIC AI Conference — PM Presentations",
    href: "https://events.humanitix.com/epic-ai-conference-pm",
    replayHref: "#pm-presentations-replays",
    image: "/images/epic-ai-conference/epic-ai-pm.png",
    description:
      "The afternoon speaker session of the EPIC AI Conference brings together practitioners working across creative AI, implementation, risk, infrastructure, and strategy.",
    details:
      "These are not abstract future-gazing talks. They are grounded presentations from people thinking deeply about what happens when AI moves from prototype to production, from possibility to governance, and from technical novelty to social consequence. Across four sessions, attendees hear perspectives on creative practice, AI safety, privacy-preserving infrastructure, and the long-term future AI may unlock.",
  },
  {
    slug: "leadership-panel",
    label: "Evening Panel",
    time: "5:30 PM – 7:00 PM",
    title: "Leadership in the Age of AI",
    href: "https://events.humanitix.com/epic-ai-conference-panel",
    replayHref: "#leadership-panel-replay",
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
    replayEmbedUrl: "https://www.youtube.com/embed/nlGFkmon9Ws",
    slidesHref: "https://www.dropbox.com/scl/fi/914drnpjgmlkfcdjp4u6p/EPIC-1-coaching.pdf?rlkey=guqxd0jax4n8xowshy31zpv3f&dl=0",
    bio:
      "Caelan Huntress opens the day with an interactive workshop on using conversational AI as a partner for learning, reflection, and growth. As LLMs become more conversational, asking better questions shapes your AI thinking partner around the goals you care about and the way you learn best.",
  },
  {
    name: "Siena Brody-Heine",
    role: "Workshop speaker",
    session: "AM Workshops · 9:30–10:00am",
    talk: "Transform Meetings into Actionable Insights",
    image: "/images/epic-ai-conference/headshots/siena-brody-heine.jpg",
    linkedin: "https://www.linkedin.com/in/siena-brody-heine/",
    replayEmbedUrl: "https://www.youtube.com/embed/21T-7moxzAI",
    slidesHref: "https://contentedai.com/?utm_source=tw26&utm_medium=replay&utm_campaign=caelanhuntress",
    slidesLabel: "Try Contented",
    bio:
      "Siena Brody-Heine demonstrates how AI can turn conversation into useful outputs, insights, actions, and communications. Her session treats meetings and spoken exchanges as one of the most valuable and underused resources in any organisation.",
  },
  {
    name: "Steve Fox",
    role: "Workshop speaker",
    session: "AM Workshops · 10:00–10:30am",
    talk: "Mapping AI Opportunities in Your Organisation",
    image: "/images/epic-ai-conference/headshots/steve-fox.png",
    linkedin: "https://nz.linkedin.com/in/stevefoxnz",
    replayEmbedUrl: "https://www.youtube.com/embed/-rQBTSNulXQ",
    slidesHref: "https://www.dropbox.com/scl/fi/lr43m3v11k8f0b7ilrx9w/Mapping-workflows-_-Steve-Fox_Tech-Week-Final__PDF.pdf?rlkey=pgrnb9tfy2tccvtxe1wensbio&dl=0",
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
    replayEmbedUrl: "https://www.youtube.com/embed/5PLNPkkHpXY",
    slidesHref: "https://www.dropbox.com/scl/fi/i08swmeybufjpdse7lgrz/AI-For-Good-Empowering-Not-For-Profits.pdf?rlkey=5a21g4birocsyvbhmi14xffm1&dl=0",
    bio:
      "Lois McClintock explores how nonprofits can use AI to increase impact, free up volunteer time, and improve operations without needing large budgets or complex systems. Her session includes practical examples from nonprofit work including strategy, social media, fundraising, and policy support.",
  },
  {
    name: "Dan Randow",
    role: "Workshop speaker",
    session: "AM Workshops · 11:00–11:30am",
    talk: "Ideas into Action: A Micro-Hackathon",
    image: "/images/epic-ai-conference/headshots/dan-randow.webp",
    linkedin: "https://www.linkedin.com/in/danrandow/",
    replayEmbedUrl: "https://www.youtube.com/embed/IFaUrzKMx0w",
    bio:
      "Dan Randow closes the morning with a fast-moving micro-hackathon that turns the room's AI ideas into action in under thirty minutes. Participants pitch ideas, develop them in teams – and everyone walks into lunch with actionable inspiration.",
  },
] as const;

const pmSpeakers = [
  {
    name: "Arthur Machado",
    role: "Presentation speaker",
    session: "PM Presentations · 1:30–2:15pm",
    talk: "Filmmaking Frameworks for High-Impact AI Visuals",
    image: "/images/epic-ai-conference/headshots/arthur-machado.jpg",
    linkedin: "https://nz.linkedin.com/in/arthurmachado1",
    replayEmbedUrl: "https://www.youtube.com/embed/A2XFmXw_OTk",
    slidesHref: "https://www.dropbox.com/scl/fi/tq1xdd0ft7norowg8pofc/Odd-Global-Prompt-Like-a-Director-Techweek-Workshop-Public-Version.pdf?rlkey=wc08atp96t0tiw53puh4m92se&dl=0",
    bio:
      "Arthur Machado shares a practical visual storytelling framework for prompting better creative assets, from hero images to product mockups. His session encourages attendees to think like directors rather than technicians when working with AI-generated visuals.",
  },
  {
    name: "Emma Humphrey",
    role: "AI Safety ANZ · Presentation speaker",
    session: "PM Presentations · 2:30–3:15pm",
    talk: "AI Self Defence: Risks and Solutions",
    image: "/images/epic-ai-conference/headshots/emma-humphrey.jpg",
    linkedin: "https://www.linkedin.com/in/emma-humphrey17/",
    replayEmbedUrl: "https://www.youtube.com/embed/crwlTwgsiQg",
    slidesHref: "https://internationalaisafetyreport.org/publication/2026-report-extended-summary-policymakers",
    slidesLabel: "AI Safety Report",
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
    replayEmbedUrl: "https://www.youtube.com/embed/dqhnIIsyprE",
    slidesHref: "https://www.dropbox.com/scl/fi/c8hzlngotrf6gs3o03sd4/Ghost_Vectors_Christchurch_TechWeek26_Final.pdf?rlkey=4mvn3onn3zbk073xumomfjsuy&dl=0",
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
    replayEmbedUrl: "https://www.youtube.com/embed/4x7HQ51J78s",
    slidesHref: "https://www.dropbox.com/scl/fi/hdu3osm0zgcp5cvrjzcca/EPIC-2-superabundance.pdf?rlkey=h14comnjrhlwrscjr9hvs4m7z&dl=0",
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
    name: "Alison Adams",
    role: "CEO, ChristchurchNZ",
    image: "/images/epic-ai-conference/headshots/alison-adams.jpg",
    linkedin: "https://www.linkedin.com/in/ali-adams-3531a256/",
    companyName: "ChristchurchNZ",
    companyUrl: "https://www.christchurchnz.com/",
    bio:
      "Alison Adams leads ChristchurchNZ, the city’s economic development agency, with a background spanning more than two decades across senior leadership. Her contribution to the panel brings a city-shaping perspective on growth, collaboration, and responsible AI adoption for Christchurch.",
  },
] as const;

const socialImage = {
  url: "https://christchurch-ai.com/images/epic-ai-conference/chchai-tw26-bg.png",
  alt: "EPIC AI Conference Christchurch TechWeek26 background",
};

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
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPIC AI Conference Christchurch | TechWeekNZ",
    description:
      "A community-focused guide to a full day of AI workshops, networking, presentations, and leadership discussion at EPIC Innovation in Christchurch.",
    images: [socialImage.url],
  },
};

const eventSchedule = {
  "am-workshops": {
    startDate: "2026-05-21T09:00:00+12:00",
    endDate: "2026-05-21T11:45:00+12:00",
    image: "https://christchurch-ai.com/images/epic-ai-conference/epic-ai-am.png",
    description:
      "Hands-on AI workshops at the EPIC AI Conference in Christchurch, part of TechWeekNZ, covering learning, meeting intelligence, workflow design, nonprofit impact, and collaborative idea-building.",
    organizer: { name: "Christchurch AI", url: "https://christchurch-ai.com" },
    performer: [{ "@type": "Person", name: "Caelan Huntress" }, { "@type": "Person", name: "Siena Brody-Heine" }, { "@type": "Person", name: "Steve Fox" }, { "@type": "Person", name: "Lois McClintock" }, { "@type": "Person", name: "Dan Randow" }],
  },
  "coffee-and-jam": {
    startDate: "2026-05-21T12:00:00+12:00",
    endDate: "2026-05-21T13:15:00+12:00",
    image: "https://christchurch-ai.com/images/epic-ai-conference/chchai-tw26-bg.png",
    description:
      "Ministry of Awesome Coffee and Jam at EPIC Innovation during TechWeekNZ, connecting Christchurch founders, innovators, and the AI community over lunch.",
    organizer: { name: "Ministry of Awesome", url: "https://ministryofawesome.com/?utm_source=chchai&utm_medium=landingpage&utm_campaign=tw26" },
    performer: [{ "@type": "Organization", name: "Ministry of Awesome" }],
  },
  "pm-presentations": {
    startDate: "2026-05-21T13:30:00+12:00",
    endDate: "2026-05-21T17:00:00+12:00",
    image: "https://christchurch-ai.com/images/epic-ai-conference/epic-ai-pm.png",
    description:
      "Afternoon presentations at the EPIC AI Conference in Christchurch, featuring talks on creative AI, AI safety, privacy, and the future of AI adoption.",
    organizer: { name: "Christchurch AI", url: "https://christchurch-ai.com" },
    performer: [{ "@type": "Person", name: "Arthur Machado" }, { "@type": "Person", name: "Emma Humphrey" }, { "@type": "Person", name: "Dr Chandranil Chakraborttii" }, { "@type": "Person", name: "Caelan Huntress" }],
  },
  "leadership-panel": {
    startDate: "2026-05-21T17:30:00+12:00",
    endDate: "2026-05-21T19:00:00+12:00",
    image: "https://christchurch-ai.com/images/epic-ai-conference/epic-ai-panel.png",
    description:
      "Leadership in the Age of AI panel discussion at the EPIC AI Conference in Christchurch, focused on trust, organisational change, and leadership in an AI-driven world.",
    organizer: { name: "Christchurch AI", url: "https://christchurch-ai.com" },
    performer: [{ "@type": "Person", name: "Anya Anderson" }, { "@type": "Person", name: "Julie Ryan" }, { "@type": "Person", name: "Brad Fraser" }, { "@type": "Person", name: "Alison Adams" }],
  },
} as const;

const eventSchema = dayEvents.map((event) => {
  const schedule = eventSchedule[event.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: schedule.startDate,
    endDate: schedule.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    description: schedule.description,
    image: schedule.image,
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
      name: schedule.organizer.name,
      url: schedule.organizer.url,
    },
    performer: schedule.performer,
  };
});

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

function SpeakerCard({
  name,
  role,
  session,
  talk,
  bio,
  image,
  linkedin,
  replayEmbedUrl,
  slidesHref,
  slidesLabel,
}: {
  name: string;
  role: string;
  session: string;
  talk: string;
  bio: string;
  image?: string;
  linkedin?: string;
  replayEmbedUrl?: string;
  slidesHref?: string;
  slidesLabel?: string;
}) {
  const hiddenRoles = new Set([
    "Workshop speaker",
    "Presentation speaker",
    "AI Safety ANZ · Presentation speaker",
    "Founder, AI Coaching Academy · Organiser, Christchurch AI Meetup Group",
  ]);
  const showRole = !hiddenRoles.has(role);

  return (
    <div className="epic-speaker-card rounded-3xl border p-5 md:p-6 grid gap-5" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
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
        {linkedin ? (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-3 w-full rounded-xl border px-3 py-2 text-sm font-semibold transition-all hover:!text-white hover:!bg-[#004aad]" style={{ borderColor: "var(--border)", color: "#004aad", background: "var(--muted)" }} aria-label={`${name} LinkedIn`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H6.26V17H8.34M7.3 9.8A1.2 1.2 0 1 0 7.3 7.4A1.2 1.2 0 0 0 7.3 9.8M17.74 17V13.53C17.74 11.67 16.74 10.57 15.12 10.57C13.81 10.57 13.22 11.29 12.89 11.79V10.67H10.81C10.84 11.41 10.81 17 10.81 17H12.89V13.46C12.89 13.27 12.9 13.08 12.96 12.95C13.11 12.57 13.45 12.18 14.02 12.18C14.77 12.18 15.07 12.75 15.07 13.58V17H17.74Z"/></svg>
            <span>LinkedIn</span>
          </a>
        ) : null}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
          {session}
        </div>
        <h3 className="text-2xl font-bold mb-1" style={{ color: "#004aad" }}>{name}</h3>
        {showRole ? (
          <p className="text-sm mb-3" style={{ color: "var(--foreground)" }}>
            {role}
          </p>
        ) : null}
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>
          {talk}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {bio}
        </p>
        {slidesHref ? (
          <a
            href={slidesHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-all hover:!text-white hover:!bg-[#004aad]"
            style={{ borderColor: "var(--border)", color: "#004aad", background: "var(--muted)" }}
          >
            {slidesLabel ?? "Slides"}
          </a>
        ) : null}
      </div>
      <div className="epic-speaker-replay">
        <ReplayPanel
          title={talk}
          speaker={name}
          replayEmbedUrl={replayEmbedUrl}
        />
      </div>
    </div>
  );
}

function ReplayPanel({
  title,
  speaker,
  replayEmbedUrl,
}: {
  title: string;
  speaker: string;
  replayEmbedUrl?: string;
}) {
  const isCaelan = speaker === "Caelan Huntress";

  return (
    <div className="rounded-2xl border p-4 flex flex-col gap-3" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
      {replayEmbedUrl ? (
        <iframe
          className="aspect-video w-full rounded-xl border"
          style={{ borderColor: "var(--border)" }}
          src={replayEmbedUrl}
          title={`${title} replay`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div
          className="aspect-video w-full rounded-xl border flex flex-col items-center justify-center text-center px-5"
          style={{
            borderColor: isCaelan ? "#004aad" : "var(--border)",
            color: isCaelan ? "#004aad" : "var(--text-muted)",
            background: isCaelan
              ? "linear-gradient(135deg, rgba(0,74,173,0.12), rgba(255,255,255,0.82))"
              : "var(--background)",
          }}
        >
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: isCaelan ? "#004aad" : "var(--muted)", color: isCaelan ? "#ffffff" : "var(--accent)" }}>
            <span className="ml-0.5 text-lg" aria-hidden="true">▶</span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em]">
            YouTube replay
          </div>
          <div className="mt-1 text-sm font-semibold">
            {isCaelan ? "Caelan replay placeholder" : "Replay coming soon"}
          </div>
        </div>
      )}
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
    <div className="rounded-2xl border p-5 h-full" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
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
      <style dangerouslySetInnerHTML={{ __html: `
        .epic-speaker-card {
          grid-template-columns: 118px minmax(0, 1fr);
        }

        .epic-speaker-replay {
          grid-column: 1 / -1;
        }

        @media (min-width: 640px) {
          .epic-speaker-card {
            grid-template-columns: 160px minmax(0, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .epic-speaker-card {
            grid-template-columns: 180px minmax(0, 1fr) minmax(0, 1fr);
          }

          .epic-speaker-replay {
            grid-column: auto;
          }
        }
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <SiteHeader />

      <main>
        <section id="programme" className="px-6 py-14 border-y" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Thursday, 21 May, 2026 @ EPIC Innovation, 100 Manchester St, Christchurch, New Zealand.
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#004aad" }}>Full-day AI conference in Christchurch</h1>
            <SectionImage src="/images/epic-ai-conference/chchai-tw26-bg.webp" alt="Christchurch AI TechWeek26 background" />
            <div className="grid gap-5">
              {dayEvents.map((event) => (
                <div
                  key={event.slug}
                  className="rounded-3xl border overflow-hidden"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}
                >
                  <div className="p-6 md:p-7 grid lg:grid-cols-[180px_1fr_auto] gap-6 items-start">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: "var(--accent)" }}>
                        {event.label}
                      </div>
                      <div className="text-2xl font-bold mb-1" style={{ color: "var(--foreground)" }}>{event.time}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#004aad" }}>
                        {event.slug === "coffee-and-jam" ? (
                          <>
                            Ministry of Awesome: <a href={`https://ministryofawesome.com/coffee-and-jam/?${replayPageUtm}`} target="_blank" rel="noopener noreferrer" style={{ color: "#004aad" }}>Coffee &amp; Jam</a>
                          </>
                        ) : (
                          event.title
                        )}
                      </h2>
                      <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                        {event.description}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {event.details}
                      </p>
                    </div>
                    <div className="lg:w-[210px] w-full">
                      {event.replayHref ? (
                        <a
                          href={event.replayHref}
                          className="block w-full text-center px-5 py-4 rounded-2xl font-semibold text-sm border transition-all hover:!text-white hover:!bg-[#004aad]"
                          style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
                        >
                          Replay
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="speakers" className="px-6 py-16 border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
              Event Replays & Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#004aad" }}>Workshop Recordings and Slides</h2>

            <div className="space-y-12">
              <div id="am-workshops-replays" className="scroll-mt-28">
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

              <div id="pm-presentations-replays" className="scroll-mt-28">
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

              <div id="leadership-panel-replay" className="rounded-3xl border p-6 md:p-7 scroll-mt-28" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--accent)" }}>
                  Evening panel
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
                  &quot;Leadership in the Age of AI&quot; Panel · 5:30 PM to 7:00 PM
                  <br />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>Featuring:</span>
                </h3>
                <div className="mx-auto mb-8 max-w-3xl">
                  <ReplayPanel
                    title="Leadership in the Age of AI"
                    speaker="Evening Panel"
                    replayEmbedUrl="https://www.youtube.com/embed/SerVNqYKHhA"
                  />
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                  {panelists.map((panelist) => (
                    <PanelistCard key={panelist.name} {...panelist} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
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

            <div className="rounded-3xl border p-7 md:p-8" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
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

        <section className="px-6 py-16 border-t" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
          <div className="max-w-4xl mx-auto grid gap-5">
            <div className="rounded-3xl border p-6 md:p-7" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#004aad" }}>
                Use NotebookLM to extract the best insights
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                You can add the links above to a NotebookLM with a free Google account, and create an Audio Overview, or chat about specific presentations and concepts. If you&apos;d like to use a pre-populated NotebookLM, <a href="https://notebooklm.google.com/notebook/8fd27f90-1a5a-4dea-84c7-3691848abc96" target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>click here</a>.
              </p>
            </div>

            <div className="rounded-3xl border p-6 md:p-7" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#004aad" }}>
                Where do I go to continue building my AI Literacy?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Join the <a href="https://www.meetup.com/christchurch-ai/" target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>Christchurch Artificial Intelligence Meetup Group</a>, to be notified of future events. Join the <a href="https://ai-coaching.academy/" target="_blank" rel="noopener noreferrer" style={{ color: "#004aad", fontWeight: 700 }}>AI Coaching Academy</a> for practical games and activities to build your AI literacy, and to join a community of ambitious professionals practicing the tools of the future.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "var(--background)" }}>
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
