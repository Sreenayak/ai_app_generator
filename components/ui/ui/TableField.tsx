interface Column {
  key: string;
  label: string;
}

interface Props {
  columns?: Column[];
  data?: Record<string, any>[];
}

export default function TableField({
  columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
  ],
  data = [
    { name: "John", email: "john@gmail.com" },
    { name: "Jane", email: "jane@gmail.com" },
  ],
}: Props) {
  return (
    <div className="w-full overflow-x-auto bg-slate-900/60 rounded p-3 border border-slate-800/40">
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-3 text-left text-slate-400 font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="odd:bg-transparent even:bg-white/2">
              {columns.map((col) => (
                <td key={`${idx}-${col.key}`} className="p-3 text-slate-100">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}