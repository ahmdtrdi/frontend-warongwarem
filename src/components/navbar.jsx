import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Button
        className="about-us"
        color="secondary"
        size="medium"
        variant="text"
      >
        About Us
      </Button>
      <Button className="login" color="warning" variant="contained">
        Login
      </Button>
      <img className="project-status-icon" alt="" src="/project-status.svg" />
      <b className="warongwarem">
        <span>Warong</span>
        <span className="warem">Warem</span>
      </b>
      <img className="navbar-child" alt="" src="/assets/ellipse-33@2x.png" />
      <Button className="home" color="secondary" size="medium" variant="text">
        Home
      </Button>
    </div>
  );
};

export default Navbar;
