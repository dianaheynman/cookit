import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
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

      <main style={{ padding: "24px" }}>
        <h1>All Recipes</h1>
        <p>Browse all available recipes:</p>

        <div className="recipe-gallery">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipeId={recipe.id}
              image={recipe.image_url}
              title={recipe.title}
            />
          ))}
        </div>
      </main>

      <BottomNavigation />
    </>
  );
}

export default RecipeResultsPage;