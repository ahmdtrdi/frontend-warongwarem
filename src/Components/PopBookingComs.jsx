import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingPopUpCustomerPage = ({
  date,
  time,
  people,
  tableType,
  fullName,
  phoneNumber,
  notes,
  navigate, // Menerima navigate
  setShowBookingPopup, // Menerima setShowBookingPopup
  handleDoneClick, // Menerima handleDoneClick
}) => {
  // Tambahkan state untuk 'people' dan 'tableType'
  const [peopleState, setPeopleState] = useState(people);
  const [tableTypeState, setTableTypeState] = useState(tableType);
  const [isClosing, setIsClosing] = useState(false);

  // Gunakan useEffect untuk mendengarkan perubahan pada properti 'people' dan 'tableType'
  useEffect(() => {
    setPeopleState(people);
    setTableTypeState(tableType);
  }, [people, tableType]);

  // Fungsi untuk mereset data
  const resetData = () => {
    setPeopleState("Rent the place"); // Ganti 'people' dengan "Rent the place"
    setTableTypeState("Rent the place"); // Ganti 'tableType' dengan "Rent the place"
  };

  const handleDoneClickLocal = () => {
    // Mulai animasi zoomOut
    setIsClosing(true);

    // Tunggu animasi selesai sebelum benar-benar menutup pop-up
    setTimeout(() => {
      // Tutup popup
      setShowBookingPopup(false);

      // Reload halaman
      navigate("/reservation", { replace: true });

      // Mereset data
      resetData();

      // Panggil handleDoneClick dari props
      handleDoneClick();

      // Reset isClosing
      setIsClosing(false);
    }, 500); // Durasi animasi (sesuaikan dengan durasi animasi CSS Anda)
  };

  return (
    <div
      className={`booking-popup-customer-page ${isClosing ? "closing" : ""}`}
    >
      <div className="booking-popup-customer-page-child" />
      <img
        className="material-symbolstable-bar-icon-1"
        alt=""
        src="/materialsymbolstablebar.svg"
      />
      <div className="indoor">{tableTypeState}</div>
      <div className="notes-tidak-pake">Notes: {notes}</div>
      <img className="frame-icon" alt="" src="/frame.svg" />
      <b className="table-booking-request-container">
        <span>{`Table Booking Request `}</span>
        <span className="sent">Sent</span>
      </b>
      <div class="container-1">
        <b className="names">{fullName}</b>
        <b className="b">{phoneNumber}</b>
      </div>
      <div className="group-parent-1">
        <div className="material-symbolsdate-range-parent">
          <img
            className="material-symbolsdate-range-icon-1"
            alt=""
            src="/materialsymbolsdaterange.svg"
          />
          <div className="december-2023">{`${date} | ${time}`}</div>
        </div>
        <div className="mdiperson-multiple-parent">
          <img
            className="material-symbolsdate-range-icon-2"
            alt=""
            src="/mdipersonmultiple.svg"
          />
          <div className="people">{`${peopleState} People`}</div>
        </div>
      </div>
      <div className="booking-popup-customer-page-item" />
      <div className="booking-popup-customer-page-inner" />
      <div className="line-div" />
      <div className="booking-popup-customer-page-child1" />
      <div className="done-wrapper" onClick={handleDoneClickLocal}>
        <b className="done">Done</b>
      </div>
    </div>
  );
};

export default BookingPopUpCustomerPage;
