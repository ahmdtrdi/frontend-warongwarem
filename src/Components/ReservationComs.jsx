import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LogoutPopupCustomer from "./PopLogoutComs";
import BookingPopUpCustomerPage from "./PopBookingComs";
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 5000,
});

const ReservationComs = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRentChecked, setIsRentChecked] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("1");
  const [tableType, setTableType] = useState("Indoor");
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    const [hours, minutes] = newTime.split(":").map(Number);

    if ((hours >= 8 && hours < 20) || (hours === 20 && minutes === 0)) {
      setTime(newTime);
    } else {
      alert("Please input time between 08.00-20.00");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    const isNumeric = /^[\d+]+$/.test(newPhoneNumber); // Cek apakah semua karakter adalah angka atau +

    if (isNumeric || newPhoneNumber === "") {
      // Jika semua karakter adalah angka atau + atau input dikosongkan
      setPhoneNumber(newPhoneNumber);
    }
  };

  const handleRentCheckedChange = (e) => {
    setIsRentChecked(e.target.checked);

    // Jika checkbox dicentang, ganti input people dan tableType dengan "Rent the place"
    if (e.target.checked) {
      setPeople("Rent the place");
      setTableType("Rent the place");
    } else {
      // Jika checkbox tidak dicentang, kosongkan input people dan tableType
      setPeople("");
      setTableType("");
    }
  };

  const isReserveDisabled =
    !fullName.trim() ||
    !phoneNumber.trim() ||
    (!isRentChecked && (!date.trim() || !time.trim() || !people.trim() || !tableType.trim())) ||
    (isRentChecked && (!date.trim() || !time.trim()));

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleReserve = async () => {
    if (isReserveDisabled) {
      window.alert("Please fill all the fields");
    } else {
      console.log("Reserve button clicked");

      try {
        let accessToken = localStorage.getItem('jwtToken');
        console.log(accessToken);
        if (!accessToken) {
          // Show an error message
          console.error("User is not authenticated");
          return;  // Important to prevent the rest of the function from executing
        }

        const response = await instance.post(
          'http://localhost:8000/api/reservations',
          {
            name: fullName,
            phone_number: phoneNumber,
            date,
            time,
            people: isRentChecked ? 0 : parseInt(people),
            tableType: isRentChecked ? "Rent the place" : tableType,
            notes
          },
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
            },
          }
        );

        // Handle the response as needed
        console.log(response.data);
        setShowBookingPopup(true);
        setIsFormDisabled(true);
      } catch (error) {
        // Handle errors, show error messages, etc.
        console.error('Error creating reservation:', error.message);
      }
    };
  };

  const handleDoneClick = () => {
    // Tutup popup
    setShowBookingPopup(false);

    // Reload halaman
    navigate("/reservation", { replace: true });

    // Aktifkan kembali form saat popup booking ditutup
    setIsFormDisabled(false);
  };

  return (
    <div
      className="reservation-customer-page"
      style={{ animation: "fadeIn 1s" }}
    >
      <div className="div">
        <div className="overlap">
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
              <button onClick={() => navigate("/history")}>
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
                disabled={isFormDisabled}
              />
            </div>
            <div className="time-parent">
              <img
                className="time-icon"
                alt=""
                src="/icbaselineaccesstime.svg"
              />
              <label className="time-label">Time: </label>
              <input
                type="time"
                className="time-input"
                value={time}
                onChange={handleTimeChange}
                disabled={isFormDisabled}
              />
            </div>
            <div className="people-parent">
              <img
                className="people-icon"
                alt=""
                src="/mdipersonmultiple.svg"
              />
              <label className="people-label">People: </label>
              <select
                className="people-select"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                disabled={isRentChecked || isFormDisabled}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
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
                disabled={isRentChecked || isFormDisabled}
              >
                <option>Indoor</option>
                <option>Outdoor</option>
                <option>VIP</option>
              </select>
            </div>
          </div>
          <div>
            <div className="have-a-green-card">
              <input
                type="checkbox"
                className="tick-green-card-child"
                checked={isRentChecked}
                onChange={(e) => setIsRentChecked(e.target.checked)}
                disabled={isFormDisabled}
              />
              <div className="have-a-green">Rent the place</div>
            </div>
            <div className="notes">Notes</div>
            <textarea
              className="notes-textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              disabled={isFormDisabled}
            ></textarea>
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
                  disabled={isFormDisabled}
                />
              </div>
              <div className="phone-number">
                <input
                  type="tel"
                  className="phone-number-input"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  disabled={isFormDisabled}
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
              // disabled={isReserveDisabled}
              >
                <b className="reserve">RESERVE</b>
              </button>
            </div>
          </div>
          {showBookingPopup && (
            <BookingPopUpCustomerPage
              date={date}
              time={time}
              people={isRentChecked ? "" : people} // Jika isRentChecked adalah true, kirim string kosong
              tableType={isRentChecked ? "Rent the place" : tableType} // Jika isRentChecked adalah true, kirim string kosong
              fullName={fullName}
              phoneNumber={phoneNumber}
              notes={notes}
              navigate={navigate} // Melewatkan navigate
              setShowBookingPopup={setShowBookingPopup} // Melewatkan setShowBookingPopup
              handleDoneClick={handleDoneClick} // Melewatkan handleDoneClick
            />
          )}
          {showLogoutPopup && (
            <LogoutPopupCustomer onClose={handleCancelLogout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationComs;
