import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { ShowHashMap } from "../../../../components/hashmap/hashmap";
import { getSteps } from "./steps";

export const demo = {
  nums1: [1, 2, 2, 1],
  nums2: [2, 2],
};

const STEP_TITLES = {
  "insert-into-map": "Insert into map",
  "insert-into-result": "Insert into result",
  "updates-map": "Updates map",
  "return-result": "Return result",
};

export function ExecutionSection() {
  const steps = getSteps(demo.nums1, demo.nums2);
  const input1 = `[${demo.nums1.join(", ")}]`;
  const input2 = `[${demo.nums2.join(", ")}]`;
  const returnValue = `[${steps[steps.length - 1].returnValue}]`;

  return (
    <>
      <Input input={input1} />
      <Input input={input2} />
      <StepsTitle />
      <IntersectionTwoArraysIISteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function IntersectionTwoArraysIISteps({ steps }) {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => (
        <IntersectionTwoArraysIIStepCard stepNumber={stepNumber} step={step} />
      )}
    />
  );
}

function IntersectionTwoArraysIIStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  const currentValue = step.value;
  const hasCurrentValue = currentValue !== undefined;
  const currentCount = hasCurrentValue ? (step.hashmap.get(currentValue) ?? 0) : null;

  const nums1Actions = new Set(["insert-into-map", "map-ready"]);
  const nums2Actions = new Set(["check-intersection", "insert-into-result", "updates-map"]);

  const nums1Highlight = getHighlightArray(
    step.nums1,
    nums1Actions.has(step.action) ? step.index : -1,
  );
  const nums2Highlight = getHighlightArray(
    step.nums2,
    nums2Actions.has(step.action) ? step.index : -1,
  );
  const resultHighlight = getHighlightArray(
    step.result,
    step.action === "insert-into-result" ? step.result.length - 1 : -1,
  );

  const mapHighlight = getHighlightMap(step, hasCurrentValue, currentValue);

  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
    >
      <ShowArray arr={step.nums1} highlight={nums1Highlight} />
      <ShowHashMap hashmap={step.hashmap} highlight={mapHighlight} />
      <ShowArray arr={step.nums2} highlight={nums2Highlight} />
      <Description
        step={step}
        resultHighlight={resultHighlight}
        hasCurrentValue={hasCurrentValue}
        currentValue={currentValue}
        currentCount={currentCount}
      />
    </StepFrame>
  );
}

function getHighlightMap(step, hasCurrentValue, currentValue) {
  const mapHighlight = new Map();

  if (hasCurrentValue && step.hashmap.has(currentValue)) {
    mapHighlight.set(
      currentValue,
      step.action === "updates-map" ? "bg-green-500" : "bg-yellow-500",
    );
  }

  return mapHighlight;
}

function Description({ step, resultHighlight, hasCurrentValue, currentValue, currentCount }) {
  return (
    <>
      <div className="mt-3 rounded-xl border border-slate-700/70 bg-slate-900/50 p-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
          Result
        </p>
        {step.result.length === 0 ? (
          <p className="text-xs text-slate-400">[] (empty)</p>
        ) : (
          <ShowArray arr={step.result} highlight={resultHighlight} />
        )}
      </div>
      <br />
      <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-300">
        <CodeBlock code={`value: ${hasCurrentValue ? currentValue : "-"}`} />
        <CodeBlock code={`map count: ${currentCount ?? "-"}`} />
      </div>
    </>
  );
}

function getHighlightArray(arr, index) {
  const highlight = new Map();
  const length = arr.length ? arr.length : 0;

  if (index >= 0 && index < length) {
    highlight.set(index, "bg-yellow-500");
  }

  return highlight;
}

function getStepCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}
