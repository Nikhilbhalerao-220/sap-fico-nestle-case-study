export interface CompanyProfile {
  id: string;
  name: string;
  industry: string;
  headquarters: string;
  revenue: string;
  employeeCount: string;
  globalPresence: string;
  erpEnvironment: string;
  projectCodename: string;
  implementationTimeframe: string;
  tagline: string;
  summary: string;
}

export interface BusinessDriver {
  title: string;
  category: 'operational' | 'financial' | 'strategic' | 'compliance';
  challenge: string;
  impactOnBusiness: string;
  ficoSolution: string;
}

export interface FICOModuleDetail {
  code: string;
  name: string;
  type: 'FI' | 'CO';
  description: string;
  keySubModules: string[];
  sampleTCodes: { code: string; name: string; purpose: string }[];
  businessProcess: string;
  accountingImpact: string;
}

export interface ImplementationPhase {
  phaseNumber: number;
  phaseName: string;
  duration: string;
  objectives: string[];
  keyDeliverables: string[];
  activities: string[];
  governanceAndRisks: string;
}

export interface QuantifiedBenefit {
  metric: string;
  before: string;
  after: string;
  percentageChange: string;
  description: string;
  strategicSignificance: string;
}

export interface IntegrationTouchpoint {
  integrationName: string;
  modules: string;
  flowDescription: string;
  technicalMechanism: string;
  samplePosting: string;
}

export interface CaseStudyData {
  company: CompanyProfile;
  executiveSummary: string;
  backgroundAndContext: {
    history: string;
    operatingModel: string;
    preImplementationState: string;
    triggerEvents: string[];
  };
  reasonsForImplementation: BusinessDriver[];
  solutionArchitecture: {
    overview: string;
    fiScope: FICOModuleDetail[];
    coScope: FICOModuleDetail[];
    chartOfAccountsDesign: string;
    currencyAndLedgerStrategy: string;
  };
  implementationProcess: {
    methodologyName: string;
    overview: string;
    phases: ImplementationPhase[];
    changeManagementStrategy: string;
    dataMigrationApproach: string;
    testingAndCutoverStrategy: string;
  };
  integrationMatrix: IntegrationTouchpoint[];
  benefitsRealized: {
    overview: string;
    quantifiedKPIs: QuantifiedBenefit[];
    qualitativeBenefits: string[];
    longTermStrategicImpact: string;
  };
  criticalSuccessFactors: string[];
  lessonsLearned: string[];
  conclusion: string;
  academicReferences: { title: string; source: string; year: string }[];
}

export interface UserCustomization {
  studentName: string;
  studentId: string;
  courseTitle: string;
  submissionDate: string;
  evaluatorName: string;
}

export interface EvaluationCriterion {
  id: string;
  category: string;
  weight: number;
  description: string;
  maxScore: number;
  benchmarkExemplary: string;
  benchmarkProficient: string;
  benchmarkDeveloping: string;
}
