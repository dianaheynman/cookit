import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function RecipeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
      } else {
        setRecipe(data);
      }
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <main style={{ padding: "24px" }}>
        <button
  onClick={() => navigate(-1)}
  style={{
    marginBottom: "20px",
    padding: "10px 16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
  }}
>
  ← Back
</button>
      <img
        src={recipe.image_url}
        alt={recipe.title}
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "16px",
        }}
      />

      <h1>{recipe.title}</h1>

     <h2>Description</h2>
     <p>{recipe.description}</p>
     <h2>Ingredients</h2>
<p style={{ whiteSpace: "pre-line" }}>
  {recipe.ingredients}
</p>

<h2>Instructions</h2>
<p style={{ whiteSpace: "pre-line" }}>
  {recipe.instructions}
</p>
    </main>
  );
}

export default RecipeDetailsPage;