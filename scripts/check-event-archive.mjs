#!/usr/bin/env node
import fs from "node:fs/promises";

const site = process.env.CHRISTCHURCH_AI_SITE ?? "https://christchurch-ai.com";
const eventSourcePath = new URL("../app/data/events.ts", import.meta.url);

function normalize(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function parseEvents(source) {
  const events = [];
  const eventBlocks = source.match(/\{\n    slug: [\s\S]*?\n  \}/g) ?? [];

  for (const block of eventBlocks) {
    const title = block.match(/title: "([^"]+)"/)?.[1];
    const endDate = block.match(/endDate: "([^"]+)"/)?.[1];

    if (title && endDate) {
      events.push({ title, endDate });
    }
  }

  return events;
}

async function fetchText(path) {
  const response = await fetch(`${site}${path}`, {
    headers: { "user-agent": "christchurch-ai-event-archive-check/1.0" },
  });

  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  return normalize(await response.text());
}

const now = new Date();
const source = await fs.readFile(eventSourcePath, "utf8");
const completedEvents = parseEvents(source).filter(
  (event) => Date.parse(event.endDate) < now.getTime(),
);

const [homeHtml, pastHtml] = await Promise.all([
  fetchText("/"),
  fetchText("/past-events"),
]);

const failures = [];

for (const event of completedEvents) {
  if (homeHtml.includes(event.title)) {
    failures.push(`Completed event still appears on homepage: ${event.title}`);
  }

  if (!pastHtml.includes(event.title)) {
    failures.push(`Completed event missing from past events page: ${event.title}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `Event archive check passed: ${completedEvents.length} completed events are archived and absent from the homepage.`,
);
