"use client";

import { useState } from "react";
import Link from "next/link";

import JsonEditor from "@/components/ui/editor/JsonEditor";
import LivePreview from "@/components/ui/editor/LivePreview";
import ConfigPanel from "@/components/ui/editor/ConfigPanel";
import GeneratorPanel from "@/components/ui/editor/GeneratorPanel";

import { sampleConfig } from "@/config/sampleConfig";
import { dashboardConfig } from "@/config/dashboardConfig";
import { formConfig } from "@/config/formConfig";
import { tableConfig } from "@/config/tableConfig";

export default function BuilderPage() {
  const [json, setJson] =
    useState(
      JSON.stringify(
        sampleConfig,
        null,
        2
      )
    );

  let parsedConfig;

  try {
    parsedConfig = JSON.parse(json);
  } catch {
    parsedConfig = {
      title: "Invalid JSON",
      components: [],
    };
  }

  const loadTemplate = (config: any) => {
    setJson(JSON.stringify(config, null, 2));
  };

  return (
    <main className="min-h-screen">

      <div className="max-w-7xl mx-auto p-6 mt-8">

        <div className="mb-6 p-4 bg-slate-900/60 rounded-lg border border-slate-800/40">
          <h3 className="font-semibold mb-3 text-white">Load Template:</h3>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => loadTemplate(sampleConfig)}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
            >
              Registration Form
            </button>
            <button
              onClick={() => loadTemplate(formConfig)}
              className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
            >
              Contact Form
            </button>
            <button
              onClick={() => loadTemplate(tableConfig)}
              className="px-4 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200"
            >
              Users Table
            </button>
            <button
              onClick={() => loadTemplate(dashboardConfig)}
              className="px-4 py-2 bg-orange-100 text-orange-800 rounded hover:bg-orange-200"
            >
              Dashboard
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <div className="lg:col-span-2">
            <ConfigPanel title="JSON Editor" />

            <div className="mt-4">
              <GeneratorPanel onInsertJson={(generated: string) => setJson(generated)} />

              <div className="bg-slate-900/60 mt-4 p-4 rounded-lg border border-slate-800/40">
                <JsonEditor value={json} onChange={setJson} />
              </div>
            </div>
          </div>

          <div>
            <ConfigPanel title="Live Preview" />

            <div className="mt-4">
              <LivePreview config={parsedConfig} />
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}