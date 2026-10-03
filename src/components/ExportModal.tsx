import React from 'react';
import { X, Download, FileText, Printer, Check, Copy } from 'lucide-react';
import { CaseStudyData, UserCustomization } from '../types/caseStudy';
import { downloadDocFile, generateMarkdownReport } from '../utils/docExporter';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudyData;
  user: UserCustomization;
  setUser: React.Dispatch<React.SetStateAction<UserCustomization>>;
  onPrint: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  data,
  user,
  setUser,
  onPrint,
}) => {
  const [copiedMd, setCopiedMd] = React.useState(false);

  if (!isOpen) return null;

  const handleDownloadDoc = () => {
    downloadDocFile(data, user);
    onClose();
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownReport(data, user);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Week3_SAP_FICO_Case_Study_${data.company.name.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownReport(data, user);
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl border border-stone-200 shadow-xl max-w-xl w-full p-6 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-1">
            <span>Deliverable Generator</span>
            <span aria-hidden="true">·</span>
            <span>Task 3 Export</span>
          </div>
          <h2 className="text-xl font-serif-title font-bold text-stone-900">
            Export SAP FICO Case Study (.DOC)
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Generate and customize your official course deliverable. Opens natively in Microsoft Word, Google Docs, Apple Pages, and LibreOffice.
          </p>
        </div>

        {/* Student Profile Input Fields */}
        <div className="space-y-3 pt-2 border-t border-stone-100 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-stone-600 font-medium mb-1">Student / Author Name</label>
              <input
                type="text"
                value={user.studentName}
                onChange={(e) => setUser({ ...user, studentName: e.target.value })}
                className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:outline-sky-600"
                placeholder="e.g. Alex Morgan"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-medium mb-1">Student ID / Roll No</label>
              <input
                type="text"
                value={user.studentId}
                onChange={(e) => setUser({ ...user, studentId: e.target.value })}
                className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:outline-sky-600"
                placeholder="e.g. STU-2026-089"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-stone-600 font-medium mb-1">Course / Module Title</label>
              <input
                type="text"
                value={user.courseTitle}
                onChange={(e) => setUser({ ...user, courseTitle: e.target.value })}
                className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:outline-sky-600"
                placeholder="e.g. Week 3 Task: SAP FICO Case Study"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-medium mb-1">Instructor / Evaluator</label>
              <input
                type="text"
                value={user.evaluatorName}
                onChange={(e) => setUser({ ...user, evaluatorName: e.target.value })}
                className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:outline-sky-600"
                placeholder="e.g. Prof. Davies / Course Faculty"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-600 font-medium mb-1">Submission Date</label>
            <input
              type="text"
              value={user.submissionDate}
              onChange={(e) => setUser({ ...user, submissionDate: e.target.value })}
              className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:outline-sky-600"
              placeholder="e.g. October 3, 2026"
            />
          </div>
        </div>

        {/* Export Formats */}
        <div className="space-y-2 pt-2 border-t border-stone-100">
          <span className="text-xs font-semibold text-stone-700 block">Select Deliverable Format:</span>
          
          {/* Primary Action: DOC File */}
          <button
            onClick={handleDownloadDoc}
            className="w-full p-3 bg-sky-700 hover:bg-sky-800 text-white rounded-xl flex items-center justify-between transition-colors cursor-pointer shadow-sm text-left"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 shrink-0" />
              <div>
                <span className="font-bold text-sm block">Download Official Microsoft Word (.DOC)</span>
                <span className="text-[11px] text-sky-100">Complete formatted document with cover page, TOC, and tables</span>
              </div>
            </div>
            <span className="text-xs font-mono-code bg-white/20 px-2 py-0.5 rounded">.DOC</span>
          </button>

          {/* Secondary Action: Markdown & Print */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleDownloadMarkdown}
              className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download .MD</span>
            </button>

            <button
              onClick={() => { onClose(); onPrint(); }}
              className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="w-full py-2 text-center text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
          >
            {copiedMd ? '✓ Full Markdown Copied to Clipboard!' : 'Copy raw text to clipboard'}
          </button>
        </div>

      </div>
    </div>
  );
};
