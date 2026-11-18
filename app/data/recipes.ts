// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "cheese-burger", title: "Cheese Burger", emoji: "",
    minutes: 310, difficulty: "Easy", cuisine: "French" },
    { id: "parle-g", title: "Parle G", emoji: "",
    minutes: 1, difficulty: "Hard", cuisine: "Indian" },
    { id: "vodka", title: "Vodka", emoji: "",
    minutes: 5, difficulty: "Easy", cuisine: "Russian" },
  // ...more recipes
];