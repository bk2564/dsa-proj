import { ArrayExecutionSection } from "../../array-execution";

export const binarySearchDemo = {
  array: [1, 3, 5, 7, 9, 11, 13],
  target: 11,
};

export function getBinarySearchSteps(nums, target) {
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
      });
      return steps;
    }

    if (nums[mid] < target) {
      steps.push({
        array: [...nums],
        low,
        mid,
        high,
        text: `${nums[mid]} < ${target}, move low to ${mid + 1}`,
      });
      low = mid + 1;
    } else {
      steps.push({
        array: [...nums],
        low,
        mid,
        high,
        text: `${nums[mid]} > ${target}, move high to ${mid - 1}`,
      });
      high = mid - 1;
    }
  }

  steps.push({
    array: [...nums],
    low,
    mid: -1,
    high,
    found: false,
    text: `Target ${target} not found`,
  });

  return steps;
}

export function BinarySearchExecutionSection() {
  const steps = getBinarySearchSteps(binarySearchDemo.array, binarySearchDemo.target);
  const subtitle = `Array: [${binarySearchDemo.array.join(", ")}], target: ${binarySearchDemo.target}`;

  return (
    <ArrayExecutionSection
      title="Execution Steps"
      subtitle={subtitle}
      steps={steps}
      getHighlight={(step) => {
        const highlight = new Map();

        if (step.low >= 0 && step.low < step.array.length) {
          highlight.set(step.low, "bg-blue-500");
        }
        if (step.mid >= 0 && step.mid < step.array.length) {
          highlight.set(step.mid, step.found ? "bg-green-500" : "bg-yellow-500");
        }
        if (step.high >= 0 && step.high < step.array.length) {
          highlight.set(step.high, "bg-blue-500");
        }

        return highlight;
      }}
    />
  );
}
