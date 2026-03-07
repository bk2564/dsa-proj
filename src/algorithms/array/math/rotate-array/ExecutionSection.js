import { ShowArray, WindowBadge } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

const demo = {
  nums: [1, 2, 3, 4, 5, 6, 7],
  k: 3,
};

const STEP_TITLES = {
  "rotate-start": "Rotate start",
  "sets-k": "Sets k",
  "k-0": "k = 0",
  "first-reverse-start": "First reverse start",
  "first-reverse-end": "First reverse end",
  "second-reverse-start": "Second reverse start",
  "second-reverse-end": "Second reverse end",
};

export function ExecutionSection() {
  const steps = getSteps([...demo.nums], demo.k);
  const input = `[${demo.nums.join(", ")}]`;
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
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => (
        <RotatedArrayStepCard stepNumber={stepNumber} step={step} />
      )}
    />
  );
}

function RotatedArrayStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
      badge={<WindowBadge windowValues={getWindow(step)} />}
    >
      <ShowArray arr={step.nums} highlight={getHighlightArray(step)} />
      <Description step={step} />
    </StepFrame>
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
  );
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index1 = step.start;
  const index2 = step.end;

  if (step.action.includes("start")) {
    if (index1 >= 0 && index1 < step.nums.length) {
      highlight.set(index1, "bg-amber-700");
    }
    if (index2 >= 0 && index2 < step.nums.length) {
      highlight.set(index2, "bg-amber-400");
    }
  } else if (step.action.includes("end")) {
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
  return resolveStepCardContent(step, STEP_TITLES);
}
