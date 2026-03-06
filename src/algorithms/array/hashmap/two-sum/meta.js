export const meta = {
  id: 1,
  number: 1,
  route: "two-sum",
  slug: "two-sum",
  title: "Two Sum",
  category: "Array / HashMap",
  difficulty: "Easy",
  explanation:
    "This algorithm uses a HashMap to store seen values and their indices. For each value, it computes the complement (target - value) and checks whether that complement is already in the map. If yes, it returns both indices; otherwise it stores the current value and continues.",
  codePath: "/codes/array/hashmap/two-sum/two-sum.js",
};
