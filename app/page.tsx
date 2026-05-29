import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950">

      <section className="max-w-6xl mx-auto py-24 px-6">

        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            Build Apps from JSON
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A powerful dynamic frontend rendering engine that transforms JSON configurations into fully functional web applications with a beautiful, intuitive interface.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/builder"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              Start Building →
            </Link>
            <Link
              href="/preview"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition text-lg"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">📝 JSON Editor</h3>
            <p className="text-slate-400">
              Write your app configuration in JSON format with real-time validation and syntax highlighting powered by Monaco Editor.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">👁️ Live Preview</h3>
            <p className="text-slate-400">
              See your changes instantly as you edit. The preview updates in real-time with full component rendering.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">🎨 Flexible Layouts</h3>
            <p className="text-slate-400">
              Support for multiple layout options: single-column, two-column, three-column, grid, and dashboard layouts.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">🧩 Rich Components</h3>
            <p className="text-slate-400">
              Input, Button, Checkbox, Select, Textarea, Email, Password, Radio, Card, and Table components out of the box.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">🎯 Type Safe</h3>
            <p className="text-slate-400">
              Full TypeScript support with comprehensive type definitions for all component configurations.
            </p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-lg border border-slate-800/40">
            <h3 className="text-xl font-bold mb-4 text-white">⚡ Fast & Responsive</h3>
            <p className="text-slate-400">
              Built with Next.js 16, React 19, and Tailwind CSS for optimal performance and responsive design.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}