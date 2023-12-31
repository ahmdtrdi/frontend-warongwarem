import { useNavigate } from "react-router-dom";
const AboutComs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us" style={{ animation: "fadeIn 1s" }}>
      <div className="div">
        <div className="overlap">
          <div className="about-us1">
            <div className="we-are-a-team-of-4-with-the-sa-parent">
              <b className="we-are-a">
                We are a team of 4 With the same vision of providing affordable
                meal
              </b>
              <div className="about-us-wrapper">
                <div className="about-us2">About us</div>
              </div>
              <img className="check-icon" alt="" src="/check.svg" />
              <img className="check-icon1" alt="" src="/check1.svg" />
              <img className="check-icon2" alt="" src="/check2.svg" />
              <div className="lorem-ipsum-dolor">
                Sulawesi Utara has such diverse foods and cullinary experiences.
                Our goal is to share it to as many people as possible in our own
                unique way of serving it. We bring a twist of modern creativity
                and technicality into the delicate traditional cuisines we all
                know and love. WarongWarem provides the best dining experience
                through our passion of food-making.
              </div>
              <div className="lacus-nisi-et">
                {" "}
                Discover a world of flavors with our diverse menu - reserve your
                table now.
              </div>
              <div className="quisque-diam-pellentesque">
                Find us{" "}
                <a href="https://maps.app.goo.gl/BBjPY77cmLJYZBcf6">HERE !!!</a>
              </div>
              <div className="lorem-ipsum-dolor1">
                We delightfully serve you from{" "}
                <span className="time-x">08:00 to 20:00</span>.
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
              <button onClick={() => window.location.reload()}>
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
        </div>
      </div>
    </div>
  );
};

export default AboutComs;
