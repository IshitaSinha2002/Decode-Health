import "./Home.css";
import { User, Stethoscope, Calendar, Activity, Apple, Dumbbell, HeartPulse, Brain, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Stethoscope />,
      title: "Smart Assistance",
      desc: "24/7 AI-driven clinical support for immediate health inquiries and data synthesis.",
      route: "/smart",
    },
    {
      icon: <Calendar />,
      title: "Menstrual Health",
      desc: "Sophisticated hormonal cycle tracking with predictive symptom modeling.",
      route: "/menstrual",
    },
    {
      icon: <Activity />,
      title: "Weight & Metabolism",
      desc: "Real-time metabolic analysis and weight management based on glycemic response.",
      route: "/metabolism",
    },
    {
      icon: <Apple />,
      title: "Nutrition Intelligence",
      desc: "Precision nutrition mapping optimized for your unique gut microbiome profile.",
      route: "/nutrition",
    },
    {
      icon: <Dumbbell />,
      title: "Fitness & Recovery",
      desc: "Adaptive workout regimens synchronized with biometric recovery scores.",
      route: "/fitness",
    },
    {
      icon: <HeartPulse />,
      title: "Symptom Checker",
      desc: "Differential diagnosis logic using world-class clinical databases.",
      route: "/symptoms",
    },
    {
      icon: <Brain />,
      title: "Mental Health",
      desc: "AI-guided cognitive behavioral support and stress resilience tracking.",
      route: "/mental",
    },
    {
      icon: <BarChart3 />,
      title: "Analytics",
      desc: "Visual clinical trend analysis and long-term health trajectory forecasting.",
    },
  ];

  return (
    <div className="home">

      {/* 🔷 Top Bar */}
      <div className="top-bar">
        <div className="top-title">
          <span className="decode">Decode</span>{" "}
          <span className="health">Health</span>
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Log In
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>

      {/* 🔷 Hero */}
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

      {/* 🔷 Profile Banner */}
      <div className="profile-banner">
        <div className="profile-left">
          <User size={20} />
          <span>Complete Your Health Profile</span>
        </div>

        <button onClick={() => navigate("/profile")}>
          Complete Now</button>
      </div>

      {/* 🔷 Services */}
      <section className="services">
        <h2>Precision Health Services</h2>
        <p>
          Access specialized clinical intelligence modules designed for comprehensive
          wellness management.
        </p>

       <div className="grid">
        {services.map((s, i) => (
        <div
          className="card"
          key={i}
          onClick={() => s.route && navigate(s.route)}
        >
        <div className="icon">{s.icon}</div>   {/* 🔥 THIS LINE */}
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    ))}
</div>
      </section>

    </div>
  );
}