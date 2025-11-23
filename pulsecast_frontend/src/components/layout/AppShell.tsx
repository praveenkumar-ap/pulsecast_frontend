"use client";

import React from "react";
import { navItems } from "@/lib/navigation";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-contrast">
      <TopNav />
      <div className="flex">
        <Sidebar items={navItems} />
        <main className="flex-1 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="mx-auto max-w-6xl space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
