import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupCustomerService = ({ onClose }) => {
  const handleDoneClick = useCallback(() => {
    // Call the onClose callback when "Done" is clicked
    onClose && onClose();
  }, [onClose]);

  return (
    <div className="popup-customer-service">
      <div className="popup-customer-service-child" />
      <b className="your-feedback-has-container">
        <p className="your-feedback-has">Your Feedback Has Been Sent</p>
        <p className="your-feedback-has">Thank You!</p>
      </b>
      <div className="popup-customer-service-item" />
      <div className="popup-customer-service-inner" />
      <div className="done-wrapper1" onClick={handleDoneClick}>
        <b className="done1">Done</b>
      </div>
    </div>
  );
};

export default PopupCustomerService;
