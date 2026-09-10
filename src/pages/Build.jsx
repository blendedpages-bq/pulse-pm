const weeks = [
  { num: 1, status: 'complete', title: 'Use case definition and scope', desc: 'Defined the operational problem, inputs, outputs, risks, and MVP boundaries before any code existed. Established the decision framework: what the system must retrieve, what it must generate, what it must refuse, and where human review is mandatory.' },
  { num: 2, status: 'complete', title: 'PDF extraction and retrieval pipeline', desc: 'Extracted and chunked the FHA Handbook and Mortgagee Letters into a searchable index. Built keyword-based retrieval returning ranked policy matches carrying document source, page number, section ID, and relevance score.' },
  { num: 3, status: 'complete', title: 'Prompt design and answer generation', desc: 'Built compliance-safe prompt templates with citation enforcement and an insufficient-information fallback. Wired retrieval into generation so the system returns schema-compliant structured output rather than prose.' },
  { num: 4, status: 'complete', title: 'Simple UI and output refinement', desc: 'Added a local browser interface so non-technical users could submit policy questions and receive cited answers. Expanded the corpus from two documents to five and introduced prompt version control.' },
  { num: 5, status: 'complete', title: 'Scenario classification and prompt routing', desc: 'Added rules-based classification across hardship type, payment capacity, case status, and exceptions, wired directly into the generation pipeline. Introduced terminology normalization to close the gap between plain-language questions and FHA regulatory vocabulary.' },
  { num: 6, status: 'complete', title: 'Hybrid retrieval and reranking', desc: 'Replaced single-method retrieval with two complementary ranking methods merged by rank fusion. Every returned chunk carries scores from both methods plus the combined rank, preserving auditability on each retrieval decision.' },

  {
    num: 7,
    status: 'complete',
    title: 'Evaluation framework and corpus expansion',
    desc: 'Built a structured five-dimension evaluation rubric and scored the system against it across three canonical scenarios. Expanded the corpus from five documents to eight. The rubric immediately surfaced two problems that had been invisible without it. Engagement gateway enforcement scored zero across every scenario, confirming that the system had stated a critical design rule since the first iteration and had never enforced it. Retrieval ranking was found to be precedence-blind, meaning a lower-priority source could outrank the Handbook on keyword score alone. Supporting metadata was also found empty or malformed since the start of the project and was rebuilt.',
    outputs: [
      'Five-dimension evaluation rubric, scored across three scenarios',
      'Corpus expanded from five documents to eight',
      'Engagement gateway enforcement scored 0.0, a 100% failure rate',
      'Retrieval precedence gap identified and logged (Decision 19)',
      'Metadata found empty since project start, rebuilt (Decision 15)',
      'Decisions 11 through 20 recorded'
    ]
  },
  {
    num: 8,
    status: 'complete',
    title: 'Engagement gate and constraint flagging',
    desc: 'Wired the engagement validation gate as the first step in the pipeline, fail-closed and ahead of classification, enforcing the rule that no path recommendation is produced without verified borrower engagement evidence. Added constraint flagging after generation. The two constraint checks turned out to be architecturally different rather than parallel: one evaluates generated content against a prohibition, the other is a deterministic field comparison. That distinction was logged as a design finding rather than smoothed over. The output wrapper required two separate fixes, including one where cases blocked at the gate were being labeled as successful recommendations.',
    outputs: [
      'Engagement gate enforced fail-closed, ahead of classification',
      'Engagement gateway enforcement moved from 0.0 to 1.0',
      'Constraint checks confirmed architecturally non-symmetric (Decision 22)',
      'Defect found and fixed: gate-blocked cases labeled as successes',
      'Decisions 21, 22, and 23 recorded'
    ]
  },
  {
    num: 9,
    status: 'complete',
    title: 'Retrieval precedence and audit logging',
    desc: 'Closed the two longest-standing architectural gaps in the system. Precedence tuning took six experiments. The first fix passed a manual test at a wide retrieval window and then removed Handbook results entirely from production output at the narrower window the pipeline actually uses. Rediagnosis found that the validation diagnostic itself had been skipping terminology normalization and producing false confidence. The final coefficient holds across full regression but does not fully achieve the original reranking goal, which was logged as an open decision rather than declared closed. Audit logging was specified before it was built: a decision defining what immutable means concretely came first, then an append-only hash-chained log that fires on three terminal states before any output is delivered and fails closed if it cannot write. Coverage routing replaced a brittle single-phrase check with a structured marker, closing a defect where a case the model had described as incomplete was routed as a full recommendation.',
    outputs: [
      'Immutable audit logging: append-only, hash-chained, fail-closed',
      'Audit record written before delivery on all three terminal states',
      'Definition of immutable logged as a decision before code was written',
      'Precedence fix rediagnosed after production diverged from test results',
      'Validation diagnostic found to be producing false confidence',
      'Coverage routing replaced single-phrase fallback check',
      'Cross-program content leakage closed by explicit prompt prohibition',
      'Full regression: all gate checks pass, audit chain verified intact',
      'Decisions 24 through 28 recorded'
    ]
  },
  {
    num: 10,
    status: 'active',
    title: 'Full orchestration layer and human-in-the-loop escalation',
    desc: 'Building a single governed entrypoint that coordinates every stage of the pipeline in one place, replacing a sequence currently spread across two modules. Replacing the manual review flag, which has been hardcoded to true for the entire life of the project, with logic driven by actual pipeline state. As with immutable audit logging, the escalation rule set is being settled and logged as a decision before any code is written. Two hardening additions land at the same choke point: a check on whether the audit log captures the full lineage a regulated system needs, and a numeric-fidelity guardrail confirming that any figure the model states appears verbatim in the retrieved source text.',
    outputs: [
      'Single governed pipeline entrypoint',
      'Manual review flag driven by real pipeline state',
      'Escalation reason exposed alongside the flag',
      'Numeric-fidelity guardrail',
      'Audit lineage completeness check',
      'Escalation rule set logged as a decision'
    ],
    wip: true
  },
]



