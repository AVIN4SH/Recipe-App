import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import { Routes, Route } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div className="bg-white text-gray-600 min-w-[100vw] min-h-[100vh] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route
          path="/recipeDetail/:id" //this :id represend a dynamix id path that will be different for several recipies
          element={<RecipeDetail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
