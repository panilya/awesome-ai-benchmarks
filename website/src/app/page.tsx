'use client';

import { useState, useMemo, useEffect } from 'react';
import { FilterOptions, BenchmarkStats, ParsedReadme } from '@/lib/benchmark-types';
import { filterBenchmarks, sortBenchmarks, extractAllTags, getYearRange } from '@/lib/utils';
import BenchmarkCard from '@/components/BenchmarkCard';
import SearchFilter from '@/components/SearchFilter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function HomePage() {
  const [benchmarkData, setBenchmarkData] = useState<ParsedReadme | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({});
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
        const flatBenchmarks: any[] = [];
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

  // Parse URL search params
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');
    const subcategoryParam = urlParams.get('subcategory');

    if (searchParam || categoryParam || subcategoryParam) {
      setFilters({
        search: searchParam || undefined,
        category: categoryParam || undefined,
        subcategory: subcategoryParam || undefined,
      });
    }
  }, []);

  // Memoized calculations
  const filteredAndSortedBenchmarks = useMemo(() => {
    if (!benchmarkData?.benchmarks) return [];

    const filtered = filterBenchmarks(benchmarkData.benchmarks, filters);
    return sortBenchmarks(filtered, 'year', 'desc');
  }, [benchmarkData, filters]);

  const allTags = useMemo(() => {
    if (!benchmarkData?.benchmarks) return [];
    return extractAllTags(benchmarkData.benchmarks);
  }, [benchmarkData]);

  const yearRange = useMemo((): [number, number] => {
    if (!benchmarkData?.benchmarks || benchmarkData.benchmarks.length === 0) return [2000, 2025];
    return getYearRange(benchmarkData.benchmarks);
  }, [benchmarkData]);

  const stats = useMemo((): BenchmarkStats => {
    if (!benchmarkData?.benchmarks) {
      return {
        totalBenchmarks: 0,
        totalCategories: 0,
        totalSubcategories: 0,
        yearRange: [2000, 2025],
        topTags: [],
        benchmarksWithCode: 0,
        benchmarksWithWebsite: 0,
      };
    }

    const tagCounts = new Map<string, number>();
    let benchmarksWithCode = 0;
    let benchmarksWithWebsite = 0;

    benchmarkData.benchmarks.forEach(benchmark => {
      if (benchmark.code) benchmarksWithCode++;
      if (benchmark.website) benchmarksWithWebsite++;

      benchmark.tags?.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    const topTags = Array.from(tagCounts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([tag, count]) => ({ tag, count }));

    return {
      totalBenchmarks: benchmarkData.totalCount,
      totalCategories: benchmarkData.categories.length,
      totalSubcategories: benchmarkData.categories.reduce((sum, cat) => sum + cat.subcategories.length, 0),
      yearRange: getYearRange(benchmarkData.benchmarks),
      topTags,
      benchmarksWithCode,
      benchmarksWithWebsite,
    };
  }, [benchmarkData]);

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);

    // Update URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      if (newFilters.search) params.set('search', newFilters.search);
      if (newFilters.category) params.set('category', newFilters.category);
      if (newFilters.subcategory) params.set('subcategory', newFilters.subcategory);

      const newUrl = params.toString() ? `?${params.toString()}` : '/';
      window.history.replaceState({}, '', newUrl);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading AI benchmarks...</p>
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
      <Header stats={stats} />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchFilter
            filters={filters}
            onFiltersChange={handleFiltersChange}
            categories={benchmarkData.categories}
            totalResults={filteredAndSortedBenchmarks.length}
            allTags={allTags}
            yearRange={yearRange}
          />

          {filteredAndSortedBenchmarks.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No benchmarks found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search criteria or clearing the filters.
              </p>
              <button
                onClick={() => handleFiltersChange({})}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedBenchmarks.map((benchmark) => (
                <BenchmarkCard key={benchmark.id} benchmark={benchmark} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
