import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/utilities.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { LiveChat } from '@/components/chat/LiveChat';

export const metadata: Metadata = {
  title: 'BITSOTRON — Offline Digital Access Infrastructure',
  description:
    'Plug-and-play local Wi‑Fi access hubs for offline videos, documents, forms, catalogs, dashboards, and training content.',
  keywords: [
    'Offline Digital Access',
    'Mini Data Center',
    'Local Wi-Fi Hub',
    'Edge Compute',
    'Rural Connectivity',
    'BITSOTRON',
  ],
  authors: [{ name: 'BITSOTRON' }],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BITSOTRON',
              url: 'https://bitsotron.com',
              logo: 'https://bitsotron.com/logo.png',
              description: 'Plug-and-play local Wi‑Fi access hubs for offline videos, documents, forms, catalogs, dashboards, and training content.',
              email: 'iamharishrohith@gmail.com',
              telephone: '+91-89034-16887',
              founder: {
                '@type': 'Person',
                name: 'Thamizharasan N',
                jobTitle: 'Founder & CEO',
              },
              employee: [
                {
                  '@type': 'Person',
                  name: 'Harish Rohith S',
                  jobTitle: 'Tech Lead',
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 72px - 400px)' }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
