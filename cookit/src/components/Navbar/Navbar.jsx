import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="logo">CookIt</div>

   <div className="nav-links">
  <a href="/">Home</a>
  <a href="/dashboard">Dashboard</a>
  <a href="/recipes">Recipes</a>
  <a href="/profile">Profile</a>
      </div>

      <button
        className="nav-button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;