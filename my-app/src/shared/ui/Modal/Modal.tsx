import { useEffect, type ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const { overlay, modal, close } = styles;

  return ReactDOM.createPortal(
    <div className={overlay} onClick={onClose}>
      <div
        className={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={close} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
