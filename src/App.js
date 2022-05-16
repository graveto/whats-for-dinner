import NewRecipe from "./components/NewRecipe";
import Recipes from "./components/Recipes";
import AppHeader from "./components/AppHeader";

function App() {
  const recipes = [
    {
      id: "e1",
      title: "Spaghetti",
      directions:
        "Boil water and dance. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
      ingredients: ["water", "salt", "spaghetti"],
      recipeLink: ""
    },
    {
      id: "e2",
      title: "Pasta",
      directions:
        "Boil water and wait. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
      ingredients: ["water", "salt", "pasta"],
      recipeLink: ""
    },
    {
      id: "e3",
      title: "Linguini",
      directions:
        "Boil water and add salt. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare. Lorem ipsum dolor sit amet, ut mel partem ridens everti, prima saperet eum id, ne sale nonumy recusabo pro. Ut nostrud invidunt consulatu pro, ad purto gubergren pri, duo odio nominati an. Fugit commodo fierent in pri, eum ea consequat definitiones. Appetere invidunt cotidieque usu at. Vim no probo theophrastus voluptatibus, modus sapientem dignissim mel ei. Clita semper quaeque nam at, te mei dicta accommodare.",
      ingredients: ["water", "salt", "linguini"],
      recipeLink: ""
    }
  ];
  return (
    <div>
      <AppHeader />
      <NewRecipe />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
