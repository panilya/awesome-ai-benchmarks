'use client';

import { Benchmark } from '@/lib/benchmark-types';
import { truncateText } from '@/lib/utils';
import { ExternalLink, Code, Globe, Calendar, Tag, FileText } from 'lucide-react';
import Link from 'next/link';

interface BenchmarkCardProps {
  benchmark: Benchmark;
}

export default function BenchmarkCard({ benchmark }: BenchmarkCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700">
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {benchmark.category}
        </span>
      </div>

      {/* Header */}
      <div className="mb-4 pr-16">
        <Link
          href={`/benchmark/${benchmark.id}`}
          className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {benchmark.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {benchmark.subcategory}
        </p>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
          {truncateText(benchmark.description, 150)}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mb-4">
        <a
          href={benchmark.paper}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          <FileText size={14} />
          Paper
          <ExternalLink size={12} className="opacity-70" />
        </a>

        {benchmark.code && (
          <a
            href={benchmark.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors"
          >
            <Code size={14} />
            Code
            <ExternalLink size={12} className="opacity-70" />
          </a>
        )}

        {benchmark.website && (
          <a
            href={benchmark.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors"
          >
            <Globe size={14} />
            Website
            <ExternalLink size={12} className="opacity-70" />
          </a>
        )}
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={14} />
            {benchmark.year}
          </div>

          {benchmark.metrics && benchmark.metrics.length > 0 && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Metrics: {benchmark.metrics.slice(0, 2).join(', ')}
              {benchmark.metrics.length > 2 && '...'}
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      {benchmark.tags && benchmark.tags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-gray-400" />
            {benchmark.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {benchmark.tags.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{benchmark.tags.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
