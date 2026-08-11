export default function Perspectives() {
    return (
      <main>
        <section className="section" style={{ paddingTop: '80px' }}>
          <div className="container">
            <p className="section-label">Leadership — AI Systems — Regulated Environments</p>
            <h1 className="section-title">Perspectives</h1>
            <p className="hero-sub">
              Written from inside the work — not adjacent to it. Articles, frameworks,
              and observations on AI product leadership, compliance-aware systems design,
              and building technology teams in regulated environments.
            </p>
            <div className="perspectives-coming">
              <p className="section-label" style={{ marginBottom: '1rem' }}>First articles in progress</p>
              <div className="perspectives-preview-grid">
                <div className="perspectives-card">
                  <p className="epic-label">Coming Soon</p>
                  <h3 className="perspectives-card-title">
                    Why Domain Expertise Is Not Adjacent to AI Product Work — It Is the Work
                  </h3>
                  <p className="perspectives-card-body">
                    What changes when the person designing the AI system has personally
                    operated inside the system it is meant to serve.
                  </p>
                </div>
                <div className="perspectives-card">
                  <p className="epic-label">Coming Soon</p>
                  <h3 className="perspectives-card-title">
                    How to Scope an AI Proof of Concept That Does Not Embarrass You Six Months Later
                  </h3>
                  <p className="perspectives-card-body">
                    The decisions that protect a build from scope drift, hallucination risk,
                    and compliance exposure before a single line of code is written.
                  </p>
                </div>
                <div className="perspectives-card">
                  <p className="epic-label">Coming Soon</p>
                  <h3 className="perspectives-card-title">
                    What I Learned Wiring a Compliance Gate That Failed 100% of the Time
                  </h3>
                  <p className="perspectives-card-body">
                    A build log entry written for product managers — not engineers —
                    on what it means when your system's own critical design rule is unenforced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }