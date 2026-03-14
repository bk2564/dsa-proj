export const meta = {
    id: 12,
    number: 643,
    route: "maximum-average-subarray-I",
    slug: "maximum-average-subarray-I",
    title: "Maximum Average Subarray I",
    category: "Array / Sliding Window",
    difficulty: "Easy",
    explanation:
      "This algorithm uses Sliding Window to find the maximum average subarray inside of the input array. "+
      "Firstly, we set the current sum to 0 and the max sum to negative infinity. Next, we will iterate througn the array, mounting the window first. "+
      "To do so, starting at the index 0, we will check if the current index is greater than or equal to the window size. "+
      "If it is, we will subtract the current sum from the element lefting the window. "+
      "If it is not, we will simply add the current element to the sum and the window. "+
      "Next, we will check if the window has k elements, by checking if the current index is greater than or equal to the window size minus 1. "+
      "If it has, we will calculate the max sum, by picking the maximum value between itself and the current sum "+
      "In the end, we will return the max sum divided by the window size. ",
      codePath: "/codes/array/sliding-window/maximum-average-subarray-I/maximum-average-subarray-I.js",
}