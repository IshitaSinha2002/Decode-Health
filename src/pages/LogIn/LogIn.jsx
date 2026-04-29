import "./LogIn.css";

export default function LogIn() {
  return (
    <div className="auth-page">
      <h1>Log In</h1>

      <div className="auth-card">
        {/* Email */}
        <label>Email Address</label>
        <input type="email" placeholder="name@clinical.com" />

        {/* Password Row */}
        <div className="password-row">
          <label>Password</label>
          <span className="forgot">Forgot Password?</span>
        </div>

        <input type="password" placeholder="••••••••" />

        <button className="auth-btn">Log In</button>
      </div>
    </div>
  );
}