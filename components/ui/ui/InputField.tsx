interface Props {
  label?: string;
  placeholder?: string;
}

export default function InputField({
  label,
  placeholder,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">
        {label}
      </label>

          <input
            placeholder={placeholder}
            className="w-full bg-slate-800/40 border border-slate-700/40 text-slate-100 placeholder-slate-400 rounded-xl p-3"
          />
    </div>
  );
}