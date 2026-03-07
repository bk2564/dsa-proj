export const meta = {
    id: 7,
    number: 66,
    route: "plus-one",
    slug: "plus-one",
    title: "Plus One",
    category: "Array / Math",
    difficulty: "Easy", 
    explanation: "This algorithm uses a carry to control the addition of the digits. "+
    "Firstly, we get the last digit of the array and add 1 to it. If the result is greater than 9, we set the carry to 1 and put 0 at the result array. "+
    "Then, starting from the second last digit (if the input has more than one digit), we add the carry to the current digit. "+
    "If the addition result is greater than 9, we set the carry to 1 and put 0 at the start of the result array. If not, we set the carry to 0. "+
    "We do this until we reach the first digit of the array. "+
    "At the end, if the carry equals 1, we put it at the start of the result array. "+
    "Finally, we return the result array.",
    codePath: "/codes/array/math/plus-one/plus-one.js"
}