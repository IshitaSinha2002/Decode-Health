import Hero from "./components/Hero/Hero.jsx";
import ProfileBanner from "./components/ProfileBanner/ProfileBanner.jsx";
import Services from "./components/Services/Services.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <ProfileBanner />
      <Services />
    </div>
  );
}

export default App;