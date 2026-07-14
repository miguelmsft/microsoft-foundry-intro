---
reviewer: ms-docs-research-reviewer
subject: Foundry IQ — Knowledge & Grounding
companion: ms-docs-researcher
date: 2026-07-13
verdict: APPROVED
---

## Review Round 1 — 2026-07-13

## Reference Validation
16 of 23 unique cited URLs were checked, prioritizing quantitative claims, status/timeline claims, REST/CLI syntax, and GitHub samples.

- `https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq` — reachable; contains the Foundry IQ FAQ, including the 36% response-quality claim, supported models, permission nuances, and reasoning-effort guidance.
- `https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq` — reachable; contains Foundry IQ definition, "now generally available / preview" note, multi-agent reuse, and permission-aware framing.
- `https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview` — reachable; contains knowledge-source definitions, indexed vs remote distinction, source types, unified ranking, and preview/GA note.
- `https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate` — reachable; contains the `2026-04-01` GA vs `2026-05-01-preview` migration/status details and the GA retrieve request shape.
- `https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview` — reachable; contains agentic retrieval architecture and regional availability note.
- `https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation` — reachable; contains RAG/agentic RAG definitions and grounding/security guidance.
- `https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect` — reachable; contains the `pip install "azure-ai-projects>=2.0.0" requests` command and connection workflow.
- `https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-foundry-iq-hosted-agent` — reachable; contains the `mkdir`, `cd`, and `azd ai agent init -m ...azure.yaml` commands exactly as cited.
- `https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/foundry-iq-connect` — reachable; contains Copilot Studio reuse/tuning guidance.
- `https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/` — reachable; official Microsoft Foundry Blog. The HTML metadata shows `datePublished: 2026-06-02`; the page contains GA, Build 2026, 54% recall, 20% answer-quality, MCP, serverless, security, and business-value claims.
- `https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720` — reachable; official Microsoft Tech Community / Azure AI Foundry Blog. Contains Nov. 18, 2025 date, 36% benchmark, "super tool" framing, and grounding/low-hallucination claims.
- `https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/up-to-40-better-relevance-for-complex-queries-with-new-agentic-retrieval-engine/4413832` — reachable; official Microsoft Tech Community / Azure AI Foundry Blog. Contains May 19, 2025 date and public-preview agentic retrieval introduction.
- GitHub samples all reachable: `Azure-Samples/azure-search-python-samples` agentic retrieval examples, `Azure-Samples/azure-search-openai-demo`, `microsoft-foundry/foundry-samples`, and the referenced `17-foundry-iq-toolbox/azure.yaml`.

No dead, fabricated, or unrelated links found among checked URLs.

## Claim Citation Coverage
Most substantive claims are well cited, including the quantitative metrics and timeline/GA claims.

- No material citation-coverage issue for the core Foundry IQ, knowledge-base, grounding, reuse, or security claims.
- The report correctly discloses uncertainty around the "Ignite 2025" launch label in Research Limitations and does not assert unsupported certainty.

## Quote Verification
10 representative block quotes were checked against their cited pages. Verified phrases include: "Agents need context from scattered enterprise content"; "Foundry IQ enables agents to access, process, and act on knowledge from anywhere"; "You can reference multiple knowledge sources in a single knowledge base"; the RAG definition; "Multiple agents can share the same knowledge base"; the Copilot Studio knowledge-base reuse quote; "Build once, reuse everywhere"; and "Private connectivity between Foundry IQ and Foundry products." Minor formatting differences are acceptable.

No fabricated or materially altered quotes found in the spot check.

## Source Officialness
All cited sources are official Microsoft properties: Microsoft Learn, Microsoft DevBlogs / Foundry Blog, Microsoft Tech Community / Azure AI Foundry Blog, and Microsoft-owned GitHub organizations or Microsoft-doc-referenced sample repositories.

No unofficial third-party sources found.

## Technical Accuracy
Quantitative and timeline claims were verified:

