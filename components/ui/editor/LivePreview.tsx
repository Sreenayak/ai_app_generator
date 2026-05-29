import DynamicRenderer from "@/components/ui/renderer/DynamicRenderer";

export default function LivePreview({
  config,
}: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <DynamicRenderer
        config={config}
      />
    </div>
  );
}