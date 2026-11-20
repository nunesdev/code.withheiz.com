export function ComparisonTable({ columns, rows }) {
  return (
    <div className="not-prose overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dimension} className="border-b border-border last:border-0">
              <th className="px-4 py-3 font-medium text-foreground">{row.dimension}</th>
              <td className="px-4 py-3 text-muted-foreground">{row.chosen}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.discarded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}