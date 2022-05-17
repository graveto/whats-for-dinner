import Card from "../Card";
import Recipe from "../Recipe";
import "./Recipes.css";

const Recipes = (props) => {
  let searchedRecipes = [];
  if (props.searchedRecipe.title) {
    searchedRecipes = props.recipes.filter((recipe) => {
      return (
        recipe.title.toLowerCase() === props.searchedRecipe.title.toLowerCase()
      );
    });
  } else {
    searchedRecipes = props.recipes;
  }
  return (
    <Card className="recipes">
      <ul>
        {searchedRecipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          searchedRecipes.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })
        )}
      </ul>
    </Card>
  );
};

export default Recipes;
