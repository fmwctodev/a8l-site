import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import AnimatedMesh from './_components/ui/AnimatedMeshLazy';
import { OrganizationSchema, WebSiteSchema } from './_components/Schema';
import { CapabilityStatementModalProvider } from './_components/CapabilityStatementModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://autom8ionlab.com'),
  title: {
    default: 'Custom AI, Automation & Software for Compliance Environments | Autom8ion Lab',
    template: '%s | Autom8ion Lab',
  },
  description:
    'Veteran-owned. Custom AI, automation, and software engineered for CMMC, NIST 800-171, HIPAA, SOC 2. Built for federal, defense, healthcare, FinServ.',
  applicationName: 'Autom8ion Lab',
  authors: [{ name: 'Sean Richard', url: 'https://www.linkedin.com/in/a8l-sean-richard/' }],
  keywords: [
    'SDVOSB software development',
    'veteran-owned AI services',
    'CMMC compliance software',
    'NIST 800-171 implementation',
    'HIPAA software development',
    'SOC 2 SaaS',
    'FedRAMP application development',
    'federal contractor AI',
    'DIB custom software',
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Autom8ion Lab',
    locale: 'en_US',
    images: [
      {
        url: 'https://autom8ionlab.com/logo/logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@autom8ionlab',
  },
};

// Next.js App Router emits the viewport meta + theme-color from this export.
// Per the LOCKED v3 SEO+AEO Implementation Plan §3.1 + §4.1.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0F172A',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="//prod.spline.design" />

        {/* Sitewide JSON-LD: every page declares the Organization + WebSite
            entities so AI engines can resolve us by @id from sub-page schemas
            (Person, Article, Service, Breadcrumb). Per Implementation Plan §5.2. */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="relative isolate bg-slate-950 text-white antialiased">
        {/* Cinematic ambient background — sits behind everything via z-index: -10. */}
        <AnimatedMesh />

        {/* Hidden form for Netlify Forms detection at build time */}
        <form
          name="capabilities-statement"
          data-netlify="true"
          hidden
          aria-hidden="true"
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
        </form>

        <CapabilityStatementModalProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CapabilityStatementModalProvider>

        {/* All third-party analytics + pixels load AFTER window.onload via
            strategy="lazyOnload" — keeps them out of the main-thread budget
            for FCP/LCP/INP. Per PageSpeed 2026-04-29 audit: TBT was 790ms
            on mobile with afterInteractive; lazyOnload removes them from
            the critical path entirely. Conversion-event tracking still
            works because gtag/dataLayer/fbq are stubbed by the wrapper in
            lib/analytics.ts which queues calls until the real script
            attaches. */}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DF6GQ5DEFP"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DF6GQ5DEFP');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KLGXBVX6');
          `}
        </Script>

        {/* Meta (Facebook) Pixel */}
        <Script id="fb-pixel-init" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '219052903433363');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=219052903433363&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Vapi Voice AI Widget */}
        <Script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          strategy="lazyOnload"
        />
        <vapi-widget
          public-key="c3e276d5-8f23-4dd0-88db-b387814c4d56"
          assistant-id="8828df1d-e434-45ae-a9be-7d5567a696b6"
          mode="voice"
          theme="dark"
          base-bg-color="#000000"
          accent-color="#DC2626"
          cta-button-color="#ffffff"
          cta-button-text-color="#000000"
          border-radius="large"
          size="compact"
          position="bottom-right"
          title="Talk With Auto"
          start-button-text="Start"
          end-button-text="End Call"
          cta-title="Autom8ion Lab Support"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="true"
          consent-title="Terms and Conditions"
          consent-content='By clicking "Agree." and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with Autom8ion Lab. and as otherwise described in our Terms of Service.'
          consent-storage-key="vapi_widget_consent"
        />
      </body>
    </html>
  );
}
