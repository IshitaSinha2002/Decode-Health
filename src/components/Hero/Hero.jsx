import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      
      {/* 🔷 Top Bar */}
      <div className="top-bar">
        <div className="top-title">
          <span className="decode">Decode</span>{" "}
          <span className="health">Health</span>
        </div>

        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* 🔷 Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Your AI <br />
            <span>Health Companion</span>
          </h1>
          <p>
            Experience futuristic medical minimalism. Decode your clinical data
            with sophisticated medical intelligence designed for total digital
            wellness.
          </p>
        </div>

        <div className="hero-right">
            <div className="image-container">
                <img
                     src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2000&auto=format&fit=crop"
                    alt="DNA"
                />
            <div className="image-overlay"></div>
        </div>
    </div>
      </section>
    </div>
  );
}