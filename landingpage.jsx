const LandingPage = () => {
    return (
      <div class="landing-page">
        <div class="div">
          <div class="navber">
            <div class="overlap-group">
            <button type="button" className="container">
              <div className="text-wrapper">Login</div>
              <div className="icon-wrapper">
              <img className="project-status" src="https://c.animaapp.com/bfcA6ILL/img/project-status@2x.png" />
             </div>
            </button>
            </div>
            <button className="about-us-button">
              <div className="text-wrapper-2">About Us</div>
              <img className="warong-warem" src="https://c.animaapp.com/bfcA6ILL/img/warongwarem.png" />
            </button>
            <div class="text-wrapper-3">Home</div>
          </div>
          <div class="overlap">
            <img class="image" src="https://c.animaapp.com/bfcA6ILL/img/image.png" />
            <div class="text-contant">
              <p class="house-made-dish-from">
                <span class="span">House-</span>
                <span class="text-wrapper-4">Made Dish from generations of experience</span>
              </p>
              <div class="text-wrapper-5">Fine Local Cuisine</div>
              <button className="button">
                <div className="div-wrapper">
                <div className="text-wrapper-6">Reserve a Table</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LandingPage;