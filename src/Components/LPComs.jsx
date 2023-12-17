import { useNavigate } from "react-router-dom";
const LPComs = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{ animation: "fadeIn 1s" }}>
      <div className="div">
        <div className="overlap">
          <div className="navber">
            <div className="home-parent">
              <button onClick={() => window.location.reload()}>
                <div className="home">Home</div>
              </button>

              <button onClick={() => navigate("/about")}>
                <div className="home">About Us</div>
              </button>
              <button onClick={() => navigate("/login")}>
                <div className="home">Login</div>
              </button>
              <button onClick={() => navigate("/sign")}>
                <div className="home">Sign Up</div>
              </button>
            </div>
             
          </div>
          <b className="warongwarem">
            <span>Warong</span>
            <span className="warem">Warem</span>
          </b>
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
              <button
                onClick={() => navigate("/login")}
                className="button-child"
              >
                Reserve a Table
              </button>
              <div className="button-item" />
              <div className="button-item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPComs;
