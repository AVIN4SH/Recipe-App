import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Recipe from "./Recipe";

function Favourite() {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item, index) => <Recipe key={index} item={item} />)
      ) : (
        <div className="mx-auto  flex flex-col justify-center  min-h-[70vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl">
              Nothing in Favourites... Add Now !!!🍕🍰
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourite;
