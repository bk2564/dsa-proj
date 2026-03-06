export function getSteps(nums1, nums2) {
  const map = new Map();
  const steps = [];
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);

    steps.push({
      action: "insert-into-map",
      nums1: nums1,
      nums2: nums2,
      hashmap: new Map(map),
      result: [...result],
      value: nums1[i],
      index: i,
      text: `Inserting [${nums1[i]}] into the map. Updates its occurence if it is already in it.`,
    });
}

steps.push({
    action: "map-ready",
    nums1: nums1,
    nums2: nums2,
    result: [...result],
    hashmap: new Map(map),
    text: `The map is ready. It contains the elements of the first array.`,
  });

  for (let i = 0; i < nums2.length; i++) {
    steps.push({
      action: "check-intersection",
      nums1: nums1,
      nums2: nums2,
      result: [...result],
      hashmap: new Map(map),
      value: nums2[i],
      index: i,
      text: `Checks if [${nums2[i]}] is in the map.`,
    });
    if (map.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      steps.push({
        action: "insert-into-result",
        nums1: nums1,
        nums2: nums2,
        result: [...result],
        hashmap: new Map(map),
        value: nums2[i],
        index: i,
        text: `[${nums2[i]}] is in the map. Inserts into the result.`,
      });
      map.set(nums2[i], map.get(nums2[i]) - 1);
      steps.push({
        action: "updates-map",
        nums1: nums1,
        nums2: nums2,
        result: [...result],
        hashmap: new Map(map),
        value: nums2[i],
        index: i,
        text: `[${nums2[i]}] is in the map. Updates its occurence in the map.`,
      });
    }
  }
  steps.push({
    action: "return-result",
    nums1: nums1,
    nums2: nums2,
    result: [...result],
    hashmap: new Map(map),
    text: `Returns the result array.`,
    returnValue: result.join(", "),
  });
  return steps;
}

