import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <header className="bg-white border-b p-5">

        <div className="max-w-6xl mx-auto flex justify-between">

          <h1 className="text-2xl font-bold">
            AI App Generator
          </h1>

          <Link
            href="/preview"
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            Preview
          </Link>

        </div>

      </header>

      <section className="max-w-6xl mx-auto py-24 text-center">

        <h2 className="text-5xl font-bold">
          Build Apps from JSON
        </h2>

        <p className="mt-5 text-gray-600">
          Dynamic frontend rendering engine
        </p>

      </section>

    </main>
  );
}