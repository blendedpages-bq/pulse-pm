const weeks = [
  { num: 1, status: 'complete', dates: 'Apr 17 - Apr 23, 2026', title: 'Use case definition and scope', desc: 'Defined the operational problem, inputs, outputs, risks, and MVP boundaries before writing a single line of code. Established the decision framework: what the system must retrieve, what it must generate, what it must refuse, and where human review is mandatory.', outputs: ['System definition document', 'Input and output specification', 'Risk register', 'MVP boundary document'] },
  { num: 2, status: 'complete', dates: 'Apr 24 - Apr 30, 2026', title: 'PDF extraction and retrieval pipeline', desc: 'Extracted and chunked FHA Handbook and Mortgagee Letters using PyMuPDF. Built TF-IDF retrieval returning top-5 ranked policy matches with document source, page number, section ID, and relevance score. Reduced unknown chunks from 83 to 52 after skip logic refinement.', outputs: ['2,393 FHA chunks indexed', 'Python retrieval pipeline', 'Chunk registry', 'Retrieval evaluation CSV'] },
  { num: 3, status: 'complete', dates: 'May 1 - May 7, 2026', title: 'Prompt design and answer generation', desc: 'Built compliance-safe prompt templates for the Claude API with citation enforcement and insufficient-info fallback behavior. Wired retrieval pipeline into generate.py and output_wrapper.py returning schema-compliant JSON. Ran 3 test scenarios — 11/11 citations verified, zero hallucinations across all test cases. Resolved model string deprecation and field name mismatch between retrieval and generation layers. Key finding: broad question terminology significantly outperforms narrow queries on retrieval scores.', outputs: ['prompts/rag_answer_v1.txt', 'generate.py', 'output_wrapper.py', '11/11 citations verified', 'Zero hallucinations — 3 test scenarios', 'DECISIONS.md — 4 architecture decisions', 'ExperimentLog — 5 entries logged'] },
  { num: 4, status: 'active', dates: 'May 8 - May 14, 2026', title: 'Simple UI and output refinement', desc: 'Building a demo-ready interface for the RAG pipeline that non-technical reviewers can interact with directly. Focus: clean input/output presentation, citation display, confidence flagging visibility, and refusal behavior that is readable without technical context. Output refinement continues from Week 3 — restructuring the path field from raw markdown to clean JSON and validating schema compliance across additional test scenarios.', outputs: ['Demo-ready RAG interface', 'Refined JSON output schema', 'Path field restructure', 'Additional test scenarios - in progress'], wip: true },
  { num: 5, status: 'planned', dates: 'May 15 - May 21, 2026', title: 'Scenario classification and routing' },
  { num: 6, status: 'planned', dates: 'May 22 - May 28, 2026', title: 'Hybrid retrieval and reranking' },
  { num: 7, status: 'planned', dates: 'May 29 - Jun 4, 2026', title: 'Scheduled break — build resumes Jun 5', desc: 'Planned time away from active development. No deliverables scheduled this week.'},
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