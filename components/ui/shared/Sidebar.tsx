"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-w-[220px] bg-slate-900/60 border-r border-slate-800/40 p-4 rounded-md h-[calc(100vh-140px)] sticky top-24">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L19 8V16L12 22L5 16V8L12 2Z" fill="white"/></svg>
          </div>
          <div>
            <div className="text-white font-semibold">AI App</div>
            <div className="text-xs text-slate-400">Generator Studio</div>
          </div>
        </div>

        <nav className="space-y-1">
          <Link href="/builder" className="block px-3 py-2 rounded hover:bg-white/5 text-slate-100">Builder</Link>
          <Link href="/preview" className="block px-3 py-2 rounded hover:bg-white/5 text-slate-100">Preview</Link>
          <Link href="/settings" className="block px-3 py-2 rounded hover:bg-white/5 text-slate-100">Settings</Link>
        </nav>
      </div>

      <div className="mt-8">
        <div className="text-xs text-slate-400 mb-2">TEMPLATES</div>
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/5 text-slate-100">Registration Form</button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/5 text-slate-100">Contact Form</button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/5 text-slate-100">Users Table</button>
        </div>
      </div>

      <div className="mt-auto pt-6 text-xs text-slate-400">
        v0.1 • Local
      </div>
    </aside>
  );
}
