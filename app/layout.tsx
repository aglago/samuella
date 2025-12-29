import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Source_Sans_3, Source_Serif_4 } from 'next/font/google';
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

const sans3 = Source_Sans_3({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
  weight: ['300', '400', '500', '600', '700']
});

const sansSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif-4',
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

// Define metadata
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: 'Samuella | Full-Stack Software Engineer',
    template: '%s | Samuella'
  },
  description: 'Full-Stack Software Engineer specializing in building seamless digital experiences. Expert in Next.js, TypeScript, React, Node.js, Java, Spring Boot, and modern web technologies. Building innovative solutions for e-commerce, fintech, and business automation.',
  
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
        color: '#888888',
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
    title: 'Samuella | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer crafting seamless digital experiences. Specialized in e-commerce platforms, fintech applications, and business automation. Expert in Next.js, TypeScript, React, Node.js, Java, Spring Boot. Building innovative solutions that solve real business problems.',
    images: [
      {
        url: `${SITE_URL}/images/opengraph.jpeg`,
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
    title: 'Samuella | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer building innovative digital solutions. Specialized in e-commerce, fintech, and business automation with modern web technologies.',
    images: [`${SITE_URL}/images/opengraph.jpeg`],
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
  keywords: [
    'full stack software engineer', 'web developer', 'software engineer', 
    'react developer', 'next.js developer', 'javascript developer', 'typescript developer', 
    'java developer', 'spring boot developer', 'node.js developer',
    'e-commerce development', 'fintech developer', 'business automation', 
    'api development', 'payment gateway integration', 'telecom api integration',
    'ghana software developer', 'turntabl', 'portfolio', 'web application development'
  ],
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
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${sans3.variable} ${sansSerif4.variable}`}>
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
