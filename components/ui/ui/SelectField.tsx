interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  options: Option[];
  placeholder?: string;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
}

export default function SelectField({
  label,
  options,
  placeholder,
  multiple = false,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      {label && <label className="font-medium">{label}</label>}
      <select
        multiple={multiple}
        onChange={(e) => {
          if (multiple) {
            const selected = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value
            );
            onChange?.(selected);
          } else {
            onChange?.(e.target.value);
          }
        }}
        className="w-full bg-slate-800/40 border border-slate-700/40 text-slate-100 rounded-xl p-3"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
