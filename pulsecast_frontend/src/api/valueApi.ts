import { get } from "./httpClient";
import type { RunValueSummary } from "@/types/domain";

export async function listRunValueSummaries() {
  return get<RunValueSummary[]>("/value/runs");
}
