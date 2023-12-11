import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutPopupCustomer from "./PopLogoutComs";

const CSComs = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleSubmit = () => {
    if (fullName && phoneNumber && message) {
      // Proses submit
    }
  };

  return (
    <div
      className="customer-service-customer-pa"
      style={{ animation: "fadeIn 1s" }}
    >
      <b className="contact-us">Contact US</b>
      <div className="submit-wrapper">
        <button
          className="submit-button-child"
          onClick={handleSubmit}
          disabled={!fullName || !phoneNumber || !message}
        >
          <b className="submit">SUBMIT</b>
        </button>
      </div>
      <div className="group-parent">
        <div className="full-name-cs-parent">
          <b className="full-name1">Full Name</b>
          <input
            type="text"
            className="group-child"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="message-wrapper">
          <b className="leave-a-message">Leave a Message for Us</b>
          <textarea
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="phone-number-wrapper1">
          <b className="phone-number1">Phone Number</b>
          <input
            type="tel"
            className="group-item"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
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
          <button onClick={() => navigate("")}>
            <div className="reserve2">History</div>
          </button>
          <button onClick={() => window.location.reload()}>
            <div className="reserve2">Costumer Service</div>
          </button>
          <button onClick={handleLogoutClick}>
            <div className="reserve2">Logout</div>
          </button>
        </div>
      </div>
      <div className="decor">
        <img
          className="unsplashfdlzbwip0am-iconn"
          alt=""
          src="/unsplashfdlzbwip0am@2x.png"
        />
        <img
          className="unsplashjpkfc5-d-di-iconn"
          alt=""
          src="/unsplashjpkfc5-ddi@2x.png"
        />
        <img
          className="unsplashmaqz3x-8-l0-iconn"
          alt=""
          src="/unsplashmaqz3x-8-l0@2x.png"
        />
      </div>
      {showLogoutPopup && <LogoutPopupCustomer onClose={handleCancelLogout} />}
    </div>
  );
};

export default CSComs;
