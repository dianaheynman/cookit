function BottomNavigation() {
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
      <span>🏠 Home</span>
      <span>🔍 Search</span>
      <span>❤️ Favorites</span>
    </div>
  );
}

export default BottomNavigation;