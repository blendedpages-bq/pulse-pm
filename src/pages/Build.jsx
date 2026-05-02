const weeks = [
  {
    num: 1, status: 'complete', dates: 'Apr 17 – Apr 23, 2026',
    title: 'Use case definition and scope',
    desc: 'Defined the operational problem, inputs, outputs, risks, and MVP boundaries before writing a single line of code. Established the decision framework: what the system must retrieve, what it must generate, what it must refuse, and where human review is mandatory.',
    outputs: ['System definition document', 'Input and output specification', 'Risk register', 'MVP boundary document']
  },
  {
    num: 2, status: 'complete', dates: 'Apr 24 – Apr 30, 2026',
    title: 'PDF extraction and retrieval pipeline',
    desc: 'Extracted and chunked FHA Handbook and Mortgagee Letters using PyMuPDF. Built TF-IDF retrieval returning top-5 ranked policy matches with document source, page number, section ID, and relevance score. Reduced unknown chunks from 83 to 52 after skip logic refinement. Exported retrieval evaluation CSV for manual relevance scoring.',
    outputs: ['2,393 FHA chunks indexed', 'Python retrieval pipeline', 'Chunk registry', 'Retrieval evaluation CSV']
  },
  {
    num: 3, status: 'active', dates: 'May 1 – May 7, 2026',
    title: 'Prompt design and answer generation',
    desc: 'Designing compliance-safe prompts for the Claude API that return cited, source-attributed answers. Current focus: citation-first output format, confidence flagging, and defined refusal behavior for queries outside indexed source documents.',
    outputs: ['Prompt templates — in progress', 'Citation schema — in progress'],
    wip: true
  },
  {
    num: 4, status: 'planned', dates: 'May 8 – May 14, 2026',
    title: 'Simple UI and output refinement'
  },
  {
    num: 5, status: 'planned', dates: 'May 15 – May 21, 2026',
    title: 'Scenario classification and routing'
  },
  {
    num: 6, status: 'planned', dates: 'May 22 – May 28, 2026',
    title: 'Hybrid retrieval and reranking'
  },
  {
    num: 7, status: 'planned', dates: 'May 29 – Jun 4, 2026',
    title: 'Evaluation metrics and hallucination scoring'
  },
  {
    num: 8, status: 'planned', dates: 'Jun 5 – Jun 11, 2026',
    title: 'Structured outputs and audit logging'
  },
  {
    num: 9, status: 'planned', dates: 'Jun 12 – Jun 18, 2026',
    title: 'Compliance validation and guardrails'
  },
  {
    num: 10, status: 'planned', dates: 'Jun 19 – Jun 25, 2026',
    title: 'Human-in-the-loop and escalation logic'
  },
  {
    num: 11, status: 'planned', dates: 'Jun 26 – Jul 2, 2026',
    title: 'Training content and job aid generation'
  },
  {
    num: 12, status: 'planned', dates: 'Jul 3 – Jul 9, 2026',
    title: 'Full copilot simu
