function RecipeCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        margin: "20px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        alt="recipe"
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      <h2>Healthy Salad</h2>

      <p>
        Fresh vegetables with avocado and homemade dressing.
      </p>

      <button>View Recipe</button>
    </div>
  );
}

export default RecipeCard;