import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="auth-page">
      <h1>Sign In</h1>

      <div className="auth-card">
        <label>Email Address</label>
        <input type="email" placeholder="name@clinical.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <label>Confirm Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="auth-btn">Sign In</button>
      </div>
    </div>
  );
}