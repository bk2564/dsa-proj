export const meta = {
    id: 5,
    number: 48,
    route: "rotate-image",
    slug: "rotate-image",
    title: "Rotate Image",
    category: "Array / Math",
    difficulty: "Medium", 
    explanation: "This algorithm modifies the input matrix and don't return anything, because it is done in-place. "+
    "Firstly we need to invert the elements outside the main diagonal, for which we will be using a dummy variable. " +
    "That means which value was in [0, 1], now it will be in [1, 0]. Hence the j = i + 1. Once i = 2, we stop the inversion. "+
    "Secondly, we need to invert the elements of each row. That means if row 0 was [1, 4, 7], it will be [7, 4, 1]. After that, "+
    "we will have the rotated matrix.",
    codePath: "/codes/array/math/rotate-image/rotate-image.js"
}