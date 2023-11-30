import { useNavigate } from 'react-router-dom'
const LoginComs = () => {
    const navigate = useNavigate ()
    return (
        <div className="login-customer">
      <div className="waiter-button">
        <div className="waiter-button-child" />
        <div className="waiter">Waiter</div>
      </div>
      <div className="manager-button">
        <div className="waiter-button-child" />
        <div className="manager">Manager</div>
      </div>
      <div className="manager-button1">
        <div className="waiter-button-child" />
        <div className="manager">Login</div>
      </div>
      <div className="customer-button">
        <div className="textbox-password">
          <div className="textbox-password-child" />
          <b className="password">Password</b>
        </div>
        <div className="textbox-email">
          <div className="textbox-email-child" />
          <b className="email">Email</b>
        </div>
        <div className="customer-button-child" />
        <div className="customer">Customer</div>
        <div className="login-as">Login as</div>
      </div>
      <div className="navber">
        <div className="home-parent">
          <button onClick={() => navigate('/')}><div className="home">Home</div></button>
        </div>
        <button onClick={() => navigate('/about')}><div className="home">About Us</div></button>
        <button><div className="home">Login</div></button>
        <button><div className="home">Sign Up</div></button>
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
        <span className="sign-up1">Sign Up</span>
      </b>
    </div>
    )
}

export default LoginComs