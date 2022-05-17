import Card from "../Card";
import Recipe from "../Recipe";
import "./Recipes.css";

const Recipes = ({ recipes }) => {
  return (
    <Card className="recipes">
      <ul>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </ul>
    </Card>
  );
};

export default Recipes;
