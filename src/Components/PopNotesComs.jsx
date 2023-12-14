import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Transition } from "react-transition-group";

// Durasi animasi
const duration = 300;

// Style default dan transisi
const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "scale(0)",
};

const transitionStyles = {
  entering: { transform: "scale(0)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(1)" },
  exited: { transform: "scale(0)" },
};

const NotesPopupCustomer = ({ onClose }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  const handleBackClick = () => {
    setInProp(false);
    if (onClose) {
      setTimeout(onClose, duration);
    }
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          className="notes-popup-customer"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="notes-popup-customer-child" />
          <img
            className="material-symbolstable-bar-icon"
            alt=""
            src="/materialsymbolstablebar.svg"
          />
          <div className="indoor5">Indoor</div>
          <div className="notes-tidak-pake-1">
            Notes: Tidak pake saos, tidak pake sambal, juga tidak pake kol!!!
          </div>
          <b className="made-indra-1">Made Indra</b>
          <b className="b-1">+62 815 2710 9433</b>
          <div className="group-parent-2">
            <div className="material-symbolsdate-range-parent">
              <img
                className="material-symbolsdate-range-icon"
                alt=""
                src="/materialsymbolsdaterange.svg"
              />
              <div className="december-2023-1">18 December 2023 | 10:00 AM</div>
            </div>
            <div className="mdiperson-multiple-parent">
              <img
                className="material-symbolsdate-range-icon"
                alt=""
                src="/mdipersonmultiple.svg"
              />
              <div className="people6">3 People</div>
            </div>
          </div>
          <div className="notes-popup-customer-item" />
          <div className="notes-popup-customer-inner" />
          <div className="line-div-1" />
          <div className="notes-popup-customer-child1" />
          <div className="back-wrapper">
            <b className="back" onClick={handleBackClick}>
              Back
            </b>{" "}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default NotesPopupCustomer;
