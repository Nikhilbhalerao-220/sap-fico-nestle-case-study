import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  User, 
  ExternalLink,
  ChevronRight,
  TrendingDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CaseStudyData, UserCustomization } from '../types/caseStudy';
import heroImage from '../assets/images/case_study_hero_banner_1791035978240.jpg';

interface DocumentViewerProps {
  data: CaseStudyData;
  user: UserCustomization;
  setUser: React.Dispatch<React.SetStateAction<UserCustomization>>;
  onDownloadDoc: () => void;
  onOpenExportModal: () => void;
  onPrint: () => void;
  onNavigateToArchitecture: () => void;
  onNavigateToMethodology: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  data,
  user,
  setUser,
  onDownloadDoc,
  onOpenExportModal,
  onPrint,
  onNavigateToArchitecture,
  onNavigateToMethodology,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditingMeta, setIsEditingMeta] = useState(false);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `${data.company.name} - SAP FICO Case Study\n\nExecutive Summary:\n${data.executiveSummary}\n\nKey Outcomes:\n- Financial close reduced from 18 days to 4.5 days (-75%)\n- 88% automated intercompany reconciliation\n- €450M working capital optimized`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sections = [
    { id: 'sec-summary', label: '1. Executive Summary' },
    { id: 'sec-background', label: '2. Company Background' },
    { id: 'sec-reasons', label: '3. Reasons for SAP FICO' },
    { id: 'sec-architecture', label: '4. Solution Architecture' },
    { id: 'sec-methodology', label: '5. Implementation Process' },
    { id: 'sec-integrations', label: '6. Module Integration' },
    { id: 'sec-benefits', label: '7. Benefits Realized' },
    { id: 'sec-lessons', label: '8. Success Factors & Lessons' },
    { id: 'sec-references', label: '9. References & Conclusion' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Student Deliverable Customization Bar */}
      <div className="no-print mb-8 p-4 bg-white border border-stone-200 rounded-xl shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <span className="font-semibold text-stone-900">Task Deliverable Profile</span>
            <span aria-hidden="true">·</span>
            <span>Student: <strong className="text-stone-900">{user.studentName}</strong> ({user.studentId})</span>
            <span aria-hidden="true">·</span>
            <span>Course: <strong>{user.courseTitle}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Due/Sub: <strong>{user.submissionDate}</strong></span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsEditingMeta(!isEditingMeta)}
              className="text-xs font-medium text-stone-600 hover:text-stone-900 underline cursor-pointer"
            >
              {isEditingMeta ? 'Close Editor' : 'Edit Student Details'}
            </button>
            <button
              onClick={onDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download .DOC
            </button>
          </div>
        </div>

        {isEditingMeta && (
          <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-stone-500 mb-1">Student Name</label>
              <input
                type="text"
                value={user.studentName}
                onChange={(e) => setUser({ ...user, studentName: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-stone-300 rounded bg-stone-50 focus:bg-white focus:outline-sky-600"
              />
            </div>
            <div>
              <label className="block text-stone-500 mb-1">Student ID / Roll No</label>
              <input
                type="text"
                value={user.studentId}
                onChange={(e) => setUser({ ...user, studentId: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-stone-300 rounded bg-stone-50 focus:bg-white focus:outline-sky-600"
              />
            </div>
            <div>
              <label className="block text-stone-500 mb-1">Course Title</label>
              <input
                type="text"
                value={user.courseTitle}
                onChange={(e) => setUser({ ...user, courseTitle: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-stone-300 rounded bg-stone-50 focus:bg-white focus:outline-sky-600"
              />
            </div>
            <div>
              <label className="block text-stone-500 mb-1">Submission Date</label>
              <input
                type="text"
                value={user.submissionDate}
                onChange={(e) => setUser({ ...user, submissionDate: e.target.value })}
                className="w-full px-2.5 py-1.5 border border-stone-300 rounded bg-stone-50 focus:bg-white focus:outline-sky-600"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Document Container (White Paper Style) */}
      <article className="print-document bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden">
        
        {/* Editorial Cover & Hero Section */}
        <div className="relative border-b border-stone-200 bg-stone-900 text-white">
          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
            <img
              src={heroImage}
              alt="Siemens Corporate Headquarters Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 -mt-28 relative z-10">
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-300 mb-3">
              <span>Week 3 Task Deliverable</span>
              <span aria-hidden="true">·</span>
              <span>Enterprise Case Study</span>
              <span aria-hidden="true">·</span>
              <span>SAP FICO Real-World Implementation</span>
              <span aria-hidden="true">·</span>
              <span>Siemens AG</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-semibold tracking-tight text-white max-w-3xl text-balance leading-tight">
              SAP FICO Implementation Case Study: Siemens AG
            </h1>

            <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-2xl font-light leading-relaxed">
              Consolidating 40+ legacy accounting systems into a unified global ledger, cutting financial close duration from 18 to 4.5 days, and optimizing €450M in capital efficiency.
            </p>

            {/* Corporate Fact Grid */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-stone-400 block">Enterprise</span>
                <span className="font-semibold text-white text-sm">{data.company.name}</span>
              </div>
              <div>
                <span className="text-stone-400 block">Global Footprint</span>
                <span className="font-semibold text-white text-sm">190+ Countries</span>
              </div>
              <div>
                <span className="text-stone-400 block">Close Cycle Reduction</span>
                <span className="font-semibold text-emerald-400 text-sm font-mono-code">-75% (4.5 Days)</span>
              </div>
              <div>
                <span className="text-stone-400 block">Capital Optimization</span>
                <span className="font-semibold text-sky-400 text-sm font-mono-code">€450M Unlocked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Utility & Sticky TOC Header */}
        <div className="no-print sticky top-16 z-30 bg-stone-50 border-b border-stone-200 px-6 py-2.5 flex items-center justify-between text-xs overflow-x-auto">
          <div className="flex items-center gap-4 text-stone-600 font-medium shrink-0">
            <span className="text-stone-400 uppercase tracking-wider text-[11px]">Jump to:</span>
            {sections.slice(0, 6).map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="hover:text-stone-900 transition-colors cursor-pointer"
              >
                {sec.label.split('. ')[1]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 cursor-pointer p-1"
              title="Copy Summary"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 cursor-pointer p-1"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-16">
          
          {/* SECTION 1: EXECUTIVE SUMMARY */}
          <section id="sec-summary" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 01</span>
              <span aria-hidden="true">·</span>
              <span>Overview</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-6">
              1. Executive Summary
            </h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="first-letter:text-4xl first-letter:font-serif-title first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-stone-900">
                {data.executiveSummary}
              </p>
            </div>

            <div className="mt-6 p-4 bg-sky-50/70 border-l-4 border-sky-600 rounded-r-lg">
              <p className="text-xs sm:text-sm text-sky-950 font-medium">
                <strong>Executive Takeaway:</strong> Siemens AG achieved a unified standard by replacing fragmented, localized spreadsheets and 40+ decentralized ERPs with a single SAP FICO global core template, demonstrating how multinational enterprises can meet both local statutory governance and unified corporate steering.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 2: COMPANY BACKGROUND */}
          <section id="sec-background" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 02</span>
              <span aria-hidden="true">·</span>
              <span>Organizational Context</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-6">
              2. Company Background & Pre-Implementation Operating State
            </h2>

            <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">2.1 History & Diversified Operations</h3>
                <p>{data.backgroundAndContext.history}</p>
                <p className="mt-3">{data.backgroundAndContext.operatingModel}</p>
              </div>

              {/* Profile Table */}
              <div className="border border-stone-200 rounded-xl overflow-hidden my-6">
                <div className="bg-stone-100 px-4 py-2.5 border-b border-stone-200 font-semibold text-xs text-stone-700 uppercase tracking-wider">
                  Enterprise Profile: Siemens AG
                </div>
                <div className="divide-y divide-stone-200 text-xs sm:text-sm">
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-stone-500 font-medium">Primary Industry</span>
                    <span className="col-span-2 text-stone-900 font-semibold">{data.company.industry}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50">
                    <span className="text-stone-500 font-medium">Annual Revenue</span>
                    <span className="col-span-2 text-stone-900 font-mono-code">{data.company.revenue}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-stone-500 font-medium">Global Workforce</span>
                    <span className="col-span-2 text-stone-900">{data.company.employeeCount}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50">
                    <span className="text-stone-500 font-medium">ERP Landscape</span>
                    <span className="col-span-2 text-stone-900">{data.company.erpEnvironment}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-stone-500 font-medium">Harmonization Codename</span>
                    <span className="col-span-2 text-stone-900 font-semibold text-sky-800">{data.company.projectCodename}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">2.2 Pre-Implementation Accounting Breakdown</h3>
                <p>{data.backgroundAndContext.preImplementationState}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-3">Key Trigger Events Mandating SAP FICO Rollout</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {data.backgroundAndContext.triggerEvents.map((event, idx) => (
                    <div key={idx} className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg">
                      <span className="font-semibold text-stone-900 block mb-1">
                        0{idx + 1}. {event.split(':')[0]}
                      </span>
                      <span className="text-stone-600">
                        {event.split(':')[1] || event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 3: REASONS FOR IMPLEMENTING SAP FICO */}
          <section id="sec-reasons" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 03</span>
              <span aria-hidden="true">·</span>
              <span>Business Drivers</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-6">
              3. Strategic Reasons for Implementing SAP FICO
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mb-6 leading-relaxed">
              The legacy architecture severely constrained operational agility. Siemens identified four critical pillars where SAP Financial Accounting (FI) and Controlling (CO) provided direct resolutions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.reasonsForImplementation.map((driver, index) => (
                <div key={index} className="p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-mono-code font-semibold text-sky-700">0{index + 1}</span>
                    <span className="uppercase tracking-wider">{driver.category}</span>
                  </div>
                  <h3 className="text-base font-semibold text-stone-900 mb-2">
                    {driver.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 space-y-2">
                    <p>
                      <strong className="text-stone-800">Legacy Challenge:</strong> {driver.challenge}
                    </p>
                    <p className="text-rose-900 bg-rose-50/70 p-2 rounded">
                      <strong>Business Impact:</strong> {driver.impactOnBusiness}
                    </p>
                    <p className="text-sky-950 bg-sky-50/70 p-2 rounded">
                      <strong>SAP FICO Resolution:</strong> {driver.ficoSolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 4: SOLUTION ARCHITECTURE */}
          <section id="sec-architecture" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase">
                <span>Section 04</span>
                <span aria-hidden="true">·</span>
                <span>System Architecture</span>
              </div>
              <button
                onClick={onNavigateToArchitecture}
                className="text-xs font-medium text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Interactive Module Explorer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-4">
              4. SAP FICO Solution Architecture & Blueprint
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mb-6 leading-relaxed">
              {data.solutionArchitecture.overview}
            </p>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              
              {/* FI Modules Column */}
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-2">
                  <h3 className="text-base font-semibold text-stone-900">SAP FI (Financial Accounting)</h3>
                  <p className="text-xs text-stone-500">External statutory reporting, multi-GAAP compliance & audit trail</p>
                </div>
                {data.solutionArchitecture.fiScope.map((mod) => (
                  <div key={mod.code} className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-900 font-mono-code">{mod.code} · {mod.name}</span>
                    </div>
                    <p className="text-stone-600 mb-2">{mod.description}</p>
                    <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                      <strong>Sample T-Codes:</strong>{' '}
                      {mod.sampleTCodes.map((t) => (
                        <span key={t.code} className="font-mono-code text-sky-800 bg-white px-1.5 py-0.5 rounded border border-stone-200 mr-1.5">
                          {t.code}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CO Modules Column */}
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-2">
                  <h3 className="text-base font-semibold text-stone-900">SAP CO (Controlling)</h3>
                  <p className="text-xs text-stone-500">Internal management accounting, cost absorption & profitability</p>
                </div>
                {data.solutionArchitecture.coScope.map((mod) => (
                  <div key={mod.code} className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-900 font-mono-code">{mod.code} · {mod.name}</span>
                    </div>
                    <p className="text-stone-600 mb-2">{mod.description}</p>
                    <div className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                      <strong>Sample T-Codes:</strong>{' '}
                      {mod.sampleTCodes.map((t) => (
                        <span key={t.code} className="font-mono-code text-indigo-800 bg-white px-1.5 py-0.5 rounded border border-stone-200 mr-1.5">
                          {t.code}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Global COA & Ledger Strategy Callout */}
            <div className="p-5 bg-stone-100 rounded-xl border border-stone-200 text-xs sm:text-sm space-y-3">
              <div>
                <strong className="text-stone-900 block mb-0.5">Global Chart of Accounts (COA) Strategy:</strong>
                <p className="text-stone-600">{data.solutionArchitecture.chartOfAccountsDesign}</p>
              </div>
              <div className="pt-2 border-t border-stone-200">
                <strong className="text-stone-900 block mb-0.5">Multi-Currency & Parallel Ledgers:</strong>
                <p className="text-stone-600">{data.solutionArchitecture.currencyAndLedgerStrategy}</p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 5: IMPLEMENTATION PROCESS */}
          <section id="sec-methodology" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase">
                <span>Section 05</span>
                <span aria-hidden="true">·</span>
                <span>Execution Methodology</span>
              </div>
              <button
                onClick={onNavigateToMethodology}
                className="text-xs font-medium text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Interactive Timeline</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-4">
              5. Implementation Process & ASAP Methodology
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mb-6 leading-relaxed">
              {data.implementationProcess.overview}
            </p>

            {/* 5 ASAP Phases Accordion/Cards */}
            <div className="space-y-4 mb-8">
              {data.implementationProcess.phases.map((phase) => (
                <div key={phase.phaseNumber} className="p-5 bg-white border border-stone-200 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-semibold text-stone-900 text-base">
                      Phase {phase.phaseNumber}: {phase.phaseName}
                    </span>
                    <span className="text-xs font-mono-code text-stone-500 bg-stone-100 px-2 py-0.5 rounded w-fit">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-600 mt-3 pt-3 border-t border-stone-100">
                    <div>
                      <strong className="text-stone-800 block mb-1">Core Deliverables:</strong>
                      <ul className="list-disc pl-4 space-y-1">
                        {phase.keyDeliverables.map((del, i) => (
                          <li key={i}>{del}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-stone-800 block mb-1">Key Activities & Execution:</strong>
                      <ul className="list-disc pl-4 space-y-1">
                        {phase.activities.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-stone-500 italic bg-stone-50 p-2 rounded">
                    <strong>Governance & Risk Control:</strong> {phase.governanceAndRisks}
                  </p>
                </div>
              ))}
            </div>

            {/* Change Management & Cutover Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <strong className="text-stone-900 block mb-1">Change Management</strong>
                <p className="text-stone-600">{data.implementationProcess.changeManagementStrategy}</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <strong className="text-stone-900 block mb-1">Data Migration</strong>
                <p className="text-stone-600">{data.implementationProcess.dataMigrationApproach}</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <strong className="text-stone-900 block mb-1">Testing & Cutover</strong>
                <p className="text-stone-600">{data.implementationProcess.testingAndCutoverStrategy}</p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 6: INTEGRATION MATRIX */}
          <section id="sec-integrations" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 06</span>
              <span aria-hidden="true">·</span>
              <span>Cross-Module Integration</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-4">
              6. Cross-Module Integration Touchpoints
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mb-6 leading-relaxed">
              Unlike disparate accounting software that relies on daily batch scripts, SAP FICO achieves seamless, real-time transaction posting through integrated cross-module account determination:
            </p>

            <div className="space-y-4">
              {data.integrationMatrix.map((item, index) => (
                <div key={index} className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-stone-900 text-base">
                      {item.integrationName}
                    </h3>
                    <span className="text-xs text-stone-500 font-mono-code">{item.modules}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 mb-3">{item.flowDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-3 rounded border border-stone-200">
                    <div>
                      <span className="text-stone-500 block font-medium">Underlying Mechanism:</span>
                      <span className="text-stone-800">{item.technicalMechanism}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block font-medium">Automatic Journal Posting:</span>
                      <span className="text-sky-900 font-mono-code">{item.samplePosting}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 7: BENEFITS REALIZED */}
          <section id="sec-benefits" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 07</span>
              <span aria-hidden="true">·</span>
              <span>Quantitative Outcomes</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-4">
              7. Tangible Benefits Realized & Quantified ROI
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mb-6 leading-relaxed">
              {data.benefitsRealized.overview}
            </p>

            {/* KPI Data Table */}
            <div className="border border-stone-200 rounded-xl overflow-hidden mb-8">
              <div className="bg-stone-900 text-white px-4 py-3 font-semibold text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Enterprise Performance Scorecard: Before vs. After SAP FICO</span>
                <span className="text-stone-400 font-normal">Audit-Verified Metrics</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-stone-200">
                  <thead className="bg-stone-100 text-stone-700 font-medium">
                    <tr>
                      <th className="p-3.5">Business Metric</th>
                      <th className="p-3.5">Pre-SAP Baseline</th>
                      <th className="p-3.5">Post-SAP Result</th>
                      <th className="p-3.5">Variance</th>
                      <th className="p-3.5">Strategic Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    {data.benefitsRealized.quantifiedKPIs.map((kpi, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? 'bg-stone-50/60' : ''}>
                        <td className="p-3.5 font-semibold text-stone-900">{kpi.metric}</td>
                        <td className="p-3.5 text-stone-600 font-mono-code">{kpi.before}</td>
                        <td className="p-3.5 font-semibold text-stone-900 font-mono-code">{kpi.after}</td>
                        <td className="p-3.5 font-bold text-sky-700 font-mono-code">{kpi.percentageChange}</td>
                        <td className="p-3.5 text-xs text-stone-600">{kpi.strategicSignificance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Qualitative Strategic Benefits */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="text-base font-semibold text-stone-900 mb-3">Qualitative & Strategic Dividends</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {data.benefitsRealized.qualitativeBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 pt-4 border-t border-stone-200 text-xs sm:text-sm text-stone-600">
                <strong>Long-Term Strategic Impact:</strong> {data.benefitsRealized.longTermStrategicImpact}
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 8: CRITICAL SUCCESS FACTORS & LESSONS */}
          <section id="sec-lessons" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 08</span>
              <span aria-hidden="true">·</span>
              <span>Managerial Takeaways</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-6">
              8. Critical Success Factors & Lessons Learned
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-stone-200 rounded-xl">
                <h3 className="text-base font-semibold text-stone-900 mb-3 flex items-center gap-2">
                  <span>Critical Success Factors</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {data.criticalSuccessFactors.map((csf, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono-code text-xs text-sky-700 font-bold shrink-0">0{i+1}.</span>
                      <span>{csf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-xl">
                <h3 className="text-base font-semibold text-stone-900 mb-3 flex items-center gap-2">
                  <span>Key Lessons Learned</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {data.lessonsLearned.map((ll, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono-code text-xs text-amber-700 font-bold shrink-0">0{i+1}.</span>
                      <span>{ll}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* SECTION 9: CONCLUSION & REFERENCES */}
          <section id="sec-references" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
              <span>Section 09</span>
              <span aria-hidden="true">·</span>
              <span>Academic Citations</span>
            </div>
            <h2 className="text-2xl font-serif-title font-bold text-stone-900 mb-4">
              9. Conclusion & Academic References
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              {data.conclusion}
            </p>

            <div className="border border-stone-200 rounded-xl p-5 bg-stone-50 text-xs sm:text-sm">
              <h3 className="font-semibold text-stone-900 mb-3">Academic & Industry Literature Cited</h3>
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                {data.academicReferences.map((ref, idx) => (
                  <li key={idx}>
                    <strong className="text-stone-800">{ref.title}</strong> — {ref.source} ({ref.year}).
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Deliverable Footer Callout with One-Click Export */}
          <div className="p-8 bg-stone-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                Official Task Deliverable
              </span>
              <h3 className="text-xl font-bold font-serif-title">
                Ready to submit your Week 3 SAP FICO Case Study?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-lg">
                Generates a clean, professionally formatted Microsoft Word (.DOC) deliverable with table of contents, cover page, and complete academic case study sections.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onDownloadDoc}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download .DOC Deliverable</span>
              </button>
            </div>
          </div>

        </div>

      </article>

    </div>
  );
};
