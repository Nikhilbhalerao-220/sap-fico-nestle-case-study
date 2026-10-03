import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronRight, Layers, ShieldCheck, AlertTriangle } from 'lucide-react';
import { CaseStudyData } from '../types/caseStudy';

interface ImplementationTimelineProps {
  data: CaseStudyData;
}

export const ImplementationTimeline: React.FC<ImplementationTimelineProps> = ({ data }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const phases = data.implementationProcess.phases;
  const currentPhase = phases[activePhaseIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
          <span>Implementation Methodology</span>
          <span aria-hidden="true">·</span>
          <span>{data.implementationProcess.methodologyName}</span>
        </div>
        <h1 className="text-3xl font-serif-title font-bold text-stone-900">
          The 5 Phases of SAP FICO Enterprise Rollout
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          How Siemens orchestrated a global transformation across 190 countries using a phased Core Template methodology, controlling cost, risk, and subsidiary resistance.
        </p>
      </div>

      {/* Horizontal Phase Tracker */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {phases.map((p, idx) => {
            const isSelected = idx === activePhaseIndex;
            return (
              <button
                key={p.phaseNumber}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-3 text-left rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-700 text-white shadow-sm ring-2 ring-sky-700/20'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={`font-mono-code font-bold ${isSelected ? 'text-sky-200' : 'text-stone-400'}`}>
                    PHASE 0{p.phaseNumber}
                  </span>
                  <span className={`text-[11px] ${isSelected ? 'text-sky-100' : 'text-stone-500'}`}>
                    {p.duration.split(' ')[0]} {p.duration.split(' ')[1]}
                  </span>
                </div>
                <div className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {p.phaseName.split(' ')[0]} {p.phaseName.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Deep Dive */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono-code font-bold text-sky-700 block uppercase">
              Phase {currentPhase.phaseNumber} of 05
            </span>
            <h2 className="text-2xl font-bold text-stone-900">
              {currentPhase.phaseName}
            </h2>
          </div>
          <span className="text-xs font-mono-code text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg w-fit">
            Timeframe: {currentPhase.duration}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Objectives */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Strategic Phase Objectives
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {currentPhase.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Key Auditable Deliverables
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {currentPhase.keyDeliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tactical Activities */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
            Tactical Workstreams & Execution Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            {currentPhase.activities.map((act, i) => (
              <div key={i} className="p-3.5 bg-white border border-stone-200 rounded-lg">
                <span className="font-mono-code text-xs text-stone-400 block mb-1">Step {currentPhase.phaseNumber}.{i+1}</span>
                <span className="text-stone-800">{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Risk Control */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-950 block mb-0.5">Governance & Risk Mitigation:</strong>
            <p className="text-amber-900">{currentPhase.governanceAndRisks}</p>
          </div>
        </div>

        {/* Navigation Buttons between phases */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <button
            onClick={() => setActivePhaseIndex(Math.max(0, activePhaseIndex - 1))}
            disabled={activePhaseIndex === 0}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer ${
              activePhaseIndex === 0 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            ← Previous Phase
          </button>
          <span className="text-xs text-stone-400 font-mono-code">
            Phase {activePhaseIndex + 1} of {phases.length}
          </span>
          <button
            onClick={() => setActivePhaseIndex(Math.min(phases.length - 1, activePhaseIndex + 1))}
            disabled={activePhaseIndex === phases.length - 1}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer ${
              activePhaseIndex === phases.length - 1 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Next Phase →
          </button>
        </div>

      </div>

      {/* Supporting Execution Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-3">
          <span className="text-xs font-mono-code text-stone-400 uppercase">Workstream 01</span>
          <h3 className="text-lg font-bold text-stone-900">Change Management</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {data.implementationProcess.changeManagementStrategy}
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-3">
          <span className="text-xs font-mono-code text-stone-400 uppercase">Workstream 02</span>
          <h3 className="text-lg font-bold text-stone-900">Data Cleansing & LSMW</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {data.implementationProcess.dataMigrationApproach}
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-3">
          <span className="text-xs font-mono-code text-stone-400 uppercase">Workstream 03</span>
          <h3 className="text-lg font-bold text-stone-900">Testing & 48-Hour Cutover</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {data.implementationProcess.testingAndCutoverStrategy}
          </p>
        </div>

      </div>

    </div>
  );
};
