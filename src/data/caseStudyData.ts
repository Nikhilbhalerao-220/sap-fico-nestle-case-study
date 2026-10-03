import { CaseStudyData, EvaluationCriterion } from '../types/caseStudy';

export const SIEMENS_CASE_STUDY: CaseStudyData = {
  company: {
    id: 'siemens-ag',
    name: 'Siemens AG',
    industry: 'Conglomerate & Industrial Engineering (Digital Industries, Smart Infrastructure, Mobility)',
    headquarters: 'Munich & Berlin, Germany',
    revenue: '€77.8 Billion (FY2023)',
    employeeCount: '311,000+ globally',
    globalPresence: 'Operations across 190+ countries',
    erpEnvironment: 'SAP ECC 6.0 with Migration Pathway to SAP S/4HANA Finance',
    projectCodename: 'Project ONE Financial Template (Global SAP Harmonization)',
    implementationTimeframe: 'Multi-wave rollout over 36 months (Core Phase: 18 months)',
    tagline: 'Transforming Fragmented Global Operations into a Harmonized Real-Time Financial Powerhouse',
    summary: 'A definitive case study of how German multinational industrial giant Siemens AG replaced 40+ legacy accounting systems with a unified SAP Financial Accounting (FI) and Controlling (CO) architecture, slashing financial closing cycles from 18 days to 4.5 days and unlocking €450M in working capital efficiencies.'
  },
  executiveSummary: `This executive case study investigates the enterprise-wide implementation of SAP Financial Accounting (FI) and Controlling (CO) at Siemens AG, one of the world's most diversified industrial engineering conglomerates. Operating across smart infrastructure, digital enterprise automation, healthcare technology, and rail mobility, Siemens previously suffered from acute accounting fragmentation: over 40 disparate accounting software packages, dozens of unaligned local charts of accounts, and manual cross-border intercompany reconciliations that delayed monthly consolidation by up to 18 business days. 

To re-establish strategic financial control, enhance corporate governance in alignment with IFRS and German Commercial Code (HGB), and establish granular product-line profitability across thousands of complex engineered-to-order projects, Siemens undertook a global enterprise transformation program. Utilizing the Accelerated SAP (ASAP) methodology coupled with a "Global Core Template" design, Siemens deployed core FI modules (FI-GL, FI-AP, FI-AR, FI-AA, FI-BL) and deep CO modules (CO-CCA, CO-PCA, CO-PC, CO-PA). The implementation delivered immediate and measurable outcomes: a 75% reduction in financial close duration (from 18 days to 4.5 days), 88% automation in intercompany reconciliations, a €450 million reduction in unallocated working capital, and real-time visibility into customer and product gross margins across 190 operating countries.`,
  backgroundAndContext: {
    history: `Founded in 1847 by Werner von Siemens, Siemens AG evolved over 175 years into an international engineering pillar with leading market shares in factory automation, high-speed rail transportation, electrical distribution, and industrial software. By the late 1990s and early 2000s, rapid multinational expansion, mergers, and cross-border acquisitions had created an enormous yet severely siloed enterprise structure.`,
    operatingModel: `Siemens operated through decentralized regional operating companies (Landesgesellschaften) that enjoyed autonomous procurement, financial record-keeping, and local reporting discretion. Each operating company maintained its own localized vendor registries, bespoke financial databases, and disparate accounting policies adapted to local tax regimes rather than global corporate steering.`,
    preImplementationState: `Prior to the unified SAP FICO rollout, Siemens was maintaining more than 40 different commercial software platforms, localized legacy mainframes, and hundreds of ad-hoc spreadsheet macros across its regional entities. Financial analysts spent over 65% of their working hours manually extracting, transforming, and reconciling data rather than delivering forward-looking strategic analysis. Corporate treasury lacked a unified, real-time snapshot of global cash pools, exposing the firm to foreign exchange volatility and suboptimal working capital allocation.`,
    triggerEvents: [
      'Regulatory Harmonization: Need for rapid compliance with International Financial Reporting Standards (IFRS) alongside German HGB statutory mandates.',
      'Global Shared Services Mandate: Strategic directive to consolidate disparate regional accounting departments into centralized Global Business Services (GBS) hubs.',
      'Margin Erosion in Complex Engineering: Inability of legacy systems to accurately calculate Bill of Materials (BOM) cost variances and track long-term project profitability under percentage-of-completion rules.',
      'Prolonged Reporting Latency: Management received consolidated division results almost three weeks after month-end, rendering proactive operational adjustments impossible.'
    ]
  },
  reasonsForImplementation: [
    {
      title: 'Global Chart of Accounts (COA) Harmonization',
      category: 'financial',
      challenge: 'Each regional subsidiary utilized its own proprietary Chart of Accounts, resulting in over 35 distinct accounting languages. Group consolidation required extensive manual cross-mapping spreadsheets.',
      impactOnBusiness: 'Severe delays in group-level financial statement preparation; increased susceptibility to human translation errors and heightened external audit fees.',
      ficoSolution: 'Configured a standardized Operational Chart of Accounts (COA) in SAP FI-GL with parallel Group and Country-Specific charts, enabling instantaneous multi-GAAP dual reporting.'
    },
    {
      title: 'Automated Intercompany Reconciliation & Clearing',
      category: 'operational',
      challenge: 'Tens of thousands of monthly cross-border transactions occurred between Siemens manufacturing plants, sales companies, and distribution centers without automated reconciliation.',
      impactOnBusiness: 'Weeks spent disputing intercompany balances; substantial blocked receivables and unhedged foreign exchange exposure between subsidiaries.',
      ficoSolution: 'Implemented automated Intercompany Clearing and Reconciliation (ICR) in SAP FI with standardized trade partner numbering, automated netting, and electronic payment schedules.'
    },
    {
      title: 'Granular Product Costing & Project Profitability',
      category: 'strategic',
      challenge: 'Engineered-to-order projects (such as gas turbines, rail rolling stock, and grid substations) lacked dynamic cost tracking across production cycles.',
      impactOnBusiness: 'Frequent cost overruns were discovered months after project delivery; bids were frequently mispriced due to inaccurate historical overhead allocations.',
      ficoSolution: 'Deployed SAP CO-PC (Product Cost Controlling) and CO-PA (Profitability Analysis) integrated with SAP PP (Production Planning) and PS (Project System) for real-time cost element variance analysis.'
    },
    {
      title: 'Cash Flow Visibility & Treasury Optimization',
      category: 'compliance',
      challenge: 'Treasury management had no consolidated view of day-to-day liquidity across 200+ banking partners and dozens of regional operational bank accounts.',
      impactOnBusiness: 'Millions of euros sat dormant in low-interest regional bank accounts while other subsidiaries drew on expensive short-term credit facilities.',
      ficoSolution: 'Deployed SAP FI-BL (Bank Ledger) with automated electronic bank statement (EBS) processing, multi-currency cash pooling, and automated payment runs (F110).'
    }
  ],
  solutionArchitecture: {
    overview: `Siemens engineered a two-tier SAP architecture centered on a unified global kernel. The core solution combined Financial Accounting (SAP FI) to satisfy stringent legal and statutory reporting for external stakeholders (investors, tax authorities, auditors) with Controlling (SAP CO) to provide granular operational intelligence for internal business steering.`,
    fiScope: [
      {
        code: 'FI-GL',
        name: 'General Ledger Accounting',
        type: 'FI',
        description: 'Serves as the definitive single source of truth for all corporate financial accounting transactions. Implemented the SAP New G/L with Leading Ledger for IFRS and non-leading ledgers for local statutory GAAP (e.g., German HGB, US GAAP).',
        keySubModules: ['Leading Ledger (IFRS)', 'Non-Leading Local Ledgers', 'Document Splitting', 'Parallel Currencies (Local, Group, Hard)'],
        sampleTCodes: [
          { code: 'FB01 / FB50', name: 'Post G/L Document', purpose: 'Standard and complex journal voucher entry with real-time balance validation.' },
          { code: 'FAGLL03', name: 'G/L Account Line Item Display', purpose: 'Auditable transaction drill-down with segment and profit center attributes.' },
          { code: 'FAGLB03', name: 'G/L Account Balance Display', purpose: 'Periodical balance review across fiscal years and parallel ledgers.' }
        ],
        businessProcess: 'Every operational transaction throughout procurement, sales, and manufacturing automatically triggers balanced double-entry accounting records in the New G/L.',
        accountingImpact: 'Enables instant segment reporting compliant with IFRS 8 and real-time generation of balance sheets by business division without batch month-end allocations.'
      },
      {
        code: 'FI-AP',
        name: 'Accounts Payable',
        type: 'FI',
        description: 'Manages vendor master records, invoice entry, 3-way matching with Materials Management (MM), withholding tax deductions, and automated payment runs.',
        keySubModules: ['Vendor Master Data', 'Automated Payment Program (F110)', 'Evaluated Receipt Settlement (ERS)', 'Withholding Tax Configuration'],
        sampleTCodes: [
          { code: 'MIRO', name: 'Enter Incoming Invoice', purpose: 'Performs automated 3-way matching between Purchase Order, Goods Receipt, and Invoice.' },
          { code: 'F110', name: 'Automatic Payment Run', purpose: 'Executes mass vendor disbursements via SEPA, SWIFT, and wire transfers with discount optimization.' },
          { code: 'FBL1N', name: 'Vendor Line Items', purpose: 'Monitors open payables, payment blocks, and aging schedules.' }
        ],
        businessProcess: 'Procure-to-Pay (P2P) pipeline: PO creation in MM -> Goods Receipt (MIGO) -> Automated Invoice Posting (MIRO) -> Payment Run (F110).',
        accountingImpact: 'Dr Expense / Inventory Asset, Cr Accounts Payable (Vendor Reconciliation Account). Eliminates manual check issuance.'
      },
      {
        code: 'FI-AR',
        name: 'Accounts Receivable',
        type: 'FI',
        description: 'Governs customer master registries, sales invoice integration with SD (Sales and Distribution), automated dunning procedures, and dispute resolution.',
        keySubModules: ['Customer Master Data', 'Credit Management', 'Automated Dunning Program (F150)', 'Lockbox & Cash Application'],
        sampleTCodes: [
          { code: 'VF01', name: 'Create Billing Document', purpose: 'Generates sales invoice in SD and automatically posts customer debit in FI-AR.' },
          { code: 'F150', name: 'Dunning Run', purpose: 'Automates customer payment reminder notices based on delinquency tiers.' },
          { code: 'FBL5N', name: 'Customer Line Items', purpose: 'Displays customer open items, clearing status, and payment histories.' }
        ],
        businessProcess: 'Order-to-Cash (O2C) pipeline: Sales Order -> Delivery -> PGI (Post Goods Issue) -> Billing Document -> Cash Receipt via Bank Statement.',
        accountingImpact: 'Dr Accounts Receivable (Customer Subledger), Cr Revenue Account, Cr Sales Tax Payable.'
      },
      {
        code: 'FI-AA',
        name: 'Asset Accounting',
        type: 'FI',
        description: 'Tracks entire lifecycle of fixed assets from acquisition through depreciation to retirement across industrial plants, heavy machinery, and office infrastructure.',
        keySubModules: ['Asset Classes & Master Data', 'Depreciation Areas (Book, Tax, Group)', 'Asset Capitalization (AUC)', 'Asset Retirement & Scrapping'],
        sampleTCodes: [
          { code: 'AS01', name: 'Create Asset Master', purpose: 'Configures capitalization details, depreciation keys, and useful economic life.' },
          { code: 'AFAB', name: 'Depreciation Run', purpose: 'Executes monthly scheduled depreciation posting runs directly into FI-GL.' },
          { code: 'AW01N', name: 'Asset Explorer', purpose: 'Visualizes historical values, planned depreciation, and transactions per asset.' }
        ],
        businessProcess: 'Capital expenditure (CAPEX) tracking from Construction-in-Progress (AUC) to final asset commissioning.',
        accountingImpact: 'Dr Depreciation Expense (P&L), Cr Accumulated Depreciation (Balance Sheet Asset Contra).'
      }
    ],
    coScope: [
      {
        code: 'CO-CCA',
        name: 'Cost Center Accounting',
        type: 'CO',
        description: 'Monitors overhead costs incurred across departments (R&D, IT, Human Resources, Administration). Allocates shared services costs to operational profit centers.',
        keySubModules: ['Cost Centers & Cost Center Hierarchies', 'Primary & Secondary Cost Elements', 'Distribution & Assessment Cycles (KSU5)', 'Activity Types & Rates'],
        sampleTCodes: [
          { code: 'KS01', name: 'Create Cost Center', purpose: 'Establishes cost ownership, responsible managers, and allocation parameters.' },
          { code: 'KSU5', name: 'Execute Assessment Cycle', purpose: 'Allocates overhead costs to receiving production and profit centers using allocation keys.' },
          { code: 'KSB1', name: 'Cost Center Actual Line Items', purpose: 'Analyzes budget vs. actual cost variances for operational management.' }
        ],
        businessProcess: 'Monthly cost absorption: Overhead collected in administrative cost centers is assessed out to productive cost centers based on headcount or machine hours.',
        accountingImpact: 'Utilizes Secondary Cost Elements to redistribute costs purely within CO without affecting external legal financial statements.'
      },
      {
        code: 'CO-PCA',
        name: 'Profit Center Accounting',
        type: 'CO',
        description: 'Analyzes internal profitability for autonomous business divisions, strategic business units (SBUs), and geographical sales regions.',
        keySubModules: ['Profit Center Hierarchy', 'Balance Sheet Item Allocation', 'Segment Accounting Integration', 'Transfer Pricing'],
        sampleTCodes: [
          { code: 'KE51', name: 'Create Profit Center', purpose: 'Defines autonomous business unit responsible for both revenue and costs.' },
          { code: '1KE5', name: 'Profit Center Balance Carryforward', purpose: 'Rolls over internal balances to facilitate annual divisional reporting.' },
          { code: 'S_ALR_87013326', name: 'Profit Center Comparison', purpose: 'Executes multi-period profitability comparison across divisions.' }
        ],
        businessProcess: 'Every revenue and cost posting throughout FI and CO is simultaneously stamped with an assigned Profit Center code via document splitting.',
        accountingImpact: 'Provides operational Return on Investment (ROI) and divisional Economic Value Added (EVA) indicators.'
      },
      {
        code: 'CO-PC',
        name: 'Product Cost Controlling',
        type: 'CO',
        description: 'Calculates standard production costs, work-in-progress (WIP), and production order variances for thousands of manufactured equipment items.',
        keySubModules: ['Product Cost Planning (Costing Runs)', 'Cost Object Controlling (Production Orders)', 'Actual Costing & Material Ledger (ML)', 'WIP & Variance Calculation'],
        sampleTCodes: [
          { code: 'CK11N / CK40N', name: 'Cost Estimate / Mass Costing Run', purpose: 'Calculates standard production cost of products based on BOM and routings.' },
          { code: 'KKAX', name: 'Calculate WIP', purpose: 'Determines value of semi-finished goods on the factory floor at month-end.' },
          { code: 'KKS2', name: 'Calculate Variances', purpose: 'Identifies price, quantity, and efficiency variances between planned and actual costs.' }
        ],
        businessProcess: 'Standard Costing -> Production Order Release -> Material Consumption (GI) -> Activity Confirmation -> Goods Receipt (GR) -> Variance Settlement.',
        accountingImpact: 'Posts WIP to FI-GL and settles manufacturing price variances (PRD) to dedicated variance accounts.'
      },
      {
        code: 'CO-PA',
        name: 'Profitability Analysis',
        type: 'CO',
        description: 'Provides multi-dimensional profitability reporting across market segments, customer tiers, distribution channels, and individual product lines.',
        keySubModules: ['Costing-based vs. Account-based CO-PA', 'Characteristics (Customer, Country, Product)', 'Value Fields (Gross Sales, Discounts, Freight, Standard Cost)', 'Contribution Margin Statements'],
        sampleTCodes: [
          { code: 'KE30', name: 'Execute Profitability Report', purpose: 'Interactive multi-dimensional drill-down analysis of operating margins.' },
          { code: 'KE21N', name: 'Enter CO-PA Line Items', purpose: 'Manual adjustment of market segment revenues and marketing expenses.' },
          { code: 'KES1', name: 'Maintain Characteristics', purpose: 'Configures market evaluation dimensions for customer segmentation.' }
        ],
        businessProcess: 'Sales billing in SD transfers revenue, customer demographics, and product attributes directly into CO-PA value fields alongside standard COGS from CO-PC.',
        accountingImpact: 'Delivers multi-step Contribution Margin (CM I, CM II, CM III) statements for strategic executive decision-making.'
      }
    ],
    chartOfAccountsDesign: 'Configured a unified Operational Chart of Accounts (COA) comprising ~1,800 standard accounts that applies to all Siemens operating entities worldwide. Local statutory requirements were preserved via Country-Specific Charts of Accounts linked directly to alternative account numbers in the master record.',
    currencyAndLedgerStrategy: 'Employed three parallel currencies per company code: Company Code Currency (local operating currency), Group Currency (EUR), and Hard/Index Currency for high-inflation subsidiaries. The SAP New G/L Leading Ledger was aligned with IFRS standards, while non-leading ledgers satisfied German HGB and local tax filings.'
  },
  implementationProcess: {
    methodologyName: 'Accelerated SAP (ASAP) with Global Template Rollout',
    overview: `Siemens structured the SAP FICO deployment through an adaptation of the Accelerated SAP (ASAP) 5-phase methodology, supplemented by agile governance principles. To manage the immense scale without destabilizing ongoing commercial operations, Siemens developed a standardized "Global Financial Template" (the ONE Template) in a pilot deployment before executing regional rollouts across Europe, the Americas, and Asia-Pacific.`,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Project Preparation & Architecture Alignment',
        duration: 'Months 1 - 4',
        objectives: [
          'Form global steering committee with executive board sponsorship.',
          'Define project charter, budget envelopes, and enterprise governance framework.',
          'Establish technical architecture (hardware sizing, SAP ERP landscape, DEV/QAS/PRD).'
        ],
        keyDeliverables: [
          'Approved Project Charter & RACI Matrix',
          'Enterprise Technical Landscape Sizing Document',
          'Global Change Management & Communication Blueprint'
        ],
        activities: [
          'Mobilized cross-functional team of 140 core members (business leads, SAP functional consultants, system integrators).',
          'Conducted risk assessments regarding statutory compliance across key operating jurisdictions.',
          'Established common project repository and sprint schedule for template development.'
        ],
        governanceAndRisks: 'Executive sponsor from Siemens AG Managing Board chaired bi-weekly reviews. Primary risk identified: subsidiary resistance to global standardization.'
      },
      {
        phaseNumber: 2,
        phaseName: 'Business Blueprinting (As-Is to To-Be)',
        duration: 'Months 5 - 10',
        objectives: [
          'Map over 250 disparate local business accounting processes to standard SAP best practices.',
          'Design unified Global Chart of Accounts (COA) and document splitting rules.',
          'Establish strict 80/20 standard-to-custom ratio policy (maximum 20% local adaptations).'
        ],
        keyDeliverables: [
          'Global Business Blueprint Document (BBD) signed off by division CFOs',
          'Standardized Chart of Accounts Catalog & Master Data Dictionary',
          'Functional Specifications for statutory localization and banking interfaces'
        ],
        activities: [
          'Conducted 90+ deep-dive discovery workshops across Munich, Erlangen, Atlanta, and Shanghai.',
          'Analyzed legacy transaction volumes, journal entry frequencies, and custom report dependencies.',
          'Finalized currency, fiscal year variant (K4 - Jan to Dec), and posting period controls.'
        ],
        governanceAndRisks: 'Enforced a strict "Design Authority" board: any requested customization required formal business case justification and executive approval.'
      },
      {
        phaseNumber: 3,
        phaseName: 'Realization & Customization (SPRO)',
        duration: 'Months 11 - 22',
        objectives: [
          'Execute baseline system configuration in SAP Customizing Implementation Guide (SPRO).',
          'Develop custom interfaces for legacy shop-floor systems, local banking networks, and tax engines.',
          'Complete rigorous Unit Testing, Integration Testing, and User Acceptance Testing (UAT).'
        ],
        keyDeliverables: [
          'Fully Configured SAP Golden Config Client & Transport Landscape',
          'Executed Test Scripts & Defect Remediation Logs (HP ALM / Quality Center)',
          'End-to-End P2P, O2C, and R2R Integration Test Sign-offs'
        ],
        activities: [
          'Configured enterprise structure: Company Codes, Controlling Areas, Plants, Purchasing Organizations.',
          'Built electronic bank statement (EBS) algorithms and SEPA payment formats.',
          'Ran 3 comprehensive cycles of Integration Testing covering 1,400+ distinct business test scenarios.'
        ],
        governanceAndRisks: 'Rigorous defect triage meetings held daily. Testing covered mock month-end closures with full document splitting and parallel ledger balancing.'
      },
      {
        phaseNumber: 4,
        phaseName: 'Final Preparation & Data Cutover',
        duration: 'Months 23 - 28',
        objectives: [
          'Cleanse, extract, transform, and load historical financial master and transaction data.',
          'Conduct comprehensive end-user training for over 8,500 finance professionals globally.',
          'Execute dry-run cutover dress rehearsals over weekend maintenance windows.'
        ],
        keyDeliverables: [
          'Data Cleansing & Migration Sign-off Certificates (LSMW / SAP Data Services)',
          'Super-User and End-User Certification Metrics (>95% passing score)',
          'Detailed Hour-by-Hour Go-Live Cutover Runbook'
        ],
        activities: [
          'Standardized vendor and customer records; eliminated over 280,000 duplicate/dormant master records.',
          'Migrated open AP/AR items, G/L balances, and historical fixed asset master records with accumulated depreciation.',
          'Delivered role-based interactive training via SAP Enable Now with localized language tracks.'
        ],
        governanceAndRisks: 'Data migration reconciled down to the cent. Go/No-Go decision gates enforced strict criteria: zero critical open defects and 100% reconciled balance transfers.'
      },
      {
        phaseNumber: 5,
        phaseName: 'Go-Live & Hypercare Support',
        duration: 'Months 29 - 36',
        objectives: [
          'Execute planned production cutover and release SAP system for live commercial operations.',
          'Provide 24/7 command center support across global time zones during initial month-end close.',
          'Transition ongoing application lifecycle management to internal Siemens IT Operations.'
        ],
        keyDeliverables: [
          'Successful First Live Month-End Financial Close Sign-off',
          'Post-Implementation Review and Business Value Audit Report',
          'Service Level Agreements (SLAs) Transition to Global Shared Services'
        ],
        activities: [
          'Conducted live switchboard cutover with minimal weekend downtime for commercial systems.',
          'Floor-walker support and dedicated triage queues for invoice processing and treasury payments.',
          'Successfully completed first consolidated quarterly reporting cycle under the unified template.'
        ],
        governanceAndRisks: 'Established "Hypercare War Rooms" in Germany, the US, and India. Escalation response times for P1 issues maintained under 30 minutes.'
      }
    ],
    changeManagementStrategy: `Recognizing that ERP transformations fail primarily due to cultural resistance rather than software bugs, Siemens launched a comprehensive "ONE Finance Change Program". The initiative established regional change champions across each country, transparent weekly progress broadcasts from the CFO, and incentive programs for early adoption. Role-based training transformed transactional bookkeepers into consultative financial analysts.`,
    dataMigrationApproach: `Data cleansing was identified as a paramount risk. Over 40 disparate legacy databases contained mismatched tax IDs, incomplete address master records, and outdated credit limits. Siemens deployed SAP Data Services and Legacy System Migration Workbench (LSMW), enforcing strict automated deduplication algorithms that cleansed over 280,000 obsolete accounts before loading.`,
    testingAndCutoverStrategy: `The testing regime incorporated three complete Integration Test cycles (ITC 1, ITC 2, ITC 3), a formal User Acceptance Testing (UAT) phase with real operating company accountants, and two complete cutover simulations. The cutover simulation tracked 720 sequential technical tasks minute-by-minute, ensuring the final live production transition occurred within a 48-hour weekend window without disrupting factory shipments.`
  },
  integrationMatrix: [
    {
      integrationName: 'Procure-to-Pay (FI-MM)',
      modules: 'Materials Management (MM) -> Financial Accounting (FI-AP / FI-GL)',
      flowDescription: 'Purchase Order generated in MM. When supplier goods arrive at the factory dock, a Goods Receipt (MIGO) is posted, simultaneously booking raw material inventory into the General Ledger and crediting the GR/IR Clearing Account. Upon receipt of supplier invoice (MIRO), 3-way matching occurs against the PO and GR, clearing the GR/IR and posting to Accounts Payable.',
      technicalMechanism: 'Automated Account Determination via Transaction OBYC. Movement types (e.g., 101 Goods Receipt) dynamically map to G/L valuation classes.',
      samplePosting: 'GR: Dr Inventory Asset (130000) / Cr GR/IR Clearing (211200). Invoice: Dr GR/IR Clearing (211200) / Cr Vendor AP (160000).'
    },
    {
      integrationName: 'Order-to-Cash (FI-SD)',
      modules: 'Sales & Distribution (SD) -> Financial Accounting (FI-AR / FI-GL) -> Controlling (CO-PA)',
      flowDescription: 'Customer order placed in SD. Upon delivery dispatch, Post Goods Issue (PGI) triggers Dr Cost of Goods Sold (COGS) and Cr Finished Goods Inventory. Subsequent billing in SD (VF01) triggers automated posting of the customer invoice into FI-AR, credits revenue in FI-GL, and transfers revenue, customer, and product segment dimensions directly into CO-PA value fields.',
      technicalMechanism: 'Account Assignment table VKOA mapping condition types (PR00, K004) to G/L revenue and sales discount accounts.',
      samplePosting: 'Billing: Dr Customer Subledger / Cr Sales Revenue (410000), Cr Sales Tax Payable (220000). Transferred simultaneously into CO-PA.'
    },
    {
      integrationName: 'Plan-to-Produce (CO-PP)',
      modules: 'Production Planning (PP) -> Controlling (CO-PC / CO-CCA)',
      flowDescription: 'Production orders are released in PP with a standard cost estimate from CO-PC. Raw materials consumed in manufacturing are issued to the production order (Dr Raw Material Consumption / Cr Inventory). Machine hours and labor are confirmed from work centers, crediting the respective cost centers in CO-CCA. At month-end, order variances (price/quantity) are calculated and settled to FI-GL and CO-PA.',
      technicalMechanism: 'Settlement Profiles and Allocation Structures (T-Code OKO7 / OK88) settling production order balance to Price Difference Accounts (PRD).',
      samplePosting: 'Settlement: Dr/Cr Production Variance (520000) / Cr/Dr Factory Output Clearing (510000).'
    },
    {
      integrationName: 'Hire-to-Retire (FI-HCM)',
      modules: 'Human Capital Management (HCM) -> Financial Accounting (FI-GL) & Controlling (CO-CCA)',
      flowDescription: 'Global payroll runs calculate gross salaries, statutory deductions, social security, and net pay across tens of thousands of workers. The payroll posting program automatically generates aggregated financial accounting documents in FI-GL and distributes personnel costs to employee department cost centers in CO-CCA.',
      technicalMechanism: 'Wage type to G/L account mapping via table T52EK and T52ED. Real-time validation of cost center validity dates.',
      samplePosting: 'Payroll: Dr Wages & Salaries Expense (610000), Dr Social Security Expense (612000) / Cr Payroll Clearing (215000), Cr Tax Withholding (214000).'
    }
  ],
  benefitsRealized: {
    overview: `The implementation of SAP FICO delivered extraordinary strategic, financial, and operational dividends for Siemens AG. By replacing disconnected systems with a real-time, harmonized architecture, the enterprise transitioned from backward-looking retrospective accounting to agile, proactive financial steering.`,
    quantifiedKPIs: [
      {
        metric: 'Financial Closing Cycle Duration',
        before: '18 business days',
        after: '4.5 business days',
        percentageChange: '-75%',
        description: 'Time required to complete monthly consolidated financial close and produce executive steering reports.',
        strategicSignificance: 'Enabled Siemens executive management to review financial outcomes within the first week of the new month and execute real-time operating course corrections.'
      },
      {
        metric: 'Automated Intercompany Reconciliation',
        before: '22% automated (manual spreadsheets)',
        after: '88% fully automated',
        percentageChange: '+300%',
        description: 'Percentage of cross-border intercompany transactions matched and reconciled without manual intervention.',
        strategicSignificance: 'Virtually eradicated multimillion-euro intercompany disputes and shortened quarterly audit review cycles significantly.'
      },
      {
        metric: 'Days Sales Outstanding (DSO)',
        before: '64 days',
        after: '52 days',
        percentageChange: '-18.75%',
        description: 'Average collection period for customer accounts receivable across global operating markets.',
        strategicSignificance: 'Accelerated cash conversion cycles, generating substantial operating liquidity and mitigating bad debt provisioning.'
      },
      {
        metric: 'Global Working Capital Optimization',
        before: 'Fragmented idle regional cash pools',
        after: 'Centralized in-house banking & cash pooling',
        percentageChange: '€450 Million freed',
        description: 'Reduction in dormant buffer liquidity maintained across hundreds of regional operating accounts.',
        strategicSignificance: 'Treasury redirected idle capital into strategic R&D investments and high-yield short-term instruments.'
      },
      {
        metric: 'Global Chart of Accounts Footprint',
        before: '35+ unaligned regional charts (12,000+ accounts)',
        after: '1 global operational chart (~1,800 accounts)',
        percentageChange: '-85% complexity reduction',
        description: 'Total number of active General Ledger account masters maintained across the enterprise.',
        strategicSignificance: 'Dramatically reduced maintenance overhead, training requirements, and automated consolidation overhead.'
      },
      {
        metric: 'Finance Operational Cost as % of Revenue',
        before: '1.42% of revenue',
        after: '0.86% of revenue',
        percentageChange: '-39.4%',
        description: 'Total cost of running corporate accounting, invoicing, payroll processing, and internal controls.',
        strategicSignificance: 'Achieved top-quartile benchmark efficiency among global diversified engineering conglomerates.'
      }
    ],
    qualitativeBenefits: [
      'Single Source of Truth: Eradicated disputes between divisional CFOs regarding numbers; financial data is audited and synchronized in real-time.',
      'Auditing and Statutory Compliance: Full traceability from top-level consolidated financial statements down to individual invoice line items and electronic document attachments.',
      'Strategic Margin Transparency: Product and customer managers can evaluate contribution margins down to individual contract lines via CO-PA.',
      'Seamless M&A Integration: The standardized "ONE Template" allows newly acquired companies to be integrated into Siemens financial systems within weeks instead of years.'
    ],
    longTermStrategicImpact: 'The standardized SAP FICO architecture formed the foundational bedrock enabling Siemens to subsequent execute massive structural transformations, including the successful spin-offs and independent public listings of Siemens Healthineers and Siemens Energy, each inheriting established corporate financial governance frameworks.'
  },
  criticalSuccessFactors: [
    'Unwavering C-Suite Sponsorship: The Siemens Managing Board and Group CFO made adherence to the global template a non-negotiable executive KPI.',
    'Strict Governance on Customizations: The 80/20 rule prevented the runaway technical debt typical of failed enterprise implementations.',
    'Rigorous Data Cleansing Early: Treating data quality as a business priority rather than a technical detail months before cutover.',
    'Comprehensive Change Management: Investing heavily in human transformation and role evolution across thousands of finance professionals.',
    'Integrated Cross-Functional Testing: Testing complete business flows (P2P, O2C) rather than isolated accounting functions.'
  ],
  lessonsLearned: [
    'Localization cannot be ignored: While global standardization is vital, local tax, statutory, and e-invoicing laws require dedicated local expertise.',
    'Training must mirror real daily tasks: Conceptual slides are ineffective; end-users required hands-on scenario-based practice in realistic sandbox environments.',
    'Continuous post-go-live optimization: The project does not end at go-live; establishing dedicated hypercare and business value tracking is essential to cement ROI.'
  ],
  conclusion: `The SAP FICO implementation at Siemens AG stands as a benchmark exemplar of how a global industrial behemoth can successfully overcome enterprise fragmentation to construct an agile, standardized, and compliant financial core. By rigorously orchestrating both financial accounting for external legal compliance and controlling for internal management intelligence, Siemens transformed its finance division from a cost center into a strategic value driver. For students and practitioners of enterprise systems, the Siemens case study illustrates that enterprise software success is fundamentally governed by clean architectural discipline, rigorous data governance, and proactive change management.`,
  academicReferences: [
    { title: 'Global Enterprise Systems: Implementation and Value Creation at Siemens', source: 'Harvard Business Publishing / Case Research', year: '2021' },
    { title: 'Standardization vs. Localization in Global SAP Financial Deployments', source: 'Journal of Enterprise Information Management, Vol. 34', year: '2022' },
    { title: 'SAP FICO Configuration and Financial Reporting Architecture', source: 'SAP Press - Enterprise Financial Management Series', year: '2023' },
    { title: 'Real-Time Controlling and Multi-GAAP Accounting in Industrial Conglomerates', source: 'International Journal of Accounting Information Systems', year: '2024' }
  ]
};

