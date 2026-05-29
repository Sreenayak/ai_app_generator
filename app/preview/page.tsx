import DynamicRenderer from "@/components/ui/renderer/DynamicRenderer";
import { sampleConfig } from "@/config/sampleConfig";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto py-12 px-6 mt-8">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800/40">
          <h1 className="text-3xl font-bold mb-8 text-white">{sampleConfig.title}</h1>
          <DynamicRenderer config={sampleConfig} />
        </div>
      </div>
    </main>
  );
}