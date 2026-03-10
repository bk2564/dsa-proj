import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

const demo = {
    nums: [0,0,0,1,2,2,2,3,4,4,5,6,7,8,8,9,10]
}

const STEP_TITLES = {
    "0-length-array": "0 length array",
    "original-array": "Original array",
    "set-left": "Set left index",
    "check-value": "Check value",
    "check-false": "Check false",
    "update-left": "Update left index",
    "return-value": "Return value"
}

export function ExecutionSection({ nums }) {
    const steps = getSteps([...demo.nums]);
    const input = `[${demo.nums.join(", ")}]`;
    const returnValue = steps[steps.length - 1].returnValue;
    console.log(steps)
    return (
        <>
        <Input input={input} />
        <StepsTitle />
        <RemoveDuplicatesSortedArraySteps steps={steps} />
        <Return returnValue={returnValue} />
        </>
    )
}

function RemoveDuplicatesSortedArraySteps({ steps }) {
    return (
        <StepTimeline
            steps={steps}
            renderStep={(step, stepNumber) => (
                <RemoveDuplicatesSortedArrayStepCard
                    stepNumber={stepNumber}
                    step={step}
                    />
                    )}
                    />
    )
}

function RemoveDuplicatesSortedArrayStepCard({ stepNumber, step }) {
    const cardContent = getStepCardContent(step)
    const highlight = getHighlightArray(step)
    return (
        <StepFrame
            stepNumber={stepNumber}
            title={cardContent.title}
            description={cardContent.description}
            >
                <ShowArray arr={step.nums} highlight={highlight} />
                <Description step={step} />
            </StepFrame>
    )
}

function Description({ step }) {
    const leftValue = step.nums[step.left]
    const rightValue = step.nums[step.right]

    return (
        <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
            <CodeBlock code={`left = ${step.left} (${leftValue})`} color="bg-amber-500/70" />
            {step.right !== undefined && <CodeBlock code={`right = ${step.right} (${rightValue})`} color="bg-blue-500/70" />}
        </div>
    )
}
function getHighlightArray(step) {
    const highlight = new Map()
    const left = step.left
    const right = step.right

    if (left >= 0 && left < step.nums.length) {
        highlight.set(left, "bg-amber-500")
    }
    if (right >= 0 && right < step.nums.length) {
        highlight.set(right, "bg-blue-500")
    }

    return highlight
}

function getStepCardContent(step) {
    return resolveStepCardContent(step, STEP_TITLES)
}