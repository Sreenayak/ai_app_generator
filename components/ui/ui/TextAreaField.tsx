interface Props {
  label?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export default function TextAreaField({
  label,
  placeholder,
  rows = 4,
  required = false,
  onChange,
  defaultValue = "",
}: Props) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="font-medium">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-slate-800/40 border border-slate-700/40 text-slate-100 rounded-xl p-3"
      />
    </div>
  );
}
