export const meta = {
    id: 13,
    number: 3,
    route: "longest-substring-without-repeating-characters",
    slug: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    category: "String / Hashmap",
    difficulty: "Medium",
    explanation:
        "This algorithm uses Sliding Window to find the maximum length of a substring inside of the input string. " +
        "Firstly, we set a new Map to store the characters seen so far. " +
        "Throughout each iteration, we will check if the current character is in the map. " +
        "If it is, we will set the start index to the maximum value between itself and the value found in the map with the key of the current character plus 1, to move the window. " +
        "In every iteration we will add the current character to the map and the window, at the key of the current character, "+
        "and the value will be the array index of its last occurence, "+
        "We will also be updating the max length to the max value between itself and the size of the current window of characters. " +
        "In the end, we will return the max length found. ",
    codePath:
        "/codes/string/hashmap/longest-substring-without-repeating-characters/longest-substring-without-repeating-characters.js",
};
