import NewRecipe from "./components/NewRecipe";
import Recipes from "./components/Recipes";
import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import { useState } from "react";

const DUMMY_RECIPES = [
  {
    id: "0",
    title: "Spaghetti",
    directions:
      "Boil water and dance. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
    ingredients: ["water", "salt", "spaghetti"],
    recipeLink: ""
  },
  {
    id: "1",
    title: "Pasta",
    directions:
      "Boil water and wait. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
    ingredients: ["water", "salt", "pasta"],
    recipeLink: ""
  },
  {
    id: "2",
    title: "Linguini",
    directions:
      "Boil water and add salt. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
    ingredients: ["water", "salt", "linguini"],
    recipeLink: ""
  }
];

function App() {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const searchRecipeHandler = (recipeTitle) => {
    setRecipes((prevRecipes) => { 
      return prevRecipes.filter((recipe) => {
        return recipe.title.toLocaleLowerCase() === recipeTitle.title.toLocaleLowerCase();
      });
    });
  };

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => {
      recipe["id"] = prevRecipes.length;
      return [...prevRecipes, recipe];
    });
  };

  return (
    <div>
      <AppHeader />
      <Search onRecipeSearch={searchRecipeHandler} />
      <NewRecipe onRecipeAdd={addRecipeHandler} />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
