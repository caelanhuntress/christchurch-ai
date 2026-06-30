export type CommunityTalk = {
  speaker: string;
  title?: string;
  bio?: string;
};

export type CommunityEvent = {
  slug: string;
  month: string;
  year: number;
  date: string;
  time: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  venue: string;
  mapsUrl: string;
  meetupUrl?: string;
  replayUrl?: string;
  pageUrl?: string;
  image: string;
  talks: CommunityTalk[];
};

const EVENT_SORT_ASC = (a: CommunityEvent, b: CommunityEvent) =>
  Date.parse(a.startDate) - Date.parse(b.startDate);

const EVENT_SORT_DESC = (a: CommunityEvent, b: CommunityEvent) =>
  Date.parse(b.startDate) - Date.parse(a.startDate);

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    slug: "ai-reasoning-context-engineering-dec-2025",
    month: "December",
    year: 2025,
    date: "Monday, 1 December 2025",
    time: "5:30 - 8:00 PM NZDT",
    startDate: "2025-12-01T17:30:00+13:00",
    endDate: "2025-12-01T20:00:00+13:00",
    title: "AI Reasoning & Context Engineering",
    description:
      "Andy Masters on tiny recursive reasoning models and the festive Christmas tree packing Kaggle challenge, plus Caelan Huntress on context engineering and the PILLARS framework.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    image: "/images/past-event-dec-2025.jpg",
    talks: [
      { speaker: "Andy Masters" },
      { speaker: "Caelan Huntress" },
    ],
  },
  {
    slug: "ai-data-testing-coaching-feb-2026",
    month: "February",
    year: 2026,
    date: "Monday, 2 February 2026",
    time: "5:30 - 8:00 PM NZDT",
    startDate: "2026-02-02T17:30:00+13:00",
    endDate: "2026-02-02T20:00:00+13:00",
    title: "AI & Data Testing + Create a Coaching Relationship with AI",
    description:
      "Hamish Watson on why good AI requires good data, plus Caelan Huntress on building a genuine coaching relationship with AI.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    image: "/images/past-event-feb-2026.jpg",
    talks: [
      { speaker: "Hamish Watson" },
      { speaker: "Caelan Huntress" },
    ],
  },
  {
    slug: "ai-image-video-generation-march-2026",
    month: "March",
    year: 2026,
    date: "Monday, 2 March 2026",
    time: "5:30 - 8:00 PM NZDT",
    startDate: "2026-03-02T17:30:00+13:00",
    endDate: "2026-03-02T20:00:00+13:00",
    title: "AI Multimedia: Image Generation & Video Generation",
    description:
      "A hands-on exploration of AI image and video generation, from image transformations to live demos with Sora, Gemini, and ChatGPT.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    image: "/images/past-event-march-2026.jpg",
    talks: [
      { speaker: "Caelan Huntress" },
      { speaker: "Arthur Machado" },
    ],
  },
  {
    slug: "april-ai-meetup-vibe-coding-web-apps-2026",
    month: "April",
    year: 2026,
    date: "Monday, 6 April 2026",
    time: "5:30 - 8:00 PM NZST",
    startDate: "2026-04-06T17:30:00+12:00",
    endDate: "2026-04-06T20:00:00+12:00",
    title: "Vibe Coding & Web App Development with AI",
    description:
      "Greg Dickson on turning SOPs into working web apps with Manis, plus Caelan Huntress on vibe coding with Claude, agents, skills, and live app demos.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    image: "/images/past-event-april-2026.webp",
    talks: [
      { speaker: "Greg Dickson" },
      { speaker: "Caelan Huntress" },
    ],
  },
  {
    slug: "ai-governance-may-2026",
    month: "May",
    year: 2026,
    date: "Monday, 4 May 2026",
    time: "5:30 - 8:00 PM NZST",
    startDate: "2026-05-04T17:30:00+12:00",
    endDate: "2026-05-04T20:00:00+12:00",
    title: "The AI Tension - Implementation vs Existential Risk",
    description:
      "Replay, slides, and recap from Christchurch AI's May meetup on AI literacy, governance, coordination, and the debate around the Doom Thesis.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    pageUrl: "/ai-governance-may-2026",
    image: "/chchai-0526-2.webp",
    talks: [
      { speaker: "Dr Elsamari Botha" },
      { speaker: "Hazel Shanks" },
    ],
  },
  {
    slug: "agent-management-june-2026",
    month: "June",
    year: 2026,
    date: "Monday, 8 June 2026",
    time: "5:30 - 8:00 PM NZST",
    startDate: "2026-06-08T17:30:00+12:00",
    endDate: "2026-06-08T20:00:00+12:00",
    title: "Agent Management & Engineering Habits",
    description:
      "Replay from Christchurch AI's June meetup on managing AI agents, agentic project scoping, evaluation habits, and practical engineering workflows.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    meetupUrl: "https://www.meetup.com/christchurch-ai/events/314554727/",
    replayUrl: "https://www.youtube.com/watch?v=RfBq04FxUbI&t=1s",
    pageUrl: "/agent-management-june-2026",
    image: "/chchai-0626.webp",
    talks: [
      {
        speaker: "Caelan Huntress",
        title: "Agent Management: The Next High-Value Skillset",
        bio: "How to scope agentic projects, manage autonomous systems, and build the evaluation habits that make agents useful in real work.",
      },
      {
        speaker: "Blake Burgess",
        title: "Agent Habits with an Engineer's Mindset",
        bio: "A practical walkthrough of local vs cloud agents, harnesses, models, and the habits that help engineers work well with them.",
      },
    ],
  },
  {
    slug: "ai-healthcare-agrifood-july-2026",
    month: "July",
    year: 2026,
    date: "Monday, 13 July 2026",
    time: "5:30 - 8:00 PM NZST",
    startDate: "2026-07-13T17:30:00+12:00",
    endDate: "2026-07-13T20:00:00+12:00",
    title: "AI in Healthcare & Agri-Food Industries",
    description:
      "Rowena Woolgar on healthcare AI delivery and Dr Harold Mayaba on AI in agri-food, market intelligence, and smarter growth.",
    venue: "EPIC Innovation Centre, 78-100 Manchester St, Christchurch",
    mapsUrl: "https://maps.google.com/?q=EPIC+Innovation+Christchurch",
    meetupUrl: "https://www.meetup.com/christchurch-ai/events/314554735/",
    pageUrl: "/ai-healthcare-agrifood-july-2026",
    image: "/chchai-0726.webp",
    talks: [
      {
        speaker: "Rowena Woolgar",
        title: "AI Is Not Neutral: Designing Healthcare AI for Real Work, Real Risk",
        bio: "A grounded look at safe healthcare AI delivery across clinical, administrative, and system-level contexts.",
      },
      {
        speaker: "Dr Harold Mayaba",
        title: "AI in Agri-Food: Real Opportunities and Smarter Growth",
        bio: "How AI, market intelligence, and consumer behaviour can create practical advantage in New Zealand's agri-food sector.",
      },
    ],
  },
];

