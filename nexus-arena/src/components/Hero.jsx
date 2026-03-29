import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // check login (simple way using localStorage)
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="hero">
      <h1 className="hero-title">
        Welcome to <span>Nexus Arena</span>
      </h1>

      <p className="hero-subtitle">
        Your Gateway to Quality Learning!
      </p>

      <button className="primary-btn" onClick={handleGetStarted}>
        Get Started Now
      </button>
    </section>
  );
}

export default Hero;