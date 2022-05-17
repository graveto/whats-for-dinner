import { useState } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [recipeSearch, setRecipeSearch] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const recipeSearchData = {
      title: recipeSearch
    };
    props.onSearchRecipeData(recipeSearchData);
    setRecipeSearch("");
  };

  const searchChangeHandler = (event) => {
    setRecipeSearch(event.target.value);
  };

  return (
    <div>
      <h4>Search Recipes</h4>
      <form onSubmit={formSubmitHandler}>
        <div className="search-recipe__controls">
          <div className="search-recipe__control">
            <input
              type="text"
              name="search"
              id="search"
              onChange={searchChangeHandler}
            />
          </div>
          <div className="search-buttons">
            <div className="search-recipe__actions">
              <button type="submit">Search</button>
            </div>
            <div className="search-recipe__actions">
              <button onClick={(event)=>{
                event.preventDefault();
                props.onSearchRecipeData("");
              }}>Show All</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
