interface Props {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function CheckboxField({
  label,
  checked = false,
  onChange,
}: Props) {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 border-slate-600 rounded bg-transparent text-indigo-500"
      />
      {label && <label className="font-medium text-slate-200">{label}</label>}
    </div>
  );
}
