import { ShowArray } from "../../../../components/array/array"
import { CodeBlock } from "../../../../components/common/Code"
import Input from "../../../../components/common/Input"
import Return from "../../../../components/common/Return"
import StepFrame from "../../../../components/common/StepFrame"
import StepTimeline from "../../../../components/common/StepTimeline"
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver"
import { getSteps } from "./steps"

const demo = {
    nums: [1,2,3,2,18,8,3,4,1,4,6,6,8]
}

const STEP_TITLES = {
    "input-array": "Input array",
    "input-array-bits": "Input array in binary",
    "xor-start": "XOR start",
    "xor-end": "XOR end",
    "result-found": "Result found",
}

export function ExecutionSection() {
    const steps = getSteps([...demo.nums])
    const input = `[${demo.nums.join(', ')}]`
    const returnValue = `${steps[steps.length - 1].result}`

    return (
        <>
        <Input input={input} />
        <SingleNumberSteps steps={steps} />
        <Return returnValue={returnValue} />
        </>
    )

}

function SingleNumberSteps({ steps }) {
    return (
        <StepTimeline
            steps={steps}
            renderStep={(step, stepNumber) => (
                <SingleNumberStepCard stepNumber={stepNumber} step={step} />
    )} />
  )
}


function SingleNumberStepCard({ stepNumber, step }) {
    const cardContent = getStepCardContent(step)
    const highlight = getHighlightArray(step)
    console.log(highlight)
    return (
        <StepFrame
            stepNumber={stepNumber}
            title={cardContent.title}
            description={cardContent.description}
            >
                <ShowArray arr={step.nums} highlight={highlight} />
                <BinaryArrayView nums={step.nums} highlight={highlight} />
                <Description step={step} />
            </StepFrame>
    )
}

function getHighlightArray(step) {
    const highlight = new Map()
    const index = Number(step.index)
    if(index >= 0 && index < step.nums.length){
        highlight.set(index, "bg-amber-700")
    }

    if(step.action === "result-found"){
        highlight.set(step.foundIndex, "bg-green-700")
    }

    return highlight
}
function Description({ step }) {
    return (
        <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
            {step.result !== undefined && <CodeBlock code={`result = ${step.result}`} />}
            {step.resultBinary !== undefined && <CodeBlock code={`result in binary = ${step.resultBinary}`} />}
            {step.action === "xor-start" && <CodeBlock code={`${step.resultBinary} XOR ${step.numsBinary[step.index]}`} />}
        </div>
    )
}

function BinaryArrayView({ nums, highlight }) {
    const maxBits = Math.max(...nums).toString(2).length

    return (
        <div className="my-2 flex flex-wrap gap-4">
            {nums.map((num, index) => {
                const color = highlight.get(index) || ""
                const binary = num.toString(2).padStart(maxBits, "0")

                return (
                    <div
                        key={`${num}-${index}`}
                        className={`h-6 min-w-14 px-2 flex items-center justify-center text-[11px] font-bold tracking-widest border-2 border-white ${color}`}
                    >
                        {binary}
                    </div>
                )
            })}
        </div>
    )
}




function getStepCardContent(step) {
    return resolveStepCardContent(step, STEP_TITLES)
}
