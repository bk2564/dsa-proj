import { ShowArray } from "./show-alg";

export function ArrayExecutionSection({ title, subtitle, steps, getHighlight }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <code className="text-sm text-gray-400 mb-4">{subtitle}</code>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <ArrayStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
            highlight={getHighlight(step)}
          />
        ))}
      </div>
    </section>
  );
}

function ArrayStepCard({ stepNumber, step, highlight }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <p className="text-sm mb-3 text-gray-300">
        Step {stepNumber}: {step.text}
      </p>
      <ShowArray arr={step.array} highlight={highlight} />
      <p className="mt-3 text-xs text-gray-400">
        <code>low = {step.low} | mid = {step.mid} | high = {step.high}</code>
      </p>
    </div>
  );
}
