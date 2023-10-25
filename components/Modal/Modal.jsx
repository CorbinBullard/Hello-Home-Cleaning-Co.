import { useState } from "react";
import './Modal.css'

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <button className="modal-close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;