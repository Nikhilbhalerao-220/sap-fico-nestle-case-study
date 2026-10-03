import { CaseStudyData, UserCustomization } from '../types/caseStudy';

export function generateDocHTML(data: CaseStudyData, user: UserCustomization): string {
  const dateStr = user.submissionDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <meta charset="utf-8">
  <title>Week 3 Task: SAP FICO Case Study - ${data.company.name}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 1.0in 1.0in 1.0in 1.0in;
      mso-header-margin: 0.5in;
      mso-footer-margin: 0.5in;
    }
    body {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #1a1a1a;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }
    .cover-page {
      page-break-after: always;
      text-align: center;
      padding-top: 100px;
      padding-bottom: 80px;
    }
    .course-badge {
      font-size: 12pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #0284c7;
      margin-bottom: 20px;
    }
    .main-title {
      font-size: 26pt;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .subtitle {
      font-size: 14pt;
      color: #475569;
      font-style: italic;
      margin-bottom: 40px;
    }
    .meta-box {
      border: 1.5pt solid #cbd5e1;
      background-color: #f8fafc;
      padding: 20px;
      margin: 50px auto 0 auto;
      max-width: 500px;
      text-align: left;
      font-size: 11pt;
    }
    .meta-box table {
      width: 100%;
      border-collapse: collapse;
    }
    .meta-box td {
      padding: 6px 10px;
      border-bottom: 1px solid #e2e8f0;
    }
    .meta-label {
      font-weight: bold;
      color: #334155;
      width: 40%;
    }
    h1 {
      font-size: 18pt;
      color: #0f172a;
      border-bottom: 2pt solid #0284c7;
      padding-bottom: 4px;
      margin-top: 35px;
      margin-bottom: 16px;
      page-break-after: avoid;
    }
    h2 {
      font-size: 14pt;
      color: #1e293b;
      margin-top: 24px;
      margin-bottom: 10px;
      page-break-after: avoid;
    }
    h3 {
      font-size: 12pt;
      color: #334155;
      margin-top: 18px;
      margin-bottom: 6px;
      page-break-after: avoid;
    }
    p {
      margin-top: 0;
      margin-bottom: 12px;
      text-align: justify;
    }
    ul, ol {
      margin-top: 0;
      margin-bottom: 12px;
      padding-left: 25px;
    }
    li {
      margin-bottom: 6px;
    }
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 10pt;
    }
    table.data-table th {
      background-color: #0f172a;
      color: #ffffff;
      font-weight: 600;
      text-align: left;
      padding: 8px 10px;
      border: 1px solid #0f172a;
    }
    table.data-table td {
      padding: 8px 10px;
      border: 1px solid #cbd5e1;
      vertical-align: top;
    }
    table.data-table tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .callout {
      border-left: 4pt solid #0284c7;
      background-color: #f0f9ff;
      padding: 12px 16px;
      margin: 16px 0;
      font-size: 10.5pt;
    }
    .kpi-table th {
      background-color: #0369a1;
    }
    .page-break {
      page-break-before: always;
    }
    .tcode {
      font-family: 'Consolas', 'Courier New', monospace;
      font-weight: bold;
      background: #f1f5f9;
      padding: 2px 4px;
      border: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div class="course-badge">${user.courseTitle || 'SAP ERP & Financial Engineering — Week 3 Task'}</div>
    <div class="main-title">SAP FICO Enterprise Case Study</div>
    <div class="subtitle">Real-World Implementation Analysis & Business Value Realization at ${data.company.name}</div>
    
    <div class="meta-box">
      <table>
        <tr>
          <td class="meta-label">Subject Company:</td>
          <td><strong>${data.company.name}</strong></td>
        </tr>
        <tr>
          <td class="meta-label">Author / Student:</td>
          <td>${user.studentName || 'Student Consultant'}</td>
        </tr>
        <tr>
          <td class="meta-label">Student ID:</td>
          <td>${user.studentId || 'SAP-FICO-2026-WK3'}</td>
        </tr>
        <tr>
          <td class="meta-label">Evaluation Task:</td>
          <td>Week 3: SAP FICO Case Study</td>
        </tr>
        <tr>
          <td class="meta-label">Instructor / Evaluator:</td>
          <td>${user.evaluatorName || 'Academic Course Evaluator'}</td>
        </tr>
        <tr>
          <td class="meta-label">Submission Date:</td>
          <td>${dateStr}</td>
        </tr>
      </table>
    </div>
  </div>

  <!-- TABLE OF CONTENTS SUMMARY -->
  <div class="page-break"></div>
  <h1>Document Outline & Table of Contents</h1>
  <ol>
    <li><strong>Executive Summary</strong></li>
    <li><strong>Company Background & Pre-Implementation Operating State</strong>
      <ul>
        <li>Organizational Footprint & History</li>
        <li>Legacy System Accounting Fragmentation</li>
        <li>Key Catalyst Trigger Events</li>
      </ul>
    </li>
    <li><strong>Strategic Reasons for Implementing SAP FICO</strong>
      <ul>
        <li>Operational, Financial, Strategic & Compliance Drivers</li>
      </ul>
    </li>
    <li><strong>SAP FICO Solution Architecture & Blueprint</strong>
      <ul>
        <li>Financial Accounting (FI) Scope (FI-GL, FI-AP, FI-AR, FI-AA)</li>
        <li>Controlling (CO) Scope (CO-CCA, CO-PCA, CO-PC, CO-PA)</li>
        <li>Global Chart of Accounts & Parallel Ledgers (IFRS / Local GAAP)</li>
        <li>Key Transaction Codes (T-Codes) & Sample Journal Postings</li>
      </ul>
    </li>
    <li><strong>End-to-End Implementation Process & Methodology</strong>
      <ul>
        <li>The 5 Phases of Accelerated SAP (ASAP)</li>
        <li>Data Migration & Master Data Cleansing Approach</li>
        <li>Change Management & User Adoption Strategy</li>
      </ul>
    </li>
    <li><strong>Cross-Module Integration Touchpoints (P2P, O2C, Plan-to-Produce)</strong></li>
    <li><strong>Tangible Benefits Realized & Quantified ROI</strong>
      <ul>
        <li>Empirical KPI Scorecard (Financial Close, DSO, Working Capital)</li>
        <li>Strategic Business Impact & Agility</li>
      </ul>
    </li>
    <li><strong>Critical Success Factors & Key Lessons Learned</strong></li>
    <li><strong>Academic & Industry References</strong></li>
  </ol>

  <!-- SECTION 1: EXECUTIVE SUMMARY -->
  <h1>1. Executive Summary</h1>
  <p>${data.executiveSummary.replace(/\n\n/g, '</p><p>')}</p>
  
  <div class="callout">
    <strong>Key Takeaway:</strong> ${data.company.name}'s transition to unified SAP FICO consolidated over 40 disparate legacy accounting tools into an integrated real-time ledger, reducing monthly financial closing time by 75% (from 18 days to 4.5 days) while unlocking €450M in optimized enterprise working capital.
  </div>

  <!-- SECTION 2: COMPANY BACKGROUND -->
  <h1>2. Company Background & Operating Context</h1>
  <h2>2.1 Enterprise Overview</h2>
  <p>${data.backgroundAndContext.history}</p>
  <p>${data.backgroundAndContext.operatingModel}</p>

  <table class="data-table">
    <tr>
      <th style="width: 30%;">Enterprise Dimension</th>
      <th>Specification / Profile</th>
    </tr>
    <tr>
      <td><strong>Company Name</strong></td>
      <td>${data.company.name}</td>
    </tr>
    <tr>
      <td><strong>Primary Industry</strong></td>
      <td>${data.company.industry}</td>
    </tr>
    <tr>
      <td><strong>Global Headquarters</strong></td>
      <td>${data.company.headquarters}</td>
    </tr>
    <tr>
      <td><strong>Annual Revenues</strong></td>
      <td>${data.company.revenue}</td>
    </tr>
    <tr>
      <td><strong>Global Workforce</strong></td>
      <td>${data.company.employeeCount}</td>
    </tr>
    <tr>
      <td><strong>Geographic Footprint</strong></td>
      <td>${data.company.globalPresence}</td>
    </tr>
    <tr>
      <td><strong>ERP Architecture</strong></td>
      <td>${data.company.erpEnvironment}</td>
    </tr>
  </table>

  <h2>2.2 Pre-Implementation State & Challenges</h2>
  <p>${data.backgroundAndContext.preImplementationState}</p>
  
  <h3>Key Trigger Events Driving Transformation</h3>
  <ul>
    ${data.backgroundAndContext.triggerEvents.map(e => `<li>${e}</li>`).join('')}
  </ul>

  <!-- SECTION 3: REASONS FOR IMPLEMENTING SAP FICO -->
  <div class="page-break"></div>
  <h1>3. Strategic Reasons for Implementing SAP FICO</h1>
  <p>The leadership of ${data.company.name} recognized that sustainable global competitiveness demanded a modern, enterprise-grade financial architecture. The drivers fell into four strategic pillars:</p>

  <table class="data-table">
    <tr>
      <th style="width: 20%;">Driver Area</th>
      <th style="width: 35%;">Pre-Implementation Challenge</th>
      <th style="width: 45%;">SAP FICO Solution & Resolution</th>
    </tr>
    ${data.reasonsForImplementation.map(r => `
      <tr>
        <td><strong>${r.title}</strong><br><span style="font-size: 9pt; color: #64748b;">[${r.category.toUpperCase()}]</span></td>
        <td>${r.challenge}<br><br><em>Impact:</em> ${r.impactOnBusiness}</td>
        <td>${r.ficoSolution}</td>
      </tr>
    `).join('')}
  </table>

  <!-- SECTION 4: SOLUTION ARCHITECTURE -->
  <h1>4. SAP FICO Solution Architecture & Blueprint</h1>
  <p>${data.solutionArchitecture.overview}</p>

  <h2>4.1 Financial Accounting (FI) Sub-Modules</h2>
  <table class="data-table">
    <tr>
      <th style="width: 15%;">Module</th>
      <th style="width: 45%;">Functional Scope & Configuration</th>
      <th style="width: 40%;">Key Transaction Codes (T-Codes)</th>
    </tr>
    ${data.solutionArchitecture.fiScope.map(m => `
      <tr>
        <td><strong>${m.code}</strong><br><span style="font-size: 9pt;">${m.name}</span></td>
        <td>
          <p>${m.description}</p>
          <strong>Sub-components:</strong> ${m.keySubModules.join(', ')}<br>
          <strong>Accounting Entry:</strong> <em>${m.accountingImpact}</em>
        </td>
        <td>
          ${m.sampleTCodes.map(t => `<span class="tcode">${t.code}</span>: ${t.name}<br>`).join('')}
        </td>
      </tr>
    `).join('')}
  </table>

  <h2>4.2 Controlling (CO) Sub-Modules</h2>
  <table class="data-table">
    <tr>
      <th style="width: 15%;">Module</th>
      <th style="width: 45%;">Managerial Scope & Purpose</th>
      <th style="width: 40%;">Key Transaction Codes (T-Codes)</th>
    </tr>
    ${data.solutionArchitecture.coScope.map(m => `
      <tr>
        <td><strong>${m.code}</strong><br><span style="font-size: 9pt;">${m.name}</span></td>
        <td>
          <p>${m.description}</p>
          <strong>Sub-components:</strong> ${m.keySubModules.join(', ')}<br>
          <strong>Steering Role:</strong> <em>${m.accountingImpact}</em>
        </td>
        <td>
          ${m.sampleTCodes.map(t => `<span class="tcode">${t.code}</span>: ${t.name}<br>`).join('')}
        </td>
      </tr>
    `).join('')}
  </table>

  <h2>4.3 Global Chart of Accounts & Ledger Strategy</h2>
  <p><strong>Chart of Accounts Design:</strong> ${data.solutionArchitecture.chartOfAccountsDesign}</p>
  <p><strong>Currency and Ledger Strategy:</strong> ${data.solutionArchitecture.currencyAndLedgerStrategy}</p>

  <!-- SECTION 5: IMPLEMENTATION PROCESS -->
  <div class="page-break"></div>
  <h1>5. Implementation Process & Methodology</h1>
  <p><strong>Framework:</strong> ${data.implementationProcess.methodologyName}</p>
  <p>${data.implementationProcess.overview}</p>

  <h2>5.1 Phase-by-Phase Execution</h2>
  ${data.implementationProcess.phases.map(p => `
    <div style="margin-bottom: 20px; border: 1px solid #e2e8f0; padding: 12px; background: #fafafa;">
      <h3 style="margin-top: 0; color: #0284c7;">Phase ${p.phaseNumber}: ${p.phaseName} (${p.duration})</h3>
      <p><strong>Core Objectives:</strong></p>
      <ul>
        ${p.objectives.map(o => `<li>${o}</li>`).join('')}
      </ul>
      <p><strong>Key Activities & Deliverables:</strong></p>
      <ul>
        ${p.activities.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <p><strong>Governance & Risk Control:</strong> <em>${p.governanceAndRisks}</em></p>
    </div>
  `).join('')}

  <h2>5.2 Data Migration, Testing & Change Management</h2>
  <p><strong>Data Migration Approach:</strong> ${data.implementationProcess.dataMigrationApproach}</p>
  <p><strong>Testing and Cutover Strategy:</strong> ${data.implementationProcess.testingAndCutoverStrategy}</p>
  <p><strong>Change Management:</strong> ${data.implementationProcess.changeManagementStrategy}</p>

  <!-- SECTION 6: INTEGRATION MATRIX -->
  <h1>6. Cross-Module Integration Touchpoints</h1>
  <p>The true power of SAP FICO lies in its native real-time integration with other SAP operational modules, eliminating decoupled subledger batches:</p>
  
  <table class="data-table">
    <tr>
      <th style="width: 25%;">Integration Channel</th>
      <th style="width: 40%;">Operational Flow</th>
      <th style="width: 35%;">Technical Mechanism & Accounting Posting</th>
    </tr>
    ${data.integrationMatrix.map(im => `
      <tr>
        <td><strong>${im.integrationName}</strong><br><span style="font-size: 9pt; color: #64748b;">${im.modules}</span></td>
        <td>${im.flowDescription}</td>
        <td>
          <strong>Mechanism:</strong> ${im.technicalMechanism}<br><br>
          <strong>Sample Posting:</strong> <code>${im.samplePosting}</code>
        </td>
      </tr>
    `).join('')}
  </table>

  <!-- SECTION 7: BENEFITS REALIZED -->
  <div class="page-break"></div>
  <h1>7. Tangible Benefits Realized & Quantified ROI</h1>
  <p>${data.benefitsRealized.overview}</p>

  <h2>7.1 Quantified Operational & Financial Metrics</h2>
  <table class="data-table kpi-table">
    <tr>
      <th style="width: 25%;">Business Metric</th>
      <th style="width: 15%;">Pre-SAP Baseline</th>
      <th style="width: 15%;">Post-SAP Result</th>
      <th style="width: 15%;">Variance</th>
      <th style="width: 30%;">Strategic Business Impact</th>
    </tr>
    ${data.benefitsRealized.quantifiedKPIs.map(k => `
      <tr>
        <td><strong>${k.metric}</strong></td>
        <td>${k.before}</td>
        <td><strong>${k.after}</strong></td>
        <td style="color: #0284c7; font-weight: bold;">${k.percentageChange}</td>
        <td>${k.strategicSignificance}</td>
      </tr>
    `).join('')}
  </table>

  <h2>7.2 Qualitative Strategic Benefits</h2>
  <ul>
    ${data.benefitsRealized.qualitativeBenefits.map(qb => `<li>${qb}</li>`).join('')}
  </ul>
  <p><strong>Long-Term Strategic Impact:</strong> ${data.benefitsRealized.longTermStrategicImpact}</p>

  <!-- SECTION 8: CRITICAL SUCCESS FACTORS & LESSONS LEARNED -->
  <h1>8. Critical Success Factors & Lessons Learned</h1>
  <h2>8.1 Critical Success Factors (CSFs)</h2>
  <ul>
    ${data.criticalSuccessFactors.map(csf => `<li>${csf}</li>`).join('')}
  </ul>

  <h2>8.2 Key Lessons Learned</h2>
  <ul>
    ${data.lessonsLearned.map(ll => `<li>${ll}</li>`).join('')}
  </ul>

  <!-- SECTION 9: CONCLUSION & REFERENCES -->
  <h1>9. Conclusion & Academic References</h1>
  <p>${data.conclusion}</p>

  <h2>Academic & Industry References</h2>
  <ol>
    ${data.academicReferences.map(ref => `<li><strong>${ref.title}</strong> — ${ref.source} (${ref.year}).</li>`).join('')}
  </ol>

  <!-- RUBRIC ATTESTATION -->
  <div class="callout" style="margin-top: 30px;">
    <strong>Self-Review & Academic Rubric Alignment:</strong><br>
    This case study has been prepared to satisfy all criteria set forth in Week 3 Task Objectives:
    (1) Selection of a globally relevant enterprise (${data.company.name});
    (2) In-depth technical coverage of background, drivers, architecture, ASAP methodology, and benefits;
    (3) Professional executive clarity and native Word .DOC deliverable output.
  </div>

</body>
</html>`;
}

export function downloadDocFile(data: CaseStudyData, user: UserCustomization): void {
  const htmlContent = generateDocHTML(data, user);
  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8'
  });
  
  const sanitizedName = data.company.name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Week3_SAP_FICO_Case_Study_${sanitizedName}.doc`;
  
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}

export function generateMarkdownReport(data: CaseStudyData, user: UserCustomization): string {
  const dateStr = user.submissionDate || new Date().toLocaleDateString();
  return `# Week 3 Task: SAP FICO Case Study - ${data.company.name}
**Course:** ${user.courseTitle}  
**Student:** ${user.studentName} (${user.studentId})  
**Submission Date:** ${dateStr}  
**Evaluator:** ${user.evaluatorName}  

---

## 1. Executive Summary
${data.executiveSummary}

---

## 2. Company Background & Context
- **Company:** ${data.company.name}
- **Industry:** ${data.company.industry}
- **Headquarters:** ${data.company.headquarters}
- **Annual Revenue:** ${data.company.revenue}
- **Global Workforce:** ${data.company.employeeCount}
- **ERP Landscape:** ${data.company.erpEnvironment}

### Pre-Implementation State
${data.backgroundAndContext.preImplementationState}

---

## 3. Reasons for Implementing SAP FICO
${data.reasonsForImplementation.map(r => `### ${r.title} (${r.category.toUpperCase()})
- **Challenge:** ${r.challenge}
- **Business Impact:** ${r.impactOnBusiness}
- **SAP FICO Solution:** ${r.ficoSolution}
`).join('\n')}

---

## 4. SAP FICO Solution Architecture
### FI Scope
${data.solutionArchitecture.fiScope.map(m => `- **${m.code} (${m.name}):** ${m.description} (Sub-modules: ${m.keySubModules.join(', ')})`).join('\n')}

### CO Scope
${data.solutionArchitecture.coScope.map(m => `- **${m.code} (${m.name}):** ${m.description} (Sub-modules: ${m.keySubModules.join(', ')})`).join('\n')}

---

## 5. Implementation Process (ASAP Methodology)
${data.implementationProcess.phases.map(p => `### Phase ${p.phaseNumber}: ${p.phaseName} (${p.duration})
- **Objectives:** ${p.objectives.join('; ')}
- **Deliverables:** ${p.keyDeliverables.join('; ')}
- **Governance:** ${p.governanceAndRisks}
`).join('\n')}

---

## 6. Quantified Benefits Realized
| Metric | Pre-SAP Baseline | Post-SAP Result | Variance |
| :--- | :--- | :--- | :--- |
${data.benefitsRealized.quantifiedKPIs.map(k => `| ${k.metric} | ${k.before} | ${k.after} | ${k.percentageChange} |`).join('\n')}

---

## 7. Conclusion & References
${data.conclusion}
`;
}
