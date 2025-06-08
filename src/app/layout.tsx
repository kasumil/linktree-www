import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ThemeSwitch";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasumil Portfolio",
  description: "Kasumul's Portfolio",
  twitter: {
    card: 'summary_large_image',
    creator: '@kasumil',
  },
  openGraph: {
    title: "Kasumil Portfolio",
    description: "Kasumul's Portfolio",
    images: [
      // TODO: 실제 OG 이미지는 public/og/cover.png로 교체
      { url: "/og/placeholder.png", width: 1200, height: 630, alt: "OG Image" },
    ],
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">Home</Link>
              <div className="flex items-center gap-6">
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
                <Link href="/work" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Work</Link>
                <Link href="/side-project" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Side Project</Link>
                <div className="flex items-center gap-4">
                  {/* <a href="mailto:ridou99@gmail.com" className="btn btn-primary">Contact</a> */}
                  <ThemeSwitch />
                </div>
              </div>
            </nav>
          </header>
          <main className="pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
