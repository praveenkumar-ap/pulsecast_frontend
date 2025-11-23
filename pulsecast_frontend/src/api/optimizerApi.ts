import { get } from "./httpClient";
import type { InventoryPolicy, InventoryPolicyComparison } from "@/types/domain";

type ApiPolicy = {
  policy_id?: string;
  run_id: string;
  scenario_id?: string | null;
  family_name?: string | null;
  family_code?: string | null;
  sku_name?: string | null;
  sku_code?: string | null;
  policy_type: string;
  base_stock_level?: number | null;
  s?: number | null;
  S?: number | null;
  safety_stock?: number | null;
  expiry_days?: number | null;
  substitution_allowed?: boolean | null;
  substitution_group_name?: string | null;
  effective_from: string;
  effective_to?: string | null;
  stockout_risk_pct?: number | null;
  scrap_risk_pct?: number | null;
  demand_coverage_months?: number | null;
};

type ApiPolicyComparison = {
  current: ApiPolicy;
  previous?: ApiPolicy | null;
  delta_safety_stock?: number | null;
  delta_scrap_risk_pct?: number | null;
};

type ApiPoliciesResponse = { policies: ApiPolicy[] };
type ApiComparisonResponse = { comparisons: ApiPolicyComparison[] };

function mapPolicy(api: ApiPolicy): InventoryPolicy {
  return {
    policyId: api.policy_id ?? undefined,
    runId: api.run_id,
    scenarioId: api.scenario_id ?? undefined,
    familyName: api.family_name ?? undefined,
    familyCode: api.family_code ?? undefined,
    skuName: api.sku_name ?? undefined,
    skuCode: api.sku_code ?? undefined,
    policyType: (api.policy_type as InventoryPolicy["policyType"]) ?? "CUSTOM",
    baseStockLevel: api.base_stock_level ?? undefined,
    s: api.s ?? undefined,
    S: api.S ?? undefined,
    safetyStock: api.safety_stock ?? undefined,
    expiryDays: api.expiry_days ?? undefined,
    substitutionAllowed: api.substitution_allowed ?? undefined,
    substitutionGroupName: api.substitution_group_name ?? undefined,
    effectiveFrom: api.effective_from,
    effectiveTo: api.effective_to ?? undefined,
    stockoutRiskPercent: api.stockout_risk_pct ?? undefined,
    scrapRiskPercent: api.scrap_risk_pct ?? undefined,
    demandCoverageMonths: api.demand_coverage_months ?? undefined,
  };
}

function mapComparison(api: ApiPolicyComparison): InventoryPolicyComparison {
  return {
    current: mapPolicy(api.current),
    previous: api.previous ? mapPolicy(api.previous) : undefined,
    deltaSafetyStock: api.delta_safety_stock ?? undefined,
    deltaScrapRiskPercent: api.delta_scrap_risk_pct ?? undefined,
  };
}

type ListParams = {
  runId: string;
  scenarioId?: string;
  familyId?: string;
  skuId?: string;
};

export async function listInventoryPolicies(params: ListParams): Promise<InventoryPolicy[]> {
  const search = new URLSearchParams();
  search.set("run_id", params.runId);
  if (params.scenarioId) search.set("scenario_id", params.scenarioId);
  if (params.familyId) search.set("family_id", params.familyId);
  if (params.skuId) search.set("sku_id", params.skuId);
  const qs = search.toString();
  const res = await get<ApiPoliciesResponse>(
    qs ? `/optimizer/recommendations?${qs}` : "/optimizer/recommendations"
  );
  return (res.policies ?? []).map(mapPolicy);
}

type ComparisonParams = {
  runId: string;
  scenarioId?: string;
  previousRunId?: string;
};

export async function listInventoryPolicyComparisons(
  params: ComparisonParams
): Promise<InventoryPolicyComparison[]> {
  const search = new URLSearchParams();
  search.set("run_id", params.runId);
  if (params.scenarioId) search.set("scenario_id", params.scenarioId);
  if (params.previousRunId) search.set("previous_run_id", params.previousRunId);
  const qs = search.toString();

  try {
    const res = await get<ApiComparisonResponse>(
      qs ? `/optimizer/recommendations/compare?${qs}` : "/optimizer/recommendations/compare"
    );
    return (res.comparisons ?? []).map(mapComparison);
  } catch {
    // Comparison endpoint may not exist; fall back gracefully.
    return [];
  }
}

export const optimizerApi = {
  listInventoryPolicies,
  listInventoryPolicyComparisons,
};
