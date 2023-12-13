import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPopupCustomer = ({ onClose }) => {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    // Wait for the animation to finish before closing the pop-up
    setTimeout(onClose, 300);
  }, [onClose]);

  return (
    <div className={`logout-popup-customer ${isClosing ? "closing" : ""}`}>
      <div className={`logout-popup-customer-child ${isClosing ? "closing" : ""}`} />
      <b className={`are-you-sure ${isClosing ? "closing" : ""}`}>
        Are you sure you want to log out?
      </b>
      <div className={`logout-popup-customer-item ${isClosing ? "closing" : ""}`} />
      <div className={`logout-popup-customer-inner ${isClosing ? "closing" : ""}`} />
      <div
        className={`yes-wrapper ${isClosing ? "closing" : ""}`}
        onClick={onFrameContainerClick}
      >
        <b className="yes">Yes</b>
      </div>
      <div
        className={`no-wrapper ${isClosing ? "closing" : ""}`}
        onClick={handleClose}
      >
        <b className="no">No</b>
      </div>
    </div>
  );
};

export default LogoutPopupCustomer;
