export function getSteps(nums, k) {
    const steps = [];
    steps.push({
        action: "original-array",
        k: k,
        array: [...nums],
        text: "This is the original array",
    });
    let currSum = 0;
    let maxSum = -Infinity;

    let left = 0;

    steps.push({
        action: "original-sums",
        array: [...nums],
        k: k,
        currSum: currSum,
        maxSum: maxSum,
        text: `These are the current sum and max sum. Now we will iterate througn the array, to calculate the max average of the window array with ${k} size.`,
    });

    for (let i = 0; i < nums.length; i++) {
        steps.push({
            action: "iteration-start",
            array: [...nums],
            currSum: currSum,
            left: left,
            k: k,
            index: i,
            maxSum: maxSum,
            text: `Starting iteration ${i + 1}`,
        });
        currSum += nums[i];
        steps.push({
            action: "current-sum-update",
            array: [...nums],
            currSum: currSum,
            left: left,
            k: k,
            index: i,
            maxSum: maxSum,
            text: `Updating the current sum to ${currSum}. We will check if the current index [${i}] is greater than or equal to the window size.`,
        });
        if (i >= k) {
            left++;
            currSum -= nums[i - k];
            steps.push({
                action: "current-sum-update",
                array: [...nums],
                left: left,
                currSum: currSum,
                k: k,
                index: i,
                maxSum: maxSum,
                text: `The current index [${i}] is greater than or equal to k (${k}). Subtracting the current sum from the element at the index [${i - k}], which is lefing the window.`,
            });
        }
        steps.push({
            action: "index-check",
            array: [...nums],
            currSum: currSum,
            k: k,
            left: left,
            index: i,
            maxSum: maxSum,
            text: `Checking if the current index [${i}] is greater than or equal to k minus 1 (${k - 1}).`,
        });
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currSum);
            steps.push({
                action: "max-sum-update",
                array: [...nums],
                currSum: currSum,
                k: k,
                index: i,
                left: left,
                maxSum: maxSum,
                text: `The current index [${i}] is greater than or equal to k minus 1 (${k - 1}). Updating the max sum to the maximum value between itself and the current sum.`,
            });
        }
        steps.push({
            action: "iteration-end",
            array: [...nums],
            currSum: currSum,
            left: left,
            index: i,
            k: k,
            maxSum: maxSum,
            text: `Ending iteration ${i + 1}`,
        });
    }

    steps.push({
        action: "final-result",
        array: [...nums],
        currSum: currSum,
        k: k,
        left: left,
        maxSum: maxSum,
        returnValue: Number(maxSum / k).toFixed(2),
        text: `The final result is the max sum ${maxSum} divided by k ${k}, which is ${(maxSum / k).toFixed(2)}. Returning it.`,
    });

    return steps;
}
