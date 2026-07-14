# Research Report: Foundry IQ — Knowledge & Grounding (Microsoft Foundry)

**Date:** 2026-07-13
**Researcher:** Copilot MS Docs Researcher Agent
**Topic slug:** foundry-iq-knowledge
**Sources consulted:** 13 Microsoft Learn pages, 3 official Microsoft blogs (devblogs.microsoft.com/foundry + techcommunity.microsoft.com), 4 official GitHub sample repositories (referenced in and verified against the docs)

> **Presentation context:** Topic 3 of 5 for a 30-minute *introductory* Microsoft Foundry deck for a mixed TDM/BDM audience. Business value is woven into every capability below. **No pricing/cost information is included** (per scope). Code is secondary — concepts and business value come first.

---

## Executive Summary

**Foundry IQ is Microsoft Foundry's managed "knowledge layer" for AI agents and apps.** In plain terms, it is the part of Microsoft Foundry that connects your organization's scattered information — documents, files, SharePoint sites, data lakes, and even the live web — into a single, reusable **knowledge base** that agents can search to answer questions accurately. The core problem it solves is simple: the AI model inside an agent was trained on public data with a "knowledge cutoff" and cannot see your proprietary content on its own. Foundry IQ gives the agent that missing context so its answers are **grounded** in *your* data, complete with citations back to the source ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)).

Under the hood, Foundry IQ is built on **Azure AI Search** and its **agentic retrieval** engine. Agentic retrieval can use a language model to break a complex question into focused sub-questions, run them in parallel across multiple sources, rerank the results for relevance, and return a unified, cited answer. Microsoft reports this approach delivers roughly **36% higher response quality than traditional single-shot RAG**, and (in its latest benchmarks) up to **54% better recall** compared to single-shot RAG ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq); [Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)).

The business value is threefold and consistent across Microsoft's own messaging. **(1) Better, more trustworthy answers** — grounding reduces hallucinations and every answer can be traced to a source. **(2) Less work and faster delivery** — one knowledge base can be reused across many agents, so teams "build once, reuse everywhere" instead of wiring each agent to each data source. **(3) Security by default** — retrieval is permission-aware: it honors access controls and Microsoft Purview sensitivity labels and runs under the calling user's identity, so agents return only content that user is allowed to see. Foundry IQ **knowledge bases are now generally available** (announced June 2, 2026, in conjunction with Microsoft Build 2026), while several newer knowledge sources and advanced features remain in preview ([Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/); [Migrate agentic retrieval code](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate)).

---

## Table of Contents

