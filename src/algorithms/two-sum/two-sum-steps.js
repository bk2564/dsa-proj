

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


