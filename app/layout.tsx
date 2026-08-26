import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apex AI Bot',
  description: 'AI-driven lead generation and support platform for Apex AI BOT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
