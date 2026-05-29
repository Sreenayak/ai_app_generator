interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export default function EmailField({
  label,
  placeholder = "Enter email",
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
      <input
        type="email"
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-slate-800/40 border border-slate-700/40 text-slate-100 rounded-xl p-3"
      />
    </div>
  );
}
