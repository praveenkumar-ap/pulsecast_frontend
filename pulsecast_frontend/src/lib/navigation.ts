export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    label: "Forecasts",
    href: "/forecasts",
    description: "Outlooks and projections across signals.",
  },
  {
    label: "Scenarios",
    href: "/scenarios",
    description: "What-if experiments and sensitivities.",
  },
  {
    label: "Optimizer",
    href: "/optimizer",
    description: "Surface the best moves given constraints.",
  },
  {
    label: "Alerts",
    href: "/alerts",
    description: "Notifications and guardrails for movements.",
  },
  {
    label: "Indicators",
    href: "/indicators",
    description: "Leading signal health and trends.",
  },
  {
    label: "Monitor",
    href: "/monitor",
    description: "Operational visibility and performance.",
  },
  {
    label: "ROI",
    href: "/roi",
    description: "Impact tracking and payoff dashboards.",
  },
];
