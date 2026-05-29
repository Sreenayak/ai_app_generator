export default function ThreeColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
