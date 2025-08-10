'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import Footer from '@/components/Footer';
import SubcategoryCard from '@/components/SubcategoryCard';

interface Benchmark {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description?: string;
  year?: number;
  metrics?: string[];
  url?: string;
}

interface Category {
  name: string;
  count: number;
  subcategories: Array<{
    name: string;
    count: number;
  }>;
}

interface ParsedReadme {
  benchmarks: Benchmark[];
  categories: Category[];
  totalCount: number;
  lastUpdated: string;
}

interface SubcategoryWithCategory {
  name: string;
  count: number;
  category: string;
  benchmarks: Benchmark[];
}

export default function SubcategoriesPage() {
  const [benchmarkData, setBenchmarkData] = useState<ParsedReadme | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load benchmark data
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetch('/data/benchmarks.json');
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.statusText}`);
        }
        const rawData = await response.json();

        // Transform nested structure to flat structure
        const flatBenchmarks: Benchmark[] = [];
        let benchmarkId = 1;

        rawData.categories.forEach((category: any) => {
          category.subcategories.forEach((subcategory: any) => {
            subcategory.benchmarks.forEach((benchmark: any) => {
              flatBenchmarks.push({
                ...benchmark,
                id: `benchmark-${benchmarkId++}`,
                category: category.name,
                subcategory: subcategory.name,
                metrics: typeof benchmark.metrics === 'string'
                  ? benchmark.metrics.split(',').map((m: string) => m.trim())
                  : benchmark.metrics || []
              });
            });
          });
        });

        // Create the expected ParsedReadme structure
        const transformedData = {
          benchmarks: flatBenchmarks,
          categories: rawData.categories.map((cat: any) => ({
            ...cat,
            count: cat.subcategories.reduce((sum: number, sub: any) => sum + sub.benchmarks.length, 0),
            subcategories: cat.subcategories.map((sub: any) => ({
              ...sub,
              count: sub.benchmarks.length
            }))
          })),
          totalCount: flatBenchmarks.length,
          lastUpdated: new Date().toISOString()
        };

        setBenchmarkData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load benchmark data');
        console.error('Error loading benchmark data:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  // Create flat list of subcategories with their parent categories
  const allSubcategories: SubcategoryWithCategory[] = benchmarkData?.categories.flatMap(category =>
    category.subcategories.map(subcategory => ({
      name: subcategory.name,
      count: subcategory.count,
      category: category.name,
      benchmarks: benchmarkData.benchmarks.filter(b =>
        b.category === category.name && b.subcategory === subcategory.name
      )
    }))
  ) || [];

  // Sort subcategories by count (descending)
  const sortedSubcategories = allSubcategories.sort((a, b) => b.count - a.count);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading subcategories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Failed to Load Data
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!benchmarkData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No benchmark data available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-4">
          <h1 className="section-heading mb-6">Benchmark Subcategories</h1>
          <p className="section-description mb-10">
            Explore specific subcategories to find highly targeted benchmarks for your evaluation needs.
            Each subcategory represents a specialized area within broader benchmark categories.
          </p>

          {/* Subcategory Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
            <div className="modern-card p-6 flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {allSubcategories.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Subcategories
              </div>
            </div>

            <div className="modern-card p-6 flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {benchmarkData.categories.length}
              </div>
              <div className="text-muted-foreground text-sm">
                Parent Categories
              </div>
            </div>

            <div className="modern-card p-6 flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {benchmarkData.totalCount}
              </div>
              <div className="text-muted-foreground text-sm">
                Total Benchmarks
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedSubcategories.map(subcategory => (
              <SubcategoryCard
                key={`${subcategory.category}-${subcategory.name}`}
                subcategory={subcategory}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer onCategoryClick={(category) => {
        // Navigate to main page with category filter
        window.location.href = `/?category=${encodeURIComponent(category)}`;
      }} />
    </>
  );
}
