import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mozimo - India's Premier European Style Bean to Bar Chocolate Experience",
  description: "Mozimo's journey is a passionate pursuit of crafting exceptional chocolate that celebrates the origin of each cocoa bean. Experience the epitome of indulgence with our perfectly tempered chocolate.",
  keywords: "chocolate, bean to bar, artisanal chocolate, premium chocolate, Indian chocolate, European style chocolate, cocoa beans, chocolate tempering",
  authors: [{ name: "Mozimo Chocolate" }],
  creator: "Mozimo Chocolate",
  publisher: "Mozimo Chocolate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mozimo.com'),
  openGraph: {
    title: "Mozimo - Premium Artisanal Chocolate",
    description: "India's Premier European Style Bean to Bar Chocolate Experience",
    url: 'https://mozimo.com',
    siteName: 'Mozimo Chocolate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mozimo Chocolate - Premium Artisanal Chocolate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mozimo - Premium Artisanal Chocolate",
    description: "India's Premier European Style Bean to Bar Chocolate Experience",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Mobile viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/banners/b1.svg" />
        <link rel="preload" as="image" href="/logo/logo.svg" />
        <link rel="preload" as="image" href="/bst/bs1.svg" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
