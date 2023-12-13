import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutPopupCustomer from "./PopLogoutComs";

const HistoryComs = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div
      className="reservation-history-customer"
      style={{ animation: "fadeIn 1s" }}
    >
      <div className="div">
        <div className="overlap">
          <div className="navbar">
            <div className="home-parent">
              <b className="warongwarem1">
                <span>Warong</span>
                <span className="warem1">Warem</span>
              </b>
            </div>
            <div className="reserve2-parent">
              <button onClick={() => navigate("/reservation")}>
                <div className="reserve2">Book</div>
              </button>
              <button onClick={() => window.location.reload()}>
                <div className="reserve2">History</div>
              </button>
              <button onClick={() => navigate("/costumerservice")}>
                <div className="reserve2">Costumer Service</div>
              </button>
              <button onClick={handleLogoutClick}>
                <div className="reserve2">Logout</div>
              </button>
            </div>
          </div>
          <div className="booking-history">
            <img
              className="booking-history-child"
              alt=""
              src="/rectangle-11.svg"
            />
            <div className="booking-history-item" />
            <b className="history-and-recent">History and Recent Bookings</b>
            <div className="booking-history-inner" />
            <div className="line-div" />
            <div className="line-div" />
            <div className="booking-history-child2" />
            <div className="geo-tumbel-62-856-5624-4133-parent">
              <b className="geo-tumbel-62">Geo Tumbel +62 856 5624 4133</b>
              <div className="requested">Requested</div>
              <div className="hours-ago">2 Hours ago</div>
              <div className="material-symbolsdate-range-parent1">
                <img
                  className="material-symbolsdate-range-icon3"
                  alt=""
                  src="/materialsymbolsdaterange.svg"
                />
                <b className="people1">01 December 2023 | 01:00 PM</b>
              </div>
              <div className="mdiperson-multiple-parent">
                <img
                  className="material-symbolsdate-range-icon4"
                  alt=""
                  src="/mdipersonmultiple.svg"
                />
                <b className="people1">2 People</b>
                <b className="indoor1">Indoor</b>
              </div>
            </div>
            <img
              className="material-symbolstable-bar-icon1"
              alt=""
              src="/materialsymbolstablebar.svg"
            />
            <div className="reserve-button1">
              <div className="rectangle-parent">
                <div className="group-child1" />
                <div className="group-item1" />
                <img className="group-inner" alt="" src="/rectangle-16.svg" />
                <div className="rectangle-div" />
                <b className="notes1">Notes</b>
              </div>
            </div>
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
          {showLogoutPopup && (
            <LogoutPopupCustomer onClose={handleCancelLogout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryComs;
