export const meta = {
  id: 8,
  number: 136,
  route: "single-number",
  slug: "single-number",
  title: "Single Number",
  category: "Array / Bit Manipulation",
  difficulty: "Easy",
  explanation:
    "This algorithm uses bit manipulation to find the unique value. "+
    "It iterates througn the array, XORing each element with the result and setting the result to the XOR operation return value. "+
    "XOR works because it cancels duplicated values, as if both bits are 1, or 0, it returns 0. If one is 0 and the other is 1, the return is 1. "+
    "For example, if the array is [1, 1, 2, 3, 2], XORing each element with the result "+
    "will check duplicate bits in the same position. The input array in binary of 2 bits is: [01, 01, 10, 11, 10]. And the initial value of result is 00. "+
    "XORing result (00) with 1 (01) will set the result to (01). Iterating through the array, we XOR the current result (01) with the next element (01), which returns (00). "+
    "Then, (00) XOR (10) returns (10), (10) XOR (11) returns (01), and (01) XOR (10) returns (11), which is 3, the unique value in the input array. "+
    "This operation is independent with the sorting of the array. ",
  codePath:
    "/codes/array/bit-manipulation/single-number/single-number.js",
};