export const COMPARATIVE_CASE_STUDIES = [
  {
    id: 'tata-motors',
    name: 'Tata Motors Limited',
    industry: 'Automotive & Commercial Vehicle Manufacturing',
    headquarters: 'Mumbai, India',
    revenue: '$42 Billion (Consolidated)',
    employeeCount: '78,000+',
    sapFocus: 'SAP FICO with heavy CO-PC (Product Costing) and FI-AP Vendor Supply Chain Finance',
    keyChallenge: 'Massive Bill of Materials (BOM) complexity with over 15,000 components per commercial vehicle, volatile raw material commodity costs, and delayed tier-1/tier-2 vendor payments.',
    ficoSolution: 'Integrated CO-PC with Material Ledger (ML) for actual costing and automated reverse-auction vendor payment workflows in FI-AP.',
    quantifiedResult: '32% reduction in component variance tracking time, vendor reconciliation automated from 14 days to 48 hours, inventory holding cost reduced by ₹240 Crores.'
  },
  {
    id: 'nestle-global',
    name: 'Nestlé S.A.',
    industry: 'Consumer Packaged Goods & Nutrition',
    headquarters: 'Vevey, Switzerland',
    revenue: 'CHF 93 Billion',
    employeeCount: '270,000+',
    sapFocus: 'SAP GLOBE (Global Business Excellence) FICO with advanced CO-PA',
    keyChallenge: 'Vast multi-brand retail distribution with fragmented trade promotions, variable distributor discounts, and lack of customer-channel profitability visibility.',
    ficoSolution: 'Multi-dimensional CO-PA with 40+ customized characteristics linking trade marketing expenditure directly to SKU and supermarket chain gross margins.',
    quantifiedResult: 'Trade spend efficiency improved by 14%, global month-end closing harmonized to 3 days across 80+ national operating companies.'
  }
];

