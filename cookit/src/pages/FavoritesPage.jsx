import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Navbar from "../components/Navbar/Navbar";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function FavoritesPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      navigate("/login");
      return;
    }

    const { data, error } = await supabase
      .from("favorites")
      .select("id, recipes(title, image_url)")
      .eq("user_id", userData.user.id);

    if (error) {
      console.log(error);
    } else {
      setFavorites(data);
    }
  }

  async function removeFavorite(favoriteId) {
    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("id", favoriteId);

    if (error) {
      alert("Could not remove favorite");
      console.log(error);
      return;
    }

    fetchFavorites();
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <h1>My Favorites ❤️</h1>

        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          <div className="recipe-gallery">
            {favorites.map((favorite) => (
              <div className="recipe-card" key={favorite.id}>
                <img
                  src={favorite.recipes.image_url}
                  alt={favorite.recipes.title}
                />
                <h3>{favorite.recipes.title}</h3>

                <button onClick={() => removeFavorite(favorite.id)}>
                  🗑️ Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNavigation />
    </>
  );
}

export default FavoritesPage;