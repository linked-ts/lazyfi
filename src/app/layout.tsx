import { Montserrat } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import { ThemeEffect } from '@/store/useThemeStore';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'LazyFI | Relax. Procrastinate. Earn.',
  description: 'LazyFI ($LAZY) is a memecoin designed to embrace the art of procrastination and relaxation, turning laziness into passive gains.',
};

// Metadata needs to be exported from a separate file in Next.js 13+
// when using "use client" directive in layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300`}>
        {/* ThemeEffect component applies theme without UI */}
        <ThemeEffect />
        <Navbar />
        <main className="pt-20">{children}</main>  
      </body>
    </html>
  );
}