import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);
const URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${URL}?search=${searchParam}`);
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourite(currentItem) {
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(
      (item) => item.id === currentItem.id
    );
    if (index === -1) {
      //-1 means item not present
      cpyFavouritesList.push(currentItem);
    } else {
      cpyFavouritesList.splice(index);
    }
    setFavouritesList(cpyFavouritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailData,
        setRecipeDetailData,
        handleAddToFavourite,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
  //   This will provide context which we can consume throughtout the app by wrapping our root i.e; App component in main.jsx in <GlobalState></GlobalState> tag
  //in value property we can pass the state and its set method in curly braces so that we can use it elsewhere
}

export { GlobalContext };
export default GlobalState;