- The ~36% claim is supported by the Foundry IQ FAQ ("approximately 36% higher response quality than traditional single-shot RAG") and the Nov. 18, 2025 blog ("+20 points (36%) improvement").
- The "up to 54% better recall" and "up to 20%" latest answer-quality improvement claims are supported by the June 2, 2026 Foundry Blog.
- The Nov. 2025 low-hallucination / grounding claim is supported by the Tech Community blog, including "very high grounding (low hallucination)" and ">95%" average grounding score wording.
- The May 19, 2025 agentic-retrieval introduction and public-preview status are supported by the cited Tech Community post.
- The June 2, 2026 GA announcement, Build 2026 tie-in, and GA/preview split are supported by the Foundry Blog plus the migration doc.

Findings:

- 🟡 Important (must-fix) — **Incorrect GA REST request body in Section 6, "How you call a knowledge base."** The report labels the example as GA `2026-04-01` and shows a body with `"messages": [...]`. The official migration doc's `2026-04-01` `POST /knowledgebases/{name}/retrieve` example uses `"intents"` plus `"knowledgeSourceParams"` and explicitly notes that multi-turn messages remain preview. Why it matters: this is an inaccurate REST/API example and could mislead presenters or technical readers about the GA contract. Fix by either replacing the body with the official `2026-04-01` `intents` shape or clearly labeling a `messages` example as preview with the correct preview API/version and source.

## Source Freshness & Currency
The report is generally current as of 2026-07-13:

- GA vs preview status is tied to `2026-04-01` and `2026-05-01-preview` docs.
- The report correctly notes that portal access remains preview-only for all agentic retrieval features.
- It distinguishes GA Foundry IQ MCP server from preview MCP server knowledge-source support.

No stale/deprecated-source issue found beyond the REST body issue already listed under Technical Accuracy.

## Topic Coverage Assessment
Coverage is strong for the requested introductory deck scope: what Foundry IQ is, knowledge bases/sources, grounding/agentic retrieval on Azure AI Search, reuse across agents, permission-aware answers, citations, and business value.

Findings:

- 🟡 Important (must-fix) — **Report includes pricing/cost content despite explicit deck scope exclusion.** Locations: Section 6 quotes "For minimum costs and proof-of-concept testing..." and labels it as a source quote; Section 9 adds "Foundry IQ's billing follows its underlying services"; Section 11 includes a pricing note. A brief meta scope note is acceptable, but the Section 6 cost guidance and Section 9 billing statement go beyond a pure exclusion note. Why it matters: the user explicitly required no pricing/cost content for this deck. Remove cost/billing guidance and keep only a short "pricing intentionally excluded" meta note if needed.

- 🟡 Important (must-fix) — **Report uses "classic RAG" / classic-vs-agentic framing despite the topic-specific "no classic/legacy framing" instruction.** Locations: Executive Summary ("classic one-shot"), Section 4 heading "From classic RAG...", Section 4 "Classic RAG is three steps", and multiple "classic RAG" references. Why it matters: the deck is intended as an introductory Foundry capability walkthrough and the user specifically prohibited classic/legacy framing. Keep only necessary Microsoft-grounded comparison language such as "single-shot RAG" where tied to the cited benchmark, and avoid making "classic RAG" a section-level frame.

## Code & CLI Validation
Python examples are explicitly marked secondary/N/A for a no-demo deck, with official sample repositories provided. This is reasonable for the presentation scope.

- Azure CLI / Azure Developer CLI commands: `az login`, `az account set`, `az group create`, `pip install`, and `azd ai agent init -m ...` are syntactically plausible; the `azd ai agent init` command was verified against the quickstart.
- Code-block source attribution is present immediately after code fences and includes provenance labels.
- The REST example has the must-fix accuracy issue described under Technical Accuracy.

## Reference List Integrity
The header counts match the reference list: 13 Microsoft Learn pages, 3 official Microsoft blogs, and 4 GitHub/sample repositories.

Findings:

