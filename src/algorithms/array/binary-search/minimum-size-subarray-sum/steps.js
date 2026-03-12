export function getSteps (target, nums) {
    let left = 0
    let minLength = nums.length + 1
    let sum = 0
    const steps = []

    steps.push({
        action: "original-array",
        nums: [...nums],
        left: left,
        currentMinLength: minLength,
        currentSum: sum,
        text: "This is the original array. We will iterate through the array to find the minimum length subarray that sums to the target."
    })
    steps.push({
        action: "start",
        nums: [...nums],
        left: left,
        currentMinLength: minLength,
        currentSum: sum,
        text: "Left and right indexes are set to 0, and the minimum length of the subarray, to the length of the original array. We will iterate through the original array to find the minimum length subarray that sums to the target."
    })
    
    for (let right = 0; right < nums.length; right++){
        steps.push({
            action: "iteration-start",
            nums: [...nums],
            left: left,
            right: right,
            currentMinLength: minLength,
            currentSum: sum,
            text: `Starting the iteration ${right + 1} of ${nums.length}`
        })
        sum += nums[right]
        steps.push({
            action: "sum-increase",
            nums: [...nums],
            left: left,
            right: right,
            currentMinLength: minLength,
            currentSum: sum,
            text: `The sum is now ${sum} (sum + nums[${right}]) | ${sum - nums[right]} + ${nums[right]}}, adding it by the right index value of the window subarray`
        })
        
        while(sum >= target){
            steps.push({
                action: "sum-greater-than-target",
                nums: [...nums],
                left: left,
                right: right,
                currentMinLength: minLength,
                currentSum: sum,
                text: `The sum (${sum}) is ${sum > target ? 'greater than' : 'equal to'} the target (${target}).`
            })
            minLength = Math.min(minLength, right - left + 1)
            steps.push({
                action: "min-length-update",
                nums: [...nums],
                left: left,
                right: right,
                currentMinLength: minLength,
                currentSum: sum,
                text: `Updtating the minimum length to ${minLength}, by picking the smaller value between itself and the window subarray length.`
            })
            sum -= nums[left]
            steps.push({
                action: "sum-decrease",
                nums: [...nums],
                left: left,
                right: right,
                currentMinLength: minLength,
                currentSum: sum,
                text: `Decreasing the sum by ${nums[left]} (${sum - nums[left]}), the left index value of the window subarray.`
            })
            left++
            steps.push({
                action: "left-update",
                nums: [...nums],
                left: left,
                right: right,
                currentMinLength: minLength,
                currentSum: sum,
                text: `Updating the left index to ${left}, by incrementing it by 1.`
            })
        }
        steps.push({
            action: "iteration-end",
            nums: [...nums],
            left: left,
            right: right,
            currentMinLength: minLength,
            currentSum: sum,
            text: `The current iteration is finished. ${right < (nums.length - 1) ? `The right index has been updated to ${right}.` : `The right index has reached the length of the original array`} `
        })
    }
    steps.push({
        action: "end",
        nums: [...nums],
        currentMinLength: minLength,
        returnValue: minLength,
        currentSum: sum,
        text: "The iteration is finished. The minimum length of the subarray is " + minLength + ". Returning it."
    })
    
    return steps
};