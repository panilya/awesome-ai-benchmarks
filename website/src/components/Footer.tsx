'use client';

import { Github, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-300 mb-4">
              Awesome AI Benchmarks is a curated collection of AI benchmarks 
              automatically generated from a community-maintained repository.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
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
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
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
            <ul className="space-y-2 text-gray-300">
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Multimodal</li>
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
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Awesome AI Benchmarks. Open source under MIT License.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Powered by Next.js</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
              <span>•</span>
              <span>Updated automatically</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Data sourced from community contributions. 
            <a 
              href="https://github.com/panilya/awesome-ai-benchmarks/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              View raw data
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}