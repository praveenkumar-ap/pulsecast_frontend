import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const monitors = [
  { name: "Latency SLO", window: "24h", status: "Healthy" },
  { name: "Data freshness", window: "12h", status: "Degraded" },
  { name: "Pipeline throughput", window: "7d", status: "Recovering" },
];

export default function MonitorPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Monitor"
        title="Operational visibility"
        description="Watch the health of pipelines and data products that power PulseCast."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Integrations
            </Button>
            <Button size="sm">New monitor</Button>
          </div>
        }
      />

      <Card title="Active monitors" subtitle="Tie health directly to alerts and forecasts.">
        <div className="grid gap-3 md:grid-cols-3">
          {monitors.map((monitor) => (
            <div
              key={monitor.name}
              className="rounded-xl border border-border bg-white/[0.02] p-4"
            >
              <p className="text-sm font-semibold text-heading">{monitor.name}</p>
              <p className="mt-1 text-sm text-muted">Window: {monitor.window}</p>
              <p className="mt-3 text-xs text-primary">{monitor.status}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Observations"
        subtitle="Use Monitor to feed the Alerts and Optimizer loops."
        actions={<Button size="sm">Log note</Button>}
      >
        <ul className="space-y-2 text-sm text-muted">
          <li>• Freshness dip linked to upstream reprocessing.</li>
          <li>• Pipeline throughput stabilizing after patch.</li>
          <li>• SLO burn remains below threshold.</li>
        </ul>
      </Card>
    </div>
  );
}
