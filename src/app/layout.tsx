import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vinayak Paints | Authorized Dealer Kansai Nerolac, Asian Paints & Birla Opus',
  description:
    '13-time award-winning authorized dealer of Kansai Nerolac, Asian Paints, and Birla Opus. High-precision computerized tinting, authentic direct mill supplies, and end-to-end painting solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-white pb-20 lg:pb-0">
        {children}
      </body>
    </html>
  );
}
