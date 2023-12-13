import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LogoutPopupCustomer from "./PopLogoutComs";

const WaiterComs = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="waiter-window">
      <div className="overlap"></div>
      <button class="logoutwaiter-btn" onClick={handleLogoutClick}>
        <img class="Logoutwaiter" alt="Power Off" src="/poweroff-1@2x.png" />
      </button>
      <button class="tablewaiter-btn" onClick={() => navigate("/wt")}>
        <img class="Tablewaiter" alt="Table" src="icsharptablerestaurant.svg" />
      </button>
      <button class="mainwaiter-btn">
        <img class="Mainwaiter" alt="Main" src="group.svg" />
      </button>
      <div className="overlap-group">
        <div className="stable-table-row">
          <div className="checkbox" />
          <div className="stable-table-grid">
            <div className="stable-table-cell">
              <div className="text-wrapper">Name</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">Mobile No</div>
            </div>
            <div className="div">
              <div className="text-wrapper">Time</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Date</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">People</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Table Type</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper">Status</div>
            </div>
          </div>
        </div>
        <div className="stable-table-row-2">
          <div className="checkbox-2" />
          <div className="stable-table-grid">
            <div className="stable-table-cell">
              <div className="text-wrapper-2">Geo Tumbel</div>
            </div>
            <div className="stable-table-cell-3">
              <div className="text-wrapper-2">+62 856 5624 4133</div>
            </div>
            <div className="stable-table-cell-4">
              <div className="text-wrapper-3">01:00 PM</div>
            </div>
            <div className="stable-table-cell-5">
              <div className="text-wrapper-2">01/12/2023</div>
            </div>
            <div className="stable-table-cell-5">
              <div className="text-wrapper-2">2</div>
            </div>
            <div className="stable-table-cell-6">
              <div className="text-wrapper-2">Indoor</div>
            </div>
            <div className="stable-table-cell-2">
              <div className="text-wrapper-4">Requested</div>
              <div className="group">
                <div className="overlap-group-2">
                  <div className="text-wrapper-5">Notes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <button className="overlap-2">
          <div className="text-wrapper-11">Reject</div>
        </button>
      </div>
      <div className="overlap-group-wrapper">
        <button className="assign-reserve-wrapper">
          <div className="assign-reserve">Assign &amp; Reserve</div>
        </button>
      </div>

      <div className="text-wrapper-12">1 Item/s selected</div>

      <input
        className="text-wrapper-13"
        placeholder="Search Name"
        type="text"
      />

      <div className="rectangle-3" />
      <p className="warong-warem">
        <span className="span">Warong</span>
        <span className="text-wrapper-14">Warem</span>
      </p>
      <div className="group-3">
        <button className="overlap-5">Filter</button>
      </div>
      <div className="text-wrapper-15">Apply Filters :</div>
      <div className="frame">
        <div className="text-wrapper-16">Date</div>
        <input type="date" classname="dateinputwaiter" />
      </div>
      <div className="frame-2">
        <div className="text-wrapper-16">Time</div>
        <input type="time" classname="timeinputwaiter" />
      </div>
      <div className="frame-3">
        <div className="text-wrapper-17">Booking Status</div>
        <select className="people-select">
          <option>Requested</option>
          <option>Unpaid</option>
          <option>Reserved</option>
          <option>Rejected</option>
          <option>Cancelled</option>
        </select>
      </div>
      <div className="text-wrapper-18">Waiter</div>
      {showLogoutPopup && <LogoutPopupCustomer onClose={handleCancelLogout} />}
    </div>
  );
};

export default WaiterComs;