- 🟢 Minor (nice-to-have) — The reference list combines "GitHub Repositories & Code Samples" rather than separating "GitHub Repositories" and "Code Samples" as the standard template requests. This does not block approval if must-fix issues are resolved.
- 🟢 Minor (nice-to-have) — The inline `aka.ms` resolved links and the raw `azure.yaml` URL are not listed as independent references. This is acceptable because the resolved sources/sample repo are listed, but the report could be clearer.

## Report Structure & Completeness
All expected major sections are present: Overview, Key Concepts, Getting Started, Core Usage/Grounding, Configuration & Best Practices, Advanced/Security, Availability, Research Limitations, and Complete Reference List. Inline quotes are embedded in relevant sections rather than collected at the end. The header includes date, researcher, topic slug, and source counts.

No material structural issues beyond the minor reference-list categorization note.

## Consistency & Contradictions
The report is internally consistent on Foundry IQ naming and generally distinguishes:

- Official Foundry IQ branded capabilities: knowledge bases, knowledge sources, integrations, MCP server.
- Underlying Azure AI Search agentic retrieval engine.
- Broader Microsoft IQ/Work IQ/Fabric IQ/Web IQ ecosystem context.

No material naming overstatement found. The report appropriately avoids asserting an "Ignite 2025" launch label and explains the limitation.

## Suggested Improvements (Prioritized)
1. Replace the GA REST example with the official `2026-04-01` `intents` / `knowledgeSourceParams` retrieve request, or relabel the current message-transcript example as preview with the correct API/version.
2. Remove cost/pricing/billing statements except for one short "pricing intentionally excluded" note.
3. Rework "classic RAG" language into "single-shot RAG" only where directly supported by benchmark sources.
4. Optionally split GitHub repositories and code samples in the reference list to match the standard template.

## Readiness Verdict: NEEDS REWORK
The report is well sourced overall, and the key quantitative and timeline claims are verified. However, approval is blocked by three must-fix issues: the inaccurate GA REST request body, inclusion of pricing/cost content against scope, and use of prohibited classic/legacy framing.

🔴 NEEDS REWORK

## Review Round 2 — 2026-07-13

### Fix Verification

1. ✅ fixed — Prior 🟡 Important (must-fix): **Incorrect GA REST request body in Section 6.** Section 6 now uses `POST {search-endpoint}/knowledgebases/{knowledge-base-name}/retrieve?api-version=2026-04-01` with an `intents` array and `knowledgeSourceParams`. I verified this against the official Microsoft Learn migration article's 2026-04-01 retrieve example, which says to use `intents` instead of `messages`, use `maxOutputSizeInTokens`, and shows the same `knowledgeSourceParams` fields (`knowledgeSourceName`, `kind`, `includeReferences`, `includeReferenceSourceData`, `rerankerThreshold`). The report also correctly states that 2026-04-01 does not maintain a running `messages` transcript and that answer synthesis, non-minimal reasoning effort, and multi-turn messages remain preview under `2026-05-01-preview`.

2. ✅ fixed — Prior 🟡 Important (must-fix): **Pricing/cost/billing content included despite deck-scope exclusion.** A term scan for `pricing`, `price`, `cost`, `billing`, `bill`, `charged`, `charge`, `free`, and `scale(s) to zero` found only the allowed meta note in the presentation context line: "**No pricing/cost information is included** (per scope)." The previous cost quote, serverless billing phrase, Section 9 billing statement, and pricing reference-list note have been removed from the report body.

3. ✅ fixed — Prior 🟡 Important (must-fix): **"classic RAG" / classic-vs-agentic framing.** A term scan found zero instances of `classic` or `legacy` in the revised report. The remaining `single-shot RAG` uses are limited to the benchmark framing in the Executive Summary, Section 4 headline metrics, and Section 10 summary table, all tied to cited Microsoft benchmark sources. The only `Traditional RAG patterns` phrase is inside an inline verbatim Microsoft Learn quote in Section 4, which is acceptable.

## Reference Validation

5 of the most relevant URLs were rechecked for the Round 2 changes:

