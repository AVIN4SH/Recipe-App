import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Recipe from "./Recipe";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading === true) {
    <div className="mx-auto  flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl">
          Cooking....🥗🫕🍰🍕.... Please Wait
        </h1>
      </div>
    </div>;
  }

  return (
    <div className="px-8 container mx-auto flex flex-wrap justify-center gap-10 min-h-[80vh]">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <Recipe key={index} item={item} />)
      ) : (
        <div className="mx-auto  flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl">
              Search for Recipes Now!!!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
