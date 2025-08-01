import { Benchmark, FilterOptions } from './benchmark-types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterBenchmarks(
  benchmarks: Benchmark[],
  filters: FilterOptions
): Benchmark[] {
  return benchmarks.filter((benchmark) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        benchmark.name.toLowerCase().includes(searchLower) ||
        benchmark.description.toLowerCase().includes(searchLower) ||
        benchmark.category.toLowerCase().includes(searchLower) ||
        benchmark.subcategory.toLowerCase().includes(searchLower) ||
        benchmark.tags?.some(tag => tag.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.category && benchmark.category !== filters.category) {
      return false;
    }

    // Subcategory filter
    if (filters.subcategory && benchmark.subcategory !== filters.subcategory) {
      return false;
    }

    // Year filter
    if (filters.year) {
      const [minYear, maxYear] = filters.year;
      if (benchmark.year < minYear || benchmark.year > maxYear) {
        return false;
      }
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag =>
        benchmark.tags?.includes(tag)
      );
      if (!hasMatchingTag) return false;
    }

    // Has code filter
    if (filters.hasCode && !benchmark.code) {
      return false;
    }

    // Has website filter
    if (filters.hasWebsite && !benchmark.website) {
      return false;
    }

    return true;
  });
}

export function sortBenchmarks(
  benchmarks: Benchmark[],
  sortBy: 'name' | 'year' | 'category' = 'year',
  sortOrder: 'asc' | 'desc' = 'desc'
): Benchmark[] {
  return [...benchmarks].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'year':
        comparison = a.year - b.year;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category) ||
                    a.subcategory.localeCompare(b.subcategory) ||
                    a.name.localeCompare(b.name);
        break;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });
}

export function extractAllTags(benchmarks: Benchmark[]): string[] {
  const allTags = new Set<string>();
  benchmarks.forEach(benchmark => {
    benchmark.tags?.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

export function getYearRange(benchmarks: Benchmark[]): [number, number] {
  if (benchmarks.length === 0) return [2000, 2025];
  const years = benchmarks.map(b => b.year);
  return [Math.min(...years), Math.max(...years)];
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
