import SearchForm from "../SearchForm";
import "./Search.css";

const Search = (props) => {
  const searchRecipeDataHandler = (searchedRecipeData) => {
    const recipeData = {...searchedRecipeData};
    props.onRecipeSearch(recipeData);
  };

  return (
    <div className="search-recipe">
      <SearchForm onSearchRecipeData={searchRecipeDataHandler}/>
    </div>
  );
};

export default Search;
