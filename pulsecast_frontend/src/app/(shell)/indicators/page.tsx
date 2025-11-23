import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const indicators = [
  { name: "Acquisition velocity", trend: "+4.1%", status: "Healthy" },
  { name: "Conversion yield", trend: "-1.3%", status: "Watching" },
  { name: "Support backlog", trend: "+0.6%", status: "Recovering" },
];

export default function IndicatorsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Indicators"
        title="Signal pulse"
        description="Track the leading indicators that influence forecasts, alerts, and optimization."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Import feed
            </Button>
            <Button size="sm">New indicator</Button>
          </div>
        }
      />

      <Card title="Leading indicators" subtitle="Tie them to scenarios and monitors.">
        <div className="grid gap-3 md:grid-cols-3">
          {indicators.map((indicator) => (
            <div
              key={indicator.name}
              className="rounded-xl border border-border bg-white/[0.02] p-4"
            >
              <p className="text-sm font-semibold text-heading">{indicator.name}</p>
              <p className="mt-1 text-sm text-muted">Trend: {indicator.trend}</p>
              <p className="mt-3 text-xs text-primary">{indicator.status}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Quality checks"
        subtitle="Keep indicator freshness and coverage high."
        actions={<Button size="sm">Add check</Button>}
      >
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>• Missing data tolerance and fill strategies.</li>
          <li>• Correlation drift against canonical sources.</li>
          <li>• SLA alerts for ingestion paths.</li>
          <li>• Ownership map for key signals.</li>
        </ul>
      </Card>
    </div>
  );
}
