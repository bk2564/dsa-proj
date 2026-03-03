export function getSteps(nums, target) {
  const steps = [];
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    steps.push({
      array: [...nums],
      low,
      mid,
      high,
      text: `Check mid index ${mid} (value ${nums[mid]})`,
    });

    if (nums[mid] === target) {
      steps.push({
        array: [...nums],
        low,
        mid,
        high,
        found: true,
        text: `Target ${target} found at index ${mid}`,
        returnValue: `${mid}`,
      });
      return steps;
    }

    if (nums[mid] < target) {
      steps.push({
        array: [...nums],
        low,
        mid,
        high,
        text: `${nums[mid]} < ${target}, move low to ${mid + 1 < nums.length ? mid + 1 : mid}`,
      });
      low = mid + 1;
    } else {
      steps.push({
        array: [...nums],
        low,
        mid,
        high,
        text: `${nums[mid]} > ${target}, move high to ${mid - 1 < nums.length ? mid - 1 : mid}`,
      });
      high = mid - 1;
    }
  }

  if (!steps[steps.length - 1]?.found) {
    steps.push({
      array: [...nums],
      low: nums.length - 1,
      mid: nums.length - 1,
      high: nums.length - 1,
      text: `Target ${target} not found`,
      returnValue: "-1",
    });
  }

  return steps;
}
