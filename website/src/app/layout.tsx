import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Awesome AI Benchmarks',
  description: 'A curated collection of AI benchmarks across Natural Language Processing, Computer Vision, and Multimodal tasks. Discover and explore the most important benchmarks in artificial intelligence research.',
  keywords: [
    'AI benchmarks',
    'LLM benchmarks',
    'machine learning',
    'NLP',
    'computer vision',
    'multimodal',
    'artificial intelligence',
    'research',
    'evaluation',
    'datasets'
  ],
  authors: [{ name: 'Awesome AI Benchmarks Community' }],
  creator: 'Awesome AI Benchmarks',
  publisher: 'Awesome AI Benchmarks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://awesome-ai-benchmarks.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Awesome AI Benchmarks',
    description: 'A curated collection of AI benchmarks across Natural Language Processing, Computer Vision, and Multimodal tasks.',
    url: '/',
    siteName: 'Awesome AI Benchmarks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Awesome AI Benchmarks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome AI Benchmarks',
    description: 'A curated collection of AI benchmarks across Natural Language Processing, Computer Vision, and Multimodal tasks.',
    images: ['/og-image.png'],
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
    google: 'google-site-verification-code',
  },
};

// Function to get categories from benchmarks.json
async function getCategories() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public/data/benchmarks.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return data.categories.map((category: any) => ({
      '@type': 'Thing',
      name: category.name,
      description: `AI benchmarks for ${category.name.toLowerCase()}`
    }));
  } catch (error) {
    console.error('Failed to load categories:', error);
    // Fallback to empty array if file can't be read
    return [];
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Awesome AI Benchmarks',
              description: 'A curated collection of AI benchmarks across various domains and tasks.',
              url: process.env.SITE_URL || 'https://awesome-ai-benchmarks.vercel.app',
              about: categories,
              keywords: ['AI benchmarks', 'LLM benchmarks', 'machine learning', 'artificial intelligence evaluation', 'benchmark datasets', 'AI performance testing', 'LLM performance testing'],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${process.env.SITE_URL || 'https://awesome-ai-benchmarks.vercel.app'}/?search={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}