import { useNavigate } from "react-router-dom";
const AboutComs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      <div className="about-us1">
        <div className="we-are-a-team-of-4-with-the-sa-parent">
          <b className="we-are-a">
            We are a team of 4 With the same vision of providing affordable meal
          </b>
          <div className="about-us-wrapper">
            <div className="about-us2">About us</div>
          </div>
          <img className="check-icon" alt="" src="/check.svg" />
          <img className="check-icon1" alt="" src="/check1.svg" />
          <img className="check-icon2" alt="" src="/check2.svg" />
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </div>
          <div className="lacus-nisi-et">
            {" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </div>
          <div className="quisque-diam-pellentesque">{` Quisque diam pellentesque bibendum non dui volutpat fringilla `}</div>
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <img
          className="unsplashfdlzbwip0am-icon"
          alt=""
          src="/unsplashfdlzbwip0am@2x.png"
        />
        <img
          className="unsplashjpkfc5-d-di-icon"
          alt=""
          src="/unsplashjpkfc5-ddi@2x.png"
        />
        <img
          className="unsplashmaqz3x-8-l0-icon"
          alt=""
          src="/unsplashmaqz3x-8-l0@2x.png"
        />
      </div>
      <div className="navber">
        <div className="home-parent">
          <button onClick={() => navigate("/")}>
            <div className="home">Home</div>
          </button>
        </div>
        <button>
          <div className="home">About Us</div>
        </button>
        <button onClick={() => navigate("/login")}>
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
    </div>
  );
};

export default AboutComs;
