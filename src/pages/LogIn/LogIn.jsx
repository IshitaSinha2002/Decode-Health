import "./LogIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="auth-page">
      <h1>Log In</h1>

      <div className="auth-card">
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}