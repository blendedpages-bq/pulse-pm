const weeks = [
  { num: 1, status: 'complete', title: 'Use case definition and scope', desc: 'Defined the operational problem, inputs, outputs, risks, and MVP boundaries before writing a single line of code. Established the decision framework: what the system must retrieve, what it must generate, what it must refuse, and where human review is mandatory.', outputs: ['System definition document', 'Input and output specification', 'Risk register', 'MVP boundary document'] },
  { num: 2, status: 'complete', title: 'PDF extraction and retrieval pipeline', desc: 'Extracted and chunked FHA Handbook and Mortgagee Letters using PyMuPDF. Built TF-IDF retrieval returning top-5 ranked policy matches with document source, page number, section ID, and relevance score. Reduced unknown chunks from 83 to 52 after skip logic refinement.', outputs: ['2,393 FHA chunks indexed', 'Python retrieval pipeline', 'Chunk registry', 'Retrieval evaluation CSV'] },
  { num: 3, status: 'complete', title: 'Prompt design and answer generation', desc: 'Built compliance-safe prompt templates for the Claude API with citation enforcement and insufficient-info fallback behavior. Wired retrieval pipeline into generate.py and output_wrapper.py returning schema-compliant JSON. Ran 3 test scenarios — 11/11 citations verified, zero hallucinations across all test cases. Resolved model string deprecation and field name mismatch between retrieval and generation layers. Key finding: broad question terminology significantly outperforms narrow queries on retrieval scores.', outputs: ['prompts/rag_answer_v1.txt', 'generate.py', 'output_wrapper.py', '11/11 citations verified', 'Zero hallucinations — 3 test scenarios', 'DECISIONS.md — 4 architecture decisions', 'ExperimentLog — 5 entries logged'] },
  { num: 4, status: 'complete', title: 'Simple UI and output refinement', desc: 'Built a demo-ready Streamlit interface allowing non-technical users to submit FHA policy questions and receive clean, cited answers through a browser UI. Refactored output_wrapper.py with inline citation stripping, section ID cleaning, and reason extraction. Expanded corpus from 2 to 5 documents. Ran 3 demo scenarios — 1 full pass with citations, 2 insufficient-info returns correctly triggered. Q2 and Q3 gaps logged as retrieval investigation targets. Terminology mismatch suspected on loan modification queries — FHA uses Standalone Loan Modification terminology.', outputs: ['Streamlit UI — local development build', 'rag_answer_v2.txt prompt template', 'output_wrapper.py refactored', 'app.py — browser UI', '2,676 FHA chunks across 5 documents', 'PROMPT_VERSION single-point version control', 'Timestamped experiment files', 'ExperimentLog — 5 entries logged'] },
  { num: 5, status: 'complete', title: 'Scenario classification and prompt routing', desc: 'Built rules-based classification across four axes — hardship type, payment capacity, case status, and exceptions — wired directly into the generation pipeline. Deployed query_normalizer.py to resolve FHA terminology mismatches. Restructured output schema: path/answer/reason split into three distinct fields, each serving a single purpose. Light prompt routing live — forbearance cases route to a dedicated template. Zero hallucinations across all three demo scenarios.', outputs: ['query_normalizer.py — FHA terminology mapping', 'classify.py — 4-axis rules-based classifier', 'classification_rules.json', 'route_prompt() — light prompt routing', 'rag_answer_v3.txt — partial coverage handling', 'rag_answer_forbearance_v1.txt', 'output_wrapper.py — path/answer/reason schema', 'top_k=5 permanent default', 'ExperimentLog — 6 entries logged', 'DECISIONS.md — Decisions 5, 6, 7 recorded'] },
  { num: 6, status: 'complete', title: 'Hybrid retrieval and reranking', desc: 'Upgraded the retrieval layer from TF-IDF standalone to a hybrid retrieval pipeline combining two complementary ranking methods with Reciprocal Rank Fusion reranking. Each returned chunk carries individual scores from both methods plus a combined ranking score — preserving full auditability on every retrieval decision. Resolved two regression bugs: a terminology normalization ordering rule and a fallback trigger that was suppressing substantive partial answers. Full eval pass confirmed 0 hallucinations across all three scenarios.', outputs: ['retrieve_bm25.py — BM25 standalone retriever', 'retrieve_hybrid.py — fusion reranking pipeline', 'Hybrid retriever wired into generate.py', 'Per-chunk audit scores — dual method + combined', 'TERM_MAP ordering rule — permanent maintenance rule', 'Fallback trigger tightened — exact phrase match', 'ExperimentLog — 3 entries logged', 'DECISIONS.md — Decisions 8, 9, 10 recorded', '0 hallucinations across all 3 scenarios'] },
  { num: 7, status: 'complete', title: 'Evaluation framework and corpus expansion', desc: 'Built a structured 5-dimension evaluation rubric and scored the current system against it across 3 canonical scenarios. Expanded corpus from 5 to 8 documents (~2,867 chunks) by fully piping 3 new sources through the extract→clean→chunk→registry pipeline. Fixed 2 chunking bugs and surfaced a retrieval architecture gap — precedence-blind ranking allowing lower-priority sources to displace the Handbook. Engagement Gateway Enforcement scored 0.0 across all 3 scenarios — 100% failure rate confirming wiring priority. Git version control initialized.', outputs: ['fha_eval_w9_corpus_v1.xlsx — rubric, scores, scenario reference', 'corpus_v1 — 8 documents, ~2,867 chunks', 'build_chunk_registry.py', 'document_catalog.csv + source_priority.csv rebuilt', 'S1-S3 scored — all auto-blocked on engagement gate', 'DECISIONS.md — Decisions 11-20 recorded'] },
  { num: 8, status: 'complete', title: 'Engagement gate and constraint flagging', desc: 'Wired the engagement validation gate as Step -1 in the pipeline — fail-closed, before classification runs — and the constraint flagging layer as Step 3.5, post-generation. Engagement gate enforces the system\'s own critical design rule: no path recommendation without verified borrower engagement evidence. Constraint flagging deployed two architecturally differentiated checks: a content-evaluating dual-tracking prohibition and a deterministic buyout threshold field check. Output wrapper fixed twice — fields were hardcoded empty and gate-failed cases were being labeled as success. S1-S4 re-scored: Engagement Gateway Enforcement moved from 0.0 to 1.0 across all three evaluation scenarios. All auto-blocks cleared.', outputs: ['engagement_validator.py — fail-closed gate, Step -1', 'borrower_engagement_rules.json v1.0 — ENG-001 through ENG-003', 'constraint_flagger.py — Step 3.5 post-generation', 'constraint_flagging_rules.json v1.0 — CFPB-001 and GNMA-001', 'output_wrapper.py — explicit status branching', 's1_s4_w11_rescore.json — canonical verified scenarios', 'ExperimentLog — 5 entries logged', 'DECISIONS.md — Decisions 21, 22, 23 recorded', 'Engagement Gateway Enforcement 0.0 → 1.0'] },
  { num: 9, status: 'active', title: 'Retrieval precedence and audit logging', desc: 'Implementing retrieval precedence-awareness so higher-priority sources cannot be displaced by lower-priority chunks without a score threshold — closing the gap confirmed in Decision 19. Regression-testing the precedence fix against all four canonical scenarios in s1_s4_w11_rescore.json. Building immutable audit logging before output delivery — a non-negotiable gate in the original Phase 3 design. Decision 24 defines what immutable means concretely before code is written.', outputs: ['retrieve_hybrid.py — precedence-aware reranking', 'audit_logger.py — immutable pre-output log', 'Decision 24 — immutable audit log definition', 'S1-S4 regression pass — precedence fix verified'], wip: true }
]

