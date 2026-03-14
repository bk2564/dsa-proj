import { ShowArray, WindowBadge } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { ShowHashMap } from "../../../../components/hashmap/hashmap";
import { getSteps } from "./steps";

const demo = {
    string: "waaqnnshaannaa",
};

const STEP_TITLES = {
    originalString: "Original String",
    iterationStart: "Iteration Start",
    characterCheck: "Character Check",
    characterNotInMap: "Character Not In Map",
    characterInMap: "Character In Map",
    result: "Result",
};

export function ExecutionSection() {
    const steps = getSteps([...demo.string]);
    const input = `[${demo.string}]`;
    const returnValue = steps[steps.length - 1].returnValue;
    return (
        <>
            <Input input={input} />
            <StepsTitle />
            <LongestSubstringWithoutRepeatingCharactersSteps steps={steps} />
            <Return returnValue={returnValue} />
        </>
    );
}

function LongestSubstringWithoutRepeatingCharactersSteps({ steps }) {
    return (
        <StepTimeline
            steps={steps}
            renderStep={(step, stepNumber) => (
                <LongestSubstringWithoutRepeatingCharactersStepCard
                    stepNumber={stepNumber}
                    step={step}
                />
            )}
        />
    );
}

function LongestSubstringWithoutRepeatingCharactersStepCard({ stepNumber, step }) {
    const cardContent = getCardContent(step);
    const highlightArray = getHighlightArray(step);
    const currentValue = step.string[step.end];
    const highlightMap = getHighlightMap(step, currentValue);
    const windowValues = getWindow(step);
    

    return (
        <StepFrame
            stepNumber={stepNumber}
            title={cardContent.title}
            description={cardContent.description}
            badge={<WindowBadge windowValues={windowValues} />}
        >
            <ShowArray arr={step.string} highlight={highlightArray} /><br />
            {step.map !== undefined && <ShowHashMap hashmap={step.map} highlight={highlightMap} />}
            <Description step={step} />
        </StepFrame>
    );
}

function getWindow(step) {
    const start = Math.max(0, Math.min(step.start, step.string.length - 1));
    const end = Math.max(start, Math.min(step.end, step.string.length - 1));
    return step.string.slice(start, end + 1).join("");
}

function Description({ step }) {
    const start = step.start;
    const end = step.end;
    const valueStart = step.string[start];
    const valueEnd = step.string[end];

    return (
        <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
            {step.start !== undefined && <CodeBlock code={`start = ${start} (${valueStart})`} />}
            {step.end !== undefined && <CodeBlock code={`end = ${end} (${valueEnd})`} />}
            {step.maxLength !== undefined && <CodeBlock code={`maxLength = ${step.maxLength}`} />}
        </div>
    );
}

function getCardContent(step) {
    return resolveStepCardContent(step, STEP_TITLES);
}

function getHighlightArray(step) {
    const highlight = new Map();
    const end = step.end;
    const start = step.start;

    if (end >= 0 && end < step.string.length) {
        highlight.set(end, "bg-amber-500");
    }
    if (start >= 0 && start < step.string.length) {
        highlight.set(start, "bg-blue-500");
    }
    return highlight;
}

function getHighlightMap(step, currentValue) {
    const highlight = new Map();

    if (currentValue) {
        highlight.set(currentValue, 
            step.action === "update-map" ? "bg-green-500" : ""
    )}
    return highlight;
}