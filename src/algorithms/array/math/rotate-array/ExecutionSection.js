import { ShowArray, WindowBadge } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import { getSteps } from "./steps";

const demo = {
  nums: [1, 2, 3, 4, 5, 6, 7],
  k: 3,
};

export function ExecutionSection() {
    const nums = [...demo.nums]
  const steps = getSteps(nums, demo.k);
  const input = ` [${demo.nums.join(", ")}]`;
  const returnValue = `[${steps[steps.length - 1].nums.join(", ")}]`;

  return (
    <>
      <Input input={input} />
      <Input input={demo.k} />
      <StepsTitle />
      <RotatedArraySteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}
function RotatedArraySteps({ steps }) {
  return (
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <RotatedArrayStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
          />
        ))}
      </div>
    </section>
  );
}

function RotatedArrayStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
    <WindowBadge windowValues={getWindow(step)} />
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
      <ShowArray arr={step.nums} highlight={getHighlightArray(step)} />
      <Description step={step} />
    </div>
  );
}

function getWindow(step) {
  const start = Math.max(0, Math.min(step.start, step.nums.length - 1));
  const end = Math.max(start, Math.min(step.end, step.nums.length - 1));

  return step.nums.slice(start, end + 1).join(", ");
}

function Description({ step }) {
    return (
        <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
            {step.k && <CodeBlock code={`k = ${step.k}`} />} 
            {step.start !== undefined && <CodeBlock code={`start = ${step.start}`} />} 
            {step.end !== undefined && <CodeBlock code={`end = ${step.end}`} />}
        </div>
    )
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index1 = step.start;
  const index2 = step.end;

  if(step.action.includes("start")){
  if (index1 >= 0 && index1 < step.nums.length ) {
    highlight.set(index1, "bg-amber-700");
  }
  if (index2 >= 0 && index2 < step.nums.length) {
    highlight.set(index2, "bg-amber-400");
  }
} else if(step.action.includes("end")){
  if (index1 >= 0 && index1 < step.nums.length) {
    highlight.set(index1, "bg-amber-400");
  }
  if (index2 >= 0 && index2 < step.nums.length) {
    highlight.set(index2, "bg-amber-700");
  }
}
  return highlight;
}

function getStepCardContent(step) {
  const normalizedText = step.text.trim();
  if (step.action === "rotate-start") {
    return {
      title: "Rotate start",
      description: normalizedText,
    };
  }

  if (step.action === "sets-k") {
    return {
      title: "Sets k",
      description: normalizedText,
    };
  }
  if (step.action === "k-0") {
    return {
      title: "k = 0",
      description: normalizedText,
    };
  }

  if (step.action === "first-reverse-start") {
    return {
      title: "First reverse start",
      description: normalizedText,
    };
  }

  if (step.action === "first-reverse-end") {
    return {
      title: "First reverse end",
      description: normalizedText,
    };
  }

  if (step.action === "second-reverse-start") {
    return {
      title: "Second reverse start",
      description: normalizedText,
    };
  }

  if (step.action === "second-reverse-end") {
    return {
      title: "Second reverse end",
      description: normalizedText,
    };
  }
  return {
    title: normalizedText,
    description: "",
  };
}
