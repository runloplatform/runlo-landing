import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Runlo — Deploy your apps in minutes',
  description: 'Connect GitHub, select a repository, and deploy instantly. No servers, no SSH, no DevOps headaches. Managed infrastructure, automatic SSL, logs & monitoring out of the box.',
  keywords: ['cloud deployment', 'GitHub deployment', 'PaaS', 'ASP.NET hosting', 'Node.js hosting', 'managed infrastructure'],
  openGraph: {
    title: 'Runlo — Deploy your apps in minutes',
    description: 'Connect GitHub, select a repository, and deploy instantly.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050d1a] text-[#f8fafc]">{children}</body>
    </html>
  );
}
