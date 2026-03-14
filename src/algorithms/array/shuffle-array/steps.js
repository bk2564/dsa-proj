export function getSteps(nums, n) {
    const steps = []
    const ans = []

    steps.push({
        action: "original-array",
        nums: [...nums],
        ans: [...ans],
        currentIndex: 0,
        n: n,
        text: "This is the original array. We will iterate through it to mount the shuffled array.",
    });
    for(let i = 0; i < n; i++){
        steps.push({
            action: "iteration-start",
            currentIndex: i,
            nums: [...nums],
            ans: [...ans],
            i: i,
            n: n,
            text: `Starting iteration ${i + 1}`,
        });
        const targetIndexFirst = ans.length;
        ans.push(nums[i])
        steps.push({
            action: "add-element-to-ans",
            nums: [...nums],
            ans: [...ans],
            currentIndex: i,
            sourceIndex: i,
            targetIndex: targetIndexFirst,
            i: i,
            n: n,
            text: `Adding the element at index [i] | [${i}] to the answer array.`,
        });
        const targetIndexSecond = ans.length;
        ans.push(nums[i + n])
        steps.push({
            action: "add-element-to-ans",
            nums: [...nums],
            ans: [...ans],
            currentIndex: i + n,
            sourceIndex: i + n,
            targetIndex: targetIndexSecond,
            i: i,
            n: n,
            text: `Adding the element at index [i + n] | [${i + n}] to the answer array.`,
        });
    }

    steps.push({
        action: "return-value",
        nums: [...nums],
        ans: [...ans],
        returnValue: [...ans],
        n: n,
        text: `The shuffled array is mounted. Returning it.`,
    });
    return steps
};
