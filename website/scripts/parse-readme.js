#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parseMarkdownToJSON } = require('./markdown-parser');

function main() {
  // Get command line arguments
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Usage: node script.js <input_path> <output_path>');
    console.error('Example: node script.js input.md output.json');
    process.exit(1);
  }

  const inputPath = args[0];
  const outputPath = args[1];

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`Error: Input file '${inputPath}' does not exist.`);
      process.exit(1);
    }

    // Read the markdown file
    console.log(`Reading markdown file: ${inputPath}`);
    const markdownContent = fs.readFileSync(inputPath, 'utf8');

    // Parse markdown to JSON
    console.log('Parsing markdown content...');
    const jsonResult = parseMarkdownToJSON(markdownContent);

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write JSON to output file
    console.log(`Writing JSON to: ${outputPath}`);
    fs.writeFileSync(outputPath, JSON.stringify(jsonResult, null, 2), 'utf8');

    console.log('✅ Conversion completed successfully!');
    console.log(`📊 Found ${jsonResult.categories.length} categories`);

    // Print summary
    let totalSubcategories = 0;
    let totalBenchmarks = 0;
    jsonResult.categories.forEach(category => {
      totalSubcategories += category.subcategories.length;
      category.subcategories.forEach(subcategory => {
        totalBenchmarks += subcategory.benchmarks.length;
      });
    });

    console.log(`📁 Total subcategories: ${totalSubcategories}`);
    console.log(`📋 Total benchmarks: ${totalBenchmarks}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}
