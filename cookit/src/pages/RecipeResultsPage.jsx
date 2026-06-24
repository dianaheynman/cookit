import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import { supabase } from "../supabase";

function RecipeResultsPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const { data, error } = await supabase.from("recipes").select("*");

      if (error) {
        console.log(error);
      } else {
        setRecipes(data);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <>
      <Navbar />

      <main style={{ padding: "24px", paddingBottom: "90px" }}>
        <h1>All Recipes</h1>
        <p>Browse all available recipes:</p>

        <div className="recipe-gallery">
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image_url} alt={recipe.title} />

              <h2>{recipe.title}</h2>

              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients
                  ? recipe.ingredients.split(",").map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))
                  : <li>No ingredients added yet</li>}
              </ul>

              <h3>Instructions:</h3>
              <ol>
                {recipe.instructions
                  ? recipe.instructions.split(".").filter(Boolean).map((step, index) => (
                      <li key={index}>{step.trim()}</li>
                    ))
                  : <li>No instructions added yet</li>}
              </ol>
            </div>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </>
  );
}

export default RecipeResultsPage;