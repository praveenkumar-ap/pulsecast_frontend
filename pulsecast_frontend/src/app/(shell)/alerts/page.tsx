import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const alerts = [
  { name: "Demand spike", severity: "High", channel: "Slack", status: "Armed" },
  { name: "Latency drift", severity: "Medium", channel: "PagerDuty", status: "Watching" },
  { name: "Churn anomaly", severity: "Medium", channel: "Email", status: "Paused" },
];

export default function AlertsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Alerts"
        title="Signal guardrails"
        description="Stay ahead of change with alerts tied directly to forecasts, indicators, and monitors."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Noise controls
            </Button>
            <Button size="sm">New alert</Button>
          </div>
        }
      />

      <Card title="Active alerts" subtitle="What’s keeping an eye on your system.">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.name}
              className="flex flex-col justify-between gap-2 rounded-xl border border-border bg-white/[0.02] p-4 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-sm font-semibold text-heading">{alert.name}</p>
                <p className="text-sm text-muted">
                  Severity: {alert.severity} · Channel: {alert.channel}
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {alert.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Playbooks"
        subtitle="Attach follow-up steps when an alert trips."
        actions={<Button size="sm">Add playbook</Button>}
      >
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          <li>• Re-run scenarios tied to the alerting indicator.</li>
          <li>• Escalate to Monitor if SLO impact detected.</li>
          <li>• Trigger optimizer with new guardrail set.</li>
          <li>• Post summary to the #pulsecast channel.</li>
        </ul>
      </Card>
    </div>
  );
}
