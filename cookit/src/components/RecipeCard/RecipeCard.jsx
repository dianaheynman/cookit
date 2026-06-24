import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

function RecipeCard({ image, title, recipeId }) {
  const navigate = useNavigate();
  async function addToFavorites() {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase.from("favorites").insert([
      {
        user_id: userData.user.id,
        recipe_id: recipeId,
      },
    ]);

  if (error) {
  if (error.code === "23505") {
    alert("Recipe already in favorites ❤️");
  } else {
    alert("Could not save recipe");
    console.log(error);
  }

  return;
}

    alert("Recipe saved to favorites!");
  }

  return (
    <div
    className="recipe-card"
    onClick={() => navigate(`/recipe/${recipeId}`)}
>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button
  onClick={(e) => {
    e.stopPropagation();
    addToFavorites();
  }}
>
  ❤️ Save
</button>
    </div>
  );
}

export default RecipeCard;