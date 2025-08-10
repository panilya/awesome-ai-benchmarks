import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  Code2,
  Wrench,
  Brain,
  Image,
  Database,
  Gamepad2,
  Briefcase,
  Shield,
  Layers
} from 'lucide-react';

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

interface CategoryCardProps {
  category: Category;
  benchmarks: Benchmark[];
}

// Convert category name to URL-friendly slug
const categoryToSlug = (category: string): string => {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper function to get descriptive text for each category
const getCategoryDescription = (category: string): string => {
  switch (category) {
    case 'Programming & Code Generation':
      return 'Comprehensive benchmarks for code generation, programming languages, API usage, terminal environments, logic & reasoning, and database queries.';
    case 'Multimodal & Vision':
      return 'Benchmarks combining visual and textual understanding, including video analysis, multimodal evaluation, OCR, and document understanding.';
    case 'Legal & Domain-Specific':
      return 'Specialized benchmarks for specific professional domains including legal reasoning, case law analysis, and domain-specific applications.';
    case 'Agent Capabilities & Reasoning':
      return 'Evaluations of AI agents\' long-term coherence, scientific reasoning, security, business applications, world modeling, and interactive capabilities.';
    case 'Creative & Evaluation':
      return 'Benchmarks for memory & episodic tasks, creative writing, judgment & analysis, and other creative AI capabilities.';
    default:
      return 'A collection of benchmarks for evaluating AI capabilities in this domain.';
  }
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, benchmarks }) => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming & Code Generation':
        return <Code2 className="h-6 w-6 text-primary" />;
      case 'Multimodal & Vision':
        return <Image className="h-6 w-6 text-primary" />;
      case 'Legal & Domain-Specific':
        return <Briefcase className="h-6 w-6 text-primary" />;
      case 'Agent Capabilities & Reasoning':
        return <Brain className="h-6 w-6 text-primary" />;
      case 'Creative & Evaluation':
        return <Layers className="h-6 w-6 text-primary" />;
      default:
        return <Layers className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="modern-card p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        {getCategoryIcon(category.name)}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {benchmarks.length} benchmarks available
          </p>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">
          {getCategoryDescription(category.name)}
        </p>
        
        <div className="text-sm">
          {/* Subcategories */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="mb-4">
              <p className="font-medium mb-2">Subcategories:</p>
              <div className="space-y-1">
                {category.subcategories
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 4).map(subcategory => (
                  <div key={subcategory.name} className="flex items-center justify-between">
                    <Link
                      href={`/?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory.name)}`}
                      className="text-primary hover:underline text-xs flex-1 truncate"
                    >
                      {subcategory.name}
                    </Link>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({subcategory.count})
                    </span>
                  </div>
                ))}
                {category.subcategories.length > 4 && (
                  <div className="text-xs text-muted-foreground">
                    +{category.subcategories.length - 4} more subcategories
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Popular benchmarks */}
          <div>
            <p className="font-medium mb-2">Popular benchmarks:</p>
            <ul className="list-disc pl-5 space-y-1">
              {benchmarks.slice(0, 3).map(benchmark => (
                <li key={benchmark.id}>
                  <span className="text-gray-700 dark:text-gray-300 text-xs">
                    {benchmark.name}
                  </span>
                </li>
              ))}
            </ul>
            {benchmarks.length > 3 && (
              <div className="pl-5 mt-2">
                <Link
                  href={`/?category=${encodeURIComponent(category.name)}`}
                  className="text-primary text-xs font-medium hover:underline flex items-center"
                >
                  +{benchmarks.length - 3} more benchmarks
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href={`/?category=${encodeURIComponent(category.name)}`}
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
        >
          View All Benchmarks
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
