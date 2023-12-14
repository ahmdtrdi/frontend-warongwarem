import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import LogoutPopupCustomer from "./PopLogoutComs"

const WTComs = () => {
const navigate = useNavigate();
const [showLogoutPopup, setShowLogoutPopup] = useState(false);

const handleLogoutClick = () => {
  setShowLogoutPopup(true);
};

const handleCancelLogout = () => {
  setShowLogoutPopup(false);
  };

  // Sample data for the table
  const tableData = [
    { tableNumber: 1, occupants: 2, status: 'Occupied' },
    { tableNumber: 2, occupants: 3, status: 'Available' },
    { tableNumber: 3, occupants: 4, status: 'Reserved' },
    // Add more entries as needed
  ];

  return (
    <div className="waiter-window">
      <div className="overlap">
      </div>
      <button className="logoutwaiter-btn" onClick={handleLogoutClick}>
        <img
          className="Logoutwaiter"
          alt="Power Off"
          src="/poweroff-1@2x.png"
        />
      </button>
      <button className="tablewaiter-btn2" >
        <img
          className="Tablewaiter2"
          alt="Table2"
          src="icsharptablerestaurant.svg"
        />
      </button>
      <button className="mainwaiter-btn2" onClick={() => navigate("/waiter")}>
        <img
          className="Mainwaiter2"
          alt="Main2"
          src="group.svg"
        />
      </button>

      
      <div className="text-wrapper-18">Waiter</div>

      <table className="tablewaiter">
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Occupants</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.tableNumber}</td>
              <td>{item.occupants}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showLogoutPopup && (
            <LogoutPopupCustomer onClose={handleCancelLogout} />
          )}

    </div>
  );
};

export default WTComs;
