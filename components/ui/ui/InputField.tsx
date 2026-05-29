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
        className="w-full border border-gray-300 rounded-xl p-3"
      />
    </div>
  );
}