export default function ConfigPanel({
  title,
}: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">

      <h2 className="font-bold text-lg">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        Live JSON Configuration
      </p>

    </div>
  );
}