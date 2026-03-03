import { ShowArray } from "../../components/array/array.js"
import Input from "../../components/common/Input.js";
import Return from "../../components/common/Return.js";
import { StepCard } from "../../components/common/StepCard.js";
import StepsTitle from "../../components/common/StepsTitle.js";
import Target from "../../components/common/Target.js";
import { ShowHashMap } from "../../components/hashmap/hashmap.js"
import { getTwoSumSteps } from "./two-sum-steps.js";

export const twoSumDemo = {
    array: [2, 7, 11, 15],
    target: 18
}


export function TwoSumExecutionSection() {
    const steps = getTwoSumSteps(twoSumDemo.array, twoSumDemo.target)
    const subtitle = `Array: [${twoSumDemo.array.join(", ")}], target: ${twoSumDemo.target}`;
    const input = ` [${twoSumDemo.array.join(", ")}]`;
    const returnValue = `${steps[steps.length - 1].returnValue}`;
    return (
        <>
        <Input input={input} />
        <Target target={twoSumDemo.target} />
        <StepsTitle />
        <TwoSumSteps steps={steps} Description={Description} />
        <Return returnValue={returnValue} />
        </>
    )
}

function TwoSumSteps({ steps, Description }) {
    return (
        <section>
            <div className="space-y-5">
                {steps.map((step, index) => (
                    <TwoSumStepCard
                        key={index}
                        stepNumber={index + 1}
                        step={step}
                        highlightMap={getHighlightMap(step)}
                        highlightArray={getHighlightArray(step)}
                    />
                ))}
            </div>
        </section>
    )
}

function getHighlightMap(step) {
    const highlight = new Map()
    const index = step.hashmap.get(step.complement)
    
    if(index >= 0 && index < step.array.length && step.found){
        highlight.set(step.complement, "bg-green-500")
    }
       
    return highlight
}

function getHighlightArray(step) {
    const highlight = new Map()
    const index = step.index

    if(index >= 0 && index < step.array.length){
        highlight.set(index, "bg-yellow-500")
    }
    return highlight
}

function TwoSumStepCard({ stepNumber, step, highlightArray, highlightMap }) {
    return (
        <div className="bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
            <StepCard stepNumber={stepNumber} text={step.text} />
            <ShowArray arr={step.array} highlight={highlightArray} />
            <ShowHashMap hashmap={step.hashmap} highlight={highlightMap} />
            <Description step={step} />
        </div>
    )
}

function Description({step}) {
    return (
        <p className="mt-3 text-xs text-gray-400">
        <code>complement = {step.complement} | value = {step.value} | index = {step.index}</code>
      </p>
    )
}