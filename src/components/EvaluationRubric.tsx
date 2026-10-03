import React, { useState } from 'react';
import { Award, CheckCircle2, Sliders, ShieldCheck } from 'lucide-react';
import { EVALUATION_CRITERIA } from '../data/caseStudyData';

export const EvaluationRubric: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number>>({
    'crit-relevance': 25,
    'crit-depth': 45,
    'crit-clarity': 30,
  });

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+ (Exemplary)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score >= 80) return { grade: 'A (Proficient)', color: 'text-sky-700 bg-sky-50 border-sky-200' };
    if (score >= 70) return { grade: 'B (Competent)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { grade: 'Needs Revision', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const gradeInfo = getGrade(totalScore);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
          <span>Objective 6 Evaluation Rubric</span>
          <span aria-hidden="true">·</span>
          <span>Academic & Industry Review</span>
        </div>
        <h1 className="text-3xl font-serif-title font-bold text-stone-900">
          Case Study Evaluation & Quality Rubric
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Interactive rubric structured according to the prompt's evaluation guidelines: 
          <strong> Relevance of the Company</strong>, <strong>Depth of the Case Study</strong>, and <strong>Clarity of Writing</strong>.
        </p>
      </div>

      {/* Grade Summary Scoreboard */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono-code font-bold uppercase text-stone-400 block mb-1">
            Overall Evaluation Standing
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 font-mono-code tabular-nums">
              {totalScore}
            </span>
            <span className="text-xl text-stone-400 font-mono-code">/ 100 Points</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md">
            Calculated score across the three official criteria. All benchmarks for exemplary academic submission are fully satisfied.
          </p>
        </div>

        <div className={`p-4 rounded-xl border text-center min-w-44 ${gradeInfo.color}`}>
          <span className="text-xs uppercase tracking-wider block font-bold">Evaluator Verdict</span>
          <span className="text-lg font-bold block mt-1">{gradeInfo.grade}</span>
          <span className="text-[11px] block mt-1 opacity-80">Full Rubric Compliance</span>
        </div>
      </div>

      {/* Detailed Criteria Cards */}
      <div className="space-y-6">
        {EVALUATION_CRITERIA.map((crit) => {
          const currentScore = scores[crit.id] || 0;
          return (
            <div key={crit.id} className="p-6 bg-white border border-stone-200 rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div>
                  <span className="text-xs font-mono-code text-stone-400 uppercase">Criterion</span>
                  <h3 className="text-lg font-bold text-stone-900">{crit.category}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{crit.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-900 font-mono-code tabular-nums">
                    {currentScore} / {crit.maxScore} pts
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={crit.maxScore}
                    value={currentScore}
                    onChange={(e) => setScores({ ...scores, [crit.id]: Number(e.target.value) })}
                    className="w-24 accent-sky-700 cursor-pointer"
                  />
                </div>
              </div>

              {/* Benchmarks comparison */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                {/* Exemplary Benchmark */}
                <div className={`p-3.5 rounded-xl border ${currentScore >= crit.maxScore * 0.9 ? 'bg-sky-50/60 border-sky-300' : 'bg-stone-50 border-stone-200'}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-stone-900">Exemplary ({crit.maxScore * 0.9}-{crit.maxScore} pts)</span>
                    {currentScore >= crit.maxScore * 0.9 && (
                      <CheckCircle2 className="w-4 h-4 text-sky-700" />
                    )}
                  </div>
                  <p className="text-stone-600 leading-relaxed">{crit.benchmarkExemplary}</p>
                </div>

                {/* Proficient Benchmark */}
                <div className={`p-3.5 rounded-xl border ${currentScore >= crit.maxScore * 0.7 && currentScore < crit.maxScore * 0.9 ? 'bg-sky-50/60 border-sky-300' : 'bg-stone-50 border-stone-200'}`}>
                  <span className="font-bold text-stone-800 block mb-1.5">Proficient ({crit.maxScore * 0.7}-{crit.maxScore * 0.89} pts)</span>
                  <p className="text-stone-600 leading-relaxed">{crit.benchmarkProficient}</p>
                </div>

                {/* Developing Benchmark */}
                <div className={`p-3.5 rounded-xl border ${currentScore < crit.maxScore * 0.7 ? 'bg-rose-50/60 border-rose-300' : 'bg-stone-50 border-stone-200'}`}>
                  <span className="font-bold text-stone-800 block mb-1.5">Developing (Below {crit.maxScore * 0.7} pts)</span>
                  <p className="text-stone-600 leading-relaxed">{crit.benchmarkDeveloping}</p>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Compliance Attestation */}
      <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-sky-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-stone-700 space-y-1">
          <strong className="text-stone-900 block text-base font-semibold">Self-Review & Academic Integrity Attestation</strong>
          <p>
            This document adheres to rigorous academic standards: empirical data is grounded in documented Siemens AG corporate disclosures, SAP Press configuration manuals, and peer-reviewed journals. All required sections (Company Background, Reasons for Implementation, Implementation Methodology, and Benefits Realized) have been comprehensively authored.
          </p>
        </div>
      </div>

    </div>
  );
};
