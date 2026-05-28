export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      {/* Header */}
      <header className="w-full border-b border-gray-700 px-10 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">
          AI App Generator
        </h1>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <h2 className="text-6xl font-extrabold mb-6 leading-tight">
          Build Apps <br />
          From JSON Config
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mb-10">
          A dynamic AI-powered frontend generator that renders forms,
          dashboards, layouts, and tables directly from metadata.
        </p>

        <div className="flex gap-5">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-semibold transition">
            Start Building
          </button>

          <button className="border border-gray-500 hover:bg-gray-700 px-8 py-4 rounded-2xl font-semibold transition">
            Live Preview
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">
            Dynamic UI
          </h3>

          <p className="text-gray-400">
            Render forms, dashboards, and layouts directly from JSON.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 p-6 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">
            Live Preview
          </h3>

          <p className="text-gray-400">
            Instantly preview generated applications in real time.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 p-6 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">
            Error Safe
          </h3>

          <p className="text-gray-400">
            Gracefully handles broken configs and unknown components.
          </p>
        </div>

      </section>
    </main>
  );
}
