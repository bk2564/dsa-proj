export function getSteps(nums, target) {
  const steps = [];
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    steps.push({
      action: "check-mid",
      array: [...nums],
      low,
      mid,
      high,
      text: `Checking mid [${mid}] => (${nums[mid]}) against target (${target}).`,
    });

    if (nums[mid] === target) {
      steps.push({
        action: "found",
        array: [...nums],
        low,
        mid,
        high,
        found: true,
        text: `nums[mid] => (${nums[mid]}) equals target (${target}). Returning index [${mid}].`,
        returnValue: `${mid}`,
      });
      return steps;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        steps.push({
          action: "move-high",
          array: [...nums],
          low,
          mid,
          high,
          text: `low [${low}] <= mid [${mid}] | ${nums[low]} <= ${nums[mid]}. So, (${low}..${mid}) is sorted [${nums.slice(low, mid + 1).join(",")}], and target [${target}] is in it. Updating high to ${mid - 1}.`,
        });
        high = mid - 1;
      } else {
        steps.push({
          action: "move-low",
          array: [...nums],
          low,
          mid,
          high,
          text: `low [${low}] <= mid [${mid}] | ${nums[low]} <= ${nums[mid]}. So, (${low}..${mid}) is sorted [${nums.slice(low, mid + 1).join(",")}], but target [${target}] is not in it. Updating low to ${mid + 1}.`,
        });
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        steps.push({
          action: "move-low",
          array: [...nums],
          low,
          mid,
          high,
          text: `low (${low}) > mid (${mid}) | [${nums[low]}] > [${nums[mid]}]. So, (${mid}..${high}) is sorted [${nums.slice(mid, high + 1).join(",")}], and target [${target}] is in it. Updating low to ${mid + 1}.`,
        });
        low = mid + 1;
      } else {
        steps.push({
          action: "move-high",
          array: [...nums],
          low,
          mid,
          high,
          text: `low (${low}) > mid (${mid}) | [${nums[low]}] > [${nums[mid]}]. So, (${mid}..${high}) is sorted [${nums.slice(mid, high + 1).join(",")}], but target [${target}] is not in it. Updating high to ${mid - 1}.`,
        });
        high = mid - 1;
      }
    }
  }

  if (!steps[steps.length - 1]?.found) {
    const clampedLow = Math.max(0, Math.min(low, nums.length - 1));
    const clampedHigh = Math.max(0, Math.min(high, nums.length - 1));
    const clampedMid = Math.floor((clampedLow + clampedHigh) / 2);

    steps.push({
      action: "not-found",
      array: [...nums],
      low: clampedLow,
      mid: clampedMid,
      high: clampedHigh,
      text: `Stop: low (${low}) > high (${high}). Target [${target}] was not found.`,
      returnValue: "-1",
    });
  }

  return steps;
}
