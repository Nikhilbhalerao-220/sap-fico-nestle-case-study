import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { DocumentViewer } from './components/DocumentViewer';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { ImplementationTimeline } from './components/ImplementationTimeline';
import { ComparativeMatrix } from './components/ComparativeMatrix';
import { EvaluationRubric } from './components/EvaluationRubric';
import { ExportModal } from './components/ExportModal';
import { SIEMENS_CASE_STUDY } from './data/caseStudyData';
import { UserCustomization } from './types/caseStudy';
import { downloadDocFile } from './utils/docExporter';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('reader');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [user, setUser] = useState<UserCustomization>({
    studentName: 'Enterprise Research Analyst',
    studentId: 'SAP-FICO-WK3-2026',
    courseTitle: 'Week 3 Task: SAP FICO Case Study',
    submissionDate: 'October 3, 2026',
    evaluatorName: 'Course Evaluation Committee',
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleQuickDownloadDoc = () => {
    downloadDocFile(SIEMENS_CASE_STUDY, user);
    showToast('Downloaded official DOC deliverable: Week3_SAP_FICO_Case_Study_Siemens_AG.doc');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      
      {/* Top Bar adhering to Top Bar Contract */}
      <TopNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onQuickDownloadDoc={handleQuickDownloadDoc}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'reader' && (
          <DocumentViewer
            data={SIEMENS_CASE_STUDY}
            user={user}
            setUser={setUser}
            onDownloadDoc={handleQuickDownloadDoc}
            onOpenExportModal={() => setIsExportModalOpen(true)}
            onPrint={handlePrint}
            onNavigateToArchitecture={() => setActiveTab('architecture')}
            onNavigateToMethodology={() => setActiveTab('methodology')}
          />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureExplorer data={SIEMENS_CASE_STUDY} />
        )}

        {activeTab === 'methodology' && (
          <ImplementationTimeline data={SIEMENS_CASE_STUDY} />
        )}

        {activeTab === 'benchmarks' && (
          <ComparativeMatrix />
        )}

        {activeTab === 'rubric' && (
          <EvaluationRubric />
        )}
      </main>

      {/* Clean Academic Footer (anti-slop, no fake telemetry) */}
      <footer className="no-print border-t border-stone-200 bg-white py-8 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800">Week 3 Task: SAP FICO Case Study</span>
            <span aria-hidden="true">·</span>
            <span>Real-World Implementation Analysis</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Primary Study: Siemens AG</span>
            <span aria-hidden="true">·</span>
            <span>Deliverable Format: .DOC / Word Compatible</span>
          </div>
        </div>
      </footer>

      {/* Deliverable Export & Customization Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        data={SIEMENS_CASE_STUDY}
        user={user}
        setUser={setUser}
        onPrint={handlePrint}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-stone-900 text-white text-xs font-medium rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
