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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1999626110603210');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1999626110603210&ev=PageView&noscript=1" alt="" />
        </noscript>
        {/* X (Twitter) Pixel */}
        <Script id="x-pixel-base" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','pakoh');
          `}
        </Script>
        <Script id="x-pixel-event" strategy="afterInteractive">
          {`
            twq('event', 'tw-pakoh-r7i0x', {});
          `}
        </Script>
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-pixel" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8740850";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}} alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8740850&fmt=gif" />
        </noscript>
      </head>
      <body className="theme-light">{children}</body>
    </html>
  );
}
