export function getSteps(nums) {
  const numsSet = new Set();
  const steps = [];
  
  steps.push({
    action: "original-array",
    nums: [...nums],
    numsSet: [...numsSet],
    text: "This is the original array"
  })
  
  for (let i = 0; i < nums.length; i++) {
    steps.push({
      action: "check-value",
      index: i,
      nums: [...nums],
      numsSet: [...numsSet],
      currentValue: nums[i],
      text: `Checking if the current number (${nums[i]}) is already in the set.`
    })
    if (numsSet.has(nums[i])) {
      steps.push({
        action: "check-true",
        index: i,
        nums: [...nums],
        numsSet: [...numsSet],
        returnValue: "True",
        currentValue: nums[i],
        has: true,
        found: [...numsSet].indexOf(nums[i]),
        text: `The current number (${nums[i]}) is already in the set. Returning true.`
      })
      return steps;
    }
    numsSet.add(nums[i]);
    steps.push({
      action: "check-false",
      index: i,
      nums: [...nums],
      currentValue: nums[i],
      has: false,
      numsSet: [...numsSet],
      text: `The current number (${nums[i]}) is not in the set. Adding it to the set.`
    })
  }
  steps.push({
    action: "end",
    nums: [...nums],
    numsSet: [...numsSet],
    returnValue:  "False",
    text: `All the numbers were unique. Returning false.`
  })
  return steps;
}
