interface Props {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function AdminHeader({ title, description, action }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-5 border-b border-gray-200">
      <div>
        <div className="flex items-center gap-2">
          <span className="gold-divider" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold">
            Admin
          </span>
        </div>
        <h1 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-brand-black leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}
