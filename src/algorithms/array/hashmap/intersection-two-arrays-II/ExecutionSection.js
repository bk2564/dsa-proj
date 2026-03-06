import { ShowArray } from "../../../../components/array/array";
import Input from "../../../../components/common/Input";
import { QuestionCode } from "../../../../components/common/Question";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import { ShowHashMap } from "../../../../components/hashmap/hashmap";
import { Question } from "./Question";
import { getSteps } from "./steps";

export const demo = {
  nums1: [1, 2, 2, 1],
  nums2: [2, 2],
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
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <IntersectionTwoArraysIIStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
          />
        ))}
      </div>
    </section>
  );
}

function IntersectionTwoArraysIIStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  const currentValue = step.value;
  const hasCurrentValue = currentValue !== undefined;
  const currentCount = hasCurrentValue
    ? (step.hashmap.get(currentValue) ?? 0)
    : null;

  const nums1Actions = new Set(["insert-into-map", "map-ready"]);
  const nums2Actions = new Set([
    "check-intersection",
    "insert-into-result",
    "updates-map",
  ]);

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
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
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
    </div>
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
    </div><br />
     <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-300">
        <QuestionCode code={`value: ${hasCurrentValue ? currentValue : "-"}`} />
        <QuestionCode code={`map count: ${currentCount ?? "-"}`} />
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
  const normalizedText = step.text.trim();

  if (step.action === "insert-into-map") {
    return {
      title: "Insert into map",
      description: normalizedText,
    };
  }

  if (step.action === "insert-into-result") {
    return {
      title: "Insert into result",
      description: normalizedText,
    };
  }

  if (step.action === "updates-map") {
    return {
      title: "Updates map",
      description: normalizedText,
    };
  }
  if (step.action === "return-result") {
    return {
      title: "Return result",
      description: normalizedText,
    };
  }

  return {
    title: normalizedText,
    description: "",
  };
}
