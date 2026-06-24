import { useNavigate } from "react-router-dom";

function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#ffffff",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        padding: "14px",
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        🏠 Home
      </span>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/recipes")}
      >
        🔍 Search
      </span>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/favorites")}
      >
        ❤️ Favorites
      </span>
    </div>
  );
}

export default BottomNavigation;