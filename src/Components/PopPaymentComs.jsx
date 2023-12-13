import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPopupCustomer = ({ onClose }) => {
  const [animationClass, setAnimationClass] = useState("zoomIn");

  const handleBackClick = () => {
    setAnimationClass("zoomOut");
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 500); // same duration as the animation
  };

  return (
    <div className={`payment-popup-customer ${animationClass}`}>
      <div className="payment-popup-customer-child" />
      <img
        className="material-symbolstable-bar-icon"
        alt=""
        src="/materialsymbolstablebar.svg"
      />
      <div className="indoor6">Indoor</div>
      <div className="notes-tidak-pake-2">
        Notes: Tidak pake saos, tidak pake sambal, juga tidak pake kol!!!
      </div>
      <b className="made-indra-2">Made Indra</b>
      <b className="b-2">+62 815 2710 9433</b>
      <div className="group-parent-3">
        <div className="material-symbolsdate-range-parent">
          <img
            className="material-symbolsdate-range-icon"
            alt=""
            src="/materialsymbolsdaterange.svg"
          />
          <div className="december-2023-2">01 December 2023 | 01:00 PM</div>
        </div>
        <div className="mdiperson-multiple-parent">
          <img
            className="material-symbolsdate-range-icon"
            alt=""
            src="/mdipersonmultiple.svg"
          />
          <div className="people7">2 People</div>
        </div>
      </div>
      <div className="payment-popup-customer-item" />
      <div className="payment-popup-customer-inner" />
      <div className="line-div-2" />
      <div className="payment-popup-customer-child1" />
      <div className="pay-wrapper">
        <b className="pay" onClick={handleBackClick}>
          Pay
        </b>{" "}
      </div>
      <div className="reservation-cost-rp200000-wrapper">
        <b className="reservation-cost">Reservation Cost = Rp.200.000,-</b>
      </div>
    </div>
  );
};

export default PaymentPopupCustomer;
