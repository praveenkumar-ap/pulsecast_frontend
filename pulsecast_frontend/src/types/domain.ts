export type ForecastRun = {
  runId: string;
  runType?: string;
  horizonStartMonth?: string;
  horizonEndMonth?: string;
  skusCovered?: number;
  mape?: number;
  wape?: number;
  bias?: number;
  mae?: number;
  mapeVsBaselineDelta?: number;
  wapeVsBaselineDelta?: number;
  computedAt?: string;
};

export type ForecastRunValueImpact = {
  runId: string;
  revUpliftEstimate?: number;
  scrapAvoidanceEstimate?: number;
  wcSavingsEstimate?: number;
  productivitySavingsEstimate?: number;
  assumptionsJson?: string | null;
  computedAt?: string;
};

export type ForecastSeriesPoint = {
  yearMonth: string;
  p10?: number | null;
  p50?: number | null;
  p90?: number | null;
  actualUnits?: number | null;
};

export type ForecastSeries = {
  id: string;
  label: string;
  points: ForecastSeriesPoint[];
};

export type InventoryPolicyType = "BASE_STOCK" | "SS_POLICY" | "MIN_MAX" | "CUSTOM";

export type InventoryPolicy = {
  policyId?: string;
  runId: string;
  scenarioId?: string;
  familyName?: string;
  familyCode?: string;
  skuName?: string;
  skuCode?: string;
  policyType: InventoryPolicyType;
  baseStockLevel?: number;
  s?: number;
  S?: number;
  safetyStock?: number;
  expiryDays?: number;
  substitutionAllowed?: boolean;
  substitutionGroupName?: string | null;
  effectiveFrom: string;
  effectiveTo?: string;
  stockoutRiskPercent?: number;
  scrapRiskPercent?: number;
  demandCoverageMonths?: number;
};

export type InventoryPolicyComparison = {
  current: InventoryPolicy;
  previous?: InventoryPolicy;
  deltaSafetyStock?: number;
  deltaScrapRiskPercent?: number;
};

export type ScenarioStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "APPROVED"
  | "REJECTED"
  | "ACTIVE"
  | "ARCHIVED";

export type ScenarioSummary = {
  scenarioId: string;
  name: string;
  status: ScenarioStatus;
  baseRunId?: string | null;
  upliftPercent?: number | null;
  createdBy: string;
  createdAt: string;
  updatedAt?: string;
};

export type ScenarioDetail = ScenarioSummary & {
  description?: string | null;
  results: ScenarioResultItem[];
  assumptions?: {
    upliftPercent?: number | null;
    notes?: string;
    scope?: {
      type: "ALL" | "FAMILY" | "SKU";
      familyId?: string;
      skuIds?: string[];
    };
    horizon?: {
      fromMonth?: string;
      toMonth?: string;
    };
  };
};

export type ScenarioResultItem = {
  skuId: string;
  yearMonth: string;
  baseRunId?: string | null;
  p10: number;
  p50: number;
  p90: number;
  createdAt: string;
};

export type ScenarioLedgerEntry = {
  ledgerId: string;
  scenarioId: string;
  versionSeq: number;
  actionType:
    | "CREATE"
    | "EDIT"
    | "SUBMIT"
    | "APPROVE"
    | "REJECT"
    | "ARCHIVE"
    | "COMMENT"
    | "RUN_OPTIMIZER";
  actor: string;
  actorRole?: string | null;
  assumptions?: string | null;
  comments?: string | null;
  createdAt: string;
};

export type AlertType =
  | "LEADING_INDICATOR_SPIKE"
  | "DEMAND_SHOCK"
  | "SUPPLY_RISK"
  | "ANOMALY"
  | "THRESHOLD";

export type Alert = {
  alertId: string;
  alertType: AlertType;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  message: string;
  createdAt: string;
  acknowledged?: boolean;
  familyId?: string;
  skuId?: string;
  indicatorId?: string;
};

export type Indicator = {
  indicatorId: string;
  name: string;
  provider: string;
  category: string;
  frequency: string;
  isByo: boolean;
  slaHours?: number;
  license?: string;
};

export type IndicatorFreshnessStatus = {
  indicatorId: string;
  indicatorName: string;
  provider: string;
  lastDataTime: string | null;
  lagHours: number | null;
  slaFreshnessHours: number | null;
  isWithinSla: boolean | null;
};

export type ValueCaseLabel = "CONSERVATIVE" | "BASE" | "STRETCH";

export type RunValueSummary = {
  runId: string;
  caseLabel: ValueCaseLabel;
  revenueUpliftUsd?: number;
  scrapAvoidedUsd?: number;
  workingCapitalSavingsUsd?: number;
  totalValueUsd?: number;
};
