import { Button } from "@mui/material";
import Navbar from "../components/navbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="image">
        <img className="image-68-icon" alt="" src="src/assets/image-68@2x.png" />
        <div className="image-child" />
        <img className="image-item" alt="" src="src/assets/top-menu.png" />
        <img className="image-inner" alt="" src="src/assets/rectangle-8926@2x.png" />
        <img
          className="unsplashm-tzzd5z720-icon"
          alt=""
          src="src/assets/unsplashmtzzd5z720@2x.png"
        />
        <img
          className="unsplashgkc-xm3vy34-icon"
          alt=""
          src="src/assets/unsplashgkc-xm3vy34@2x.png"
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
