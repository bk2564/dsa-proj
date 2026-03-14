export default function LabeledCodeBlock({ label, value }) {
    const text = String(value ?? "");
    const length = text.length;
    const computedSize = Math.max(0.85, 1 - Math.max(0, length - 30) * 0.01);
    const labelSize = Math.max(0.85, 1.125 - Math.max(0, length - 30) * 0.008);

    return (
    <div className="flex flex-col gap-3 p-4">
      <p className="font-semibold" style={{ fontSize: `${labelSize}rem` }}>
        {label}:
      </p>
        <code
          className="inline-block w-full rounded-md border border-slate-600/70 bg-slate-800/90 px-3 py-2 text-center font-mono text-sm tracking-[0.04em] text-cyan-200 shadow-sm sm:text-base"
          style={{ fontSize: `${computedSize}rem`, lineHeight: "1.4" }}
        >
          {text}
        </code>
    </div>
  );
}
