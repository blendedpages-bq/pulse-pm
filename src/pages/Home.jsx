export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section" style={{ paddingTop: '100px' }}>
        <div className="container">
          <p className="section-label">
            Mortgage Servicing · AI Systems · Built in Public
          </p>
          <h1 className="section-title" style={{ maxWidth: '750px' }}>
            A Compliance-Aware AI Framework for Mortgage Servicing Operations.
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'var(--silver)',
            maxWidth: '600px',
            margin: '20px 0 36px',
            fontWeight: 300,
            lineHeight: 1.7
          }}>
            Jarret Hayes is a mortgage servicing systems professional with 20
            years of operational and technical experience across the full
            servicing lifecycle. Currently designing and building a
            compliance-aware RAG framework for regulated mortgage servicing
            workflows — documented publicly, one week at a time.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/build" className="btn-primary">Follow the Build</a>
            
              href="https://www.linkedin.com/in/jarret-hayes-product-owner/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* STAT CARDS */}
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-label">Progress</div>
              <div className="stat-value">Week 3 of 13</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Indexed</div>
              <div className="stat-value">2,393 FHA chunks</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Started</div>
              <div className="stat-value">Apr 17, 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I AM BUILDING */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">What I am Building</h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--silver)',
            maxWidth: '700px',
            lineHeight: 1.8,
            marginBottom: '16px'
          }}>
            A compliance-aware retrieval-augmented generation framework designed
            for regulated mortgage servicing operations. The framework retrieves
            policy guidance from indexed source documents, generates cited
            answers traceable to source, and flags edge cases for mandatory
            human review — with auditability and compliance constraints as first
            principles, not afterthoughts.
          </p>
          <p style={{
            fontSize: '15px',
            color: 'var(--silver)',
            maxWidth: '700px',
            lineHeight: 1.8
          }}>
            Current proof of concept: FHA loss mitigation policy retrieval and
            decision support. Designed to extend across customer service
            operations, regulatory change management, claims analysis, investor
            reporting, and additional servicing workflow domains.
          </p>
        </div>
      </section>

      {/* EXTENSION ROADMAP */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <h2 className="section-title">Extension Roadmap</h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--silver)',
            marginBottom: '24px'
          }}>
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
          <p style={{
            fontSize: '11px',
            color: 'var(--silver)',
            opacity: 0.5,
            marginTop: '16px',
            fontStyle: 'italic'
          }}>
            Extension domains are sequenced after the core framework is
            validated. No timelines are committed until the proof of concept
            is complete.
          </p>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why This Matters</h2>
          <div className="card-grid">
            <div className="card">
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>Domain Depth</h3>
              <p style={{ fontSize: '13px', color: 'var(--silver)', lineHeight: 1.7 }}>
                Mortgage servicing AI built by someone who configured MSP,
                designed the workflows, governed the backlogs, and operated
                inside the compliance constraints. Domain expertise is not the
                context for this work — it is the foundation of it.
              </p>
            </div>
            <div className="card">
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>Compliance First</h3>
              <p style={{ fontSize: '13px', color: 'var(--silver)', lineHeight: 1.7 }}>
                Every layer of the framework is designed with auditability,
                source traceability, and human review as non-negotiable
                requirements. In regulated environments, AI systems that cannot
                explain their outputs cannot be trusted or deployed.
              </p>
            </div>
            <div className="card">
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>Built in Public</h3>
              <p style={{ fontSize: '13px', color: 'var(--silver)', lineHeight: 1.7 }}>
                Every week of the build is documented — decisions made, outputs
                produced, problems encountered, and lessons applied. The process
                is as important as the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW THE BUILD */}
      <section className="section" style={{
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '80px'
      }}>
        <div className="container">
          <h2 className="section-title">Follow the Build</h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--silver)',
            maxWidth: '480px',
            margin: '0 auto 32px',
            fontWeight: 300
          }}>
            The full
