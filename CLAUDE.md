# CLAUDE.md - Awesome AI Benchmarks Project

## Project Overview

This is a comprehensive GitHub repository that automatically generates a searchable Next.js website from a curated collection of AI benchmarks. The system parses a structured README.md file containing benchmark entries and creates a modern, responsive web interface for browsing and discovering AI benchmarks across Natural Language Processing, Computer Vision, and Multimodal domains.

## Architecture

### Repository Structure
```
awesome-ai-benchmarks/
├── README.md                    # Main benchmark data source
├── CONTRIBUTING.md              # Contribution guidelines
├── LICENSE                      # MIT license
├── .gitignore                   # Git ignore rules
├── .github/workflows/           # GitHub Actions
│   ├── build-and-deploy.yml     # Main deployment workflow
│   └── validate-readme.yml      # PR validation workflow
└── website/                     # Next.js application
    ├── package.json             # Dependencies and scripts
    ├── next.config.js           # Next.js configuration
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── tsconfig.json            # TypeScript configuration
    ├── postcss.config.js        # PostCSS configuration
    ├── src/
    │   ├── app/                 # Next.js 13+ app router
    │   │   ├── layout.tsx       # Root layout with SEO
    │   │   ├── page.tsx         # Homepage with search/filter
    │   │   └── globals.css      # Global styles
    │   ├── components/          # React components
    │   │   ├── BenchmarkCard.tsx    # Benchmark display card
    │   │   ├── SearchFilter.tsx     # Search and filtering UI
    │   │   ├── Header.tsx           # Site header with stats
    │   │   └── Footer.tsx           # Site footer
    │   ├── lib/                 # Utilities and types
    │   │   ├── benchmark-types.ts   # TypeScript interfaces
    │   │   ├── markdown-parser.ts   # README parsing logic
    │   │   └── utils.ts             # Helper functions
    ├── scripts/
    │   ├── markdown-parser.js      # Shared parsing logic module
    │   ├── parse-readme.js         # README to JSON parser
    │   └── validate-readme.js      # README format validator
    └── public/
        ├── data/                   # Benchmark data
        │   └── benchmarks.json     # Parsed benchmark data
        └── favicon.ico             # Site favicon
```

## Data Flow

### 1. Benchmark Entry Format
Benchmarks are defined in README.md using this exact structure:
```markdown
### [Category Name]

#### [Subcategory Name]
- **[Benchmark Name]** - [Brief description]
  - Paper: [URL to paper]
  - Code: [URL to code repository] (optional)
  - Website: [URL to official website] (optional)
  - Year: [Publication year]
  - Metrics: [Evaluation metrics] (optional)
  - Tags: [comma-separated tags] (optional)
```

### 2. Automated Processing Pipeline
1. **README Update** → GitHub Actions triggered
2. **Validation** → `validate-readme.js` checks format
3. **Parsing** → `parse-readme.js` extracts benchmark data
4. **Generation** → Creates `benchmarks.json` with structured data
5. **Build** → Next.js builds static site
6. **Deploy** → Vercel deploys updated website

### 3. Website Generation
- Static site generation for optimal performance
- Dynamic routing for individual benchmark pages
- Client-side search and filtering
- SEO optimization with structured data

## Key Components

### Frontend Components

#### BenchmarkCard.tsx
- Displays individual benchmark information
- Shows category, description, year, links
- Includes tags and metrics
- Responsive card layout

#### SearchFilter.tsx
- Real-time search functionality
- Category and subcategory filtering
- Advanced filters (year range, resource availability)
- Tag-based filtering
- Results count display

#### Header.tsx
- Project branding and statistics
- GitHub links and contribution CTAs
- Dynamic stats (total benchmarks, categories, etc.)
- Popular tags display

### Data Processing

#### markdown-parser.js
- Shared parsing logic module for README.md processing
- Contains `parseMarkdownToJSON()` function for converting markdown to structured JSON
- Includes `isValidUrl()` utility for URL validation
- Used by both parsing and validation scripts to ensure consistency
- Eliminates code duplication and provides single source of truth for parsing logic

#### parse-readme.js
- Node.js script that converts README.md to JSON using shared parsing logic
- Organizes data by categories and subcategories
- Generates structured JSON output for website consumption
- Usage: `npm run parse-data`

#### validate-readme.js
- Validates README.md format by parsing to JSON and validating structure
- Uses shared parsing logic from `markdown-parser.js`
- Checks required fields (name, description, paper or website, year)
- Validates URL formats and data integrity
- Reports errors and warnings with detailed feedback
- Usage: `npm run validate`

## Current Benchmark Statistics

Based on the latest README.md processing:
- **Total Benchmarks**: 23
- **Categories**: 5 (Programming & Code Generation, Multimodal & Vision, Legal & Domain-Specific, Agent Capabilities & Reasoning, Creative & Evaluation)
- **Subcategories**: 15
- **Coverage Areas**: Code generation, multimodal AI, legal reasoning, agent capabilities, creative evaluation, security testing, and specialized domain benchmarks

### TypeScript Interfaces

#### Core Types
```typescript
interface Benchmark {
  id: string;
  name: string;
  description: string;
  paper: string;
  code?: string;
  website?: string;
  year: number;
  metrics?: string[];
  tags?: string[];
  category: string;
  subcategory: string;
}
```

## Development Commands

### Setup
```bash
cd website
npm install
```

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Data Processing
```bash
npm run parse-data   # Parse README.md to JSON
npm run validate     # Validate README.md format
```

## GitHub Actions Workflows

### build-and-deploy.yml
- Triggers on README.md changes
- Validates and parses benchmark data
- Builds Next.js website
- Deploys to Vercel
- Auto-commits generated data files

### validate-readme.yml
- Triggers on pull requests
- Validates README.md format
- Comments validation results on PR
- Prevents merging of invalid formats

## Deployment

### Vercel Configuration
- Automatic deployments from main branch
- Environment variables for site URL
- Static export for optimal performance
- Custom domain support ready

### Required Environment Variables
- `VERCEL_TOKEN`: Vercel deployment token
- `ORG_ID`: Vercel organization ID  
- `PROJECT_ID`: Vercel project ID

## Contributing Workflow

### Adding New Benchmarks
1. Fork the repository
2. Add benchmark entry to README.md following the exact format
3. Ensure all required fields are included (Paper, Year)
4. Submit pull request
5. Automated validation will check format
6. After merge, website automatically updates

### Quality Standards
- Peer-reviewed publications only
- Widely used in research community
- Clear evaluation metrics
- Accessible paper URLs
- Proper categorization

## Technical Notes

### Performance Optimizations
- Static site generation
- Image optimization disabled for compatibility
- Tailwind CSS for minimal bundle size
- Component-level code splitting

### SEO Features
- Dynamic meta tags for each benchmark
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card support
- Sitemap generation

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus management

## Known Issues & Limitations

### README Parsing
- Parsing logic is centralized in `markdown-parser.js` for maintainability
- Edge cases in markdown formatting may require manual adjustment
- Manual validation of generated JSON is recommended for new benchmark additions

### Static Data
- Website data is generated at build time
- Real-time updates require rebuild/redeploy
- No database or CMS integration

## Maintenance

### Regular Tasks
- Monitor GitHub Actions for failures
- Update dependencies quarterly
- Review and merge community contributions
- Validate new benchmark additions
- Update README statistics

### Monitoring
- Check Vercel deployment status
- Monitor website performance
- Review GitHub Issues
- Track contribution patterns

This project successfully demonstrates automated documentation websites with modern web technologies and CI/CD practices.
