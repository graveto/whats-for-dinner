import Card from "../Card";
import Recipe from "../Recipe";
import "./Recipes.css";

const Recipes = ({ recipes }) => {
  console.log(recipes)
  return (
    <Card className="recipes">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </Card>
  );
};

export default Recipes;
