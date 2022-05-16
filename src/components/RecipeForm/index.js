import "./RecipeForm.css";

const RecipeForm = () => {
  return (
    <div>
      <h4>Add Recipe</h4>
      <form>
        <div className="new-recipe__controls">
          <div className="new-recipe__control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="new-recipe__control">
            <label htmlFor="link">Link</label>
            <input type="text" name="link" id="link" />
          </div>
          <div className="new-recipe__control">
            <label htmlFor="directions">Directions</label>
            <textarea
              name="directions"
              id="directions"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
