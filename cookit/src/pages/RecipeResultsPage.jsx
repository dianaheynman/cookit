import Navbar from "../components/Navbar/Navbar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function RecipeResultsPage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <h1>Recipe Results</h1>
        <p>Recipes that match your ingredients:</p>

        <RecipeCard />
        <RecipeCard />
      </main>

      <BottomNavigation />
    </>
  );
}

export default RecipeResultsPage;