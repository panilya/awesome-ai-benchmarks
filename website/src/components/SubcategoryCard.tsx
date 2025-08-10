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
  Layers,
  ArrowRight
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

interface SubcategoryWithCategory {
  name: string;
  count: number;
  category: string;
  benchmarks: Benchmark[];
}

interface SubcategoryCardProps {
  subcategory: SubcategoryWithCategory;
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory }) => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Mathematical and Scientific Reasoning':
        return <Calculator className="h-4 w-4 text-primary" />;
      case 'Code and Programming':
        return <Code2 className="h-4 w-4 text-primary" />;
      case 'Agents and Tool Use':
        return <Wrench className="h-4 w-4 text-primary" />;
      case 'Language Understanding and Reasoning':
        return <Brain className="h-4 w-4 text-primary" />;
      case 'Multimodal (Vision, Video)':
        return <Image className="h-4 w-4 text-primary" />;
      case 'Memory and Long-Context':
        return <Database className="h-4 w-4 text-primary" />;
      case 'Games and Interactive Environments':
        return <Gamepad2 className="h-4 w-4 text-primary" />;
      case 'Domain-Specific Applications':
        return <Briefcase className="h-4 w-4 text-primary" />;
      case 'Ethics, Safety, and Bias':
        return <Shield className="h-4 w-4 text-primary" />;
      case 'Miscellaneous/General':
        return <Layers className="h-4 w-4 text-primary" />;
      default:
        return <Layers className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div className="modern-card p-5 flex flex-col h-full hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {subcategory.name}
        </h3>
        
        {/* Parent Category */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          {getCategoryIcon(subcategory.category)}
          <span className="truncate">{subcategory.category}</span>
        </div>
        
        {/* Benchmark Count */}
        <div className="text-sm text-muted-foreground">
          {subcategory.count} benchmark{subcategory.count !== 1 ? 's' : ''}
        </div>
      </div>
      
      {/* Popular Benchmarks */}
      <div className="flex-grow">
        {subcategory.benchmarks.length > 0 && (
          <div className="text-sm">
            <p className="font-medium mb-2 text-gray-700 dark:text-gray-300">
              Popular benchmarks:
            </p>
            <ul className="space-y-1">
              {subcategory.benchmarks.slice(0, 3).map(benchmark => (
                <li key={benchmark.id} className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  • {benchmark.name}
                </li>
              ))}
            </ul>
            {subcategory.benchmarks.length > 3 && (
              <p className="text-xs text-muted-foreground mt-2">
                +{subcategory.benchmarks.length - 3} more...
              </p>
            )}
          </div>
        )}
      </div>
      
      {/* CTA Button */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href={`/?category=${encodeURIComponent(subcategory.category)}&subcategory=${encodeURIComponent(subcategory.name)}`}
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors group"
        >
          View Benchmarks
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default SubcategoryCard;
