import { useState } from "react";
import Card from "../Card";
import Modal from "../Modal";
import "./Recipe.css";
import recipeImage from "../../assets/images/maxresdefault.jpg";

const Recipe = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [visible, setVisible] = useState("hide");

  const modalHandler = () => {
    if (visible === "hide") {
      setVisible("show");
    } else {
      setVisible("hide");
    }
  };

  return (
    <li>
      <Card className="recipe">
        <div className="recipe__directions">
          <h2>{title}</h2>
          <div className="recipe__directions__row">
            <img src={recipeImage} alt="Pasta" />
            <div>{recipe.directions}</div>
          </div>
          <button onClick={modalHandler}>View</button>
          <Modal
            onClick={modalHandler}
            onCloseModal={modalHandler}
            visible={visible}
          />
        </div>
      </Card>
    </li>
  );
};

export default Recipe;
