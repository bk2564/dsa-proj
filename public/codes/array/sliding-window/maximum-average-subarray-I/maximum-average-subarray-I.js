function findMaxAverage(nums, k) {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (i >= k) {
      currSum -= nums[i - k];
    }
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum / k;
}
