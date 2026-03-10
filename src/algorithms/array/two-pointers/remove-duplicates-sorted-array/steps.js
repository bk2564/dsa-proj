export function getSteps(nums) {
    const steps = [];
    if (nums.length == 0) {
      steps.push({
        action: "0-length-array",
        returnValue: 0,
        text: "The array is empty. Returning 0."
      })
        return 0;
    }
    steps.push({
        action: "original-array",
        nums: [...nums],
        text: "This is the original array"
    })
  let left = 0;

  steps.push({
    action: "set-left",
    nums: [...nums],
    left: left,
    text: "Setting the left index to 0"
  })
  for (let right = 1; right < nums.length; right++) {
    steps.push({
      action: "check-value",
      nums: [...nums],
      left: left,
      right: right,
      text: `The right index is now ${right}. Checking if the value on the right index (${nums[right]}) is different from the value on the left index (${nums[left]}).`
    })
    if (nums[right] !== nums[left]) {
        steps.push({
          action: "check-false",
          nums: [...nums],
          left: left,
          right: right,
          text: `The number on the right index (${nums[right]}) is different from number on the left index (${nums[left]}). Incrementing the left index.`
        })
        left++;
        steps.push({
          action: "check-false",
          nums: [...nums],
          left: left,
          right: right,
          text: `Updating the left index to ${left}.`
        })
        nums[left] = nums[right];
        steps.push({
            action: "update-left",
            nums: [...nums],
            left: left,
            right: right,
            text: ` Updating the left index value to the next number (${nums[right]}).`
        })
    } else{
        steps.push({
          action: "check-false",
          nums: [...nums],
          left: left,
          right: right,
          text: `The number on the right index (${nums[right]}) is equal to the number on the left index (${nums[left]}). We don't need to update the left index.`
        })
    }
    steps.push({
      action: "check-false",
      nums: [...nums],
      left: left,
      right: right,
      text: `Incrementing the right index.`
    })
  }

  steps.push({
    action: "return-value",
    nums: [...nums],
    left: left,
    returnValue: left + 1,
    text: `The array has been trasversed. Returning the [left pointer (${left}) + 1] of the array, which is the number of unique elements.`
  })

  return steps;
}
