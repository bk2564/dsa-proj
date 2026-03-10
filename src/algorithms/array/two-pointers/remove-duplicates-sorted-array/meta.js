export const meta = {
    id: 10,
    number: 26,
    route: "remove-duplicates-sorted-array",
    slug: "remove-duplicates-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    category: "Array / Two Pointers",
    difficulty: "Medium",
    explanation:
      "This algorithm uses a two pointer (left and right) approach to remove duplicates from a sorted array. "+
      "Firstly, we set the left pointer to 0. Next, we will iterate througn the array, starting at the index 1, which is the right pointer. "+
      "For each iteration, we check if the value on the left pointer is different from the value on the right pointer. "+
      "If they are different, we increment the left pointer and update its value to the value on the right pointer. "+
      "If they are equal, we just increment the right pointer (as done in every iteration). "+
      "At the end, we return the [left pointer + 1] of the array, which is the number of unique elements. "+
      "This works because we are modifying the input array so it will have all its unique values at the start (until the left pointer). ",
      codePath: "/codes/array/two-pointers/remove-duplicates-sorted-array/remove-duplicates-sorted-array.js",
}