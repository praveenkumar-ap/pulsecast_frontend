"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Table, TableCell, TableRow } from "@/components/ui/Table";
import { useValueRuns } from "@/features/value/hooks";

const initiatives = [
  { name: "Activation uplift", owner: "Growth", roi: "+14.2%" },
  { name: "NPS to retention", owner: "Product", roi: "+6.3%" },
  { name: "Cost-to-serve", owner: "Ops", roi: "+3.8%" },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatCurrency(value?: number) {
  if (value === undefined || value === null) return "—";
  return currency.format(value);
}

export default function RoiPage() {
  const { runs, loading, error, reload } = useValueRuns();
  const [filter, setFilter] = useState("");

  const filteredRuns = useMemo(() => {
    if (!runs) return [];
    const needle = filter.trim().toLowerCase();
    if (!needle) return runs;
    return runs.filter((run) =>
      `${run.runId} ${run.caseLabel}`.toLowerCase().includes(needle)
    );
  }, [filter, runs]);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="ROI"
        title="Impact tracker"
        description="Close the loop between forecasts, scenarios, and realized outcomes."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={reload}>
              Refresh
            </Button>
            <Button size="sm">Log impact</Button>
          </div>
        }
      />

      <Card title="Portfolio" subtitle="Where the value is coming from.">
        <div className="grid gap-3 md:grid-cols-3">
          {initiatives.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-border bg-white/[0.02] p-4"
            >
              <p className="text-sm font-semibold text-heading">{item.name}</p>
              <p className="mt-1 text-sm text-muted">Owner: {item.owner}</p>
              <p className="mt-3 text-xs text-primary">ROI: {item.roi}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Value runs" subtitle="Track realized value by run and case.">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter by run ID or case label"
            className="w-full rounded-lg border border-border bg-panel px-3 py-2 text-sm text-contrast outline-none ring-primary/20 focus:ring-2 sm:w-72"
          />
          {loading && <p className="text-sm text-muted">Loading value runs…</p>}
          {error && (
            <div className="flex items-center gap-2 text-sm text-rose-200">
              <span>Unable to load value runs.</span>
              <Button size="sm" variant="secondary" onClick={reload}>
                Retry
              </Button>
            </div>
          )}
        </div>

        {!loading && !error && filteredRuns.length === 0 && (
          <p className="py-4 text-sm text-muted">No value runs available yet.</p>
        )}

        {!error && filteredRuns.length > 0 && (
          <Table
            headers={[
              "Run ID",
              "Case",
              "Revenue uplift",
              "Scrap avoided",
              "Working capital",
              "Total value",
            ]}
          >
            {filteredRuns.map((run) => (
              <TableRow key={`${run.runId}-${run.caseLabel}`}>
                <TableCell>{run.runId}</TableCell>
                <TableCell>{run.caseLabel}</TableCell>
                <TableCell numeric>
                  {formatCurrency(run.revenueUpliftUsd)}
                </TableCell>
                <TableCell numeric>{formatCurrency(run.scrapAvoidedUsd)}</TableCell>
                <TableCell numeric>
                  {formatCurrency(run.workingCapitalSavingsUsd)}
                </TableCell>
                <TableCell numeric>{formatCurrency(run.totalValueUsd)}</TableCell>
              </TableRow>
            ))}
          </Table>
        )}
      </Card>

      <Card
        title="Next reviews"
        subtitle="Keep stakeholders aligned on realized value."
        actions={<Button size="sm">Schedule review</Button>}
      >
        <ul className="space-y-2 text-sm text-muted">
          <li>• Sync with Finance on quarterly reconciliation.</li>
          <li>• Publish deltas between forecasted vs. realized lift.</li>
          <li>• Push highlights to the exec Monitor view.</li>
        </ul>
      </Card>
    </div>
  );
}
