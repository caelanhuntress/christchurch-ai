import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Christchurch AI — Artificial Intelligence Community",
  description: "Christchurch's home for artificial intelligence. Monthly meetups, speakers, demos and networking at EPIC Innovation. Join the AI community in Canterbury, New Zealand.",
  keywords: ["Christchurch AI", "artificial intelligence Christchurch", "AI meetup Christchurch", "AI community New Zealand", "Canterbury AI", "AI events Christchurch"],
  openGraph: {
    title: "Christchurch AI — Artificial Intelligence Community",
    description: "Monthly AI meetups at EPIC Innovation, Christchurch. Join Canterbury's growing AI community.",
    url: "https://christchurch-ai.com",
    siteName: "Christchurch AI",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christchurch AI",
    description: "Monthly AI meetups at EPIC Innovation, Christchurch NZ",
  },
  alternates: {
    canonical: "https://christchurch-ai.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6KY137HZWN"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6KY137HZWN');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
