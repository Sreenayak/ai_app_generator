interface Props {
  text?: string;
}

export default function ButtonField({
  text,
}: Props) {
  return (
    <button className="w-full inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-3 px-4 shadow">
      {text}
    </button>
  );
}