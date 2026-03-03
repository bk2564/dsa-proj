export function StepCard({ stepNumber, text }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <p className="text-sm mb-3 text-gray-300">
        Step {stepNumber}: {text}
      </p>
      </div>
  );
}

