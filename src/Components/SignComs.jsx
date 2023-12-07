import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignComs = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (email && password && password === confirmPassword) {
      navigate("/login");
    } else if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      setConfirmPassword("");
    } else {
      alert("Please fill in both email and password");
    }
  };

  return (
    <div className="login-page">
      <div className="manager-button1">
        <div className="waiter-button-child" />
        <button
          className="manager"
          onClick={handleSignUp}
          disabled={!email || !password || !confirmPassword}
        >
          Sign Up
        </button>
      </div>
      <div className="customer-button">
        <div className="textbox-password">
          <div className="textbox-password-child" />
          <input
            className="frame-input-pass2"
            placeholder="*Required"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <b className="password2">Password</b>
        </div>
        <div className="textbox-confirm-password">
          {" "}
          <div className="textbox-confirm-password-child" />
          <input
            className="frame-input-confirm-pass2"
            placeholder="*Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <b className="confirm-password2">Confirm Password</b>
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
        <div className="login-as">Sign Up</div>
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
        <button onClick={() => navigate("/login")}>
          <div className="home">Login</div>
        </button>
        <button>
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
      <b className="have-an-account-container">
        <span>{`Already have an account? `}</span>
        <button onClick={() => navigate("/login")}>
          <span className="login-1">Login</span>
        </button>
      </b>
    </div>
  );
};

export default SignComs;
