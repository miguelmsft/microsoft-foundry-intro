---
reviewer: ms-docs-research-reviewer
subject: Microsoft Foundry — Agent Service & Tools
companion: ms-docs-researcher
date: 2026-07-13
verdict: APPROVED
---

## Review Round 1 — 2026-07-13

## Reference Validation
15 of 20 unique cited URLs checked. Results:

1. `https://learn.microsoft.com/azure/foundry/agents/overview` — reachable; supports Foundry Agent Service definition, prompt/hosted agents, Responses API, Toolbox, distribution, and preview note for some tools.
2. `https://learn.microsoft.com/azure/foundry/what-is-foundry` — reachable from cache; supports broader Microsoft Foundry platform framing.
3. `https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note` — reachable; supports use-case agnostic framing, action tools, multi-agent guidance, best practices, and 1,400+ Logic Apps connectors.
4. `https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog` — reachable; supports tool definitions, built-in/custom tool tables, Toolbox definition, authentication, and Python web-search example.
5. `https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle` — reachable; supports lifecycle, versioning, publishing, and permission pitfalls.
6. `https://learn.microsoft.com/azure/foundry/agents/concepts/hosted-agents` — reachable; supports hosted-agent description and platform-managed deployment concerns.
7. `https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling` — reachable; supports function-calling definition.
8. `https://learn.microsoft.com/azure/foundry/agents/how-to/tools/model-context-protocol` — reachable; supports MCP definition and remote MCP server tool flow.
9. `https://learn.microsoft.com/azure/logic-apps/add-agent-tools-connector-actions` — reachable; supports Azure Logic Apps agent tools as preview and no-code connector-action integration.
10. `https://learn.microsoft.com/agent-framework/overview/agent-framework-overview` — reachable; supports Agents/Harness/Workflows and package install commands.
11. `https://learn.microsoft.com/agent-framework/user-guide/workflows/orchestrations/overview` — reachable; supports Sequential, Concurrent, Handoff, Group Chat, Magentic patterns and human-in-the-loop support.
12. `https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent` — reachable; supports A2A as preview and standardized agent-to-agent communication.
13. `https://learn.microsoft.com/azure/foundry/agents/concepts/workflow` — reachable; supports visual workflows preview and December 1, 2026 retirement notice.
14. `https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/` — reachable official Microsoft Foundry Blog; supports Agent Framework positioning and quoted “next layer of application logic”/prototype-to-production statements.
15. GitHub repositories `microsoft/agent-framework` and `Azure-Samples/get-started-with-ai-agents` — reachable through GitHub API; both are official Microsoft/Azure-Samples repositories and descriptions match the reference list.

No dead or fabricated links found in the checked set.

## Claim Citation Coverage
Overall citation density is strong. Most factual claims in the Overview, Key Concepts, Core Usage, Best Practices, and Advanced Topics sections are tied to Microsoft Learn or official Microsoft blog sources.

Findings:

- 🔴 Critical (must-fix) — Location: Sections 1 “Key Features,” 4.2 “Concrete examples of tool types,” and 8 “Preview vs. GA.” Issue: preview status for **Web search** and **memory** is not surfaced where those tools are listed. The report marks several tools as preview but lists Web search without a preview label and mentions memory as a built-in tool. The Foundry Agent Service overview states: “Some tools, including memory and web search, are in preview.” Why it matters: the user explicitly requested preview-vs-GA accuracy; omitting preview labels in a table that labels other preview tools can mislead presenters into describing preview capabilities as production-ready.

- 🟡 Important (must-fix) — Location: Sections 2–4, especially “The Responses API,” “Toolbox,” “Agent-to-Agent (A2A),” and human-in-the-loop orchestration. Issue: the report has strong aggregate business-value callouts, but not every named capability in the requested scope has a plainly worded business-value sentence. Responses API, Toolbox, A2A, and human-in-the-loop are described technically, but their value to business decision-makers is only implicit or folded into broader callouts. Why it matters: the report is feeding a capability-by-capability introductory deck where business value must be woven into each capability.

