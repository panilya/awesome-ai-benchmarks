'use client';

import { Benchmark } from '@/lib/benchmark-types';
import { truncateText } from '@/lib/utils';
import { ExternalLink, Code, Globe, Calendar, Tag, FileText, Trophy } from 'lucide-react';

interface BenchmarkCardProps {
  benchmark: Benchmark;
}

export default function BenchmarkCard({ benchmark }: BenchmarkCardProps) {
  return (
    <div className="group relative bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/50">
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {benchmark.category}
        </span>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-2 line-clamp-1">
          {benchmark.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {benchmark.subcategory}
        </p>
        <p className="text-card-foreground/80 line-clamp-3">
          {truncateText(benchmark.description, 150)}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mb-4">
        <a
          href={benchmark.paper}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
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
            className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors"
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
            className="inline-flex items-center gap-1.5 text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors"
          >
            <Globe size={14} />
            Website
            <ExternalLink size={12} className="opacity-70" />
          </a>
        )}

        {benchmark.leaderboard && (
          <a
            href={benchmark.leaderboard}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
          >
            <Trophy size={14} />
            Leaderboard
            <ExternalLink size={12} className="opacity-70" />
          </a>
        )}
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            {benchmark.year}
          </div>

          {benchmark.metrics && benchmark.metrics.length > 0 && (
            <div className="text-sm text-muted-foreground">
              Metrics: {benchmark.metrics.slice(0, 2).join(', ')}
              {benchmark.metrics.length > 2 && '...'}
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      {benchmark.tags && benchmark.tags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-muted-foreground" />
            {benchmark.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
            {benchmark.tags.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{benchmark.tags.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
