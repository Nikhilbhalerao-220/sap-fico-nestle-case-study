import React from 'react';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPARATIVE_CASE_STUDIES, SIEMENS_CASE_STUDY } from '../data/caseStudyData';

export const ComparativeMatrix: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
          <span>Cross-Industry Benchmarking</span>
          <span aria-hidden="true">·</span>
          <span>Multi-Enterprise Comparison</span>
        </div>
        <h1 className="text-3xl font-serif-title font-bold text-stone-900">
          Comparative Real-World SAP FICO Case Studies
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Evaluate how leading multinationals across diversified engineering, heavy automotive, and consumer goods tailor SAP FICO modules to their business models.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Primary Flagship (Siemens AG) */}
        <div className="p-6 bg-white border-2 border-sky-600/60 rounded-2xl shadow-sm space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                FLAGSHIP BENCHMARK
              </span>
              <span className="text-xs text-stone-400">Germany</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900">
              {SIEMENS_CASE_STUDY.company.name}
            </h2>
            <div className="text-xs text-stone-500">
              <span>{SIEMENS_CASE_STUDY.company.industry}</span>
              <span className="block mt-0.5 font-mono-code">Rev: {SIEMENS_CASE_STUDY.company.revenue} · {SIEMENS_CASE_STUDY.company.employeeCount}</span>
            </div>
            
            <div className="pt-3 border-t border-stone-100 text-xs space-y-2">
              <div>
                <strong className="text-stone-800 block">Core Challenge:</strong>
                <p className="text-stone-600">40+ legacy accounting systems, 35+ local charts of accounts, delayed 18-day close.</p>
              </div>
              <div>
                <strong className="text-stone-800 block">SAP FICO Focus:</strong>
                <p className="text-stone-600">Global ONE Financial Template, New G/L Document Splitting, Parallel Ledgers (IFRS/HGB).</p>
              </div>
              <div className="p-2.5 bg-sky-50 rounded-lg">
                <strong className="text-sky-950 block">Quantified Impact:</strong>
                <span className="text-sky-800 font-mono-code font-semibold">-75% close cycle (4.5 days), €450M freed capital.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-400">
            Included in primary research deliverable
          </div>
        </div>

        {/* Card 2: Tata Motors */}
        <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                HEAVY MANUFACTURING
              </span>
              <span className="text-xs text-stone-400">India</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900">
              {COMPARATIVE_CASE_STUDIES[0].name}
            </h2>
            <div className="text-xs text-stone-500">
              <span>{COMPARATIVE_CASE_STUDIES[0].industry}</span>
              <span className="block mt-0.5 font-mono-code">Rev: {COMPARATIVE_CASE_STUDIES[0].revenue} · {COMPARATIVE_CASE_STUDIES[0].employeeCount}</span>
            </div>

            <div className="pt-3 border-t border-stone-100 text-xs space-y-2">
              <div>
                <strong className="text-stone-800 block">Core Challenge:</strong>
                <p className="text-stone-600">{COMPARATIVE_CASE_STUDIES[0].keyChallenge}</p>
              </div>
              <div>
                <strong className="text-stone-800 block">SAP FICO Focus:</strong>
                <p className="text-stone-600">{COMPARATIVE_CASE_STUDIES[0].ficoSolution}</p>
              </div>
              <div className="p-2.5 bg-stone-100 rounded-lg">
                <strong className="text-stone-900 block">Quantified Impact:</strong>
                <span className="text-stone-700 font-mono-code font-medium">{COMPARATIVE_CASE_STUDIES[0].quantifiedResult}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-400">
            Automotive supply chain & BOM costing benchmark
          </div>
        </div>

        {/* Card 3: Nestlé Global */}
        <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                GLOBAL FMCG
              </span>
              <span className="text-xs text-stone-400">Switzerland</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900">
              {COMPARATIVE_CASE_STUDIES[1].name}
            </h2>
            <div className="text-xs text-stone-500">
              <span>{COMPARATIVE_CASE_STUDIES[1].industry}</span>
              <span className="block mt-0.5 font-mono-code">Rev: {COMPARATIVE_CASE_STUDIES[1].revenue} · {COMPARATIVE_CASE_STUDIES[1].employeeCount}</span>
            </div>

            <div className="pt-3 border-t border-stone-100 text-xs space-y-2">
              <div>
                <strong className="text-stone-800 block">Core Challenge:</strong>
                <p className="text-stone-600">{COMPARATIVE_CASE_STUDIES[1].keyChallenge}</p>
              </div>
              <div>
                <strong className="text-stone-800 block">SAP FICO Focus:</strong>
                <p className="text-stone-600">{COMPARATIVE_CASE_STUDIES[1].ficoSolution}</p>
              </div>
              <div className="p-2.5 bg-stone-100 rounded-lg">
                <strong className="text-stone-900 block">Quantified Impact:</strong>
                <span className="text-stone-700 font-mono-code font-medium">{COMPARATIVE_CASE_STUDIES[1].quantifiedResult}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-400">
            Consumer goods CO-PA & trade promotion benchmark
          </div>
        </div>

      </div>

      {/* Synthesis Takeaway */}
      <div className="p-6 bg-stone-900 text-white rounded-2xl">
        <h3 className="text-lg font-bold font-serif-title mb-2">Cross-Industry Strategic Synthesis</h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl">
          While industrial conglomerates like Siemens utilize SAP FI New G/L document splitting to harmonize segment reporting across 190 countries, manufacturing enterprises like Tata Motors rely heavily on SAP CO-PC and the Material Ledger to track component bill-of-material cost variances. In contrast, consumer goods giants like Nestlé leverage SAP CO-PA to model customer channel profitability against millions in promotional trade allowances. Across all three sectors, SAP FICO provides the common architectural foundation of integrated, real-time financial truth.
        </p>
      </div>

    </div>
  );
};
