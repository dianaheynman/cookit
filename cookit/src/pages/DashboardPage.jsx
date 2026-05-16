import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function DashboardPage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "24px" }}>
        <h1>Hello Diana 👋</h1>
        <p>What would you like to cook today?</p>

        <SearchBar />
        <RecipeCard />
      </main>

      <BottomNavigation />
    </>
  );
}

export default DashboardPage;