interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function CardField({ title, description, children }: Props) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/40 rounded-2xl p-5">
      {title && <h3 className="font-bold text-lg text-white">{title}</h3>}
      {description && <p className="text-slate-400 mt-2">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}