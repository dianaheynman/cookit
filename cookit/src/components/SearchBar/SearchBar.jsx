function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "12px",
          width: "70%",
          borderRadius: "12px",
          border: "1px solid #ccc",
        }}
      />

      <button style={{ marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;