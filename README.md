# Awesome AI Benchmarks

A curated list of AI benchmarks across various domains including Natural Language Processing, Computer Vision, and Multimodal tasks. This repository automatically generates a searchable website at [awesome-ai-benchmarks.vercel.app](https://awesome-ai-benchmarks.vercel.app) from the benchmark entries below.

## 📋 Table of Contents

- [📊 Statistics](#-statistics)
- [🚀 Website](#-website)
- [📝 Contributing](#-contributing)
- [📚 Benchmarks](#-benchmarks)
  - [Programming & Code Generation](#programming--code-generation)
    - [Code Generation & Evaluation](#code-generation--evaluation)
    - [API & Tool Usage](#api--tool-usage)
    - [Terminal & Environment](#terminal--environment)
    - [Logic & Reasoning](#logic--reasoning)
    - [Database & Query](#database--query)
  - [Multimodal & Vision](#multimodal--vision)
    - [Video Understanding](#video-understanding)
    - [Multimodal Evaluation](#multimodal-evaluation)
    - [OCR & Document Understanding](#ocr--document-understanding)
  - [Legal & Domain-Specific](#legal--domain-specific)
    - [Legal Reasoning](#legal-reasoning)
  - [Agent Capabilities & Reasoning](#agent-capabilities--reasoning)
    - [Long-term Coherence](#long-term-coherence)
    - [Scientific & Academic Reasoning](#scientific--academic-reasoning)
    - [Security & Robustness](#security--robustness)
    - [Business & CRM](#business--crm)
    - [World Modeling & Simulation](#world-modeling--simulation)
    - [Game & Interactive](#game--interactive)
  - [Creative & Evaluation](#creative--evaluation)
    - [Memory & Episodic Tasks](#memory--episodic-tasks)
    - [Creative Writing](#creative-writing)
    - [Judgment & Analysis](#judgment--analysis)
- [📄 License](#-license)
- [🤝 Acknowledgments](#-acknowledgments)

## 📊 Statistics

- **Total Benchmarks**: 93
- **Categories**: 5
- **Subcategories**: 19
- **Last Updated**: 2025-08-02

## 🚀 Website

Visit our automatically generated website for a better browsing experience with search, filtering, and detailed benchmark information.

**🌐 [https://awesome-ai-benchmarks.vercel.app](https://awesome-ai-benchmarks.vercel.app)**

## 📝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to add new benchmarks or improve existing entries.

## 📚 Benchmarks

### Programming & Code Generation

#### Code Generation & Evaluation
- **LiveCodeBench** - A comprehensive benchmark for evaluating code generation capabilities of large language models on real-world programming tasks
  - Paper: https://arxiv.org/abs/2403.07974
  - Website: https://livecodebench.github.io/
  - Year: 2024
  - Tags: code generation, programming, evaluation, real-world, large-scale

- **HumanEval** - Evaluating Large Language Models Trained on Code
  - Code: https://github.com/openai/human-eval
  - Paper: https://arxiv.org/abs/2107.03374
  - Year: 2021
  - Tags: code generation, programming, python, evaluation, function synthesis

- **BigCodeBench** - Comprehensive benchmark for code generation and understanding
  - Paper: https://openreview.net/forum?id=YrycTjllL0
  - Website: https://bigcode-bench.github.io/
  - Leaderboard: https://bigcode-bench.github.io/
  - Year: 2024
  - Tags: code generation, programming, large-scale, comprehensive, multilingual

- **SciCode** - A Research Coding Benchmark Curated by Scientists
  - Website: https://scicode-bench.github.io/
  - Paper: https://arxiv.org/abs/2407.13168
  - Leaderboard: https://scicode-bench.github.io/#experiment-results
  - Year: 2024
  - Tags: code generation, scientific, research, domain-specific, challenging

- **Aider Polyglot** - Multilingual coding benchmark for AI assistants
  - Website: https://aider.chat/2024/12/21/polyglot.html#the-polyglot-benchmark
  - Leaderboard: https://aider.chat/docs/leaderboards/
  - Year: 2024
  - Tags: code generation, multilingual, programming, ai assistants, polyglot

- **can-ai-code** - Simple evaluation framework for code generation models with multiple programming languages
  - Code: https://github.com/the-crypt-keeper/can-ai-code
  - Website: https://huggingface.co/spaces/mike-ravkine/can-ai-code-results
  - Year: 2024
  - Tags: code generation, evaluation, multilingual, programming, framework

- **Kotlin-bench** - Benchmark specifically designed for evaluating Kotlin programming capabilities
  - Website: https://firebender.com/blog/kotlin-bench
  - Leaderboard: https://firebender.com/leaderboard
  - Code: https://github.com/firebenders/Kotlin-bench
  - Year: 2025
  - Tags: code generation, kotlin, programming, domain-specific, android

#### API & Tool Usage
- **Gorilla** - Large Language Model Connected with Massive APIs for function calling evaluation
  - Website: https://gorilla.cs.berkeley.edu/blogs/8_berkeley_function_calling_leaderboard.html#bfcl
  - Leaderboard: https://gorilla.cs.berkeley.edu/leaderboard.html
  - Code: https://github.com/ShishirPatil/gorilla/tree/main/berkeley-function-call-leaderboard
  - Year: 2024
  - Tags: function calling, api usage, tool usage, evaluation, large-scale

- **ToolSandbox** - A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities
  - Paper: https://arxiv.org/abs/2408.04682
  - Code: https://github.com/apple/ToolSandbox
  - Year: 2024
  - Tags: tool usage, conversational, interactive, stateful, evaluation

- **τ-bench** - A Benchmark for Tool-Agent-User Interaction in Real-World Domains
  - Paper: https://arxiv.org/abs/2406.12045
  - Leaderboard: https://github.com/sierra-research/tau-bench?tab=readme-ov-file#leaderboard
  - Code: https://github.com/sierra-research/tau-bench
  - Year: 2024
  - Tags: tool usage, agent interaction, real-world, user interaction, domains

- **τ²-bench** - Evaluating Conversational Agents in a Dual-Control Environment
  - Paper: https://arxiv.org/abs/2506.07982
  - Code: https://github.com/sierra-research/tau2-bench
  - Year: 2025
  - Tags: conversational agents, dual-control, evaluation, agent interaction, environment

#### Terminal & Environment
- **terminal-bench** - A benchmark for AI agents in terminal environments
  - Website: https://www.tbench.ai
  - Leaderboard: https://www.tbench.ai/leaderboard
  - Code: https://github.com/laude-institute/terminal-bench
  - Year: 2025
  - Tags: terminal, command line, agent interaction, environment, system administration

#### Logic & Reasoning
- **Sudoku-Bench** - Benchmark testing logical reasoning capabilities through Sudoku puzzle solving
  - Code: https://github.com/SakanaAI/Sudoku-Bench
  - Website: https://pub.sakana.ai/sudoku/
  - Paper: https://arxiv.org/abs/2505.16135
  - Year: 2025
  - Tags: logical reasoning, puzzle solving, constraint satisfaction, game, challenging

- **Tests as Prompt** - A Test-Driven-Development Benchmark for LLM Code Generation
  - Paper: https://arxiv.org/abs/2505.09027
  - Year: 2025
  - Tags: code generation, test-driven development, programming, software engineering, testing

- **Web-Bench** - A LLM Code Benchmark Based on Web Standards and Frameworks
  - Code: https://github.com/bytedance/web-bench
  - Paper: https://arxiv.org/abs/2505.07473
  - Leaderboard: https://huggingface.co/spaces/bytedance-research/Web-Bench-Leaderboard
  - Website: https://huggingface.co/spaces/bytedance-research/Web-Bench-Leaderboard
  - Year: 2025
  - Tags: code generation, web development, html, css, javascript, frameworks

- **KernelBench** - Can LLMs Write GPU Kernels?
  - Website: https://scalingintelligence.stanford.edu/blogs/kernelbench/
  - Leaderboard: https://scalingintelligence.stanford.edu/KernelBenchLeaderboard/
  - Year: 2025
  - Tags: code generation, gpu programming, cuda, kernel development, high performance computing

#### Database & Query
- **CypherBench** - Towards Precise Retrieval over Full-scale Modern Knowledge Graphs in the LLM Era
  - Code: https://github.com/megagonlabs/cypherbench
  - Paper: https://arxiv.org/abs/2412.18702
  - Year: 2024
  - Tags: database, knowledge graphs, cypher, query generation, retrieval

### Multimodal & Vision

#### Video Understanding
- **LongVideoBench** - A Benchmark for Long-context Interleaved Video-Language Understanding
  - Paper: https://arxiv.org/abs/2407.15754
  - Website: https://longvideobench.github.io/
  - Leaderboard: https://longvideobench.github.io/index.html#leaderboard
  - Year: 2024
  - Tags: video understanding, multimodal, long-context, video-language, challenging

- **Video-MME** - The First-Ever Comprehensive Evaluation Benchmark of Multi-modal LLMs in Video Analysis
  - Paper: https://arxiv.org/pdf/2405.21075
  - Website: https://video-mme.github.io/home_page.html
  - Code: https://github.com/MME-Benchmarks/Video-MME
  - Leaderboard: https://video-mme.github.io/home_page.html#leaderboard
  - Year: 2025
  - Tags: video analysis, multimodal, comprehensive, evaluation, video-language

- **MLVU** - Multi-task Long Video Understanding Benchmark
  - Code: https://github.com/JUNJIE99/MLVU
  - Paper: https://arxiv.org/abs/2406.04264
  - Leaderboard: https://github.com/JUNJIE99/MLVU?tab=readme-ov-file#trophy-mlvu-test-leaderboard
  - Year: 2024
  - Tags: video understanding, multi-task, long video, benchmark, challenging

- **Physics IQ Benchmark** - Do generative video models understand physical principles?
  - Website: https://physics-iq.github.io/
  - Paper: https://arxiv.org/abs/2501.09038
  - Code: https://github.com/google-deepmind/physics-IQ-benchmark
  - Leaderboard: https://github.com/google-deepmind/physics-IQ-benchmark?tab=readme-ov-file#leaderboard
  - Year: 2025
  - Tags: video generation, physics, scientific, generative models, physical reasoning

- **VBench** - Comprehensive Benchmark Suite for Video Generative Models
  - Website: https://vchitect.github.io/VBench-project/
  - Code: https://github.com/Vchitect/VBench
  - Leaderboard: https://huggingface.co/spaces/Vchitect/VBench_Leaderboard
  - Year: 2024
  - Tags: video generation, generative models, comprehensive, evaluation, benchmark suite

- **VBench-2.0** - Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness
  - Code: https://github.com/Vchitect/VBench/tree/master/VBench-2.0
  - Website: https://vchitect.github.io/VBench-2.0-project/
  - Paper: https://arxiv.org/abs/2503.21755
  - Year: 2025
  - Tags: video generation, generative models, faithfulness, advanced, evaluation

- **FAVOR-Bench** - A Comprehensive Benchmark for Fine-Grained Video Motion Understanding
  - Website: https://favor-bench.github.io/
  - Paper: https://arxiv.org/abs/2503.14935
  - Code: https://github.com/FAVOR-Bench/FAVOR-Bench
  - Leaderboard: https://favor-bench.github.io/#leaderboard
  - Year: 2025
  - Tags: video understanding, motion analysis, fine-grained, comprehensive, video motion

#### Multimodal Evaluation
- **MLLM-as-a-Judge** - Assessing Multimodal LLM-as-a-Judge with Vision-Language Benchmark
  - Paper: https://arxiv.org/abs/2402.04788
  - Website: https://mllm-judge.github.io/
  - Code: https://github.com/Dongping-Chen/MLLM-Judge
  - Leaderboard: https://mllm-judge.github.io/leaderboard.html
  - Year: 2024
  - Tags: multimodal, vision-language, evaluation, judgment, llm-as-judge

- **Vision Language Models are Biased** - Benchmark examining bias in vision-language models
  - Website: https://vlmsarebiased.github.io/
  - Paper: https://arxiv.org/abs/2505.23941
  - Code: https://github.com/anvo25/vlms-are-biased
  - Year: 2025
  - Tags: vision-language, bias evaluation, fairness, multimodal, social bias

- **ManipBench** - Benchmarking Vision-Language Models for Low-Level Robot Manipulation
  - Website: https://manipbench.github.io/
  - Paper: https://arxiv.org/abs/2505.09698
  - Year: 2025
  - Tags: robotics, manipulation, vision-language, low-level control, embodied ai

- **ENIGMAEVAL** - A Benchmark of Long Multimodal Reasoning Challenges
  - Paper: https://arxiv.org/pdf/2502.08859
  - Leaderboard: https://scale.com/leaderboard/enigma_eval
  - Year: 2025
  - Tags: multimodal reasoning, long-context, challenging, complex reasoning, evaluation

- **VisuLogic** - A Benchmark for Evaluating Visual Reasoning in Multi-modal Large Language Models
  - Website: https://visulogic-benchmark.github.io/VisuLogic/#
  - Paper: https://arxiv.org/abs/2504.15279
  - Leaderboard: https://visulogic-benchmark.github.io/VisuLogic/
  - Year: 2025
  - Tags: visual reasoning, multimodal, logical reasoning, visual logic, challenging

- **PHYBench** - Holistic Evaluation of Physical Perception and Reasoning in Large Language Models
  - Website: https://phybench-official.github.io/phybench-demo/
  - Paper: https://arxiv.org/abs/2504.16074
  - Year: 2025
  - Tags: physical reasoning, perception, multimodal, physics, scientific

- **EmbodiedBench** - Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents
  - Website: https://embodiedbench.github.io/
  - Paper: https://arxiv.org/abs/2502.09560
  - Leaderboard: https://embodiedbench.github.io/
  - Year: 2025
  - Tags: embodied ai, multimodal, vision-driven, agents, comprehensive

#### OCR & Document Understanding
- **Intelligent Document Processing (IDP) Leaderboard** - Comprehensive evaluation of document processing capabilities
  - Website: https://idp-leaderboard.org/
  - Leaderboard: https://idp-leaderboard.org/#leaderboard
  - Code: https://github.com/NanoNets/docext
  - Year: 2025
  - Tags: document processing, ocr, text extraction, document understanding, comprehensive

- **olmOCR-Bench** - Benchmark for evaluating optical character recognition capabilities
  - Paper: https://arxiv.org/abs/2502.18443
  - Code: https://github.com/allenai/olmocr/tree/main/olmocr/bench
  - Leaderboard: https://github.com/allenai/olmocr/tree/main/olmocr/bench#results
  - Year: 2025
  - Tags: ocr, optical character recognition, text recognition, document processing, evaluation

### Legal & Domain-Specific

#### Legal Reasoning
- **LEXam** - Benchmarking Legal Reasoning on 340 Law Exams from Swiss, EU, and international law examinations
  - Paper: https://arxiv.org/abs/2505.12864
  - Code: https://github.com/LEXam-Benchmark/LEXam/tree/main
  - Year: 2025
  - Tags: legal reasoning, law exams, domain-specific, multilingual, challenging

- **CaseLaw** - Legal case law analysis and reasoning benchmark
  - Website: https://www.vals.ai/benchmarks/case_law-05-09-2025
  - Leaderboard: https://www.vals.ai/benchmarks/case_law-05-09-2025
  - Year: 2025
  - Tags: legal reasoning, case law, legal analysis, domain-specific, text analysis

- **WorldView-Bench** - A Benchmark for Evaluating Global Cultural Perspectives in Large Language Models
  - Paper: https://arxiv.org/abs/2505.09595
  - Year: 2025
  - Tags: cultural perspectives, global, multilingual, bias evaluation, social understanding

- **Spider 2.0** - Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows
  - Website: https://spider2-sql.github.io/
  - Paper: https://arxiv.org/abs/2411.07763
  - Code: https://github.com/xlang-ai/Spider2
  - Year: 2025
  - Tags: text-to-sql, database, query generation, enterprise, real-world

### Agent Capabilities & Reasoning

#### Swarm Intelligence
- **SwarmBench** - Benchmarking LLMs' Swarm Intelligence
  - Code: https://github.com/RUC-GSAI/YuLan-SwarmIntell
  - Paper: https://arxiv.org/abs/2505.04364
  - Year: 2025
  - Tags: swarm intelligence, multi-agent, collective intelligence, agent coordination, distributed

- **Realistic Evaluations for Agents Leaderboard (REAL)** - Comprehensive agent evaluation framework
  - Website: https://www.realevals.xyz/
  - Paper: https://arxiv.org/abs/2504.11543
  - Leaderboard: https://www.realevals.xyz/
  - Year: 2025
  - Tags: agent evaluation, realistic scenarios, comprehensive, agent capabilities, real-world

#### Long-term Coherence
- **Vending-Bench** - A Benchmark for Long-Term Coherence of Autonomous Agents
  - Website: https://andonlabs.com/evals/vending-bench
  - Paper: https://arxiv.org/pdf/2502.15840
  - Year: 2025
  - Tags: autonomous agents, long-term coherence, agent behavior, consistency, challenging

- **SUPER** - Evaluating Agents on Setting Up and Executing Tasks from Research Repositories
  - Code: https://github.com/allenai/super-benchmark
  - Paper: https://arxiv.org/abs/2409.07440
  - Leaderboard: https://huggingface.co/spaces/allenai/super_leaderboard
  - Year: 2024
  - Tags: agent evaluation, research repositories, task execution, setup, code understanding

- **TravelPlanner** - A Benchmark for Real-World Planning with Language Agents
  - Paper: https://arxiv.org/abs/2402.01622
  - Website: https://osu-nlp-group.github.io/TravelPlanner/
  - Leaderboard: https://huggingface.co/spaces/osunlp/TravelPlannerLeaderboard
  - Code: https://github.com/OSU-NLP-Group/TravelPlanner
  - Year: 2024
  - Tags: planning, travel planning, real-world, language agents, multi-step reasoning

- **LongProc** - Benchmarking Long-Context Language Models on Long Procedural Generation
  - Website: https://princeton-pli.github.io/LongProc/
  - Paper: https://arxiv.org/pdf/2501.05414
  - Leaderboard: https://princeton-pli.github.io/LongProc/#leaderboard
  - Year: 2025
  - Tags: long-context, procedural generation, long-form generation, challenging, text generation

#### Scientific & Academic Reasoning
- **OlympiadBench** - A Challenging Benchmark for Promoting AGI with Olympiad-Level Bilingual Multimodal Scientific Problems
  - Paper: https://arxiv.org/pdf/2402.14008
  - Code: https://github.com/OpenBMB/OlympiadBench
  - Leaderboard: https://github.com/OpenBMB/OlympiadBench?tab=readme-ov-file#leaderboard
  - Year: 2024
  - Tags: scientific reasoning, olympiad, challenging, multimodal, bilingual

- **ZebraLogic** - Benchmarking the Logical Reasoning Ability of Language Models
  - Paper: https://arxiv.org/abs/2502.01100
  - Website: https://huggingface.co/blog/yuchenlin/zebra-logic
  - Leaderboard: https://huggingface.co/spaces/allenai/ZebraLogic
  - Year: 2025
  - Tags: logical reasoning, constraint satisfaction, deductive reasoning, challenging, puzzle solving

- **TruthfulQA** - Measuring How Models Imitate Human Falsehoods (New version)
  - Paper: https://arxiv.org/abs/2109.07958
  - Code: https://github.com/sylinrl/TruthfulQA
  - Year: 2021
  - Tags: truthfulness, factuality, misinformation, evaluation, bias detection

- **MathChat** - Benchmarking Mathematical Reasoning and Instruction Following in Multi-Turn Interactions
  - Code: https://github.com/Zhenwen-NLP/MathChat
  - Paper: https://arxiv.org/abs/2405.19444
  - Year: 2024
  - Tags: mathematical reasoning, multi-turn, conversational, instruction following, mathematics

- **MMLU-Pro** - Enhanced version of the Massive Multitask Language Understanding benchmark
  - Code: https://github.com/TIGER-AI-Lab/MMLU-Pro
  - Paper: https://arxiv.org/abs/2406.01574
  - Leaderboard: https://huggingface.co/spaces/TIGER-Lab/MMLU-Pro
  - Year: 2024
  - Tags: multitask learning, knowledge evaluation, academic subjects, comprehensive, challenging

- **SuperGPQA** - Scaling LLM Evaluation across 285 Graduate Disciplines
  - Website: https://supergpqa.github.io/
  - Paper: https://www.arxiv.org/abs/2502.14739
  - Leaderboard: https://supergpqa.github.io/#Dataset
  - Year: 2025
  - Tags: graduate level, academic disciplines, large-scale, scientific reasoning, challenging

- **PhysBench** - Benchmarking and Enhancing VLMs for Physical World Understanding
  - Website: https://physbench.github.io/
  - Paper: https://arxiv.org/abs/2501.16411
  - Code: https://github.com/USC-GVL/PhysBench
  - Leaderboard: https://physbench.github.io/#leaderboard
  - Year: 2025
  - Tags: physical world understanding, vision-language, physics, multimodal, scientific

- **MATH-Perturb** - Benchmarking LLMs' Math Reasoning Abilities against Hard Perturbations
  - Website: https://math-perturb.github.io/
  - Paper: https://arxiv.org/abs/2502.06453
  - Code: https://github.com/Kaffaljidhmah2/MATH-Perturb
  - Leaderboard: https://math-perturb.github.io/#leaderboard
  - Year: 2025
  - Tags: mathematical reasoning, perturbations, robustness, challenging, mathematics

- **PhD Knowledge Not Required** - A Reasoning Challenge for Large Language Models
  - Website: https://huggingface.co/papers/2502.01584
  - Paper: https://arxiv.org/abs/2502.01584
  - Leaderboard: https://huggingface.co/spaces/nuprl/reasoning-weekly
  - Year: 2025
  - Tags: reasoning challenge, logical reasoning, accessible knowledge, challenging, general reasoning

- **Gravity-Bench-v1** - A Benchmark on Gravitational Physics Discovery for Agents
  - Paper: https://arxiv.org/abs/2501.18411
  - Year: 2025
  - Tags: physics, gravitational physics, scientific discovery, agents, domain-specific

- **MMLU** - Measuring Massive Multitask Language Understanding
  - Code: https://github.com/hendrycks/test
  - Paper: https://arxiv.org/abs/2009.03300
  - Year: 2020
  - Tags: multitask learning, knowledge evaluation, academic subjects, comprehensive, classification

- **MATH** - Measuring Mathematical Problem Solving With the MATH Dataset
  - Code: https://github.com/hendrycks/math
  - Paper: https://arxiv.org/abs/2103.03874
  - Year: 2021
  - Tags: mathematical reasoning, problem solving, mathematics, challenging, step-by-step

- **GPQA** - A Graduate-Level Google-Proof Q&A Benchmark
  - Code: https://github.com/idavidrein/gpqa/
  - Paper: https://arxiv.org/abs/2311.12022
  - Year: 2023
  - Tags: graduate level, scientific reasoning, challenging, question answering, google-proof

- **DROP** - A Reading Comprehension Benchmark Requiring Discrete Reasoning Over Paragraphs
  - Website: https://allenai.org/data/drop
  - Paper: https://arxiv.org/abs/1903.00161
  - Year: 2019
  - Tags: reading comprehension, discrete reasoning, numerical reasoning, text understanding, challenging

- **MGSM** - Multilingual Grade School Math Benchmark (MGSM), Language Models are Multilingual Chain-of-Thought Reasoners
  - Code: https://github.com/google-research/url-nlp
  - Paper: https://arxiv.org/abs/2210.03057
  - Leaderboard: https://www.vals.ai/benchmarks/mgsm-2025-05-09
  - Year: 2022
  - Tags: mathematical reasoning, multilingual, grade school math, chain-of-thought, mathematics

- **FrontierMath** - A Benchmark for Evaluating Advanced Mathematical Reasoning in AI
  - Website: https://epoch.ai/frontiermath
  - Paper: https://arxiv.org/abs/2411.04872
  - Year: 2024
  - Tags: mathematical reasoning, advanced mathematics, challenging, frontier research, hard

- **MuSR** - Testing the Limits of Chain-of-thought with Multistep Soft Reasoning
  - Paper: https://arxiv.org/abs/2310.16049
  - Leaderboard: https://klu.ai/glossary/musr-eval
  - Year: 2023
  - Tags: chain-of-thought, multistep reasoning, soft reasoning, challenging, logical reasoning

- **AIME Benchmark** - American Invitational Mathematics Examination benchmark
  - Website: https://www.vals.ai/benchmarks/aime-2025-05-09
  - Leaderboard: https://www.vals.ai/benchmarks/aime-2025-05-09
  - Year: 2025
  - Tags: mathematical reasoning, competition mathematics, challenging, high school level, problem solving

- **Humanity's Last Exam** - Comprehensive evaluation benchmark for advanced AI capabilities
  - Website: https://agi.safe.ai/
  - Paper: https://arxiv.org/abs/2501.14249
  - Code: https://github.com/centerforaisafety/hle
  - Leaderboard: https://agi.safe.ai/
  - Year: 2025
  - Tags: comprehensive evaluation, advanced ai, challenging, multidisciplinary, hard

- **ProcessBench** - Identifying Process Errors in Mathematical Reasoning
  - Website: https://huggingface.co/papers/2412.06559
  - Paper: https://arxiv.org/abs/2412.06559
  - Year: 2024
  - Tags: mathematical reasoning, process errors, error identification, mathematics, evaluation

- **SimpleQA** - Measuring short-form factuality in large language models
  - Website: https://openai.com/index/introducing-simpleqa
  - Paper: https://arxiv.org/abs/2411.04368
  - Year: 2024
  - Tags: factuality, short-form qa, question answering, evaluation, knowledge

- **BrowseComp** - A Simple Yet Challenging Benchmark for Browsing Agents
  - Website: https://openai.com/index/browsecomp
  - Paper: https://arxiv.org/abs/2504.12516
  - Code: https://github.com/openai/simple-evals
  - Leaderboard: https://github.com/openai/simple-evals?tab=readme-ov-file#benchmark-results
  - Year: 2025
  - Tags: browsing agents, web navigation, agent capabilities, challenging, web interaction

- **HealthBench** - Evaluating Large Language Models Towards Improved Human Health
  - Website: https://openai.com/index/healthbench
  - Paper: https://cdn.openai.com/pdf/bd7a39d5-9e9f-47b3-903c-8b847ca650c7/healthbench_paper.pdf
  - Leaderboard: https://openai.com/index/healthbench/
  - Year: 2025
  - Tags: medical, healthcare, domain-specific, health evaluation, clinical reasoning

- **QuestBench** - Can LLMs ask the right question to acquire information in reasoning tasks?
  - Code: https://github.com/google-deepmind/questbench
  - Paper: https://arxiv.org/abs/2503.22674
  - Year: 2025
  - Tags: question generation, information acquisition, reasoning, interactive reasoning, challenging

- **MedAgentsBench** - Benchmarking Thinking Models and Agent Frameworks for Complex Medical Reasoning
  - Code: https://github.com/gersteinlab/medagents-benchmark
  - Paper: https://arxiv.org/abs/2503.07459
  - Year: 2025
  - Tags: medical reasoning, healthcare, agent frameworks, clinical reasoning, domain-specific

- **Can Language Models Falsify?** - Evaluating Algorithmic Reasoning with Counterexample Creation
  - Website: https://falsifiers.github.io/
  - Paper: https://arxiv.org/abs/2502.19414
  - Leaderboard: https://falsifiers.github.io/#results
  - Year: 2025
  - Tags: algorithmic reasoning, counterexample creation, logical reasoning, falsification, challenging

- **BIG-Bench Extra Hard** - Enhanced version of the BIG-Bench benchmark with more challenging tasks
  - Code: https://github.com/google-deepmind/bbeh
  - Paper: https://arxiv.org/abs/2502.19187
  - Leaderboard: https://github.com/google-deepmind/bbeh/blob/main/leaderboard.md
  - Year: 2025
  - Tags: multitask evaluation, challenging, comprehensive, hard tasks, diverse domains

#### Security & Robustness
- **JailbreakBench** - An Open Robustness Benchmark for Jailbreaking Large Language Models
  - Paper: https://arxiv.org/abs/2404.01318
  - Website: https://jailbreakbench.github.io
  - Year: 2024
  - Tags: security, robustness, jailbreaking, safety evaluation, adversarial attacks

- **SnitchBench** - Benchmark for evaluating model safety and information leakage
  - Website: https://snitchbench.t3.gg/
  - Code: https://github.com/t3dotgg/SnitchBench
  - Year: 2025
  - Tags: safety evaluation, information leakage, security, privacy, model safety

- **DIF** - A Framework for Benchmarking and Verifying Implicit Bias in LLMs
  - Paper: https://arxiv.org/pdf/2505.10013
  - Year: 2025
  - Tags: bias evaluation, implicit bias, fairness, social bias, verification

#### Business & CRM
- **CRMArena-Pro** - Holistic Assessment of LLM Agents Across Diverse Business Scenarios and Interactions
  - Paper: https://arxiv.org/abs/2505.18878
  - Website: https://www.salesforce.com/blog/crmarena-pro/
  - Year: 2025
  - Tags: business scenarios, crm, agent evaluation, customer service, domain-specific

- **CXMArena** - Unified Dataset to benchmark performance in realistic CXM Scenarios
  - Paper: https://arxiv.org/abs/2505.09436
  - Year: 2025
  - Tags: customer experience, business scenarios, realistic scenarios, domain-specific, cxm

#### World Modeling & Simulation
- **Text2World** - Benchmarking Large Language Models for Symbolic World Model Generation
  - Website: https://text-to-world.github.io/
  - Paper: https://arxiv.org/abs/2502.13092
  - Code: https://github.com/Aaron617/text2world
  - Year: 2025
  - Tags: world modeling, symbolic reasoning, world generation, simulation, text-to-world

#### Game & Interactive
- **LLMs Battle Snake** - Game-based evaluation using Snake gameplay
  - Website: https://snakebench.com/
  - Leaderboard: https://snakebench.com/
  - Year: 2025
  - Tags: game playing, snake game, interactive, real-time decision making, game ai

- **ARC-AGI-1** - Abstraction and Reasoning Corpus for Artificial General Intelligence
  - Code: https://github.com/fchollet/arc-agi
  - Paper: https://arxiv.org/abs/1911.01547
  - Year: 2019
  - Tags: abstraction, reasoning, agi, pattern recognition, challenging

- **ARC-AGI-2** - A New Challenge for Frontier AI Reasoning Systems
  - Paper: https://arxiv.org/abs/2505.11831
  - Website: https://arcprize.org/arc-agi/2/
  - Code: https://github.com/arcprize/ARC-AGI-2
  - Year: 2025
  - Tags: abstraction, reasoning, agi, frontier ai, challenging

- **Factorio Learning Environment** - Complex game environment for AI agent training and evaluation
  - Website: https://jackhopkins.github.io/factorio-learning-environment/
  - Paper: https://arxiv.org/abs/2503.09617
  - Leaderboard: https://jackhopkins.github.io/factorio-learning-environment/leaderboard/
  - Year: 2025
  - Tags: game environment, complex planning, resource management, strategy game, agent training

- **Balrog** - Benchmarking Agentic LLM and VLM Reasoning On Games
  - Website: https://balrogai.com/
  - Paper: https://arxiv.org/abs/2411.13543
  - Leaderboard: https://balrogai.com/
  - Year: 2024
  - Tags: game playing, agentic reasoning, multimodal, vision-language, game ai

- **WeirdML Benchmark v1 (Archived)** - Unconventional machine learning challenges
  - Website: https://htihle.github.io/weirdml_v1.html
  - Leaderboard: https://htihle.github.io/weirdml_v1.html#results
  - Year: 2024
  - Tags: unconventional, creative challenges, archived, experimental, diverse tasks

- **WeirdML Benchmark v2** - Unconventional machine learning challenges
  - Website: https://htihle.github.io/weirdml.html
  - Leaderboard: https://htihle.github.io/weirdml.html#results
  - Year: 2025
  - Tags: unconventional, creative challenges, experimental, diverse tasks, innovative

- **PokerBench** - Training Large Language Models to become Professional Poker Players
  - Code: https://github.com/pokerllm/pokerbench
  - Paper: https://www.arxiv.org/abs/2501.08328
  - Year: 2025
  - Tags: game playing, poker, strategic reasoning, game theory, decision making

- **GameArena** - Evaluating LLM Reasoning through Live Computer Games
  - Paper: https://arxiv.org/abs/2412.06394
  - Leaderboard: https://huggingface.co/spaces/lmgame/game_arena_bench
  - Year: 2024
  - Tags: game playing, live games, computer games, reasoning evaluation, interactive

### Creative & Evaluation

#### Memory & Episodic Tasks
- **Evaluating Episodic Memory in Large Language Models** - Benchmark for Large Language Models memory capabilities
  - Paper: https://arxiv.org/abs/2501.13121
  - Code: https://github.com/ahstat/episodic-memory-benchmark
  - Leaderboard: https://github.com/ahstat/episodic-memory-benchmark?tab=readme-ov-file#-ranking-in-context-memory
  - Year: 2025
  - Tags: episodic memory, memory evaluation, context memory, cognitive abilities, challenging

#### Creative Writing
- **Longform Creative Writing** - Benchmark for evaluating long-form creative writing capabilities
  - Website: https://eqbench.com/creative_writing_longform.html
  - Year: 2024
  - Tags: creative writing, long-form generation, creativity, text generation, literary

- **Creative Writing v3** - Enhanced creative writing evaluation benchmark
  - Website: https://eqbench.com/creative_writing.html
  - Year: 2024
  - Tags: creative writing, creativity evaluation, text generation, literary, enhanced

#### Judgment & Analysis
- **EQ-Bench 3** - Emotional Intelligence Benchmarks for LLMs
  - Website: https://eqbench.com/
  - Year: 2024
  - Tags: emotional intelligence, social understanding, empathy, human behavior, psychology

- **Judgemark v2** - Benchmark for evaluating judgment and decision-making capabilities
  - Website: https://eqbench.com/judgemark-v2.html
  - Year: 2024
  - Tags: judgment, decision making, evaluation, reasoning, critical thinking

- **BuzzBench** - Humor analysis benchmark for evaluating understanding of comedy and wit
  - Website: https://eqbench.com/buzzbench.html
  - Year: 2024
  - Tags: humor analysis, comedy understanding, wit evaluation, social understanding, creative

- **RealCritic** - Towards Effectiveness-Driven Evaluation of Language Model Critiques
  - Code: https://github.com/tangzhy/RealCritic
  - Paper: https://arxiv.org/abs/2501.14492
  - Year: 2025
  - Tags: critique evaluation, effectiveness evaluation, critical analysis, evaluation methodology, judgment

- **PRMBench** - A Fine-grained and Challenging Benchmark for Process-Level Reward Models
  - Code: https://github.com/ssmisya/PRMBench
  - Paper: https://arxiv.org/abs/2501.03124
  - Leaderboard: https://prmbench.github.io/#leaderboard_test
  - Year: 2025
  - Tags: reward models, process-level evaluation, fine-grained evaluation, challenging, rlhf

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- Thanks to all the researchers and organizations who created these benchmarks
- Inspired by other "awesome" lists in the open source community
