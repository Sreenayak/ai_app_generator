"use client";

import { useState } from "react";

import JsonEditor from "@/components/ui/editor/JsonEditor";
import LivePreview from "@/components/ui/editor/LivePreview";
import ConfigPanel from "@/components/ui/editor/ConfigPanel";

import { sampleConfig } from "@/config/sampleConfig";

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

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI App Builder
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div>
          <ConfigPanel
            title="JSON Editor"
          />

          <div className="mt-4">
            <JsonEditor
              value={json}
              onChange={setJson}
            />
          </div>
        </div>

        <div>
          <LivePreview
            config={parsedConfig}
          />
        </div>

      </div>

    </main>
  );
}