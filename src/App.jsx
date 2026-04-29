import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import HealthProfile from "./pages/HealthProfile/HealthProfile";
import SmartAssistance from "./pages/Services/SmartAssistance";
import MenstrualHealth from "./pages/Services/MenstrualHealth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<HealthProfile />} />
        <Route path="/smart" element={<SmartAssistance />} />
        <Route path="/menstrual" element={<MenstrualHealth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;