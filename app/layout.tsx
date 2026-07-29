import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/utilities.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { LiveChat } from '@/components/chat/LiveChat';

export const metadata: Metadata = {
  title: 'BITSOTRON — Autonomous Intelligence & Cyber-Physical Systems',
  description: 'Production-grade micro-kernel runtime for real-time AI inference, edge orchestration, and fault-tolerant robotics.',
  keywords: ['Autonomous Intelligence', 'Robotics AI', 'Cyber-Physical Systems', 'Edge Compute', 'Micro-kernel', 'BITSOTRON'],
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
