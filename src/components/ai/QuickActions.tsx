"use client";

import type { AIQuickAction } from "@/types/ai";

interface Props {
  actions: AIQuickAction[];
  onPick: (action: AIQuickAction) => void;
  disabled?: boolean;
}

export default function QuickActions({ actions, onPick, disabled }: Props) {
  return (
    <div className="px-3.5 pt-2 pb-1">
      <div className="text-[10px] uppercase tracking-[0.18em] text-brand-gold/80 font-semibold mb-2">
        Quick actions
      </div>
      <div className="flex flex-wrap gap-1.5">
        {actions.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onPick(a)}
            disabled={disabled}
            className="text-[11.5px] font-medium px-2.5 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/[0.08] text-brand-goldlight hover:bg-brand-gold/20 hover:border-brand-gold/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}
