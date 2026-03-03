export function StepCard({ stepNumber, text }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <p className="text-sm top-1 left-1 text-white font-semibold">
        Step {stepNumber}: {text}
      </p>
      </div>
  );
}

