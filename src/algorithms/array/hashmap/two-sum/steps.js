export function getSteps(nums, target) {
  const steps = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    steps.push({
      action: "compute-complement",
      array: [...nums],
      hashmap: new Map(map),
      complement,
      value: nums[i],
      index: i,
      text: `Index [${i}] -> value (${nums[i]}). Need complement (${complement}) to make target (${target}).`,
    });
    if (map.has(complement)) {
      steps.push({
        action: "pair-found",
        array: [...nums],
        hashmap: new Map(map),
        complement,
        value: nums[i],
        index: i,
        found: true,
        text: `Map has complement (${complement}) at index [${map.get(complement)}]. Returning pair [${map.get(complement)}, ${i}].`,
        returnValue: `[${map.get(complement)}, ${i}]`,
      });
      break;
    }
    map.set(nums[i], i);
    steps.push({
      action: "store-value",
      array: [...nums],
      hashmap: new Map(map),
      complement,
      value: nums[i],
      index: i,
      text: `Map does not contain complement (${complement}). Store { (${nums[i]}) -> [${i}]  }.`, 
    });
  }
  if (!steps[steps.length - 1].found) {
    steps.push({
      action: "not-found",
      array: [...nums],
      hashmap: new Map(map),
      complement: target - nums[nums.length - 1],
      value: nums[nums.length - 1],
      index: nums.length - 1,
      text: `Finished scan: no complement pair sums to target [${target}]. Return [].`,
      returnValue: `[]`,
    });
  }
  return steps;
}


