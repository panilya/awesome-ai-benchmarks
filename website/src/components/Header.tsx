'use client';

import { Github, Star, TrendingUp } from 'lucide-react';
import { BenchmarkStats } from '@/lib/benchmark-types';

interface HeaderProps {
  stats: BenchmarkStats;
}

export default function Header({ stats }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Awesome AI Benchmarks
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            A curated collection of AI benchmarks across Natural Language Processing, 
            Computer Vision, and Multimodal tasks
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stats.totalBenchmarks}
              </div>
              <div className="text-blue-100 text-sm">
                Benchmarks
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stats.totalCategories}
              </div>
              <div className="text-blue-100 text-sm">
                Categories
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {stats.yearRange[1] - stats.yearRange[0] + 1}
              </div>
              <div className="text-blue-100 text-sm">
                Years Covered
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {Math.round((stats.benchmarksWithCode / stats.totalBenchmarks) * 100)}%
              </div>
              <div className="text-blue-100 text-sm">
                Have Code
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/awesome-ai-benchmarks/awesome-ai-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
            
            <a
              href="https://github.com/awesome-ai-benchmarks/awesome-ai-benchmarks/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Star size={20} />
              Contribute
            </a>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Bar */}
      <div className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Latest: {stats.yearRange[1]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Popular tags:</span>
              <div className="flex gap-2">
                {stats.topTags.slice(0, 3).map((tagData) => (
                  <span 
                    key={tagData.tag}
                    className="bg-white/20 px-2 py-1 rounded text-xs"
                  >
                    {tagData.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}