export default function Build() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <p className="section-label">Built in Public</p>
          <h1 className="section-title">The Build</h1>
          <p className="section-sub">
            FHA Loss Mitigation AI Framework — built in public, one iteration at a time.
            Every decision documented. Every output named.
          </p>
          <p className="build-value-statement">
            Built to demonstrate what a compliance-aware AI system looks like when it's 
            designed by someone who has spent 20 years operating inside the system it's 
            meant to serve.
          </p>
          <div className="timeline">
            {weeks.map(w => (
              <div key={w.num} className={"week-card " + w.status}>
                <div className="week-header">
                  <span className="week-num">I{String(w.num).padStart(2,'0')}</span>
                  <span className={"badge badge-" + w.status}>
                    {w.status === 'complete' ? 'Complete' : w.status === 'active' ? 'Active' : 'Planned'}
                  </span>
                  <span className="week-title">{w.title}</span>
                </div>
                {(w.desc || w.outputs) && (
                  <div className="week-body">
                    {w.desc && <p className="week-desc">{w.desc}</p>}
                    {w.outputs && (
                      <div className="output-row">
                        {w.outputs.map((o, i) => (
                          <span key={i} className={"output-tag" + (w.wip ? ' wip' : '')}>{o}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <h2 className="section-title">Extension Roadmap</h2>
          <p style={{ fontSize: '14px', color: 'var(--silver)', marginBottom: '24px' }}>
            The FHA loss mitigation pipeline is the first proof of concept.
            The framework is designed to extend across the following servicing
            domains as each module is validated.
          </p>
          <ul className="two-col-list">
            <li>Regulatory change management and Mortgagee Letter analysis</li>
            <li>Escrow analysis and exception management</li>
            <li>Investor claims analysis and eligibility determination</li>
            <li>Loss draft disbursement workflow support</li>
            <li>Customer service call support and real-time policy retrieval</li>
            <li>Servicing system configuration guidance</li>
            <li>Credit and investor reporting compliance</li>
            <li>Operational performance and KPI frameworks</li>
          </ul>
          <p style={{ fontSize: '11px', color: 'var(--silver)', opacity: 0.5, marginTop: '16px', fontStyle: 'italic' }}>
            Extension domains are sequenced after the core framework is
            validated. No timelines are committed until the proof of concept
            is complete.
          </p>
        </div>
      </section>
    </main>
  )
}