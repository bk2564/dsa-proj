import { ArrayExecutionSection, HashMapExecutionSection } from "../../array-execution"
import { ShowArray } from "../../show-alg"

export const twoSumDemo = {
    array: [2, 7, 11, 15],
    target: 18
}

export function getTwoSumSteps(nums, target) {
    const steps = []
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i]
        steps.push({
            array: [...nums],
            hashmap: new Map(map),
            complemento: complemento,
            value: nums[i],
            index: i,
            text: `Set the complement to target ${target} - value ${nums[i]}`
        })
        if (map.has(complemento)) {
            steps.push({
                array: [...nums],
                hashmap: new Map(map),
                complemento: complemento,
                value: nums[i],
                index: i,
                found: true,
                text: `Complement found`
            })
            break
        }
        map.set(nums[i], i)
        steps.push({
            array: [...nums],
            hashmap: new Map(map),
            complemento: complemento,
            value: nums[i],
            index: i,
            text: `Set the map key ${nums[i]} to the value ${i} (index)`
        })
    }
    return steps
}

export function TwoSumExecutionSection() {
    const steps = getTwoSumSteps(twoSumDemo.array, twoSumDemo.target)
    const subtitle = `Array: [${twoSumDemo.array.join(", ")}], target: ${twoSumDemo.target}`;
    return (
        <>
        <HashMapExecutionSection 
        title="Execution Steps"
        subtitle={subtitle}
        steps={steps}
        getHighlight={(step) => {
            const highlight = new Map()
            const index = step.hashmap.get(step.complemento)
            
            if(index >= 0 && index < step.array.length && step.found){
                highlight.set(step.complemento, "bg-green-500")
            }

            return highlight
        }}
        />
        </>
    )
}
