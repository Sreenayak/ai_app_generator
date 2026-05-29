"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-black">

      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-5 bg-white border-b border-gray-200 sticky top-0 z-50">

        <h1 className="text-2xl font-bold tracking-tight">
          AI App Generator
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition">
            Home
          </a>

          <a href="#" className="hover:text-black transition">
            Features
          </a>

          <a href="#" className="hover:text-black transition">
            Builder
          </a>

          <a href="#" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 pt-24 pb-20">
        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold mb-4">
            Dynamic Frontend Runtime
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Build modern apps
            from simple JSON
          </h2>

          <p className="text-gray-600 text-lg mt-8 leading-relaxed">
            Generate forms, dashboards, tables, and layouts dynamically
            using a clean metadata-driven rendering engine.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-black text-white px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Start Building
            </button>

            <button className="bg-white border border-gray-300 px-7 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
              Live Demo
            </button>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Fast Rendering
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Render complete applications instantly from JSON configuration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-6">
              🛡️
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Error Safe
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Handles invalid schemas and broken configs gracefully.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl mb-6">
              🎨
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Dynamic UI
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Create forms, dashboards, and layouts with reusable components.
            </p>
          </div>

        </div>

      </section>

      {/* Preview Section */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 pb-28">

        <div className="bg-white rounded-[32px] border border-gray-200 p-8 shadow-sm">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h3 className="text-3xl font-bold">
                Live Runtime Preview
              </h3>

              <p className="text-gray-500 mt-2">
                Dynamic rendering from metadata configuration.
              </p>
            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Active
            </span>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Form */}
            <div className="border border-gray-200 rounded-3xl p-6">

              <h4 className="text-xl font-semibold mb-6">
                Generated Form
              </h4>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-black"
                />

                <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Submit
                </button>

              </div>
            </div>

            {/* Code Preview */}
            <div className="bg-black rounded-3xl p-6 overflow-hidden">

              <p className="text-green-400 text-sm leading-8 whitespace-pre-wrap">
{`{
  "type": "form",
  "layout": "single-column",
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
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}