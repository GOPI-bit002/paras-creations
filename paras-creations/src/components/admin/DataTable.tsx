import { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface Props<T> {
  columns: Column<T>[];
  rows: T[];
  empty?: string;
}

export default function DataTable<T extends { id: string }>({
  columns,
  rows,
  empty = "No records to display."
}: Props<T>) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-brand-black text-brand-gold">
            <tr>
              {columns.map((c) => (
                <th
                  key={String(c.key)}
                  className={`text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap ${
                    c.className ?? ""
                  }`}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-brand-soft transition-colors"
              >
                {columns.map((c) => (
                  <td
                    key={String(c.key)}
                    className={`px-5 py-4 whitespace-nowrap text-gray-700 ${
                      c.className ?? ""
                    }`}
                  >
                    {c.render
                      ? c.render(row)
                      : String((row as Record<string, unknown>)[String(c.key)] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center text-gray-500 py-10"
                >
                  {empty}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
