import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const initiatives = [
  { name: "Activation uplift", owner: "Growth", roi: "+14.2%" },
  { name: "NPS to retention", owner: "Product", roi: "+6.3%" },
  { name: "Cost-to-serve", owner: "Ops", roi: "+3.8%" },
];

export default function RoiPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="ROI"
        title="Impact tracker"
        description="Close the loop between forecasts, scenarios, and realized outcomes."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Export deck
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
