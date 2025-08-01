/**
 * Shared markdown parsing logic for README.md benchmark entries
 * Used by both parse-readme.js and validate-readme.js
 */

const { URL } = require('url');

/**
 * Check if a string is a valid URL
 */
function isValidUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Parse markdown content and extract benchmark data structure
 * @param {string} markdownContent - The markdown content to parse
 * @returns {Object} Parsed data structure with categories, subcategories, and benchmarks
 */
function parseMarkdownToJSON(markdownContent) {
  const lines = markdownContent.split('\n');
  const result = {
    categories: []
  };

  let currentCategory = null;
  let currentSubcategory = null;
  let currentBenchmark = null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Parse category (### [Category Name])
    if (line.startsWith('### ')) {
      const categoryName = line.substring(4).trim();
      currentCategory = {
        name: categoryName,
        subcategories: []
      };
      result.categories.push(currentCategory);
      currentSubcategory = null;
      currentBenchmark = null;
    }
    // Parse subcategory (#### [Subcategory Name])
    else if (line.startsWith('#### ')) {
      const subcategoryName = line.substring(5).trim();
      currentSubcategory = {
        name: subcategoryName,
        benchmarks: []
      };
      if (currentCategory) {
        currentCategory.subcategories.push(currentSubcategory);
      }
      currentBenchmark = null;
    }
    // Parse benchmark (- **[Benchmark Name]** - [Brief description])
    else if (line.startsWith('- **') && line.includes('**')) {
      const benchmarkMatch = line.match(/^- \*\*([^*]+)\*\* - (.+)$/);
      if (benchmarkMatch) {
        const benchmarkName = benchmarkMatch[1].trim();
        const description = benchmarkMatch[2].trim();

        currentBenchmark = {
          name: benchmarkName,
          description: description
        };

        if (currentSubcategory) {
          currentSubcategory.benchmarks.push(currentBenchmark);
        }

        // Parse optional fields that follow
        i++;
        while (i < lines.length) {
          const nextLine = lines[i];
          const trimmedLine = nextLine.trim();

          // Stop if we hit another benchmark, subcategory, or category
          if (trimmedLine.startsWith('- **') ||
              trimmedLine.startsWith('#### ') ||
              trimmedLine.startsWith('### ')) {
            i--; // Back up one line since we'll increment at the end of the outer loop
            break;
          }

          // Skip empty lines
          if (trimmedLine === '') {
            i++;
            continue;
          }

          // Parse optional fields (must start with exactly 2 spaces + "- ")
          if (nextLine.startsWith('  - ')) {
            const fieldLine = nextLine.substring(4); // Remove "  - "

            if (fieldLine.startsWith('Paper: ')) {
              currentBenchmark.paper = fieldLine.substring(7).trim();
            }
            else if (fieldLine.startsWith('Code: ')) {
              const codeValue = fieldLine.substring(6).trim();
              if (codeValue !== '(optional)') {
                currentBenchmark.code = codeValue;
              }
            }
            else if (fieldLine.startsWith('Website: ')) {
              const websiteValue = fieldLine.substring(9).trim();
              if (websiteValue !== '(optional)') {
                currentBenchmark.website = websiteValue;
              }
            }
            else if (fieldLine.startsWith('Year: ')) {
              const yearValue = fieldLine.substring(6).trim();
              if (yearValue !== '[Publication year]') {
                // Try to parse as number, fallback to string
                const yearNum = parseInt(yearValue);
                currentBenchmark.year = isNaN(yearNum) ? yearValue : yearNum;
              }
            }
            else if (fieldLine.startsWith('Metrics: ')) {
              const metricsValue = fieldLine.substring(9).trim();
              if (metricsValue !== '(optional)' && metricsValue !== '[Evaluation metrics]') {
                currentBenchmark.metrics = metricsValue;
              }
            }
            else if (fieldLine.startsWith('Tags: ')) {
              const tagsValue = fieldLine.substring(6).trim();
              if (tagsValue !== '(optional)' && tagsValue !== '[comma-separated tags]') {
                // Split by comma and trim whitespace
                currentBenchmark.tags = tagsValue.split(',').map(tag => tag.trim());
              }
            }
          } else {
            // If line doesn't match expected format, break out of optional fields parsing
            i--; // Back up one line
            break;
          }

          i++;
        }
      }
    }

    i++;
  }

  return result;
}


module.exports = {
  parseMarkdownToJSON,
  isValidUrl
};