## Quote Verification
23 of 23 body blockquotes were spot-checked against fetched official sources. The quotes from the Agent Service overview, Microsoft Foundry overview, Transparency Note, hosted agents page, tool catalog, function-calling page, MCP page, Logic Apps page, Agent Framework FAQ/overview/orchestrations pages, A2A page, and Microsoft Foundry Blog were found and relevant. Quotes using ellipses preserve the intended meaning; no fabricated or materially altered quotes found.

No material issues.

## Source Officialness
All cited report sources are official Microsoft properties: Microsoft Learn, devblogs.microsoft.com/foundry, `microsoft/*` GitHub, and `Azure-Samples/*` GitHub. The report mentions third-party frameworks only as part of Microsoft’s official hosted-agent description and does not cite third-party sources directly.

No material issues.

## Technical Accuracy
Key named concepts were spot-checked against current Microsoft documentation:

- Foundry Agent Service, prompt agents, hosted agents, and Responses API are real and accurately described in the Agent Service overview.
- Toolbox is real and accurately described as a curated tool bundle exposed through a single MCP-compatible endpoint.
- Agent Framework orchestration patterns Sequential, Concurrent, Handoff, Group Chat, and Magentic are accurately listed.
- A2A is real and accurately described as a preview tool/protocol integration.
- The 1,400+ Azure Logic Apps connectors claim is supported by the Transparency Note.
- Azure CLI/azd/package commands are syntactically plausible and supported by cited docs where checked (`az login`, `azd up`, `pip install azure-ai-projects azure-identity`, `pip install agent-framework`, `.NET` package command).

Finding:

- 🔴 Critical (must-fix) — Same preview-status issue as above. The report must reconcile the official docs’ preview statement that “memory and web search” are preview with the report’s unlabeled tool lists and examples.

## Source Freshness & Currency
The report is largely current and correctly flags A2A, Logic Apps connector-backed tools, visual workflows, and several individual tools as preview. It also appropriately notes the workflow retirement date and recommends Microsoft Agent Framework for new workflows.

Finding:

- 🔴 Critical (must-fix) — Location: Sections 1, 4.2, and 8. Issue: Web search and memory preview status is omitted despite current official overview language. Why it matters: preview status affects production guidance and presenter messaging.

## Topic Coverage Assessment
The report covers the requested scope well: Agent Service, prompt vs hosted agents, Responses API, built-in and custom tools, function calling, MCP, OpenAPI, Logic Apps connectors, Toolbox, multi-agent orchestration, A2A, human-in-the-loop, and a light grounding section with clear deferral to Foundry IQ. It avoids pricing detail and avoids confusing classic/hub/new-vs-old framing except for a brief acceptable limitations note.

Findings:

- 🟡 Important (must-fix) — Location: capability subsections for Responses API, Toolbox, A2A, and human-in-the-loop. Issue: add one concise business-value statement for each so the deck can map every capability to a BDM-friendly “why it matters.” Why it matters: this is a topic-specific requirement for the final presentation.

## Code & CLI Validation
Python: one Python code block was parsed with `ast.parse` and has valid syntax. It uses current Azure Identity style (`DefaultAzureCredential`) and imports from official Azure SDK packages. The code block has an immediate post-block source/provenance line.

CLI/terminal: commands are illustrative and well-formed. `az login`, `azd up`, `pip install azure-ai-projects azure-identity`, `pip install agent-framework`, and the .NET package command are plausible and supported by the cited docs where checked.

Findings:

- 🟢 Minor (nice-to-have) — Location: Python Setup code block. Issue: the block is labeled “Provenance: verbatim,” but the report adds top-of-block comments for “Example,” “Source,” and “Provenance” that are not part of the source snippet. Why it matters: the executable code is still correct, but provenance would be cleaner as `adapted` or by removing the added comments.

## Reference List Integrity
The Complete Reference List is organized and most body citations appear in the reference list. Header counts for 17 Microsoft Learn pages, 1 official Microsoft blog, and 2 GitHub repositories match the visible reference sections.

Findings:

