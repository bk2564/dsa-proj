export default function Explanation({ text }) {
  return (
    <aside className="rounded-2xl border border-slate-700 bg-black/80 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-white">Explanation</h2>
      <p className="whitespace-pre-line text-sm leading-6 text-slate-300">{text}</p>
    </aside>
  );
}
