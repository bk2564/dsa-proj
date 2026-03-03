

export function getTwoSumSteps(nums, target) {
    const steps = []
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        steps.push({
            array: [...nums],
            hashmap: new Map(map),
            complement: complement,
            value: nums[i],
            index: i,
            text: `Set the complement to target ${target} - value ${nums[i]} = ${complement}`,
        })
        if (map.has(complement)) {
            steps.push({
                array: [...nums],
                hashmap: new Map(map),
                complement: complement,
                value: nums[i],
                index: i,
                found: true,
                text: `Complement found`,
                returnValue: `[${map.get(complement)}, ${i}]`
            })
            break
        }
        map.set(nums[i], i)
        steps.push({
            array: [...nums],
            hashmap: new Map(map),
            complement: complement,
            value: nums[i],
            index: i,
            text: `Set the map key ${nums[i]} to the value ${i} (index)`,
        })
    }
    if (!steps[steps.length - 1].found) {
    steps.push({
        array: [...nums],
        hashmap: new Map(map),
        complement: target - nums[nums.length - 1],
        value: nums[nums.length - 1],
        index: nums.length - 1,
        text: `Target ${target} not found`,
        returnValue: `[]`
    })
}
    return steps
}


