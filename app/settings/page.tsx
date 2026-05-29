"use client";

import { useState } from "react";
import { useThemeStore } from "@/store/themeStore";
import Link from "next/link";

export default function SettingsPage() {
  const { theme, setTheme, resetTheme } = useThemeStore();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleColorChange = (key: keyof typeof theme, value: string) => {
    setTheme({ [key]: value });
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6 mt-8">
        <div className="bg-slate-900/60 p-8 rounded-xl border border-slate-800/40">
          <h2 className="text-xl font-bold mb-6 text-white">Theme Colors</h2>

          <div className="space-y-6">
            {Object.entries(theme).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <label className="w-32 font-medium capitalize text-slate-200">{key}</label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof typeof theme, e.target.value)}
                  className="w-16 h-10 border border-slate-700/40 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof typeof theme, e.target.value)}
                  className="flex-1 bg-slate-800/40 border border-slate-700/40 rounded px-3 py-2 text-slate-100"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={handleSave} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow">
              Save Theme
            </button>
            <button onClick={resetTheme} className="px-6 py-2 bg-white/5 text-white rounded-lg">
              Reset to Default
            </button>
          </div>

          {saved && <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">Theme saved successfully!</div>}
        </div>
      </div>
    </main>
  );
}
