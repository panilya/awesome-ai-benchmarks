'use client';

import { useState, useEffect } from 'react';
import { Github, Heart, ExternalLink } from 'lucide-react';

interface Category {
  name: string;
  subcategories: any[];
}

interface BenchmarksData {
  categories: Category[];
}

interface FooterProps {
  onCategoryClick?: (category: string) => void;
}

export default function Footer({ onCategoryClick }: FooterProps = {}) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/data/benchmarks.json');
        const data: BenchmarksData = await response.json();
        const categoryNames = data.categories.map(category => category.name);
        setCategories(categoryNames);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        // Fallback to hardcoded categories if fetch fails
        setCategories(['Natural Language Processing', 'Computer Vision', 'Multimodal']);
      }
    };

    fetchCategories();
  }, []);
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground mb-4">
              Awesome AI Benchmarks is a curated collection of AI benchmarks
              automatically generated from a community-maintained repository.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart size={16} className="text-red-500" />
              <span>Made with love for the AI research community</span>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/panilya/awesome-ai-benchmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  Repository
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panilya/awesome-ai-benchmarks/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contributing Guide
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panilya/awesome-ai-benchmarks/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report Issues
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panilya/awesome-ai-benchmarks/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  MIT License
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => onCategoryClick?.(category)}
                    className="text-left hover:text-foreground transition-colors cursor-pointer"
                  >
                    {category}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/panilya/awesome-ai-benchmarks/blob/main/CONTRIBUTING.md#adding-new-categories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Suggest new category
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 Awesome AI Benchmarks. Open source under MIT License.
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated automatically</span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-muted-foreground">
            Data sourced from community contributions.
            <a
              href="https://github.com/panilya/awesome-ai-benchmarks/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 ml-1"
            >
              View raw data
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
