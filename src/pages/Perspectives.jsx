export default function Perspectives() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <p className="section-label">Leadership. AI Systems. Regulated Environments.</p>
          <h1 className="section-title">Perspectives</h1>
          <p className="hero-sub">
            Written from inside the work rather than adjacent to it. Articles and
            frameworks on AI product leadership, compliance-aware systems design,
            and building technology teams in regulated environments.
          </p>
          <div className="perspectives-coming">
            <p className="section-label" style={{ marginBottom: '1rem' }}>
              Articles are published when the work they describe is complete, not before.
              Two are in progress.
            </p>
            <div className="perspectives-preview-grid">
              <div className="perspectives-card">
                <p className="epic-label">Drafting</p>
                <h3 className="perspectives-card-title">
                  The AI Readiness Work Nobody Counts as AI Work
                </h3>
                <p className="perspectives-card-body">
                  Fragmented ownership, unofficial automation, and unclear delivery
                  accountability are not conditions AI resolves. They are conditions
                  AI amplifies. What has to be true about a technology organization
                  before an AI system can be deployed into it responsibly.
                </p>
              </div>
              <div className="perspectives-card">
                <p className="epic-label">In progress</p>
                <h3 className="perspectives-card-title">
                  What a Compliance Gate Is Worth When Nothing Enforces It
                </h3>
                <p className="perspectives-card-body">
                  A build log entry written for product managers rather than
                  engineers. A system can state a critical design rule from the
                  first iteration and still score zero on it seven iterations later.
                  An unenforced control is not a partial control. It is a false
                  assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}