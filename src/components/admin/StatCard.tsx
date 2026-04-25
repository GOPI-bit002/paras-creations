interface Props {
  label: string;
  value: string | number;
  icon?: string;
  accent?: "gold" | "black" | "green" | "blue" | "red";
  hint?: string;
}

const accents: Record<NonNullable<Props["accent"]>, string> = {
  gold: "bg-gradient-to-br from-brand-gold to-brand-goldlight text-brand-black",
  black: "bg-brand-black text-white",
  green: "bg-gradient-to-br from-green-500 to-emerald-600 text-white",
  blue: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white",
  red: "bg-gradient-to-br from-rose-500 to-red-600 text-white"
};

export default function StatCard({
  label,
  value,
  icon,
  accent = "gold",
  hint
}: Props) {
  return (
    <div className="card p-5 hover:-translate-y-0.5 transition-transform">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {label}
          </div>
          <div className="mt-2 font-display font-extrabold text-3xl text-brand-black">
            {value}
          </div>
          {hint && <div className="mt-1 text-xs text-gray-500">{hint}</div>}
        </div>
        <div
          className={`h-11 w-11 rounded-lg flex items-center justify-center text-xl shadow-premium ${accents[accent]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
