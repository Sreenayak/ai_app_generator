interface Props {
  title: string;
  description: string;
}

export default function CardField({
  title,
  description,
}: Props) {
  return (
    <div className="border rounded-2xl p-5 shadow-sm">

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

    </div>
  );
}