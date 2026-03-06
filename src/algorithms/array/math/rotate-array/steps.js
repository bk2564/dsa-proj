export function getSteps(nums, k) {
    const steps = []

    steps.push({
        action: "rotate-start",
        nums: [...nums],
        k: k,
        text: `This is the original array.`,
    })
    
    k %= nums.length
    
    steps.push({
        action: "sets-k",
        nums: [...nums],
        k: k,
        text: `k is set to ${k} | (k % nums.length).`,
    })
    if(k === 0) {
        steps.push({
            action: "k-0",
            nums: [...nums],
            k: k,
            text: `k is 0. The array does not need to be rotated.`,
        })
        return steps
    }
    
    steps.push({
        action: "first-reverse-start",
        nums: [...nums],
        start: 0,
        end: nums.length - 1,
        k: k,
        text: `Reversing the entire array.`,
    })
    reverse(nums, 0, nums.length - 1)
    steps.push({
        action: "first-reverse-end",
        nums: [...nums],
        k: k,
        text: `The array is reversed.`,
    })
    steps.push({
        action: "second-reverse-start",
        nums: [...nums],
        start: 0,
        end: k - 1,
        k: k,
        text: `Reversing the first k | ${k} elements.`,
    })
    reverse(nums, 0, k - 1)
    steps.push({
        action: "second-reverse-end",
        nums: [...nums],
        k: k,
        text: `The first k | ${k} elements are reversed.`,
    })
    steps.push({
        action: "third-reverse-start",
        nums: [...nums],
        start: k,
        end: nums.length - 1,
        k: k,
        text: `Reversing last (nums.length - k) | ${nums.length - k} elements.`,
    })
    reverse(nums, k, nums.length - 1)
    steps.push({
        action: "third-reverse-end",
        nums: [...nums],
        k: k,
        text: `The last (nums.length - k) | ${nums.length - k} elements are reversed.`,
    })
    
    
    function reverse(arr, start, end){
        steps.push({
            action: "reverse-start",
            nums: [...arr],
            start: start,
            k: k,
            end: end,
            text: `Start and end indexes are set to [${start}, ${end}].`,
        })
        while(start < end){
            steps.push({
                action: "reverse-loop-start",
                nums: [...arr],
                start: start,
                k: k,
                end: end,
                text: `Start < end | ${start} < ${end}. Swapping values.`,
            })
            const dummy = arr[end]
            arr[end] = arr[start]
            arr[start] = dummy
            steps.push({
                action: "reverse-loop-end",
                nums: [...arr],
                start: start,
                k: k,
                end: end,
                text: `Start and end values are now swapped.`,
            })
            start++
            end--
            steps.push({
                action: "uptade-start-end",
                nums: [...arr],
                start: start,
                k: k,
                end: end,
                text: `Updating start and end indexes.`,
            })
        }
    }

    steps.push({
        action: "rotate-end",
        nums: [...nums],
        text: `The array has been rotated. Returning the array.`,
        returnValue: nums.join(", "),
    })

    return steps
};