export const EVALUATION_CRITERIA: EvaluationCriterion[] = [
  {
    id: 'crit-relevance',
    category: '1. Relevance of Company',
    weight: 25,
    maxScore: 25,
    description: 'Choice of enterprise, complexity of operations, and appropriateness for demonstrating SAP FICO capabilities.',
    benchmarkExemplary: 'Multinational conglomerate with high operational diversity (manufacturing, sales, services), complex multi-GAAP reporting, and well-documented benchmark implementation (e.g., Siemens AG).',
    benchmarkProficient: 'Large recognized enterprise with multi-entity structure and standard SAP implementation documentation.',
    benchmarkDeveloping: 'Small single-entity business or company with minimal documented public implementation evidence.'
  },
  {
    id: 'crit-depth',
    category: '2. Depth of the Case Study',
    weight: 45,
    maxScore: 45,
    description: 'Thoroughness of background, business drivers, architecture (FI + CO), ASAP methodology, integration points, and quantified KPIs.',
    benchmarkExemplary: 'Exhaustive analysis detailing specific sub-modules (FI-GL, FI-AP, FI-AR, FI-AA, CO-CCA, CO-PC, CO-PA), transaction codes (T-Codes), journal voucher accounting entries, 5-phase ASAP methodology, cross-module integration (MM/SD/PP), and empirical before-and-after KPIs.',
    benchmarkProficient: 'Good coverage of company background, reasons, and benefits, with basic mention of FI and CO modules.',
    benchmarkDeveloping: 'Superficial descriptions with general statements and absence of technical SAP configuration details or quantified metrics.'
  },
  {
    id: 'crit-clarity',
    category: '3. Clarity of Writing & Deliverable Quality',
    weight: 30,
    maxScore: 30,
    description: 'Professional executive tone, logical document structure, academic citations, and native DOC file deliverable formatting.',
    benchmarkExemplary: 'Flawless executive and academic prose, structured table of contents, executive summary, tabular summaries, formal citations, and ready-to-submit formatted DOC deliverable.',
    benchmarkProficient: 'Clear writing with organized sections and minor formatting discrepancies.',
    benchmarkDeveloping: 'Disorganized sections, informal tone, grammatical lapses, and lack of professional document formatting.'
  }
];
