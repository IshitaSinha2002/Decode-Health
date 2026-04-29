import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
//import LogIn from "./pages/LogIn/LogIn.jsx";

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