"use client";
import {
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Sparkles size={20} />
          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            AI App Generator
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Builder
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Docs
          </a>
        </nav>

        <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
          Launch App
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-24">

        <div className="mb-6 border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full text-sm text-gray-300">
          Dynamic Metadata Driven Runtime
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
          Build Powerful Apps
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            From JSON
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
          Generate dashboards, forms, tables, layouts, and workflows
          dynamically using intelligent configuration-driven rendering.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-blue-500/20">
            Start Building
          </button>

          <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition">
            Live Preview
          </button>
        </div>

      </section>

      {/* Dashboard Preview */}
      <section className="relative z-10 px-6 md:px-16 pb-28">

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">
                <LayoutDashboard size={28} className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Dynamic UI
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Instantly render dashboards, forms, and tables directly
                from JSON configuration.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-5">
                <ShieldCheck size={28} className="text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Error Safe
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Handles broken schemas, invalid configs, and unknown
                components gracefully.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-pink-500/20 to-transparent border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition">

              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-5">
                <Zap size={28} className="text-pink-400" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Lightning Fast
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Built using Next.js, TailwindCSS, and TypeScript for
                scalable frontend architecture.
              </p>
            </div>

          </div>

          {/* Fake Dashboard */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6">
              <div className="flex justify-between mb-5">
                <h4 className="text-xl font-semibold">
                  Generated Form
                </h4>

                <span className="text-green-400 text-sm">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
                />

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-xl font-semibold">
                  Submit
                </button>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6">

              <h4 className="text-xl font-semibold mb-6">
                Runtime Config
              </h4>

              <div className="bg-black rounded-2xl p-5 text-sm text-green-400 overflow-x-auto">
{`{
  "type": "form",
  "layout": "grid",
  "components": [
    {
      "type": "input",
      "label": "Username"
    },
    {
      "type": "email",
      "label": "Email"
    }
  ]
}`}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}