- `https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate` — reachable; contains the 2026-04-01 retrieve request guidance and example with `intents`, `knowledgeSourceParams`, `maxRuntimeInSeconds`, and `maxOutputSizeInTokens`; also states multi-turn messages remain preview.
- `https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq` — reachable; continues to support the 36% benchmark, Foundry IQ / agentic retrieval distinction, supported models, reasoning effort, and permissions claims.
- `https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation` — reachable; contains the quoted "Traditional RAG patterns..." passage used inline in Section 4.
- `https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq` — reachable; contains the GA/preview note and core Foundry IQ definition/workflow.
- `https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/` — reachable; continues to support the June 2, 2026 GA announcement, 54% recall metric, MCP/reuse claims, and security/preview-feature claims.

No dead, fabricated, or unrelated links were found in this recheck.

## Claim Citation Coverage

No material issues. The revised claims that changed in Round 2 are sourced inline, especially the GA REST shape and preview-vs-GA distinction. The pricing exclusion is presented only as a scope note, not as a technical claim.

## Quote Verification

4 changed/high-risk quotes or quote-like excerpts were checked:

- Section 6 multi-turn note matches the migration doc: "For follow-up questions, send a new retrieve request with a new semantic intent. 2026-04-01 doesn't maintain a running messages transcript."
- Section 4 "Traditional RAG patterns..." quote appears in the Microsoft Foundry RAG article.
- Section 9 preview quote ("If you rely on answer synthesis, non-minimal reasoning effort, or multi-turn messages...") is supported by the migration doc.
- Section 9 portal preview quote is supported by the Foundry IQ concept page.

No fabricated or materially altered quotes found in the recheck.

## Source Officialness

No material issues. The revised report still uses official Microsoft Learn, official Microsoft blogs, and Microsoft-owned GitHub sample repositories only.

## Technical Accuracy

No material issues. The key prior accuracy problem is resolved: the Section 6 REST example now matches the official 2026-04-01 contract. The report correctly keeps `messages` out of the GA request body and confines multi-turn `messages` support to preview wording. No new technical inaccuracy was found in the spot check.

## Source Freshness & Currency

No material issues. GA vs preview status remains tied to the current Microsoft Learn migration guidance (`2026-04-01` GA and `2026-05-01-preview`) and the June 2, 2026 Microsoft Foundry Blog announcement. The report avoids stale pricing/billing details by excluding them.

## Topic Coverage Assessment

No material issues for the requested introductory deck scope. The report now follows the "no pricing/cost" and "no classic/legacy framing" constraints while preserving the important Foundry IQ concepts, business value, grounding, reuse, security, and GA/preview status coverage.

## Code & CLI Validation

No material issues. The revised Section 6 REST block has immediate post-block source attribution and provenance (`adapted`). Azure CLI/Azure Developer CLI snippets remain plausible and sourced. Python remains appropriately treated as secondary/N/A for a no-demo deck, with official sample repositories linked.

## Reference List Integrity

No material issues. The prior reference-list categorization 🟢 Minor (nice-to-have) item was addressed: the report now separates **GitHub Repositories** from **Code Samples** and lists the raw `azure.yaml` sample URL independently. Header counts remain consistent with the reference-list categories.

## Report Structure & Completeness

No material issues. Required sections remain present, inline quotes remain embedded in context, and the presentation-scope note is clearly visible near the top.

## Consistency & Contradictions

No material issues. The revised report is internally consistent on the GA REST shape, preview capabilities, single-shot benchmark framing, and pricing exclusion.

## Suggested Improvements (Prioritized)

1. 🟢 Minor (nice-to-have) — Consider changing "send messages and refine" in Section 6's portal workflow to "test prompts / ask questions and refine" to avoid any possible confusion with the preview-only REST `messages` transcript shape. This is only wording; the adjacent REST note already makes the GA/preview distinction clear.

## Readiness Verdict: APPROVED

All prior 🟡 Important (must-fix) blockers are resolved, and no new must-fix issues were found. Any remaining item is 🟢 Minor (nice-to-have) only and is waived for approval.

✅ APPROVED
