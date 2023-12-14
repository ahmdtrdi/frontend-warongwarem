import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginComs = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

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

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await fetch('http://localhost:8000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();

        // Save the token to local storage or context
        localStorage.setItem('token', data.token);

        navigate("/reservation");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please fill in both email and password");
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
              onClick={handleLogin}
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
                onChange={handleEmailChange}
              />
              <b className="email">Email</b>
              {emailError && (
                <div
                  className="error"
                  style={{ position: "absolute", top: "70px", left: "-275px" }}
                >
                  {emailError}
                </div>
              )}
            </div>
            <div className="customer-button-child" />
            <div className="login-as">Login</div>
          </div>
          <div className="navber">
            <div className="home-parent">
              <button onClick={() => navigate("/")}>
                <div className="home">Home</div>
              </button>
              <button onClick={() => navigate("/about")}>
                <div className="home">About Us</div>
              </button>
              <button onClick={() => window.location.reload()}>
                <div className="home">Login</div>
              </button>
              <button onClick={() => navigate("/sign")}>
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
          <b className="no-account-yet-container">
            <span>{`No account yet? `}</span>
            <button onClick={() => navigate("/sign")}>
              <span className="sign-up1">Sign Up</span>
            </button>
          </b>
        </div>
      </div>
    </div>
  );
};

export default LoginComs;
