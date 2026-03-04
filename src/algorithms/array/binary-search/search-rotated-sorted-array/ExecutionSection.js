import { ShowArray } from "../../../../components/array/array";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import Target from "../../../../components/common/Target";
import { getSteps } from "./steps";

export const demo = {
  array: [1, 3, 5, 7, 9, 11, 13],
  target: 11,
};

export function ExecutionSection() {
  const steps = getSteps(demo.array, demo.target);
  const input = ` [${demo.array.join(", ")}]`;
  const returnValue = `${steps[steps.length - 1].returnValue}`;

  return (
    <>
      <Input input={input} />
      <Target target={demo.target} />
      <StepsTitle />
      <RotatedSearchSteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function RotatedSearchSteps({ steps }) {
  return (
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <RotatedSearchStepCard key={index} stepNumber={index + 1} step={step} />
        ))}
      </div>
    </section>
  );
}

function RotatedSearchStepCard({ stepNumber, step }) {
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <StepCard stepNumber={stepNumber} text={step.text} />
      <ShowArray arr={step.array} highlight={getHighlightArray(step)} />
      <Description step={step} />
    </div>
  );
}

function Description({ step }) {
  return (
    <p className="mt-3 text-xs text-gray-400">
      <code>
        low = {step.low} | mid = {step.mid} | high = {step.high}
      </code>
    </p>
  );
}

function getHighlightArray(step) {
  const highlight = new Map();

  if (step.low >= 0 && step.low < step.array.length) {
    highlight.set(step.low, "bg-blue-500");
  }
  if (step.mid >= 0 && step.mid < step.array.length) {
    highlight.set(step.mid, step.found ? "bg-green-500" : "bg-yellow-500");
  }
  if (step.high >= 0 && step.high < step.array.length) {
    highlight.set(step.high, "bg-blue-500");
  }

  return highlight;
}
