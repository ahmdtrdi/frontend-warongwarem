import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPopUpCustomerPage = () => {
  return (
    <div className="booking-popup-customer-page">
      <div className="booking-popup-customer-page-child" />
      <img
        className="material-symbolstable-bar-icon"
        alt=""
        src="/materialsymbolstablebar.svg"
      />
      <div className="indoor">Indoor</div>
      <div className="notes-tidak-pake">
        Notes: Tidak pake saos, tidak pake sambal, juga tidak pake kol!!!
      </div>
      <img className="frame-icon" alt="" src="/frame.svg" />
      <b className="table-booking-request-container">
        <span>{`Table Booking Request `}</span>
        <span className="sent">Sent</span>
      </b>
      <b className="names">Geo Tumbel</b>
      <b className="b">+62 856 5624 4133</b>
      <div className="group-parent-1">
        <div className="material-symbolsdate-range-parent">
          <img
            className="material-symbolsdate-range-icon"
            alt=""
            src="/materialsymbolsdaterange.svg"
          />
          <div className="december-2023">01 December 2023 | 01:00 PM</div>
        </div>
        <div className="mdiperson-multiple-parent">
          <img
            className="material-symbolsdate-range-icon"
            alt=""
            src="/mdipersonmultiple.svg"
          />
          <div className="people">2 People</div>
        </div>
      </div>
      <div className="booking-popup-customer-page-item" />
      <div className="booking-popup-customer-page-inner" />
      <div className="line-div" />
      <div className="booking-popup-customer-page-child1" />
      <div className="done-wrapper">
        <b className="done">Done</b>
      </div>
    </div>
  );
};

export default BookingPopUpCustomerPage;