- 🟢 Minor (nice-to-have) — Location: Complete Reference List. Issue: `microsoft/agent-framework`, `Azure-Samples/get-started-with-ai-agents`, and `Using hosted MCP tools with agents` appear as consulted references but are not directly cited in the report body. Why it matters: orphaned consulted sources are not harmful, but direct body citations would make their relevance clearer.
- 🟢 Minor (nice-to-have) — Location: report header and reference categories. Issue: the header does not count the “Code Samples” category even though the reference list includes it, and it adds “plus multiple Microsoft Learn documentation search result sets.” Why it matters: the required source-count convention is easiest to audit when the header counts Microsoft Learn pages, GitHub repositories, and code samples explicitly.

## Report Structure & Completeness
Required sections are present: Overview, Key Concepts, Getting Started, Core Capabilities, Configuration & Best Practices, Advanced Topics, Pricing/Limits/Quotas, Research Limitations, and Complete Reference List. The Table of Contents is accurate. Quotes are embedded inline rather than collected at the end. Pricing is intentionally marked N/A, consistent with the user’s no-pricing scope.

No material issues.

## Consistency & Contradictions
The report is internally consistent on core naming: Microsoft Foundry, Foundry Agent Service, Agent Framework, MCP, A2A, prompt agents, and hosted agents. Grounding is intentionally light and does not conflict with the Foundry IQ scope.

Finding:

- 🔴 Critical (must-fix) — Location: tool lists vs. preview limitations. Issue: preview labeling is inconsistent: the report labels some preview tools inline but leaves Web search and memory unmarked while also saying only “several individual tools” are preview. Why it matters: this can create a contradiction between the report and current official docs.

## Suggested Improvements (Prioritized)
1. Mark Web search and memory as preview wherever they appear, or add a short note explaining the official-doc status nuance with a citation to the Agent Service overview/tool-support page.
2. Add one BDM-friendly value sentence for Responses API, Toolbox, A2A, and human-in-the-loop orchestration.
3. Change the Python snippet provenance to `adapted` unless the added comments are removed.
4. Either cite the two GitHub repositories and hosted-MCP page in the body or move them to a “consulted but not cited” subsection.
5. Adjust the header source counts to include code samples explicitly.

## Readiness Verdict: NEEDS REWORK
The report is strong, official-source based, and mostly technically accurate, but it has unresolved must-fix issues: preview-status labeling for Web search/memory and missing per-capability business-value statements for several requested capabilities.

🔴 NEEDS REWORK

## Review Round 2 — 2026-07-13

### Fix Verification

- 🔴 Critical (must-fix) preview labeling for **web search** and **memory** — ✅ fixed. The revised report now labels web search as preview in the Executive Summary (line 16), Key Features / Responses API (line 67), Tools bullet (line 69), Python snippet comment and provenance note (lines 209 and 243), and the built-in tool table (line 287). It labels memory as preview where it appears as a built-in tool (line 69) and adds explicit preview notes quoting Microsoft: "Some tools, including memory and web search, are in preview" (lines 75, 299, 527). I spot-checked the cited overview and limits/regions pages: the overview includes the official preview statement, and the limits/regions page states Agent Service is GA while some sub-features are public preview and includes the tool-support matrix. No contradictory "several individual tools" phrasing remains.
- Transparency Note exception for "memory and knowledge connectors" — accepted as defensible. The occurrence at line 80 summarizes Microsoft's Transparency Note key-feature category, not a list of built-in tool SKUs. Because the immediately preceding preview note at line 75 explicitly warns presenters that **memory** as a tool is preview, this remaining general capability wording is unlikely to mislead.
- 🟡 Important (must-fix) missing per-capability BDM value statements — ✅ fixed. The report now includes plain business-value sentences for Responses API (line 138), Toolbox (line 338), Agent-to-Agent / A2A (line 428), and human-in-the-loop (line 411).
- 🟢 Minor (nice-to-have) Python provenance labeling — ✅ fixed. The Python sample and post-block attribution are now labeled `adapted` (lines 211 and 243).
- 🟢 Minor (nice-to-have) orphaned GitHub / hosted-MCP references — ✅ fixed. The Azure-Samples repository is cited in the body (line 180), `microsoft/agent-framework` is cited in the body (line 383), and the hosted-MCP page is cited in the body (line 327).
- 🟢 Minor (nice-to-have) header source-count convention — ✅ fixed. The header now explicitly counts 17 Microsoft Learn pages, 1 official Microsoft blog, 2 GitHub repositories, and 3 code samples (line 6).

