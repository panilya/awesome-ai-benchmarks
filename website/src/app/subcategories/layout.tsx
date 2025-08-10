import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI Benchmark Subcategories | Awesome AI Benchmarks',
    description: 'Browse detailed AI benchmark subcategories across Agent Capabilities, Reasoning, Code Generation, Multimodal, and more. Discover specific benchmark types within each AI domain.',
    keywords: [
        'AI benchmark subcategories',
        'machine learning subcategories',
        'AI benchmark types',
        'Video Understanding benchmarks',
        'API & Tool Usage benchmarks',
        'OCR & Document Understanding benchmarks',
        'long-term coherence benchmarks',
        'Security & Robustness benchmarks',
        'swarm & multi-agent benchmarks',
        'world modeling LLM benchmarks',
        'AI research subcategories',
        'benchmark classification',
        'AI evaluation types'
    ],
    openGraph: {
        title: 'AI Benchmark Subcategories | Awesome AI Benchmarks',
        description: 'Explore detailed AI benchmark subcategories. Find specific benchmark types within Agent Capabilities, Reasoning, Code Generation, and other AI domains.',
        type: 'website',
        url: '/subcategories',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Benchmark Subcategories | Awesome AI Benchmarks',
        description: 'Browse AI benchmark subcategories - detailed classification of benchmarks across all AI domains.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/subcategories',
    },
};

export default function SubcategoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
