export interface Benchmark {
  id: string;
  name: string;
  description: string;
  paper: string;
  code?: string;
  website?: string;
  year: number;
  metrics?: string[];
  tags?: string[];
  leaderboard?: string;
  category: string;
  subcategory: string;
}

export interface BenchmarkCategory {
  name: string;
  subcategories: BenchmarkSubcategory[];
  count: number;
}

export interface BenchmarkSubcategory {
  name: string;
  benchmarks: Benchmark[];
  count: number;
}

export interface ParsedReadme {
  benchmarks: Benchmark[];
  categories: BenchmarkCategory[];
  totalCount: number;
  lastUpdated: string;
}

export interface FilterOptions {
  search?: string;
  category?: string;
  subcategory?: string;
  year?: [number, number];
  tags?: string[];
  hasCode?: boolean;
  hasWebsite?: boolean;
}

export interface BenchmarkStats {
  totalBenchmarks: number;
  totalCategories: number;
  totalSubcategories: number;
  yearRange: [number, number];
  topTags: { tag: string; count: number }[];
  benchmarksWithCode: number;
  benchmarksWithWebsite: number;
}
