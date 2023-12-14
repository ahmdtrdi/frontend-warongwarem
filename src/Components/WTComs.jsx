import { useNavigate } from "react-router-dom";
import React from "react";

const WTComs = () => {
  const navigate = useNavigate();
  // Sample data for the table
  const tableData = [
    { tableNumber: 1, occupants: 2, status: "Occupied" },
    { tableNumber: 2, occupants: 3, status: "Available" },
    { tableNumber: 3, occupants: 4, status: "Reserved" },
    // Add more entries as needed
  ];
  return (
    <div className="waiter-window">
      <div className="overlap"></div>
      <button class="logoutwaiter-btn" onClick={() => navigate("/login")}>
        <img class="Logoutwaiter" alt="Power Off" src="/poweroff-1@2x.png" />
      </button>
      <button class="tablewaiter-btn2">
        <img
          class="Tablewaiter2"
          alt="Table2"
          src="icsharptablerestaurant.svg"
        />
      </button>
      <button class="mainwaiter-btn2" onClick={() => navigate("/waiter")}>
        <img class="Mainwaiter2" alt="Main2" src="group.svg" />
      </button>

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

      <table>
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
    </div>
  );
};

export default WTComs;
