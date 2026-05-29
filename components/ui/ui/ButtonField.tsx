interface Props {
  text?: string;
}

export default function ButtonField({
  text,
}: Props) {
  return (
    <button
      className="w-full bg-black text-white py-3 rounded-xl"
    >
      {text}
    </button>
  );
}