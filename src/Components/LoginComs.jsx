import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginComs = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (email && password) {
      navigate("/reservation");
    } else {
      alert("Please fill in both email and password");
    }
  };

  return (
    <div className="login-page" style={{ animation: "fadeIn 1s" }}>
      <div className="manager-button1">
        <div className="waiter-button-child" />
        <button
          className="manager"
          onClick={handleSignUp}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
      <div className="customer-button">
        <div className="textbox-password">
          <div className="textbox-password-child" />
          <input
            className="frame-input-pass"
            placeholder="*Required"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <b className="password">Password</b>
          <input
            className="show-password-checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label className="show-password-label">Show password</label>
        </div>
        <div className="textbox-email">
          <div className="textbox-email-child" />
          <input
            className="frame-input-email"
            placeholder="*Required"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <b className="email">Email</b>
        </div>
        <div className="customer-button-child" />
        <div className="login-as">Login</div>
      </div>
      <div className="navber">
        <div className="home-parent">
          <button onClick={() => navigate("/")}>
            <div className="home">Home</div>
          </button>
        </div>
        <button onClick={() => navigate("/about")}>
          <div className="home">About Us</div>
        </button>
        <button onClick={() => window.location.reload()}>
          <div className="home">Login</div>
        </button>
        <button onClick={() => navigate("/sign")}>
          <div className="home">Sign Up</div>
        </button>
        <img className="project-status-icon" alt="" src="/project-status.svg" />
      </div>
      <b className="warongwarem">
        <span>Warong</span>
        <span className="warem">Warem</span>
      </b>
      <div className="login-customer-child" />
      <img
        className="ebbdec618a37-removebg-preview-icon"
        alt=""
        src="/5ebbdec618a37removebgpreview-2@2x.png"
      />
      <b className="no-account-yet-container">
        <span>{`No account yet? `}</span>
        <button onClick={() => navigate("/sign")}>
          <span className="sign-up1">Sign Up</span>
        </button>
      </b>
    </div>
  );
};

export default LoginComs;
