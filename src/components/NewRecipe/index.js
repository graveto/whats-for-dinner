import RecipeForm from "../RecipeForm";
import "./NewRecipe.css";

const NewRecipe = (props) => {
  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = { ...enteredRecipeData };
    props.onRecipeAdd(recipeData);
  };

  return (
    <div className="new-recipe">
      <RecipeForm onSaveRecipeData={saveRecipeDataHandler} />
    </div>
  );
};

export default NewRecipe;
