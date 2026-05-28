const weeks = [
  { num: 1, status: 'complete', dates: 'Apr 17 - Apr 23, 2026', title: 'Use case definition and scope', desc: 'Defined the operational problem, inputs, outputs, risks, and MVP boundaries before writing a single line of code. Established the decision framework: what the system must retrieve, what it must generate, what it must refuse, and where human review is mandatory.', outputs: ['System definition document', 'Input and output specification', 'Risk register', 'MVP boundary document'] },
  { num: 2, status: 'complete', dates: 'Apr 24 - Apr 30, 2026', title: 'PDF extraction and retrieval pipeline', desc: 'Extracted and chunked FHA Handbook and Mortgagee Letters using PyMuPDF. Built TF-IDF retrieval returning top-5 ranked policy matches with document source, page number, section ID, and relevance score. Reduced unknown chunks from 83 to 52 after skip logic refinement.', outputs: ['2,393 FHA chunks indexed', 'Python retrieval pipeline', 'Chunk registry', 'Retrieval evaluation CSV'] },
  { num: 3, status: 'complete', dates: 'May 1 - May 7, 2026', title: 'Prompt design and answer generation', desc: 'Built compliance-safe prompt templates for the Claude API with citation enforcement and insufficient-info fallback behavior. Wired retrieval pipeline into generate.py and output_wrapper.py returning schema-compliant JSON. Ran 3 test scenarios — 11/11 citations verified, zero hallucinations across all test cases. Resolved model string deprecation and field name mismatch between retrieval and generation layers. Key finding: broad question terminology significantly outperforms narrow queries on retrieval scores.', outputs: ['prompts/rag_answer_v1.txt', 'generate.py', 'output_wrapper.py', '11/11 citations verified', 'Zero hallucinations — 3 test scenarios', 'DECISIONS.md — 4 architecture decisions', 'ExperimentLog — 5 entries logged'] },
  { num: 4, status: 'complete', dates: 'May 8 - May 14, 2026', title: 'Simple UI and output refinement', desc: 'Built a demo-ready Streamlit interface allowing non-technical users to submit FHA policy questions and receive clean, cited answers through a browser UI. Refactored output_wrapper.py with inline citation stripping, section ID cleaning, and reason extraction. Expanded corpus from 2 to 5 documents. Ran 3 demo scenarios — 1 full pass with citations, 2 insufficient-info returns correctly triggered. Q2 and Q3 gaps logged as Week 5 retrieval investigation targets. Terminology mismatch suspected on loan modification queries — FHA uses Standalone Loan Modification terminology.', outputs: ['Streamlit UI — localhost:8501', 'rag_answer_v2.txt prompt template', 'output_wrapper.py refactored', 'app.py — browser UI', '2,676 FHA chunks across 5 documents', 'PROMPT_VERSION single-point version control', 'Timestamped experiment files', 'ExperimentLog — EXP-W4-001 through EXP-W4-005'] },
  { num: 5, status: 'complete', dates: 'May 15 - May 21, 2026', title: 'Scenario classification and prompt routing', desc: 'Built rules-based classification across four axes — hardship type, payment capacity, case status, and exceptions — wired directly into the generation pipeline. Deployed query_normalizer.py to resolve FHA terminology mismatches (loan modification → trial payment plan). Restructured output schema: path/answer/reason split into three distinct fields, each serving a single purpose. Light prompt routing live — forbearance cases route to a dedicated template. Resolved W4 carry-forward on Standalone Loan Modification retrieval. Zero hallucinations across all three demo scenarios. S3 bankruptcy + forbearance exit intersection confirmed corpus gap — logged for Phase 2 source expansion.', outputs: ['query_normalizer.py — FHA terminology mapping', 'classify.py — 4-axis rules-based classifier', 'classification_rules.json', 'route_prompt() — light prompt routing', 'rag_answer_v3.txt — partial coverage handling', 'rag_answer_forbearance_v1.txt', 'output_wrapper.py — path/answer/reason schema', 'top_k=5 permanent default', 'EXP-W5-001 through EXP-W5-006 logged', 'DECISIONS.md — Decisions 5, 6, 7 recorded'] },
  { num: 6, status: 'complete', dates: 'May 22 - May 28, 2026', title: 'Hybrid retrieval and reranking', desc: 'Upgraded the retrieval layer from TF-IDF standalone to a hybrid retrieval pipeline combining two complementary ranking methods with Reciprocal Rank Fusion reranking. Each returned chunk carries individual scores from both methods plus a combined ranking score — preserving full auditability on every retrieval decision. Resolved two regression bugs introduced during hybrid wiring: a terminology normalization ordering rule (specific phrases must precede general phrases — now a permanent maintenance rule) and a fallback trigger that was too broad, suppressing substantive partial answers. Full eval pass confirmed 0 hallucinations across all three scenarios. S3 answer depth increased. S1 citations now populating. S2 corpus gap correctly identified and named — bankruptcy and forbearance exit intersection logged as Phase 2 source expansion target.', outputs: ['retrieve_bm25.py — BM25 standalone retriever', 'retrieve_hybrid.py — fusion reranking pipeline', 'Hybrid retriever wired into generate.py', 'Per-chunk audit scores — dual method + combined', 'TERM_MAP ordering rule — permanent maintenance rule', 'Fallback trigger tightened — exact phrase match', 'EXP-W6-001 through EXP-W6-003 logged', 'DECISIONS.md — Decisions 8, 9, 10 recorded', '0 hallucinations across all 3 scenarios'] },
  { num: 7, status: 'active', dates: 'May 29 - Jun 4, 2026', title: 'Scheduled break — build resumes Jun 5', desc: 'Planned time away from active development. No deliverables scheduled this week.'},
  { num: 8, status: 'planned', dates: 'Jun 5 - Jun 11, 2026', title: 'Evaluation metrics and hallucination scoring' },
  { num: 9, status: 'planned', dates: 'Jun 12 - Jun 18, 2026', title: 'Structured outputs and audit logging' },
  { num: 10, status: 'planned', dates: 'Jun 19 - Jun 25, 2026', title: 'Compliance validation and guardrails' },
  { num: 11, status: 'planned', dates: 'Jun 26 - Jul 2, 2026', title: 'Human-in-the-loop and escalation logic' },
  { num: 12, status: 'planned', dates: 'Jul 3 - Jul 9, 2026', title: 'Scheduled break — build resumes Jul 10', desc: 'Planned time away from active development. No deliverables scheduled this week.' },
  { num: 13, status: 'planned', dates: 'Jul 10 - Jul 16, 2026', title: 'Training content and job aid generation' },
  { num: 14, status: 'planned', dates: 'Jul 17 - Jul 23, 2026', title: 'Full copilot simulation and end-to-end flow' },
  { num: 15, status: 'planned', dates: 'Jul 24 - Jul 30, 2026', title: 'Refactor, package, and portfolio delivery' }
]

export default function Build() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <p className="section-label">Built in Public</p>
          <h1 className="section-title">The Build</h1>
          <p className="section-sub">
            FHA Loss Mitigation AI Framework — 15 weeks, built in public.
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
                  <span className="week-num">W{String(w.num).padStart(2,'0')}</span>
                  <span className={"badge badge-" + w.status}>
                    {w.status === 'complete' ? 'Complete' : w.status === 'active' ? 'Active' : 'Planned'}
                  </span>
                  <span className="week-title">{w.title}</span>
                  <span className="week-dates">{w.dates}</span>
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