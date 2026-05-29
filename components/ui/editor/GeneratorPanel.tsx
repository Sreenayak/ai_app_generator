"use client";

import { useState } from "react";
import Loader from "@/components/ui/ui/Loader";
import { generateFromPrompt } from "@/lib/generator";

export default function GeneratorPanel({ onInsertJson }: any) {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"json" | "text">("json");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);

    // simulate processing delay
    await new Promise((r) => setTimeout(r, 600));

    const gen = generateFromPrompt(prompt || "", mode);
    setResult(gen.content);
    setLoading(false);

    if (mode === "json" && onInsertJson) {
      try {
        const parsed = JSON.parse(gen.content);
        onInsertJson(JSON.stringify(parsed, null, 2));
      } catch {}
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([result], { type: mode === "json" ? "application/json" : "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = mode === "json" ? "generated.json" : "generated.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800/40 p-4 rounded-lg mb-6">
      <h3 className="font-semibold mb-2 text-white">AI Generator</h3>
      <p className="text-sm text-slate-400 mb-3">Enter a prompt and choose an output type.</p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="E.g. 'Create a registration form with name, email, and message'"
        className="w-full bg-slate-800/40 border border-slate-700/40 text-slate-100 rounded p-3 h-28 mb-3 placeholder-slate-400"
      />

      <div className="flex items-center gap-3 mb-3">
        <label className="flex items-center gap-2 text-slate-200">
          <input type="radio" checked={mode === "json"} onChange={() => setMode("json")} />
          <span>JSON</span>
        </label>
        <label className="flex items-center gap-2 text-slate-200">
          <input type="radio" checked={mode === "text"} onChange={() => setMode("text")} />
          <span>Text</span>
        </label>

        <button onClick={handleGenerate} className="ml-auto inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow">
          Generate
        </button>
      </div>

      {loading && <Loader text="Generating..." className="mt-2" />}

      {result && (
        <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-700/40">
          <pre className="whitespace-pre-wrap text-sm text-slate-100">{result}</pre>

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="px-3 py-1 border rounded bg-white/5 text-slate-100"
            >
              Copy
            </button>
            <button onClick={handleDownload} className="px-3 py-1 border rounded bg-white/5 text-slate-100">
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
