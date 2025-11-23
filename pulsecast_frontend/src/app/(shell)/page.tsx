import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Stat } from "@/components/ui/Stat";

const quickLinks = [
  { label: "Forecasts", href: "/forecasts", summary: "Update outlooks and align assumptions." },
  { label: "Scenarios", href: "/scenarios", summary: "Run sensitivities to stress key levers." },
  { label: "Optimizer", href: "/optimizer", summary: "Pick the next move given constraints." },
  { label: "Alerts", href: "/alerts", summary: "Tighten guardrails for sudden changes." },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workspace"
        title="PulseCast Overview"
        description="A single surface to explore forecasts, run scenarios, and keep every signal accountable."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Live signals" value="42" delta="+5 this week" tone="positive" />
        <Stat label="Experiments" value="8" delta="3 running" tone="neutral" />
        <Stat label="Alerts watching" value="16" delta="2 escalated" tone="negative" />
        <Stat label="Avg. ROI delta" value="+12.4%" delta="QoQ" tone="positive" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card
          title="Priorities for this cycle"
          subtitle="Keep these flows warm as you iterate."
          actions={
            <Link
              className="text-sm font-semibold text-primary hover:text-primary-strong"
              href="/optimizer"
            >
              Open optimizer →
            </Link>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-heading">
                Refresh demand curves
              </p>
              <p className="mt-1 text-sm text-muted">
                Pull the newest signals for Q3 and rerun the optimistic case.
              </p>
              <p className="mt-3 text-xs text-primary">Due: Today</p>
            </div>
            <div className="rounded-xl border border-border bg-white/[0.02] p-4">
              <p className="text-sm font-semibold text-heading">
                Scenario bake-off
              </p>
              <p className="mt-1 text-sm text-muted">
                Compare baseline vs. constrained spend and ship the diff.
              </p>
              <p className="mt-3 text-xs text-primary">Due: Tomorrow</p>
            </div>
          </div>
        </Card>

        <Card title="Health snapshot" subtitle="Signals holding steady across the stack.">
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-center justify-between">
              <span>Data latency</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
                Good
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Scenario freshness</span>
              <span className="rounded-full bg-amber-500/10 px-2 py-1 text-xs text-amber-400">
                Needs run
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Alert noise</span>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                In range
              </span>
            </li>
          </ul>
        </Card>
      </div>

      <Card
        title="Jump back in"
        subtitle="Routes you’ll reuse for Forecasts, Scenarios, Optimizer, Alerts, Indicators, Monitor, and ROI."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex h-full flex-col justify-between rounded-xl border border-border bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-white/5"
            >
              <div>
                <p className="text-sm font-semibold text-heading">{link.label}</p>
                <p className="mt-1 text-sm text-muted">{link.summary}</p>
              </div>
              <span className="mt-3 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
