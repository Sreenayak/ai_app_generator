import DynamicRenderer from "@/components/ui/renderer/DynamicRenderer";
import { sampleConfig } from "@/config/sampleConfig";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-8">
          {sampleConfig.title}
        </h1>

        <DynamicRenderer config={sampleConfig} />
      </div>
    </main>
  );
}