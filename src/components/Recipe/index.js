import Card from "../Card";
import "./Recipe.css";
import { useState } from "react";

const Recipe = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  // const [timer, setTimer] = useState(0);

  // const incrementer = () => {
  //   let increm = 0;
  //   let timerInterval = setInterval(() => {
  //     increm++;
  //     if (increm === 10) {
  //       clearInterval(timerInterval);
  //     }
  //     setTimer(increm);
  //   }, 1000);
  // };

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   incrementer();
  // };

  return (
    <Card className="recipe">
      <div className="recipe__directions">
        <h2>{title}</h2>
        <div>{recipe.directions}</div>
      </div>
      {/*<button onClick={clickHandler}>Update</button>
       <button>{timer}</button>*/}
    </Card>
  );
};

export default Recipe;
