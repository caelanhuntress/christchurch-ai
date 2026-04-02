import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

type SiteHeaderProps = {
  homeMode?: boolean;
};

export default function SiteHeader({ homeMode = false }: SiteHeaderProps) {
  return (
    <header className="border-b sticky top-0 z-50 backdrop-blur" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--background) 88%, transparent)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Christchurch AI
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          {homeMode && (
            <>
              <a href="#events" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">Events</a>
              <a href="#about" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">About</a>
              <a href="#speak" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">Speak</a>
            </>
          )}
          <Link href="/epic-ai-conference" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">Conference</Link>
          <Link href="/past-events" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">Past Events</Link>
          <Link href="/blog" className="hover:text-white hover:bg-[#004aad] hover:rounded-full px-3 py-2 transition-all">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://meetup.com/christchurch-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#ffffff" }}
          >
            Join Free →
          </a>
        </div>
      </div>
    </header>
  );
}
