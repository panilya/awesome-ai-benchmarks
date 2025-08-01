'use client';

import { useState, useEffect } from 'react';
import { BenchmarkCategory, FilterOptions } from '@/lib/benchmark-types';
import { Search, Filter, X, ChevronDown, Calendar, Code, Globe } from 'lucide-react';

interface SearchFilterProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  categories: BenchmarkCategory[];
  totalResults: number;
  allTags: string[];
  yearRange: [number, number];
}

export default function SearchFilter({
  filters,
  onFiltersChange,
  categories,
  totalResults,
  allTags,
  yearRange,
}: SearchFilterProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localYearRange, setLocalYearRange] = useState<[number, number]>(
    filters.year || yearRange
  );

  useEffect(() => {
    if (filters.year) {
      setLocalYearRange(filters.year);
    }
  }, [filters.year]);

  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ 
      ...filters, 
      category: category === 'all' ? undefined : category,
      subcategory: undefined // Reset subcategory when category changes
    });
  };

  const handleSubcategoryChange = (subcategory: string) => {
    onFiltersChange({ 
      ...filters, 
      subcategory: subcategory === 'all' ? undefined : subcategory 
    });
  };

  const handleYearRangeChange = (range: [number, number]) => {
    setLocalYearRange(range);
    onFiltersChange({ ...filters, year: range });
  };

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFiltersChange({ 
      ...filters, 
      tags: newTags.length > 0 ? newTags : undefined 
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
    setLocalYearRange(yearRange);
  };

  const hasActiveFilters = !!(
    filters.search ||
    filters.category ||
    filters.subcategory ||
    filters.year ||
    filters.tags?.length ||
    filters.hasCode ||
    filters.hasWebsite
  );

  const selectedCategory = categories.find(c => c.name === filters.category);
  const availableSubcategories = selectedCategory?.subcategories || [];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search benchmarks by name, description, category, or tags..."
          value={filters.search || ''}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Category Filter */}
        <div className="flex-1 min-w-48">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              value={filters.category || 'all'}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Subcategory Filter */}
        {selectedCategory && (
          <div className="flex-1 min-w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subcategory
            </label>
            <div className="relative">
              <select
                value={filters.subcategory || 'all'}
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              >
                <option value="all">All Subcategories</option>
                {availableSubcategories.map((subcategory) => (
                  <option key={subcategory.name} value={subcategory.name}>
                    {subcategory.name} ({subcategory.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          <Filter size={16} />
          Advanced Filters
          <ChevronDown 
            size={16} 
            className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`} 
          />
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {totalResults} result{totalResults !== 1 ? 's' : ''}
          </span>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
            >
              <X size={14} />
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-6">
          {/* Year Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Calendar size={16} className="inline mr-2" />
              Publication Year Range
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="range"
                  min={yearRange[0]}
                  max={yearRange[1]}
                  value={localYearRange[0]}
                  onChange={(e) => handleYearRangeChange([parseInt(e.target.value), localYearRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{yearRange[0]}</span>
                  <span>{yearRange[1]}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{localYearRange[0]}</span>
                <span>-</span>
                <span>{localYearRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Resource Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Resource Availability
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.hasCode || false}
                  onChange={(e) => onFiltersChange({ ...filters, hasCode: e.target.checked || undefined })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Code size={16} className="text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Has Code</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.hasWebsite || false}
                  onChange={(e) => onFiltersChange({ ...filters, hasWebsite: e.target.checked || undefined })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Globe size={16} className="text-purple-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Has Website</span>
              </label>
            </div>
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {allTags.slice(0, 20).map((tag) => {
                  const isSelected = filters.tags?.includes(tag) || false;
                  return (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
                {allTags.length > 20 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                    +{allTags.length - 20} more...
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}