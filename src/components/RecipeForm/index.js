import { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = (props) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [recipeDirections, setRecipeDirections] = useState("");

  const titleChangeHandler = (event) => {
    setRecipeTitle(event.target.value);
  };

  const linkChangeHandler = (event) => {
    setRecipeLink(event.target.value);
  };

  const directionsChangeHandler = (event) => {
    setRecipeDirections(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const recipeData = {
      title: recipeTitle,
      link: recipeLink,
      directions: recipeDirections
    };

    props.onSaveRecipeData(recipeData);

    setRecipeTitle("");
    setRecipeLink("");
    setRecipeDirections("");
  };

  return (
    <div>
      <h4>New Recipe</h4>
      <form onSubmit={formSubmitHandler}>
        <div className="new-recipe__controls">
          <div className="new-recipe__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={recipeTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-recipe__control">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              id="link"
              value={recipeLink}
              onChange={linkChangeHandler}
            />
          </div>
          <div className="new-recipe__control">
            <label htmlFor="directions">Directions</label>
            <textarea
              name="directions"
              id="directions"
              cols="30"
              rows="5"
              value={recipeDirections}
              onChange={directionsChangeHandler}
            />
          </div>
        </div>
        <div className="new-recipe__actions">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
