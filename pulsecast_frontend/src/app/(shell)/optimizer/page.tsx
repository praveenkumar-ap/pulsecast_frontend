import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const recommendations = [
  {
    title: "Shift 5% from paid social → organic activation",
    impact: "+3.4% ROI",
    status: "Ready",
  },
  { title: "Throttle low-signal regions", impact: "+1.2% ROI", status: "Draft" },
  { title: "Unify churn + demand forecasts", impact: "+0.8% ROI", status: "Running" },
];

export default function OptimizerPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Optimizer"
        title="Decision builder"
        description="Let the optimizer surface the best move under your constraints and targets."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Constraints
            </Button>
            <Button size="sm">Run optimizer</Button>
          </div>
        }
      />

      <Card title="Recommendations" subtitle="Generated from your latest constraints.">
        <div className="space-y-3">
          {recommendations.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-xl border border-border bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-heading">{item.title}</p>
                <p className="text-sm text-muted">Status: {item.status}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.impact}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Guardrails"
        subtitle="Keep outputs inside the lines you set."
        actions={<Button size="sm">Manage</Button>}
      >
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>• Budget envelope with regional caps.</li>
          <li>• Minimum signal quality thresholds.</li>
          <li>• SLA alignment with Monitor triggers.</li>
          <li>• Alert back-pressure rules.</li>
        </ul>
      </Card>
    </div>
  );
}
