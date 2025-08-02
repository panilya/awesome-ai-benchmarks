# Contributing to Awesome AI Benchmarks

Thank you for your interest in contributing to the Awesome AI Benchmarks project! This document provides guidelines for adding new benchmarks or improving existing entries.

## 📝 How to Contribute

### Adding a New Benchmark

1. **Fork the repository** and create a new branch for your contribution
2. **Add your benchmark** to the appropriate section in `README.md`
3. **Follow the formatting guidelines** described below
4. **Submit a pull request** with a clear description of what you're adding

### Improving Existing Entries

- Fix broken links
- Add missing information (code repositories, websites, metrics, tags)
- Correct inaccurate information
- Improve descriptions for clarity

## 📋 Formatting Guidelines

### Required Format

All benchmark entries must follow this exact format:

```markdown
- **[Benchmark Name]** - [Brief description]
  - Paper: [URL to paper]
  - Year: [Publication year]
```

### Optional Fields

You can include these additional fields:

```markdown
  - Code: [URL to code repository]
  - Website: [URL to official website]
  - Leaderboard: [URL to leaderboard]
  - Metrics: [Evaluation metrics]
  - Tags: [comma-separated tags]
```

### Complete Example

```markdown
- **GLUE** - General Language Understanding Evaluation benchmark consisting of 9 sentence- or sentence-pair language understanding tasks
  - Paper: https://arxiv.org/abs/1804.07461
  - Code: https://github.com/nyu-mll/GLUE-baselines
  - Website: https://gluebenchmark.com/
  - Year: 2018
  - Metrics: Accuracy, F1, Matthews correlation
  - Tags: classification, language understanding, multi-task
```

## 🔍 Tags Guidelines

Use relevant, lowercase tags separated by commas:

### Common Tags
- **Task type**: classification, regression, generation, retrieval
- **Data type**: text, image, video, audio, multimodal
- **Domain**: medical, legal, scientific, general
- **Scale**: small, medium, large, large-scale
- **Difficulty**: easy, challenging, hard
- **Language**: english, multilingual, cross-lingual

### Tag Examples
```
Tags: classification, sentiment analysis, twitter
Tags: object detection, autonomous driving, real-time
Tags: machine translation, low-resource, multilingual
```

## 🚫 What Not to Include

- **Non-peer reviewed** work
- **Company-internal** benchmarks without public access
- **Duplicate** benchmarks (unless significantly different)
- **Deprecated** benchmarks that are no longer maintained
- **Personal projects** without community adoption

## 🔧 Technical Details

### Automatic Processing

This repository uses automated scripts to:
- Parse the README.md file
- Generate the website data
- Validate benchmark entries
- Deploy the website

### Validation Rules

Your PR will be automatically checked for:
- Proper markdown formatting
- Required fields (name, description, paper, year)
- Valid URL formats
- Correct category placement
- Consistent indentation and spacing

## 📞 Questions?

If you have questions about contributing:
- Open an issue for discussion
- Check existing issues for similar questions
- Review this document thoroughly first

## 🙏 Recognition

All contributors will be recognized in the project. Thank you for helping make AI benchmarks more accessible to the research community!
