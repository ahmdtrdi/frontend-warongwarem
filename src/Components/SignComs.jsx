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
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError("");
    } else if (!validateEmail(e.target.value)) {
      setEmailError("*email tidak valid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordError("");
    } else if (e.target.value.length < 10) {
      setPasswordError("*password must have at least 10 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === "") {
      setConfirmPasswordError("");
    } else if (e.target.value !== password) {
      setConfirmPasswordError("*password didn't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const registerUser = async (email, password) => {
    const response = await fetch("http://warongwarem-server.my.id/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 422) {
      alert("Email already registered");
    } else {
      const responseBody = await response.json();
      console.log(responseBody);

      // Navigate based on user role
      if (responseBody.user.role === "waiter") {
        navigate("/waiter");
      } else {
        navigate("/reservation");
      }

      return responseBody;
    }
  };

  const handleSignUp = async () => {
    let response;
    if (email && password && password.length >= 10 && confirmPassword) {
      try {
        if (password !== confirmPassword) {
          alert("Password and confirm password do not match");
          setConfirmPassword("");
          return; // return early if passwords do not match
        }

        const response = await registerUser(email, password);

        if (
          response &&
          response.message.trim() === "User registered successfully"
        ) {
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error in handleSignUp:", error);
        console.log("Response in handleSignUp:", response);
      }
    } else {
      alert("Please fill in both email, password and confirm password");
    }
  };

  return (
    <div className="login-page" style={{ animation: "fadeIn 1s" }}>
      <div className="div">
        <div className="overlap">
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
                onChange={handlePasswordChange}
              />
              <b className="password2">Password</b>
              {passwordError && (
                <div
                  className="error"
                  style={{
                    position: "absolute",
                    top: "29px",
                    left: "-226px",
                    fontSize: "12px",
                  }}
                >
                  {passwordError}
                </div>
              )}
            </div>
            <div className="textbox-confirm-password">
              <div className="textbox-confirm-password-child" />
              <input
                className="frame-input-confirm-pass2"
                placeholder="*Confirm Password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} // Ganti fungsi ini
              />
              <b className="confirm-password2">Confirm Password</b>
              {confirmPasswordError && ( // Tambahkan ini
                <div
                  className="error"
                  style={{
                    position: "absolute",
                    top: "368px",
                    left: "270px",
                    fontSize: "12px",
                  }}
                >
                  {confirmPasswordError}
                </div>
              )}
            </div>
            <div className="textbox-email">
              <div className="textbox-email-child" />
              <input
                className="frame-input-email"
                placeholder="*Required"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <b className="email">Email</b>
              {emailError && (
                <div
                  className="error"
                  style={{
                    position: "absolute",
                    top: "71px",
                    left: "-275px",
                    fontSize: "12px",
                  }}
                >
                  {emailError}
                </div>
              )}
            </div>
            <div className="customer-button-child" />
            <div className="login-as">Sign Up</div>
          </div>
          <div className="navber">
            <div className="home-parent">
              <button onClick={() => navigate("/")}>
                <div className="home">Home</div>
              </button>
              <button onClick={() => navigate("/about")}>
                <div className="home">About Us</div>
              </button>
              <button onClick={() => navigate("/login")}>
                <div className="home">Login</div>
              </button>
              <button onClick={() => window.location.reload()}>
                <div className="home">Sign Up</div>
              </button>
            </div>
            <img
              className="project-status-icon"
              alt=""
              src="/project-status.svg"
            />
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
      </div>
    </div>
  );
};

export default SignComs;
