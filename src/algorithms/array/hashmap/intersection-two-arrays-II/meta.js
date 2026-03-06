export const meta = {
  id: 3,
  number: 350,
  route: "intersection-two-arrays-II",
  slug: "intersection-two-arrays-II",
  title: "Intersection of Two Arrays",
  category: "Array / HashMap",
  difficulty: "Easy",
  explanation:
    "This algorithm uses a HashMap to store values of the first array and checks if the second array contains them. "+
    "Firstly, for each value of the first array, it computes the value into the map. If the value is repeated, for each occurence, it increments the number of occurences. "+
    "Secondly, for each value of the second array, it checks if it exists in the map. If yes, it decrements the number of occurences and stores in the result array, each occurence of each value. "+
    " At the end, it returns the result array.",
  codePath: "/codes/array/hashmap/intersection-two-arrays-II/intersection-two-arrays-II.js",
};
