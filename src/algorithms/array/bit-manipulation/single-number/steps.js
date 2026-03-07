
export function getSteps (nums) {
    let result = 0
    const steps = []

    steps.push({
        action: "input-array",
        nums: [...nums],
        result: result,
        text: `This is the input array. And initial result is ${result}`
    })
    steps.push({
        action: "input-array-bits",
        nums: [...nums],
        numsBinary: nums.map(n => n.toString(2).padStart(5, '0')),
        result: result,
        resultBinary: result.toString(2).padStart(5, '0'),
        text: `This is the input array in binary. And initial result is ${result.toString(2).padStart(5, '0')}`
    })
    
    for(const i in nums){
        steps.push({
            action: "xor-start",
            nums: [...nums],
            numsBinary: nums.map(n => n.toString(2).padStart(5, '0')),
            result: result,
            index: i,
            resultBinary: result.toString(2).padStart(5, '0'),
            text: `We will XOR the current result (${result}) | (${result.toString(2).padStart(5, '0')}) with the next element (${nums[i]}) | (${nums[i].toString(2).padStart(5, '0')})`
        })
        result ^= nums[i]
        steps.push({
            action: "xor-end",
            nums: [...nums],
            numsBinary: nums.map(n => n.toString(2).padStart(5, '0')),
            result: result,
            index: i,
            resultBinary: result.toString(2).padStart(5, '0'),
            text: `The result is now (${result}) | (${result.toString(2).padStart(5, '0')})`
        })
    }
    steps.push({
        action: "result-found",
        nums: [...nums],
        numsBinary: nums.map(n => n.toString(2).padStart(5, '0')),
        foundIndex: nums.findIndex(n => n === result),
        result: result,
        resultBinary: result.toString(2).padStart(5, '0'),
        text: `This is the unique value in the input array: ${result}. Returning it.`
    })


    return steps
};