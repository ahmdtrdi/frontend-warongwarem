import { Button } from "@mui/material";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="navber">
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
        <img className="navber-child" alt="" src="/ellipse-33@2x.png" />
        <Button className="home" color="secondary" size="medium" variant="text">
          Home
        </Button>
      </div>
      <div className="image">
        <img className="image-68-icon" alt="" src="/image-68@2x.png" />
        <div className="image-child" />
        <img className="image-item" alt="" src="/rectangle-8926@2x.png" />
        <img className="image-inner" alt="" src="/rectangle-8928@2x.png" />
        <img
          className="unsplashm-tzzd5z720-icon"
          alt=""
          src="/unsplashmtzzd5z720@2x.png"
        />
        <img
          className="unsplashgkc-xm3vy34-icon"
          alt=""
          src="/unsplashgkc-xm3vy34@2x.png"
        />
      </div>
      <div className="text-contant">
        <div className="house-made-dish-from-container">
          <span>House-</span>
          <span className="warem">
            Made Dish from generations of experience
          </span>
        </div>
        <div className="fine-local-cuisine">Fine Local Cuisine</div>
        <div className="button">
          <div className="button-child" />
          <Button
            className="reserve-a-table"
            sx={{ width: 216 }}
            color="secondary"
            size="large"
            variant="text"
          >
            Reserve a Table
          </Button>
          <div className="button-item" />
          <div className="button-item" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
