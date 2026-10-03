import React, { useState } from 'react';
import { Layers, ArrowRight, Database, Search, CheckCircle2, ChevronRight, FileCode } from 'lucide-react';
import { CaseStudyData } from '../types/caseStudy';

interface ArchitectureExplorerProps {
  data: CaseStudyData;
}

export const ArchitectureExplorer: React.FC<ArchitectureExplorerProps> = ({ data }) => {
  const [activeModuleType, setActiveModuleType] = useState<'FI' | 'CO'>('FI');
  const [selectedSubModule, setSelectedSubModule] = useState<string>('FI-GL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allModules = [...data.solutionArchitecture.fiScope, ...data.solutionArchitecture.coScope];
  const currentModule = allModules.find(m => m.code === selectedSubModule) || allModules[0];

  const filteredTCodes = allModules.flatMap(m => 
    m.sampleTCodes.map(t => ({ ...t, module: m.code, moduleName: m.name }))
  ).filter(t => 
    t.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
          <span>Enterprise Technical Deep Dive</span>
          <span aria-hidden="true">·</span>
          <span>SAP FICO Architecture</span>
        </div>
        <h1 className="text-3xl font-serif-title font-bold text-stone-900">
          SAP FI & CO Solution Architecture & Configuration Blueprint
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore the dual-pillar structure of SAP Financials: Financial Accounting (FI) governing statutory external reporting and Controlling (CO) providing internal managerial intelligence.
        </p>
      </div>

      {/* High-level FI vs CO Comparative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* FI Pillar Card */}
        <div 
          onClick={() => { setActiveModuleType('FI'); setSelectedSubModule('FI-GL'); }}
          className={`p-6 rounded-2xl border transition-all cursor-pointer ${
            activeModuleType === 'FI' 
              ? 'bg-sky-50/50 border-sky-600 ring-1 ring-sky-600/20 shadow-sm' 
              : 'bg-white border-stone-200 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
              PILLAR 1: EXTERNAL
            </span>
            <span className="text-xs text-stone-500 font-medium">Statutory Compliance</span>
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2">
            SAP FI (Financial Accounting)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
            Captures real-time transactions for external stakeholders (investors, banks, tax agencies, and external auditors). Produces balance sheets, P&L, and cash flows compliant with IFRS and local GAAP.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-code text-stone-700">
            <span className="bg-stone-100 px-2 py-1 rounded">FI-GL (General Ledger)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">FI-AP (Payables)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">FI-AR (Receivables)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">FI-AA (Fixed Assets)</span>
          </div>
        </div>

        {/* CO Pillar Card */}
        <div 
          onClick={() => { setActiveModuleType('CO'); setSelectedSubModule('CO-CCA'); }}
          className={`p-6 rounded-2xl border transition-all cursor-pointer ${
            activeModuleType === 'CO' 
              ? 'bg-indigo-50/50 border-indigo-600 ring-1 ring-indigo-600/20 shadow-sm' 
              : 'bg-white border-stone-200 hover:border-stone-300'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
              PILLAR 2: INTERNAL
            </span>
            <span className="text-xs text-stone-500 font-medium">Management Steering</span>
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2">
            SAP CO (Controlling)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
            Delivers granular operational intelligence for internal corporate decision-making. Tracks departmental cost allocations, standard bill-of-materials product costing, and multi-dimensional profitability.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-code text-stone-700">
            <span className="bg-stone-100 px-2 py-1 rounded">CO-CCA (Cost Centers)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">CO-PCA (Profit Centers)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">CO-PC (Product Costing)</span>
            <span className="bg-stone-100 px-2 py-1 rounded">CO-PA (Profitability)</span>
          </div>
        </div>

      </div>

      {/* Sub-Module Detail Explorer */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        
        {/* Sub-module selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-stone-200 mb-6">
          <span className="text-xs text-stone-400 font-medium uppercase tracking-wider shrink-0 mr-2">
            Select Sub-Module:
          </span>
          {(activeModuleType === 'FI' ? data.solutionArchitecture.fiScope : data.solutionArchitecture.coScope).map((m) => (
            <button
              key={m.code}
              onClick={() => setSelectedSubModule(m.code)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedSubModule === m.code
                  ? activeModuleType === 'FI' 
                    ? 'bg-sky-700 text-white' 
                    : 'bg-indigo-700 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {m.code}
            </button>
          ))}
        </div>

        {/* Selected Module Detail */}
        {currentModule && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono-code text-stone-400 block uppercase">
                  {currentModule.type === 'FI' ? 'Financial Accounting Sub-Module' : 'Controlling Sub-Module'}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-mono-code">
                  {currentModule.code}: {currentModule.name}
                </h3>
              </div>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 px-3 py-1 rounded-full w-fit">
                Enterprise Blueprint Standard
              </span>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {currentModule.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
              
              {/* Left Column: Sub-components and Accounting Entry */}
              <div className="space-y-4">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                    Core Technical Components & Master Data
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {currentModule.keySubModules.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-100">
                  <h4 className="text-xs font-bold text-sky-950 uppercase tracking-wider mb-1">
                    Real-World Accounting Journal Voucher Posting
                  </h4>
                  <p className="text-xs font-mono-code text-sky-900 font-medium">
                    {currentModule.accountingImpact}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Transaction Codes */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Essential SAP Transaction Codes (T-Codes)
                </h4>
                <div className="space-y-2.5">
                  {currentModule.sampleTCodes.map((t) => (
                    <div key={t.code} className="p-2.5 bg-white rounded-lg border border-stone-200 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-code font-bold text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded">
                          {t.code}
                        </span>
                        <span className="font-medium text-stone-800">{t.name}</span>
                      </div>
                      <p className="text-stone-500 text-[11px] leading-snug">{t.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* End-to-End Business Integration Flows (P2P & O2C) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-serif-title font-bold text-stone-900">
            End-to-End Cross-Module Integration Pathways
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            How operational events in procurement, sales, and manufacturing automatically trigger balanced journal entries in FI and CO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Procure-to-Pay (P2P) Flow */}
          <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Procure-to-Pay (P2P)</span>
              <span className="text-xs font-mono-code text-stone-500">MM ➔ FI-AP ➔ FI-GL</span>
            </div>
            <h3 className="text-lg font-bold text-stone-900">Supplier Sourcing to Vendor Disbursement</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">1. PO</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Purchase Order Creation (ME21N)</span>
                  <span className="text-stone-500">Committed budget recorded; no accounting posting yet.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">2. GR</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Goods Receipt at Factory (MIGO)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr Inventory Raw Material / Cr GR/IR Clearing</span>
                  <span className="text-stone-500 text-[11px]">Automatic Account Assignment via T-Code OBYC.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">3. IR</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Invoice Verification (MIRO)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr GR/IR Clearing / Cr Vendor Liability (FI-AP)</span>
                  <span className="text-stone-500 text-[11px]">3-way matching between PO, GR, and Invoice price/quantity.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">4. PAY</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Automatic Payment Run (F110)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr Vendor Liability / Cr Outgoing Bank Clearing</span>
                  <span className="text-stone-500 text-[11px]">Automated SEPA/SWIFT electronic payment files generated.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order-to-Cash (O2C) Flow */}
          <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Order-to-Cash (O2C)</span>
              <span className="text-xs font-mono-code text-stone-500">SD ➔ FI-AR ➔ CO-PA</span>
            </div>
            <h3 className="text-lg font-bold text-stone-900">Customer Order to Cash Application</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">1. SO</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Sales Order Booking (VA01)</span>
                  <span className="text-stone-500">Credit limit check against customer master in FI-AR.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">2. PGI</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Post Goods Issue Dispatch (VL02N)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr Cost of Goods Sold (COGS) / Cr Finished Goods Inventory</span>
                  <span className="text-stone-500 text-[11px]">Material value deduced from standard cost in CO-PC.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">3. BILL</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Customer Billing Document (VF01)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr Customer AR / Cr Sales Revenue & Cr Output Tax</span>
                  <span className="text-stone-500 text-[11px]">Simultaneously posts customer and SKU segments to CO-PA.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100 flex items-start gap-3">
                <span className="font-mono-code font-bold text-stone-700 shrink-0">4. CASH</span>
                <div>
                  <span className="font-semibold text-stone-900 block">Electronic Bank Statement (FEBAN)</span>
                  <span className="text-stone-700 font-mono-code block mt-0.5">Dr Bank Inflow / Cr Customer AR (Open Item Cleared)</span>
                  <span className="text-stone-500 text-[11px]">Reduces Days Sales Outstanding (DSO) automatically.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive T-Code Master Directory with Search */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              SAP FICO Transaction Codes (T-Codes) Glossary
            </h3>
            <p className="text-xs text-stone-500">
              Reference guide of essential daily transaction codes used by enterprise accountants.
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search code or purpose..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-stone-50 focus:bg-white focus:outline-sky-600"
            />
          </div>
        </div>

        <div className="border border-stone-200 rounded-xl overflow-hidden">
          <div className="max-h-72 overflow-y-auto divide-y divide-stone-200 text-xs">
            {filteredTCodes.length === 0 ? (
              <div className="p-6 text-center text-stone-500">
                No transaction codes match your query.
              </div>
            ) : (
              filteredTCodes.map((t, idx) => (
                <div key={idx} className="p-3 hover:bg-stone-50 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code font-bold text-sky-800 bg-sky-50 px-2 py-1 rounded border border-sky-100 min-w-20 text-center">
                      {t.code}
                    </span>
                    <div>
                      <span className="font-semibold text-stone-900 block">{t.name}</span>
                      <span className="text-stone-500 text-[11px]">{t.purpose}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono-code text-stone-400 shrink-0">
                    {t.module}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
