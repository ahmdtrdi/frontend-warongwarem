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
            <b className="history-and-recent">History and Recent Bookings</b>
            <div className="geo-tumbel-62-parent">
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
              <div className="mdiperson-multiple-parent-1">
                <img
                  className="material-symbolsdate-range-icon4"
                  alt=""
                  src="/mdipersonmultiple.svg"
                />
                <b className="people2">2 People</b>
              </div>
            </div>
            <div className="mdiperson-multiple-parent-2">
              <img
                className="material-symbolstable-bar-icon1"
                alt=""
                src="/materialsymbolstablebar.svg"
              />
              <b className="indoor1">Indoor</b>
            </div>
            <div className="rectangle-parent">
              <img className="group-inner" alt="" src="/rectangle-16.svg" />
              <button className="rectangle-div">
                <b className="notes1">Notes</b>
              </button>
            </div>
          </div>
          <div className="reigendi-62-parent">
            <b className="reigendi-62">Regin A +62 815 1233 0098</b>
            <div className="reserved">Reserved</div>
            <div className="hours-ago-2">2 days ago</div>
            <div className="material-symbolsdate-range-parent7">
              <img
                className="material-symbolsdate-range-icon8"
                alt=""
                src="/materialsymbolsdaterange.svg"
              />
              <b className="people4">17 December 2023 | 12.15 PM</b>
            </div>
            <div className="mdiperson-multiple-parent-9">
              <img
                className="material-symbolsdate-range-icon10"
                alt=""
                src="/mdipersonmultiple.svg"
              />
              <b className="people5">Rent the place</b>
            </div>
          </div>
          <div className="mdiperson-multiple-parent-11">
            <img
              className="material-symbolstable-bar-icon12"
              alt=""
              src="/materialsymbolstablebar.svg"
            />
            <b className="indoor3">Rent the place</b>
          </div>
          <div className="rectangle-parent-12">
            <img className="group-inner-2" alt="" src="/rectangle-18.svg" />
            <button className="rectangle-div-1">
              <b className="notes1">Notes</b>
            </button>
          </div>
          <div className="made-indra-62-parent">
            <b className="made-indra-62">Made Indra +62 815 2710 9433</b>
            <div className="pending">Pending</div>
            <div className="hours-ago-1">1 days ago</div>
            <div className="material-symbolsdate-range-parent2">
              <img
                className="material-symbolsdate-range-icon2"
                alt=""
                src="/materialsymbolsdaterange.svg"
              />
              <b className="people3">18 December 2023 | 10.00 AM</b>
            </div>
            <div className="mdiperson-multiple-parent-3">
              <img
                className="material-symbolsdate-range-icon5"
                alt=""
                src="/mdipersonmultiple.svg"
              />
              <b className="people4">3 People</b>
            </div>
          </div>
          <div className="mdiperson-multiple-parent-6">
            <img
              className="material-symbolstable-bar-icon2"
              alt=""
              src="/materialsymbolstablebar.svg"
            />
            <b className="indoor2">Indoor</b>
          </div>
          <div className="rectangle-parent-1">
            <img className="group-inner-1" alt="" src="/rectangle-17.svg" />
            <button className="rectangle-div-2">
              <b className="notes1">Notes</b>
            </button>
            <button className="rectangle-div-3">
              <b className="pay">Pay</b>
            </button>
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
