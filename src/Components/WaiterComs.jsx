
import React, {useState} from "react";
import LogoutPopupCustomer from "./PopLogoutComs"
import { useNavigate } from 'react-router-dom';


const WaiterComs = () => {
const navigate = useNavigate();
const [showLogoutPopup, setShowLogoutPopup] = useState(false);

const handleLogoutClick = () => {
  setShowLogoutPopup(true);
};

const handleCancelLogout = () => {
  setShowLogoutPopup(false);
  };

const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [selectedCustomerNotes, setSelectedCustomerNotes] = useState("");

  const handleShowNotes = (notes) => {
    setSelectedCustomerNotes(notes);
    setShowNotesPopup(true);
  };

  const handleCloseNotes = () => {
    setShowNotesPopup(false);
  };

    // Data dummy untuk tabel
    const [dummyData, setDummyData] = useState([
      { id: 1, name: "Geo Tumbel", phoneNumber: +6285656244133, datetime: "2023-11-11 14:40:00", people: 2, tabletype: "Outdoor", status: "Requested", notes: "Tidak Pake Saos" },
      { id: 2, name: "Made Indra", phoneNumber: +1231231231231, datetime: "2023-11-12 14:00:00", people: "Rent the place", tabletype: "-", status: "Unpaid", notes: "Tidak Pake Sambal!!!" },
      // Tambahkan data dummy lainnya sesuai kebutuhan
  ]);

  // State untuk menyimpan ID baris yang dipilih
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  // Fungsi untuk menangani pemilihan baris
  const handleRowSelect = (rowId) => {
      if (selectedRowIds.includes(rowId)) {
          // Jika sudah dipilih, hapus dari daftar seleksi
          setSelectedRowIds(selectedRowIds.filter((id) => id !== rowId));
      } else {
          // Jika belum dipilih, tambahkan ke daftar seleksi
          setSelectedRowIds([...selectedRowIds, rowId]);
      }
  };

  const handleStatusChange = (id, status) => {
      // Implementasikan logika untuk menangani perubahan status pada baris dengan id tertentu
      console.log(`Row with ID ${id} status changed to ${status}`);
  };

  const handleSelectAll = () => {
      const allRowIds = dummyData.map((item) => item.id);
      setSelectedRowIds(allRowIds);
  };

  const handleUnselectAll = () => {
      setSelectedRowIds([]);
  };

  const handleReserve = () => {
      // Implementasikan logika untuk mengubah status menjadi "Active"
      console.log("Reserve button clicked");
      // Misalnya, kita ubah status menjadi "Active" untuk semua baris yang dipilih
      const updatedData = dummyData.map((item) => {
          if (selectedRowIds.includes(item.id)) {
              return { ...item, status: "Unpaid" };
          }
          return item;
      });
      console.log(updatedData);
      setDummyData(updatedData);
      setSelectedRowIds([]);
  };

  const handleReject = () => {
      // Implementasikan logika untuk mengubah status menjadi "Inactive"
      console.log("Reject button clicked");
      // Misalnya, kita ubah status menjadi "Inactive" untuk semua baris yang dipilih
      const updatedData = dummyData.map((item) => {
          if (selectedRowIds.includes(item.id)) {
              return { ...item, status: "Inactive" };
          }
          return item;
      });
      console.log(updatedData);
      setDummyData(updatedData);
      setSelectedRowIds([]);
  };

  return (
    <div className="waiter-window">
      <div className="overlap">
      </div>
      <button class="logoutwaiter-btn" onClick={handleLogoutClick}>
        <img
         class="Logoutwaiter"
         alt="Power Off"
         src="/poweroff-1@2x.png"/>
      </button> 
      <button class="tablewaiter-btn" onClick={() => navigate("/wt")}>
      <img 
       class="Tablewaiter"
       alt="Table"
       src="icsharptablerestaurant.svg"/>
      </button>
      <button class="mainwaiter-btn">
      <img 
       class="Mainwaiter"
       alt="Main"
       src="group.svg"/>
      </button>
      <div className="rectangle-table" />
      <div className="overlap-group">
      <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input
              type="checkbox"
              checked={selectedRowIds.length === dummyData.length}
              onChange={handleSelectAll}
            /></th>
                                            <th>Name</th>
                                            
                                            <th>Phone Number</th>
                                            <th>Date & Time</th>
                                            <th>People</th>
                                            <th>Table Type</th>
                                            <th>Status</th>
                                            
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div
                                                        onClick={() => handleRowSelect(item.id)}
                                                        className={`select-box ${selectedRowIds.includes(item.id) ? "selected" : ""}`}
                                                    >
                                                        {selectedRowIds.includes(item.id) ? "✓" : ""}
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.phoneNumber}</td>
                                                <td>{item.datetime}</td>
                                                <td>{item.people}</td>
                                                <td>{item.tabletype}</td>
                                                <td>
                                                    <select
                                                        value={item.status}
                                                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                                        className={`status-dropdown ${selectedRowIds.includes(item.id) ? "selected" : ""}`}
                                                    >
                                                        <option value="Requested">Active</option>
                                                        <option value="Unpaid">Waiting</option>
                                                        <option value="Reserved">Inactive</option>
                                                        <option value="Rejected">Active</option>
                                                        <option value="Cancelled">Active</option>
                                                    </select>
                                                </td>
                                                
                                                <td><button
                className="Notesbtn"
                onClick={() => handleShowNotes(item.notes)}
              >
                Notes
              </button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
      </div>
      

    

      <div className="rectangle-3" />
      <p className="warong-warem">
        <span className="span">Warong</span>
        <span className="text-wrapper-14">Warem</span>
      </p>

      <button className="unselect" onClick={handleUnselectAll}>Unselect</button>
      <button className="reject" onClick={handleReject}>Reject</button>
      <button className="reserve" onClick={handleReserve}>Assign & Reserve</button>
      <button className="selected">{`${selectedRowIds.length} Item/s selected`}</button>
      

      <div className="text-wrapper-18">Waiter</div>
      {showLogoutPopup && (
            <LogoutPopupCustomer onClose={handleCancelLogout} />)}

            {/* Notes Popup */}
      {showNotesPopup && (
        <div className="notes-popup">
          <div className="notes-content">
            <button className="close-notes" onClick={handleCloseNotes}>
              Close
            </button>
            <p>{selectedCustomerNotes}</p>
          </div>
        </div>
      )}
    </div>
    

  );
};

export default WaiterComs;


