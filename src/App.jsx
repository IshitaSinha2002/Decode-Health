import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn";
//import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;