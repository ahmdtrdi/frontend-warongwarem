import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import axios
import PopupSignUp from "./PopSignComs";

const SignComs = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const registerUser = async (email, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.status === 422) {
      alert('Email already registered');
    } else {
      const responseBody = await response.json();
      console.log(responseBody);

      // Continue with registration process
      // return response.json();
      return responseBody;
    }
  }

  const handleSignUp = async () => {
    let response;
    if (email && password && password === confirmPassword) {
        try {
            const response = await registerUser(email, password);
           
            if (response && response.message.trim() === 'User registered successfully') {
                setShowPopup(true);
            }
        } catch (error) {
            console.error('Error in handleSignUp:', error);
            console.log('Response in handleSignUp:', response);
        }
    } else if (password !== confirmPassword) {
        alert("Password and confirm password do not match");
        setConfirmPassword("");
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
            type={showPassword ? "text" : "password"}
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
        <button onClick={() => window.location.reload()}>
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
      {showPopup && <PopupSignUp />}
    </div>
  );
};

export default SignComs;
