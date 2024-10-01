import React, { ReactNode, useState, useEffect } from 'react';
import './modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  overlay?: boolean;
  position?:
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
}

let zIndexCounter = 1000;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  overlay = true,
  position = 'center'
}) => {
  const [zIndex, setZIndex] = useState(zIndexCounter);

  useEffect(() => {
    if (isOpen) {
      setZIndex(++zIndexCounter);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal ${overlay ? 'modal-overlay' : ''}`} style={{ zIndex }}>
      <div className={`modal-content ${position}`}>
        <div className="modal-header">
          {title && <h2>{title}</h2>}
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
