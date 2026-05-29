"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-3 border-b border-slate-800/40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L19 8V16L12 22L5 16V8L12 2Z" fill="white" opacity="0.95"/>
            </svg>
          </div>
          <div className="text-white font-semibold text-base">AI App Generator</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium">AI Workspace</div>
        </div>
      </div>
    </header>
  );
}
