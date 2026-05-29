export default function ConfigPanel({
  title,
}: any) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/40 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg text-white">{title}</h2>
        <div className="text-sm text-slate-400">Live</div>
      </div>

      <p className="text-slate-400 mt-2 text-sm">
        Real-time JSON configuration and preview.
      </p>

    </div>
  );
}