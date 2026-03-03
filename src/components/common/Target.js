export default function Target({ target }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-lg font-semibold justify-center">Target: </p>
      <code className="inline-block w-full rounded-md border border-slate-600/70 bg-slate-800/90 px-3 py-2 text-center font-mono text-sm tracking-[0.04em] text-cyan-200 shadow-sm sm:text-base">
        {target}
      </code>
    </div>
  );
}
