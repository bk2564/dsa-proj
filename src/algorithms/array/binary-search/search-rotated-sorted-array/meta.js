export const meta = {
  id: 2,
  number: 33,
  route: "binary-search",
  slug: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  category: "Array / Binary Search",
  difficulty: "Medium",
  explanation:
    "This algorithm applies binary search to a rotated sorted array. At each step, it identifies which half is sorted, checks whether the target is inside that sorted range, and discards the other half. This keeps the complexity O(log n).",
  codePath:
    "/codes/array/binary-search/search-rotated-sorted-array/search-rotated-sorted-array.js",
};
