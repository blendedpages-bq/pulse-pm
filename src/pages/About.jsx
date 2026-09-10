const career = [
  {
    years: '2026 – Present',
    role: 'Mortgage Servicing Technology Manager',
    company: 'Primary Residential Mortgage',
    desc: 'Leads a cross-functional technology organization spanning data engineering, business intelligence, system administration, and product management within regulated servicing operations. Consolidated separate technology functions into a single delivery team operating in sprints, with shared ownership across architecture, platform administration, and product. Accountable for delivery governance and for aligning the technology operating model to servicing operations and compliance requirements.'
  },
  {
    years: '2023 – 2026',
    role: 'Process Optimization Analyst / Product Owner',
    company: 'Primary Residential Mortgage',
    desc: 'Led data product ownership, KPI framework development, financial tracking and forecasting, and workflow architecture supporting AI readiness across regulated servicing operations. Conducted structured vendor evaluation and market analysis to assess third-party platform capabilities. Directed loss draft and property preservation modernization, building cross-functional alignment across operations, vendor management, and technology to move a long-recognized problem into delivery, increasing productivity 89% and reducing labor hours 23%. Built OKR-based portfolio governance and executive analytics infrastructure for VP-level decision support.'
  },
  {
    years: '2022 – 2023',
    role: 'Director of Default and Loss Mitigation',
    company: 'Evergreen Home Loans',
    desc: 'Led technology and operations in parallel across default servicing, directing modernization across loss mitigation, foreclosure, and claims operations and managing Agile release cycles. Reconciled investor claim expenses and identified recovery opportunities contributing to more than $2M in reimbursements. Compressed system deployment cycles from 90 days to under 30 while increasing operational throughput by 60%, by establishing structured release governance where none previously existed.'
  },
  {
    years: '2021 – 2022',
    role: 'Business Analyst / Product Owner',
    company: 'Evergreen Home Loans',
    desc: 'Designed and administered an Azure DevOps environment to centralize product governance, backlog management, and release sequencing across cross-functional delivery teams. Led end-to-end IVR system deployment, managing requirements discovery, user acceptance testing, and release validation within a regulated environment. Translated complex servicing and compliance requirements into structured user stories with ROI-aligned acceptance criteria.'
  },
  {
    years: '2019 – 2021',
    role: 'Product Owner / Business Systems Analyst',
    company: 'Primary Residential Mortgage',
    desc: 'Led enterprise platform modernization across core servicing, document management, and integrated vendor systems. Designed and governed product backlogs, sprint cycles, and release coordination across business and engineering teams. Developed escrow calculation models, standardized onboarding workflows, and conducted structured vendor evaluation and market analysis to support platform selection and implementation planning.'
  },
  {
    years: '2002 – 2019',
    role: 'Lead Default Operations Specialist',
    company: 'Utah Housing Corp',
    desc: 'Progressive leadership across collections, loss mitigation, foreclosure, post-sale claims, and property preservation. Built evaluation frameworks and decision-support tools aligned with investor and regulatory guidelines. Reduced application review cycle time by 48% through Lean process redesign while sustaining volume growth and audit compliance.'
  }

]

const domain = [
  'Core servicing system configuration',
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
  {
    group: 'Applied',
    items: [
      'Power BI and Power Query',
      'Excel — advanced financial modeling',
      'Azure DevOps — environment design and administration',
      'Claude API — RAG system design and evaluation'
    ]
  },
  {
    group: 'Academic foundation',
    items: [
      'MS in Data Analytics, WGU 2024 — Python, regression analysis, Tableau',
      'BS in Business Management, WGU 2020'
    ]
  },
  {
    group: 'Certifications',
    items: [
      'Certified Scrum Product Owner (CSPO)',
      'PMI Agile Certified Practitioner (PMI-ACP)',
      'Business Intelligence and Data Analyst (BIDA)'
    ]
  }
]

const groupLabelStyle = {
  fontSize: '12px',
  color: 'var(--silver)',
  opacity: 0.55,
  marginBottom: '8px',
  fontWeight: 400
}

export default function About() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">

          <p className="section-label">
            24 years inside mortgage servicing operations. Now designing the AI systems for them.
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
            Jarret Hayes is a mortgage servicing technology leader based in Salt
            Lake City, Utah. Twenty-four years of progressive experience spans the
            full mortgage servicing lifecycle, including core servicing system
            configuration, Azure DevOps delivery infrastructure, end-to-end
            workflow design, financial tracking and forecasting, investor and
            credit reporting, escrow operations, loss mitigation, loss drafts,
            foreclosure, claims reconciliation, vendor management and market
            analysis, and operational performance management through OKR and KPI
            frameworks. That operational and systems depth is the foundation of
            current work: an independent build of a compliance-aware AI system for
            FHA loss mitigation, designed and documented in public, iteration by
            iteration.
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
              {technical.map((g, i) => (
                <div key={i} style={{ marginBottom: i < technical.length - 1 ? '28px' : '0' }}>
                  <div style={groupLabelStyle}>{g.group}</div>
                  <ul className="cred-list">
                    {g.items.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PULL QUOTE */}
          <div className="pull-quote">
            <p>
              "Twenty-four years configuring, operating, and modernizing mortgage
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
              <a href="/portfolio" className="btn-primary">View Portfolio</a>

                <a href="https://www.linkedin.com/in/jarrethayes"
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