1. [Overview](#1-overview)
2. [Key Concepts](#2-key-concepts)
3. [Knowledge Bases & Knowledge Sources](#3-knowledge-bases--knowledge-sources)
4. [Grounding & Retrieval (Agentic Retrieval, RAG, Azure AI Search)](#4-grounding--retrieval-agentic-retrieval-rag-azure-ai-search)
5. [Reuse Across Agents & Apps](#5-reuse-across-agents--apps)
6. [Getting Started (Conceptual Setup)](#6-getting-started-conceptual-setup)
7. [Configuration & Best Practices](#7-configuration--best-practices)
8. [Security, Governance & Advanced Topics](#8-security-governance--advanced-topics)
9. [Availability & Status (GA vs Preview)](#9-availability--status-ga-vs-preview)
10. [Business-Value Summary (for the deck)](#10-business-value-summary-for-the-deck)
11. [Research Limitations](#11-research-limitations)
12. [Complete Reference List](#12-complete-reference-list)

---

## 1. Overview

### What It Is

Foundry IQ is the **knowledge and grounding capability inside Microsoft Foundry**. It lets you build a reusable *knowledge base* that connects to your organization's data and then serves accurate, permission-aware, cited answers to any agent or app that asks.

> "Agents need context from scattered enterprise content to accurately answer questions. The Foundry model powering an agent has a knowledge cutoff and can't access your proprietary data on its own. With Foundry IQ, you can create a configurable, multi-source *knowledge base* that provides agents with permission-aware responses based on your organization's data."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

> "Foundry IQ enables agents to access, process, and act on knowledge from anywhere."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

Azure AI Search documentation describes the same idea from the platform side:

> "It also underpins Foundry IQ, the managed knowledge layer that transforms enterprise content into reusable, permission-aware knowledge bases for agents in the Microsoft Foundry portal."
> — Source: [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

**When and how it was announced.** The technology beneath Foundry IQ — the **agentic retrieval engine in Azure AI Search** — was first introduced on **May 19, 2025** ([Up to 40% better relevance…](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/up-to-40-better-relevance-for-complex-queries-with-new-agentic-retrieval-engine/4413832)). The **"Foundry IQ" brand and knowledge-base experience** appeared in the second half of 2025; the earliest Foundry IQ-branded official post found in this research is dated **November 18, 2025** ([Foundry IQ: boost response relevance by 36%…](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720)). Foundry IQ **knowledge bases reached general availability** in an announcement dated **June 2, 2026** by Pablo Castro (CVP & Distinguished Engineer), published on the Microsoft Foundry Blog and explicitly tied to **Microsoft Build 2026** ([Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)). *(See [Research Limitations](#11-research-limitations) on the "Ignite 2025" framing.)*

### Where It Fits in Microsoft Foundry

Foundry IQ is one of Microsoft's **"IQ" workloads** — the enterprise intelligence layer that grounds agents. Microsoft groups these capabilities under **Microsoft IQ**:

> "Microsoft IQ is a unified intelligence layer for enterprise AI—one where every agent and Copilot interaction is grounded in a shared, continuously evolving understanding of the organization."
> — Source: [Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/)

The Microsoft IQ family (each capability is standalone but complementary):

| IQ capability | What it grounds agents in | Plain-language role |
| --- | --- | --- |
| **Foundry IQ** | Enterprise knowledge: policies, authoritative documents, files, data stores, and the web | "Curated institutional knowledge… and reusable knowledge bases" |
| **Work IQ** | Microsoft 365 collaboration signals — emails, meetings, chats, documents, workflows | How the organization *works* and what people are doing |
| **Fabric IQ** | Business data/analytics — ontologies, semantic models, entities in OneLake & Power BI | The live *state of the business* |
| **Web IQ** | Fresh, real-world data from across the public web | Real-time external context |

> "Foundry IQ provides curated institutional knowledge on the context of policies, authoritative documents, and reusable knowledge bases."
> — Source: [Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/)

> "Foundry IQ is a managed knowledge layer for enterprise data. It connects structured and unstructured data across Azure, SharePoint, OneLake, and the web so agents can access permission-aware knowledge."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

**Note on the family count:** The Foundry IQ concept page frames "three IQ workloads" (Fabric IQ, Work IQ, Foundry IQ), while the broader **Microsoft IQ** hub and the Fabric IQ overview list **four** capabilities, adding **Web IQ**. These reconcile cleanly: **Web IQ is both a Microsoft IQ capability and is surfaced *inside* Foundry IQ as the "web" knowledge source** (powered by Bing grounding) ([Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/); [What is Fabric IQ?](https://learn.microsoft.com/en-us/fabric/iq/overview); [Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)).

### Why It Matters

> "Your company's IQ, powered by Microsoft IQ, is the collective intelligence locked in documents, emails, meetings, operational data, and the live web. This is where your true competitive edge lives. Foundry IQ grounds agents with the knowledge from these sources and continuously improves based on your business goals."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog (Pablo Castro, June 2, 2026)](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

The blog frames the exact pain point Foundry IQ removes:

> "Developers building agent fleets keep hitting the same pattern: the agent logic is ready, but the knowledge infrastructure underneath is complex to do well. Getting to production means solving for stability, scale, data access, answer quality, security, and content ingestion all at once."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

### Key Features

From the official capabilities list ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)):

- **Connect one knowledge base to multiple agents.** Sources include internal data stores (Azure Blob Storage, SharePoint, OneLake) and public web data.
- **Automated ingestion.** Automates document chunking, vector-embedding generation, and metadata extraction for indexed sources; supports scheduled recurring refresh.
- **Flexible querying.** Keyword, vector, or hybrid queries across indexed and remote sources.
- **Agentic retrieval engine.** Uses an (optional) LLM to plan queries, select sources, run parallel searches, and aggregate results.
- **Extractive answers with citations.** Returns raw content plus citations so agents can reason and trace answers to source documents.
- **Permission-aware.** Synchronizes access control lists (ACLs), honors Microsoft Purview sensitivity labels, and enforces permissions at query time.
- **Identity-scoped retrieval.** Runs queries under the caller's Microsoft Entra identity for end-to-end permission enforcement.

---

## 2. Key Concepts

Three terms carry most of the meaning. Keep these on one slide:

```
  ┌───────────────────────────────────────────────────────────────────────┐
  │  FOUNDRY IQ  =  managed knowledge layer for agents (part of MS Foundry) │
  └───────────────────────────────────────────────────────────────────────┘
        │
        │  you create ↓
        ▼
  ┌──────────────────────┐     references     ┌──────────────────────────────┐
  │  KNOWLEDGE BASE       │ ─────────────────▶ │  KNOWLEDGE SOURCES (1..many)  │
  │  (single endpoint +   │                    │  • Azure Blob Storage         │
  │   retrieval settings) │                    │  • SharePoint / OneLake       │
  └──────────────────────┘                    │  • existing search index      │
        │                                      │  • Web (Bing grounding)       │
        │ uses                                 │  • Azure SQL, Files, MCP, +more│
        ▼                                      └──────────────────────────────┘
  ┌──────────────────────────────────────────────────────────────┐
  │  AGENTIC RETRIEVAL (engine, powered by Azure AI Search)        │
  │  plan → search sources in parallel → rerank → return cited     │
  │  grounded results (optionally a synthesized answer)            │
  └──────────────────────────────────────────────────────────────┘
        ▲                                            │
        │ query (under user's identity)              │ grounded, permission-filtered
        │                                            ▼  answers + citations
  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │  Agent A     │   │  Agent B     │   │  App / MCP    │   ← many consumers, one KB
  └──────────────┘   └──────────────┘   └──────────────┘
```

**Concept 1 — Knowledge base.** The top-level, reusable resource. It defines *which* sources to query and *how* retrieval behaves.

> "A [knowledge base] is a top-level object that groups one or more knowledge sources under a single endpoint. Its configuration controls how sources are selected (via retrieval instructions and reasoning effort) and how results are returned (via output mode and answer instructions). An LLM connection enables query planning and answer synthesis."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

**Concept 2 — Knowledge source.** A connection to a place your content lives (internal or external).

> "A *knowledge source* is a top-level resource on your Azure AI Search service that defines the content used in an agentic retrieval pipeline. Each knowledge source is either indexed or remote, which determines how the content is ingested, processed, and queried. Knowledge sources are required components of a knowledge base."
> — Source: [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

**Concept 3 — Agentic retrieval (grounding engine).** The multi-step search pipeline that turns a question into high-quality, cited grounding data.

> "In Azure AI Search, *agentic retrieval* is a multi-query pipeline designed for complex questions posed by users or agents in chat and copilot apps. It's intended for retrieval-augmented generation (RAG) patterns and agent-to-agent workflows."
> — Source: [Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)

**How they relate (one sentence for the deck):** *You create a **knowledge base** that points at one or more **knowledge sources**; when an agent asks a question, **agentic retrieval** plans and runs the search across those sources and returns grounded, cited, permission-filtered results.*

> "When an agent queries the knowledge base, Foundry IQ uses *agentic retrieval* to process the query, retrieve relevant information, enforce user permissions, and return grounded answers with citations."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

**💡 Business value:** Instead of hand-building retrieval plumbing for every agent, teams work with three clean, reusable building blocks. Microsoft calls this out as separating "retrieving knowledge (knowledge bases)" from "using it (your agent)," which "greatly reduces agent development complexity" ([Foundry IQ: boost response relevance by 36%](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720)).

---

## 3. Knowledge Bases & Knowledge Sources

### How you connect enterprise data (conceptually)

A knowledge base references one or more knowledge sources, and the engine queries them together in a single request:

> "You can reference multiple knowledge sources in a single knowledge base. The agentic retrieval engine queries all of them in a single request. Subqueries are generated for each knowledge source, and the top results are returned in the retrieval response."
> — Source: [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

There are **two kinds** of knowledge source, and the distinction is easy to explain to a business audience:

- **Indexed knowledge sources** — content is *ingested and stored* in an Azure AI Search index ahead of time. Azure AI Search automatically handles chunking, vectorization, metadata extraction, and ACL synchronization. Good for your own documents and files.
- **Remote knowledge sources** — content is *never copied*; the engine queries the external system live at retrieval time via that system's native API. Good for always-current data and systems you don't want to duplicate.

> "**Indexed knowledge sources** ingest data into a search index and automatically handle chunking, vectorization, metadata extraction, and access control list (ACL) synchronization… **Remote knowledge sources** don't ingest or store data. Instead, they issue on-demand queries to the external system at retrieval time."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

### Supported knowledge sources

The following table is taken directly from the Azure AI Search knowledge-source documentation. Status labels (GA vs preview) are reconciled in [Section 9](#9-availability--status-ga-vs-preview).

| Kind | What it connects to | Indexed / Remote |
| --- | --- | --- |
| Search index | Wraps an existing Azure AI Search index | Indexed |
| Azure Blob | Generates an indexer pipeline from a blob container | Indexed |
| Azure SQL *(preview)* | Indexer pipeline from an Azure SQL table/view | Indexed |
| File *(preview)* | Uploads files directly into Azure AI Search | Indexed |
| OneLake | Indexer pipeline from a Fabric lakehouse | Indexed |
| Indexed SharePoint *(preview)* | Indexer pipeline from a SharePoint site | Indexed |
| Remote SharePoint *(preview)* | Live retrieval from SharePoint (Copilot Retrieval API) | Remote |
| Fabric Data Agent *(preview)* | Answers/resources from a Fabric data agent | Remote |
| Fabric Ontology *(preview)* | Entity/relationship answers from a Fabric ontology | Remote |
| MCP server *(preview)* | Live, tool-backed results from an external MCP server | Remote |
| Work IQ *(preview)* | Organizational intelligence from Work IQ | Remote |
| Web | Real-time grounding data from Microsoft Bing | Remote |

> — Source: [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

**Data freshness (a common BDM/TDM question):**

> "Indexed knowledge sources use Azure AI Search indexers for data ingestion. You can schedule recurring indexer runs for incremental data refresh… Remote knowledge sources query external systems on demand, so data is always current."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

**Unified ranking across all sources** — indexed and remote results are scored and ranked together, so the agent gets one coherent, relevance-ordered response:

> "For both indexed and remote knowledge sources, all retrieved content flows through the same ranking pipeline. Results are scored for relevance, merged across queries, and reranked before returning in the retrieval response."
> — Source: [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

**💡 Business value:** One knowledge base can unify private documents *and* live web/SharePoint/business data with no custom connectors. Microsoft's framing:

> "Foundry IQ simplifies this by bringing enterprise content and structured systems into a single knowledge base for multi-source, agentic retrieval. Developers can give agents access to that knowledge without building and maintaining separate connectors or source-specific retrieval strategies."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

---

## 4. Grounding & Retrieval (Agentic Retrieval, RAG, Azure AI Search)

### What "grounding" means

Grounding is the practice of giving the model *your* content so its answers are based on facts rather than guesses. Microsoft defines the pattern:

> "Retrieval augmented generation (RAG) is a pattern that combines search with large language models (LLMs) so responses are grounded in your data."
> — Source: [Retrieval augmented generation (RAG) and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)

RAG follows three steps — **Retrieve → Augment → Generate**:

> "**Retrieve**: When a user asks a question, your application queries an index or data store to find relevant content. **Augment**: The app combines the user's question and the retrieved content (grounding data) into a prompt. **Generate**: The model receives the augmented prompt and generates a response grounded in the retrieved content, reducing inaccuracies and enabling accurate citations."
> — Source: [Retrieval augmented generation (RAG) and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)

### How agentic retrieval strengthens grounding

Foundry IQ uses **agentic retrieval** — an evolution of the RAG pattern that behaves less like a single search box and more like a research assistant. In Microsoft's own words:

> "Traditional RAG patterns often use a single query to retrieve information from your data. *Agentic retrieval*, also known as agentic RAG, is an evolution in retrieval architecture that uses a model to break down complex inputs into multiple focused subqueries, run them in parallel, and return structured grounding data that works well with chat completion models."
> — Source: [Retrieval augmented generation (RAG) and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)

Documented advantages of agentic retrieval ([same source](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)):

- **Context-aware query planning** — uses conversation history so follow-up questions keep their context.
- **Parallel execution** — runs multiple focused subqueries at once for broader coverage and lower latency.
- **Structured responses** — returns grounding data, citations, and execution metadata so apps can cite sources and trace reasoning.
- **Built-in semantic ranking** — filters noise and promotes the truly relevant passages.
- **Optional answer synthesis** — can return an LLM-formulated answer, or raw verbatim passages for the agent to process.

### The retrieval pipeline (what happens on each query)

When an agent calls a Foundry IQ knowledge base, the engine performs these operations ([Connect a Foundry IQ knowledge base to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect)):

1. **Plans and decomposes** a user query into subqueries.
2. **Processes the subqueries simultaneously** using keyword, vector, or hybrid techniques.
3. **Applies semantic reranking** to identify the most relevant results.
4. **Synthesizes the results** into a unified response with source references.

> "The agent uses the response to ground its answers in enterprise data or web sources, ensuring factual accuracy and transparency through source attribution."
> — Source: [Connect a Foundry IQ knowledge base to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect)

The end-to-end architecture (from the engine overview) is: **workflow initiation → query planning → parallel query execution with semantic reranking → result synthesis** ([Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)).

### The "retrieval reasoning effort" dial (quality vs speed)

Rather than exposing dozens of knobs, Foundry IQ offers a single dial — **retrieval reasoning effort** — with three levels. This is a great slide because it maps directly to a business tradeoff (thoroughness vs. speed).

| Level | LLM query planning? | Behavior (plain language) | Sources / subqueries |
| --- | --- | --- | --- |
| **Minimal** | No | Runs the query directly on sources and merges results — fastest, no LLM planning | Up to 10 sources |
| **Low** | Yes | LLM plans and selects sources; supports answer synthesis | Up to 3 sources / 3 subqueries |
| **Medium** | Yes | Adds **iterative ("reflective") search** — reviews results and searches again if needed | Up to 5 sources / 5 subqueries |

> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq) (see also [Agentic retrieval overview](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview))

> "Query planning is the process by which an LLM breaks down a complex query into smaller, more focused subqueries for broader coverage of your search corpus. It also includes the logic for selecting one knowledge source over another."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

### Relationship to Azure AI Search (important, and often asked)

Foundry IQ is **built on Azure AI Search** — that is a hard dependency and a good trust signal (mature, enterprise search platform).

> "Yes. Foundry IQ is built on Azure AI Search's agentic retrieval capabilities. You must create a knowledge base in Azure AI Search to use Foundry IQ."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

The difference between "Foundry IQ" and "agentic retrieval" (useful for precise labeling in the deck):

> "Foundry IQ consists of knowledge bases, knowledge sources, and native integrations with Azure OpenAI in Foundry Models and Foundry Agent Service… Agentic retrieval is the multi-query retrieval engine that powers Foundry IQ knowledge bases. For custom solutions, you can use agentic retrieval directly via the Azure AI Search APIs."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

### How much does it improve answer quality? (the headline numbers)

Attribute each figure carefully — they measure slightly different comparisons:

- **~36% higher response quality vs. single-shot RAG.** *"Benchmarks show that agentic retrieval achieves approximately 36% higher response quality than traditional single-shot RAG."* — [Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq). The Nov 2025 benchmark blog frames the same 36% as the average gain of *medium* vs *minimal* reasoning effort: *"an average of +20 points (36%) improvement in the quality of end-to-end RAG answer scores when using knowledge bases as opposed to brute force searching all sources at once."* — [Foundry IQ: boost response relevance by 36%](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720).
- **Up to 54% better recall vs. single-shot RAG** (latest engine). *"Compared to single-shot RAG, knowledge bases improved recall by up to 54%."* — [Foundry IQ: Build smarter agents faster (June 2, 2026)](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/).
- **Up to 20% answer-quality benchmark improvement** from the latest retrieval enhancements, *"while spending fewer tokens."* — [Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/).
- **Very high grounding / low hallucination.** *"Answers are constructed from the content response with very high grounding (low hallucination) rate…"* and, in the benchmark methodology, *"the grounding score was very high (min 80%, averaging >95% over all experiments)."* — [Foundry IQ: boost response relevance by 36%](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720).

**💡 Business value:** More accurate, better-grounded answers with fewer hallucinations, plus transparent citations that let users (and auditors) verify where an answer came from. This is the core "trustworthy AI" story for the deck.

---

## 5. Reuse Across Agents & Apps

This is one of Foundry IQ's strongest business-value stories and is well documented.

> "One Foundry IQ knowledge base provides access to multiple sources, removing the need to connect each agent to each source individually."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

> "Multiple agents can share the same knowledge base."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

The Nov 2025 blog describes registering a single knowledge base as a **"super tool"**:

> "Developers can configure and register a single knowledge base as a 'super tool' to provide agents access to many different knowledge sources. This greatly reduces agent development complexity and separates concerns between retrieving knowledge (knowledge bases) and using it (your agent)."
> — Source: [Foundry IQ: boost response relevance by 36%](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720)

The June 2026 GA blog crystallizes the message as a tagline:

> "Build once, reuse everywhere: Foundry IQ enables you to ground multiple agents with the same knowledge base, connecting and unifying data from anywhere."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

**Reuse spans platforms, not just agents.** A knowledge base built in Microsoft Foundry can be consumed by many hosts:

- **Foundry Agent Service, Microsoft Agent Framework, or any custom app** via the Azure AI Search knowledge-base APIs ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)).
- **Copilot Studio agents** can connect to an existing Foundry IQ knowledge base without rebuilding it:

  > "A Foundry IQ knowledge base bundles one or more enterprise data sources together with retrieval and relevance settings into a single, reusable asset. When you connect to a knowledge base that someone in your organization already built and tuned, your agent can answer questions over that content without you re-creating the setup in Copilot Studio."
  > — Source: [Connect to Foundry IQ from an agent (preview) — Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/foundry-iq-connect)

- **Any MCP-compatible host** (e.g., Claude, ChatGPT, LangChain, Microsoft Agent Framework) via the **Foundry IQ MCP server**:

  > "Foundry IQ MCP server: exposes Foundry IQ knowledge bases as a remote MCP server, making them accessible from any MCP-compatible host or client, including Claude, ChatGPT, LangChain, and the Microsoft Agent Framework. Network isolation, document-level security, cross-source ranking, and agentic retrieval all work over the open MCP standard, making it available for the broader agent ecosystem."
  > — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

**Governance benefit of reuse:** when the knowledge base is the shared asset, you tune it once in one place. Copilot Studio guidance even directs authors back to the source of truth:

> "If results aren't what you expect, tune the knowledge base itself in Azure AI Foundry, not in Copilot Studio. Work with the knowledge base owner to adjust sources, retrieval instructions, or ranking."
> — Source: [Connect to Foundry IQ from an agent (preview) — Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/foundry-iq-connect)

**💡 Business value:** Central knowledge = consistency and lower maintenance. Every agent that connects gets the same curated, tuned, permission-aware knowledge; improvements made once propagate everywhere; and teams stop rebuilding retrieval logic per project. A customer quote captures the effect:

> "…the reusable knowledge base approach has cut a lot of the setup overhead we'd normally expect. Being able to ground agents in trusted enterprise content from day one, without rebuilding retrieval logic each time, has made early-stage experimentation noticeably faster and higher quality." — Jane Chen, Lead AI Developer, Baringa Partners
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

---

## 6. Getting Started (Conceptual Setup)

> **Note for this deck:** No demos are planned. This section describes the *conceptual* setup so presenters can speak to "how easy it is," not to run live code. **Python examples are secondary** for this topic; complete, runnable samples live in the official repos listed in [Section 12](#12-complete-reference-list).

### Prerequisites (plain language)

- A **Microsoft Foundry** project (with the **New Foundry** experience enabled).
- An **Azure AI Search** service that supports agentic retrieval (Foundry IQ is built on it).
- Optionally, a supported **LLM deployment** (from Azure OpenAI in Foundry Models) for query planning/answer synthesis — only **gpt-4o, gpt-4.1, and gpt-5 series** are supported for query planning ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).
- Appropriate roles/permissions (managed identities with Microsoft Entra ID are recommended over API keys) ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).

### The portal workflow (what a demo *would* look like)

From the official "What is Foundry IQ?" workflow ([source](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)):

1. Sign in to **Microsoft Foundry** (ensure the **New Foundry** toggle is on) and create/select a project.
2. From the top menu, select **Build**.
3. On the **Knowledge** tab: create/connect a search service that supports agentic retrieval → create a knowledge base by **adding one knowledge source at a time** → configure retrieval behavior.
4. On the **Agents** tab: create/select an agent → **connect it to your knowledge base** → use the **playground** to test and refine.

The programmatic path mirrors this: **(1)** create knowledge sources → **(2)** create a knowledge base that references them → **(3)** connect an agent → **(4)** send messages and refine ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)).

### Terminal / CLI (verified commands from the docs)

These are the exact commands shown in the official docs (Foundry IQ is an Azure/Azure AI Search capability, so the Azure toolchain applies). Included for completeness — not required for the deck.

```powershell
# 1) Sign in to Azure (Azure CLI) and select your subscription
az login
az account set --subscription "<your-subscription-id>"

# 2) (Optional) create a resource group to hold your Foundry + Search resources
az group create --name my-foundry-rg --location eastus

# 3) Install the Foundry / Azure AI Search Python SDKs used by the Foundry IQ how-to
#    (from the "Connect a Foundry IQ knowledge base to Foundry Agent Service" article)
pip install "azure-ai-projects>=2.0.0" requests

#    Azure AI Search knowledge-base/source SDK:
#    - GA features (2026-04-01 API):     pip install azure-search-documents
#    - Preview features (2026-05-01-preview): pip install --pre azure-search-documents
```
> — Source: [Connect a Foundry IQ knowledge base to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect) and [Create a knowledge base in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-create-knowledge-base) | Provenance: verbatim (pip commands) / synthesized (`az login`/`az group create` scaffolding, standard Azure onboarding)

For a scripted hosted-agent quickstart, the docs use the **Azure Developer CLI** to scaffold from the official Foundry IQ sample ([Quickstart: Add a Foundry IQ knowledge base to a hosted agent with a toolbox](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-foundry-iq-hosted-agent)):

```powershell
# Scaffold a hosted agent from the official Foundry IQ sample (verbatim from the quickstart)
mkdir my-foundry-iq-agent
cd my-foundry-iq-agent
azd ai agent init -m "https://github.com/microsoft-foundry/foundry-samples/blob/main/samples/python/hosted-agents/agent-framework/responses/17-foundry-iq-toolbox/azure.yaml"
```
> — Source: [Quickstart: Add a Foundry IQ knowledge base to a hosted agent with a toolbox](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-foundry-iq-hosted-agent) | Provenance: verbatim

### How you call a knowledge base (conceptual, REST shape)

Once created, a knowledge base is queried via a `retrieve` call (or its MCP endpoint). In the GA `2026-04-01` REST API, the request uses `intents` (a semantic intent) plus `knowledgeSourceParams` — it does **not** use a `messages` transcript:

```http
POST {search-endpoint}/knowledgebases/{knowledge-base-name}/retrieve?api-version=2026-04-01
Content-Type: application/json

{
  "intents": [
    { "type": "semantic", "search": "What is our parental leave policy?" }
  ],
  "knowledgeSourceParams": [
    {
      "knowledgeSourceName": "hr-policy-ks",
      "kind": "searchIndex",
      "includeReferences": true,
      "includeReferenceSourceData": true,
      "rerankerThreshold": 2.5
    }
  ],
  "maxRuntimeInSeconds": 30,
  "maxOutputSizeInTokens": 6000
}
```
> — Source: [Migrate agentic retrieval code to the latest version](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate) | Provenance: adapted (endpoint, api-version, and the intents/knowledgeSourceParams body shape are verbatim from the doc's 2026-04-01 retrieve example; the query text and knowledge-source name are illustrative)

**Authentication & permissions (kept out of the body above):** authenticate to the search service with a managed identity / Microsoft Entra ID (recommended over API keys); to enforce per-user permissions at query time, pass the caller's identity in the `x-ms-query-source-authorization` header so results are filtered to what that user is allowed to see ([Connect a Foundry IQ knowledge base to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect)).

**Multi-turn note:** the GA API doesn't keep a running transcript — *"For follow-up questions, send a new retrieve request with a new semantic intent. 2026-04-01 doesn't maintain a running messages transcript."* Multi-turn `messages` transcripts — along with answer synthesis and non-minimal reasoning effort — remain in **preview** under the `2026-05-01-preview` API ([Migrate agentic retrieval code to the latest version](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate)).

> **Python examples: secondary — N/A as full runnable demos here.** The deck has no demos, and constructing a full end-to-end Python script beyond the verified snippets above risks inaccuracy. For complete, runnable Python, use the official samples: [`agentic-retrieval-pipeline-example`](https://github.com/Azure-Samples/azure-search-python-samples/tree/main/agentic-retrieval-pipeline-example) and [`Quickstart-Agentic-Retrieval`](https://github.com/Azure-Samples/azure-search-python-samples/tree/main/Quickstart-Agentic-Retrieval).

**💡 Business value:** The portal makes it a few-clicks experience, and the same knowledge base is reachable by SDK, REST, and MCP — so pilots start fast and scale to production without re-plumbing. *"The easiest way to explore Foundry IQ is through the Microsoft Foundry portal. From there you can create a knowledge base, access the documentation, and follow the Microsoft Foundry Learn courses, all in a few clicks."* ([Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)).

---

## 7. Configuration & Best Practices

### Recommended configuration (from the docs)

- **Steer source selection with descriptions and retrieval instructions.** At low/medium effort the LLM chooses sources based on the source `name`, an index `description`, and the knowledge base's `retrievalInstructions`. Example instruction: *"use the employee-handbook-index for questions about time off"* and *"use the health-insurance-index for questions about medical coverage."* ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq); [What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)).
- **Prefer extractive data over answer synthesis for agent scenarios.** *"For most Foundry IQ scenarios, use extractive data instead of answer synthesis… Reserve answer synthesis for standalone applications where the retrieval output goes directly to users without agent processing."* Note: **answer synthesis is required for web knowledge sources.** ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).
- **Pick a reasoning-effort level deliberately.** Use `minimal` for speed/simplicity; `low`/`medium` when questions are complex and span multiple sources ([What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)).
- **Use `alwaysQuery` for must-hit sources.** Set `alwaysQuery: true` on a source to include it in every query regardless of reasoning effort ([What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)).
- **Use managed identities / Microsoft Entra ID over API keys for production** ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq); [RAG and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)).

### Best practices for grounding quality (from the Foundry RAG guidance)

- **Enable citations and use clear system messages** to keep the model anchored to retrieved content ([RAG and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)).
- **Invest in content prep and chunking** — retrieval quality (and therefore answer quality) depends on how well content is organized and indexed ([RAG and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)).
- **Treat retrieved content as untrusted input** to reduce prompt-injection risk from documents/passages ([RAG and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)).

### Common pitfalls & anti-patterns

- **"Hallucination despite grounding."** Even with retrieved content, models can drift; the mitigation is citations + tight system prompts ([RAG and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)).
- **Agent returns nothing from the knowledge base.** Common causes: *"Missing tool invocation in agent instructions… Permission issues between the agent and knowledge base… Incorrect project connection configuration… Empty or misconfigured knowledge sources."* ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).
- **Assuming permissions are automatic.** Document-level access is only enforced when the source supports it *and* it's been explicitly configured for synchronization (see Section 8) ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).
- **Debugging tip:** the Azure portal chat playground *"shows query plans, subqueries, and retrieval steps for your knowledge base,"* and diagnostic logging captures request/response detail ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).

---

## 8. Security, Governance & Advanced Topics

Security is a first-class, documented differentiator — key for BDMs concerned about data governance.

### Permission-aware retrieval

> "Synchronize access control lists (ACLs) for supported sources and honor Microsoft Purview sensitivity labels. Enforce permissions at query time so agents return only authorized content. Run queries under the caller's Microsoft Entra identity for end-to-end permission enforcement."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

> "Permission enforcement varies by knowledge source. Depending on the data source, indexed knowledge sources can support document-level security through ACLs, role-based access control, or both. At query time, results are filtered based on the user's identity."
> — Source: [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

Remote SharePoint sources enforce permissions directly via the Copilot Retrieval API, with *"out-of-the-box support for ACLs and Microsoft Purview sensitivity labels"* ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)). **Important nuance:** *"Unless support for out-of-the-box user permissions is explicitly stated in the knowledge source documentation, document-level access controls aren't automatically honored."* ([Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).

### Sensitivity labels & governance (preview)

For blob, indexed OneLake, and indexed SharePoint sources, you can ingest **Microsoft Purview sensitivity labels**; once synchronized, *"labels are surfaced in retrieve responses and used to enforce document-level access at query time."* ([What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)). The June 2026 update adds more governance controls in preview:

> "Several security capabilities are now in preview, including cross-tenant customer-managed keys (CMK) using federated identity credentials — eliminating shared secrets — Purview sensitivity-label auditing, incremental SharePoint permissions sync… and surfacing Purview sensitivity labels inside knowledge sources so label-based access controls are honored end to end."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

A customer perspective on the governance value:

> "By integrating Foundry IQ, we provide a managed, permission-aware business context layer that connects marketing and brand knowledge into every agent so they can access the right information, at the right time, with the right governance." — Andrei Pop, Director of PM, Innovation, Sitecore
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

### Networking

> "Private connectivity between Foundry IQ and Foundry products, via Shared Private Link and Network Security Perimeter, is generally available."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

### Advanced ingestion (preview)

- **Layout-aware ingestion with image verbalization** (Azure Content Understanding) turns *"diagrams, charts, and scanned images into meaningful text so agents are grounded in complete, semantically accurate representations of source documents."*
- **Document-embedded image serving** injects source images into the answer-synthesis prompt so the LLM can reason over visuals.
- **Broader SharePoint indexing** (ASPX pages and Lists, not just document libraries).
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/); [What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview)

### Serverless & scale (operational)

Foundry IQ Serverless (Developer tier) is in public preview — *"no clusters to manage, no capacity to reserve"* — with elastic scaling for bursty, event-driven agent workloads ([Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)).

**💡 Business value:** Security lives "at the data layer, not approximated in application code." Agents inherit enterprise access controls and sensitivity labels automatically and answer only from what the asking user is allowed to see — a trust and compliance win that BDMs care about ([Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)).

---

## 9. Availability & Status (GA vs Preview)

**This matters for accuracy in an intro deck — some Foundry IQ features are GA, others are preview.** Availability depends on the Azure AI Search REST API version, and the portals are preview-first.

> "Some Foundry IQ features are now generally available, while others remain in preview. Availability depends on the Search Service REST API version you use. The Microsoft Foundry portal and Azure portal continue to provide preview-only access to all agentic retrieval features."
> — Source: [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)

**Generally available** (announced June 2, 2026, with the `2026-04-01` REST API):

- Foundry IQ **knowledge bases** — *"with full SLA coverage, compliance certifications, stable APIs, and enterprise-grade network isolation with identity and policy enforced by default."*
- **Knowledge sources:** Azure Blob Storage, search indexes, **Web**, and **OneLake**. (Migration guidance also lists `searchIndex`, `azureBlob`, `indexedOneLake`, and `web` as GA in `2026-04-01`.)
- **Foundry IQ MCP server**, agentic-retrieval references, output/activity logs, and **minimal** retrieval reasoning effort.
- **Security:** network isolation and managed identity support; Shared Private Link / Network Security Perimeter connectivity.
> — Sources: [Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/); [Migrate agentic retrieval code to the latest version](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate)

**Still in preview** (require the `2026-05-01-preview` REST API; also the only mode in the portals):

- **Query planning at low/medium effort, iterative ("reflective") search, answer synthesis, and multi-turn message transcripts.** *"If you rely on answer synthesis, non-minimal reasoning effort, or multi-turn messages… Those capabilities remain in preview."*
- **Newer knowledge sources:** Work IQ, Fabric IQ (Data agents + Ontology), **File Search**, **Azure SQL**, **MCP server**, indexed/remote SharePoint.
- **Advanced security/data-pipeline features:** cross-tenant CMK, sensitivity-label auditing, incremental SharePoint permission sync, layout-aware ingestion/image serving.
- **Foundry IQ Serverless (Developer tier).**
> — Sources: [Migrate agentic retrieval code to the latest version](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate); [What is a knowledge source?](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview); [Foundry IQ: Build smarter agents faster](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

**Regional availability:** *"Agentic retrieval is available in select regions"* — Foundry IQ inherits the regional availability of its underlying services (Azure AI Search and, if used, Azure OpenAI in Foundry Models) ([Agentic retrieval overview](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview); [Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)).

---

## 10. Business-Value Summary (for the deck)

One tight "so what" per capability — Microsoft's own framing, plain language:

| Capability | Business value (say this) | Backing source |
| --- | --- | --- |
| **Grounding in your data** | Answers are based on *your* content, not the model's guess — accurate and current. | [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) |
| **Agentic retrieval quality** | ~**36% higher response quality** vs single-shot RAG; up to **54% better recall** in the latest engine. | [FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq); [June 2026 blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/) |
| **Fewer hallucinations, with citations** | "Very high grounding (low hallucination) rate"; every answer is traceable to a source. | [Nov 2025 blog](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720) |
| **Connect enterprise knowledge easily** | One knowledge base unifies many sources — "no custom integrations required." | [June 2026 blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/) |
| **Reuse across agents/apps** | "Build once, reuse everywhere" — one KB grounds many agents, across MCP-compatible hosts. | [June 2026 blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/); [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) |
| **Less complexity, faster delivery** | Separates "retrieving knowledge" from "using it," cutting agent dev complexity/setup overhead. | [Nov 2025 blog](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720) |
| **Trustworthy, secure by default** | Permission-aware retrieval honors ACLs, Entra identity, and Purview sensitivity labels. | [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq); [FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq) |
| **Production-ready** | Knowledge bases are **GA** with SLA coverage, compliance certifications, and stable APIs. | [June 2026 blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/) |

The three-sentence closer for the deck:

> "Build once, reuse everywhere: Foundry IQ enables you to ground multiple agents with the same knowledge base, connecting and unifying data from anywhere. Foundry IQ is designed for agent workloads to deliver better results from your company's IQ. With Foundry IQ, accelerate agent delivery, deliver context without blind spots, and ensure every answer respects your organization's security by default."
> — Source: [Foundry IQ: Build smarter agents faster — Microsoft Foundry Blog](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/)

---

## 11. Research Limitations

- **"Ignite 2025" launch framing not explicitly confirmed.** The topic brief suggested an Ignite 2025 announcement. I found strong, dated Foundry IQ-branded coverage from **November 18, 2025** (which coincides with the Microsoft Ignite 2025 timeframe), but none of the sources I verified use the word "Ignite." The **general-availability** announcement I confirmed is explicitly tied to **Microsoft Build 2026** (June 2, 2026 blog). I therefore describe the timeline by documented dates rather than asserting the specific launch event by name. A dedicated Ignite 2025 keynote/Book-of-News source may exist but was not located within official channels during this research.
- **Rapidly evolving GA/preview status.** Foundry IQ is changing quickly; the GA-vs-preview split (Section 9) is accurate as of the June 2, 2026 blog and the current Azure AI Search API-version docs, but specific features may graduate from preview after this report's date (2026-07-13). The docs themselves warn availability "depends on the Search Service REST API version you use."
- **Code depth limited by design.** Because the deck has no demos and accuracy was prioritized, I verified and included only the terminal/SDK commands and REST endpoint shapes that appear verbatim in the docs. I did **not** fabricate a full end-to-end Python program; complete runnable code is referenced from official sample repos instead.
- **GitHub inspection constrained.** The `gh` CLI was blocked by SAML enforcement, so I could not browse repo contents directly. The sample-repo URLs cited are those referenced *within* the official Microsoft Learn docs, and I verified each returns HTTP 200 (public/reachable). Their internal contents were not independently reviewed.
- **Work IQ page nuance.** The Work IQ overview link resolved to a page titled "Microsoft Work IQ CLI." Work IQ appears here only as ecosystem context; the Foundry IQ-specific claims do not depend on Work IQ internals.
- **Minor cross-page framing difference (noted, not blocking).** The Foundry IQ concept page says "three IQ workloads," while the Microsoft IQ hub and Fabric IQ overview describe **four** (adding Web IQ). These reconcile because Web IQ is also surfaced inside Foundry IQ as the "web" knowledge source; I favored the fuller four-capability view from the Microsoft IQ hub and flagged the difference.

---

## 12. Complete Reference List

### Microsoft Learn Documentation
- [What is Foundry IQ? — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) — The definitive concept page: definition, capabilities, components, workflow, IQ-family relationship.
- [Foundry IQ FAQ — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq) — Q&A on knowledge bases/sources, agentic retrieval, reasoning effort, permissions, and the 36% benchmark.
- [Connect a Foundry IQ knowledge base to Foundry Agent Service — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect) — How-to for connecting agents via MCP; describes the query orchestration and security/roles.
- [Quickstart: Add a Foundry IQ knowledge base to a hosted agent with a toolbox — Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-foundry-iq-hosted-agent) — End-to-end quickstart using `azd` and the official Foundry IQ sample.
- [Retrieval augmented generation (RAG) and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation) — RAG basics, agentic RAG advantages, grounding, security considerations.
- [Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview) — The engine behind Foundry IQ: architecture, components, workflow, reasoning effort.
- [What is a knowledge source? — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview) — Full list of supported knowledge sources; indexed vs remote; unified ranking; sensitivity labels.
- [Create a knowledge base in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-create-knowledge-base) — Knowledge base object model, prerequisites, SDK support matrix, supported models.
- [Migrate agentic retrieval code to the latest version — Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate) — Authoritative GA-vs-preview breakdown (`2026-04-01` GA vs `2026-05-01-preview`); REST endpoint shapes.
- [Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/) — The Microsoft IQ family hub (Work IQ, Fabric IQ, Foundry IQ, Web IQ) and Foundry IQ's role.
- [What is Fabric IQ? — Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/iq/overview) — Ecosystem context; lists the four IQ capabilities and how they complement each other.
- [Microsoft Work IQ CLI (Work IQ overview)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/workiq-overview) — Ecosystem context for Work IQ (Microsoft 365 collaboration signals).
- [Connect to Foundry IQ from an agent (preview) — Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/foundry-iq-connect) — Cross-platform reuse: connecting a Copilot Studio agent to an existing Foundry IQ knowledge base.

### Official Microsoft Blogs
- [Foundry IQ: Build smarter agents faster with unified knowledge and serverless retrieval — Microsoft Foundry Blog (Pablo Castro, June 2, 2026)](https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/) — **Primary GA announcement** (tied to Microsoft Build 2026): GA scope, new preview sources, Web IQ, MCP server, security, "build once, reuse everywhere," customer quotes. *(Resolved from https://aka.ms/FoundryIQ and https://aka.ms/FoundryIQNew.)*
- [Foundry IQ: boost response relevance by 36% with agentic retrieval — Azure AI Foundry Blog (Alec Berntson et al., Nov 18, 2025)](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720) — Earliest Foundry IQ-branded post found; "super tool" framing, 36% benchmark, low-hallucination grounding, pipeline steps.
- [Up to 40% better relevance for complex queries with new agentic retrieval engine — Azure AI Foundry Blog (May 19, 2025)](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/up-to-40-better-relevance-for-complex-queries-with-new-agentic-retrieval-engine/4413832) — Original introduction of the agentic retrieval engine (query planning, results merging, RAG-triad metrics).

### GitHub Repositories (referenced in the docs; verified reachable/public)
- [Azure-Samples/azure-search-python-samples](https://github.com/Azure-Samples/azure-search-python-samples) — Python sample collection for Azure AI Search, including the agentic-retrieval examples that power Foundry IQ knowledge bases.
- [Azure-Samples/azure-search-openai-demo](https://github.com/Azure-Samples/azure-search-openai-demo) — Python/full-stack RAG demo, updated to use agentic retrieval.
- [microsoft-foundry/foundry-samples](https://github.com/microsoft-foundry/foundry-samples) — Official Microsoft Foundry samples repository (hosted agents and toolbox samples).

### Code Samples (specific samples referenced in the docs; verified reachable/public)
- [`agentic-retrieval-pipeline-example`](https://github.com/Azure-Samples/azure-search-python-samples/tree/main/agentic-retrieval-pipeline-example) — Python: end-to-end Azure AI Search + Foundry Agent Service knowledge retrieval.
- [`Quickstart-Agentic-Retrieval`](https://github.com/Azure-Samples/azure-search-python-samples/tree/main/Quickstart-Agentic-Retrieval) — Python: agentic-retrieval quickstart.
- [`17-foundry-iq-toolbox` hosted-agent sample (`azure.yaml`)](https://github.com/microsoft-foundry/foundry-samples/blob/main/samples/python/hosted-agents/agent-framework/responses/17-foundry-iq-toolbox/azure.yaml) — The `azure.yaml` application definition consumed by the `azd ai agent init -m <url>` command in the Foundry IQ hosted-agent quickstart (see Section 6). Listed here as an independent reference because it is the raw sample URL that CLI command points to.
