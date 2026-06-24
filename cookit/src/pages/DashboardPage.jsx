import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function DashboardPage() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/login");
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", data.user.id)
        .single();

      if (error) {
        console.log(error);
      }

      if (profile?.full_name) {
        setUserName(profile.full_name);
      }
    }

    checkUser();
  }, [navigate]);

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

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <h1>Hello {userName || "Chef"} 👋</h1>
        <p>What would you like to cook today?</p>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="recipe-gallery">
          {filteredRecipes.map((recipe) => (
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

export default DashboardPage;