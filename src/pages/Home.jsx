export default function Home() {
  return (
    <main>
      <section className="section hero-section">
        <div className="container">
          <p className="section-label">
            AI Systems Architecture — Built and Led in Public
          </p>
          <h1 className="section-title hero-title">
            AI Systems Design for Regulated Operations.
          </h1>
          <p className="hero-sub">
            Jarret Hayes is a mortgage servicing technology leader and AI systems
            practitioner with 20 years of operational experience across the full
            servicing lifecycle. This site documents independent research, active
            AI builds, and perspectives on leading technology in regulated
            environments — written from inside the work, not adjacent to it.
          </p>
          
          <div className="btn-row">
            <a href="/portfolio" className="btn-primary">
              View Portfolio
            </a>
            
              <a 
              
              href="https://www.linkedin.com/in/jarrethayes"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-label">Build Status</div>
              <div className="stat-value">Phase 3 Active</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Indexed</div>
              <div className="stat-value">2,867 FHA chunks</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Accuracy</div>
              <div className="stat-value">Zero hallucinations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What This Is</h2>
          <p className="body-text">
            A professional practice site for AI product systems work in regulated
            environments. The portfolio documents active and completed AI builds —
            each framed as a product epic with a problem statement, objective,
            build intent, and verified outcomes. Perspectives publishes articles
            and frameworks on AI product leadership, compliance-aware systems
            design, and developing technology teams.
          </p>
          <p className="body-text">
            The current anchor project is an FHA loss mitigation AI triage
            copilot — a compliance-aware retrieval-augmented generation system
            built independently on public source documents and personal accounts.
            Additional projects in regulated mortgage, consumer finance, and
            creative domains are in planning.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why This Matters</h2>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">Domain Depth</h3>
              <p className="card-body">
                Mortgage servicing AI built by someone who configured MSP,
                designed the workflows, governed the backlogs, and operated
                inside the compliance constraints. Domain expertise is not the
                context for this work. It is the foundation of it.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Compliance First</h3>
              <p className="card-body">
                Every layer of the framework is designed with auditability,
                source traceability, and human review as non-negotiable
                requirements. In regulated environments, AI systems that cannot
                explain their outputs cannot be trusted or deployed.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Built in Public</h3>
              <p className="card-body">
                Every iteration of the build is documented. Decisions made,
                outputs produced, problems encountered, and lessons applied.
                The process is as important as the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Active Work</h2>
          <div className="card-grid">
            <div className="card">
              <p className="epic-label">Portfolio — Active</p>
              <h3 className="card-title">FHA Loss Mitigation AI Triage Copilot</h3>
              <p className="card-body">
                A compliance-aware RAG system for FHA loss mitigation policy
                retrieval and decision support. Phase 3 governance and compliance
                validation in progress. 9 iterations complete.
              </p>
              <a href="/portfolio" className="card-link">View Build →</a>
            </div>
            <div className="card">
              <p className="epic-label">Perspectives — Coming Soon</p>
              <h3 className="card-title">AI Product Leadership in Regulated Environments</h3>
              <p className="card-body">
                Articles and frameworks on compliance-aware AI systems design,
                scoping AI proofs of concept, and developing technology teams
                that can deliver in regulated operations.
              </p>
              <a href="/perspectives" className="card-link">View Perspectives →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-center">
        <div className="container">
          <h2 className="section-title">Follow the Work</h2>
          <p className="hero-sub">
            The portfolio and perspectives are updated as each iteration closes
            and each article is published. Built in public means the gaps,
            the pivots, and the decisions are all documented — not just the wins.
          </p>
          <a href="/portfolio" className="btn-primary">View Portfolio</a>
        </div>
      </section>
    </main>
  )
}