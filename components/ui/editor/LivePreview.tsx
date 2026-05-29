import DynamicRenderer from "@/components/ui/renderer/DynamicRenderer";

export default function LivePreview({
  config,
}: any) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/40 p-6 rounded-xl">
      <DynamicRenderer config={config} />
    </div>
  );
}