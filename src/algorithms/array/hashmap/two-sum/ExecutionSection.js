import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import Target from "../../../../components/common/Target";
import { ShowHashMap } from "../../../../components/hashmap/hashmap";
import { getSteps } from "./steps";

export const demo = {
  array: [2, 7, 11, 15],
  target: 18,
};

const STEP_TITLES = {
  "compute-complement": "Compute complement",
  "pair-found": "Pair located",
  "store-value": "Store value in hash map",
  "not-found": "No valid pair",
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
      <TwoSumSteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function TwoSumSteps({ steps }) {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => <TwoSumStepCard stepNumber={stepNumber} step={step} />}
    />
  );
}

function TwoSumStepCard({ stepNumber, step, highlightArray, highlightMap }) {
  const cardContent = getStepCardContent(step);

  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
    >
      <ShowArray arr={step.array} highlight={getHighlightArray(step)} />
      <ShowHashMap hashmap={step.hashmap} highlight={getHighlightMap(step)} />
      <Description step={step} />
    </StepFrame>
  );
}

function Description({ step }) {
  const foundIndex = step.hashmap.get(step.complement);

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      <CodeBlock code={`i = ${step.index}`} />
      <CodeBlock code={`value = ${step.value}`} />
      <CodeBlock code={`complement = ${step.complement}`} />
    </div>
  );
}

function getHighlightMap(step) {
  const highlight = new Map();
  const index = step.hashmap.get(step.complement);

  if (index >= 0 && index < step.array.length && step.found) {
    highlight.set(step.complement, "bg-green-500");
  }

  return highlight;
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index = step.index;

  if (index >= 0 && index < step.array.length) {
    highlight.set(index, "bg-yellow-500");
  }
  return highlight;
}

function getStepCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}
