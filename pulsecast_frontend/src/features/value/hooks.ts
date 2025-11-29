"use client";

import { useCallback, useEffect, useState } from "react";
import { listRunValueSummaries } from "@/api/valueApi";
import type { ApiError } from "@/api/httpClient";
import type { RunValueSummary } from "@/types/domain";

type ValueRunsState = {
  runs: RunValueSummary[] | null;
  loading: boolean;
  error: ApiError | null;
};

export function useValueRuns() {
  const [state, setState] = useState<ValueRunsState>({
    runs: null,
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    listRunValueSummaries()
      .then((runs) => setState({ runs, loading: false, error: null }))
      .catch((err: ApiError) =>
        setState({ runs: null, loading: false, error: err })
      );
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, reload: load };
}
