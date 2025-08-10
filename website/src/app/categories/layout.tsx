import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI Benchmark Categories | Awesome AI Benchmarks',
    description: 'Explore AI benchmarks organized by categories including Agent Capabilities, Reasoning, Code Generation, Multimodal, and more. Find the right benchmark for your AI research and development needs.',
    keywords: [
        'AI benchmarks',
        'machine learning benchmarks',
        'AI categories',
        'Agent Capabilities benchmarks',
        'Reasoning benchmarks',
        'Code Generation benchmarks',
        'Multimodal benchmarks',
        'Legal benchmarks',
        'Domain-Specific benchmarks',
        'AI research tools',
        'benchmark datasets'
    ],
    openGraph: {
        title: 'AI Benchmark Categories | Awesome AI Benchmarks',
        description: 'Discover AI benchmarks organized by categories. Find benchmarks for Agent Capabilities, Reasoning, Code Generation, Multimodal, and other AI domains.',
        type: 'website',
        url: '/categories',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Benchmark Categories | Awesome AI Benchmarks',
        description: 'Explore AI benchmarks by category - Agent Capabilities, Reasoning, Code Generation, Multimodal, and more.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/categories',
    },
};


export default function CategoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}