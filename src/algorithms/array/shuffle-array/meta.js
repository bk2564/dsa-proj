export const meta = {
    id: 14,
    number: 1470,
    route: "shuffle-array",
    slug: "shuffle-array",
    title: "Shuffle the Array",
    category: "Array",
    difficulty: "Easy",
    explanation:
        "This algorithm is a simple shuffling of the array. " +
        "To do so, in each iteration, we will simply add the current index element to the array, "+
        "in sequence, the index + k element, where n is the half size of the array, since the question "+
        "says that the input array is of the size 2n, being formed by two (x and y) arrays of size n. "+
        "In the end, we will return the resulting array. ",
    codePath:
        "/codes/array/shuffle-array/shuffle-array.js",
};
