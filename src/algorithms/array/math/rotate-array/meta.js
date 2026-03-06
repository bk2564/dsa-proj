export const meta = {
    id: 6,
    number: 148,
    route: "rotate-array",
    slug: "rotate-array",
    title: "Rotate Array",
    category: "Array / Math",
    difficulty: "Medium", 
    explanation: "This algorithm uses the Triple Reverse to rotate the array. Firstly, we reverse the entire array, "+
    "using the custom reverse function. Then, setting k as (k % nums.length), we reverse the first k elements. "+
    "At last, we reverse the last (nums.length - k) elements. The reverse function sets a start and an end index, "+
    "then it swaps stard and end values and increments the start index by 1 and decrements the end index by 1. "+
    "It ends when the start index is greater than the end index. So, the array is reversed.",
    codePath: "/codes/array/math/rotate-array/rotate-array.js"
}