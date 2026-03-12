export const meta = {
  id: 11,
  number: 209,
  route: "minimum-size-subarray-sum",
  slug: "minimum-size-subarray-sum",
  title: "Minimum Size Subarray Sum",
  category: "Array / Binary Search",
  difficulty: "Medium",
  explanation:
    "This algorithm uses sliding window to find the minimum size of the subarray, which sums to al least the target. "+
    "The window starts at 1 length, with both left and right indexes being 0. "+
    "It iterates through the array, adding to the sum each element at the current right index. "+
    "If the sum is not greater than or equal to the target, it only increments the right index. "+
    "If the sum is greater than or equal to the target, while it is greater of equal, it sets the new minimum length of the subarray, to the minimum value between itself and the 'window' subarray, "+
    "which contains the values between the left and right indexes. Then it subtracts the left index value from the sum, and at last, it increments the left index. "+
    "In the end, it finds the minumum subarray length by comparing the current minumum length with the length of the original array. "+
    "If it is greater, it returns 0, if its not, it returns the current minimum length. ",
  codePath:
    "/codes/array/binary-search/minimum-size-subarray-sum/minimum-size-subarray-sum.js",
};