import { ShowArray, WindowBadge } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import Target from "../../../../components/common/Target";
import { getSteps } from "./steps";

export const demo = {
  array: [4, 5, 6, 7, 8, 0, 1, 2],
  target: 1,
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
          <RotatedSearchStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
          />
        ))}
      </div>
    </section>
  );
}

function getWindow(step) {
  const start = Math.max(0, Math.min(step.low, step.array.length - 1));
  const end = Math.max(start, Math.min(step.high, step.array.length - 1));

  return step.array.slice(start, end + 1).join(", ");
}

function RotatedSearchStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  const windowValues = getWindow(step);

  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <WindowBadge windowValues={windowValues} />
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
      <ShowArray arr={step.array} highlight={getHighlightArray(step)} />
      <Description step={step} />
    </div>
  );
}


function Description({ step }) {
  const lowValue = step.array[step.low];
  const midValue = step.array[step.mid];
  const highValue = step.array[step.high];

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      <CodeBlock code={`low = ${step.low} (${lowValue})`} />
      <CodeBlock code={`mid = ${step.mid} (${midValue})`} />
      <CodeBlock code={`high = ${step.high} (${highValue})`} />
    </div>
  );
}



function getHighlightArray(step) {
  const highlight = new Map();

  if (step.low >= 0 && step.low < step.array.length) {
    highlight.set(
      step.low,
          "bg-blue-500"
    );
  }
  if (step.high >= 0 && step.high < step.array.length) {
    highlight.set(
      step.high,"bg-blue-500");
  }
  if (step.mid >= 0 && step.mid < step.array.length) {
    highlight.set(step.mid, step.found ? "bg-green-500" : "bg-yellow-500");
  }

  return highlight;
}

function getStepCardContent(step) {
  const normalizedText = step.text.trim();

  if (step.action === "check-mid") {
    return {
      title: "Inspect midpoint",
      description: normalizedText,
    };
  }

  if (step.action === "move-low") {
    return {
      title: "Discard left side",
      description: normalizedText,
    };
  }

  if (step.action === "move-high") {
    return {
      title: "Discard right side",
      description: normalizedText,
    };
  }

  if (step.action === "found") {
    return {
      title: "Target found",
      description: normalizedText,
    };
  }

  if (step.action === "not-found") {
    return {
      title: "Target not present",
      description: normalizedText,
    };
  }

  return {
    title: normalizedText,
    description: "",
  };
}
