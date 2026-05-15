export default function Home() {
  return (
    <main>
      <section className="section hero-section">
        <div className="container">
          <p className="section-label">
            Mortgage Servicing - AI Systems - Built in Public
          </p>
          <h1 className="section-title hero-title">
            Independent Research in Compliance-Aware AI for Mortgage Servicing.
          </h1>
          <p className="hero-sub">
            Jarret Hayes is a mortgage servicing systems professional with 20
            years of operational and technical experience across the full
            servicing lifecycle. Independently researching and building a
            compliance-aware RAG framework for regulated mortgage servicing
            workflows documented publicly, one week at a time.
          </p>
          <div className="btn-row">
            <a href="/build" className="btn-primary">
              Follow the Build
            </a>
            
              <a href="https://www.linkedin.com/in/jarret-hayes-product-owner/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-label">Progress</div>
              <div className="stat-value">Week 5 of 15</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Indexed</div>
              <div className="stat-value">2,676 FHA chunks</div>
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
          <h2 className="section-title">What I Am Building</h2>
          <p className="body-text">
            A compliance-aware retrieval-augmented generation framework designed
            for regulated mortgage servicing operations. The framework retrieves
            policy guidance from indexed source documents, generates cited
            answers traceable to source, and flags edge cases for mandatory
            human review with auditability and compliance constraints as first
            principles, not afterthoughts.
          </p>
          <p className="body-text">
            Current proof of concept: FHA loss mitigation policy retrieval and
            decision support. Designed to extend across customer service
            operations, regulatory change management, claims analysis, investor
            reporting, and additional servicing workflow domains.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Extension Roadmap</h2>
          <p className="body-text">
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
          <p className="muted-note">
            Extension domains are sequenced after the core framework is
            validated. No timelines are committed until the proof of concept
            is complete.
          </p>
        </div>
      </section>
      <section className="section">
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
                Every week of the build is documented. Decisions made, outputs
                produced, problems encountered, and lessons applied. The process
                is as important as the product.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-center">
        <div className="container">
          <h2 className="section-title">Follow the Build</h2>
          <p className="hero-sub">
            The full 15-week build is documented on The Build page week by
            week, output by output. Updated as each phase is completed.
          </p>
          <a href="/build" className="btn-primary">View the Full Build</a>
        </div>
      </section>
    </main>
  )
}