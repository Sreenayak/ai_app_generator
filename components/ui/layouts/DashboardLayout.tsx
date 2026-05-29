export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <div className="p-6">
        <div className="grid gap-6 auto-rows-max">
          {children}
        </div>
      </div>
    </div>
  );
}
