#!/usr/bin/env node

const fs = require('fs');
const { parseMarkdownToJSON, isValidUrl } = require('./markdown-parser');

function validateReadme(markdownContent) {
  const errors = [];
  const warnings = [];
  
  // Parse the markdown to JSON
  const jsonData = parseMarkdownToJSON(markdownContent);
  
  // Check that we have at least one category section
  if (jsonData.categories.length === 0) {
    errors.push('No category sections (### headers) found in README');
    return {
      isValid: false,
      errors,
      warnings,
      stats: {
        totalBenchmarks: 0,
        totalCategories: 0,
        foundSections: []
      }
    };
  }
  
  let totalBenchmarks = 0;
  const foundSections = [];
  
  // Validate each category
  jsonData.categories.forEach(category => {
    foundSections.push(category.name);
    
    if (!category.name || category.name.trim() === '') {
      errors.push(`Empty category name found`);
    }
    
    if (!category.subcategories || category.subcategories.length === 0) {
      warnings.push(`Category "${category.name}" has no subcategories`);
    }
    
    // Validate each subcategory
    category.subcategories.forEach(subcategory => {
      if (!subcategory.name || subcategory.name.trim() === '') {
        errors.push(`Empty subcategory name found in category "${category.name}"`);
      }
      
      if (!subcategory.benchmarks || subcategory.benchmarks.length === 0) {
        warnings.push(`Subcategory "${subcategory.name}" in category "${category.name}" has no benchmarks`);
      }
      
      // Validate each benchmark
      subcategory.benchmarks.forEach(benchmark => {
        totalBenchmarks++;
        
        // Required fields validation
        if (!benchmark.name || benchmark.name.trim() === '') {
          errors.push(`Benchmark with empty name found in "${category.name}" > "${subcategory.name}"`);
        }
        
        if (!benchmark.description || benchmark.description.trim() === '') {
          errors.push(`Benchmark "${benchmark.name}" missing description`);
        } else if (benchmark.description.length < 10) {
          warnings.push(`Benchmark "${benchmark.name}" has very short description`);
        }
        
        // Check for required Paper or Website URL
        const hasPaper = benchmark.paper && benchmark.paper.trim() !== '';
        const hasWebsite = benchmark.website && benchmark.website.trim() !== '';
        
        if (!hasPaper && !hasWebsite) {
          errors.push(`Benchmark "${benchmark.name}" missing required field: Paper or Website URL`);
        }
        
        // Validate URLs
        if (hasPaper && !isValidUrl(benchmark.paper)) {
          errors.push(`Benchmark "${benchmark.name}" has invalid paper URL: ${benchmark.paper}`);
        }
        
        if (hasWebsite && !isValidUrl(benchmark.website)) {
          errors.push(`Benchmark "${benchmark.name}" has invalid website URL: ${benchmark.website}`);
        }
        
        if (benchmark.code && benchmark.code.trim() !== '' && !isValidUrl(benchmark.code)) {
          errors.push(`Benchmark "${benchmark.name}" has invalid code URL: ${benchmark.code}`);
        }
        
        // Year validation
        if (!benchmark.year) {
          errors.push(`Benchmark "${benchmark.name}" missing required field: Year`);
        } else {
          const year = typeof benchmark.year === 'number' ? benchmark.year : parseInt(benchmark.year);
          if (isNaN(year)) {
            errors.push(`Benchmark "${benchmark.name}" has invalid year: ${benchmark.year}`);
          } else if (year < 1900 || year > new Date().getFullYear() + 1) {
            errors.push(`Benchmark "${benchmark.name}" has year out of range: ${year}`);
          }
        }
        
        // Optional field recommendations
        if (!benchmark.tags || benchmark.tags.length === 0) {
          warnings.push(`Benchmark "${benchmark.name}" missing recommended field: Tags`);
        }
        
        // Validate metrics if present
        if (benchmark.metrics) {
          if (typeof benchmark.metrics === 'string') {
            const metrics = benchmark.metrics.split(',').map(m => m.trim()).filter(m => m.length > 0);
            if (metrics.length === 0) {
              warnings.push(`Benchmark "${benchmark.name}" has empty metrics list`);
            }
          }
        }
        
        // Validate tags if present
        if (benchmark.tags && Array.isArray(benchmark.tags)) {
          const validTags = benchmark.tags.filter(tag => tag && tag.trim() !== '');
          if (validTags.length === 0) {
            warnings.push(`Benchmark "${benchmark.name}" has empty tags list`);
          }
        }
      });
    });
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalBenchmarks,
      totalCategories: jsonData.categories.length,
      foundSections
    }
  };
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: node validate-readme.js <readme-path>');
    process.exit(1);
  }
  
  const [readmePath] = args;
  
  try {
    console.log(`🔍 Validating README at: ${readmePath}`);
    const markdownContent = fs.readFileSync(readmePath, 'utf8');
    
    const result = validateReadme(markdownContent);
    
    console.log('\n📊 Validation Results:');
    console.log(`  • Total benchmarks found: ${result.stats.totalBenchmarks}`);
    console.log(`  • Total categories found: ${result.stats.totalCategories}`);
    console.log(`  • Sections: ${result.stats.foundSections.join(', ')}`);
    
    if (result.errors.length > 0) {
      console.log(`\n❌ Errors (${result.errors.length}):`);
      result.errors.forEach(error => {
        console.log(`  • ${error}`);
      });
    }
    
    if (result.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${result.warnings.length}):`);
      result.warnings.forEach(warning => {
        console.log(`  • ${warning}`);
      });
    }
    
    if (result.isValid) {
      console.log('\n✅ README validation passed!');
      process.exit(0);
    } else {
      console.log('\n❌ README validation failed!');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Error reading README:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateReadme };