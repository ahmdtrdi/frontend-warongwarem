import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LogoutPopupCustomer from "./PopLogoutComs";
import BookingPopUpCustomerPage from "./PopBookingComs";

const ReservationComs = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRentChecked, setIsRentChecked] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [tableType, setTableType] = useState("");
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const isReserveDisabled =
    !fullName.trim() ||
    !phoneNumber.trim() ||
    (!isRentChecked &&
      (!date.trim() || !time.trim() || people === "" || tableType === ""));

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleReserve = () => {
    if (!isReserveDisabled) {
      // Logika untuk menangani reservasi di sini
      console.log("Reserve button clicked");
      setShowBookingPopup(true);
    }
  };

  return (
    <div
      className="reservation-customer-page"
      style={{ animation: "fadeIn 1s" }}
    >
      <div className="decor-image">
        <img
          className="unsplashlp5mcm6nz5a-icon"
          alt=""
          src="/unsplashlp5mcm6nz5a@2x.png"
        />
        <img
          className="unsplashclmpc9uhyto-icon"
          alt=""
          src="/unsplashclmpc9uhyto@2x.png"
        />
        <img
          className="unsplashdphm2u1xq0u-icon"
          alt=""
          src="/unsplashdphm2u1xq0u@2x.png"
        />
        <img
          className="unsplash-gfcyhore48-icon"
          alt=""
          src="/unsplashgfcyhore48@2x.png"
        />
        <img
          className="unsplashtzl1ucxg5es-icon"
          alt=""
          src="/unsplashtzl1ucxg5es@2x.png"
        />
        <img
          className="unsplashmmnki8kmxpc-icon"
          alt=""
          src="/unsplashmmnki8kmxpc@2x.png"
        />
      </div>
      <div className="navbar">
        <div className="home-parent">
          <b className="warongwarem1">
            <span>Warong</span>
            <span className="warem1">Warem</span>
          </b>
          <b className="book-a-table-container">
            <span>{`Book `}</span>
            <span className="warem1">a Table</span>
          </b>
        </div>
        <div className="reserve2-parent">
          <button onClick={() => window.location.reload()}>
            <div className="reserve2">Book</div>
          </button>
          <button onClick={() => navigate("")}>
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
      <div className="frame-parent">
        <div className="date-parent">
          <img
            className="date-icon"
            alt=""
            src="/materialsymbolsdaterange.svg"
          />
          <label className="date-label">Date: </label>
          <input
            type="date"
            className="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="time-parent">
          <img className="time-icon" alt="" src="/icbaselineaccesstime.svg" />
          <label className="time-label">Time: </label>
          <input
            type="time"
            className="time-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="people-parent">
          <img className="people-icon" alt="" src="/mdipersonmultiple.svg" />
          <label className="people-label">People: </label>
          <select
            className="people-select"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            disabled={isRentChecked}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
      <div className="table-type-parent">
        <img
          className="table-type-icon"
          alt=""
          src="/materialsymbolstablebar.svg"
        />
        <label className="table-type-label">Table Type: </label>
        <select
          className="table-type-select"
          value={tableType}
          onChange={(e) => setTableType(e.target.value)}
          disabled={isRentChecked}
        >
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>VIP</option>
        </select>
      </div>
      <div>
        <div className="have-a-green-card">
          <input
            type="checkbox"
            className="tick-green-card-child"
            checked={isRentChecked}
            onChange={(e) => setIsRentChecked(e.target.checked)}
          />
          <div className="have-a-green">Rent the place</div>
        </div>
        <div className="notes">Notes</div>
        <textarea className="notes-textarea"></textarea>
        <div className="reservation-customer-page-child" />
        <div className="your-information">
          <div className="your-information1">
            <span>Your</span>
            <span className="span">{` `}</span>
            <span>information</span>
          </div>
          <div className="your-information-child" />
          <div className="your-information-item" />
          <div className="full-name">
            <input
              type="text"
              className="full-name-input"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="phone-number">
            <input
              type="tel"
              className="phone-number-input"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="your-information2">
          <p className="note-use-62">
            *Note: Use +62 at the beginning of your phone number
          </p>
          <p className="note-use-62">e.g. +62 81212312312</p>
        </div>
        <div className="reserve-button">
          <button
            className="reserve-button-child"
            onClick={handleReserve}
            disabled={isReserveDisabled}
          >
            <b className="reserve">RESERVE</b>
          </button>
        </div>
      </div>
      {showLogoutPopup && <LogoutPopupCustomer onClose={handleCancelLogout} />}
      {showBookingPopup && <BookingPopUpCustomerPage />}
    </div>
  );
};

export default ReservationComs;
