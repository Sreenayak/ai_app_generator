interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  options?: Option[];
  selected?: string;
  onChange?: (value: string) => void;
}

export default function RadioField({
  label,
  options = [],
  selected = "",
  onChange,
}: Props) {
  return (
    <div className="space-y-3">
      {label && <label className="font-medium text-slate-200">{label}</label>}
      <div className="space-y-2">
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center">
            <input
              type="radio"
              id={opt.value}
              name={label}
              value={opt.value}
              checked={selected === opt.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-4 h-4 border-slate-600 bg-transparent text-indigo-500"
            />
            <label htmlFor={opt.value} className="ml-2 text-slate-200">
              {opt.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
