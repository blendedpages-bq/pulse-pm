const career = [
  {
    years: '2002 – 2019',
    role: 'Lead Default Operations Specialist',
    company: 'Utah Housing Corp',
    desc: 'Progressive leadership across collections, loss mitigation, foreclosure, post-sale claims, and property preservation. Built evaluation frameworks and decision-support tools aligned with investor and regulatory guidelines. Reduced application review cycle time by 48% through Lean process redesign while sustaining volume growth and audit compliance.'
  },
  {
    years: '2019 – 2022',
    role: 'Product Owner / Business Systems Analyst',
    company: 'Primary Residential Mortgage',
    desc: 'Led enterprise platform modernization across core servicing, document management, and integrated vendor systems. Designed and governed product backlogs, sprint cycles, and release coordination across business and engineering teams. Developed escrow calculation models, standardized onboarding workflows, and conducted structured vendor evaluation and market analysis to support platform selection and implementation planning.'
  },
  {
    years: '2022 – 2023',
    role: 'Director of Default and Loss Mitigation',
    company: 'Evergreen Home Loans',
    desc: 'Led technology and operations in parallel across default servicing — engineering Azure DevOps delivery infrastructure, governing Agile release cycles, and directing modernization across loss mitigation, foreclosure, and claims operations. Conducted vendor vetting and market analysis to evaluate third-party platform capabilities. Compressed system deployment cycles from 90 days to under 30 while increasing operational throughput by 60%.'
  },
  {
    years: '2023 – Present',
    role: 'Process Optimization Analyst / Product Owner',
    company: 'Primary Residential Mortgage',
    desc: 'Leads data product ownership, KPI framework development, financial tracking and forecasting, and AI-assisted workflow design across regulated servicing operations. Conducts structured vendor evaluation and market analysis to assess third-party platform capabilities. Directed loss draft and property preservation modernization increasing productivity 89% and reducing labor hours 23%. Built OKR-based portfolio governance and executive analytics infrastructure for VP-level decision support. Currently designing and building a compliance-aware AI RAG framework for FHA loss mitigation.'
  }
]

const domain = [
  'MSP servicing system configuration',
  'Azure DevOps environment design',
  'End-to-end workflow architecture',
  'Financial tracking and forecasting',
  'Investor and credit reporting',
  'Escrow and loss draft operations',
  'Loss mitigation and default servicing',
  'Claims reconciliation and recovery',
  'Vendor evaluation and market analysis',
  'OKR and KPI performance frameworks',
  'Backlog governance and Agile delivery'
]

const technical = [
  'Python — data processing and pipeline design',
  'Claude API — RAG framework development',
  'PyMuPDF — PDF extraction and chunking',
  'Power BI and Power Query',
  'Excel — advanced financial modeling',
  'Tableau',
  'Azure DevOps — environment design and administration',
  'MSP — core servicing system configuration',
  'MS in Data Analytics, WGU 2024',
  'BS in Business Management, WGU 2020',
  'Certified Scrum Product Owner (CSPO)',
  'PMI Agile Certified Practitioner (PMI-ACP)',
  'Business Intelligence and Data Analyst (BIDA)'
]

export default function About() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">

          <p className="section-label">
            20 years building mortgage servicing systems. Researching the next intelligence layer.
          </p>
          <h1 className="section-title">About</h1>

          {/* SUMMARY */}
          <p style={{
            fontSize: '16px',
            color: 'var(--silver)',
            maxWidth: '760px',
            lineHeight: 1.8,
            marginBottom: '64px',
            fontWeight: 300
          }}>
            Jarret Hayes is a mortgage servicing systems professional, product
            owner, and AI systems builder based in Salt Lake City, Utah. Over
            two decades of progressive experience spans the full mortgage
            servicing lifecycle — including MSP system configuration, Azure
            DevOps delivery infrastructure, end-to-end workflow design,
            financial tracking and forecasting, investor and credit reporting,
            escrow operations, loss mitigation, loss drafts, foreclosure,
            claims reconciliation, vendor management and market analysis, and
            operational performance management through OKR and KPI frameworks.
            That depth of operational and systems experience forms the
            foundation of current work: designing and building
            compliance-aware AI systems for regulated mortgage servicing
            environments.
          </p>

          {/* CAREER */}
          <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '8px' }}>
            Career Progression
          </h2>
          <div
            className="career-timeline"
            style={{ marginBottom: '80px' }}
          >
            {career.map((e, i) => (
              <div key={i} className="career-entry">
                <div className="career-years">{e.years}</div>
                <div className="career-content">
                  <div className="career-role">{e.role}</div>
                  <div className="career-company">{e.company}</div>
                  <div className="career-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CREDENTIALS */}
          <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '8px' }}>
            Credentials
          </h2>
          <div className="cred-grid" style={{ marginBottom: '80px' }}>
            <div>
              <div className="cred-col-title">Domain</div>
              <ul className="cred-list">
                {domain.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div>
              <div className="cred-col-title">Technical and Academic</div>
              <ul className="cred-list">
                {technical.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </div>

          {/* PULL QUOTE */}
          <div className="pull-quote">
            <p>
              "Two decades configuring, operating, and modernizing mortgage
              servicing systems is not a credential adjacent to this work.
              It is the work."
            </p>
          </div>

          {/* CONNECT */}
          <div style={{
            textAlign: 'center',
            paddingBottom: '80px'
          }}>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              Connect
            </h2>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/build" className="btn-primary">Follow the Build</a>
              
                <a href="https://www.linkedin.com/in/jarret-hayes-product-owner/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
