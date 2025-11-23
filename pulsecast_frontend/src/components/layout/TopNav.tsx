"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { HealthBadge } from "@/components/ui/HealthBadge";

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 h-[var(--pc-nav-height)] border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-strong text-heading shadow-card">
            <span className="text-sm font-semibold">PC</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              PulseCast
            </p>
            <p className="text-base font-semibold text-heading">
              Signal Intelligence Console
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <HealthBadge />
          <Button variant="secondary" size="sm">
            Share
          </Button>
          <Button size="sm">New scenario</Button>
        </div>
      </div>
    </header>
  );
}
