import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">COOK SMART • WASTE LESS</p>
          <h1>Fresh Recipes, Just for You!</h1>
          <p>
            CookIt helps you find delicious recipes based on ingredients you
            already have at home.
          </p>

          <Link to="/dashboard">
            <button>Start Cooking</button>
          </Link>
        </div>
      </section>

      <main>
        <section className="section">
          <h2>Why Choose CookIt?</h2>

          <div className="cards-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088" />
              <h3>Save Time</h3>
              <p>Get quick ideas without endless searching.</p>
            </div>

            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352" />
              <h3>Use What You Have</h3>
              <p>Turn your fridge ingredients into meals.</p>
            </div>

            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" />
              <h3>Reduce Waste</h3>
              <p>Cook smarter and throw away less food.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;