## Reference Validation
5 targeted URLs were re-checked for Round 2:

1. `https://learn.microsoft.com/azure/foundry/agents/overview` — reachable via local Microsoft Learn fetch helper; supports Agent Service definition, Responses API, built-in tools, service GA context, and the preview statement for memory/web search.
2. `https://learn.microsoft.com/azure/foundry/agents/concepts/limits-quotas-regions#tool-support-by-region-and-model` — reachable; supports the note that Agent Service is GA while some sub-features are preview and provides the tool-support matrix.
3. `https://learn.microsoft.com/agent-framework/user-guide/workflows/orchestrations/overview` — reachable; supports Sequential/Concurrent/Handoff/Group Chat/Magentic orchestration patterns and human-in-the-loop tool approval.
4. `https://github.com/microsoft/agent-framework` — body citation added; official Microsoft GitHub repository.
5. `https://github.com/Azure-Samples/get-started-with-ai-agents` — body citation added; official Azure-Samples repository.

No dead, fabricated, or unofficial links were introduced.

## Claim Citation Coverage
The previously sparse capability-value coverage is now adequate. Responses API, Toolbox, A2A, and human-in-the-loop each have explicit BDM-oriented value statements and nearby official citations. Preview-sensitive claims for web search and memory are now cited to the overview and tool-support page.

No material issues.

## Quote Verification
The new preview quote, "Some tools, including memory and web search, are in preview," is correctly attributed to the Foundry Agent Service overview and is consistent with the limits/regions page's GA/sub-feature preview framing. Existing cited quotes remain inline.

No material issues.

## Source Officialness
All cited sources remain official Microsoft sources: Microsoft Learn, Microsoft devblogs, `microsoft/*`, and `Azure-Samples/*`.

No material issues.

## Technical Accuracy
Round-2 spot checks support the corrected preview framing: Agent Service is GA, but memory and web search are preview sub-features/tools. A2A remains labeled preview where listed. Human-in-the-loop support is accurately described as tool approval/request-info support in Agent Framework orchestrations.

No material issues.

## Source Freshness & Currency
The revised report avoids stale "classic" or legacy framing and continues to standardize on current "Microsoft Foundry" naming while noting older blog naming only in Research Limitations. No new pricing details were introduced; the no-pricing scope remains intact.

No material issues.

## Topic Coverage Assessment
The must-fix BDM coverage gap is resolved. The report now better supports a capability-by-capability introductory deck by pairing technical descriptions with plain business value for the requested capabilities.

No material issues.

## Code & CLI Validation
The Python example still appears syntactically valid on inspection and now clearly marks web search as a preview tool. The post-block source/provenance line is present and correctly labeled `adapted`. CLI/package commands were not materially changed in a way that introduces new issues.

No material issues.

## Reference List Integrity
Header counts now include the Code Samples category. Previously orphaned references now have body citations. The reference list remains organized by Microsoft Learn Documentation, Official Microsoft Blog, GitHub Repositories, and Code Samples.

No material issues.

## Report Structure & Completeness
Required sections remain present, and quotes remain inline. The preview warning is now visible in both the Key Features section and the tool table area, which is appropriate for presenter use.

No material issues.

## Consistency & Contradictions
The prior contradiction is resolved. Web search and memory are no longer presented as unqualified GA built-in tools, and the "production-ready agents faster" wording is acceptable in context because it refers to the GA platform/runtime and enterprise controls, not to every individual preview tool.

No material issues.

## Suggested Improvements (Prioritized)
1. Optional: In presenter notes, remind speakers to check the tool-support matrix immediately before delivery because preview and regional availability can change.
2. Optional: If slides quote the Transparency Note phrase "memory and knowledge connectors," keep the adjacent speaker note that the separate built-in **memory** tool is preview.

## Readiness Verdict: APPROVED
All Round-1 must-fix findings are resolved. Remaining suggestions are optional and do not block publication.

✅ APPROVED
