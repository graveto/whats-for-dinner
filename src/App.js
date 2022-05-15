import Recipes from "./components/Recipes";

function App() {
  const recipes = [
    {
      id: "e1",
      title: "Spaghetti",
      directions: "Boil water and dance",
      ingredients: ["water", "salt", "spaghetti"],
      recipeLink: ""
    },
    {
      id: "e2",
      title: "Pasta",
      directions: "Boil water and wait",
      ingredients: ["water", "salt", "pasta"],
      recipeLink: ""
    },
    {
      id: "e3",
      title: "Linguini",
      directions: "Boil water and add salt",
      ingredients: ["water", "salt", "linguini"],
      recipeLink: ""
    }
  ];
  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