export function getUpcomingEvents(now = new Date()) {
  const nowMs = now.getTime();
  return COMMUNITY_EVENTS
    .filter((event) => Date.parse(event.endDate) >= nowMs)
    .sort(EVENT_SORT_ASC);
}

export function getPastEvents(now = new Date()) {
  const nowMs = now.getTime();
  return COMMUNITY_EVENTS
    .filter((event) => Date.parse(event.endDate) < nowMs)
    .sort(EVENT_SORT_DESC);
}

export function getEventHref(event: CommunityEvent) {
  return event.pageUrl ?? `/past-events/${event.slug}`;
}

export function getEventSchema(event: CommunityEvent, now = new Date()) {
  const completed = Date.parse(event.endDate) < now.getTime();

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Christchurch AI Meetup - ${event.month} ${event.year}: ${event.title}`,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: completed
      ? "https://schema.org/EventCompleted"
      : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "EPIC Innovation Centre",
      address: {
        "@type": "PostalAddress",
        streetAddress: "78-100 Manchester St",
        addressLocality: "Christchurch",
        addressCountry: "NZ",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Christchurch Artificial Intelligence",
      url: "https://christchurch-ai.com",
    },
    performer: event.talks.map((talk) => ({
      "@type": "Person",
      name: talk.speaker,
    })),
    isAccessibleForFree: true,
    url: `https://christchurch-ai.com${getEventHref(event)}`,
    ...(event.replayUrl
      ? {
          recordedIn: {
            "@type": "VideoObject",
            url: event.replayUrl,
          },
        }
      : {}),
  };
}
