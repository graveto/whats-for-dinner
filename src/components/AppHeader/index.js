import "./AppHeader.css";
import dinnerImage from "../../assets/images/meals.jpg";

const AppHeader = () => {
  return (
    <div>
      <header>
        <h3>What's for dinner?</h3>
      </header>
      <div className="main-image">
        <img src={dinnerImage} alt="Dinner" />
      </div>
    </div>
  );
};

export default AppHeader;
