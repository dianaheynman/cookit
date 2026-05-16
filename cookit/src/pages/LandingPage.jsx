import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to CookIt 🍳</h1>
        <p>Find recipes based on the ingredients you already have at home.</p>

        <Link to="/dashboard">
          <button>Get Started</button>
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;