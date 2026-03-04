export function StepCard({ stepNumber, text }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 pt-8">
      <span className="absolute -top-0 left-0 bg-gray-900 px-3 py-1 text-[14px] font-semibold text-white border-2 border-slate-700 rounded-xl">
        Step {stepNumber}
      </span>
      <p className="text-sm text-white font-semibold">{text}</p>
    </div>
  );
}
