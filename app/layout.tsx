import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import './globals.css';
import { PRODUCT, PAYPAL } from '@/lib/constants';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d253d' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tekguyz-storefront-spacex.vercel.app/'),
  title: 'TEKGUYZ | Downey Voice Writing Student Bundle with 14-inch Laptop',
  description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
  openGraph: {
    title: 'TEKGUYZ | Downey Voice Writing Student Bundle with 14-inch Laptop',
    description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
    images: [
      {
        url: '/downey-voicewriting-student-14.jpg',
        width: 1200,
        height: 630,
        alt: 'Downey Voice Writing Student Bundle with 14-inch Laptop',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKGUYZ | Downey Voice Writing Student Bundle',
    description: 'A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.',
    images: ['/downey-voicewriting-student-14.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Script
          id="paypal-sdk"
          src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL.clientId}&currency=${PAYPAL.currency}&intent=${PAYPAL.intent}&components=buttons,messages&enable-funding=paylater`}
          strategy="lazyOnload"
          data-namespace="paypalSDK"
        />
      </body>
    </html>
  );
}
