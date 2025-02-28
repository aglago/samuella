import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configure the fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '500']
});

// Site constants for SEO
const SITE_NAME = 'Samuella Portfolio';
const SITE_URL = 'https://www.samuella.site';
const TWITTER_HANDLE = '@smaglago';

// Define metadata (replaces Head component)
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: 'Samuella | Full Stack Web Developer',
    template: '%s | Samuella'
  },
  description: 'Professional portfolio of Samuella, a Full Stack Web Developer specializing in creating innovative, user-friendly web applications with React, Next.js, and Node.js.',
  
  // Favicon and icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#888888', // Your accent color
      },
    ],
  },
  
  // Manifest file
  manifest: '/site.webmanifest',
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Samuella | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, and Node.js. Creating responsive, high-performance web applications with clean code and intuitive user experiences. View my portfolio for innovative projects, technical expertise, and professional web development services.',
    images: [
      {
        url: `${SITE_URL}/images/opengraph.jpeg`, // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Samuella - Full Stack Web Developer',
      },
    ],
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: 'Samuella | Full Stack Web Developer',
    description: 'Professional portfolio of Samuella, a Full Stack Web Developer specializing in creating innovative, user-friendly web applications.',
    images: [`${SITE_URL}/images/opengraph.png`],
  },
  
  // Robots and indexing
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
  
  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },
  
  // Other metadata
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  keywords: ['web developer', 'full stack developer', 'react developer', 'next.js developer', 'javascript developer', 'typescript developer', 'portfolio'],
  authors: [{ name: 'Samuella' }],
  creator: 'Samuella',
  publisher: 'Samuella',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL(SITE_URL),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
