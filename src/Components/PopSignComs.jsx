import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PopupSignUp = () => {
  const navigate = useNavigate();
  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="popup-sign-up" style={{ position: "fixed", zIndex: 1000 }}>
      <div className="popup-sign-up-child" />
      <b className="signed-up-succesfully-container">
        <p className="signed-up-succesfully">Signed Up Succesfully!</p>
        <p className="signed-up-succesfully">Go to login page.</p>
      </b>
      <div className="popup-sign-up-item" />
      <div className="popup-sign-up-inner" />
      <div className="ok-wrapper" onClick={onFrameContainerClick}>
        <b className="ok">OK</b>
      </div>
    </div>
  );
};

export default PopupSignUp;