export default function Build() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <p className="section-label">Built in Public</p>
          <h1 className="section-title">The Build</h1>
          <p className="section-sub">
            FHA Loss Mitigation AI Framework. Built in public, one iteration at a
            time. Every decision documented. Every output named.
          </p>
          <p className="build-value-statement">
            Built to demonstrate what a compliance-aware AI system looks like when it
            is designed by someone who has spent 24 years operating inside the system
            it is meant to serve.
          </p>
          <div className="epic-block">
  <p className="epic-label">EPIC</p>
  <h2 className="epic-title">FHA Loss Mitigation AI Triage Copilot</h2>

  <div className="epic-section">
    <h3 className="epic-section-title">Problem Statement</h3>
    <p className="epic-body">
      FHA loss mitigation decisions are governed by a complex, frequently updated
      policy framework spanning the HUD Handbook, active Mortgagee Letters, CFPB
      regulations, and Ginnie Mae guidelines. Servicers must evaluate borrower
      eligibility, engagement evidence, hardship type, and payment capacity against
      this framework, often under time pressure, with incomplete documentation, and
      without a reliable way to verify that the guidance being applied is current and
      correctly cited. Errors create compliance exposure, claim denials, and borrower
      harm.
    </p>
  </div>

  <div className="epic-section">
    <h3 className="epic-section-title">Objective</h3>
    <p className="epic-body">
      Design and build a compliance-aware retrieval-augmented generation system that
      retrieves policy guidance from indexed source documents, generates cited answers
      traceable to source, enforces borrower engagement validation before any path
      recommendation is made, flags downstream compliance constraints, and requires
      human review before any recommendation is acted on. Auditability and compliance
      are first principles, not features added at the end.
    </p>
  </div>

  <div className="epic-section">
    <h3 className="epic-section-title">Build Intent</h3>
    <p className="epic-body">
      This system was not built to become a production deployment. It was built
      because understanding how AI systems fail in regulated environments requires
      more than reading about them. An AI product manager who has specified an
      engagement validation gate, watched it score zero against their own compliance
      rubric, and driven it to full enforcement brings something different to AI
      product decisions than one who has only managed vendors who did those things.
    </p>
  </div>

  <div className="epic-section">
    <h3 className="epic-section-title">How This Was Built</h3>
    <p className="epic-body">
      The architecture, requirements, evaluation criteria, scenario design, and every
      logged decision on this project are mine. The implementation is written with AI
      assistance, and the evaluation harness is run against it continuously.
    </p>
    <p className="epic-body">
      That harness is the actual deliverable. A regression suite, a scored rubric,
      and diagnostic tooling exist so that defects surface instead of shipping.
      Several did: a precedence fix that removed Handbook results from production
      entirely, a validation diagnostic that was skipping terminology normalization
      and producing false confidence, and an output wrapper that labeled gate-blocked
      cases as successes. A build without those checks would have demonstrated
      cleanly and carried all three.
    </p>
    <p className="epic-body">
      What is not automated is deciding what a surfaced defect means. The precedence
      coefficient took six experiments because a value that resolved one scenario was
      a curve-fit rather than a fix. That judgment, and the record of it, is the work.
    </p>
  </div>

  <div className="epic-section">
    <h3 className="epic-section-title">Evaluation Method</h3>
    <p className="epic-body">
      Scoring is manual, against a five-dimension rubric, across a fixed regression
      set of scenarios cross-referenced to public source documents. Two limitations
      are worth stating plainly. No ground-truth answer key exists yet, so results
      are a smoke test rather than a measured accuracy figure. And the system
      generating the output and the assistant scoring it are currently the same
      model, which is a known source of favorable bias.
    </p>
    <p className="epic-body">
      Both are being addressed: separating the grader from the generator, and
      building a validated ground-truth set before the system sees it. An automated
      evaluation framework was considered early and declined, because those tools
      measure against ground truth that did not exist here. That decision reopens
      when the ground truth does, not on a schedule.
    </p>
  </div>

  <div className="epic-section">
    <h3 className="epic-section-title">Current State</h3>
    <p className="epic-body">
      A working triage pipeline with hybrid retrieval, rules-based classification,
      prompt routing, a fail-closed engagement validation gate, partial constraint
      flagging, and immutable audit logging that writes before any output is
      delivered. Nine iterations complete. Phase 3 is active: a governed orchestration
      layer and real human-in-the-loop escalation logic, replacing a manual review
      flag that has been hardcoded to true since the first iteration. Two constraint
      categories remain unbuilt, the corpus needs a refresh against newer guidance,
      and the system is not deployed. Those gaps are scheduled, not hidden.
    </p>
  </div>
</div>
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
            <li>Loss draft disbursement workflow support</li>
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