interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${
            light ? "text-brand-gold" : "text-brand-gold"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
