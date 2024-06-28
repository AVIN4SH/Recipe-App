import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function RecipeDetail() {
  const { id } = useParams(); //this useParam hook provides us the unique id of item as we provided dynamic url with /:id in path to recipe detail page
  const {
    recipeDetailData,
    setRecipeDetailData,
    favouritesList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  const URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

  async function getRecipeDetail() {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    // console.log(data);
    if (data?.data) {
      setRecipeDetailData(data?.data);
    }
  }

  useEffect(() => {
    getRecipeDetail();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="row-start-2 lg:row-start-auto ">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailData?.recipe?.image_url}
            alt="foodImg"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-black text-2xl truncate">
          {recipeDetailData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetailData?.recipe)}
            className="text-sm p-3 px-8 mt-3 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList?.findIndex(
              (item) => item.id === recipeDetailData?.recipe?.id
            ) !== -1
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 mt-3">
            {recipeDetailData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-lg font-semibold text-black">
                  🟢 {ingredient.quantity} - {ingredient.unit}
                </span>
                <span className="text-lg font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
